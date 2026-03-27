import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import { useTheme, alpha } from '@mui/material/styles'
import Section from './Section'
import Icon from '../iconMap'
import data from '../data.json'

export default function SkillsSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="skills" title="Skills" subtitle="Know What I Know" alternate>
            <Grid container spacing={2.5}>
                {data.skillGroups.map(group => (
                    <Grid key={group.title} size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card
                            elevation={0}
                            sx={{
                                height: '100%',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.7)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    boxShadow: isDark
                                        ? '0 8px 32px rgba(0,0,0,0.3)'
                                        : '0 8px 32px rgba(0,0,0,0.06)',
                                    transform: 'translateY(-3px)',
                                    borderColor: isDark ? alpha(theme.palette.primary.main, 0.15) : alpha(theme.palette.primary.main, 0.12),
                                },
                            }}
                        >
                            <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                                    <Box sx={{
                                        color: isDark ? theme.palette.primary.light : theme.palette.primary.main,
                                        display: 'flex',
                                        opacity: 0.75,
                                    }}>
                                        <Icon name={group.icon} />
                                    </Box>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 600,
                                            lineHeight: 1.3,
                                            letterSpacing: '0.01em',
                                            fontSize: '0.85rem',
                                        }}
                                    >
                                        {group.title}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                                    {group.skills.map(skill => (
                                        <Chip key={skill} label={skill} size="small" />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}
