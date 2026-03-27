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
import WorkIcon from '@mui/icons-material/Work'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DescriptionIcon from '@mui/icons-material/Description'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FolderZipIcon from '@mui/icons-material/FolderZip'
import type { SxProps } from '@mui/material/styles'

const icons: Record<string, React.ComponentType<{ sx?: SxProps }>> = {
    Code: CodeIcon,
    Web: WebIcon,
    Dns: DnsIcon,
    Cloud: CloudIcon,
    GitHub: GitHubIcon,
    Storage: StorageIcon,
    Computer: ComputerIcon,
    Build: BuildIcon,
    SmartToy: SmartToyIcon,
    Phone: PhoneIcon,
    School: SchoolIcon,
    Lock: LockIcon,
    Work: WorkIcon,
    Email: EmailIcon,
    LinkedIn: LinkedInIcon,
    Description: DescriptionIcon,
    MailOutline: MailOutlineIcon,
    FolderZip: FolderZipIcon,
}

export default function Icon({ name, sx }: { name: string; sx?: SxProps }) {
    const Component = icons[name]
    if (!Component) return null
    return <Component sx={sx} />
}
