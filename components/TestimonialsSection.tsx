export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Viewers transformed our brand presence completely. The results exceeded our expectations.',
      author: 'Sarah Johnson',
      role: 'CEO, Tech Innovations',
      company: 'Tech Corp',
    },
    {
      quote: 'Their innovative approach and attention to detail made all the difference in our campaign.',
      author: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Digital Solutions',
    },
    {
      quote: 'Professional, creative, and reliable. Viewers is our go-to partner for all visual projects.',
      author: 'Emily Rodriguez',
      role: 'Creative Lead',
      company: 'Brand Studio',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            What Our Clients Say
          </h2>
          <p className="text-viewers-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by leading brands worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-xl p-8 hover:border-viewers-blue-500/50 transition-all hover:shadow-glow"
            >
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-viewers-blue-400 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-viewers-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-viewers-gray-700/50 pt-6">
                <div className="font-semibold text-viewers-gray-100">
                  {testimonial.author}
                </div>
                <div className="text-sm text-viewers-gray-400">
                  {testimonial.role} • {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
