import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SAMPLE } from '../data';

export default function BatchPage() {
  const { batchId } = useParams();
  const navigate = useNavigate();
  const batch = SAMPLE.batches.find(b => b.id === batchId);

  if (!batch) return <div>Batch not found</div>;

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{batch.name}</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Back
        </button>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {batch.subjects.map(s => (
          <Link
            key={s.id}
            to={`/batch/${batchId}/subject/${s.id}`}
            className="rounded-xl border shadow-md hover:shadow-xl hover:scale-[1.02] transition bg-white dark:bg-slate-900"
          >
            {/* Card Box */}
            <div className="flex flex-col items-center w-full max-w-[260px] mx-auto overflow-hidden">

              {/* Image Box */}
              <div className="w-full h-36 bg-gray-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                {s.photo ? (
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-gray-500 text-sm">No Image</div>
                )}
              </div>

              {/* Name Box */}
              <div className="w-full p-3 text-center bg-gray-50 dark:bg-slate-800 border-t">
                <h3 className="text-sm font-semibold truncate">{s.name}</h3>
                <p className="text-xs text-gray-500">{s.chapters?.length || 0} Chapters</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
