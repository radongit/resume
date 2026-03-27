import AppHeader from './components/AppHeader'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import WorkSection from './components/WorkSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import ResumeSection from './components/ResumeSection'
import AppFooter from './components/AppFooter'
import data from './data.json'

export default function App() {
  return (
    <>
      <AppHeader />
      <main>
        <AboutSection />
        {data.skillGroups.length > 0 && <SkillsSection />}
        {data.jobs.length > 0 && <WorkSection />}
        {data.projects.length > 0 && <ProjectsSection />}
        {data.schools.length > 0 && <EducationSection />}
        {(data.documents.length > 0 || data.contacts.length > 0) && <ResumeSection />}
      </main>
      <AppFooter />
    </>
  )
}
