import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'
import { FaSearch } from 'react-icons/fa'

function BatchCard({ b }) {
  return (
    <Link
      to={`/batch/${b.id}`}
      className="group relative bg-white/20 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500 border border-transparent hover:border-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
    >
      <div className="p-5 flex flex-col items-center">
        {b.photo && (
          <div className="w-32 h-32 overflow-hidden rounded-xl mb-4 shadow-lg">
            <img
              src={b.photo}
              alt={b.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-center text-slate-900 dark:text-slate-100 mb-2">
          {b.name}
        </h3>
        <p className="text-sm text-center text-gray-700 dark:text-gray-300 mb-4">
          {b.description || 'Join this batch to level up your skills!'}
        </p>
        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full hover:scale-105 transform transition-all duration-300 shadow-md">
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 dark:from-slate-900 dark:via-slate-700 dark:to-slate-500 transition-colors duration-500 p-6">
      
      {/* Floating background shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-pink-400 rounded-full opacity-30 animate-pulse mix-blend-multiply"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-blue-400 rounded-full opacity-30 animate-pulse mix-blend-multiply"></div>

      {/* Animated Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-x drop-shadow-lg">
        DUDE STUDY
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-10 relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search batch..."
          className="w-full max-w-md pl-12 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-slate-700 dark:text-slate-100 shadow-lg placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-300"
        />
      </div>

      {/* Separator */}
      <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded mb-10 shadow-md"></div>

      {/* Batch Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {batches.map((b) => (
          <BatchCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  )
}
