// src/pages/Home.jsx
import React from "react"

const batches = [
  {
    name: "CLASS 11TH",
    banner: "Welcome Class 11th",
    image: "/images/batch1.jpg", // Add your collage image here
  },
  {
    name: "CLASS 12TH",
    banner: "Welcome Class 12th",
    image: "/images/batch2.jpg",
  },
  // Add more batches as needed
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Top Branding */}
      <header className="py-6 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text text-4xl font-bold animate-gradient-x">
        DUDE STUDY
      </header>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search batch..."
          className="px-4 py-2 w-80 rounded-md border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Batch Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
        {batches.map((batch, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition hover:scale-105"
          >
            <img
              src={batch.image}
              alt={batch.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {batch.name}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                {batch.banner}
              </p>
              <div className="mt-2 text-orange-500 text-lg">🔥</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
