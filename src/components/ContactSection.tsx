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
        icon: <PhoneIcon sx={{ fontSize: 32 }} />,
        label: 'Phone',
        value: '(706) 992-9059',
        href: 'tel:+17069929059',
    },
    {
        icon: <EmailIcon sx={{ fontSize: 32 }} />,
        label: 'Email',
        value: 'rdavis334@gmail.com',
        href: 'mailto:rdavis334@gmail.com',
    },
    {
        icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
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
                        variant="outlined"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            p: 3,
                            textDecoration: 'none',
                            color: 'inherit',
                            borderRadius: 3,
                            borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                            backgroundColor: isDark ? '#121212' : '#fff',
                            transition: 'box-shadow 0.2s, transform 0.2s',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.08)',
                            },
                        }}
                    >
                        <Box sx={{ color: '#2e7d32', display: 'flex' }}>
                            {contact.icon}
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'text.secondary' }}>
                                {contact.label}
                            </Typography>
                            <Typography variant="h6" fontWeight={600}>
                                {contact.value}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </Stack>
        </Section>
    )
}
