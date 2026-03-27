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
import { useTheme } from '@mui/material/styles'
import Section from './Section'
import Icon from '../iconMap'
import data from '../data.json'

export default function AboutSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="about" title={data.name} subtitle={data.tags.join(' · ')}>
            <Grid container spacing={{ xs: 5, md: 8 }}>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            lineHeight: 1.9,
                            fontWeight: 400,
                            color: 'text.secondary',
                            fontSize: '1.05rem',
                            maxWidth: 540,
                        }}
                    >
                        I am a full stack developer with over 7 years of experience building web applications and services. I have a passion for learning new technologies and solving complex problems. In my long career, I have worked on a wide range of projects, from small business websites to large-scale enterprise applications, and have experience running an IT deparment as a director as well as working with a team.
                    </Typography>

                    <Stack direction="row" sx={{ mt: 5, flexWrap: 'wrap', gap: 1.5 }}>
                        <Button
                            variant="contained"
                            startIcon={<LinkedInIcon />}
                            href="https://linkedin.com/in/robinson-a-davis"
                            target="_blank"
                            sx={{
                                minWidth: 150,
                                backgroundColor: '#0a66c2',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 3,
                                py: 1.2,
                                fontSize: '0.875rem',
                                boxShadow: 'none',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    backgroundColor: '#004182',
                                    boxShadow: '0 4px 16px rgba(10,102,194,0.3)',
                                    transform: 'translateY(-1px)',
                                },
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
                                minWidth: 150,
                                backgroundColor: isDark ? '#f0f0f0' : '#1a1a1a',
                                color: isDark ? '#1a1a1a' : '#f0f0f0',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 3,
                                py: 1.2,
                                fontSize: '0.875rem',
                                boxShadow: 'none',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    backgroundColor: isDark ? '#ffffff' : '#000000',
                                    boxShadow: isDark ? '0 4px 16px rgba(255,255,255,0.15)' : '0 4px 16px rgba(0,0,0,0.2)',
                                    transform: 'translateY(-1px)',
                                },
                            }}
                        >
                            GitHub
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<EmailIcon />}
                            href="mailto:rdavis334@gmail.com"
                            sx={{
                                minWidth: 150,
                                borderColor: isDark ? 'rgba(230,81,0,0.4)' : 'rgba(230,81,0,0.3)',
                                color: '#e65100',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 3,
                                py: 1.2,
                                fontSize: '0.875rem',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    backgroundColor: 'rgba(230,81,0,0.06)',
                                    borderColor: '#e65100',
                                    transform: 'translateY(-1px)',
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
                                minWidth: 150,
                                borderColor: isDark ? 'rgba(46,125,50,0.4)' : 'rgba(46,125,50,0.3)',
                                color: '#2e7d32',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 3,
                                py: 1.2,
                                fontSize: '0.875rem',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    backgroundColor: 'rgba(46,125,50,0.06)',
                                    borderColor: '#2e7d32',
                                    transform: 'translateY(-1px)',
                                },
                            }}
                        >
                            Call Me
                        </Button>
                    </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                    <Grid container spacing={2.5}>
                        {data.stats.map(stat => (
                            <Grid key={stat.label} size={{ xs: 6 }}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        p: 3,
                                        textAlign: 'center',
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                                        backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: isDark
                                                ? '0 12px 40px rgba(0,0,0,0.4)'
                                                : '0 12px 40px rgba(0,0,0,0.06)',
                                            borderColor: isDark ? 'rgba(46,125,50,0.2)' : 'rgba(46,125,50,0.15)',
                                        },
                                    }}
                                >
                                    <Box sx={{ color: isDark ? '#66bb6a' : '#2e7d32', mb: 1.5, display: 'flex', justifyContent: 'center', opacity: 0.8 }}>
                                        <Icon name={stat.icon} />
                                    </Box>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontFamily: '"Archivo", sans-serif',
                                            fontWeight: 800,
                                            fontSize: '2.25rem',
                                            color: isDark ? '#c8e6c9' : '#1b5e20',
                                            lineHeight: 1,
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'text.secondary',
                                            fontWeight: 500,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            fontSize: '0.65rem',
                                            mt: 1,
                                            display: 'block',
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
