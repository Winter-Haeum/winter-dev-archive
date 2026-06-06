/**
 * MarkdownRenderer — Markdown → MUI 컴포넌트 렌더러
 *
 * react-markdown + remark-gfm + rehype-highlight를 조합한다.
 * 모든 MD 요소를 디자인 시스템(04/05 문서) 기준의 MUI 컴포넌트로 교체한다.
 * maxWidth: 65ch 로 본문 적정 너비를 제한한다.
 *
 * Props:
 * @param {string} content - gray-matter로 분리된 MD 본문 [Required]
 *
 * Example usage:
 * <MarkdownRenderer content={doc.content} />
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom';
import Callout from './Callout';
import CodeBlock from './CodeBlock';

// rehype-highlight 옵션 — 언어 미지정 블록은 plaintext로 처리
const rehypePlugins = [[rehypeHighlight, { ignoreMissing: true }]];
const remarkPlugins = [remarkGfm];

// 컴포넌트 맵 — 모듈 로드 시 한 번만 생성
const markdownComponents = {
  // ── 제목 (본문 영역에만 적용, 전역 레이아웃 영향 없음) ──────────────
  h1: ({ children }) => (
    <Typography
      variant='h1'
      component='h1'
      sx={{
        mt: 0,
        mb: '2rem',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800,
        lineHeight: 1.2,
      }}
    >
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography
      variant='h2'
      component='h2'
      sx={(theme) => ({
        mt: '3rem',
        mb: '1.25rem',
        fontSize: 'clamp(1.55rem, 3vw, 2rem)',
        fontWeight: 800,
        lineHeight: 1.25,
        borderBottom: `2px solid ${theme.palette.divider}`,
        pb: '0.5rem',
      })}
    >
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      variant='h3'
      component='h3'
      sx={{
        mt: '2rem',
        mb: '0.75rem',
        fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)',
        fontWeight: 700,
        lineHeight: 1.35,
      }}
    >
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography
      variant='h4'
      component='h4'
      sx={{
        mt: '1.4rem',
        mb: '0.5rem',
        fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
        fontWeight: 700,
        lineHeight: 1.4,
      }}
    >
      {children}
    </Typography>
  ),

  // ── 본문 ────────────────────────────────────────────────────────────
  p: ({ children }) => (
    <Typography
      variant='body1'
      component='p'
      sx={{ mb: 3, color: 'text.primary', fontSize: '1rem', lineHeight: 1.75 }}
    >
      {children}
    </Typography>
  ),
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
  ul: ({ children }) => (
    <Box
      component='ul'
      sx={{ mb: 3, pl: 3, color: 'text.primary', '& li': { mb: 0.5 } }}
    >
      {children}
    </Box>
  ),
  ol: ({ children }) => (
    <Box
      component='ol'
      sx={{ mb: 3, pl: 3, color: 'text.primary', '& li': { mb: 0.5 } }}
    >
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Box component='li' sx={{ lineHeight: 1.75 }}>
      {children}
    </Box>
  ),

  // ── 구분선 ──────────────────────────────────────────────────────────
  hr: () => <Divider sx={{ my: 6 }} />,

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
    <Box sx={{ mb: 3, width: '100%', overflowX: 'auto' }}>
      <Box
        component='table'
        sx={{
          borderCollapse: 'collapse',
          width: '100%',
          fontSize: '0.875rem',
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
        p: '8px 12px',
        fontWeight: 600,
        textAlign: 'left',
        color: theme.palette.mode === 'light' ? '#2C2840' : '#F0EBE3',
        borderRight: `1px solid ${theme.palette.mode === 'light' ? '#DDD5C8' : '#3C3858'}`,
        '&:last-child': { borderRight: 0 },
      })}
    >
      {children}
    </Box>
  ),
  td: ({ children }) => (
    <Box
      component='td'
      sx={(theme) => ({
        p: '8px 12px',
        color: theme.palette.mode === 'light' ? '#2C2840' : '#F0EBE3',
        borderRight: `1px solid ${theme.palette.mode === 'light' ? '#DDD5C8' : '#3C3858'}`,
        '&:last-child': { borderRight: 0 },
      })}
    >
      {children}
    </Box>
  ),
};

function MarkdownRenderer({ content }) {
  return (
    <Box sx={{ maxWidth: '65ch', minWidth: 0 }}>
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
}

export default MarkdownRenderer;
