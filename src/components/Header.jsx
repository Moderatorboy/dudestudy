import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

export default function Header({ dark, setDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white dark:bg-slate-900 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between relative">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle dark={dark} setDark={setDark} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 text-slate-900 dark:text-slate-100 focus:outline-none hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {mobileMenuOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
            </button>
          </div>

          {/* Center Logo */}
          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-extrabold text-slate-900 dark:text-slate-100 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
          >
            DUDE STUDY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-slate-900 dark:text-slate-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <span className="after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full absolute bottom-0 left-0"></span>
                {item.name}
              </Link>
            ))}
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <nav className="px-4 flex flex-col space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-900 dark:text-slate-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
