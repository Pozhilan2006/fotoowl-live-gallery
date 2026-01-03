import React from 'react'

export default function GalleryCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-200 cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-950"
    >
      <div className="aspect-[4/3] bg-gray-900 flex items-center justify-center overflow-hidden">
        {item.url ? (
          <img
            src={item.url}
            alt={item.title || item.filename || 'Untitled image'}
            className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-xs text-gray-500">No preview</div>
        )}
      </div>
      <div className="px-4 py-3">
        <div className="text-sm font-medium text-gray-200 truncate">
          {item.title || item.filename || 'Untitled'}
        </div>
      </div>
    </button>
  )
}
