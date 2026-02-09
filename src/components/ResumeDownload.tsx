import { useState } from 'react'
import { FiDownload, FiInfo } from 'react-icons/fi'

interface Resume {
  name: string
  date: string
}

interface ResumeDownloadProps {
  resumes: Resume[]
}

export default function ResumeDownload({ resumes }: ResumeDownloadProps) {
  const [showTip, setShowTip] = useState(false)

  return (
    <div className="lg:sticky lg:top-24" id="resume-section">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Download Resume
        </h2>
        <button
          onClick={() => setShowTip(!showTip)}
          className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Toggle tip"
        >
          <FiInfo className="text-lg" />
        </button>
      </div>
      
      {showTip && (
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 animate-fadeIn">
          <p className="text-xs text-slate-700 dark:text-slate-300">
            <span className="font-semibold">💡 Tip:</span> Different resumes are optimized 
            for different purposes. Choose the one that best fits your needs.
          </p>
        </div>
      )}
      
      <div className="space-y-3">
        {resumes.map((resume, index) => (
          <button
            key={index}
            className="w-full flex items-start space-x-3 p-3 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-all duration-200 group"
          >
            <FiDownload className="text-blue-600 dark:text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
            <div className="flex-1 text-left">
              <p className="font-medium text-slate-900 dark:text-white text-sm">
                {resume.name}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {new Date(resume.date).toLocaleString(undefined, { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
