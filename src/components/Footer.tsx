import { Box, Typography } from '@mui/material';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <Box id='contato' sx={{ backgroundColor: '#333' }}>
      <Typography variant="body1" sx={{ color: '#fff', fontSize: '25px', fontWeight: 'bold', marginTop: '20px', marginLeft: '20px' }}>
        Entre em contato :
      </Typography>
      
      <div style={{ display: 'flex' }}>
        {/* Logo que direciona para o Instagram */}
        <Box 
          component="img" 
          src={logo} 
          alt="logo" 
          sx={{ 
            borderRadius: '50%', 
            width: 130, 
            height: '120px', 
            marginLeft: '30px', 
            marginTop: '20px', 
            cursor: 'pointer' 
          }}
          onClick={() => window.open('https://www.instagram.com/dev_codar/', '_blank')}
        />

        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px', marginTop: '20px' }}>
          {/* Nome do Instagram que também direciona para o Instagram */}
          <Typography 
            sx={{ py: 2, color: '#fff', cursor: 'pointer' }}
            onClick={() => window.open('https://www.instagram.com/dev_codar/', '_blank')}
          >
            Instagram: Dev_Codar
          </Typography>
          <Typography sx={{ py: 2, color: '#fff' }}>WhatsApp : +55 88 9953-2742</Typography>
          {/* Nome do LinkedIn que direciona para o LinkedIn */}
          <Typography 
            sx={{ py: 2, color: '#fff', cursor: 'pointer' }}
            onClick={() => window.open('https://www.linkedin.com/in/dev-codar-3728b0323/recent-activity/all/', '_blank')}
          >
            LinkedIn: Dev Codar
          </Typography>
        </div>
      </div>

      <Box mt={6}>
        <Box sx={{ py: 4, color: '#fff' }}>
          <Box mt={1} display="flex" justifyContent="center" gap={2}>
            <Typography mt={2} variant="caption">No copyright</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
