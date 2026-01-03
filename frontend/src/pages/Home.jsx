import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../api/articles.api'
import GalleryGrid from '../components/Gallery/GalleryGrid'
import GallerySkeleton from '../components/Gallery/GallerySkeleton'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', 1],
    queryFn: () => fetchArticles({ page: 1, limit: 9 }),
  })

  useEffect(() => {
    if (!selectedImage) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [selectedImage])

  const openImage = (img) => setSelectedImage(img)
  const closeImage = () => setSelectedImage(null)

  if (isLoading) return <GallerySkeleton />
  if (isError) return <p className="text-red-400">Failed to load images</p>

  const items = Array.isArray(data) ? data : data?.data ?? []

  return (
    <section>
      <h2 className="text-xl mb-4">Latest</h2>

      <GalleryGrid articles={items} onItemClick={openImage} />

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closeImage}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-title"
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-gray-900 rounded-lg max-w-3xl w-full overflow-hidden shadow-lg"
          >
            <div className="flex items-start justify-between p-3 border-b">
              <h3 id="image-title" className="text-lg font-medium">
                {selectedImage.title || 'Image'}
              </h3>
              <button
                type="button"
                onClick={closeImage}
                aria-label="Close"
                className="ml-4 rounded px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                ×
              </button>
            </div>

            <div className="px-4 py-6 flex justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt ?? selectedImage.title ?? ''}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            {selectedImage.description && (
              <div className="px-4 pb-4 text-sm text-gray-600">{selectedImage.description}</div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
