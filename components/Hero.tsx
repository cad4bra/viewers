interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
}

export default function Hero({ title, subtitle, description }: HeroProps) {
  const defaultTitle = title || 'Visual Technology & Innovation'
  const defaultSubtitle = subtitle || 'Viewers'
  const defaultDescription = description || 'Transforming visions into captivating visual experiences'

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%233b82f6" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Glowing orbs for futuristic effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-viewers-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-viewers-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">{defaultSubtitle}</span>
            </h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-light text-viewers-gray-200 mb-8">
            {defaultTitle}
          </h2>
          <p className="text-lg md:text-xl text-viewers-gray-300 max-w-2xl mx-auto mb-12">
            {defaultDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-4 bg-viewers-blue-600 hover:bg-viewers-blue-700 text-white rounded-lg transition-all glow-effect-lg font-medium"
            >
              Explore Services
            </a>
            <a
              href="/showcase"
              className="px-8 py-4 border-2 border-viewers-blue-400 text-viewers-blue-400 hover:bg-viewers-blue-400/10 rounded-lg transition-all font-medium"
            >
              View Showcase
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-viewers-blue-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
