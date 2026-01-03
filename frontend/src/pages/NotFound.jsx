import React from 'react'
import Container from '../components/Layout/Container'

export default function NotFound() {
  return (
    <Container>
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">404 — Not Found</h1>
        <p className="mt-4 text-gray-400">The page you requested does not exist.</p>
      </div>
    </Container>
  )
}
