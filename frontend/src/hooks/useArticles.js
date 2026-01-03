import { useState, useEffect } from 'react'
import { fetchArticles } from '../api/articles.api'

export default function useArticles(initialPage = 1, limit = 10) {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(initialPage)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    let mounted = true
    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchArticles(page, limit)
        const items = Array.isArray(data) ? data : data.articles || []
        if (!mounted) return
        setArticles((prev) => (page === initialPage ? items : [...prev, ...items]))
        setHasMore(items.length === limit)
      } catch (err) {
        if (!mounted) return
        setError(err?.message || String(err))
      } finally {
        if (mounted) setLoading(false)
      }
    }
    if (hasMore || page === initialPage) load()
    return () => {
      mounted = false
    }
  }, [page])

  const loadMore = () => {
    if (!loading && hasMore) setPage((p) => p + 1)
  }

  return { articles, loading, error, loadMore, hasMore }
}
