import { Eye, Calendar } from 'lucide-react';
import { Story } from '../lib/supabase';

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={story.image_url || 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg'}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          S{String(story.season_number).padStart(2, '0')} E{String(story.episode_number).padStart(2, '0')}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition">
          {story.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {story.description || 'Click to read this amazing story...'}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(story.published_at)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{story.view_count}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-emerald-600 font-medium">By {story.author}</span>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
