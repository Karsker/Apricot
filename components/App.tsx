'use client'

import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});


const App = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
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
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    // mode: 'dark'
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default App