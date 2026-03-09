import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Award, Star } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  year: string;
  runtime: string;
  director: string;
  description: string;
  awards: string[];
  rating: string;
  poster: string;
  color: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "The Godfather",
    year: "1972",
    runtime: "175 min",
    director: "Francis Ford Coppola",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. A masterpiece that redefined the gangster genre and became a cultural phenomenon.",
    awards: ["Best Picture", "Best Actor (Marlon Brando)", "Best Adapted Screenplay"],
    rating: "9.2",
    poster: "/images/poster-godfather-1.jpg",
    color: "#8b0000"
  },
  {
    id: 2,
    title: "The Godfather Part II",
    year: "1974",
    runtime: "200 min",
    director: "Francis Ford Coppola",
    description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate. Widely regarded as the greatest sequel ever made.",
    awards: ["Best Picture", "Best Director", "Best Supporting Actor (Robert De Niro)", "Best Adapted Screenplay", "Best Art Direction", "Best Original Score"],
    rating: "9.0",
    poster: "/images/poster-godfather-2.jpg",
    color: "#d4af37"
  },
  {
    id: 3,
    title: "The Godfather Part III",
    year: "1990",
    runtime: "162 min",
    director: "Francis Ford Coppola",
    description: "Follows Michael Corleone, now in his 60s, as he seeks to free his family from crime and find a suitable successor to his empire. A tragic conclusion to the epic saga of power and redemption.",
    awards: ["7 Academy Award Nominations", "Best Picture Nominee"],
    rating: "7.6",
    poster: "/images/poster-godfather-3.jpg",
    color: "#4a4a4a"
  }
];

const Movies = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  return (
    <section 
      ref={sectionRef}
      id="movies"
      className="relative py-24 sm:py-32 bg-[#0f0f0f]"
    >
      {/* Section Header */}
      <div className="px-6 sm:px-12 lg:px-24 mb-16">
        <div 
          className={`reveal transition-all duration-1000 ${
            isVisible ? 'active' : ''
          }`}
        >
          <span className="font-display text-xs sm:text-sm text-[#d4af37] tracking-[0.3em] uppercase mb-4 block">
            The Saga
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#e8dcc8] mb-6">
            THREE ACTS
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />
          <p className="font-body text-[#e8dcc8]/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            Spanning nearly two decades of filmmaking, the Godfather trilogy tells the epic story 
            of the Corleone family—a tale of power, loyalty, betrayal, and the corrupting influence 
            of the American Dream.
          </p>
        </div>
      </div>

      {/* Movie Cards */}
      <div className="px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {movies.map((movie, index) => (
            <MovieCard 
              key={movie.id}
              movie={movie}
              index={index}
              isActive={activeCard === movie.id}
              onHover={() => setActiveCard(movie.id)}
              onLeave={() => setActiveCard(null)}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* Timeline Connector */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
        <div className="mx-24 h-full bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
      </div>

      {/* Decorative Years */}
      <div className="hidden lg:flex justify-between px-24 mt-12">
        {['1972', '1974', '1990'].map((year, index) => (
          <span 
            key={year}
            className={`font-display text-6xl font-bold text-[#d4af37]/10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${0.5 + index * 0.2}s` }}
          >
            {year}
          </span>
        ))}
      </div>
    </section>
  );
};

interface MovieCardProps {
  movie: Movie;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  isVisible: boolean;
}

const MovieCard = ({ movie, index, isActive, onHover, onLeave, isVisible }: MovieCardProps) => {
  return (
    <div 
      className={`reveal relative group transition-all duration-700 ${
        isVisible ? 'active' : ''
      }`}
      style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Card Container */}
      <div className="relative bg-[#1a1a1a] border border-[#d4af37]/10 overflow-hidden card-hover">
        {/* Poster Image */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <img 
            src={movie.poster}
            alt={movie.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isActive ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent transition-opacity duration-500 ${
            isActive ? 'opacity-90' : 'opacity-70'
          }`} />
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#0f0f0f]/80 backdrop-blur-sm px-3 py-1.5 border border-[#d4af37]/30">
            <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            <span className="font-display text-sm text-[#e8dcc8]">{movie.rating}</span>
          </div>

          {/* Hover Content Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/90 to-[#0f0f0f]/70 flex flex-col justify-end p-6 transition-all duration-500 ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="font-body text-sm text-[#e8dcc8]/80 leading-relaxed mb-4">
              {movie.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {movie.awards.slice(0, 3).map((award, i) => (
                <span 
                  key={i}
                  className="text-xs font-display text-[#d4af37] bg-[#d4af37]/10 px-2 py-1 border border-[#d4af37]/20"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Info */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-xs text-[#e8dcc8]/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {movie.year}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {movie.runtime}
            </span>
          </div>
          
          <h3 className="font-display text-xl sm:text-2xl text-[#e8dcc8] mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
            {movie.title}
          </h3>
          
          <p className="font-body text-xs text-[#e8dcc8]/40 mb-4">
            Directed by {movie.director}
          </p>

          {/* Awards Preview */}
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span className="font-body text-xs text-[#e8dcc8]/60">
              {movie.awards.length} Academy Award{movie.awards.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div 
          className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
            isActive ? 'w-full' : 'w-0'
          }`}
          style={{ 
            background: `linear-gradient(to right, ${movie.color}, transparent)` 
          }}
        />
      </div>

      {/* Card Number */}
      <div className="absolute -top-4 -left-2 font-display text-7xl font-bold text-[#d4af37]/5 select-none pointer-events-none">
        0{index + 1}
      </div>
    </div>
  );
};

export default Movies;
