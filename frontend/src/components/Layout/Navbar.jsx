import React from 'react'

export default function Navbar() {
  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight text-white">FotoOwl</div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
            Gallery
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
            About
          </a>
        </nav>
      </div>
    </header>
  )
}
