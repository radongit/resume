import AppHeader from './components/AppHeader'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import WorkSection from './components/WorkSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import ResumeSection from './components/ResumeSection'
import AppFooter from './components/AppFooter'

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
        <ResumeSection />
      </main>
      <AppFooter />
    </>
  )
}
