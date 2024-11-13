import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/5588999241385', '_blank');
  };

  return (
    <Fab
      color="success"
      aria-label="whatsapp"
      onClick={handleClick}
      sx={{
        position: 'fixed',
        bottom: 30, // Ajuste a distância do botão em relação ao canto inferior
        right: 20,
        zIndex: 1000,
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
}
