// src/theme.ts
import { createTheme } from '@mui/material/styles';
import '@fontsource/geist-sans'
import '@fontsource-variable/open-sans'


const theme = createTheme({


  palette: {
    mode: 'dark',
    primary: {
      main: '#a39fd0',
    },
    secondary: {
      main: '#e4789f',
    },
    background: {
      default: '#100f12',
      paper: '#2a2a2f',
    },
    error: {
      main: '#f15849',
    },
    warning: {
      main: '#f3b364',
    },
    info: {
      main: '#e4789f',
    },
    success: {
      main: '#76ce76',
    },
  },


  typography: {
    fontFamily: 'Open Sans Variable',
    h1: {
      fontFamily: 'Geist Sans',
    },
    h2: {
      fontFamily: 'Geist Sans',
    },
    h3: {
      fontFamily: 'Geist Sans',
    },
    h4: {
      fontFamily: 'Geist Sans',
    },
  },


  shape: {
    borderRadius: 2,
  },


  spacing: 8,
});



export default theme;