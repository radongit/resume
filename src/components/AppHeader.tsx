import { useCallback, useRef, useState } from 'react'
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

const HEADER_HEIGHT_MOBILE = 56
const HEADER_HEIGHT_DESKTOP = 64

const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
]

export default function AppHeader() {
    const [menuOpen, setMenuOpen] = useState(false)
    const appBarRef = useRef<HTMLDivElement>(null)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const activeId = useScrollSpy(links.map(l => l.href.slice(1)))
    const { toggleColorMode } = useColorMode()
    const isDark = theme.palette.mode === 'dark'

    const handleNavClick = useCallback((e: React.MouseEvent, id: string) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (!el) return
        // Use the current header height (including open menu if applicable).
        // As the menu collapses, content shifts up by the same amount the header
        // shrinks, so the scroll target stays correct throughout the animation.
        const headerHeight = appBarRef.current?.offsetHeight ?? HEADER_HEIGHT_DESKTOP
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
        setMenuOpen(false)
        window.scrollTo({ top, behavior: 'smooth' })
    }, [])

    return (
        <AppBar
            ref={appBarRef}
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: isDark ? 'rgba(14,14,14,0.85)' : 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                color: 'text.primary',
                borderBottom: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1100, width: '100%', mx: 'auto', minHeight: { xs: HEADER_HEIGHT_MOBILE, md: HEADER_HEIGHT_DESKTOP } }}>
                <Typography
                    sx={{
                        fontFamily: '"Archivo", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        letterSpacing: '-0.02em',
                    }}
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
                    <Box sx={{ display: 'flex', gap: 0.25, alignItems: 'center' }}>
                        {links.map(link => {
                            const isActive = activeId === link.href.slice(1)
                            return (
                                <Button
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href.slice(1))}
                                    size="small"
                                    sx={{
                                        color: isActive ? (isDark ? '#66bb6a' : '#2e7d32') : 'text.secondary',
                                        fontWeight: isActive ? 600 : 400,
                                        fontSize: '0.82rem',
                                        textTransform: 'none',
                                        borderRadius: 1.5,
                                        px: 1.5,
                                        py: 0.75,
                                        minWidth: 'auto',
                                        position: 'relative',
                                        letterSpacing: '0.02em',
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 4,
                                            left: '50%',
                                            transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                                            width: '60%',
                                            height: '1.5px',
                                            backgroundColor: isActive ? (isDark ? '#66bb6a' : '#2e7d32') : (isDark ? '#ff9d3f' : '#e65100'),
                                            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        },
                                        '&:hover': {
                                            color: isDark ? '#ff9d3f' : '#e65100',
                                            backgroundColor: 'transparent',
                                            '&::after': {
                                                transform: 'translateX(-50%) scaleX(1)',
                                                backgroundColor: isDark ? '#ff9d3f' : '#e65100',
                                            },
                                        },
                                    }}
                                >
                                    {link.label}
                                </Button>
                            )
                        })}
                        <Box sx={{ width: '1px', height: 20, bgcolor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)', mx: 1 }} />
                        <IconButton
                            onClick={toggleColorMode}
                            size="small"
                            sx={{
                                color: 'text.secondary',
                                transition: 'color 0.2s',
                                '&:hover': { color: 'text.primary', backgroundColor: 'transparent' },
                            }}
                            aria-label="Toggle light/dark mode"
                        >
                            {isDark ? <LightModeIcon sx={{ fontSize: 18 }} /> : <DarkModeIcon sx={{ fontSize: 18 }} />}
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
                            borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                        }}
                    >
                        {links.map(link => (
                            <Button
                                key={link.href}
                                onClick={(e) => handleNavClick(e, link.href.slice(1))}
                                sx={{
                                    color: activeId === link.href.slice(1) ? (isDark ? '#66bb6a' : '#2e7d32') : 'text.secondary',
                                    fontWeight: activeId === link.href.slice(1) ? 600 : 400,
                                    fontSize: '0.9rem',
                                    textTransform: 'none',
                                    justifyContent: 'flex-start',
                                    py: 1,
                                    px: 1.5,
                                    borderRadius: 1.5,
                                    letterSpacing: '0.02em',
                                    transition: 'all 0.15s ease',
                                    '&:hover': {
                                        color: isDark ? '#ff9d3f' : '#e65100',
                                        backgroundColor: isDark ? 'rgba(255,157,63,0.08)' : 'rgba(230,81,0,0.06)',
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
