import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ShowcaseCard from '@/components/ShowcaseCard'
import StatsSection from '@/components/StatsSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { fetchProjectContent, fetchAllServices, fetchAllShowcaseItems } from '@/lib/pocketbase'

export default async function HomePage() {
  // Fetch data from PocketBase
  const heroContent = await fetchProjectContent('home_hero')
  const visionContent = await fetchProjectContent('home_vision')
  const services = await fetchAllServices()
  const featuredShowcase = await fetchAllShowcaseItems(true)

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={heroContent?.title || 'Visual Technology & Innovation'}
        subtitle={heroContent?.content || 'Viewers'}
        description={visionContent?.content || 'Transforming visions into captivating visual experiences'}
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-viewers-gray-300 leading-relaxed">
              {visionContent?.content || 'We envision a future where visual technology seamlessly integrates with human experience, creating immersive and meaningful connections. Our mission is to transform how brands communicate, engage, and inspire through cutting-edge visual solutions that push the boundaries of innovation.'}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-viewers-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Our Services
            </h2>
            <p className="text-viewers-gray-400 text-lg max-w-2xl mx-auto">
              Innovative solutions for your visual technology needs
            </p>
          </div>
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard service={{
                id: '1',
                title: 'Visual Advertising',
                description: 'Create compelling visual campaigns that capture attention and drive engagement through innovative design and strategic placement.',
                order: 1,
                collectionId: '',
                collectionName: '',
                created: '',
                updated: '',
              }} />
              <ServiceCard service={{
                id: '2',
                title: 'Branding & Identity',
                description: 'Develop distinctive brand identities that reflect your values and connect with your target market effectively.',
                order: 2,
                collectionId: '',
                collectionName: '',
                created: '',
                updated: '',
              }} />
              <ServiceCard service={{
                id: '3',
                title: 'Digital Display Solutions',
                description: 'Leverage cutting-edge digital display technology to showcase your content in stunning detail and clarity.',
                order: 3,
                collectionId: '',
                collectionName: '',
                created: '',
                updated: '',
              }} />
              <ServiceCard service={{
                id: '4',
                title: 'Future-Ready Tech Services',
                description: 'Stay ahead with innovative technology solutions that integrate the latest advancements for forward-thinking experiences.',
                order: 4,
                collectionId: '',
                collectionName: '',
                created: '',
                updated: '',
              }} />
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Featured Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-viewers-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-viewers-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing innovation and excellence
            </p>
          </div>
          {featuredShowcase.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredShowcase.slice(0, 3).map((item) => (
                  <ShowcaseCard key={item.id} item={item} />
                ))}
              </div>
              <div className="text-center mt-12">
                <a
                  href="/showcase"
                  className="inline-block px-8 py-4 border-2 border-viewers-blue-400 text-viewers-blue-400 hover:bg-viewers-blue-400/10 rounded-lg transition-all font-medium glow-effect"
                >
                  View All Projects
                </a>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ShowcaseCard item={{
                id: '1',
                title: 'Digital Campaign Launch',
                description: 'A comprehensive visual advertising campaign that increased brand awareness by 300%. Featuring cutting-edge design and strategic placement.',
                category: 'Advertising',
                featured: true,
                order: 1,
                collectionId: '',
                collectionName: '',
                created: '',
                updated: '',
              }} />
              <ShowcaseCard item={{
                id: '2',
                title: 'Brand Identity Transformation',
                description: 'Complete rebrand for a tech startup, including logo design, brand guidelines, and digital assets that reflect innovation.',
                category: 'Branding',
                featured: true,
                order: 2,
                collectionId: '',
                collectionName: '',
                created: '',
                updated: '',
              }} />
              <ShowcaseCard item={{
                id: '3',
                title: 'Interactive Display Installation',
                description: 'Large-scale interactive digital display that engages audiences through motion-sensing technology and immersive visual experiences.',
                category: 'Technology',
                featured: true,
                order: 3,
                collectionId: '',
                collectionName: '',
                created: '',
                updated: '',
              }} />
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-viewers-gray-900 to-viewers-blue-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-lg text-viewers-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Get in touch and discover how Viewers can elevate your visual presence.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-viewers-blue-600 hover:bg-viewers-blue-700 text-white rounded-lg transition-all glow-effect-lg font-medium"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  )
}
