import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Initiatives from './components/Initiatives';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.title = 'EDC MNIT Jaipur | Entrepreneurship Development Cell';

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500); // Matches the SplashScreen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans">
      {!showContent && <SplashScreen />}
      {showContent && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Events />
          <Initiatives />
          <Gallery />
          <Team />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
