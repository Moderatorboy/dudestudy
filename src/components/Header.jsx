import React from "react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 bg-white dark:bg-slate-900 shadow-md transition-colors duration-300">
      {/* DUDE STUDY Top Center */}
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
        DUDE STUDY
      </h1>
    </header>
  )
}
