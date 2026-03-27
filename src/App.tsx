import { useState, useEffect } from 'react'
import AppHeader from './components/AppHeader'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import WorkSection from './components/WorkSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import ResumeSection from './components/ResumeSection'
import AppFooter from './components/AppFooter'
import ColorPickerPage from './components/ColorPickerPage'
import data from './data.json'

function getRoute() {
  const hash = window.location.hash
  if (hash === '#/colors') return 'colors'
  return 'home'
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === 'colors') return <ColorPickerPage />

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
