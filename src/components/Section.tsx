import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

interface SectionProps {
    id: string
    title: string
    subtitle?: string
    children?: React.ReactNode
    alternate?: boolean
}

export default function Section({ id, title, subtitle, children, alternate = false }: SectionProps) {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    const bgcolor = alternate
        ? (isDark ? '#111111' : '#f1f3f5')
        : (isDark ? '#0e0e0e' : '#ffffff')

    return (
        <Box
            id={id}
            component="section"
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                bgcolor,
                py: { xs: 8, md: 12 },
                position: 'relative',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Container maxWidth="md">
                <Box sx={{ mb: { xs: 5, md: 7 } }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: '2.4rem', md: '3.25rem' },
                            fontFamily: '"Archivo", sans-serif',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            color: isDark ? '#c8e6c9' : '#1b5e20',
                            position: 'relative',
                        }}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            mt: 2,
                            width: 40,
                            height: 2,
                            background: '#e65100',
                            opacity: 0.8,
                        }}
                    />
                    {subtitle && (
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mt: 2.5,
                                color: isDark ? 'rgba(230,81,0,0.8)' : 'rgba(230,81,0,0.7)',
                                fontWeight: 500,
                                fontSize: '0.85rem',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                fontFamily: '"DM Sans", sans-serif',
                            }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>
                {children}
            </Container>
        </Box>
    )
}
