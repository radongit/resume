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
import { useTheme } from '@mui/material/styles'
import Section from './Section'

const documents = [
    {
        title: 'Resume',
        icon: <DescriptionIcon sx={{ fontSize: 32 }} />,
        description: 'My full professional resume detailing experience, skills, and education.',
        pdf: '/documents/RobinsonDavis_Resume.pdf',
        docx: '/documents/RobinsonDavis_Resume.docx',
    },
    {
        title: 'Cover Letter',
        icon: <MailOutlineIcon sx={{ fontSize: 32 }} />,
        description: 'A personalized cover letter outlining my background and goals.',
        pdf: '/documents/RobinsonDavis_Cover.pdf',
        docx: '/documents/RobinsonDavis_Cover.docx',
    },
    {
        title: 'Both',
        icon: <FolderZipIcon sx={{ fontSize: 32 }} />,
        description: 'Download both my resume and cover letter bundled together.',
        pdf: '/documents/RobinsonDavis_ResumeCover.pdf',
        docx: '/documents/RobinsonDavis_ResumeCover.docx',
    },
]

export default function ResumeSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="resume" title="Resume" subtitle="Download My Documents" alternate>
            <Grid container spacing={3}>
                {documents.map(doc => (
                    <Grid key={doc.title} size={{ xs: 12, md: 4 }}>
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
                                        {doc.icon}
                                    </Box>
                                    <Typography variant="h6" fontWeight={700}>
                                        {doc.title}
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                                    {doc.description}
                                </Typography>

                                <Stack direction="row" spacing={1.5} sx={{ mt: 'auto' }}>
                                    <Button
                                        variant="contained"
                                        startIcon={<PictureAsPdfIcon />}
                                        href={doc.pdf}
                                        download
                                        sx={{
                                            flex: 1,
                                            backgroundColor: '#c62828',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            borderRadius: 2,
                                            '&:hover': { backgroundColor: '#8e0000' },
                                        }}
                                    >
                                        PDF
                                    </Button>
                                    <Button
                                        variant="contained"
                                        startIcon={<ArticleIcon />}
                                        href={doc.docx}
                                        download
                                        sx={{
                                            flex: 1,
                                            backgroundColor: '#1565c0',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            borderRadius: 2,
                                            '&:hover': { backgroundColor: '#003c8f' },
                                        }}
                                    >
                                        DOCX
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}
