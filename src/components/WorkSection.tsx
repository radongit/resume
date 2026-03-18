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
import WorkIcon from '@mui/icons-material/Work'
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
                        variant="outlined"
                        sx={{
                            borderRadius: 3,
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                            backgroundColor: isDark ? '#1a1a1a' : '#fafafa',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            transition: 'box-shadow 0.2s, transform 0.2s',
                            '&:hover': {
                                boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.08)',
                                transform: 'translateY(-2px)',
                            },
                        }}
                    >
                        <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                                <Box sx={{ color: '#2e7d32', display: 'flex' }}>
                                    <WorkIcon />
                                </Box>
                                <Typography variant="h5" fontWeight={600}>
                                    {job.company}
                                </Typography>
                                {job.current && (
                                    <Chip label="Current" size="small" color="primary" sx={{ ml: 'auto' }} />
                                )}
                            </Box>
                            <Typography variant="body1" fontWeight={500} sx={{ ml: 4.5 }}>
                                {job.title}
                            </Typography>
                            {job.focus && (
                                <Typography variant="body2" color="text.secondary" sx={{ ml: 4.5 }}>
                                    {job.focus}
                                </Typography>
                            )}
                            <Stack direction="row" sx={{ mt: 1.5, ml: 4.5, flexWrap: 'wrap', gap: 1 }}>
                                <Chip icon={<PlaceIcon />} label={job.location} size="small" variant="outlined" />
                                <Chip icon={<CalendarTodayIcon />} label={job.period} size="small" />
                            </Stack>
                            <List dense sx={{ mt: 1.5, ml: 3 }}>
                                {job.bullets.map((bullet, i) => (
                                    <ListItem key={i} sx={{ px: 0, py: 0.25 }}>
                                        <ListItemIcon sx={{ minWidth: 28, color: '#2e7d32' }}>
                                            <ChevronRightIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={bullet}
                                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
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
