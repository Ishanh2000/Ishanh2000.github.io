export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center justify-center p-4 sm:p-6 pt-8 md:pt-6">
      <div className="bg-white dark:bg-slate-800/95 rounded-2xl shadow-2xl border-2 border-slate-300 dark:border-slate-700 p-6 sm:p-10 md:p-16 text-center max-w-lg w-full transition-colors duration-300">
        <div className="mb-6 sm:mb-8">
          <img
            src="/images/2025-12-29.webp"
            alt="Ishanh Misra"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-700 dark:border-slate-500 shadow-lg mx-auto transition-transform duration-300 hover:scale-105"
            onError={e => {
              e.currentTarget.src = '/images/2022-01-20.png'
            }}
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Ishanh Misra
        </h1>

        <div className="w-16 sm:w-20 h-0.5 bg-slate-700 dark:bg-slate-500 mx-auto my-4 sm:my-6"></div>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium mb-6 sm:mb-8">
          Software Developer
        </p>

        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-6 sm:mt-8">
          Portfolio coming soon
        </p>
      </div>
    </div>
  )
}
