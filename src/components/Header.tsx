import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Stories Hub</h1>
              <p className="text-xs text-emerald-100">Share Your Creative Voice</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-emerald-200 transition">Home</a>
            <a href="#trending" className="hover:text-emerald-200 transition">Trending</a>
            <a href="#stories" className="hover:text-emerald-200 transition">All Stories</a>
            <a href="#about" className="hover:text-emerald-200 transition">About</a>
            <a href="#contact" className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-emerald-50 transition">Contact Us</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block hover:text-emerald-200 transition">Home</a>
            <a href="#trending" className="block hover:text-emerald-200 transition">Trending</a>
            <a href="#stories" className="block hover:text-emerald-200 transition">All Stories</a>
            <a href="#about" className="block hover:text-emerald-200 transition">About</a>
            <a href="#contact" className="block bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-emerald-50 transition text-center">Contact Us</a>
          </nav>
        )}
      </div>
    </header>
  );
}
