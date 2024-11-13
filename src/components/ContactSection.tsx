import { Box, Button, Typography } from '@mui/material';
import bolas from '../assets/bolas.png';
import titulo2 from '../assets/titulo2.png';

export default function ContactSection() {
  return (
    <Box id="sobre-nos" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, py: 8, px: 4, alignItems: 'center', textAlign: { xs: 'center', md: 'left' } }}>

      <Box component="img" src={bolas} alt="contact" sx={{ width: { xs: '80%', md: 50 }, height: { xs: 'auto', md: 30 }, marginBottom: { xs: 4, md: 0 }, marginRight: { md: 4 } }} />

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
        <Box sx={{ ml: { md: 4 }, mb: { xs: 4, md: 0 }, width: { xs: '100%', md: 'auto' } }}>
          <Typography sx={{ fontSize: '25px', fontWeight: 'bold', mb: 2 }}>
            Somos um time de desenvolvedores<br />
            cearenses apaixonados por tecnologia. Somos estudantes especializados na<br />
            criação de aplicativos sob medida, transformando suas ideias em realidade.<br />
            Nosso foco é no bem-estar dos nossos clientes,<br />
            tornando suas ideias possíveis.
          </Typography>
          <Button variant="contained" sx={{ mt: 5, background: '#423D3D' }}  onClick={() => window.open('https://www.instagram.com/dev_codar/', '_blank')}>
            Fale com a gente
          </Button>
        </Box>

        <Box component="img" src={titulo2} alt="titulo2" sx={{ width: { xs: '100%', md: 500 }, height: 'auto', ml: { md: 4 } }} />
      </Box>
    </Box>
  )
};
