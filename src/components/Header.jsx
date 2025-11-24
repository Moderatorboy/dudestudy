import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header({ dark, setDark }) {
  return (
    <header className="fixed w-full z-50 top-0 left-0 flex justify-center items-center py-6 pointer-events-none">
      {/* Animated Gradient Box */}
      <div className="relative pointer-events-auto">
        <div className="absolute inset-0 rounded-xl animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-lg opacity-70"></div>
        <div className="relative px-8 py-4 bg-white dark:bg-slate-900 rounded-xl shadow-xl flex items-center justify-center">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text">
            DUDE STUDY
          </h1>
          <div className="ml-4">
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
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
