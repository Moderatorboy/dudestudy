import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="block bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
    >
      <div className="bg-slate-800 flex items-center justify-center h-56">
        {b.photo ? (
          <img
            src={b.photo}
            alt={b.name}
            className="max-h-full max-w-full object-contain p-4"
          />
        ) : (
          <span className="text-white text-xl font-semibold">{b.name}</span>
        )}
      </div>
      <div className="p-4 bg-slate-900">
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
          className="w-full max-w-xl mx-auto px-5 py-3 rounded-full border border-slate-700 bg-slate-800 text-white placeholder-slate-400"
        />
      </div>
      <hr className="border-slate-700 my-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {batches.map(b => (
          <BatchCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  )
}
