/**
 * DocPage — 개별 Markdown 문서 페이지
 *
 * URL: /:category/:section/:doc
 * 구성: Sidebar + Breadcrumb + Doc 헤더(제목 + StatusBadge) + MarkdownRenderer
 *
 * Props: 없음 (URL 파라미터로 category / section / doc slug 수신)
 */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Sidebar from '@/components/common/sidebar';
import NavigationDrawer from '@/components/common/NavigationDrawer';
import Breadcrumb from '@/components/common/breadcrumb';
import MarkdownRenderer from '@/components/markdown/MarkdownRenderer';
import CategoryBadgeLink from '@/components/ui/CategoryBadgeLink';
import StatusBadge from '@/components/ui/StatusBadge';
import NotFoundPage from '@/pages/not-found-page';
import { getDoc } from '@/utils/markdownLoader';
import { categories } from '@/data/navigation';
import { slugify } from '@/utils/slugify';

function DocPage() {
  const { category: categorySlug, section: sectionSlug, doc: docSlug } = useParams();
  // loadedKey: 로딩 완료된 파라미터 식별자. 현재 파라미터와 다르면 로딩 중으로 판단
  const [loadedKey, setLoadedKey] = useState(null);
  const [doc, setDoc] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const category = categories.find((c) => c.slug === categorySlug);
  const sectionName = category?.sections.find((s) => slugify(s) === sectionSlug);
  const currentKey = `${categorySlug}/${sectionSlug}/${docSlug}`;
  const loading = loadedKey !== currentKey;

  useEffect(() => {
    let active = true;
    getDoc(categorySlug, sectionSlug, docSlug).then((result) => {
      if (!active) return;
      setDoc(result);
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
            </>
          )}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default DocPage;
