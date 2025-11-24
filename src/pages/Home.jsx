import React, { useState, useEffect } from "react"
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
  const [gradientIndex, setGradientIndex] = useState(0)
  const gradients = [
    "from-pink-500 via-purple-500 to-blue-500",
    "from-red-400 via-yellow-400 to-green-400",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-teal-400 via-cyan-400 to-blue-500",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const filtered = batches.filter(b =>
    b.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Branding */}
      <header className="py-8 text-center">
        <h1
          className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${gradients[gradientIndex]} text-transparent bg-clip-text drop-shadow-xl transition-all duration-1000`}
        >
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
          className="px-6 py-3 w-80 md:w-96 rounded-full border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg placeholder:text-slate-400 transition"
        />
      </div>

      {/* Batch Grid */}
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
                className="relative group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 hover:-rotate-1"
              >
                <div className="relative">
                  <img
                    src={batch.image}
                    alt={batch.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                </div>
                <div className="p-5 text-center">
                  <h2 className="text-xl font-bold mb-1">{batch.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{batch.banner}</p>
                  <div className="mt-3 text-2xl animate-pulse">🔥</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
