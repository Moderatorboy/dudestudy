// src/pages/Home.jsx
import React, { useState } from "react"
import { Link } from "react-router-dom"

const batches = [
  { id: "class11", name: "CLASS 11TH", banner: "Welcome Class 11th", image: "/batch1.jpg" },
  { id: "class12", name: "CLASS 12TH", banner: "Welcome Class 12th", image: "/batch2.jpg" },
  { id: "foundation", name: "FOUNDATION", banner: "Welcome Foundation Batch", image: "/skmsir.jpg" },
  { id: "neet2025", name: "NEET 2025", banner: "Welcome NEET Warriors", image: "/nssir.jpg" },
  { id: "jee2025", name: "JEE 2025", banner: "Welcome JEE Champs", image: "/jpsir.jpg" },
  { id: "olympiad", name: "OLYMPIAD", banner: "Welcome Olympiad Batch", image: "/vjsir.jpg" },
  { id: "ntse", name: "NTSE", banner: "Welcome NTSE Batch", image: "/vgsir.jpg" },
  { id: "boards", name: "BOARDS", banner: "Welcome Board Prep", image: "/boc.jpg" },
]

export default function Home() {
  const [query, setQuery] = useState("")

  // Filter batches based on search query
  const filtered = batches.filter(b =>
    b.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Branding */}
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-gradient-x">
          DUDE STUDY
        </h1>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search batch..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="px-4 py-2 w-80 rounded-md border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Batch Container */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No batches found 🔍
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(batch => (
              <Link
                key={batch.id}
                to={`/batch/${batch.id}`}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <img
                  src={batch.image}
                  alt={batch.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{batch.name}</h2>
                  <p className="text-sm">{batch.banner}</p>
                  <div className="mt-2 text-orange-500 text-lg">🔥</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
