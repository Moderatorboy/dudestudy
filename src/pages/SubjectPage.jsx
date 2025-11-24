import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SAMPLE } from '../data';
import { FaCheckCircle } from 'react-icons/fa';

export default function SubjectPage() {
  const { batchId, subjectId } = useParams();
  const navigate = useNavigate();
  const batch = SAMPLE.batches.find(b => b.id === batchId);
  const subject = batch?.subjects.find(s => s.id === subjectId);
  if (!subject) return <div>Subject not found</div>;

  const [gradientIndex, setGradientIndex] = useState(0);
  const gradients = [
    'from-pink-500 to-yellow-400',
    'from-indigo-500 to-pink-500',
    'from-teal-400 to-blue-500',
    'from-purple-500 to-pink-500',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Function to get chapter completion %
  const getProgress = (chapterId) => {
    const key = `ms-progress-${chapterId}`;
    const obj = JSON.parse(localStorage.getItem(key) || '{}');
    const chapter = subject.chapters.find(c => c.id === chapterId);
    if (!chapter) return 0;
    return Math.round((Object.keys(obj).length / chapter.lectures.length) * 100);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 py-8">
      {/* Header */}
      <div
        className={`relative mb-8 p-4 rounded-xl shadow-lg bg-gradient-to-r ${gradients[gradientIndex]} text-white flex items-center gap-4 transition-all duration-1000`}
      >
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-2 bg-white text-black rounded-full shadow hover:bg-gray-100 transition flex items-center"
        >
          Back
        </button>
        <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg">{subject.name}</h2>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {subject.chapters.map(c => {
          const progress = getProgress(c.id);
          return (
            <Link
              key={c.id}
              to={`/batch/${batchId}/subject/${subjectId}/chapter/${c.id}`}
              className="relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-transform"
            >
              {c.photo ? (
                <img src={c.photo} alt={c.name} className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <div className="flex items-center justify-center h-52 bg-gray-100 dark:bg-slate-800">
                  <span className="text-gray-500">{c.name}</span>
                </div>
              )}
              {/* Progress badge */}
              {progress > 0 && (
                <div className="absolute top-3 right-3 bg-white dark:bg-slate-900 text-green-500 font-bold px-2 py-1 rounded-full shadow flex items-center gap-1">
                  <FaCheckCircle /> {progress}%
                </div>
              )}
              <div className="py-4 text-center bg-white dark:bg-slate-900">
                <h3 className="text-lg font-bold">{c.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  {c.lectures.length} Lectures • {c.notes?.length || 0} Notes • {c.quizzes?.length || 0} Quiz
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
