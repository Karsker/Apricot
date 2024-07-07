'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
        fontSize: "3rem",
        fontWeight: 600
    },

    h2: {
        fontSize: "1.75rem",
        fontWeight: 600
    },

    h3: {
        fontSize: "1.5rem",
        fontWeight: 600
    }
  },
//   palette: {
//     primary: {
//         main: "#e95420",
//     },
//     secondary: {
//         main: "#2e74c9",
//     }
//   }
});

export default theme;