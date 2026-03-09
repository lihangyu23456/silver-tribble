import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

interface QuoteData {
  id: number;
  text: string;
  character: string;
  context: string;
}

const quotes: QuoteData[] = [
  {
    id: 1,
    text: "I'm gonna make him an offer he can't refuse.",
    character: "Don Vito Corleone",
    context: "The Godfather (1972)"
  },
  {
    id: 2,
    text: "Leave the gun. Take the cannoli.",
    character: "Peter Clemenza",
    context: "The Godfather (1972)"
  },
  {
    id: 3,
    text: "It's not personal. It's strictly business.",
    character: "Michael Corleone",
    context: "The Godfather (1972)"
  },
  {
    id: 4,
    text: "Keep your friends close, but your enemies closer.",
    character: "Michael Corleone",
    context: "The Godfather Part II (1974)"
  },
  {
    id: 5,
    text: "Revenge is a dish that tastes best when served cold.",
    character: "Don Vito Corleone",
    context: "The Godfather (1972)"
  },
  {
    id: 6,
    text: "A man who doesn't spend time with his family can never be a real man.",
    character: "Don Vito Corleone",
    context: "The Godfather (1972)"
  },
  {
    id: 7,
    text: "Never hate your enemies. It affects your judgment.",
    character: "Michael Corleone",
    context: "The Godfather Part III (1990)"
  },
  {
    id: 8,
    text: "Great men are not born great. They grow great.",
    character: "Don Vito Corleone",
    context: "The Godfather (1972)"
  }
];

const QuotesSection = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate quotes
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      id="quotes"
      className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Quote Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Quote className="w-[400px] h-[400px] text-[#d4af37]/[0.02] rotate-180" />
      </div>

      {/* Section Header */}
      <div className="px-6 sm:px-12 lg:px-24 mb-16 relative z-10">
        <div 
          className={`reveal transition-all duration-1000 ${
            isVisible ? 'active' : ''
          }`}
        >
          <span className="font-display text-xs sm:text-sm text-[#d4af37] tracking-[0.3em] uppercase mb-4 block">
            Wisdom & Threats
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#e8dcc8] mb-6">
            ICONIC WORDS
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-[#d4af37] to-transparent" />
        </div>
      </div>

      {/* Main Quote Display */}
      <div 
        className={`reveal px-6 sm:px-12 lg:px-24 relative z-10 transition-all duration-1000 ${
          isVisible ? 'active' : ''
        }`}
        style={{ transitionDelay: '0.3s' }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Quote Container */}
          <div className="relative min-h-[300px] flex flex-col items-center justify-center text-center">
            {quotes.map((quote, index) => (
              <div
                key={quote.id}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
                  index === activeQuote 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#d4af37]/40 mb-6" />
                
                {/* Quote Text */}
                <blockquote className="quote-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#e8dcc8] mb-8 leading-tight max-w-4xl">
                  "{quote.text}"
                </blockquote>
                
                {/* Attribution */}
                <div className="flex flex-col items-center gap-2">
                  <span className="font-display text-lg text-[#d4af37]">
                    {quote.character}
                  </span>
                  <span className="font-body text-sm text-[#e8dcc8]/40">
                    {quote.context}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveQuote(index)}
                className={`h-1 transition-all duration-500 ${
                  index === activeQuote 
                    ? 'w-12 bg-[#d4af37]' 
                    : 'w-4 bg-[#d4af37]/30 hover:bg-[#d4af37]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Quote Previews */}
      <div className="hidden lg:block">
        {quotes.slice(0, 4).map((quote, index) => (
          <div
            key={`preview-${quote.id}`}
            className={`absolute font-display text-xs text-[#d4af37]/10 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              top: `${20 + index * 15}%`,
              left: index % 2 === 0 ? '5%' : 'auto',
              right: index % 2 === 1 ? '5%' : 'auto',
              transitionDelay: `${0.5 + index * 0.1}s`,
              transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`
            }}
          >
            "{quote.text.slice(0, 30)}..."
          </div>
        ))}
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-24 bg-gradient-to-b from-[#d4af37]/20 to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-[#d4af37]/20 to-transparent" />
    </section>
  );
};

export default QuotesSection;
