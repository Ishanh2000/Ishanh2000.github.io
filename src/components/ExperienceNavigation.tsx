import { FiBriefcase } from 'react-icons/fi'

interface Experience {
  id: string
  title: string
  company: string
}

interface ExperienceNavigationProps {
  experiences: Experience[]
  activeSection: string
  onNavigate: (id: string) => void
}

export default function ExperienceNavigation({ 
  experiences, 
  activeSection, 
  onNavigate 
}: ExperienceNavigationProps) {
  return (
    <div className="lg:sticky lg:top-24">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
        Navigation
      </h2>
      <nav className="space-y-2">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            onClick={() => onNavigate(exp.id)}
            className={`w-full flex items-start space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
              activeSection === exp.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
            }`}
          >
            <FiBriefcase className="text-lg mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{exp.title}</p>
              <p className="text-xs opacity-90 truncate">{exp.company}</p>
            </div>
          </button>
        ))}
      </nav>
    </div>
  )
}
