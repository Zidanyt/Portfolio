import { Box, Typography, Card, CardContent } from '@mui/material';
import banner from '../assets/5577128.jpg';
import imgemt1 from '../assets/a-digital-illustration-of-a-businessman-in-a-suit--E3SQ6ZGxTJCFV6mJQEtHOQ-kieTrHrrTru1FzpctYWyzQ.jpeg';
import imgemt2 from '../assets/a-digital-illustration-of-a-team-of-programmers-wo-pq-wHKjJThaijrsCJGDf7g-NRTw9GsSR4mtMCEtgqBrQw.jpeg';
import bolos from '../assets/bolas.png';

const services = [
  { id: 1, image: imgemt1, text: 'Desenvolvemos aplicativos para sua gestão de trabalho, melhorando o fluxo da sua empresa, de chatbots a aplicativos de conversas.' },
  { id: 2, image: imgemt2, text: 'Com nosso time, utilizamos as melhores ferramentas de desenvolvimento web para dar vida à sua ideia.' },
];

export default function Banner_serviço() {
  return (
    <Box
      sx={{
        height: { xs: '60vh', md: '100vh' },
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { md: 'fixed' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        py: { xs: 4, md: 0 },
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <img src={bolos} width={40} height={30} alt="logo" />
        <Typography sx={{ fontSize: '25px', fontWeight: 'bold', ml: 2 }}>Nossas Soluções</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, md: 4 },
          p: 4,
        }}
      >
        {services.map((service) => (
          <Card key={service.id} sx={{ maxWidth: 345, width: '100%', marginTop: { xs: '20px', md: '30px' } }}>
            <Box component="img" src={service.image} alt="service" sx={{ height: 350, objectFit: 'cover', width: '100%' }} />
            <CardContent>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>{service.text}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};