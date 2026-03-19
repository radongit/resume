import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

export default function AppFooter() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                px: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTop: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                bgcolor: isDark ? '#0e0e0e' : '#f1f3f5',
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: 'text.secondary',
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    letterSpacing: '-0.01em',
                }}
            >
                Robinson Davis
            </Typography>
        </Box>
    )
}
