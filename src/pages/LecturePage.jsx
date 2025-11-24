import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SAMPLE } from '../data';
import { FaArrowLeft, FaCheckCircle, FaBook, FaFilePdf, FaQuestionCircle } from 'react-icons/fa';

export default function LecturePage() {
  const { batchId, subjectId, chapterId, lectureId } = useParams();
  const navigate = useNavigate();

  const batch = SAMPLE.batches.find(b => b.id === batchId);
  const subject = batch?.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);
  const lecture = chapter?.lectures.find(l => l.id === lectureId);

  const [done, setDone] = useState(() => {
    const key = `ms-progress-${chapterId}`;
    const obj = JSON.parse(localStorage.getItem(key) || '{}');
    return !!obj[lectureId];
  });

  const [activeTab, setActiveTab] = useState('notes');
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

  if (!lecture) return <div className="p-4">Lecture not found</div>;

  function toggle() {
    const key = `ms-progress-${chapterId}`;
    const obj = JSON.parse(localStorage.getItem(key) || '{}');
    if (done) {
      delete obj[lectureId];
    } else {
      obj[lectureId] = Date.now();
    }
    localStorage.setItem(key, JSON.stringify(obj));
    setDone(!done);
  }

  const tabs = [
    { key: 'notes', label: 'Notes', icon: <FaBook /> },
    { key: 'dpp', label: 'DPP PDF', icon: <FaFilePdf /> },
    { key: 'quiz', label: 'Quiz', icon: <FaQuestionCircle /> },
    { key: 'sheets', label: 'Sheets', icon: <FaBook /> },
  ];

  return (
    <div className="p-4 min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Header */}
      <div
        className={`relative mb-6 p-4 rounded-xl shadow-lg bg-gradient-to-r ${gradients[gradientIndex]} text-white transition-all duration-1000 flex items-center gap-4`}
      >
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-2 bg-white text-black rounded-full shadow hover:bg-gray-100 flex items-center gap-1 transition"
        >
          <FaArrowLeft /> Back
        </button>
        <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg flex-1">{lecture.title}</h2>
        {done && <FaCheckCircle className="text-green-500 text-2xl" />}
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Video Section */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            {lecture.video ? (
              <iframe
                src={lecture.video.includes('?') ? lecture.video + '&autoplay=1' : lecture.video + '?autoplay=1'}
                title={lecture.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
                frameBorder="0"
              />
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-500">Video not available</div>
            )}
          </div>

          {/* Progress toggle */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={done} onChange={toggle} className="w-5 h-5 accent-blue-600" />
              <span className="font-semibold">Mark as complete</span>
            </label>
          </div>

          {/* Tabs */}
          <div>
            <div className="flex gap-3 mb-4 flex-wrap">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition
                    ${activeTab === tab.key
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === 'notes' &&
                chapter.notes?.map((note, i) => (
                  <a
                    key={i}
                    href={note.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-xl p-4 bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition flex items-center gap-2"
                  >
                    <FaBook className="text-blue-500" /> {note.title}
                  </a>
                ))}

              {activeTab === 'dpp' &&
                chapter.dpp?.map((dpp, i) => (
                  <a
                    key={i}
                    href={dpp.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-xl p-4 bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition flex items-center gap-2"
                  >
                    <FaFilePdf className="text-red-500" /> {dpp.title}
                  </a>
                ))}

              {activeTab === 'sheets' &&
                chapter.sheets?.map((sheet, i) => (
                  <a
                    key={i}
                    href={sheet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-xl p-4 bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition flex items-center gap-2"
                  >
                    <FaBook className="text-green-500" /> {sheet.title}
                  </a>
                ))}

              {activeTab === 'quiz' &&
                chapter.quizzes?.map((quiz, i) => (
                  <div key={i} className="border rounded-xl p-4 bg-white dark:bg-slate-900 shadow-xl">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <FaQuestionCircle className="text-purple-500" /> {quiz.title}
                    </h4>
                    <ul className="list-disc ml-5 text-sm">
                      {quiz.questions.map((q, j) => (
                        <li key={j}>
                          {q.q} <span className="text-gray-500">(Answer: {q.options[q.ans]})</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-sm text-purple-500 font-semibold">⏱ Timer: 10:00</div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Sidebar Quick Links */}
        <aside className="border p-4 rounded-xl bg-white dark:bg-slate-900 shadow-xl flex flex-col gap-3">
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          {tabs.map(tab => (
            <button
              key={tab.key + '-quick'}
              onClick={() => setActiveTab(tab.key)}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow hover:scale-105 transition"
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </aside>
      </div>
    </div>
  );
}
