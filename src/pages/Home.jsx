import React from 'react'
import { Link } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function Home() {
  return (
    <div className="p-4 bg-white dark:bg-slate-900 min-h-screen">
      {/* Gradient Title */}
      <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        ModeStudy
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search batch..."
          className="w-full max-w-md px-4 py-2 border rounded dark:bg-slate-800 dark:text-white"
        />
      </div>

      {/* Batch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SAMPLE.batches.map(batch => (
          <Link
            key={batch.id}
            to={`/batch/${batch.id}`}
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-100 dark:bg-slate-800">
              {batch.thumbnail && (
                <img
                  src={batch.thumbnail}
                  alt={batch.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                🔴 LIVE
              </div>
            </div>

            {/* Text */}
            <div className="p-3 bg-white dark:bg-slate-900">
              <h3 className="font-bold text-center">{batch.title}</h3>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                {batch.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
