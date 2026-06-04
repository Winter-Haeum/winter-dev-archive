/**
 * NotFoundPage — 404 페이지
 *
 * Props: 없음
 *
 * Example usage:
 * <Route path='*' element={<NotFoundPage />} />
 */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import winterErrorImg from '@/assets/characters/winter-error.webp';

function NotFoundPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <Box
        component='main'
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          py: 8,
          px: 2,
          textAlign: 'center',
        }}
      >
        <Box
          component='img'
          src={winterErrorImg}
          alt='당황한 겨울하음'
          sx={{
            maxWidth: { xs: '220px', sm: '260px', lg: '320px' },
            width: '100%',
            height: 'auto',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none',
            // winter-error.webp는 1024×1536(2:3) 포맷으로 하단 투명 영역이 존재.
            // 렌더 높이(lg: 480px)에서 투명 여백(~80px)만큼 음수 마진으로 보정.
            mb: { xs: 0, sm: -6, lg: -10 },
          }}
        />

        <Typography
          variant='h1'
          component='p'
          aria-hidden='true'
          sx={{
            fontSize: { xs: '4rem', md: '6rem' },
            fontWeight: 700,
            color: 'text.disabled',
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <Typography variant='h4' component='h1' sx={{ color: 'text.primary' }}>
          페이지를 찾을 수 없습니다
        </Typography>

        <Typography variant='body2' sx={{ color: 'text.secondary', maxWidth: '36ch' }}>
          요청하신 페이지가 존재하지 않거나 아직 준비 중입니다.
        </Typography>

        <Button
          component={Link}
          to='/'
          variant='contained'
          sx={{ mt: 1 }}
        >
          홈으로 돌아가기
        </Button>
      </Box>

      <Footer />
    </Box>
  );
}

export default NotFoundPage;
