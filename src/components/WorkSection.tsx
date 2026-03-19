import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import PlaceIcon from '@mui/icons-material/Place'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { useTheme } from '@mui/material/styles'
import Section from './Section'

const jobs = [
    {
        company: 'Global Call Center Solutions',
        title: 'Senior Software Engineer',
        focus: 'Full Stack Development',
        location: 'Columbus, GA & Remote',
        period: 'July 2019 – Present',
        current: true,
        bullets: [
            'Modernized system processes such as implementing Bootstrap, Docker, and Bitbucket pipelines.',
            'Developed multiple SaaS products for clients that interfaced with in-house CRM giving call center agents the ability to coordinate directly.',
            'Developed and deployed a partner portal, allowing rapid collaboration between sites.',
            'Ensured compliance to PACE, SOC, and PCI DSS audtions and FCC regulations.'
        ],
    },
    {
        company: 'Sample Express',
        title: 'Director of Information Technology',
        location: 'West Point, GA',
        period: 'March 2018 – July 2019',
        current: false,
        bullets: [
            'Lead as Director of Information Technology, responsible for all decisions and solutions.',
            'Maintained and drastically improved interal CRM and inventory management system, which was critical to the business.',
            'Deployed a windows domain, bringing user management and security to modern standards.'
        ],
    },
]

export default function WorkSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="work" title="Work History" subtitle="Where I've Worked, What I've Done">
            <Stack spacing={3}>
                {jobs.map(job => (
                    <Card
                        key={job.company}
                        elevation={0}
                        sx={{
                            borderRadius: 3,
                            border: '1px solid',
                            borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                            backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                                boxShadow: isDark
                                    ? '0 8px 32px rgba(0,0,0,0.3)'
                                    : '0 8px 32px rgba(0,0,0,0.06)',
                                transform: 'translateY(-2px)',
                                borderColor: isDark ? 'rgba(46,125,50,0.15)' : 'rgba(46,125,50,0.12)',
                            },
                        }}
                    >
                        <CardContent sx={{ p: { xs: 3, md: 4 }, '&:last-child': { pb: { xs: 3, md: 4 } } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 0.5 }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: '"Archivo", sans-serif',
                                        fontWeight: 600,
                                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                                    }}
                                >
                                    {job.company}
                                </Typography>
                                {job.current && (
                                    <Chip
                                        label="Current"
                                        size="small"
                                        color="primary"
                                        sx={{ ml: 'auto', height: 24, fontSize: '0.7rem' }}
                                    />
                                )}
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 500,
                                    color: 'text.primary',
                                    fontSize: '0.95rem',
                                }}
                            >
                                {job.title}
                            </Typography>
                            {job.focus && (
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: isDark ? 'rgba(230,81,0,0.7)' : 'rgba(230,81,0,0.8)',
                                        fontWeight: 500,
                                        fontSize: '0.85rem',
                                        mt: 0.25,
                                    }}
                                >
                                    {job.focus}
                                </Typography>
                            )}
                            <Stack direction="row" sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
                                <Chip icon={<PlaceIcon />} label={job.location} size="small" variant="outlined" />
                                <Chip icon={<CalendarTodayIcon />} label={job.period} size="small" />
                            </Stack>
                            <List dense sx={{ mt: 2 }}>
                                {job.bullets.map((bullet, i) => (
                                    <ListItem key={i} sx={{ px: 0, py: 0.4 }}>
                                        <ListItemIcon sx={{ minWidth: 24, color: isDark ? '#66bb6a' : '#2e7d32', opacity: 0.6 }}>
                                            <ChevronRightIcon sx={{ fontSize: 16 }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={bullet}
                                            primaryTypographyProps={{
                                                variant: 'body2',
                                                color: 'text.secondary',
                                                sx: { lineHeight: 1.7, fontSize: '0.875rem' },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Section>
    )
}
