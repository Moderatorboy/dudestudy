import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function BatchPage() {
  const { batchId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b => b.id === batchId)
  if (!batch) return <div>Batch not found</div>

  return (
    <div className="p-4 sm:p-6">

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          Back
        </button>
        <h2 className="text-3xl font-bold">{batch.name}</h2>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {batch.subjects.map(s => (
          <Link
            key={s.id}
            to={`/batch/${batchId}/subject/${s.id}`}
            className="block rounded-xl border overflow-hidden shadow-md hover:shadow-xl bg-white dark:bg-slate-900 hover:scale-[1.02] transition-all"
          >
            {/* Image Top */}
            <div className="w-full h-44 sm:h-48 md:h-52 flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-slate-800">
              {s.photo ? (
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="text-gray-500 text-sm">No Image</div>
              )}
            </div>

            {/* Subject Name Box */}
            <div className="bg-gray-50 dark:bg-slate-800 border-t py-3 px-2 text-center">
              <h3 className="font-semibold text-sm sm:text-base truncate">{s.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
