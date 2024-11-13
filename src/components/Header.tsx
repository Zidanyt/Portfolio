import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const sections = ['sobre-nos', 'Soluções', 'Contato', 'Time'];

  return (
    <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(10px)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box component="img" src={logo} alt="logo" sx={{ borderRadius: '50%', width: 50 }} />

        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {sections.map((section) => (
            <Button key={section}>
              <Link to={section.toLowerCase()} smooth={true} offset={-70} duration={500}>
                {section}
              </Link>
            </Button>
          ))}
        </Box>

        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
          <List>
            {sections.map((section) => (
              <ListItem 
                key={section} 
                component="div"
                onClick={handleDrawerToggle}
              >
                <Link to={section.toLowerCase()} smooth={true} offset={-70} duration={500}>
                  <ListItemText primary={section} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
