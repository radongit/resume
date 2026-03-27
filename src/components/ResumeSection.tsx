import { useRef, useState, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Collapse from '@mui/material/Collapse'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import ArticleIcon from '@mui/icons-material/Article'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useTheme, alpha } from '@mui/material/styles'
import Section from './Section'
import Icon from '../iconMap'
import data from '../data.json'

export default function ResumeSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'
    const [inlinePdf, setInlinePdf] = useState<string | null>(null)
    const embedRef = useRef<HTMLDivElement>(null)

    const handleViewInline = useCallback((pdfUrl: string) => {
        if (inlinePdf === pdfUrl) {
            setInlinePdf(null)
        } else {
            setInlinePdf(pdfUrl)
            setTimeout(() => {
                embedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 350)
        }
    }, [inlinePdf])

    const hasDocs = data.documents.length > 0
    const hasContacts = data.contacts.length > 0

    return (
        <Section id="resume" title="Resume & Contact" subtitle="Download My Documents · Get In Touch" alternate>
            <Grid container spacing={{ xs: 4, md: 6 }}>
                {hasDocs && (
                    <Grid size={{ xs: 12, md: hasContacts ? 7 : 12 }}>
                        <Stack spacing={2}>
                            {data.documents.map(doc => {
                                const isActive = inlinePdf === doc.pdf
                                const hasPdf = !!doc.pdf
                                const hasDocx = !!doc.docx
                                return (
                                <Card
                                    key={doc.title}
                                    elevation={0}
                                    sx={{
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                        backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.7)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: isDark
                                                ? '0 8px 32px rgba(0,0,0,0.3)'
                                                : '0 8px 32px rgba(0,0,0,0.06)',
                                            borderColor: isDark ? alpha(theme.palette.primary.main, 0.15) : alpha(theme.palette.primary.main, 0.12),
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 2.5, md: 3 }, '&:last-child': { pb: { xs: 2.5, md: 3 } } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                                            {doc.icon && (
                                                <Box sx={{ color: isDark ? theme.palette.primary.light : theme.palette.primary.main, display: 'flex', opacity: 0.75 }}>
                                                    <Icon name={doc.icon} sx={{ fontSize: 24 }} />
                                                </Box>
                                            )}
                                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontFamily: '"Archivo", sans-serif',
                                                        fontWeight: 600,
                                                        fontSize: '1.15rem',
                                                        lineHeight: 1.2,
                                                    }}
                                                >
                                                    {doc.title}
                                                </Typography>
                                                {doc.description && (
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        sx={{ fontSize: '0.82rem', lineHeight: 1.6, mt: 0.25 }}
                                                    >
                                                        {doc.description}
                                                    </Typography>
                                                )}
                                            </Box>
                                            {(hasPdf || hasDocx) && (
                                                <Stack spacing={0.75} sx={{ flexShrink: 0, alignItems: 'stretch' }}>
                                                    <Stack direction="row" spacing={1}>
                                                        {hasPdf && (
                                                            <Button
                                                                variant="contained"
                                                                startIcon={<PictureAsPdfIcon />}
                                                                href={doc.pdf}
                                                                download
                                                                size="small"
                                                                sx={{
                                                                    backgroundColor: '#c62828',
                                                                    textTransform: 'none',
                                                                    fontWeight: 600,
                                                                    borderRadius: 2,
                                                                    fontSize: '0.78rem',
                                                                    boxShadow: 'none',
                                                                    px: 2,
                                                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                                    '&:hover': {
                                                                        backgroundColor: '#8e0000',
                                                                        boxShadow: '0 4px 16px rgba(198,40,40,0.3)',
                                                                        transform: 'translateY(-1px)',
                                                                    },
                                                                }}
                                                            >
                                                                PDF
                                                            </Button>
                                                        )}
                                                        {hasDocx && (
                                                            <Button
                                                                variant="contained"
                                                                startIcon={<ArticleIcon />}
                                                                href={doc.docx}
                                                                download
                                                                size="small"
                                                                sx={{
                                                                    backgroundColor: '#1565c0',
                                                                    textTransform: 'none',
                                                                    fontWeight: 600,
                                                                    borderRadius: 2,
                                                                    fontSize: '0.78rem',
                                                                    boxShadow: 'none',
                                                                    px: 2,
                                                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                                    '&:hover': {
                                                                        backgroundColor: '#003c8f',
                                                                        boxShadow: '0 4px 16px rgba(21,101,192,0.3)',
                                                                        transform: 'translateY(-1px)',
                                                                    },
                                                                }}
                                                            >
                                                                DOCX
                                                            </Button>
                                                        )}
                                                    </Stack>
                                                    {hasPdf && (
                                                        <Button
                                                            variant="outlined"
                                                            startIcon={isActive ? <VisibilityOffIcon sx={{ fontSize: 16 }} /> : <VisibilityIcon sx={{ fontSize: 16 }} />}
                                                            onClick={() => handleViewInline(doc.pdf)}
                                                            size="small"
                                                            sx={{
                                                                textTransform: 'none',
                                                                fontWeight: 600,
                                                                borderRadius: 2,
                                                                fontSize: '0.72rem',
                                                                borderColor: isActive
                                                                    ? (isDark ? theme.palette.primary.light : theme.palette.primary.main)
                                                                    : (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'),
                                                                color: isActive
                                                                    ? (isDark ? theme.palette.primary.light : theme.palette.primary.main)
                                                                    : 'text.secondary',
                                                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                                '&:hover': {
                                                                    borderColor: isDark ? theme.palette.primary.light : theme.palette.primary.main,
                                                                    color: isDark ? theme.palette.primary.light : theme.palette.primary.main,
                                                                    backgroundColor: isDark ? alpha(theme.palette.primary.light, 0.08) : alpha(theme.palette.primary.main, 0.06),
                                                                },
                                                            }}
                                                        >
                                                            {isActive ? 'Hide Preview' : 'View Inline'}
                                                        </Button>
                                                    )}
                                                </Stack>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                                )
                            })}
                        </Stack>
                    </Grid>
                )}

                {hasContacts && (
                    <Grid size={{ xs: 12, md: hasDocs ? 5 : 12 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: '"Archivo", sans-serif',
                                fontWeight: 700,
                                fontSize: '1.3rem',
                                letterSpacing: '-0.02em',
                                mb: 2.5,
                                color: 'text.primary',
                            }}
                        >
                            Want to know more?
                        </Typography>
                        <Stack spacing={2}>
                            {data.contacts.map(contact => (
                                <Card
                                    key={contact.label}
                                    component="a"
                                    href={contact.href}
                                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2.5,
                                        p: { xs: 2.5, md: 3 },
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                        backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.7)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: isDark
                                                ? '0 8px 32px rgba(0,0,0,0.3)'
                                                : '0 8px 32px rgba(0,0,0,0.06)',
                                            borderColor: isDark ? alpha(theme.palette.primary.main, 0.15) : alpha(theme.palette.primary.main, 0.12),
                                        },
                                    }}
                                >
                                    <Box sx={{
                                        color: isDark ? theme.palette.primary.light : theme.palette.primary.main,
                                        display: 'flex',
                                        opacity: 0.7,
                                    }}>
                                        <Icon name={contact.icon} sx={{ fontSize: 24 }} />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                fontWeight: 500,
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                color: 'text.secondary',
                                                fontSize: '0.65rem',
                                            }}
                                        >
                                            {contact.label}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '0.95rem',
                                                letterSpacing: '0.01em',
                                            }}
                                        >
                                            {contact.value}
                                        </Typography>
                                    </Box>
                                </Card>
                            ))}
                        </Stack>
                    </Grid>
                )}
            </Grid>

            <Collapse in={inlinePdf !== null} timeout={400} unmountOnExit>
                <Box
                    ref={embedRef}
                    sx={{
                        mt: 4,
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '1px solid',
                        borderColor: isDark ? alpha(theme.palette.primary.main, 0.2) : alpha(theme.palette.primary.main, 0.15),
                        boxShadow: isDark
                            ? '0 8px 32px rgba(0,0,0,0.4)'
                            : '0 8px 32px rgba(0,0,0,0.08)',
                    }}
                >
                    {inlinePdf && (
                        <iframe
                            src={inlinePdf}
                            title="PDF Preview"
                            style={{
                                width: '100%',
                                height: '80vh',
                                border: 'none',
                                display: 'block',
                            }}
                        />
                    )}
                </Box>
            </Collapse>
        </Section>
    )
}
