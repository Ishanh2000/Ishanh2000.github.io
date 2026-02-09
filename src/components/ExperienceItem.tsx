interface ExperienceItemProps {
  id: string
  position: number
}

export default function ExperienceItem({ id, position }: ExperienceItemProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-12">
      <div className="border-l-4 border-blue-600 pl-4">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
          Lorem Ipsum Position {position}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
          Company Name • Jan 2024 - Present
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul className="mt-3 space-y-1 text-slate-700 dark:text-slate-300">
          <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>• Sed do eiusmod tempor incididunt ut labore</li>
          <li>• Duis aute irure dolor in reprehenderit in voluptate</li>
          <li>• Excepteur sint occaecat cupidatat non proident</li>
        </ul>
        <div className="mt-4">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Technologies Used:
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
