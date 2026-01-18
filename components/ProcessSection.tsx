export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into understanding your vision, goals, and target audience to create a strategic foundation.',
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our team crafts innovative solutions and detailed plans that align with your objectives and brand identity.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'We bring your vision to life using cutting-edge technology and best practices for optimal performance.',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We ensure smooth deployment and provide ongoing support to help you succeed and grow.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-viewers-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Process
          </h2>
          <p className="text-viewers-gray-400 text-lg max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-viewers-blue-600 via-viewers-blue-400 to-viewers-blue-600 opacity-20"></div>
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              <div className="relative z-10 mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-viewers-blue-600 to-viewers-blue-800 text-white text-2xl font-bold glow-effect group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
              </div>
              <div className="bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-xl p-6 hover:border-viewers-blue-500/50 transition-all group-hover:shadow-glow">
                <h3 className="text-xl font-semibold text-viewers-gray-100 mb-3 group-hover:text-gradient transition-all">
                  {step.title}
                </h3>
                <p className="text-viewers-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
