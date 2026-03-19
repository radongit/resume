import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { useTheme } from '@mui/material/styles'
import Section from './Section'

const projects = [
    {
        title: 'RobinsonDavis.com',
        description:
            'A modern, responsive single-page resume and portfolio site built with the help of Claude AI. Designed to showcase my skills, experience, projects, and attention to detail.',
        technologies: ['React 19', 'TypeScript', 'MUI 7', 'Vite 8', 'Emotion', 'Claude CLI'],
        github: 'https://github.com/radongit/resume',
        live: null as string | null,
    },
]

export default function ProjectsSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="projects" title="Projects" subtitle="Where Lies My Passion" alternate>
            {projects.map(project => (
                <Card
                    key={project.title}
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
                            borderColor: isDark ? 'rgba(46,125,50,0.15)' : 'rgba(46,125,50,0.12)',
                        },
                        '& + &': { mt: 2.5 },
                    }}
                >
                    <CardContent sx={{ p: { xs: 3, md: 4 }, '&:last-child': { pb: { xs: 3, md: 4 } } }}>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 4 }, alignItems: { md: 'center' } }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: '"Archivo", sans-serif',
                                        fontWeight: 600,
                                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                                        mb: 1,
                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.8, fontSize: '0.875rem', maxWidth: 520 }}
                                >
                                    {project.description}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 2, flexShrink: 0 }}>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, justifyContent: { md: 'flex-end' } }}>
                                    {project.technologies.map(tech => (
                                        <Chip key={tech} label={tech} size="small" />
                                    ))}
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    {project.github && (
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            startIcon={<GitHubIcon />}
                                            href={project.github}
                                            target="_blank"
                                            sx={{
                                                textTransform: 'none',
                                                fontWeight: 500,
                                                fontSize: '0.82rem',
                                                color: 'text.secondary',
                                                borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
                                                borderRadius: 2,
                                                letterSpacing: '0.02em',
                                                transition: 'all 0.2s',
                                                '&:hover': {
                                                    color: 'text.primary',
                                                    borderColor: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                                                    backgroundColor: 'transparent',
                                                },
                                            }}
                                        >
                                            Source Code
                                        </Button>
                                    )}
                                    {project.live && (
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            startIcon={<LaunchIcon />}
                                            href={project.live}
                                            target="_blank"
                                            sx={{
                                                textTransform: 'none',
                                                fontWeight: 500,
                                                fontSize: '0.82rem',
                                                color: '#2e7d32',
                                                borderColor: 'rgba(46,125,50,0.3)',
                                                borderRadius: 2,
                                                letterSpacing: '0.02em',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(46,125,50,0.06)',
                                                    borderColor: '#2e7d32',
                                                },
                                            }}
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Section>
    )
}
