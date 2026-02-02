import { useEffect, useState } from 'react';
import { BookText } from 'lucide-react';
import { supabase, Story } from '../lib/supabase';
import StoryCard from './StoryCard';

export default function AllStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllStories();
  }, []);

  const fetchAllStories = async () => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(12);

      if (error) throw error;
      setStories(data || []);
    } catch (error) {
      console.error('Error fetching stories:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="stories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            <p className="text-gray-600">Loading stories...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="stories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <BookText className="w-8 h-8 text-emerald-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">All Stories</h2>
        </div>

        {stories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No stories available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
