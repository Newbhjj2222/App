import Header from './components/Header';
import Hero from './components/Hero';
import TrendingStories from './components/TrendingStories';
import AllStories from './components/AllStories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrendingStories />
      <AllStories />
      <Footer />
    </div>
  );
}

export default App;
