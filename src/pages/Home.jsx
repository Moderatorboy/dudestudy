import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

// Particle Background Component
function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 bg-white/20 rounded-full absolute animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

// Individual Batch Card
function BatchCard({ b }) {
  const navigate = useNavigate()

  return (
    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 max-w-sm mx-auto my-6">
      {/* Image */}
      <div className="w-full h-64 bg-white/5 flex items-center justify-center overflow-hidden relative">
        {b.photo ? (
          <img
            src={b.photo}
            alt={b.name}
            className="max-w-full max-h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110 hover:rotate-1"
          />
        ) : (
          <div className="text-white/50 text-sm">No Image</div>
        )}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {b.tag || 'New'}
        </div>
      </div>

      {/* Text */}
      <div className="p-6 text-center">
        <h3 className="text-white font-extrabold text-2xl mb-2 hover:text-purple-400 transition-colors duration-300">
          {b.name}
        </h3>
        {b.subtitle && (
          <p className="text-white/70 text-sm mb-4">{b.subtitle}</p>
        )}
        <button
          onClick={() => navigate(`/batch/${b.id}`)}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-sm shadow-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(128,0,255,0.7)] transition transform duration-300"
        >
          Explore Batch
        </button>
      </div>
    </div>
  )
}

// Main Home Component
export default function Home() {
  const [q, setQ] = useState('')
  const [darkMode, setDarkMode] = useState(true)
  const [animatedText, setAnimatedText] = useState('')
  const fullText = 'DUDE STUDY'

  // Animated header text typing effect
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setAnimatedText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const batches = SAMPLE.batches.filter(b =>
    b.name.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className={`${darkMode ? 'bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen flex flex-col relative transition-all duration-700`}>
      
      <ParticleBackground />

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 relative z-10">
        <h1 className="text-4xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse">
          {animatedText}
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition relative z-10"
        >
          {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Search Bar */}
      <div className="text-center my-10 relative z-10">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search your batch..."
          className="w-full max-w-3xl mx-auto px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 shadow-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Featured Batches */}
      <main className="flex-1 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {batches.length > 0 ? (
          batches.map(b => <BatchCard key={b.id} b={b} />)
        ) : (
          <p className="text-center text-white/50 col-span-full mt-10">No batches found</p>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center text-white/50 text-sm relative z-10">
        © 2025 DUDE STUDY · About · Contact · Privacy
      </footer>
    </div>
  )
}
