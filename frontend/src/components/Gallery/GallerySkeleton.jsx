const SkeletonCard = () => (
  <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700/50 animate-pulse">
    <div className="aspect-[4/3] bg-gray-900" />
    <div className="px-4 py-3 space-y-2">
      <div className="h-3.5 bg-gray-700 rounded w-3/4" />
    </div>
  </div>
)

export default function GallerySkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="mb-8">
        <div className="h-9 bg-gray-800 rounded w-32 mb-2" />
        <div className="h-4 bg-gray-800 rounded w-24" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  )
}