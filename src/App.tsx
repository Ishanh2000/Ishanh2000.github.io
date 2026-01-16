import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16 text-center max-w-lg w-full">
        <div className="mb-8">
          <img
            src="/images/2025-12-29.webp"
            alt="Ishanh Misra"
            className="w-48 h-48 rounded-full object-cover border-4 border-slate-700 shadow-lg mx-auto transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = '/images/2022-01-20.png'
            }}
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
          Ishanh Misra
        </h1>

        <div className="w-20 h-0.5 bg-slate-700 mx-auto my-6"></div>

        <p className="text-xl text-slate-600 font-medium mb-8">
          Software Developer
        </p>

        <p className="text-sm text-slate-400 mt-8">Portfolio coming soon</p>
      </div>
    </div>
  )
}

export default App
