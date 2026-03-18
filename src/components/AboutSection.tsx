import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import CodeIcon from '@mui/icons-material/Code'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import BuildIcon from '@mui/icons-material/Build'
import { useTheme } from '@mui/material/styles'
import Section from './Section'

const stats = [
    { icon: <WorkIcon />, value: '7+', label: 'Years Experience' },
    { icon: <CodeIcon />, value: '10+', label: 'Languages' },
    { icon: <BuildIcon />, value: '30+', label: 'Technologies' },
    { icon: <SchoolIcon />, value: '2', label: 'Degrees' },
]

export default function AboutSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="about" title="Robinson Davis" subtitle="Husband · Father · Full-Stack Developer">
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ lineHeight: 1.8, fontWeight: 400 }}
                    >
                        I am a full stack developer with over 7 years of experience building web applications and services. I have a passion for learning new technologies and solving complex problems. In my long career, I have worked on a wide range of projects, from small business websites to large-scale enterprise applications, and have experience running an IT deparment as a director as well as working with a team.
                    </Typography>

                    <Stack direction="row" sx={{ mt: 4, flexWrap: 'wrap', gap: 2 }}>
                        <Button
                            variant="contained"
                            startIcon={<LinkedInIcon />}
                            href="https://linkedin.com/in/robinson-a-davis"
                            target="_blank"
                            sx={{
                                minWidth: 160,
                                backgroundColor: '#0a66c2',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 3,
                                '&:hover': { backgroundColor: '#004182' },
                            }}
                        >
                            LinkedIn
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<GitHubIcon />}
                            href="https://github.com/radongit"
                            target="_blank"
                            sx={{
                                minWidth: 160,
                                backgroundColor: '#24292f',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 3,
                                '&:hover': { backgroundColor: '#1a1e22' },
                            }}
                        >
                            GitHub
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<EmailIcon />}
                            href="mailto:rdavis334@gmail.com"
                            sx={{
                                minWidth: 160,
                                borderColor: '#e65100',
                                color: '#e65100',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 3,
                                '&:hover': {
                                    backgroundColor: 'rgba(230,81,0,0.08)',
                                    borderColor: '#e65100',
                                },
                            }}
                        >
                            Email Me
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<PhoneIcon />}
                            href="tel:+17069909059"
                            sx={{
                                minWidth: 160,
                                borderColor: '#2e7d32',
                                color: '#2e7d32',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 3,
                                '&:hover': {
                                    backgroundColor: 'rgba(46,125,50,0.08)',
                                    borderColor: '#2e7d32',
                                },
                            }}
                        >
                            Call Me
                        </Button>
                    </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                    <Grid container spacing={2}>
                        {stats.map(stat => (
                            <Grid key={stat.label} size={{ xs: 6 }}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        height: '100%',
                                        p: 2.5,
                                        textAlign: 'center',
                                        borderRadius: 3,
                                        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                                        backgroundColor: isDark ? '#1a1a1a' : '#fafafa',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-3px)',
                                            boxShadow: isDark
                                                ? '0 4px 16px rgba(0,0,0,0.3)'
                                                : '0 4px 16px rgba(0,0,0,0.08)',
                                        },
                                    }}
                                >
                                    <Box sx={{ color: '#2e7d32', mb: 1, display: 'flex', justifyContent: 'center' }}>
                                        {stat.icon}
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        fontWeight={800}
                                        sx={{
                                            background: 'linear-gradient(135deg, #1b5e20, #43a047)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'text.secondary',
                                            fontWeight: 600,
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Section>
    )
}
