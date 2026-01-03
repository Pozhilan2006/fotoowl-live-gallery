import React from 'react'
import Navbar from './components/Layout/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <Home />
      </main>
    </div>
  )
}