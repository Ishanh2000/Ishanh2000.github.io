import { FiDownload } from 'react-icons/fi'

interface MobileResumeJumpProps {
  onJumpToResumes: () => void
}

export default function MobileResumeJump({ onJumpToResumes }: MobileResumeJumpProps) {
  return (
    <button
      onClick={onJumpToResumes}
      className="w-full flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
    >
      <div className="flex items-center space-x-2">
        <FiDownload className="text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
          Jump to Resume Downloads
        </span>
      </div>
      <span className="text-blue-600 dark:text-blue-400">→</span>
    </button>
  )
}
