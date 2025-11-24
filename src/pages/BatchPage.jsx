import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SAMPLE } from '../data';

export default function BatchPage() {
  const { batchId } = useParams();
  const navigate = useNavigate();
  const batch = SAMPLE.batches.find(b => b.id === batchId);
  if (!batch) return <div>Batch not found</div>;

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
            className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-transform bg-gradient-to-br from-white/70 via-white/50 to-white/30 dark:from-slate-800/70 dark:via-slate-800/50 dark:to-slate-800/30"
          >
            {/* Image container */}
            <div className="relative">
              {s.photo ? (
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center text-slate-500">
                  No Image
                </div>
              )}
              {/* Chapter count badge */}
              <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                {s.chapters.length} Chapters
              </div>
            </div>

            {/* Text container */}
            <div className="p-4 bg-white dark:bg-slate-900 text-center">
              <h3 className="font-bold text-lg">{s.name}</h3>
              {/* Progress bar */}
              <div className="mt-2 w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all"
                  style={{
                    width: `${Math.round(
                      (s.completedLectures / s.totalLectures) * 100 || 0
                    )}%`,
                  }}
                />
              </div>
              <p className="text-sm mt-1">
                {Math.round((s.completedLectures / s.totalLectures) * 100 || 0)}%
                Complete
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
