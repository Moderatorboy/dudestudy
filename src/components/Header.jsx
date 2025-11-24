import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'

// Sample batch data
const batches = [
  { id: 1, name: 'Physics Batch', photo: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Math Batch', photo: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Chemistry Batch', photo: 'https://via.placeholder.com/150' },
]

export default function HomePage({ dark, setDark }) {
  const [search, setSearch] = useState('')

  const filteredBatches = batches.filter(batch =>
    batch.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex flex-col items-center pt-24 px-4">
      {/* DUDE STUDY Header */}
      <div className="relative mb-12">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-60 animate-gradient"></div>
        <h1 className="relative text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text">
          DUDE STUDY
        </h1>
        <div className="absolute top-0 right-0">
          <ThemeToggle dark={dark} setDark={setDark} />
        </div>
      </div>

      {/* Batch Search */}
      <div className="w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Search your batch..."
          className="w-full px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Underline */}
      <div className="w-24 h-1 bg-blue-500 rounded-full mb-8"></div>

      {/* Batch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredBatches.map(batch => (
          <div
            key={batch.id}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <img
              src={batch.photo}
              alt={batch.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{batch.name}</h2>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 6s ease infinite;
          }

          @keyframes text-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-text {
            background-size: 200% 200%;
            animation: text-gradient 4s ease infinite;
          }
        `}
      </style>
    </div>
  )
}
