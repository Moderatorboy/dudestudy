import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-all cursor-pointer group max-w-xl mx-auto"
    >
      {/* Image Box */}
      <div className="w-full h-64 bg-slate-800 flex items-center justify-center overflow-hidden relative">
        {b.photo ? (
          <img
            src={b.photo}
            alt={b.name}
            className="max-w-full max-h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
          />
        ) : (
          <div className="text-slate-400 text-sm">No Image</div>
        )}
      </div>

      {/* Text Box */}
      <div className="p-4 text-center bg-slate-900 border-t border-slate-700">
        <h3 className="text-white font-semibold text-lg">{b.name}</h3>
        {b.subtitle && (
          <p className="text-sm text-slate-400 mt-1">{b.subtitle}</p>
        )}
      </div>
    </Link>
  )
}

export default function Home() {
  const [q, setQ] = useState('')
  const batches = SAMPLE.batches.filter(b =>
    b.name.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white">DUDE STUDY</h1>
        <button className="px-4 py-2 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition">
          Light Mode
        </button>
      </header>

      {/* Search Bar */}
      <div className="text-center my-6">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search batch..."
          className="w-full max-w-xl mx-auto px-5 py-3 rounded-full border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Featured Batch */}
      <main className="flex-1 px-6">
        <h2 className="text-xl font-semibold text-white mb-4">Featured Batch</h2>
        {batches.map(b => (
          <BatchCard key={b.id} b={b} />
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-10 py-6 border-t border-slate-800 text-center text-slate-400 text-sm">
        © 2025 DUDE STUDY · About · Contact · Privacy
      </footer>
    </div>
  )
}
