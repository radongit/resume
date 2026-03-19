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
                    body: {
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                    },
                    '::selection': {
                        backgroundColor: 'rgba(46,125,50,0.2)',
                        color: 'inherit',
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        fontFamily: '"DM Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '0.78rem',
                        letterSpacing: '0.02em',
                        borderRadius: 6,
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            transform: 'translateY(-1px)',
                            boxShadow: mode === 'light'
                                ? '0 3px 8px rgba(0,0,0,0.08)'
                                : '0 3px 8px rgba(0,0,0,0.3)',
                        },
                        '&.MuiChip-filled:not(.MuiChip-colorPrimary):not(.MuiChip-colorSecondary)': {
                            backgroundColor: mode === 'light' ? 'rgba(46,125,50,0.06)' : 'rgba(255,255,255,0.07)',
                            color: mode === 'light' ? '#37474f' : '#b0bec5',
                            border: `1px solid ${mode === 'light' ? 'rgba(46,125,50,0.1)' : 'rgba(255,255,255,0.06)'}`,
                        },
                        '&.MuiChip-outlined:not(.MuiChip-colorPrimary):not(.MuiChip-colorSecondary)': {
                            borderColor: mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.12)',
                            color: mode === 'light' ? '#546e7a' : '#90a4ae',
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
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontFamily: '"DM Sans", sans-serif',
                        letterSpacing: '0.01em',
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
                default: mode === 'light' ? '#ffffff' : '#0e0e0e',
                paper: mode === 'light' ? '#ffffff' : '#161616',
            },
            text: {
                primary: mode === 'light' ? '#1a1a1a' : '#e8e6e3',
                secondary: mode === 'light' ? '#5a6570' : '#8a9199',
            },
        },
        typography: {
            fontFamily: '"DM Sans", sans-serif',
            h1: {
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                letterSpacing: '-0.03em',
            },
            h2: {
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                letterSpacing: '-0.03em',
            },
            h3: {
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                letterSpacing: '-0.03em',
            },
            h4: {
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
            },
            h5: {
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
            },
            h6: {
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.01em',
            },
        },
        shape: {
            borderRadius: 12,
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
