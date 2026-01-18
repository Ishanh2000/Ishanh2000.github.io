import { ReactNode, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { HiMail, HiPhone } from 'react-icons/hi'
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si'
import Navigation from './Navigation'
import CommandPalette from './CommandPalette'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const navigate = useNavigate()

  // Listen for keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + Shift + K for command palette
      if (e.altKey && e.shiftKey && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCommandPaletteOpen(true)
      }
      // Ctrl + Shift + 0/1/2 for navigation
      if (e.ctrlKey && e.shiftKey) {
        switch (e.key) {
          case ')':
          case '0':
            e.preventDefault()
            navigate('/')
            break
          case '!':
          case '1':
            e.preventDefault()
            navigate('/experience')
            break
          case '@':
          case '2':
            e.preventDefault()
            navigate('/blog')
            break
          case '#':
          case '3':
            e.preventDefault()
            navigate('/contact')
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <Navigation />
      
      {/* Command Palette */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)} 
      />
      
      {/* Main content with top padding for fixed nav */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                Ishanh Misra
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Software Developer passionate about building elegant solutions
                to complex problems.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                Quick Links
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <Link
                    to="/"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title="Home (Ctrl+Shift+0)"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/experience"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title="Experience (Ctrl+Shift+1)"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title="Blog (Ctrl+Shift+2)"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title="Contact (Ctrl+Shift+3)"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsCommandPaletteOpen(true)}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                  >
                    Keyboard Shortcuts
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                <a 
                  href="/contact" 
                  className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Connect
                </a>
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="mailto:ishanhmisra@gmail.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Email"
                >
                  <HiMail className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="tel:+917753851999"
                  className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  aria-label="Phone"
                >
                  <HiPhone className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://github.com/Ishanh2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <SiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/ishanhmisra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://x.com/Ishanhmisra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <SiX className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Ishanh Misra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
