import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
});

export default theme;
