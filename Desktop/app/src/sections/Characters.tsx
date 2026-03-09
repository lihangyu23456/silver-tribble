import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Character {
  id: number;
  name: string;
  actor: string;
  role: string;
  description: string;
  image: string;
  quote: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "Don Vito Corleone",
    actor: "Marlon Brando",
    role: "The Godfather",
    description: "The patriarch of the Corleone family. A man of respect, wisdom, and absolute power who built an empire on loyalty and fear.",
    image: "/images/character-vito.jpg",
    quote: "I'm gonna make him an offer he can't refuse."
  },
  {
    id: 2,
    name: "Michael Corleone",
    actor: "Al Pacino",
    role: "The Successor",
    description: "The youngest son who transforms from a war hero into a ruthless mafia boss, sacrificing his soul for the family.",
    image: "/images/character-michael.jpg",
    quote: "It's not personal. It's strictly business."
  },
  {
    id: 3,
    name: "Sonny Corleone",
    actor: "James Caan",
    role: "The Hothead",
    description: "The eldest son, whose volatile temper and impulsive nature make him a formidable but flawed heir.",
    image: "/images/character-sonny.jpg",
    quote: "I want you to rest well. And in a month from now, this Hollywood big shot's gonna give you what you want."
  },
  {
    id: 4,
    name: "Tom Hagen",
    actor: "Robert Duvall",
    role: "The Consigliere",
    description: "The family's adopted son and trusted advisor. A voice of reason and the family's legal shield.",
    image: "/images/character-tom.jpg",
    quote: "Mr. Corleone is a man who insists on hearing bad news immediately."
  },
  {
    id: 5,
    name: "Kay Adams",
    actor: "Diane Keaton",
    role: "The Outsider",
    description: "Michael's wife who struggles to reconcile her love for him with the darkness of his world.",
    image: "/images/character-kay.jpg",
    quote: "Do you know how many men I've been with?"
  }
];

const Characters = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const nextCharacter = () => {
    setActiveIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setActiveIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const getCharacterPosition = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + characters.length + Math.floor(characters.length / 2)) % characters.length) - Math.floor(characters.length / 2);
    
    return {
      x: normalizedDiff * 280,
      scale: normalizedDiff === 0 ? 1 : 0.75,
      opacity: Math.abs(normalizedDiff) > 2 ? 0 : 1 - Math.abs(normalizedDiff) * 0.3,
      zIndex: 10 - Math.abs(normalizedDiff)
    };
  };

  return (
    <section 
      ref={sectionRef}
      id="characters"
      className="relative py-24 sm:py-32 bg-[#0f0f0f] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Section Header */}
      <div className="px-6 sm:px-12 lg:px-24 mb-16 relative z-10">
        <div 
          className={`reveal transition-all duration-1000 ${
            isVisible ? 'active' : ''
          }`}
        >
          <span className="font-display text-xs sm:text-sm text-[#d4af37] tracking-[0.3em] uppercase mb-4 block">
            The Inner Circle
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#e8dcc8] mb-6">
            THE FAMILY
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />
          <p className="font-body text-[#e8dcc8]/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            The Corleone family is bound by blood, loyalty, and secrets. Each member plays 
            a vital role in the empire—some by choice, others by birthright.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className={`reveal relative h-[600px] sm:h-[700px] flex items-center justify-center transition-all duration-1000 ${
          isVisible ? 'active' : ''
        }`}
        style={{ transitionDelay: '0.3s' }}
      >
        {/* Character Cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          {characters.map((character, index) => {
            const position = getCharacterPosition(index);
            const isActive = index === activeIndex;
            
            return (
              <div
                key={character.id}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] cursor-pointer"
                style={{
                  transform: `translateX(${position.x}px) scale(${position.scale})`,
                  opacity: position.opacity,
                  zIndex: position.zIndex,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`relative w-64 sm:w-80 transition-all duration-500 ${
                  isActive ? 'shadow-2xl shadow-[#d4af37]/20' : ''
                }`}>
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden border border-[#d4af37]/20">
                    <img 
                      src={character.image}
                      alt={character.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive ? 'grayscale-0' : 'grayscale'
                      }`}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <p className="font-body text-xs text-[#d4af37] mb-2 tracking-wider uppercase">
                        {character.role}
                      </p>
                      <h3 className="font-display text-2xl text-[#e8dcc8] mb-1">
                        {character.name}
                      </h3>
                      <p className="font-body text-sm text-[#e8dcc8]/60 mb-3">
                        Played by {character.actor}
                      </p>
                      <p className="font-body text-xs text-[#e8dcc8]/50 leading-relaxed line-clamp-3">
                        {character.description}
                      </p>
                    </div>
                  </div>

                  {/* Quote (Only for active) */}
                  {isActive && (
                    <div className="absolute -bottom-20 left-0 right-0 text-center transition-all duration-500">
                      <p className="font-display text-sm text-[#d4af37]/80 italic">
                        "{character.quote}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevCharacter}
          className="absolute left-4 sm:left-12 z-20 w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={nextCharacter}
          className="absolute right-4 sm:right-12 z-20 w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {characters.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-[#d4af37] w-8' 
                : 'bg-[#d4af37]/30 hover:bg-[#d4af37]/50'
            }`}
          />
        ))}
      </div>

      {/* Character Counter */}
      <div className="absolute bottom-8 right-12 font-display text-6xl font-bold text-[#d4af37]/5">
        {String(activeIndex + 1).padStart(2, '0')}
      </div>
    </section>
  );
};

export default Characters;
