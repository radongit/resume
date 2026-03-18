import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useColorMode } from '../ThemeContext'
import useScrollSpy from '../hooks/useScrollSpy'

const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work History', href: '#work' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
]

export default function AppHeader() {
    const [menuOpen, setMenuOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const activeId = useScrollSpy(links.map(l => l.href.slice(1)))
    const { toggleColorMode } = useColorMode()
    const isDark = theme.palette.mode === 'dark'

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                boxShadow: theme.palette.mode === 'dark'
                    ? '0 1px 3px rgba(0,0,0,0.3)'
                    : '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1100, width: '100%', mx: 'auto' }}>
                <Typography
                    fontWeight={700}
                    fontSize="1.15rem"
                    letterSpacing="-0.01em"
                    sx={{ fontFamily: '"Inter", sans-serif' }}
                >
                    Robinson Davis
                </Typography>

                {isMobile ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <IconButton
                            onClick={toggleColorMode}
                            size="small"
                            sx={{ color: 'text.secondary' }}
                            aria-label="Toggle light/dark mode"
                        >
                            {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="menu"
                            onClick={() => setMenuOpen(prev => !prev)}
                        >
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                        {links.map(link => (
                            <Button
                                key={link.href}
                                href={link.href}
                                size="small"
                                sx={{
                                    color: activeId === link.href.slice(1) ? '#2e7d32' : 'text.secondary',
                                    fontWeight: activeId === link.href.slice(1) ? 600 : 500,
                                    fontSize: '0.875rem',
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    px: 1.5,
                                    backgroundColor: activeId === link.href.slice(1) ? 'rgba(46,125,50,0.08)' : 'transparent',
                                    transition: 'color 0.15s, background-color 0.15s',
                                    '&:hover': {
                                        color: '#2e7d32',
                                        backgroundColor: 'rgba(46,125,50,0.08)',
                                    },
                                    '&:active': {
                                        color: '#e65100',
                                        backgroundColor: 'rgba(230,81,0,0.08)',
                                    },
                                }}
                            >
                                {link.label}
                            </Button>
                        ))}
                        <IconButton
                            onClick={toggleColorMode}
                            size="small"
                            sx={{ ml: 1, color: 'text.secondary' }}
                            aria-label="Toggle light/dark mode"
                        >
                            {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                        </IconButton>
                    </Box>
                )}
            </Toolbar>

            {isMobile && (
                <Collapse in={menuOpen}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            px: 2,
                            pb: 2,
                            borderTop: '1px solid',
                            borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                        }}
                    >
                        {links.map(link => (
                            <Button
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                sx={{
                                    color: activeId === link.href.slice(1) ? '#2e7d32' : 'text.secondary',
                                    fontWeight: activeId === link.href.slice(1) ? 600 : 500,
                                    fontSize: '0.9rem',
                                    textTransform: 'none',
                                    justifyContent: 'flex-start',
                                    py: 1,
                                    px: 1,
                                    borderRadius: 1.5,
                                    transition: 'color 0.15s, background-color 0.15s',
                                    '&:hover': {
                                        color: '#2e7d32',
                                        backgroundColor: 'rgba(46,125,50,0.08)',
                                    },
                                    '&:active': {
                                        color: '#e65100',
                                        backgroundColor: 'rgba(230,81,0,0.08)',
                                    },
                                }}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Box>
                </Collapse>
            )}
        </AppBar>
    )
}
