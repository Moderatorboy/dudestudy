import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function BatchPage() {
  const { batchId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b => b.id === batchId)
  if (!batch) return <div>Batch not found</div>

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          Back
        </button>
        <h2 className="text-3xl font-bold">{batch.name}</h2>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {batch.subjects.map(s => (
          <Link
            key={s.id}
            to={`/batch/${batchId}/subject/${s.id}`}
            className="block rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-slate-900 overflow-hidden"
          >
            {/* Image container */}
            <div className="aspect-square w-full overflow-hidden bg-gray-100 dark:bg-slate-800">
              {s.photo ? (
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No Image
                </div>
              )}
            </div>

            {/* Name */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-center">{s.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
