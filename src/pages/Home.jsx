// src/pages/Home.jsx
import React from "react"

const batches = [
  {
    name: "CLASS 11TH",
    banner: "Welcome Class 11th",
    image: "/batch1.jpg",
  },
  {
    name: "CLASS 12TH",
    banner: "Welcome Class 12th",
    image: "/batch2.jpg",
  },
]

export default function Home() {
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
          className="px-4 py-2 w-80 rounded-md border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Batch Grid */}
      <main className="px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {batches.map((batch, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
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
      </main>
    </div>
  )
}
