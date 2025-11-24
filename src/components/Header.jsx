import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header({ dark, setDark }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-slate-900 shadow-md">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">ModeStudy</h1>
      <div className="flex items-center space-x-4">
        {/* Add navigation links here if needed */}
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>
    </header>
  )
}
