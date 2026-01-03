const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export async function fetchArticles({ page = 1, limit = 9 }) {
  const res = await fetch(`${API_BASE}/images?page=${page}&limit=${limit}`)

  if (!res.ok) {
    throw new Error('Failed to fetch articles')
  }

  return res.json()
}
