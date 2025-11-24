import React from "react"

export default function Header({ dark, setDark }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white dark:bg-slate-900 shadow-md transition-colors duration-300">
      {/* Branding */}
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
        DUDE STUDY
      </h1>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="px-3 py-2 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-800 transition"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  )
}
