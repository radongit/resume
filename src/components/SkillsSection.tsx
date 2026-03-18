import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import CodeIcon from '@mui/icons-material/Code'
import WebIcon from '@mui/icons-material/Web'
import DnsIcon from '@mui/icons-material/Dns'
import CloudIcon from '@mui/icons-material/Cloud'
import GitHubIcon from '@mui/icons-material/GitHub'
import StorageIcon from '@mui/icons-material/Storage'
import ComputerIcon from '@mui/icons-material/Computer'
import BuildIcon from '@mui/icons-material/Build'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import PhoneIcon from '@mui/icons-material/Phone'
import SchoolIcon from '@mui/icons-material/School'
import LockIcon from '@mui/icons-material/Lock'
import { useTheme } from '@mui/material/styles'
import Section from './Section'

const skillGroups = [
    {
        title: 'Programming & Web Languages',
        icon: <CodeIcon />,
        skills: ['Java', 'C#', 'PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'JSON'],
    },
    {
        title: 'Frameworks & Libraries',
        icon: <WebIcon />,
        skills: ['Bootstrap', 'React', 'MUI', 'Express.js', 'JavaFX', 'jQuery', 'Spring Boot'],
    },
    {
        title: 'Web Hosting & Servers',
        icon: <DnsIcon />,
        skills: ['IIS', 'Apache', 'Nginx', 'XAMPP'],
    },
    {
        title: 'Cloud Computing Services',
        icon: <CloudIcon />,
        skills: ['AWS', 'Amazon SES', 'Route 53', 'Amazon EC2', 'Amazon S3'],
    },
    {
        title: 'Version Control & Deployment',
        icon: <GitHubIcon />,
        skills: ['GitHub', 'GitHub Actions', 'Bitbucket', 'Bitbucket Pipelines', 'JIRA', 'Docker'],
    },
    {
        title: 'Databases & Warehousing',
        icon: <StorageIcon />,
        skills: ['PostgreSQL', 'pgAdmin', 'Prisma', 'MySQL', 'MySQL Workbench', 'MS SQL Server', 'SSMS'],
    },
    {
        title: 'Operating Systems',
        icon: <ComputerIcon />,
        skills: ['Linux Server', 'Linux Desktop', 'Windows Server', 'Windows Desktop'],
    },
    {
        title: 'Development & Package Tools',
        icon: <BuildIcon />,
        skills: ['NetBeans', 'Eclipse', 'Visual Studio', 'VS Code', 'MobaXterm', 'PowerShell', 'Bash', 'Windows Admin Center', 'Node.js', 'npm', 'Vite', 'Maven', 'Swagger', 'Postman'],
    },
    {
        title: 'AI Development Tools',
        icon: <SmartToyIcon />,
        skills: ['Claude CLI', 'ChatGPT Codex', 'Google Gemini CLI'],
    },
    {
        title: 'Telecommunications',
        icon: <PhoneIcon />,
        skills: ['SMS', 'Asterisk (FreePBX)', 'Dial Plan Programming', 'SIP', 'SIT'],
    },
    {
        title: 'Concepts & Fundamentals',
        icon: <SchoolIcon />,
        skills: ['OOP', 'MVC', 'Agile', 'Version Control', 'CI/CD', 'TDD', 'Cloud Computing', 'Microservices', 'Sync/Async', 'SaaS', 'SDLC', 'REST API', 'CRUD', 'AJAX', 'Rate Limiting', 'SPA'],
    },
    {
        title: 'Security & Authentication',
        icon: <LockIcon />,
        skills: ['JWT', 'OAuth', 'MSAL', 'SSO'],
    },
]

export default function SkillsSection() {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    return (
        <Section id="skills" title="Skills" subtitle="Know What I Know" alternate>
            <Grid container spacing={3}>
                {skillGroups.map(group => (
                    <Grid key={group.title} size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                borderRadius: 3,
                                borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                                backgroundColor: isDark ? '#121212' : '#fff',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                transition: 'box-shadow 0.2s, transform 0.2s',
                                '&:hover': {
                                    boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.08)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                    <Box sx={{ color: '#2e7d32', display: 'flex' }}>
                                        {group.icon}
                                    </Box>
                                    <Typography variant="subtitle1" fontWeight={700} sx={{ lineHeight: 1.3 }}>
                                        {group.title}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                                    {group.skills.map(skill => (
                                        <Chip key={skill} label={skill} size="small" />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}
