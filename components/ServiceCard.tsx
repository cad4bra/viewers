import { Service } from '@/lib/pocketbase'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-viewers-gray-800/50 backdrop-blur-sm border border-viewers-gray-700/50 rounded-xl p-8 hover:border-viewers-blue-500/50 transition-all duration-300 hover:shadow-glow">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-viewers-blue-500 via-viewers-blue-400 to-viewers-blue-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10">
        {/* Icon placeholder */}
        <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-viewers-blue-600 to-viewers-blue-800 flex items-center justify-center glow-effect">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </div>

        <h3 className="text-2xl font-semibold text-viewers-gray-100 mb-4 group-hover:text-gradient transition-all">
          {service.title}
        </h3>
        <p className="text-viewers-gray-400 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  )
}
