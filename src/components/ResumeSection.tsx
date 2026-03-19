import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import DescriptionIcon from '@mui/icons-material/Description'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FolderZipIcon from '@mui/icons-material/FolderZip'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import ArticleIcon from '@mui/icons-material/Article'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useTheme } from '@mui/material/styles'
import Section from './Section'

const documents = [
    {
        title: 'Resume',
        icon: <DescriptionIcon sx={{ fontSize: 24 }} />,
        description: 'My full professional resume detailing experience, skills, and education.',
        pdf: '/documents/RobinsonDavis_Resume.pdf',
        docx: '/documents/RobinsonDavis_Resume.docx',
    },
    {
        title: 'Cover Letter',
        icon: <MailOutlineIcon sx={{ fontSize: 24 }} />,
        description: 'A personalized cover letter outlining my background and goals.',
        pdf: '/documents/RobinsonDavis_Cover.pdf',
        docx: '/documents/RobinsonDavis_Cover.docx',
    },
    {
        title: 'Both',
        icon: <FolderZipIcon sx={{ fontSize: 24 }} />,
        description: 'Download both my resume and cover letter bundled together.',
        pdf: '/documents/RobinsonDavis_ResumeCover.pdf',
        docx: '/documents/RobinsonDavis_ResumeCover.docx',
    },
]

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

export default function ResumeSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="resume" title="Resume & Contact" subtitle="Download My Documents · Get In Touch" alternate>
            <Grid container spacing={{ xs: 4, md: 6 }}>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Stack spacing={2}>
                        {documents.map(doc => (
                            <Card
                                key={doc.title}
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
                                }}
                            >
                                <CardContent sx={{ p: { xs: 2.5, md: 3 }, '&:last-child': { pb: { xs: 2.5, md: 3 } } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                                        <Box sx={{ color: isDark ? '#66bb6a' : '#2e7d32', display: 'flex', opacity: 0.75 }}>
                                            {doc.icon}
                                        </Box>
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontFamily: '"Archivo", sans-serif',
                                                    fontWeight: 600,
                                                    fontSize: '1.15rem',
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {doc.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ fontSize: '0.82rem', lineHeight: 1.6, mt: 0.25 }}
                                            >
                                                {doc.description}
                                            </Typography>
                                        </Box>
                                        <Stack direction="row" spacing={1} sx={{ flexShrink: 0 }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<PictureAsPdfIcon />}
                                                href={doc.pdf}
                                                download
                                                size="small"
                                                sx={{
                                                    backgroundColor: '#c62828',
                                                    textTransform: 'none',
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    fontSize: '0.78rem',
                                                    boxShadow: 'none',
                                                    px: 2,
                                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&:hover': {
                                                        backgroundColor: '#8e0000',
                                                        boxShadow: '0 4px 16px rgba(198,40,40,0.3)',
                                                        transform: 'translateY(-1px)',
                                                    },
                                                }}
                                            >
                                                PDF
                                            </Button>
                                            <Button
                                                variant="contained"
                                                startIcon={<ArticleIcon />}
                                                href={doc.docx}
                                                download
                                                size="small"
                                                sx={{
                                                    backgroundColor: '#1565c0',
                                                    textTransform: 'none',
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    fontSize: '0.78rem',
                                                    boxShadow: 'none',
                                                    px: 2,
                                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&:hover': {
                                                        backgroundColor: '#003c8f',
                                                        boxShadow: '0 4px 16px rgba(21,101,192,0.3)',
                                                        transform: 'translateY(-1px)',
                                                    },
                                                }}
                                            >
                                                DOCX
                                            </Button>
                                        </Stack>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: '"Archivo", sans-serif',
                            fontWeight: 700,
                            fontSize: '1.3rem',
                            letterSpacing: '-0.02em',
                            mb: 2.5,
                            color: 'text.primary',
                        }}
                    >
                        Want to know more?
                    </Typography>
                    <Stack spacing={2}>
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
                                    gap: 2.5,
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
                                            fontSize: '0.95rem',
                                            letterSpacing: '0.01em',
                                        }}
                                    >
                                        {contact.value}
                                    </Typography>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Section>
    )
}
