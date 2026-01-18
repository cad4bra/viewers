import ShowcaseCard from '@/components/ShowcaseCard'
import { fetchAllShowcaseItems } from '@/lib/pocketbase'

export default async function ShowcasePage() {
  const showcaseItems = await fetchAllShowcaseItems(false)

  // Default showcase items if PocketBase is empty
  const defaultItems = [
    {
      id: '1',
      title: 'Digital Campaign Launch',
      description: 'A comprehensive visual advertising campaign that increased brand awareness by 300%. Featuring cutting-edge design and strategic placement.',
      category: 'Advertising',
      featured: true,
      order: 1,
    },
    {
      id: '2',
      title: 'Brand Identity Transformation',
      description: 'Complete rebrand for a tech startup, including logo design, brand guidelines, and digital assets that reflect innovation and forward-thinking.',
      category: 'Branding',
      featured: true,
      order: 2,
    },
    {
      id: '3',
      title: 'Interactive Display Installation',
      description: 'Large-scale interactive digital display that engages audiences through motion-sensing technology and immersive visual experiences.',
      category: 'Technology',
      featured: true,
      order: 3,
    },
    {
      id: '4',
      title: 'Retail Visual Experience',
      description: 'Transformative in-store visual displays that blend physical and digital experiences, enhancing customer engagement and sales.',
      category: 'Retail',
      featured: false,
      order: 4,
    },
    {
      id: '5',
      title: 'Event Visual Production',
      description: 'Complete visual production for major corporate events, including stage design, video walls, and real-time visual effects.',
      category: 'Events',
      featured: false,
      order: 5,
    },
    {
      id: '6',
      title: 'Digital Signage Network',
      description: 'Nationwide digital signage network with centralized management and dynamic content delivery across multiple locations.',
      category: 'Technology',
      featured: false,
      order: 6,
    },
  ]

  const displayItems = showcaseItems.length > 0 ? showcaseItems : defaultItems

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Showcase
          </h1>
          <p className="text-lg md:text-xl text-viewers-gray-300 max-w-3xl mx-auto mb-4">
            Explore our portfolio of innovative visual technology projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-viewers-blue-400 to-transparent mx-auto"></div>
        </div>

        {/* Showcase Grid */}
        {displayItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayItems.map((item) => (
              <ShowcaseCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-viewers-gray-600 mb-6">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <p className="text-viewers-gray-400 text-lg mb-8">
              Showcase items will appear here once added to the system.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Have a Project in Mind?
          </h2>
          <p className="text-viewers-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create something extraordinary. Get in touch to discuss your next visual technology project.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-viewers-blue-600 hover:bg-viewers-blue-700 text-white rounded-lg transition-all glow-effect-lg font-medium"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  )
}
