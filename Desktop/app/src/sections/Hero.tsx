import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "An offer you can't refuse.";
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Typewriter effect
    if (isLoaded) {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 80);
      return () => clearInterval(typeTimer);
    }
  }, [isLoaded]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((el, i) => {
          const speed = 0.3 + (i * 0.1);
          (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0f0f0f]"
    >
      {/* Background Smoke Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-t from-[#8b0000]/10 to-transparent rounded-full blur-3xl smoke-particle" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-gradient-to-t from-[#d4af37]/5 to-transparent rounded-full blur-3xl smoke-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-t from-[#8b0000]/5 to-transparent rounded-full blur-3xl smoke-particle" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Image */}
      <div 
        className={`absolute inset-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.7,0,0.3,1)] ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-[#0f0f0f]/50 z-10" />
        <img 
          src="/images/hero-don.jpg" 
          alt="The Godfather"
          className="w-full h-full object-cover object-center parallax"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl">
          {/* Title */}
          <div className="overflow-hidden mb-4">
            <h1 
              className={`font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#e8dcc8] tracking-wider transition-all duration-[1.2s] ease-[cubic-bezier(0.7,0,0.3,1)] ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              THE
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 
              className={`font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#d4af37] tracking-wider transition-all duration-[1.2s] ease-[cubic-bezier(0.7,0,0.3,1)] ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              GODFATHER
            </h1>
          </div>

          {/* Subtitle with Typewriter */}
          <div className="overflow-hidden mb-8">
            <p 
              className={`font-body text-xl sm:text-2xl lg:text-3xl text-[#e8dcc8]/80 tracking-wide transition-all duration-1000 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              {typedText}
              <span className="typewriter-cursor" />
            </p>
          </div>

          {/* Description */}
          <div 
            className={`max-w-xl mb-10 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1.2s' }}
          >
            <p className="font-body text-sm sm:text-base text-[#e8dcc8]/60 leading-relaxed">
              Experience the epic saga of the Corleone family, spanning three generations 
              of power, betrayal, and the American Dream. Directed by Francis Ford Coppola, 
              based on the novel by Mario Puzo.
            </p>
          </div>

          {/* CTA Button */}
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1.5s' }}
          >
            <button className="btn-godfather group">
              <span className="relative z-10">Enter the Family</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '2s' }}
      >
        <span className="font-display text-xs text-[#e8dcc8]/40 tracking-widest mb-2">SCROLL</span>
        <ChevronDown className="w-5 h-5 text-[#d4af37] animate-bounce" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-12 w-px h-32 bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent z-20" />
      <div className="absolute bottom-1/4 right-24 w-px h-24 bg-gradient-to-b from-transparent via-[#8b0000]/20 to-transparent z-20" />
    </section>
  );
};

export default Hero;
