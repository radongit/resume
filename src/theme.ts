import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: 'smooth',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#2e7d32', // green
        },
        secondary: {
            main: '#e65100', // orange
        },
        background: {
            default: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
    },
})

export default theme