import AppHeader from './components/AppHeader'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import WorkSection from './components/WorkSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <>
      <AppHeader />
      <main>
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  )
}
