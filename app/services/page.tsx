import ServiceCard from '@/components/ServiceCard'
import { fetchAllServices } from '@/lib/pocketbase'

export default async function ServicesPage() {
  const services = await fetchAllServices()

  // Default services if PocketBase is empty
  const defaultServices = [
    {
      id: '1',
      collectionId: 'services',
      collectionName: 'services',
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      title: 'Visual Advertising',
      description: 'Create compelling visual campaigns that capture attention and drive engagement. From concept to execution, we deliver advertising solutions that resonate with your audience and amplify your brand message.',
      order: 1,
    },
    {
      id: '2',
      collectionId: 'services',
      collectionName: 'services',
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      title: 'Branding & Identity',
      description: 'Develop a distinctive brand identity that reflects your values and connects with your target market. Our comprehensive branding services help you stand out in a crowded marketplace.',
      order: 2,
    },
    {
      id: '3',
      collectionId: 'services',
      collectionName: 'services',
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      title: 'Digital Display Solutions',
      description: 'Leverage cutting-edge digital display technology to showcase your content in stunning detail. From LED displays to interactive installations, we bring your vision to life.',
      order: 3,
    },
    {
      id: '4',
      collectionId: 'services',
      collectionName: 'services',
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      title: 'Future-Ready Tech Services',
      description: 'Stay ahead of the curve with our innovative technology solutions. We integrate the latest advancements to ensure your visual experiences are both current and forward-thinking.',
      order: 4,
    },
  ]

  const displayServices = services.length > 0 ? services : defaultServices

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-viewers-gray-300 max-w-3xl mx-auto mb-4">
            Comprehensive visual technology solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-viewers-blue-400 to-transparent mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {displayServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center">
            Why Choose Viewers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-viewers-blue-400 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Expert Team
              </h3>
              <p className="text-viewers-gray-300">
                Our experienced professionals bring years of expertise in visual technology and design.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-viewers-blue-400 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Cutting-Edge Technology
              </h3>
              <p className="text-viewers-gray-300">
                We utilize the latest tools and technologies to deliver exceptional results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-viewers-blue-400 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Timely Delivery
              </h3>
              <p className="text-viewers-gray-300">
                We respect deadlines and ensure your projects are delivered on time, every time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-viewers-blue-400 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                Client-Focused
              </h3>
              <p className="text-viewers-gray-300">
                Your success is our priority. We work closely with you to understand and meet your goals.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Ready to Get Started?
          </h2>
          <p className="text-viewers-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Viewers can help transform your visual presence and achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-viewers-blue-600 hover:bg-viewers-blue-700 text-white rounded-lg transition-all glow-effect-lg font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
