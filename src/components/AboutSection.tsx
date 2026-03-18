import Typography from '@mui/material/Typography'
import Section from './Section'

export default function AboutSection() {
    return (
        <Section id="about" title="Robinson Davis">
            <Typography variant="body1" sx={{ color: '#e65100' }}>
                Husband &#183; Father &#183; Full-Stack Developer
            </Typography>
        </Section>
    )
}
