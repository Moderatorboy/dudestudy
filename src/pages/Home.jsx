import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="group relative bg-white/30 dark:bg-slate-800/40 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 overflow-hidden"
    >
      <div className="p-4 flex flex-col items-center">
        {b.photo && (
          <div className="w-32 h-32 overflow-hidden rounded-lg mb-4">
            <img
              src={b.photo}
              alt={b.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}
        <h3 className="text-xl font-bold text-center text-slate-900 dark:text-slate-100 mb-2">
          {b.name}
        </h3>
        <p className="text-sm text-center text-gray-700 dark:text-gray-300 mb-4">
          {b.description || 'No description available'}
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
          Join Batch
        </button>
      </div>
    </Link>
  )
}

export default function Home() {
  const [q, setQ] = useState('')
  const batches = SAMPLE.batches.filter((b) =>
    b.name.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 dark:from-slate-900 dark:via-slate-700 dark:to-slate-500 transition-colors duration-500 p-6">
      
      {/* Animated Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x">
        DUDE STUDY
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search batch..."
          className="w-full max-w-md px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:text-slate-100 shadow-sm"
        />
      </div>

      {/* Separator */}
      <div className="w-28 h-1 bg-blue-500 mx-auto rounded mb-8"></div>

      {/* Batch Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {batches.map((b) => (
          <BatchCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  )
}
