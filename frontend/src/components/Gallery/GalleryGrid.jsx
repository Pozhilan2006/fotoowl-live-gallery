import React from 'react'
import GalleryCard from './GalleryCard'

export default function GalleryGrid({ articles = [], onItemClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
