import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-viewers-gray-900/90 border-t border-viewers-gray-800/50 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-xl font-bold text-gradient">Viewers</div>
              <div className="w-2 h-2 rounded-full bg-viewers-blue-400 glow-effect"></div>
            </div>
            <p className="text-viewers-gray-400 text-sm">
              Visual Technology & Innovation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-viewers-gray-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-viewers-gray-400 hover:text-viewers-blue-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-viewers-gray-400 hover:text-viewers-blue-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-viewers-gray-400 hover:text-viewers-blue-400 transition-colors text-sm">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-viewers-gray-400 hover:text-viewers-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-viewers-gray-200 font-semibold mb-4">Get in Touch</h3>
            <p className="text-viewers-gray-400 text-sm mb-2">
              Ready to elevate your visual presence?
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-viewers-blue-600 hover:bg-viewers-blue-700 text-white rounded-lg transition-colors text-sm glow-effect"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-viewers-gray-800/50 text-center">
          <p className="text-viewers-gray-500 text-sm">
            © {currentYear} Viewers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
