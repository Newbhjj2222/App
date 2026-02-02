import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-8 h-8 text-emerald-500" />
              <h3 className="text-xl font-bold">Stories Hub</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A creative platform for young talents. Discover amazing stories from writers around the world.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-emerald-500 transition">Home</a>
              </li>
              <li>
                <a href="#trending" className="text-gray-400 hover:text-emerald-500 transition">Trending</a>
              </li>
              <li>
                <a href="#stories" className="text-gray-400 hover:text-emerald-500 transition">All Stories</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-500 transition">About Us</a>
              </li>
            </ul>
          </div>

          <div id="about">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400 leading-relaxed">
              Stories Hub is a creative platform celebrating young talents. We provide a space for writers to share their stories and connect with readers worldwide.
            </p>
          </div>

          <div id="contact">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+250 722 319 367</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">info@storieshub.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Stories Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
