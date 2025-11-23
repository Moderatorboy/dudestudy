import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer group max-w-md mx-auto my-4"
    >
      {/* Image Box */}
      <div className="w-full h-64 bg-slate-800 flex items-center justify-center overflow-hidden relative">
        {b.photo ? (
          <img
            src={b.photo}
            alt={b.name}
            className="max-w-full max-h-full object-cover p-2 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl rounded-lg"
          />
        ) : (
          <div className="text-slate-400 text-sm">No Image</div>
        )}
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-80">
          {b.tag || 'New'}
        </div>
      </div>

      {/* Text Box */}
      <div className="p-5 text-center bg-slate-900 border-t border-slate-700">
        <h3 className="text-white font-bold text-xl mb-1">{b.name}</h3>
        {b.subtitle && (
          <p className="text-slate-400 text-sm">{b.subtitle}</p>
        )}
        <button className="mt-3 px-4 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-500 transition">
          View Batch
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
    <div className={`${darkMode ? 'bg-gradient-to-br from-slate-950 to-slate-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen flex flex-col transition-colors duration-500`}>
      
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold tracking-wide">DUDE STUDY</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
        >
          {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Search Bar */}
      <div className="text-center my-8">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search your batch..."
          className="w-full max-w-2xl mx-auto px-6 py-4 rounded-full border border-slate-700 bg-slate-800 text-white placeholder-slate-400 shadow-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300 hover:shadow-lg"
        />
      </div>

      {/* Featured Batch */}
      <main className="flex-1 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {batches.length > 0 ? (
          batches.map(b => <BatchCard key={b.id} b={b} />)
        ) : (
          <p className="text-center text-slate-400 col-span-full">No batches found</p>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-slate-800 text-center text-slate-400 text-sm">
        © 2025 DUDE STUDY · About · Contact · Privacy
      </footer>
    </div>
  )
}
