import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header({ dark, setDark }) {
  return (
    <header className="fixed w-full z-50 top-0 left-0 flex justify-center items-center py-6 pointer-events-none">
      {/* Animated Gradient Box */}
      <div className="relative pointer-events-auto">
        {/* Glowing Background Box */}
        <div className="absolute inset-0 rounded-xl animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-xl opacity-70"></div>
        
        {/* Main Content Box */}
        <div className="relative px-10 py-5 bg-white dark:bg-slate-900 rounded-xl shadow-2xl flex items-center justify-center space-x-4">
          {/* Animated Gradient Text */}
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text">
            DUDE STUDY
          </h1>

          {/* Theme Toggle */}
          <div>
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animations */}
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

          /* Optional shimmer effect for extra premium feel */
          @keyframes shimmer {
            0% { transform: translateX(-100%) }
            100% { transform: translateX(100%) }
          }
          .shimmer::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 50%;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 2s infinite;
          }
        `}
      </style>
    </header>
  )
}
