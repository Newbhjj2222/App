import { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { supabase, Story } from '../lib/supabase';
import StoryCard from './StoryCard';

export default function TrendingStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingStories();
  }, []);

  const fetchTrendingStories = async () => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('is_trending', true)
        .order('view_count', { ascending: false })
        .limit(6);

      if (error) throw error;
      setStories(data || []);
    } catch (error) {
      console.error('Error fetching trending stories:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="trending" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            <p className="text-gray-600">Loading trending stories...</p>
          </div>
        </div>
      </section>
    );
  }

  if (stories.length === 0) {
    return null;
  }

  return (
    <section id="trending" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <TrendingUp className="w-8 h-8 text-emerald-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trending Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
