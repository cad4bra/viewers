import { ShowcaseItem } from '@/lib/pocketbase'
import Image from 'next/image'

interface ShowcaseCardProps {
  item: ShowcaseItem
}

export default function ShowcaseCard({ item }: ShowcaseCardProps) {
  return (
    <div className="group relative bg-viewers-gray-800/50 backdrop-blur-sm border border-viewers-gray-700/50 rounded-xl overflow-hidden hover:border-viewers-blue-500/50 transition-all duration-300 hover:shadow-glow">
      {/* Image placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-viewers-gray-700 to-viewers-gray-900 overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-viewers-gray-600 text-6xl font-light">
              <svg
                className="w-24 h-24 mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-viewers-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {item.category && (
          <span className="inline-block px-3 py-1 text-xs font-medium text-viewers-blue-400 bg-viewers-blue-400/10 rounded-full mb-3">
            {item.category}
          </span>
        )}
        <h3 className="text-xl font-semibold text-viewers-gray-100 mb-2 group-hover:text-gradient transition-all">
          {item.title}
        </h3>
        <p className="text-viewers-gray-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-viewers-blue-500/0 group-hover:border-viewers-blue-500/50 rounded-xl transition-all pointer-events-none"></div>
    </div>
  )
}
