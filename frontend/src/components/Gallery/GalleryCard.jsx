import React from 'react'

export default function GalleryCard({ item }) {
  return (
    <div className="bg-gray-900 rounded overflow-hidden shadow">
      <div className="h-48 bg-gray-800 flex items-center justify-center">
        {item.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.url} alt={item.filename || ''} className="object-cover h-full w-full" />
        ) : (
          <div className="text-sm text-gray-400">No image</div>
        )}
      </div>
      <div className="p-3">
        <div className="font-medium">{item.title || item.filename || 'Untitled'}</div>
      </div>
    </div>
  )
}
