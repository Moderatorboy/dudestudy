import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="block border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-slate-800"
    >
      <div className="flex flex-col items-center justify-start p-4">
        {b.photo && (
          <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 mb-4">
            <img
              src={b.photo}
              alt={b.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="text-lg font-bold text-center text-slate-900 dark:text-slate-100">
          {b.name}
        </h3>
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
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 dark:from-slate-900 dark:via-slate-700 dark:to-slate-500 transition-colors duration-500 p-4">
      {/* Top Center Animated Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x">
        DUDE STUDY
      </h1>

      {/* Batch Search Bar */}
      <div className="flex justify-center mb-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search batch..."
          className="w-full max-w-md px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:text-slate-100"
        />
      </div>

      {/* Separator */}
      <div className="w-24 h-1 bg-blue-500 mx-auto rounded mb-6"></div>

      {/* Batch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {batches.map((b) => (
          <BatchCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  )
}
