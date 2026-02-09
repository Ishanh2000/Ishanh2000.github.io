import { useState, useEffect } from 'react'
import ExperienceNavigation from '../components/ExperienceNavigation'
import ExperienceItem from '../components/ExperienceItem'
import ResumeDownload from '../components/ResumeDownload'
import MobileResumeJump from '../components/MobileResumeJump'

export default function Experience() {
  const [activeSection, setActiveSection] = useState<string>('experience-1')

  const experiences = [
    { id: 'experience-1', title: 'Senior Software Engineer', company: 'Tech Company A' },
    { id: 'experience-2', title: 'Software Engineer', company: 'Tech Company B' },
    { id: 'experience-3', title: 'Junior Developer', company: 'Tech Company C' },
    { id: 'experience-4', title: 'Intern', company: 'Tech Company D' },
  ]

  const resumes = [
    { name: 'Full Resume', date: '2026-02-01T14:30:00Z' },
    { name: 'Tech Resume', date: '2026-01-28T09:15:00Z' },
    { name: 'Academic CV', date: '2026-01-25T16:45:00Z' },
    { name: 'One-Page Resume', date: '2026-02-03T11:20:00Z' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(id)
    }
  }

  const scrollToResumes = () => {
    const element = document.getElementById('resume-section')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = experiences.map(exp => document.getElementById(exp.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(experiences[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Work Experience</h1>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          
          {/* Mobile Resume Jump Notification */}
          <MobileResumeJump onJumpToResumes={scrollToResumes} />
        </div>

        {/* Three Column Layout for Desktop, Stacked for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Navigation - Hidden on mobile, sidebar on desktop */}
          <div className="hidden lg:block lg:col-span-2">
            <ExperienceNavigation
              experiences={experiences}
              activeSection={activeSection}
              onNavigate={scrollToSection}
            />
          </div>

          {/* Center Content - Main content area */}
          <div className="lg:col-span-8">
            <div className="min-h-[600px]">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 hidden lg:block">
                Work Experience
              </h2>
              {experiences.map((exp, index) => (
                <ExperienceItem key={exp.id} id={exp.id} position={index + 1} />
              ))}
            </div>
          </div>

          {/* Right Sidebar - Resume Downloads */}
          <div className="lg:col-span-2">
            <ResumeDownload resumes={resumes} />
          </div>
        </div>
      </div>
    </div>
  )
}
