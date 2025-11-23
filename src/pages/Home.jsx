import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-all cursor-pointer group"
    >
      {/* Image Box */}
      <div className="w-full h-48 bg-slate-800 flex items-center justify-center overflow-hidden relative">
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
        <h3 className="text-white font-semibold text-lg truncate">{b.name}</h3>
        {b.subtitle && (
          <p className="text-sm text-slate-400 mt-1">{b.subtitle}</p>
        )}
      </div>
    </Link>
  )
}

function MentorCard({ m }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-md hover:shadow-lg transition-all p-4 text-center">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border border-slate-700 mb-3">
        <img
          src={m.photo}
          alt={m.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-white font-semibold">{m.name}</h4>
      <p className="text-slate-400 text-sm">{m.subject}</p>
    </div>
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
        <h1 className="text-2xl font-bold text-white">ModeStudy</h1>
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

      <hr className="border-slate-700 my-6" />

      {/* Batch Grid */}
      <main className="flex-1 px-6">
        <h2 className="text-xl font-semibold text-white mb-4">Available Batches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {batches.map(b => (
            <BatchCard key={b.id} b={b} />
          ))}
        </div>

        {/* Mentor Gallery */}
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">Our Mentors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {SAMPLE.mentors.map(m => (
            <MentorCard key={m.id} m={m} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 py-6 border-t border-slate-800 text-center text-slate-400 text-sm">
        © 2025 ModeStudy · About · Contact · Privacy
      </footer>
    </div>
  )
}
