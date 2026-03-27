import { useState, useMemo, useCallback } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckIcon from '@mui/icons-material/Check'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CodeIcon from '@mui/icons-material/Code'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import { createTheme, alpha } from '@mui/material/styles'
import data from '../data.json'

function PreviewPanel({ primary, accent, mode }: { primary: string; accent: string; mode: 'light' | 'dark' }) {
    const theme = useMemo(() => createTheme({
        palette: { mode, primary: { main: primary }, secondary: { main: accent } },
    }), [primary, accent, mode])

    const isDark = mode === 'dark'
    const bg = isDark ? '#0e0e0e' : '#ffffff'
    const altBg = isDark ? '#111111' : '#f1f3f5'
    const text = isDark ? '#e8e6e3' : '#1a1a1a'
    const textSec = isDark ? '#8a9199' : '#5a6570'
    const cardBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)'
    const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'

    return (
        <Box sx={{
            flex: 1,
            minWidth: 300,
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
            boxShadow: isDark
                ? '0 4px 24px rgba(0,0,0,0.4)'
                : '0 4px 24px rgba(0,0,0,0.06)',
        }}>
            {/* Mode label */}
            <Box sx={{
                px: 3,
                py: 1.5,
                bgcolor: isDark ? '#161616' : '#f8f9fa',
                borderBottom: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
            }}>
                <Box sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: isDark ? '#e8e6e3' : '#1a1a1a',
                    opacity: 0.4,
                }} />
                <Typography sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: textSec,
                }}>
                    {mode} mode
                </Typography>
            </Box>

            {/* Section title preview */}
            <Box sx={{ bgcolor: bg, px: 3, pt: 4, pb: 3 }}>
                <Typography sx={{
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 800,
                    fontSize: '1.6rem',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: isDark ? theme.palette.primary.light : theme.palette.primary.dark,
                }}>
                    Section Title
                </Typography>
                <Box sx={{
                    mt: 1.5,
                    width: 32,
                    height: 2,
                    bgcolor: theme.palette.secondary.main,
                    opacity: 0.8,
                }} />
                <Typography sx={{
                    mt: 1.5,
                    color: isDark ? alpha(theme.palette.secondary.main, 0.8) : alpha(theme.palette.secondary.main, 0.7),
                    fontWeight: 500,
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontFamily: '"DM Sans", sans-serif',
                }}>
                    Accent Subtitle Text
                </Typography>
                <Typography sx={{
                    mt: 2,
                    color: textSec,
                    fontSize: '0.82rem',
                    lineHeight: 1.7,
                    fontFamily: '"DM Sans", sans-serif',
                }}>
                    Body text appears in a neutral secondary color that adapts to light and dark mode.
                </Typography>
            </Box>

            {/* Nav preview */}
            <Box sx={{
                bgcolor: isDark ? 'rgba(14,14,14,0.85)' : 'rgba(255,255,255,0.85)',
                px: 3,
                py: 1.5,
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: cardBorder,
                display: 'flex',
                gap: 2,
                alignItems: 'center',
            }}>
                <Typography sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    color: isDark ? theme.palette.primary.light : theme.palette.primary.main,
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        width: '100%',
                        height: '1.5px',
                        bgcolor: isDark ? theme.palette.primary.light : theme.palette.primary.main,
                    },
                }}>
                    Active
                </Typography>
                <Typography sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.75rem',
                    color: textSec,
                }}>
                    Inactive
                </Typography>
                <Typography sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.75rem',
                    color: isDark ? theme.palette.secondary.light : theme.palette.secondary.main,
                }}>
                    Hovered
                </Typography>
            </Box>

            {/* Buttons preview */}
            <Box sx={{ bgcolor: bg, px: 3, py: 3 }}>
                <Typography sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: textSec,
                    mb: 1.5,
                }}>
                    Buttons
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            textTransform: 'none',
                            fontWeight: 600,
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.78rem',
                            borderRadius: 2,
                            boxShadow: 'none',
                            px: 2,
                            '&:hover': { bgcolor: theme.palette.primary.dark, boxShadow: 'none' },
                        }}
                    >
                        Primary
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderColor: alpha(theme.palette.primary.main, 0.3),
                            color: theme.palette.primary.main,
                            textTransform: 'none',
                            fontWeight: 600,
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.78rem',
                            borderRadius: 2,
                        }}
                    >
                        Outlined
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderColor: alpha(theme.palette.secondary.main, 0.3),
                            color: theme.palette.secondary.main,
                            textTransform: 'none',
                            fontWeight: 600,
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.78rem',
                            borderRadius: 2,
                        }}
                    >
                        Accent
                    </Button>
                </Stack>
            </Box>

            {/* Chips preview */}
            <Box sx={{ bgcolor: altBg, px: 3, py: 3 }}>
                <Typography sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: textSec,
                    mb: 1.5,
                }}>
                    Chips & Tags
                </Typography>
                <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                    <Chip label="React" size="small" sx={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '0.72rem',
                        borderRadius: '6px',
                        bgcolor: isDark ? 'rgba(255,255,255,0.07)' : alpha(theme.palette.primary.main, 0.06),
                        color: isDark ? '#b0bec5' : '#37474f',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : alpha(theme.palette.primary.main, 0.1)}`,
                    }} />
                    <Chip label="TypeScript" size="small" sx={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '0.72rem',
                        borderRadius: '6px',
                        bgcolor: isDark ? 'rgba(255,255,255,0.07)' : alpha(theme.palette.primary.main, 0.06),
                        color: isDark ? '#b0bec5' : '#37474f',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : alpha(theme.palette.primary.main, 0.1)}`,
                    }} />
                    <Chip label="Current" size="small" sx={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        borderRadius: '6px',
                        bgcolor: theme.palette.primary.main,
                        color: '#fff',
                    }} />
                </Stack>
            </Box>

            {/* Cards preview */}
            <Box sx={{ bgcolor: bg, px: 3, py: 3 }}>
                <Typography sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: textSec,
                    mb: 1.5,
                }}>
                    Cards & Icons
                </Typography>
                <Stack direction="row" spacing={1.5}>
                    {[
                        { icon: <CodeIcon />, val: '10+', lbl: 'Languages' },
                        { icon: <WorkIcon />, val: '7+', lbl: 'Years' },
                        { icon: <SchoolIcon />, val: '2', lbl: 'Degrees' },
                    ].map(s => (
                        <Card
                            key={s.lbl}
                            elevation={0}
                            sx={{
                                flex: 1,
                                p: 2,
                                textAlign: 'center',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: cardBorder,
                                bgcolor: cardBg,
                            }}
                        >
                            <Box sx={{ color: isDark ? theme.palette.primary.light : theme.palette.primary.main, display: 'flex', justifyContent: 'center', opacity: 0.8, mb: 0.5 }}>
                                {s.icon}
                            </Box>
                            <Typography sx={{
                                fontFamily: '"Archivo", sans-serif',
                                fontWeight: 800,
                                fontSize: '1.4rem',
                                color: isDark ? theme.palette.primary.light : theme.palette.primary.dark,
                                lineHeight: 1,
                            }}>
                                {s.val}
                            </Typography>
                            <Typography sx={{
                                color: textSec,
                                fontWeight: 500,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                fontSize: '0.55rem',
                                mt: 0.5,
                                fontFamily: '"DM Sans", sans-serif',
                            }}>
                                {s.lbl}
                            </Typography>
                        </Card>
                    ))}
                </Stack>
            </Box>

            {/* Timeline dot preview */}
            <Box sx={{ bgcolor: altBg, px: 3, py: 3 }}>
                <Typography sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: textSec,
                    mb: 1.5,
                }}>
                    Timeline & Focus Text
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{
                            width: '1.5px',
                            height: 40,
                            bgcolor: isDark ? alpha(theme.palette.primary.main, 0.2) : alpha(theme.palette.primary.main, 0.15),
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            left: -4,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            bgcolor: isDark ? theme.palette.primary.light : theme.palette.primary.main,
                            border: '2px solid',
                            borderColor: isDark ? '#111111' : altBg,
                            boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.12)}`,
                        }} />
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: '"Archivo", sans-serif',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            color: text,
                        }}>
                            Job Title
                        </Typography>
                        <Typography sx={{
                            color: isDark ? alpha(theme.palette.secondary.main, 0.7) : alpha(theme.palette.secondary.main, 0.8),
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            fontFamily: '"DM Sans", sans-serif',
                        }}>
                            Focus Area
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default function ColorPickerPage() {
    const [primary, setPrimary] = useState(data.theme.primary)
    const [accent, setAccent] = useState(data.theme.accent)
    const [copied, setCopied] = useState(false)

    const jsonSnippet = `"theme": {\n    "primary": "${primary}",\n    "accent": "${accent}"\n}`

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(jsonSnippet)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }, [jsonSnippet])

    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: '#0e0e0e',
            color: '#e8e6e3',
            pb: 8,
        }}>
            {/* Header */}
            <Box sx={{
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                bgcolor: 'rgba(14,14,14,0.85)',
                backdropFilter: 'blur(20px)',
                position: 'sticky',
                top: 0,
                zIndex: 10,
            }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', alignItems: 'center', py: 2, gap: 2 }}>
                        <IconButton
                            href="#/"
                            size="small"
                            sx={{
                                color: '#8a9199',
                                '&:hover': { color: '#e8e6e3' },
                            }}
                        >
                            <ArrowBackIcon sx={{ fontSize: 18 }} />
                        </IconButton>
                        <Typography sx={{
                            fontFamily: '"Archivo", sans-serif',
                            fontWeight: 700,
                            fontSize: '1rem',
                            letterSpacing: '-0.02em',
                        }}>
                            Theme Builder
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg">
                {/* Color pickers */}
                <Box sx={{ pt: 6, pb: 5 }}>
                    <Typography sx={{
                        fontFamily: '"Archivo", sans-serif',
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '2.8rem' },
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        mb: 1,
                    }}>
                        Pick your colors
                    </Typography>
                    <Typography sx={{
                        color: '#8a9199',
                        fontSize: '0.95rem',
                        fontFamily: '"DM Sans", sans-serif',
                        mb: 5,
                    }}>
                        Choose a primary and accent color, then copy the snippet into your <code style={{ fontFamily: 'monospace', fontSize: '0.85rem', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: 4 }}>data.json</code>
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                        {/* Primary picker */}
                        <Box>
                            <Typography sx={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: '0.65rem',
                                fontWeight: 600,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: '#8a9199',
                                mb: 1.5,
                            }}>
                                Primary
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box
                                    component="label"
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 3,
                                        bgcolor: primary,
                                        cursor: 'pointer',
                                        border: '2px solid rgba(255,255,255,0.12)',
                                        transition: 'all 0.2s',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            borderColor: 'rgba(255,255,255,0.3)',
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    <input
                                        type="color"
                                        value={primary}
                                        onChange={e => setPrimary(e.target.value)}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            opacity: 0,
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    fontFamily: 'monospace',
                                    fontSize: '0.95rem',
                                    color: '#e8e6e3',
                                    letterSpacing: '0.02em',
                                }}>
                                    {primary}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Accent picker */}
                        <Box>
                            <Typography sx={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: '0.65rem',
                                fontWeight: 600,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: '#8a9199',
                                mb: 1.5,
                            }}>
                                Accent
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box
                                    component="label"
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 3,
                                        bgcolor: accent,
                                        cursor: 'pointer',
                                        border: '2px solid rgba(255,255,255,0.12)',
                                        transition: 'all 0.2s',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            borderColor: 'rgba(255,255,255,0.3)',
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    <input
                                        type="color"
                                        value={accent}
                                        onChange={e => setAccent(e.target.value)}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            opacity: 0,
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    fontFamily: 'monospace',
                                    fontSize: '0.95rem',
                                    color: '#e8e6e3',
                                    letterSpacing: '0.02em',
                                }}>
                                    {accent}
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Box>

                {/* Preview panels */}
                <Box sx={{
                    display: 'flex',
                    gap: 3,
                    flexDirection: { xs: 'column', md: 'row' },
                    mb: 5,
                }}>
                    <PreviewPanel primary={primary} accent={accent} mode="light" />
                    <PreviewPanel primary={primary} accent={accent} mode="dark" />
                </Box>

                {/* JSON snippet */}
                <Box sx={{
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.08)',
                    bgcolor: '#161616',
                    overflow: 'hidden',
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 3,
                        py: 1.5,
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>
                        <Typography sx={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#8a9199',
                        }}>
                            data.json snippet
                        </Typography>
                        <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'}>
                            <IconButton
                                size="small"
                                onClick={handleCopy}
                                sx={{
                                    color: copied ? '#66bb6a' : '#8a9199',
                                    '&:hover': { color: '#e8e6e3' },
                                }}
                            >
                                {copied ? <CheckIcon sx={{ fontSize: 16 }} /> : <ContentCopyIcon sx={{ fontSize: 16 }} />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{ px: 3, py: 2.5 }}>
                        <pre style={{
                            margin: 0,
                            fontFamily: '"Fira Code", "JetBrains Mono", monospace',
                            fontSize: '0.85rem',
                            lineHeight: 1.7,
                            color: '#e8e6e3',
                        }}>
                            <span style={{ color: '#8a9199' }}>{'"theme"'}: {'{'}</span>{'\n'}
                            {'    '}<span style={{ color: '#8a9199' }}>{'"primary"'}</span>: <span style={{ color: primary }}>{`"${primary}"`}</span>,{'\n'}
                            {'    '}<span style={{ color: '#8a9199' }}>{'"accent"'}</span>: <span style={{ color: accent }}>{`"${accent}"`}</span>{'\n'}
                            <span style={{ color: '#8a9199' }}>{'}'}</span>
                        </pre>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
