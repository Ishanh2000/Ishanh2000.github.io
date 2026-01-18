import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
  const [isImageExpanded, setIsImageExpanded] = useState(false)
  
  // Photo metadata
  const photoDate = new Date('2025-12-29T12:58:07+05:30')
  const formattedDate = photoDate.toLocaleDateString(undefined, { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
  const formattedTime = photoDate.toLocaleTimeString(undefined, { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    timeZoneName: 'short'
  })
  
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center justify-center p-4 sm:p-6 pt-8 md:pt-6">
      <div className="bg-white dark:bg-slate-800/95 rounded-2xl shadow-2xl border-2 border-slate-300 dark:border-slate-700 p-6 sm:p-8 md:p-12 max-w-4xl w-full transition-colors duration-300">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
            {/* Photo */}
            <div className="flex justify-center md:justify-start flex-shrink-0">
              <img
                src="/images/2025-12-29.webp"
                alt="Ishanh Misra"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-slate-700 dark:border-slate-500 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setIsImageExpanded(true)}
                onError={e => {
                  e.currentTarget.src = '/images/2022-01-20.png'
                }}
              />
            </div>

            {/* Name and Pills */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                Ishanh Misra
              </h1>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Link
                  to="/experience"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-full transition-colors duration-200 border border-slate-300 dark:border-slate-600"
                >
                  Experience
                </Link>
                <Link
                  to="/blog"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-full transition-colors duration-200 border border-slate-300 dark:border-slate-600"
                >
                  Blog
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-full transition-colors duration-200 border border-slate-300 dark:border-slate-600"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
            About
          </h2>
          
          <div className="text-sm space-y-2">
            <p className="text-slate-600 dark:text-slate-300">
              Software Developer passionate about building elegant solutions to complex problems.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">Current Employment: </span>
              Software Engineer 2 (L61) at{' '}
              <a 
                href="https://www.microsoft.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-colors"
              >
                Microsoft Corporation
              </a>
              {' '}(Since July 2022)
            </p>
            
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">Current Location: </span>
              <a 
                href="https://en.wikipedia.org/wiki/Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-colors"
              >
                Hyderabad, Telangana, India
              </a>
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
            Skills
          </h2>
          
          <div className="space-y-3 text-sm">
            {/* Languages */}
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Languages: </span>
              <span className="text-slate-600 dark:text-slate-300">C, C++, C#, PowerShell, Python, JavaScript, TypeScript, HTML, CSS, Bash</span>
            </div>

            {/* Frameworks & Tools */}
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Frameworks & Tools: </span>
              <span className="text-slate-600 dark:text-slate-300">.NET, Node.js, Git, Angular, React, React Native</span>
            </div>

            {/* AI Tools */}
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">AI Tools: </span>
              <span className="text-slate-600 dark:text-slate-300">Cursor, GitHub Copilot, Claude (Sonnet/Opus), ChatGPT, Prompt Engineering</span>
            </div>

            {/* Databases */}
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Databases: </span>
              <span className="text-slate-600 dark:text-slate-300">SQL, Cosmos DB, MongoDB, Blob/File/Table Storage, Data Explorer</span>
            </div>

            {/* Azure */}
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Azure: </span>
              <span className="text-slate-600 dark:text-slate-300">App Service, Service Fabric, Service Bus, Entra ID, DevOps, VMSS, Translator</span>
            </div>

            {/* Presentation & Video */}
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Presentation & Video Editing: </span>
              <span className="text-slate-600 dark:text-slate-300">PowerPoint, Wondershare Filmora, ClipChamp</span>
            </div>

            {/* Academic */}
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Academic: </span>
              <span className="text-slate-600 dark:text-slate-300">LaTeX, MATLAB, Calculus, Trigonometry, Geometry, Electromagnetism, Gravitation</span>
            </div>

            {/* Other */}
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Other: </span>
              <span className="text-slate-600 dark:text-slate-300">Figma, Arduino, Raspberry Pi, AutoCAD, FPGA, Vivado Xilinx ISE</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          
          <div className="space-y-5 text-sm">
            {/* Bachelor's Degree */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">B.Tech in Computer Science & Engineering</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  <a 
                    href="https://www.iitk.ac.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-colors"
                  >
                    Indian Institute of Technology Kanpur
                  </a>
                </p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <p className="font-semibold text-slate-900 dark:text-white">9.86 / 10.0</p>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Jul 2018 – Jun 2022</p>
              </div>
            </div>

            {/* Class XII */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Senior Secondary (
                  <a 
                    href="https://www.cbse.gov.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-colors"
                  >
                    CBSE
                  </a>
                  )
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  <a 
                    href="https://dpsazaadnagar.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-colors"
                  >
                    Delhi Public School, Azaad Nagar, Kanpur
                  </a>
                </p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <p className="font-semibold text-slate-900 dark:text-white">96.00%</p>
                <p className="text-slate-600 dark:text-slate-300 mt-1">2018</p>
              </div>
            </div>

            {/* Class X */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Secondary School (
                  <a 
                    href="https://www.cbse.gov.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-colors"
                  >
                    CBSE
                  </a>
                  )
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  <a 
                    href="https://dpsazaadnagar.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-colors"
                  >
                    Delhi Public School, Azaad Nagar, Kanpur
                  </a>
                </p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <p className="font-semibold text-slate-900 dark:text-white">10.0 / 10.0</p>
                <p className="text-slate-600 dark:text-slate-300 mt-1">2016</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
            Achievements & Honors
          </h2>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">Security First Initiative Award, Microsoft Corporation (2025)</p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">Engineering Excellence Award, Microsoft Corporation (2024)</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">Aditya Birla Scholarship recipient (2018-2022)</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">Academic Excellence Award (4 times), IIT Kanpur</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">First Prize in Summer of Code 2019, IIT Kanpur (sponsored by Nutanix & UPSIDC)</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">Student Guide (Counselling Service, IIT Kanpur) - Mentored five freshers maneuver through college life</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">Secretary (Association for Computing Activities, IITK) - Maintaining ACA website, finding projects for freshers</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">Selected for Semester Exchange at EPFL, Switzerland (Spring 2021)</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">Education Minister (DPS Azaad Nagar, Kanpur) - Guiding students about academia/olympiads/contests (2016-17)</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">Offered admission to Bachelor of Science at Indian Institute of Science (IISc), Bangalore</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">All India Rank 324 in JEE Advanced 2018 & AIR 598 in JEE Mains 2018</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">All India Rank 216 in KVPY 2016 (offered admission to IISc Bangalore)</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 relative top-[-1px]">●</span>
              <p className="text-slate-600 dark:text-slate-300">National Talent Search Examination (NTSE) Scholar, 2016</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Expand Modal */}
      {isImageExpanded && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <div className="relative max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src="/images/2025-12-29.webp"
              alt="Ishanh Misra"
              className="max-w-full max-h-[80vh] object-contain rounded-t-lg shadow-2xl"
              onError={e => {
                e.currentTarget.src = '/images/2022-01-20.png'
              }}
            />
            <div className="bg-white dark:bg-slate-800 rounded-b-lg p-4 text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-slate-600 dark:text-slate-300">
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Location: </span>
                  <a 
                    href="https://maps.app.goo.gl/YdMsU8bnezste4As9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline decoration-slate-400 dark:decoration-slate-500 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-colors"
                  >
                    Tijara Fort, Rajasthan, India
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Date: </span>
                  {formattedDate} {formattedTime}
                </div>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-lg"
              onClick={() => setIsImageExpanded(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
