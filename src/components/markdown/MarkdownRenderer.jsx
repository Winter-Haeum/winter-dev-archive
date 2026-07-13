/**
 * MarkdownRenderer — Markdown → MUI 컴포넌트 렌더러
 *
 * react-markdown + remark-gfm + rehype-raw + rehype-highlight 조합.
 * 모든 MD 요소를 디자인 시스템 기준의 MUI 컴포넌트로 교체한다.
 * maxWidth: 65ch 로 본문 적정 너비를 제한한다.
 *
 * Props:
 * @param {string} content - frontmatter 제거 후 MD 본문 [Required]
 * @param {string} docId   - localStorage 네임스페이스용 문서 식별자 [Optional]
 *                           형식: "categorySlug/sectionSlug/docSlug"
 *                           제공 시 체크포인트 항목이 인터랙티브하게 동작하며
 *                           클릭 상태가 문서별로 독립 저장된다.
 *
 * Example usage:
 * <MarkdownRenderer content={doc.content} docId="ai-vibe-coding/lesson-1/1-1-web-basics" />
 */
import React, { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom';
import Callout from './Callout';
import CodeBlock from './CodeBlock';

// rehype-raw → rehype-highlight 순서 필수: raw HTML 파싱 후 코드 하이라이트 적용
const rehypePlugins = [rehypeRaw, [rehypeHighlight, { ignoreMissing: true }]];
const remarkPlugins = [remarkGfm];

/**
 * CheckboxItem — 인터랙티브 체크포인트 체크박스
 * localStorage에 문서별 독립 키로 체크 상태를 저장·복원한다.
 *
 * @param {string}  storageKey      - localStorage 키 [Required]
 * @param {boolean} initialChecked  - 마크다운 원문의 초기 체크 상태 [Required]
 */
function CheckboxItem({ storageKey, initialChecked }) {
  const [checked, setChecked] = useState(() => {
    try {
      const v = localStorage.getItem(storageKey);
      return v !== null ? v === 'true' : !!initialChecked;
    } catch {
      return !!initialChecked;
    }
  });

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    try { localStorage.setItem(storageKey, String(next)); } catch {}
  };

  return (
    <Box
      component='input'
      type='checkbox'
      checked={checked}
      onChange={toggle}
      aria-label='체크포인트 항목'
      sx={(theme) => ({
        accentColor: theme.palette.primary.main,
        width: '13px',
        height: '13px',
        cursor: 'pointer',
        flexShrink: 0,
        mt: '2px',
      })}
    />
  );
}

// BASE_URL: dev='/', prod='/winter-dev-archive/'
// processedContent 에서 text-level 치환으로 이미지 경로를 수정한다 (img component override 없음)
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

// 컴포넌트 맵 — 모듈 로드 시 한 번만 생성
const markdownComponents = {
  // ── 제목 (본문 영역에만 적용, 전역 레이아웃 영향 없음) ──────────────
  h1: ({ children }) => (
    <Box
      component='h1'
      sx={{
        mt: 0,
        mb: '0.75rem',
        fontSize: { xs: '1.45rem', md: '1.65rem' },
        fontWeight: 700,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
        color: 'text.primary',
        fontFamily: 'inherit',
      }}
    >
      {children}
    </Box>
  ),
  h2: ({ children }) => (
    <Box
      component='h2'
      sx={(theme) => ({
        // mt는 코드블록(1.5rem)/표(1.2rem)/wda-fgrid·wda-steps(1.6rem) 등 콘텐츠 요소의
        // margin-bottom보다 항상 커야 마진 병합(collapse) 후에도 "새 섹션" 느낌을 주는
        // 넉넉한 간격이 보장된다 (2026-07 개편, 여백 정책 참고).
        mt: '3rem',
        mb: '0.6rem',
        fontSize: { xs: '1.18rem', md: '1.28rem' },
        fontWeight: 700,
        lineHeight: 1.35,
        letterSpacing: '-0.005em',
        color: 'text.primary',
        fontFamily: 'inherit',
        borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(43,37,32,0.14)' : 'rgba(240,235,227,0.10)'}`,
        paddingBottom: '0.45rem',
      })}
    >
      {children}
    </Box>
  ),
  h3: ({ children }) => (
    <Box
      component='h3'
      sx={(theme) => ({
        mt: '2.6rem',
        mb: '0.35rem',
        fontSize: { xs: '1.02rem', md: '1.08rem' },
        fontWeight: 600,
        lineHeight: 1.4,
        fontFamily: 'inherit',
        color: theme.palette.mode === 'light' ? 'rgba(28,24,40,0.86)' : 'rgba(240,235,227,0.86)',
      })}
    >
      {children}
    </Box>
  ),
  h4: ({ children }) => (
    <Box
      component='h4'
      sx={(theme) => ({
        mt: '2.1rem',
        mb: '0.3rem',
        fontSize: { xs: '0.94rem', md: '0.97rem' },
        fontWeight: 600,
        lineHeight: 1.4,
        fontFamily: 'inherit',
        color: theme.palette.mode === 'light' ? 'rgba(28,24,40,0.78)' : 'rgba(240,235,227,0.75)',
      })}
    >
      {children}
    </Box>
  ),

  // ── 본문 ────────────────────────────────────────────────────────────
  p: ({ node, children }) => {
    // CSS :has()가 구형 브라우저에서 무시되는 문제를 피하기 위해, "이모지+볼드 단독 문단"
    // (본문 중간 미니 소제목 역할)을 AST 레벨에서 직접 판별해 여백을 인라인으로 적용한다
    // (2026-07 개편, p:has(> strong:only-child) CSS 규칙 대체).
    const elementChildren = (node?.children || []).filter((c) => c.type === 'element');
    const isLoneStrong = elementChildren.length === 1 && elementChildren[0].tagName === 'strong';
    return (
      <Box
        component='p'
        sx={{
          mt: isLoneStrong ? '2.2rem' : undefined,
          mb: isLoneStrong ? '0.2rem' : '0.9rem',
          color: 'text.primary',
          fontSize: { xs: '0.93rem', md: '0.95rem' },
          lineHeight: 1.75,
          fontFamily: 'inherit',
        }}
      >
        {children}
      </Box>
    );
  },
  strong: ({ children }) => (
    <Box component='strong' sx={{ fontWeight: 700, color: 'text.primary' }}>
      {children}
    </Box>
  ),
  em: ({ children }) => (
    <Box component='em' sx={{ fontStyle: 'italic' }}>
      {children}
    </Box>
  ),

  // ── 링크 ────────────────────────────────────────────────────────────
  // 외부 링크: MuiLink + target="_blank"
  // 내부 링크: React Router Link — 상대 경로(./slug)를 SPA 라우팅으로 올바르게 해석
  a: ({ href, children }) => {
    const linkSx = {
      color: 'primary.main',
      textDecorationColor: 'primary.light',
      '&:hover': { color: 'primary.dark' },
      '&:focus-visible': {
        outline: '2px solid',
        outlineColor: 'primary.main',
        outlineOffset: '2px',
        borderRadius: '2px',
      },
    };
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return (
        <MuiLink href={href} target='_blank' rel='noopener noreferrer' sx={linkSx}>
          {children}
        </MuiLink>
      );
    }
    return (
      <MuiLink component={RouterLink} to={href ?? ''} sx={linkSx}>
        {children}
      </MuiLink>
    );
  },

  // ── 리스트 ──────────────────────────────────────────────────────────
  ul: ({ children, className }) => {
    const isTaskList = className === 'contains-task-list';
    return (
      <Box
        component='ul'
        sx={{
          mb: isTaskList ? 2 : 3,
          pl: isTaskList ? 0 : 3,
          color: 'text.primary',
          '& li': { mb: isTaskList ? 0.3 : 0.5 },
          ...(isTaskList && { listStyle: 'none' }),
        }}
      >
        {children}
      </Box>
    );
  },
  ol: ({ children }) => (
    <Box
      component='ol'
      sx={{ mb: 3, pl: 3, color: 'text.primary', '& li': { mb: 0.5 } }}
    >
      {children}
    </Box>
  ),
  li: ({ children, className }) => {
    const isTask = className === 'task-list-item';
    return (
      <Box
        component='li'
        sx={{
          lineHeight: isTask ? 1.6 : 1.75,
          ...(isTask && {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.45rem',
            listStyleType: 'none',
            fontSize: '0.9rem',
          }),
        }}
      >
        {children}
      </Box>
    );
  },

  // ── 콘텐츠 이미지 (다이어그램/스크린샷) ───────────────────────────────
  // /images/content/ 경로의 학습 도식 이미지에만 카드형 프레임(border·shadow·배경)을 적용한다.
  // /images/decoration/, /images/character/ 등 스티커·캐릭터 오버레이 이미지는 그대로 통과시킨다.
  img: ({ src, alt, style, ...rest }) => {
    const isContentImage = typeof src === 'string' && src.includes('/images/content/');
    if (!isContentImage) {
      return <img src={src} alt={alt} style={style} {...rest} />;
    }
    return (
      <Box
        component='img'
        src={src}
        alt={alt}
        sx={(theme) => {
          const isLight = theme.palette.mode === 'light';
          return {
            ...style,
            boxSizing: 'border-box',
            padding: '10px',
            borderRadius: '14px',
            // 라이트: 문서 배경(default)과 이어지는 톤 + 아주 옅은 border/shadow → "깔끔한 삽입" 느낌
            // 다크: paper 톤 카드 + 뚜렷한 shadow → 흰 이미지가 자연스럽게 뜬 카드 느낌
            border: `1px solid ${isLight ? 'rgba(43,37,32,0.08)' : theme.palette.divider}`,
            backgroundColor: isLight ? theme.palette.background.default : theme.palette.background.paper,
            boxShadow: isLight
              ? '0 1px 2px rgba(43,37,32,0.05)'
              : '0 6px 22px rgba(0,0,0,0.42)',
          };
        }}
        {...rest}
      />
    );
  },

  // ── 구분선 ──────────────────────────────────────────────────────────
  hr: () => (
    <Divider
      sx={(theme) => ({
        my: '2rem',
        borderColor: theme.palette.mode === 'light' ? 'rgba(43,37,32,0.12)' : 'rgba(240,235,227,0.10)',
      })}
    />
  ),

  // ── Callout (blockquote) ────────────────────────────────────────────
  blockquote: ({ children }) => <Callout>{children}</Callout>,

  // ── 코드 블록 (pre > code) ──────────────────────────────────────────
  pre: ({ children }) => {
    const childArray = React.Children.toArray(children);
    const codeEl = childArray[0];
    const className = codeEl?.props?.className ?? '';
    const langMatch = className.match(/language-(\w+)/);
    const language = langMatch ? langMatch[1] : 'text';
    return <CodeBlock language={language}>{children}</CodeBlock>;
  },

  // ── 코드 인라인 vs 블록 분기 ────────────────────────────────────────
  // sx 콜백: ThemeContext에서 테마를 읽어 다크 모드 자동 대응
  code: ({ className, children }) => {
    // 블록 코드: pre 안의 code → className에 'language-' 포함
    if (/\blanguage-/.test(className ?? '')) {
      return <code className={className}>{children}</code>;
    }
    // 인라인 코드
    return (
      <Box
        component='code'
        sx={(theme) => ({
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          fontSize: '0.875em',
          backgroundColor: theme.palette.mode === 'light' ? '#EAE3D8' : '#2E2A48',
          color: theme.palette.mode === 'light' ? '#5E3EA8' : '#C8B8F0',
          borderRadius: '4px',
          px: '6px',
          py: '2px',
          lineHeight: 1,
        })}
      >
        {children}
      </Box>
    );
  },

  // ── 표 (remark-gfm) ─────────────────────────────────────────────────
  // sx 콜백: ThemeContext에서 테마를 읽어 다크 모드 자동 대응
  table: ({ children }) => (
    <Box sx={{ mb: '1.2rem', width: '100%', overflowX: 'auto' }}>
      <Box
        component='table'
        sx={{
          borderCollapse: 'collapse',
          width: '100%',
          fontSize: '0.92rem',
          lineHeight: 1.6,
        }}
      >
        {children}
      </Box>
    </Box>
  ),
  thead: ({ children }) => (
    <Box
      component='thead'
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === 'light' ? '#F2EDE6' : '#24203A',
      })}
    >
      {children}
    </Box>
  ),
  tbody: ({ children }) => (
    <Box component='tbody'>{children}</Box>
  ),
  tr: ({ children }) => (
    <Box
      component='tr'
      sx={(theme) => ({
        borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#DDD5C8' : '#3C3858'}`,
      })}
    >
      {children}
    </Box>
  ),
  th: ({ children }) => (
    <Box
      component='th'
      sx={(theme) => ({
        p: '5px 10px',
        fontWeight: 600,
        textAlign: 'left',
        color: theme.palette.mode === 'light' ? '#2C2840' : '#F0EBE3',
        borderRight: `1px solid ${theme.palette.mode === 'light' ? '#DDD5C8' : '#3C3858'}`,
        '&:last-child': { borderRight: 0 },
        wordBreak: 'keep-all',
        overflowWrap: 'break-word',
      })}
    >
      {children}
    </Box>
  ),
  td: ({ children }) => (
    <Box
      component='td'
      sx={(theme) => ({
        p: '5px 10px',
        color: theme.palette.mode === 'light' ? '#2C2840' : '#F0EBE3',
        borderRight: `1px solid ${theme.palette.mode === 'light' ? '#DDD5C8' : '#3C3858'}`,
        '&:last-child': { borderRight: 0 },
        wordBreak: 'keep-all',
        overflowWrap: 'break-word',
      })}
    >
      {children}
    </Box>
  ),
};

function MarkdownRenderer({ content, docId = '' }) {
  // GitHub Pages sub-path 대응: /images/ → /winter-dev-archive/images/
  // BASE='' (dev) 이면 치환 불필요
  const processedContent = useMemo(
    () => (BASE ? content.replace(/src="\/images\//g, `src="${BASE}/images/`) : content),
    [content],
  );

  // input 핸들러만 docId에 의존 — docId 변경 시에만 재생성
  const components = useMemo(() => ({
    ...markdownComponents,
    input: ({ type, checked, className, node, ...rest }) => {
      // rehype-raw 경유 데모 HTML 요소 (class 있음) — 그대로 통과
      if (className) {
        if (type === 'checkbox' || type === 'radio') {
          return <input type={type} className={className} defaultChecked={!!checked} {...rest} />;
        }
        return <input type={type} className={className} {...rest} />;
      }

      // remark-gfm task list 체크박스 (class 없음, type=checkbox)
      if (type === 'checkbox') {
        if (!docId) {
          return (
            <input
              type='checkbox'
              disabled
              defaultChecked={!!checked}
              style={{ accentColor: '#8B5CF6', width: '13px', height: '13px', marginTop: '2px' }}
            />
          );
        }
        const lineNum = node?.position?.start?.line ?? 0;
        const cleanDocId = docId.replace(/\//g, '-');
        const storageKey = `wda-cp-${cleanDocId}-L${lineNum}`;
        return (
          <CheckboxItem
            key={storageKey}
            storageKey={storageKey}
            initialChecked={!!checked}
          />
        );
      }

      return <input type={type} {...rest} />;
    },
  }), [docId]);

  return (
    <Box sx={{ width: '100%', minWidth: 0, wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins}
        components={components}
      >
        {processedContent}
      </ReactMarkdown>
    </Box>
  );
}

export default MarkdownRenderer;
