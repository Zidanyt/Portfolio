import { Box, Card, CardContent, Typography } from '@mui/material';
import ourServices1 from '../assets/our-services-1.png';
import ourServices2 from '../assets/our-services-2.png';
import ourServices3 from '../assets/our-services-3.png';

const services = [
  { id: 1, image: ourServices1, text: 'Desenvolvimento de aplicativos mobile' },
  { id: 2, image: ourServices2, text: 'Desenvolvimento de sites personalizados para o seu negócio' },
  { id: 3, image: ourServices3, text: 'Desenvolvimento personalizado sob medida para seu aplicativo' },
];

export default function Services() {
  return (
    <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#CCCCCC' }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white' }} gutterBottom>
        Nossos Serviços
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        {services.map((service) => (
          <Card key={service.id} sx={{ maxWidth: 345, background: '#423D3D', width: '100%' }}>
            <Box component="img" src={service.image} alt="service" sx={{ height: 150, objectFit: 'cover', marginTop: '20px' }} />
            <CardContent>
              <Typography sx={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}>
                {service.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
};

