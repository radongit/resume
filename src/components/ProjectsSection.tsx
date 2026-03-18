import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import WebIcon from '@mui/icons-material/Web'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { useTheme } from '@mui/material/styles'
import Section from './Section'

const projects = [
    {
        title: 'RobinsonDavis.com',
        icon: <WebIcon />,
        description:
            'A modern, responsive single-page resume and portfolio site built with the help of Claude AI. Designed to showcase my skills, experience, projects, and attention to detail.',
        technologies: ['React 19', 'TypeScript', 'MUI 7', 'Vite 8', 'Emotion', 'Claude CLI'],
        github: 'https://github.com/radongit/resume',
        live: null,
    },
]

export default function ProjectsSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="projects" title="Projects" subtitle="Where Lies My Passion" alternate>
            <Grid container spacing={3}>
                {projects.map(project => (
                    <Grid key={project.title} size={{ xs: 12, md: 6 }}>
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 3,
                                borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                                backgroundColor: isDark ? '#121212' : '#fff',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                transition: 'box-shadow 0.2s, transform 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.08)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 3, '&:last-child': { pb: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                    <Box sx={{ color: '#2e7d32', display: 'flex' }}>
                                        {project.icon}
                                    </Box>
                                    <Typography variant="h6" fontWeight={700}>
                                        {project.title}
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                                    {project.description}
                                </Typography>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                                    {project.technologies.map(tech => (
                                        <Chip key={tech} label={tech} size="small" />
                                    ))}
                                </Box>

                                <Stack direction="row" spacing={1.5} sx={{ mt: 'auto' }}>
                                    {project.github && (
                                        <Button
                                            size="small"
                                            startIcon={<GitHubIcon />}
                                            href={project.github}
                                            target="_blank"
                                            sx={{
                                                textTransform: 'none',
                                                fontWeight: 600,
                                                color: 'text.secondary',
                                                '&:hover': { color: 'text.primary' },
                                            }}
                                        >
                                            Source
                                        </Button>
                                    )}
                                    {project.live && (
                                        <Button
                                            size="small"
                                            startIcon={<LaunchIcon />}
                                            href={project.live}
                                            target="_blank"
                                            sx={{
                                                textTransform: 'none',
                                                fontWeight: 600,
                                                color: '#2e7d32',
                                                '&:hover': { backgroundColor: 'rgba(46,125,50,0.08)' },
                                            }}
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}
