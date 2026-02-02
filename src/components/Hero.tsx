import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Amazing Stories from <span className="text-emerald-600">Young Talents</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore a world of creativity with our collection of original stories.
            From drama to adventure, find your next favorite read.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#stories"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition flex items-center justify-center group"
            >
              Explore Stories
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition border-2 border-emerald-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
