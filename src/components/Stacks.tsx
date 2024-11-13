import Marquee from 'react-marquee-slider';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', name: 'React' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', name: 'TypeScript' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg', name: 'Nest' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', name: 'React Native' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', name: 'Figma' },
];

const LogoBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
`;

export default function TechMarquee() {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#f0f0f0', py: 2 }}>
      <Marquee
        velocity={20}
        direction="ltr" 
        scatterRandomly={false}
        resetAfterTries={0} 
        onInit={() => console.log('Marquee init')}
        onFinish={() => console.log('Marquee finish')}
      >
        {logos.map((logo, index) => (
          <LogoBox key={index}>
            <Box component="img" src={logo.src} alt={logo.name} sx={{ width: 40, height: 40 }} />
            <Typography variant="h6">{logo.name}</Typography>
          </LogoBox>
        ))}
      </Marquee>
    </Box>
  );
}
