import { useEffect, useRef } from 'react';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Movies from './sections/Movies';
import Characters from './sections/Characters';
import Quotes from './sections/Quotes';
import Legacy from './sections/Legacy';
import Footer from './sections/Footer';

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#0f0f0f]">
      {/* Film Grain Overlay */}
      <div className="film-grain" />
      
      {/* Vignette Effect */}
      <div className="vignette" />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Movies />
        <Characters />
        <Quotes />
        <Legacy />
        <Footer />
      </main>
    </div>
  );
}

export default App;
