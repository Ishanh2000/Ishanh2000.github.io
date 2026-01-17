import { HiMail, HiPhone } from 'react-icons/hi'
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si'

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center justify-center p-4 sm:p-6 pt-8 md:pt-6">
      <div className="bg-white dark:bg-slate-800/95 rounded-2xl shadow-2xl border-2 border-slate-300 dark:border-slate-700 p-6 sm:p-8 md:p-12 max-w-2xl w-full transition-colors duration-300">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Get In Touch
        </h1>
        <div className="w-12 sm:w-16 h-1 bg-blue-600 mb-6"></div>
        
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>

        <div className="space-y-3">
          {/* Email */}
          <a
            href="mailto:ishanhmisra@gmail.com"
            className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
          >
            <HiMail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">
              ishanhmisra@gmail.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+917753851999"
            className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
          >
            <HiPhone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              +91-7753851999
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ishanh2000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
          >
            <SiGithub className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 dark:text-white flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors break-all">
              github.com/Ishanh2000
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/ishanhmisra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
          >
            <SiLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 dark:text-blue-400 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors break-all">
              linkedin.com/in/ishanhmisra
            </span>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/Ishanhmisra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
          >
            <SiX className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 dark:text-white flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
              @Ishanhmisra
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
