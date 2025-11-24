import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SAMPLE } from '../data';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

export default function ChapterPage() {
  const { batchId, subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const batch = SAMPLE.batches.find(b => b.id === batchId);
  const subject = batch?.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);
  if (!chapter) return <div>Chapter not found</div>;

  const [activeTab, setActiveTab] = useState('videos');
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

  const tabs = [
    { key: 'videos', label: 'Videos' },
    { key: 'Notes', label: 'Notes' },
    { key: 'dppQuiz', label: 'DPP Quiz' },
    { key: 'dppNotes', label: 'DPP PDF' },
    { key: 'dppVideos', label: 'DPP Videos' },
    { key: 'Sheets', label: 'Sheets' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 py-8">
      {/* Header */}
      <div className={`relative mb-8 h-32 rounded-lg overflow-hidden bg-gradient-to-r ${gradients[gradientIndex]} text-white shadow-lg transition-all duration-1000`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
            {chapter.name}
          </h2>
        </div>
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="absolute left-4 top-4 px-3 py-2 bg-white text-black rounded shadow hover:bg-gray-100 flex items-center gap-1 transition"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg font-semibold transition
              ${activeTab === tab.key
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.key + '-quick'}
            onClick={() => setActiveTab(tab.key)}
            className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-sm shadow hover:scale-105 transition"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'videos' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {chapter.lectures.map((video) => (
            <Link
              key={video.id}
              to={`/batch/${batchId}/subject/${subjectId}/chapter/${chapterId}/lecture/${video.id}`}
              className="relative flex flex-col border rounded-lg p-3 bg-white dark:bg-slate-900 shadow hover:shadow-2xl hover:scale-105 transition transform"
            >
              <div className="w-full h-40 overflow-hidden rounded mb-2">
                <img
                  src={video.photo || chapter.photo}
                  alt={video.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </div>
              <h4 className="font-semibold text-lg">{video.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Duration: {video.duration} • Date: {video.date}
              </p>
              {/* Tick mark for progress */}
              {video.completed && (
                <FaCheckCircle className="absolute top-2 right-2 text-green-500 text-xl shadow-lg" />
              )}
            </Link>
          ))}
        </div>
      )}

      {activeTab === 'Notes' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {chapter.notes?.map((note) => (
            <a
              key={note.title}
              href={note.file}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg p-4 bg-white dark:bg-slate-900 shadow hover:shadow-2xl hover:scale-105 transition flex flex-col items-center justify-center text-center"
            >
              <p className="font-semibold">{note.title}</p>
            </a>
          ))}
        </div>
      )}

      {activeTab === 'dppNotes' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {chapter.dpp?.map((dpp) => (
            <a
              key={dpp.title}
              href={dpp.file}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg p-4 bg-white dark:bg-slate-900 shadow hover:shadow-2xl hover:scale-105 transition flex flex-col items-center justify-center text-center"
            >
              <p className="font-semibold">{dpp.title}</p>
            </a>
          ))}
        </div>
      )}

      {activeTab === 'dppVideos' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {chapter.dppVideos?.map((dpp) => (
            <a
              key={dpp.title}
              href={dpp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg p-4 bg-white dark:bg-slate-900 shadow hover:shadow-2xl hover:scale-105 transition flex flex-col items-center justify-center text-center"
            >
              <p className="font-semibold">{dpp.title}</p>
            </a>
          ))}
        </div>
      )}

      {activeTab === 'Sheets' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {chapter.sheets?.map((sheet) => (
            <a
              key={sheet.title}
              href={sheet.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg p-4 bg-white dark:bg-slate-900 shadow hover:shadow-2xl hover:scale-105 transition flex flex-col items-center justify-center text-center"
            >
              <p className="font-semibold">{sheet.title}</p>
            </a>
          ))}
        </div>
      )}

      {activeTab === 'dppQuiz' && (
        <div className="space-y-4">
          {chapter.quizzes?.map((quiz, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white dark:bg-slate-900 shadow hover:shadow-2xl transition">
              <h4 className="font-semibold mb-2">{quiz.title}</h4>
              <ul className="list-disc ml-5 text-sm">
                {quiz.questions.map((q, i) => (
                  <li key={i}>
                    {q.q} <span className="text-gray-500">(Answer: {q.options[q.ans]})</span>
                  </li>
                ))}
              </ul>
              {/* Timer placeholder */}
              <div className="mt-3 text-sm text-purple-500 font-semibold">⏱ Timer: 10:00</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
