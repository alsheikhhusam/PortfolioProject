import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700 },
    h2: { fontSize: '2.5rem', fontWeight: 600 },
    h3: { fontSize: '2rem', fontWeight: 500 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    button: { textTransform: 'none' },
  },
});

export default theme;
