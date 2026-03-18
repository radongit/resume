import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import SchoolIcon from '@mui/icons-material/School'
import PlaceIcon from '@mui/icons-material/Place'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { useTheme } from '@mui/material/styles'
import Section from './Section'

interface School {
    name: string
    degree: string
    year: string
    location: string
    honors?: string
}

const schools: School[] = [
    {
        name: 'Auburn University',
        degree: 'Bachelor of Computer Science',
        year: 'Graduated 2017',
        location: 'Auburn, AL',
    },
    {
        name: 'Chattahoochee Valley Community College',
        degree: 'Associate of Arts in General Studies',
        year: 'Graduated 2013',
        location: 'Phenix City, AL',
        honors: 'Cum Laude',
    },
]

export default function EducationSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="education" title="Education" subtitle="Who Taught Me What I Know">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                {schools.map(school => (
                    <Card
                        key={school.name}
                        variant="outlined"
                        sx={{
                            flex: 1,
                            borderRadius: 3,
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                            backgroundColor: isDark ? '#1a1a1a' : '#fafafa',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            transition: 'box-shadow 0.2s, transform 0.2s',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.08)',
                            },
                        }}
                    >
                        <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Box sx={{ color: '#2e7d32', display: 'flex' }}>
                                    <SchoolIcon />
                                </Box>
                                <Typography variant="h6" fontWeight={700}>
                                    {school.name}
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
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
                                            '@keyframes goldGlow': {
                                                '0%': { boxShadow: '2px 0 8px rgba(255,215,0,0.6), 0 0 4px rgba(255,215,0,0.3)' },
                                                '25%': { boxShadow: '0 2px 8px rgba(255,215,0,0.6), 0 0 4px rgba(255,215,0,0.3)' },
                                                '50%': { boxShadow: '-2px 0 8px rgba(255,215,0,0.6), 0 0 4px rgba(255,215,0,0.3)' },
                                                '75%': { boxShadow: '0 -2px 8px rgba(255,215,0,0.6), 0 0 4px rgba(255,215,0,0.3)' },
                                                '100%': { boxShadow: '2px 0 8px rgba(255,215,0,0.6), 0 0 4px rgba(255,215,0,0.3)' },
                                            },
                                            animation: 'goldGlow 2s ease-in-out infinite',
                                        }}
                                    />
                                )}
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Section>
    )
}
