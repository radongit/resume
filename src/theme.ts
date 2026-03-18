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
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    letterSpacing: '0.01em',
                    borderRadius: 8,
                    transition: 'transform 0.15s, box-shadow 0.15s',
                    '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    },
                    '&.MuiChip-filled:not(.MuiChip-colorPrimary):not(.MuiChip-colorSecondary)': {
                        backgroundColor: 'rgba(0,0,0,0.06)',
                        color: '#333',
                    },
                    '&.MuiChip-outlined:not(.MuiChip-colorPrimary):not(.MuiChip-colorSecondary)': {
                        borderColor: 'rgba(0,0,0,0.15)',
                        color: '#555',
                    },
                    '&.MuiChip-colorPrimary': {
                        backgroundColor: '#2e7d32',
                        color: '#fff',
                        fontWeight: 600,
                    },
                    '&.MuiChip-colorPrimary.MuiChip-outlined': {
                        backgroundColor: 'transparent',
                        borderColor: '#2e7d32',
                        color: '#2e7d32',
                    },
                    '&.MuiChip-colorSecondary': {
                        backgroundColor: '#e65100',
                        color: '#fff',
                        fontWeight: 600,
                    },
                    '&.MuiChip-colorSecondary.MuiChip-outlined': {
                        backgroundColor: 'transparent',
                        borderColor: '#e65100',
                        color: '#e65100',
                    },
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