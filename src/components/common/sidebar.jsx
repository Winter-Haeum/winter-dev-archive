/**
 * Sidebar — Accordion 카테고리 탐색 사이드바
 *
 * Stage 2: Simplified (정적 목록)
 * Stage 3: Accordion (현재 카테고리 섹션 펼침) ← 현재
 * Stage 7: Mobile Drawer 추가 예정
 *
 * Props:
 * @param {string} currentCategoryId    - 현재 활성 카테고리 id [Required]
 * @param {string} [currentSectionSlug] - 현재 활성 섹션 슬러그 [Optional]
 *
 * Example usage:
 * <Sidebar currentCategoryId='frontend' />
 * <Sidebar currentCategoryId='frontend' currentSectionSlug='html' />
 */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { categories } from '@/data/navigation';
import { slugify } from '@/utils/slugify';

function Sidebar({ currentCategoryId, currentSectionSlug }) {
  return (
    <Box
      component='aside'
      aria-label='카테고리 탐색'
      sx={(theme) => ({
        width: 260,
        flexShrink: 0,
        display: { xs: 'none', lg: 'block' },
        borderRight: '1px solid',
        borderColor: theme.palette.divider,
        position: 'sticky',
        top: '64px',
        height: 'calc(100vh - 64px)',
        overflowY: 'auto',
        py: 3,
      })}
    >
      <Typography
        variant='overline'
        component='p'
        sx={{ color: 'text.disabled', px: 2.5, mb: 1 }}
      >
        Categories
      </Typography>

      <Box component='nav' aria-label='카테고리 목록'>
        {categories.map((cat) => {
          const isActive = cat.id === currentCategoryId;

          return (
            <Box key={cat.id}>

              {/* 카테고리 헤더
                  Sidebar는 Navigation + Accordion 혼합 구조.
                  WAI-ARIA Accordion 표준(button) 대신 Link 기반 탐색을 우선.
                  aria-expanded는 제거하고 시각적 상태만 제공. */}
              <Box
                component={Link}
                to={`/${cat.slug}`}
                aria-controls={`sidebar-sections-${cat.id}`}
                sx={(theme) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 2.5,
                  py: 0.875,
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  borderLeft: '2px solid',
                  transition: 'background-color 0.1s ease, color 0.1s ease',

                  ...(isActive
                    ? {
                        borderLeftColor: theme.palette.primary.main,
                        backgroundColor: theme.palette.mode === 'light' ? '#EDE8FA' : '#2A2544',
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                      }
                    : {
                        borderLeftColor: 'transparent',
                        color: theme.palette.text.secondary,
                        fontWeight: 400,
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'light' ? '#F6F3FE' : '#221E38',
                          color: theme.palette.text.primary,
                        },
                      }),

                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: '-2px',
                  },

                  '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                  },
                })}
              >
                <Box
                  component='span'
                  aria-hidden='true'
                  sx={{ fontSize: '1rem', flexShrink: 0, lineHeight: 1 }}
                >
                  {cat.emoji}
                </Box>

                {/* flex: 1 + minWidth: 0 으로 ellipsis 정상 작동 보장 */}
                <Box
                  component='span'
                  sx={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                  {cat.name}
                </Box>

                <ExpandMoreIcon
                  aria-hidden='true'
                  sx={(theme) => ({
                    fontSize: '1rem',
                    flexShrink: 0,
                    color: isActive ? theme.palette.primary.main : theme.palette.text.disabled,
                    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                  })}
                />
              </Box>

              {/* 섹션 목록
                  grid-template-rows: 0fr ↔ 1fr 트랜지션으로 높이 하드코딩 없이 애니메이션
                  접힌 상태에서 aria-hidden='true'로 스크린 리더 접근 차단 */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateRows: isActive ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.25s ease',
                  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                }}
              >
                <Box
                  id={`sidebar-sections-${cat.id}`}
                  component='ul'
                  role='list'
                  aria-hidden={isActive ? undefined : true}
                  sx={{ overflow: 'hidden', listStyle: 'none', m: 0, p: 0 }}
                >
                  {cat.sections.map((section) => {
                    const sectionSlug = slugify(section);
                    const isSectionActive = isActive && currentSectionSlug === sectionSlug;

                    return (
                      <Box key={section} component='li'>
                        <Box
                          component={Link}
                          to={`/${cat.slug}/${sectionSlug}`}
                          aria-current={isSectionActive ? 'page' : undefined}
                          sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            pl: 5,
                            pr: 2.5,
                            py: 0.75,
                            textDecoration: 'none',
                            fontSize: '0.8125rem',
                            lineHeight: 1.5,
                            transition: 'background-color 0.1s ease, color 0.1s ease',

                            ...(isSectionActive
                              ? {
                                  color: theme.palette.primary.main,
                                  fontWeight: 600,
                                  backgroundColor: theme.palette.mode === 'light' ? '#F4F0FC' : '#241E40',
                                }
                              : {
                                  color: theme.palette.text.secondary,
                                  fontWeight: 400,
                                  '&:hover': {
                                    backgroundColor: theme.palette.mode === 'light' ? '#F6F3FE' : '#221E38',
                                    color: theme.palette.text.primary,
                                  },
                                }),

                            '&:focus-visible': {
                              outline: `2px solid ${theme.palette.primary.main}`,
                              outlineOffset: '-2px',
                            },

                            '@media (prefers-reduced-motion: reduce)': {
                              transition: 'none',
                            },
                          })}
                        >
                          {/* Active 구분용 dot — active: 채워진 원, inactive: 테두리 원 */}
                          <Box
                            component='span'
                            aria-hidden='true'
                            sx={(theme) => ({
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              flexShrink: 0,
                              backgroundColor: isSectionActive
                                ? theme.palette.primary.main
                                : 'transparent',
                              border: `1.5px solid ${
                                isSectionActive
                                  ? theme.palette.primary.main
                                  : theme.palette.text.disabled
                              }`,
                            })}
                          />

                          <Box
                            component='span'
                            sx={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                          >
                            {section}
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>

            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Sidebar;
