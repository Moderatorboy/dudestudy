import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SAMPLE } from "../data";

export default function BatchPage() {
  const { batchId } = useParams();
  const navigate = useNavigate();
  const batch = SAMPLE.batches.find((b) => b.id === batchId);
  if (!batch) return <div>Batch not found</div>;

  return (
    <div className="p-4">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {batch.subjects.map((s) => (
          <Link
            key={s.id}
            to={`/batch/${batchId}/subject/${s.id}`}
            className="block rounded-xl border shadow-sm hover:shadow-xl bg-white dark:bg-slate-900 overflow-hidden transition-transform hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="w-full h-40 bg-gray-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
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

            {/* Subject Name */}
            <div className="p-3 bg-gray-50 dark:bg-slate-800 text-center border-t">
              <h3 className="font-semibold text-sm">{s.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
