import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../api/articles.api'
import GalleryGrid from '../components/Gallery/GalleryGrid'
import GallerySkeleton from '../components/Gallery/GallerySkeleton'
import ImageModal from '../components/Gallery/ImageModel'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', 1],
    queryFn: () => fetchArticles({ page: 1, limit: 9 }),
  })

  const openImage = (img) => setSelectedImage(img)
  const closeImage = () => setSelectedImage(null)

  if (isLoading) return <GallerySkeleton />

  if (isError) {
    return (
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center py-20">
          <p className="text-red-400 text-sm">Unable to load gallery</p>
        </div>
      </div>
    )
  }

  const items = Array.isArray(data) ? data : data?.data ?? []

  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Gallery</h1>
          <p className="text-gray-400 text-sm mt-2">Latest uploads</p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-sm">No images yet</p>
          </div>
        ) : (
          <GalleryGrid articles={items} onItemClick={openImage} />
        )}
      </div>

      <ImageModal image={selectedImage} onClose={closeImage} />
    </>
  )
}
