/**
 * NavigationDrawer — 모바일 카테고리 탐색 Drawer
 *
 * nestedSidebar 카테고리는 섹션이 2단계 Accordion으로 표시되고
 * sectionDocs에 정의된 문서가 3단계 항목으로 노출된다.
 *
 * Props:
 * @param {boolean}  open                 - Drawer 열림 여부 [Required]
 * @param {function} onClose              - Drawer 닫기 핸들러 [Required]
 * @param {string}   currentCategoryId    - 현재 활성 카테고리 id [Required]
 * @param {string}   [currentSectionSlug] - 현재 활성 섹션 슬러그 [Optional]
 *
 * Example usage:
 * <NavigationDrawer
 *   open={drawerOpen}
 *   onClose={() => setDrawerOpen(false)}
 *   currentCategoryId={category.id}
 *   currentSectionSlug={sectionSlug}
 * />
 */
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { categories } from '@/data/navigation';
import { slugify } from '@/utils/slugify';

function NavigationDrawer({ open, onClose, currentCategoryId, currentSectionSlug }) {
  const location = useLocation();

  // Accordion — 한 번에 하나의 카테고리만 열림
  const [openCategoryId, setOpenCategoryId] = useState(currentCategoryId);

  // Accordion — 한 번에 하나의 섹션만 열림 (nestedSidebar용)
  const [openSectionKey, setOpenSectionKey] = useState(
    currentSectionSlug ? `${currentCategoryId}/${currentSectionSlug}` : null
  );

  useEffect(() => {
    setOpenCategoryId(currentCategoryId);
  }, [currentCategoryId]);

  useEffect(() => {
    if (!currentSectionSlug) return;
    setOpenSectionKey(`${currentCategoryId}/${currentSectionSlug}`);
  }, [currentCategoryId, currentSectionSlug]);

  const toggle = (catId) => {
    setOpenCategoryId((prev) => (prev === catId ? null : catId));
  };

  const toggleSection = (key) => {
    setOpenSectionKey((prev) => (prev === key ? null : key));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onClose(); }, [location.pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor='left'
      PaperProps={{
        id: 'mobile-navigation-drawer',
        sx: {
          width: 280,
          backgroundColor: 'background.default',
          backgroundImage: 'none',
        },
      }}
    >
      {/* Drawer 헤더 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2.5,
          minHeight: '52px',
        }}
      >
        <Typography variant='overline' component='p' sx={{ color: 'text.disabled', lineHeight: 1 }}>
          Navigation
        </Typography>

        <IconButton
          onClick={onClose}
          aria-label='메뉴 닫기'
          size='small'
          sx={{
            color: 'text.secondary',
            borderRadius: '6px',
            '&:hover': { backgroundColor: 'action.hover', color: 'text.primary' },
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'primary.main',
              outlineOffset: '2px',
            },
          }}
        >
          <CloseIcon sx={{ fontSize: '1.1rem' }} />
        </IconButton>
      </Box>

      <Divider />

      {/* 네비게이션 영역 */}
      <Box sx={{ py: 3, overflowY: 'auto', flex: 1 }}>
        <Typography variant='overline' component='p' sx={{ color: 'text.disabled', px: 2.5, mb: 1 }}>
          Categories
        </Typography>

        <Box component='nav' aria-label='카테고리 목록'>
          {categories.map((cat) => {
            const isActive = cat.id === currentCategoryId;
            const isExpanded = openCategoryId === cat.id;
            const isNested = Boolean(cat.nestedSidebar);

            return (
              <Box key={cat.id}>

                {/* 카테고리 행 */}
                <Box
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    borderLeft: '2px solid',
                    transition: 'background-color 0.1s ease',
                    ...(isActive
                      ? {
                          borderLeftColor: theme.palette.primary.main,
                          backgroundColor: theme.palette.mode === 'light' ? '#EDE8FA' : '#2A2544',
                        }
                      : {
                          borderLeftColor: 'transparent',
                          '&:hover': {
                            backgroundColor: theme.palette.mode === 'light' ? '#F6F3FE' : '#221E38',
                          },
                        }),
                    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                  })}
                >
                  <Box
                    component={Link}
                    to={`/${cat.slug}`}
                    sx={(theme) => ({
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      pl: 2.5,
                      pr: 0.5,
                      py: 0.875,
                      flex: 1,
                      minWidth: 0,
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      ...(isActive
                        ? { color: theme.palette.primary.main, fontWeight: 600 }
                        : {
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                            '&:hover': { color: theme.palette.text.primary },
                          }),
                      '&:focus-visible': {
                        outline: `2px solid ${theme.palette.primary.main}`,
                        outlineOffset: '-2px',
                      },
                    })}
                  >
                    <Box component='span' aria-hidden='true' sx={{ fontSize: '1rem', flexShrink: 0, lineHeight: 1 }}>
                      {cat.emoji}
                    </Box>
                    <Box component='span' sx={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {cat.name}
                    </Box>
                  </Box>

                  <IconButton
                    size='small'
                    onClick={() => toggle(cat.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`drawer-sections-${cat.id}`}
                    aria-label={`${cat.name} 섹션 목록 ${isExpanded ? '닫기' : '열기'}`}
                    sx={(theme) => ({
                      mr: 1,
                      flexShrink: 0,
                      borderRadius: '4px',
                      color: isActive ? theme.palette.primary.main : theme.palette.text.disabled,
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                        color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                      },
                      '&:focus-visible': {
                        outline: `2px solid ${theme.palette.primary.main}`,
                        outlineOffset: '2px',
                      },
                    })}
                  >
                    <ExpandMoreIcon
                      sx={{
                        fontSize: '1rem',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                      }}
                    />
                  </IconButton>
                </Box>

                {/* 섹션 목록 */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateRows: isExpanded ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.25s ease',
                    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                  }}
                >
                  <Box
                    id={`drawer-sections-${cat.id}`}
                    component='ul'
                    role='list'
                    aria-hidden={isExpanded ? undefined : true}
                    sx={{ overflow: 'hidden', listStyle: 'none', m: 0, p: 0 }}
                  >
                    {cat.sections.map((section) => {
                      const sectionSlug = slugify(section);

                      if (isNested) {
                        // ── 3단계 Accordion (nestedSidebar) ────────────────
                        const sectionKey = `${cat.id}/${sectionSlug}`;
                        const isSectionActive = isActive && currentSectionSlug === sectionSlug;
                        const isOnSectionPage = location.pathname === `/${cat.slug}/${sectionSlug}`;
                        const docs = cat.sectionDocs?.[section] ?? [];
                        const hasDocs = docs.length > 0;
                        const isSectionExpanded = openSectionKey === sectionKey;

                        return (
                          <Box key={section} component='li'>

                            {/* 섹션 헤더 행 */}
                            <Box
                              sx={(theme) => ({
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'background-color 0.1s ease',
                                ...(isSectionActive
                                  ? { backgroundColor: theme.palette.mode === 'light' ? '#F4F0FC' : '#241E40' }
                                  : {
                                      '&:hover': {
                                        backgroundColor: theme.palette.mode === 'light' ? '#F6F3FE' : '#221E38',
                                      },
                                    }),
                                '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                              })}
                            >
                              <Box
                                component={Link}
                                to={`/${cat.slug}/${sectionSlug}`}
                                aria-current={isOnSectionPage ? 'page' : undefined}
                                sx={(theme) => ({
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 1.5,
                                  pl: 4.5,
                                  pr: hasDocs ? 0.5 : 2.5,
                                  py: 0.875,
                                  flex: 1,
                                  minWidth: 0,
                                  textDecoration: 'none',
                                  fontSize: '0.8125rem',
                                  lineHeight: 1.5,
                                  fontWeight: isSectionActive ? 600 : 400,
                                  color: isSectionActive
                                    ? theme.palette.primary.main
                                    : theme.palette.text.secondary,
                                  '&:hover': { color: theme.palette.text.primary },
                                  '&:focus-visible': {
                                    outline: `2px solid ${theme.palette.primary.main}`,
                                    outlineOffset: '-2px',
                                  },
                                })}
                              >
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
                                <Box component='span' sx={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                  {section}
                                </Box>
                              </Box>

                              {hasDocs && (
                                <IconButton
                                  size='small'
                                  onClick={() => toggleSection(sectionKey)}
                                  aria-expanded={isSectionExpanded}
                                  aria-label={`${section} 문서 목록 ${isSectionExpanded ? '닫기' : '열기'}`}
                                  sx={(theme) => ({
                                    mr: 1,
                                    flexShrink: 0,
                                    borderRadius: '4px',
                                    color: isSectionActive
                                      ? theme.palette.primary.main
                                      : theme.palette.text.disabled,
                                    '&:hover': {
                                      backgroundColor: theme.palette.action.hover,
                                      color: isSectionActive
                                        ? theme.palette.primary.main
                                        : theme.palette.text.primary,
                                    },
                                    '&:focus-visible': {
                                      outline: `2px solid ${theme.palette.primary.main}`,
                                      outlineOffset: '2px',
                                    },
                                  })}
                                >
                                  <ExpandMoreIcon
                                    sx={{
                                      fontSize: '0.875rem',
                                      transform: isSectionExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                      transition: 'transform 0.25s ease',
                                      '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                                    }}
                                  />
                                </IconButton>
                              )}
                            </Box>

                            {/* 문서 목록 (3단계) */}
                            {hasDocs && (
                              <Box
                                sx={{
                                  display: 'grid',
                                  gridTemplateRows: isSectionExpanded ? '1fr' : '0fr',
                                  transition: 'grid-template-rows 0.25s ease',
                                  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                                }}
                              >
                                <Box
                                  component='ul'
                                  role='list'
                                  aria-hidden={isSectionExpanded ? undefined : true}
                                  sx={{ overflow: 'hidden', listStyle: 'none', m: 0, p: 0 }}
                                >
                                  {docs.map((doc) => {
                                    const docPath = `/${cat.slug}/${sectionSlug}/${doc.slug}`;
                                    const isDocActive = location.pathname === docPath;
                                    return (
                                      <Box key={doc.slug} component='li'>
                                        <Box
                                          component={Link}
                                          to={docPath}
                                          aria-current={isDocActive ? 'page' : undefined}
                                          sx={(theme) => ({
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                            pl: 7,
                                            pr: 2.5,
                                            py: 0.625,
                                            textDecoration: 'none',
                                            fontSize: '0.75rem',
                                            lineHeight: 1.5,
                                            transition: 'background-color 0.1s ease, color 0.1s ease',
                                            ...(isDocActive
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
                                            '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                                          })}
                                        >
                                          <Box
                                            component='span'
                                            aria-hidden='true'
                                            sx={(theme) => ({
                                              width: '4px',
                                              height: '4px',
                                              borderRadius: '50%',
                                              flexShrink: 0,
                                              backgroundColor: isDocActive
                                                ? theme.palette.primary.main
                                                : 'transparent',
                                              border: `1px solid ${
                                                isDocActive
                                                  ? theme.palette.primary.main
                                                  : theme.palette.text.disabled
                                              }`,
                                            })}
                                          />
                                          <Box component='span' sx={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {doc.title}
                                          </Box>
                                        </Box>
                                      </Box>
                                    );
                                  })}
                                </Box>
                              </Box>
                            )}

                          </Box>
                        );
                      }

                      // ── 기존 2단계 섹션 링크 ──────────────────────────────
                      const sectionDirectLink = cat.sectionLinks?.[section];
                      const sectionLink = sectionDirectLink ?? `/${cat.slug}/${sectionSlug}`;
                      const isSectionActive = sectionDirectLink
                        ? location.pathname === sectionDirectLink
                        : isActive && currentSectionSlug === sectionSlug;

                      return (
                        <Box key={section} component='li'>
                          <Box
                            component={Link}
                            to={sectionLink}
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
                              '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                            })}
                          >
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
    </Drawer>
  );
}

export default NavigationDrawer;
