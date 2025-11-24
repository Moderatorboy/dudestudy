import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BatchPage from './pages/BatchPage'
import SubjectPage from './pages/SubjectPage'
import ChapterPage from './pages/ChapterPage'
import LecturePage from './pages/LecturePage'
import Header from './components/Header'

export default function App() {
  // Global dark mode state
  const [dark, setDark] = useState(() => localStorage.getItem('ms-dark') === '1')

  // Apply dark class to <html> on state change
  useEffect(() => {
    const html = document.documentElement
    if (dark) html.classList.add('dark')
    else html.classList.remove('dark')

    localStorage.setItem('ms-dark', dark ? '1' : '0')
  }, [dark])

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-colors duration-500 text-slate-900 dark:text-slate-100">
      
      {/* Header with dark mode toggle */}
      <Header dark={dark} setDark={setDark} />

      {/* Main content container */}
      <main className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/batch/:batchId" element={<BatchPage />} />
          <Route path="/batch/:batchId/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/batch/:batchId/subject/:subjectId/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/batch/:batchId/subject/:subjectId/chapter/:chapterId/lecture/:lectureId" element={<LecturePage />} />
        </Routes>
      </main>

      {/* Optional Footer */}
      <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} DUDE STUDY • Empowering Learners
      </footer>
    </div>
  )
}
