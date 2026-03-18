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
        ? (isDark ? '#1a1a1a' : '#fafafa')
        : (isDark ? '#121212' : '#fff')

    return (
        <Box
            id={id}
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'flex-start',
                bgcolor,
                py: 8,
            }}
        >
            <Container maxWidth="md">
                <Box sx={{ mb: 5 }}>
                    <Typography
                        variant="h3"
                        fontWeight={800}
                        sx={{
                            fontSize: { xs: '2rem', md: '2.75rem' },
                            letterSpacing: '-0.03em',
                            background: isDark
                                ? 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)'
                                : 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #43a047 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            mt: 1.5,
                            width: 48,
                            height: 3,
                            borderRadius: 2,
                            background: 'linear-gradient(90deg, #e65100, #ff8a50)',
                        }}
                    />
                    {subtitle && (
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mt: 2,
                                color: '#e65100',
                                fontWeight: 500,
                                fontSize: '1rem',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
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
