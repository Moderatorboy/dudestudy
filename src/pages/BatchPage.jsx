import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'
import { ArrowLeft } from 'lucide-react'

export default function BatchPage() {
  const { batchId } = useParams()
  const navigate = useNavigate()

  const batch = SAMPLE.batches.find(b => b.id === batchId)
  if (!batch) return <div>Batch not found</div>

  const getIconForSubject = (name) => name.charAt(0).toUpperCase()

  return (
    <div className="p-4 md:p-6 lg:p-8">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">{batch.name}</h1>
      </div>

      {/* Description */}
      <p className="mb-6 text-gray-600 dark:text-gray-300">{batch.description}</p>

      {/* Subjects Section */}
      <h2 className="text-xl font-semibold mb-4">Subjects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {batch.subjects?.map(s => (
          <Link
            key={s.id}
            to={`/batch/${batchId}/subject/${s.id}`}
            className="block rounded-xl border transition-all shadow-sm hover:shadow-lg hover:scale-[1.03] bg-white dark:bg-slate-900 overflow-hidden"
          >
            {/* Image Container */}
            <div className="w-full h-40 bg-gray-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
              {s.photo ? (
                <img
                  src={s.photo}
                  alt={s.name}
                  className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="text-gray-500 text-sm flex items-center gap-2">
                  {getIconForSubject(s.name)} No Image
                </div>
              )}
            </div>

            {/* Name Box */}
            <div className="p-3 bg-gray-50 dark:bg-slate-800 border-t text-center flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 justify-center">
                {getIconForSubject(s.name)}
                <h3 className="font-semibold text-sm truncate">{s.name}</h3>
              </div>
              <p className="text-xs text-gray-500">{s.chapters?.length || 0} Chapters</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
