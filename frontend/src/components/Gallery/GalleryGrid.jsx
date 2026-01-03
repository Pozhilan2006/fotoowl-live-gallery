import React from 'react'
import GalleryCard from './GalleryCard'

export default function GalleryGrid({ articles = [], onItemClick }) {
  if (!articles.length) return <div className="text-center text-gray-400">No articles</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {articles.map((article) => (
        <GalleryCard
          key={article.id ?? article.slug ?? article.title}
          item={article}
          onClick={() => onItemClick?.(article)}
        />
      ))}
    </div>
  )
}
