'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',

    h1: {
      fontFamily: 'var(--font-roboto)', 
        fontWeight: 700,
        fontSize: '2rem',
    },
    body1: {
      fontFamily: 'var(--font-roboto)',
      fontWeight: 400,
      fontSize: '1rem',
    },
    
    
  },
});

export default theme;
