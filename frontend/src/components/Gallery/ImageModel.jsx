import React, { useEffect, useRef } from 'react'

export default function ImageModal({ image, onClose }) {
  if (!image) return null

  const dialogRef = useRef(null)
  const prevOverflowRef = useRef('')

  useEffect(() => {
    prevOverflowRef.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const previousActive = document.activeElement
    if (dialogRef.current) dialogRef.current.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflowRef.current || ''
      if (previousActive && previousActive.focus) previousActive.focus()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="image-modal-title"
        aria-describedby={image.description ? "image-modal-desc" : undefined}
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-gray-900 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h3 id="image-modal-title" className="text-base font-semibold text-gray-900 truncate pr-4">
            {image.title || 'Untitled'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>

        <div className="p-6 flex justify-center bg-gray-50">
          <img
            src={image.url}
            alt={image.alt ?? image.title ?? ''}
            className="max-w-full max-h-[70vh] object-contain rounded-lg"
          />
        </div>

        {image.description && (
          <div id="image-modal-desc" className="px-5 py-4 text-sm text-gray-600 border-t border-gray-200">
            {image.description}
          </div>
        )}
      </div>
    </div>
  )
}