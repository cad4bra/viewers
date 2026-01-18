export default function StatsSection() {
  const stats = [
    { value: '500+', label: 'Projects Completed', icon: '🚀' },
    { value: '200+', label: 'Happy Clients', icon: '💼' },
    { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '10+', label: 'Years Experience', icon: '🎯' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-viewers-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-xl hover:border-viewers-blue-500/50 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-viewers-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
