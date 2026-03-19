import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useTheme } from '@mui/material/styles'
import Section from './Section'

const contacts = [
    {
        icon: <PhoneIcon sx={{ fontSize: 24 }} />,
        label: 'Phone',
        value: '(706) 992-9059',
        href: 'tel:+17069929059',
    },
    {
        icon: <EmailIcon sx={{ fontSize: 24 }} />,
        label: 'Email',
        value: 'rdavis334@gmail.com',
        href: 'mailto:rdavis334@gmail.com',
    },
    {
        icon: <LinkedInIcon sx={{ fontSize: 24 }} />,
        label: 'LinkedIn',
        value: 'robinson-a-davis',
        href: 'https://linkedin.com/in/robinson-a-davis',
    },
]

export default function ContactSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="contact" title="Contact" subtitle="How To Reach Me" alternate>
            <Stack spacing={2} sx={{ maxWidth: 500 }}>
                {contacts.map(contact => (
                    <Card
                        key={contact.label}
                        component="a"
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            p: { xs: 2.5, md: 3 },
                            textDecoration: 'none',
                            color: 'inherit',
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
                        }}
                    >
                        <Box sx={{
                            color: isDark ? '#66bb6a' : '#2e7d32',
                            display: 'flex',
                            opacity: 0.7,
                        }}>
                            {contact.icon}
                        </Box>
                        <Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontWeight: 500,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'text.secondary',
                                    fontSize: '0.65rem',
                                }}
                            >
                                {contact.label}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    letterSpacing: '0.01em',
                                }}
                            >
                                {contact.value}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </Stack>
        </Section>
    )
}
