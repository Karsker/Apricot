'use client';





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
  palette: {
    mode: prefersDarkMode ? 'dark' : 'light'
  }
});

export default theme;