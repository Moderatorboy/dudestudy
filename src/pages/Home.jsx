import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 cursor-pointer group max-w-sm mx-auto my-6"
    >
      {/* Image Box */}
      <div className="w-full h-64 bg-white/5 flex items-center justify-center overflow-hidden relative">
        {b.photo ? (
          <img
            src={b.photo}
            alt={b.name}
            className="max-w-full max-h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
        ) : (
          <div className="text-white/50 text-sm">No Image</div>
        )}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {b.tag || 'New'}
        </div>
      </div>

      {/* Text Box */}
      <div className="p-6 text-center">
        <h3 className="text-white font-extrabold text-2xl mb-2">{b.name}</h3>
        {b.subtitle && (
          <p className="text-white/70 text-sm mb-4">{b.subtitle}</p>
        )}
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-sm shadow-lg hover:scale-105 transition transform duration-300">
          Explore Batch
        </button>
      </div>
    </Link>
  )
}

export default function Home() {
  const [q, setQ] = useState('')
  const [darkMode, setDarkMode] = useState(true)
  const batches = SAMPLE.batches.filter(b =>
    b.name.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className={`${darkMode ? 'bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen flex flex-col transition-all duration-700`}>
      
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-4xl font-extrabold tracking-wider">DUDE STUDY</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
        >
          {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Search Bar */}
      <div className="text-center my-10">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search your batch..."
          className="w-full max-w-3xl mx-auto px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 shadow-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Featured Batches */}
      <main className="flex-1 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {batches.length > 0 ? (
          batches.map(b => <BatchCard key={b.id} b={b} />)
        ) : (
          <p className="text-center text-white/50 col-span-full mt-10">No batches found</p>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center text-white/50 text-sm">
        © 2025 DUDE STUDY · About · Contact · Privacy
      </footer>
    </div>
  )
}
