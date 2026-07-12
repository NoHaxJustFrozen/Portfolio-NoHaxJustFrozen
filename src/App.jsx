import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { LanguageProvider } from './i18n';
import VideoBackground from './components/VideoBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <LanguageProvider>
      <LayoutGroup>
        <AnimatePresence>
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>
        
        {/* Render rest of the app always, but pass isLoading to Hero */}
        <CustomCursor />
        <ScrollProgress />
        <VideoBackground />
        <Header />

        <main className="main-content">
          <Hero isLoading={isLoading} />
          <Marquee />
        <Projects />
        <About />
        <Education />
        <Certificates />
        <Contact />
      </main>
      </LayoutGroup>
    </LanguageProvider>
  );
}

export default App;
