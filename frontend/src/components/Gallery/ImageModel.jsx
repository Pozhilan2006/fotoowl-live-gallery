import React, { useEffect, useRef } from 'react'

export default function ImageModal({ image, onClose }) {
if (!image) return null

const dialogRef = useRef(null)
const prevOverflowRef = useRef('')

useEffect(() => {
prevOverflowRef.current = document.body.style.overflow
document.body.style.overflow = 'hidden'

}, [onClose])

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

return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose} aria-hidden={false} >
<div
role="dialog"
aria-modal="true"
aria-labelledby="image-modal-title"
aria-describedby="image-modal-desc"
ref={dialogRef}
tabIndex={-1}
onClick={(e) => e.stopPropagation()}
className="bg-white text-gray-900 rounded-lg max-w-3xl w-full overflow-hidden shadow-lg focus:outline-none"
>
<div className="flex items-start justify-between p-3 border-b">
<h3 id="image-modal-title" className="text-lg font-medium">
{image.title || 'Image'}
</h3>
<button type="button" onClick={onClose} aria-label="Close" className="ml-4 rounded px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" >
×
</button>
</div>
<div className="px-4 py-6 flex justify-center">
      <img
        src={image.url}
        alt={image.alt ?? image.title ?? ''}
        className="max-w-full max-h-[70vh] object-contain"
      />
    </div>

    {image.description && (
      <div id="image-modal-desc" className="px-4 pb-4 text-sm text-gray-600">
        {image.description}
      </div>
    )}
  </div>
</div>
)
}