import React, { useEffect, useState } from "react";

export default function Header({ dark, setDark }) {
  const [gradientIndex, setGradientIndex] = useState(0);
  const gradients = [
    "from-pink-500 via-purple-500 to-blue-500",
    "from-red-400 via-yellow-400 to-green-400",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-teal-400 via-cyan-400 to-blue-500",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 2000); // 2 sec per gradient
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white dark:bg-slate-900 shadow-md transition-colors duration-300">
      {/* Branding */}
      <h1
        className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradients[gradientIndex]} bg-clip-text text-transparent drop-shadow-lg transition-all duration-1000`}
      >
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
  );
}
