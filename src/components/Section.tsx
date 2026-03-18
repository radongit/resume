import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

interface SectionProps {
    id: string
    title: string
    children?: React.ReactNode
    bgcolor?: string
}

export default function Section({ id, title, children, bgcolor = '#fff' }: SectionProps) {
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
                <Typography
                    variant="h3"
                    fontWeight={700}
                    gutterBottom
                    sx={{ letterSpacing: '-0.02em', color: '#2e7d32' }}
                >
                    {title}
                </Typography>
                {children}
            </Container>
        </Box>
    )
}
