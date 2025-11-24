import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header({ dark, setDark }) {
  return (
    <header className="fixed w-full top-6 flex justify-center z-50">
      <div className="relative">
        {/* Gradient Background Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-60 animate-gradient"></div>

        {/* Main Content */}
        <div className="relative px-12 py-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center space-x-6">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text">
            DUDE STUDY
          </h1>

          <ThemeToggle dark={dark} setDark={setDark} />
        </div>
      </div>

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 6s ease infinite;
          }

          @keyframes text-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-text {
            background-size: 200% 200%;
            animation: text-gradient 4s ease infinite;
          }
        `}
      </style>
    </header>
  )
}
