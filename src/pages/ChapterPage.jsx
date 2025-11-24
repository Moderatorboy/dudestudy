import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { SAMPLE } from '../data'

export default function ChapterPage() {
  const { batchId, subjectId, chapterId } = useParams()
  const navigate = useNavigate()
  const batch = SAMPLE.batches.find(b => b.id === batchId)
  const subject = batch?.subjects.find(s => s.id === subjectId)
  const chapter = subject?.chapters.find(c => c.id === chapterId)
  if (!chapter) return <div>Chapter not found</div>

  const [activeTab, setActiveTab] = useState('videos')

  const tabs = [
    { key: 'videos', label: 'Videos' },
    { key: 'Notes', label: 'Notes' },
    { key: 'dppQuiz', label: 'DPP Quiz' },
    { key: 'dppNotes', label: 'DPP PDF' },
    { key: 'dppVideos', label: 'DPP Videos' },
    { key: 'Sheets', label: 'Sheets' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 py-8">
      {/* Header */}
      <div className="relative mb-8 h-32 rounded-lg overflow-hidden bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold drop-shadow">{chapter.name}</h2>
        </div>
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="absolute left-4 top-4 px-3 py-2 bg-white text-black rounded shadow hover:bg-gray-100"
        >
          Back
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded border transition 
              ${activeTab === tab.key 
                ? 'bg-blue-600 text-white shadow-lg scale-105' 
                : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'videos' && (
        <div className="space-y-4">
          {chapter.lectures.map((video, index) => (
            <Link
              key={index}
              to={`/batch/${batchId}/subject/${subjectId}/chapter/${chapterId}/lecture/${video.id}`}
              className="flex gap-4 items-center border rounded-lg p-3 bg-white dark:bg-slate-900 shadow hover:shadow-md hover:scale-[1.02] transition"
            >
              <div className="w-32 sm:w-40 h-20 sm:h-24 bg-gray-200 dark:bg-slate-800 overflow-hidden rounded">
                <img
                  src={video.photo || chapter.photo}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-base">{video.title}</h4>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Duration: {video.duration} • Date: {video.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {activeTab === 'Notes' && (
        <div className="space-y-3">
          {chapter.notes?.map((note, index) => (
            <a
              key={index}
              href={note.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded p-3 bg-white dark:bg-slate-900 shadow hover:shadow-md hover:scale-[1.02] transition"
            >
              {note.title}
            </a>
          ))}
        </div>
      )}

      {activeTab === 'dppNotes' && (
        <div className="space-y-3">
          {chapter.dpp?.map((dpp, index) => (
            <a
              key={index}
              href={dpp.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded p-3 bg-white dark:bg-slate-900 shadow hover:shadow-md hover:scale-[1.02] transition"
            >
              {dpp.title}
            </a>
          ))}
        </div>
      )}

      {activeTab === 'dppVideos' && (
        <div className="space-y-3">
          {chapter.dppVideos?.map((dpp, index) => (
            <a
              key={index}
              href={dpp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded p-3 bg-white dark:bg-slate-900 shadow hover:shadow-md hover:scale-[1.02] transition"
            >
              {dpp.title}
            </a>
          ))}
        </div>
      )}

      {activeTab === 'dppQuiz' && (
        <div className="space-y-3">
          {chapter.quizzes?.map((quiz, index) => (
            <div key={index} className="border rounded p-3 bg-white dark:bg-slate-900 shadow hover:shadow-md transition">
              <h4 className="font-semibold mb-2">{quiz.title}</h4>
              <ul className="list-disc ml-5 text-sm">
                {quiz.questions.map((q, i) => (
                  <li key={i}>
                    {q.q} <span className="text-gray-500">(Answer: {q.options[q.ans]})</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Sheets' && (
        <div className="space-y-3">
          {chapter.sheets?.map((sheet, index) => (
            <a
              key={index}
              href={sheet.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded p-3 bg-white dark:bg-slate-900 shadow hover:shadow-md hover:scale-[1.02] transition"
            >
              {sheet.title}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
