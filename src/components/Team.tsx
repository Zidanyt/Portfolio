import { Box, Typography } from '@mui/material';
import capcoda from '../assets/capcoda.jpeg';
import loogam from '../assets/pesonas/loogam.jpeg';
import hemerson from '../assets/pesonas/hemerson2.jpeg';
import zida from '../assets/pesonas/zida.jpeg';

const team = [
  { id: 1, name: 'Hemerson Rocha', role: 'Front-end', image: hemerson },
  { id: 2, name: 'Jobson Loogan', role: 'Designer', image: loogam },
  { id: 3, name: 'Zydane Teixeira', role: 'Back-end', image: zida },
];

export default function Team() {
  return (
    <Box
      id="time"
      sx={{
        py: 8,
        textAlign: 'center',
        backgroundImage: `url(${capcoda})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Typography variant="h4" sx={{ color: 'white' }}>
        Nosso Time
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        gap={{ xs: 2, sm: 4 }}
        mt={4}
      >
        {team.map((member) => (
          <Box key={member.id} textAlign="center" sx={{ width: { xs: '100%', sm: 200 } }}>
            <Box
              component="img"
              src={member.image}
              alt={member.name}
              sx={{
                width: { xs: 200, sm: 200 },
                height: { xs: 200, sm: 200 },
                objectFit: 'cover',
                borderRadius: { xs: '50%', sm: '0%' },
              }}
            />
            <Typography sx={{ color: 'white', mt: 1, fontWeight: 'bold', fontSize: { xs: '16px', sm: '18px' } }}>
              {member.name}
            </Typography>
            <Typography sx={{ color: 'white', fontSize: { xs: '14px', sm: '16px' } }}>
              {member.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
