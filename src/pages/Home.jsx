import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="block bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:shadow-lg hover:scale-105"
    >
      <div className="bg-slate-800 flex items-center justify-center h-64">
        {b.photo ? (
          <img
            src={b.photo}
            alt={b.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain p-4"
          />
        ) : (
          <span className="text-white text-xl font-semibold">{b.name}</span>
        )}
      </div>
      <div className="bg-slate-900 p-4">
        <h3 className="text-white font-bold text-center text-lg">{b.name}</h3>
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
      <div className="text-center mb-6">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search batch..."
          className="w-full max-w-xl mx-auto px-5 py-3 rounded-full border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
      </div>
      <hr className="border-slate-700 my-6" />
      {batches.length === 0 ? (
        <div className="text-center text-slate-400 mt-10 text-lg">
          No results found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {batches.map(b => (
            <BatchCard key={b.id} b={b} />
          ))}
        </div>
      )}
    </div>
  )
}
