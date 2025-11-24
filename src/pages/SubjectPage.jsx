import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function SubjectPage(){
  const { batchId, subjectId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b=> b.id === batchId)
  const subject = batch?.subjects.find(s=> s.id === subjectId)
  if(!subject) return <div>Subject not found</div>

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={()=> navigate(-1)} 
          className="px-3 py-2 border rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          Back
        </button>
        <h2 className="text-2xl font-bold">{subject.name}</h2>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {subject.chapters.map(c=> (
          <Link 
            key={c.id} 
            to={`/batch/${batchId}/subject/${subjectId}/chapter/${c.id}`} 
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg hover:scale-105 transition-transform"
          >
            {c.photo ? (
              <img src={c.photo} alt={c.name} className="w-full h-48 object-cover" />
            ) : (
              <div className="flex items-center justify-center h-48 bg-gray-100 dark:bg-slate-800">
                <span className="text-gray-500">{c.name}</span>
              </div>
            )}
            <div className="py-3 text-center bg-white dark:bg-slate-900">
              <h3 className="text-lg font-bold">{c.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
