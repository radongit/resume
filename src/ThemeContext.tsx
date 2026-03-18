import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import CssBaseline from '@mui/material/CssBaseline'

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const useColorMode = () => useContext(ColorModeContext)

const getTheme = (mode: 'light' | 'dark') =>
    createTheme({
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
                            backgroundColor: mode === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.1)',
                            color: mode === 'light' ? '#333' : '#ccc',
                        },
                        '&.MuiChip-outlined:not(.MuiChip-colorPrimary):not(.MuiChip-colorSecondary)': {
                            borderColor: mode === 'light' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)',
                            color: mode === 'light' ? '#555' : '#aaa',
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
            mode,
            primary: {
                main: '#2e7d32',
            },
            secondary: {
                main: '#e65100',
            },
            background: {
                default: mode === 'light' ? '#ffffff' : '#121212',
                paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
            },
        },
        typography: {
            fontFamily: '"Inter", sans-serif',
        },
    })

export default function ColorModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<'light' | 'dark'>('light')

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode(prev => (prev === 'light' ? 'dark' : 'light')),
    }), [])

    const theme = useMemo(() => getTheme(mode), [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
