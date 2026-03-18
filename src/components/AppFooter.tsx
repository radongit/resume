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
                py: 3,
                px: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTop: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                bgcolor: isDark ? '#1a1a1a' : '#fafafa',
            }}
        >
            <Typography variant="body2" color="text.secondary">
                Robinson Davis
            </Typography>
        </Box>
    )
}
