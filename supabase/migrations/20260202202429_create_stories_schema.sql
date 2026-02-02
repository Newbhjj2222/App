/*
  # Stories Platform Database Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique, not null) - Category name
      - `slug` (text, unique, not null) - URL-friendly slug
      - `description` (text) - Category description
      - `created_at` (timestamptz) - Creation timestamp
    
    - `stories`
      - `id` (uuid, primary key)
      - `title` (text, not null) - Story title
      - `slug` (text, unique, not null) - URL-friendly slug
      - `description` (text) - Story description/excerpt
      - `content` (text) - Full story content
      - `image_url` (text) - Cover image URL
      - `author` (text, not null) - Author name
      - `category_id` (uuid) - Foreign key to categories
      - `episode_number` (integer) - Episode number if part of series
      - `season_number` (integer) - Season number if applicable
      - `is_featured` (boolean) - Whether story is featured
      - `is_trending` (boolean) - Whether story is trending
      - `view_count` (integer) - Number of views
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Stories are publicly viewable
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  content text,
  image_url text,
  author text NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  episode_number integer DEFAULT 1,
  season_number integer DEFAULT 1,
  is_featured boolean DEFAULT false,
  is_trending boolean DEFAULT false,
  view_count integer DEFAULT 0,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE stories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are viewable by everyone"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Stories are viewable by everyone"
  ON stories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_stories_category ON stories(category_id);
CREATE INDEX IF NOT EXISTS idx_stories_featured ON stories(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_stories_trending ON stories(is_trending) WHERE is_trending = true;
CREATE INDEX IF NOT EXISTS idx_stories_published ON stories(published_at DESC);
