import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full py-4 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold">FotoOwl</div>
        <nav>
          <a className="mr-4 text-sm opacity-80">Home</a>
          <a className="text-sm opacity-80">About</a>
        </nav>
      </div>
    </header>
  )
}
