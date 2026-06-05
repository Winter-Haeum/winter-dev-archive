/**
 * DocPage — 개별 Markdown 문서 페이지
 *
 * URL: /:category/:section/:doc
 * 구성: Sidebar + Breadcrumb + Doc 헤더(제목 + StatusBadge) + MarkdownRenderer
 *
 * Props: 없음 (URL 파라미터로 category / section / doc slug 수신)
 */
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Sidebar from '@/components/common/sidebar';
import NavigationDrawer from '@/components/common/NavigationDrawer';
import Breadcrumb from '@/components/common/breadcrumb';
import MarkdownRenderer from '@/components/markdown/MarkdownRenderer';
import CategoryBadgeLink from '@/components/ui/CategoryBadgeLink';
import StatusBadge from '@/components/ui/StatusBadge';
import NotFoundPage from '@/pages/not-found-page';
import { getDoc, getSectionDocs } from '@/utils/markdownLoader';
import { categories } from '@/data/navigation';
import { slugify } from '@/utils/slugify';

function DocPage() {
  const { category: categorySlug, section: sectionSlug, doc: docSlug } = useParams();
  // loadedKey: 로딩 완료된 파라미터 식별자. 현재 파라미터와 다르면 로딩 중으로 판단
  const [loadedKey, setLoadedKey] = useState(null);
  const [doc, setDoc] = useState(null);
  const [sectionDocs, setSectionDocs] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const category = categories.find((c) => c.slug === categorySlug);
  const sectionName = category?.sections.find((s) => slugify(s) === sectionSlug);
  const currentKey = `${categorySlug}/${sectionSlug}/${docSlug}`;
  const loading = loadedKey !== currentKey;

  // 슬러그 정렬 기준으로 섹션 내 이전/다음 문서 계산
  const sortedDocs = [...sectionDocs].sort((a, b) => a.slug.localeCompare(b.slug));
  const docIndex = sortedDocs.findIndex((d) => d.slug === docSlug);
  const prevDoc = docIndex > 0 ? sortedDocs[docIndex - 1] : null;
  const nextDoc = docIndex < sortedDocs.length - 1 ? sortedDocs[docIndex + 1] : null;

  useEffect(() => {
    let active = true;
    Promise.all([
      getDoc(categorySlug, sectionSlug, docSlug),
      getSectionDocs(categorySlug, sectionSlug),
    ]).then(([result, docs]) => {
      if (!active) return;
      setDoc(result);
      setSectionDocs(docs);
      setLoadedKey(`${categorySlug}/${sectionSlug}/${docSlug}`);
    }).catch(() => {
      if (!active) return;
      setLoadedKey(`${categorySlug}/${sectionSlug}/${docSlug}`);
    });
    return () => { active = false; };
  }, [categorySlug, sectionSlug, docSlug]);

  if (!category || !sectionName) return <NotFoundPage />;
  if (!loading && !doc) return <NotFoundPage />;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        onMenuClick={() => setDrawerOpen(true)}
        isDrawerOpen={drawerOpen}
      />
      <NavigationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        currentCategoryId={category.id}
        currentSectionSlug={sectionSlug}
      />

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar currentCategoryId={category.id} currentSectionSlug={sectionSlug} />

        <Box
          component='main'
          sx={{ flex: 1, py: { xs: 4, md: 6 }, px: { xs: 2, md: 6 } }}
        >
          {/* ← 섹션으로 돌아가기 */}
          <Box
            component={Link}
            to={`/${categorySlug}/${sectionSlug}`}
            sx={(theme) => ({
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              textDecoration: 'none',
              color: 'text.secondary',
              fontSize: '0.875rem',
              mb: 2,
              transition: 'color 0.15s ease',
              '&:hover': { color: theme.palette.primary.main },
              '&:focus-visible': {
                outline: `2px solid ${theme.palette.primary.main}`,
                outlineOffset: '2px',
                borderRadius: '2px',
              },
              '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
            })}
          >
            <ArrowBackIcon sx={{ fontSize: '0.875rem' }} />
            {sectionName}으로 돌아가기
          </Box>

          {/* 현재 위치 Breadcrumb */}
          <Breadcrumb
            category={category}
            section={sectionName}
            sectionSlug={sectionSlug}
            doc={loading ? '...' : doc?.frontmatter.title}
          />

          {loading ? (
            /* 로딩 중 — 제목 영역 스켈레톤 */
            <Box sx={{ mb: 6 }}>
              <Box
                sx={(theme) => ({
                  height: '2.25rem',
                  width: '60%',
                  borderRadius: '6px',
                  backgroundColor: theme.palette.divider,
                  mb: 2,
                })}
              />
              <Box
                sx={(theme) => ({
                  height: '1.5rem',
                  width: '30%',
                  borderRadius: '6px',
                  backgroundColor: theme.palette.divider,
                })}
              />
            </Box>
          ) : (
            <>
              {/* Doc 헤더: 카테고리 뱃지 + 제목 + StatusBadge */}
              <Box component='section' aria-label='문서 헤더' sx={{ mb: 5 }}>

                <CategoryBadgeLink category={category} />

                {/* 제목 + StatusBadge */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    flexWrap: 'wrap',
                  }}
                >
                  <Typography
                    variant='h1'
                    sx={{ flex: 1, fontSize: { xs: '1.75rem', md: '2.25rem' } }}
                  >
                    {doc.frontmatter.title}
                  </Typography>
                  <StatusBadge status={doc.frontmatter.status} />
                </Box>

                {/* 날짜 */}
                {doc.frontmatter.date && (
                  <Typography
                    variant='caption'
                    sx={{ color: 'text.disabled', mt: 1, display: 'block' }}
                  >
                    {doc.frontmatter.date}
                  </Typography>
                )}
              </Box>

              {/* Markdown 본문 */}
              <MarkdownRenderer content={doc.content} />

              {/* 이전 / 다음 문서 내비게이션 */}
              {(prevDoc || nextDoc) && (
                <>
                  <Divider sx={{ mt: 8, mb: 4 }} />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 2,
                    }}
                  >
                    {/* 이전 문서 */}
                    {prevDoc ? (
                      <Box
                        component={Link}
                        to={`/${categorySlug}/${sectionSlug}/${prevDoc.slug}`}
                        sx={(theme) => ({
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          textDecoration: 'none',
                          color: 'text.primary',
                          border: '1px solid',
                          borderColor: theme.palette.divider,
                          borderRadius: '10px',
                          px: 2.5,
                          py: 2,
                          flex: 1,
                          maxWidth: '48%',
                          transition: 'border-color 0.15s ease, background-color 0.15s ease',
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            backgroundColor: theme.palette.mode === 'light' ? '#F7F4FF' : '#1E1A30',
                          },
                          '&:focus-visible': {
                            outline: `2px solid ${theme.palette.primary.main}`,
                            outlineOffset: '3px',
                          },
                          '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                        })}
                      >
                        <ArrowBackIcon sx={(theme) => ({ fontSize: '1rem', color: theme.palette.text.disabled, flexShrink: 0 })} />
                        <Box sx={{ minWidth: 0 }}>
                          <Typography variant='caption' sx={{ color: 'text.disabled', display: 'block' }}>
                            이전 문서
                          </Typography>
                          <Typography
                            variant='body2'
                            sx={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                          >
                            {prevDoc.frontmatter.title}
                          </Typography>
                        </Box>
                      </Box>
                    ) : (
                      <Box sx={{ flex: 1, maxWidth: '48%' }} />
                    )}

                    {/* 다음 문서 */}
                    {nextDoc ? (
                      <Box
                        component={Link}
                        to={`/${categorySlug}/${sectionSlug}/${nextDoc.slug}`}
                        sx={(theme) => ({
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          gap: 1.5,
                          textDecoration: 'none',
                          color: 'text.primary',
                          border: '1px solid',
                          borderColor: theme.palette.divider,
                          borderRadius: '10px',
                          px: 2.5,
                          py: 2,
                          flex: 1,
                          maxWidth: '48%',
                          textAlign: 'right',
                          transition: 'border-color 0.15s ease, background-color 0.15s ease',
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            backgroundColor: theme.palette.mode === 'light' ? '#F7F4FF' : '#1E1A30',
                          },
                          '&:focus-visible': {
                            outline: `2px solid ${theme.palette.primary.main}`,
                            outlineOffset: '3px',
                          },
                          '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                        })}
                      >
                        <Box sx={{ minWidth: 0 }}>
                          <Typography variant='caption' sx={{ color: 'text.disabled', display: 'block' }}>
                            다음 문서
                          </Typography>
                          <Typography
                            variant='body2'
                            sx={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                          >
                            {nextDoc.frontmatter.title}
                          </Typography>
                        </Box>
                        <ArrowForwardIcon sx={(theme) => ({ fontSize: '1rem', color: theme.palette.text.disabled, flexShrink: 0 })} />
                      </Box>
                    ) : (
                      <Box sx={{ flex: 1, maxWidth: '48%' }} />
                    )}
                  </Box>
                </>
              )}
            </>
          )}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default DocPage;
