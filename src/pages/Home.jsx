import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="max-w-sm w-full mx-auto bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer"
    >
      {/* Image Box */}
      <div className="w-full h-48 bg-slate-800 flex items-center justify-center overflow-hidden">
        {b.photo ? (
          <img
            src={b.photo}
            alt={b.name}
            className="max-w-full max-h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
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

export default function Home() {
  const [q, setQ] = useState('')
  const batches = SAMPLE.batches.filter(b =>
    b.name.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="bg-slate-950 min-h-screen px-4 py-6">
      {/* Search Bar */}
      <div className="text-center mb-6">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search batch..."
          className="w-full max-w-xl mx-auto px-5 py-3 rounded-full border border-slate-700 bg-slate-800 text-white placeholder-slate-400"
        />
      </div>

      <hr className="border-slate-700 my-6" />

      {/* Batch Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {batches.map(b => (
          <BatchCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  )
}
