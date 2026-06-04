/**
 * SearchEmptyState — 검색 빈 결과 / 검색 전 안내 UI
 *
 * query가 빈 문자열이면 "검색 전" 안내를, 값이 있으면 "결과 없음" 안내를 표시한다.
 * 하단에 자주 찾는 카테고리 바로가기 링크를 제공한다.
 *
 * Props:
 * @param {string} query - 현재 URL q 파라미터 값 [Required]
 *   빈 문자열 → "검색어를 입력해..." 안내
 *   값 있음   → "'query'에 대한 결과가 없습니다"
 *
 * Example usage:
 * <SearchEmptyState query={urlQuery} />
 */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { categories } from '@/data/navigation';
import winterThinkingImg from '@/assets/characters/winter-thinking.webp';

const SUGGESTED_SLUGS = ['frontend', 'javascript', 'react', 'ai-vibe-coding'];

function SearchEmptyState({ query }) {
  const isEmptyQuery = !query.trim();
  const suggestedCats = categories.filter((c) =>
    SUGGESTED_SLUGS.includes(c.slug)
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 10,
        textAlign: 'center',
      }}
    >
      <Box
        component='img'
        src={winterThinkingImg}
        alt='생각하는 겨울하음'
        sx={{
          maxWidth: { xs: '160px', sm: '200px', lg: '240px' },
          width: '100%',
          height: 'auto',
          display: 'block',
          mb: 3,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />

      <Typography
        variant='h3'
        component='p'
        sx={{ mb: 1.5, fontSize: '1.25rem', fontWeight: 600 }}
      >
        {isEmptyQuery
          ? '검색어를 입력해 문서를 찾아보세요'
          : `'${query}'에 대한 결과가 없습니다`}
      </Typography>

      <Typography variant='body2' sx={{ color: 'text.secondary', mb: 5 }}>
        {isEmptyQuery
          ? '제목, 내용, 태그로 검색할 수 있습니다. 태그는 #태그명 형식으로 입력하세요.'
          : '다른 키워드로 검색하거나 태그(#태그명)를 사용해보세요.'}
      </Typography>

      {/* 자주 찾는 카테고리 */}
      <Typography
        variant='caption'
        component='p'
        sx={{ color: 'text.disabled', mb: 2 }}
      >
        자주 찾는 카테고리
      </Typography>

      <Box
        sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {suggestedCats.map((cat) => (
          <Box
            key={cat.id}
            component={Link}
            to={`/${cat.slug}`}
            sx={(theme) => ({
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              px: 2,
              py: 0.75,
              borderRadius: '8px',
              border: '1px solid',
              borderColor: theme.palette.divider,
              backgroundColor: theme.palette.background.paper,
              textDecoration: 'none',
              fontSize: '0.875rem',
              color: 'text.secondary',
              transition: 'border-color 0.15s ease, color 0.15s ease',
              '&:hover': {
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
              },
              '&:focus-visible': {
                outline: `2px solid ${theme.palette.primary.main}`,
                outlineOffset: '2px',
              },
              '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
            })}
          >
            <Box component='span' aria-hidden='true'>
              {cat.emoji}
            </Box>
            {cat.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SearchEmptyState;
