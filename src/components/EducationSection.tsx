import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import SchoolIcon from '@mui/icons-material/School'
import PlaceIcon from '@mui/icons-material/Place'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { useTheme, alpha } from '@mui/material/styles'
import Section from './Section'
import data from '../data.json'

export default function EducationSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="education" title="Education" subtitle="Who Taught Me What I Know">
            <Box sx={{ position: 'relative', pl: { xs: 3, md: 4 } }}>
                {/* Timeline line */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: { xs: 5, md: 7 },
                        top: 4,
                        bottom: 4,
                        width: '1.5px',
                        backgroundColor: isDark ? alpha(theme.palette.primary.main, 0.2) : alpha(theme.palette.primary.main, 0.15),
                    }}
                />

                <Stack spacing={5}>
                    {data.schools.map(school => (
                        <Box key={school.name} sx={{ position: 'relative' }}>
                            {/* Timeline dot */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: -24, md: -29 },
                                    top: 8,
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    backgroundColor: isDark ? theme.palette.primary.light : theme.palette.primary.main,
                                    border: '2px solid',
                                    borderColor: isDark ? '#0e0e0e' : '#ffffff',
                                    boxShadow: isDark
                                        ? `0 0 0 3px ${alpha(theme.palette.primary.main, 0.15)}`
                                        : `0 0 0 3px ${alpha(theme.palette.primary.main, 0.1)}`,
                                }}
                            />

                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: '"Archivo", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                                }}
                            >
                                {school.name}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 0.5,
                                    color: 'text.secondary',
                                    fontSize: '0.95rem',
                                }}
                            >
                                {school.degree}
                            </Typography>
                            <Stack direction="row" sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
                                <Chip icon={<SchoolIcon />} label={school.year} size="small" sx={{ flexShrink: 0 }} />
                                <Chip icon={<PlaceIcon />} label={school.location} size="small" variant="outlined" sx={{ flexShrink: 0 }} />
                                {school.honors && (
                                    <Chip
                                        icon={<EmojiEventsIcon />}
                                        label={school.honors}
                                        size="small"
                                        sx={{
                                            flexShrink: 0,
                                            overflow: 'visible',
                                            backgroundColor: isDark ? 'rgba(255,215,0,0.1)' : 'rgba(255,215,0,0.12)',
                                            borderColor: 'rgba(255,215,0,0.3)',
                                            border: '1px solid',
                                            '& .MuiChip-icon': { color: '#d4a800' },
                                            '@keyframes goldGlow': {
                                                '0%, 100%': { boxShadow: '0 0 8px rgba(255,215,0,0.3), 0 0 2px rgba(255,215,0,0.2)' },
                                                '50%': { boxShadow: '0 0 16px rgba(255,215,0,0.4), 0 0 4px rgba(255,215,0,0.3)' },
                                            },
                                            animation: 'goldGlow 3s ease-in-out infinite',
                                        }}
                                    />
                                )}
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Section>
    )
}
