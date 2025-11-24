import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import BatchPage from './pages/BatchPage';
import SubjectPage from './pages/SubjectPage';
import ChapterPage from './pages/ChapterPage';
import LecturePage from './pages/LecturePage';
import Header from './components/Header';

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('ms-dark') === '1');
  const location = useLocation();

  // Apply dark class to <html> on state change
  useEffect(() => {
    const html = document.documentElement;
    if (dark) html.classList.add('dark');
    else html.classList.remove('dark');
    localStorage.setItem('ms-dark', dark ? '1' : '0');
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-colors duration-500 text-slate-900 dark:text-slate-100 flex flex-col">
      
      {/* Sticky Header */}
      <Header dark={dark} setDark={setDark} />

      {/* Animated Route Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/batch/:batchId" element={<BatchPage />} />
            <Route path="/batch/:batchId/subject/:subjectId" element={<SubjectPage />} />
            <Route path="/batch/:batchId/subject/:subjectId/chapter/:chapterId" element={<ChapterPage />} />
            <Route path="/batch/:batchId/subject/:subjectId/chapter/:chapterId/lecture/:lectureId" element={<LecturePage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-slate-900 shadow-inner">
        © {new Date().getFullYear()} DUDE STUDY • Empowering Learners
      </footer>
    </div>
  );
}
