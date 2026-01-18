import { fetchProjectContent } from '@/lib/pocketbase'

export default async function AboutPage() {
  const aboutContent = await fetchProjectContent('about_description')
  const visionContent = await fetchProjectContent('about_vision')

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            About Viewers
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-viewers-blue-400 to-transparent mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* What is Viewers */}
          <section className="bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              What is Viewers?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-viewers-gray-300 leading-relaxed text-lg">
                {aboutContent?.content || 
                  'Viewers is a visual technology company at the forefront of innovation. We specialize in transforming visions into captivating visual experiences through cutting-edge technology, creative design, and strategic thinking. Our mission is to help businesses and brands communicate their message through stunning visual solutions that resonate with audiences and drive engagement.'}
              </p>
            </div>
          </section>

          {/* Long-term Vision */}
          <section className="bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Our Long-term Vision
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-viewers-gray-300 leading-relaxed text-lg mb-6">
                {visionContent?.content || 
                  'Our vision is to become the leading force in visual technology, pushing the boundaries of what\'s possible in digital communication and display. We envision a future where every visual interaction is immersive, meaningful, and transformative.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-viewers-gray-900/50 rounded-xl border border-viewers-gray-700/30">
                  <h3 className="text-xl font-semibold text-viewers-blue-400 mb-3">Innovation First</h3>
                  <p className="text-viewers-gray-400">
                    Continuously exploring new technologies and creative approaches to stay ahead of the curve.
                  </p>
                </div>
                <div className="p-6 bg-viewers-gray-900/50 rounded-xl border border-viewers-gray-700/30">
                  <h3 className="text-xl font-semibold text-viewers-blue-400 mb-3">Client-Centric</h3>
                  <p className="text-viewers-gray-400">
                    Building lasting partnerships by understanding our clients' unique needs and delivering exceptional value.
                  </p>
                </div>
                <div className="p-6 bg-viewers-gray-900/50 rounded-xl border border-viewers-gray-700/30">
                  <h3 className="text-xl font-semibold text-viewers-blue-400 mb-3">Sustainable Growth</h3>
                  <p className="text-viewers-gray-400">
                    Scaling responsibly while maintaining the quality and innovation that defines our brand.
                  </p>
                </div>
                <div className="p-6 bg-viewers-gray-900/50 rounded-xl border border-viewers-gray-700/30">
                  <h3 className="text-xl font-semibold text-viewers-blue-400 mb-3">Global Impact</h3>
                  <p className="text-viewers-gray-400">
                    Expanding our reach to bring transformative visual experiences to audiences worldwide.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-xl hover:border-viewers-blue-500/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-viewers-blue-600 to-viewers-blue-800 flex items-center justify-center glow-effect">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-viewers-gray-100 mb-3">Excellence</h3>
                <p className="text-viewers-gray-400">Striving for perfection in every project we undertake.</p>
              </div>
              <div className="p-8 bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-xl hover:border-viewers-blue-500/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-viewers-blue-600 to-viewers-blue-800 flex items-center justify-center glow-effect">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-viewers-gray-100 mb-3">Innovation</h3>
                <p className="text-viewers-gray-400">Embracing cutting-edge technologies and creative solutions.</p>
              </div>
              <div className="p-8 bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-xl hover:border-viewers-blue-500/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-viewers-blue-600 to-viewers-blue-800 flex items-center justify-center glow-effect">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-viewers-gray-100 mb-3">Collaboration</h3>
                <p className="text-viewers-gray-400">Working together with clients and partners to achieve greatness.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
