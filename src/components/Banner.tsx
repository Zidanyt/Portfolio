import { Box, Button, Typography } from '@mui/material';
import banner from '../assets/banner.jpeg';

export default function Banner() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center', 
        padding: { xs: '20px', sm: '40px' },
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: { xs: '10px', sm: '20px' },
          borderRadius: '8px',
          color: '#fff',
          width: { xs: '90%', sm: '70%', md: '50%' }, 
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            lineHeight: 1.2,
          }}
        >
          Dev Codar - Sua ideia vira aplicativo ou site
        </Typography>

        <Box mt={2} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            onClick={() => window.open('https://www.instagram.com/dev_codar/', '_blank')}
            sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}
          >
            Instagram
          </Button>
          <Button
          variant="contained"
          onClick={() => window.open('https://wa.me/5588999241385', '_blank')}
          sx={{ width: { xs: '100%', sm: 'auto' } }}>
            WhatsApp
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
