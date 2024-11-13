import { Box, Card, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';
import nufitpro from '../assets/projects/nufit-pro.png';
import taxasia from '../assets/projects/Taxas-ia.png';

const projects = [
  {
    id: 1,
    image: taxasia,
    title: 'Taxas IA',
    description: 'Taxas IA é um projeto que organiza e monitora as taxas e fiscalizações para o seu negócio, utilizando inteligência artificial para identificar sua localidade e informar sobre as taxas e obrigações fiscais aplicáveis.',
    tools: ['React |', 'MUI |',  'TypeScript'],
    link: 'https://taxas-ia.vercel.app/'
  },
  { 
    id: 2, 
    image: nufitpro, 
    title: 'Nufit-Pro', 
    description: 'O Nufit é um projeto desenvolvido em React Native e NestJS, com uma IA otimizada para criar dietas personalizadas para o usuário, adaptadas aos padrões de saúde e necessidades individuais.', 
    tools: ['React Native |', 'MUI |', 'Express'],
    link: 'https://github.com/Dev-Codar/NuFit-Pro'
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <Box id="soluções" sx={{ py: 20, px: { xs: 2, md: 4 }, mt: { xs: 76, md: 0 } }}>
      <Typography variant="h4" textAlign="center">
        Nossos Projetos
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        mt={4}
        gap={2}
      >
        <IconButton onClick={prev} sx={{ display: { xs: 'none', md: 'block' } }}>
          <ArrowBack />
        </IconButton>
        
        <Card sx={{ width: { xs: '100%', md: 700 }, position: 'relative' }}>
          <Tooltip followCursor title="Click para acessar" placement="top" disableHoverListener={window.innerWidth <= 600}>
            <Box
              component="a"
              href={projects[index].link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                position: 'relative', 
                display: 'block', 
                textDecoration: 'none', 
                '&:hover': { cursor: 'pointer' } 
              }}
            >
              <Box
                component="img"
                src={projects[index].image}
                alt="project"
                sx={{ 
                  width: '100%',        
                  height: { xs: 250, md: 300 }, 
                  objectFit: 'cover'    
                }}
              />
              
              <Box 
                display={{ xs: 'flex', md: 'none' }}
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  borderRadius: '16px',
                  px: 1,
                  py: 0.5,
                  fontSize: '0.8rem'
                }}
              >
                Click para acessar
              </Box>
            </Box>
          </Tooltip>
          
          <CardContent>
            <Typography>{projects[index].title}</Typography>
            <Typography>{projects[index].description}</Typography>
            <Box mt={2}>
              {projects[index].tools.map((tool) => (
                <Typography key={tool} variant="caption">
                  {tool}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>
        
        <IconButton onClick={next} sx={{ display: { xs: 'none', md: 'block' } }}>
          <ArrowForward />
        </IconButton>
      </Box>

      <Box display={{ xs: 'flex', md: 'none' }} justifyContent="center" mt={2}>
        <IconButton onClick={prev}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={next}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
}
