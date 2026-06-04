/**
 * CategoryPage — 카테고리 상세 페이지
 *
 * URL: /:category
 * 구성: Sidebar + Breadcrumb + 카테고리 헤더 + Section Card Grid
 *
 * Props: 없음 (URL 파라미터로 카테고리 slug 수신)
 */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Sidebar from '@/components/common/sidebar';
import NavigationDrawer from '@/components/common/NavigationDrawer';
import Breadcrumb from '@/components/common/breadcrumb';
import SectionCard from '@/components/ui/section-card';
import NotFoundPage from '@/pages/not-found-page';
import { categories } from '@/data/navigation';

function CategoryPage() {
  const { category: categorySlug } = useParams();
  const category = categories.find((c) => c.slug === categorySlug);
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (!category) {
    return <NotFoundPage />;
  }

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
      />

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar currentCategoryId={category.id} />

        <Box
          component='main'
          sx={{ flex: 1, py: { xs: 4, md: 6 }, px: { xs: 2, md: 4 } }}
        >
          <Breadcrumb category={category} />

          {/* 카테고리 헤더 */}
          <Box
            component='section'
            aria-label='카테고리 소개'
            sx={{ mb: 6 }}
          >
            <Box
              component='span'
              aria-hidden='true'
              sx={{ fontSize: '2.5rem', lineHeight: 1, display: 'block', mb: 2 }}
            >
              {category.emoji}
            </Box>

            <Typography
              variant='h1'
              sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, mb: 1.5 }}
            >
              {category.name}
            </Typography>

            <Typography
              variant='body1'
              sx={{
                color: 'text.secondary',
                maxWidth: '60ch',
                lineHeight: 1.8,
              }}
            >
              {category.description}
            </Typography>
          </Box>

          {/* 섹션 목록 */}
          <Box component='section' aria-label='섹션 목록'>
            <Typography
              variant='overline'
              component='p'
              sx={{ color: 'text.disabled', mb: 2 }}
            >
              Sections · {category.sections.length}
            </Typography>

            <Grid container spacing={2}>
              {category.sections.map((section) => (
                <Grid key={section} size={{ xs: 12, sm: 6, md: 4 }}>
                  <SectionCard section={section} categorySlug={category.slug} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default CategoryPage;
