import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function BatchPage() {
  const { batchId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b => b.id === batchId)
  if (!batch) return <div>Batch not found</div>

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          Back
        </button>
        <h2 className="text-3xl font-bold">{batch.name}</h2>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {batch.subjects.map(s => (
          <Link
            key={s.id}
            to={`/batch/${batchId}/subject/${s.id}`}
            className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform"
          >
            {/* Image container */}
            <div className="bg-gray-100 dark:bg-slate-800">
              {s.photo ? (
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-48 object-cover" // ✅ fixed height
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center text-slate-500">
                  No Image
                </div>
              )}
            </div>

            {/* Text container */}
            <div className="p-4 bg-white dark:bg-slate-900 text-center">
              <h3 className="font-bold text-lg">{s.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
