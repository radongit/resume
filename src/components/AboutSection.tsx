import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme, alpha } from '@mui/material/styles'
import Section from './Section'
import Icon from '../iconMap'
import data from '../data.json'

const buttonStyles: Record<string, {
    variant: 'contained' | 'outlined'
    bg: (isDark: boolean) => string
    color: (isDark: boolean) => string
    hoverBg: (isDark: boolean) => string
    hoverShadow: (isDark: boolean) => string
}> = {
    LinkedIn: {
        variant: 'contained',
        bg: () => '#0a66c2',
        color: () => '#fff',
        hoverBg: () => '#004182',
        hoverShadow: () => '0 4px 16px rgba(10,102,194,0.3)',
    },
    GitHub: {
        variant: 'contained',
        bg: (isDark) => isDark ? '#f0f0f0' : '#1a1a1a',
        color: (isDark) => isDark ? '#1a1a1a' : '#f0f0f0',
        hoverBg: (isDark) => isDark ? '#ffffff' : '#000000',
        hoverShadow: (isDark) => isDark ? '0 4px 16px rgba(255,255,255,0.15)' : '0 4px 16px rgba(0,0,0,0.2)',
    },
}

export default function AboutSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="about" title={data.name} subtitle={data.tags.length > 0 ? data.tags.join(' · ') : undefined}>
            <Grid container spacing={{ xs: 5, md: 8 }}>
                <Grid size={{ xs: 12, md: data.stats.length > 0 ? 7 : 12 }}>
                    {data.bio && (
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
                            {data.bio}
                        </Typography>
                    )}

                    {data.contacts.length > 0 && (
                        <Stack direction="row" sx={{ mt: data.bio ? 5 : 0, flexWrap: 'wrap', gap: 1.5 }}>
                            {data.contacts.map(contact => {
                                const brand = buttonStyles[contact.label]
                                if (brand) {
                                    return (
                                        <Button
                                            key={contact.label}
                                            variant="contained"
                                            startIcon={<Icon name={contact.icon} />}
                                            href={contact.href}
                                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                                            sx={{
                                                minWidth: 150,
                                                backgroundColor: brand.bg(isDark),
                                                color: brand.color(isDark),
                                                textTransform: 'none',
                                                fontWeight: 600,
                                                borderRadius: 2,
                                                px: 3,
                                                py: 1.2,
                                                fontSize: '0.875rem',
                                                boxShadow: 'none',
                                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '&:hover': {
                                                    backgroundColor: brand.hoverBg(isDark),
                                                    boxShadow: brand.hoverShadow(isDark),
                                                    transform: 'translateY(-1px)',
                                                },
                                            }}
                                        >
                                            {contact.label}
                                        </Button>
                                    )
                                }

                                const isEmail = contact.href.startsWith('mailto:')
                                const themeColor = isEmail ? theme.palette.secondary : theme.palette.primary
                                return (
                                    <Button
                                        key={contact.label}
                                        variant="outlined"
                                        startIcon={<Icon name={contact.icon} />}
                                        href={contact.href}
                                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                                        sx={{
                                            minWidth: 150,
                                            borderColor: isDark ? alpha(themeColor.main, 0.4) : alpha(themeColor.main, 0.3),
                                            color: themeColor.main,
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            borderRadius: 2,
                                            px: 3,
                                            py: 1.2,
                                            fontSize: '0.875rem',
                                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                backgroundColor: alpha(themeColor.main, 0.06),
                                                borderColor: themeColor.main,
                                                transform: 'translateY(-1px)',
                                            },
                                        }}
                                    >
                                        {contact.label}
                                    </Button>
                                )
                            })}
                        </Stack>
                    )}
                </Grid>

                {data.stats.length > 0 && (
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
                                                borderColor: isDark ? alpha(theme.palette.primary.main, 0.2) : alpha(theme.palette.primary.main, 0.15),
                                            },
                                        }}
                                    >
                                        <Box sx={{ color: isDark ? theme.palette.primary.light : theme.palette.primary.main, mb: 1.5, display: 'flex', justifyContent: 'center', opacity: 0.8 }}>
                                            <Icon name={stat.icon} />
                                        </Box>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontFamily: '"Archivo", sans-serif',
                                                fontWeight: 800,
                                                fontSize: '2.25rem',
                                                color: isDark ? theme.palette.primary.light : theme.palette.primary.dark,
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
                )}
            </Grid>
        </Section>
    )
}
