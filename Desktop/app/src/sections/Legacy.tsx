import { useEffect, useRef, useState } from 'react';
import { Award, Film, TrendingUp, Users, Star, Trophy } from 'lucide-react';

interface Stat {
  id: number;
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: Trophy,
    value: "9",
    label: "Academy Awards",
    description: "Including 2 Best Picture wins"
  },
  {
    id: 2,
    icon: Award,
    value: "28",
    label: "Oscar Nominations",
    description: "Across all three films"
  },
  {
    id: 3,
    icon: TrendingUp,
    value: "$429M",
    label: "Box Office",
    description: "Worldwide gross revenue"
  },
  {
    id: 4,
    icon: Film,
    value: "9+ hrs",
    label: "Total Runtime",
    description: "Of the complete saga"
  },
  {
    id: 5,
    icon: Users,
    value: "50+",
    label: "Years of Legacy",
    description: "Since the first film's release"
  },
  {
    id: 6,
    icon: Star,
    value: "#2",
    label: "AFI's 100 Years",
    description: "Greatest American Movie"
  }
];

const milestones = [
  {
    year: "1969",
    event: "Mario Puzo's novel 'The Godfather' is published",
    detail: "The book spends 67 weeks on The New York Times Best Seller list"
  },
  {
    year: "1972",
    event: "The Godfather premieres",
    detail: "Wins 3 Academy Awards including Best Picture and Best Actor for Marlon Brando"
  },
  {
    year: "1974",
    event: "The Godfather Part II released",
    detail: "First sequel to win Best Picture, wins 6 Oscars total"
  },
  {
    year: "1990",
    event: "The Godfather Part III completes the trilogy",
    detail: "7 Academy Award nominations, brings closure to Michael's story"
  },
  {
    year: "2008",
    event: "AFI names it #2 Greatest American Movie",
    detail: "Just behind Citizen Kane in the prestigious ranking"
  },
  {
    year: "2020",
    event: "The Godfather, Coda: The Death of Michael Corleone",
    detail: "Coppola's re-edited version of Part III with new beginning and ending"
  }
];

const Legacy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
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
      id="legacy"
      className="relative py-24 sm:py-32 bg-[#0f0f0f] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      {/* Section Header */}
      <div className="px-6 sm:px-12 lg:px-24 mb-16 relative z-10">
        <div 
          className={`reveal transition-all duration-1000 ${
            isVisible ? 'active' : ''
          }`}
        >
          <span className="font-display text-xs sm:text-sm text-[#d4af37] tracking-[0.3em] uppercase mb-4 block">
            Cinematic Impact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#e8dcc8] mb-6">
            THE LEGACY
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />
          <p className="font-body text-[#e8dcc8]/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            More than just films, The Godfather trilogy redefined cinema, influenced generations 
            of filmmakers, and became an indelible part of American culture.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 sm:px-12 lg:px-24 mb-24 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.id}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 sm:px-12 lg:px-24 relative z-10">
        <div 
          className={`reveal transition-all duration-1000 ${
            isVisible ? 'active' : ''
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <h3 className="font-display text-2xl sm:text-3xl text-[#e8dcc8] mb-12 text-center">
            TIMELINE OF POWER
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent hidden lg:block" />

            {/* Milestones */}
            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                  onMouseEnter={() => setActiveMilestone(index)}
                  onMouseLeave={() => setActiveMilestone(null)}
                >
                  {/* Content */}
                  <div 
                    className={`${
                      index % 2 === 0 
                        ? 'lg:text-right lg:pr-16' 
                        : 'lg:col-start-2 lg:pl-16'
                    }`}
                  >
                    <div 
                      className={`bg-[#1a1a1a] border border-[#d4af37]/10 p-6 transition-all duration-500 ${
                        activeMilestone === index 
                          ? 'border-[#d4af37]/40 shadow-lg shadow-[#d4af37]/5' 
                          : ''
                      }`}
                    >
                      <span className="font-display text-3xl sm:text-4xl text-[#d4af37] block mb-2">
                        {milestone.year}
                      </span>
                      <h4 className="font-display text-lg text-[#e8dcc8] mb-2">
                        {milestone.event}
                      </h4>
                      <p className="font-body text-sm text-[#e8dcc8]/50">
                        {milestone.detail}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2">
                    <div 
                      className={`timeline-node transition-all duration-300 ${
                        activeMilestone === index ? 'bg-[#d4af37]' : ''
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Impact Quote */}
      <div className="px-6 sm:px-12 lg:px-24 mt-24 relative z-10">
        <div 
          className={`reveal max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'active' : ''
          }`}
          style={{ transitionDelay: '0.7s' }}
        >
          <div className="border-t border-b border-[#d4af37]/20 py-12">
            <p className="quote-text text-xl sm:text-2xl lg:text-3xl text-[#e8dcc8]/80 mb-6">
              "The Godfather changed the way the world viewed cinema. It elevated the gangster film 
              to the level of Greek tragedy, creating a template that filmmakers still follow today."
            </p>
            <span className="font-body text-sm text-[#d4af37]">
              — American Film Institute
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: Stat;
  index: number;
  isVisible: boolean;
}

const StatCard = ({ stat, index, isVisible }: StatCardProps) => {
  const Icon = stat.icon;
  
  return (
    <div 
      className={`reveal relative group transition-all duration-700 ${
        isVisible ? 'active' : ''
      }`}
      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="bg-[#1a1a1a] border border-[#d4af37]/10 p-6 sm:p-8 text-center group-hover:border-[#d4af37]/30 transition-all duration-500 h-full">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-all duration-300">
            <Icon className="w-6 h-6 text-[#d4af37]" />
          </div>
        </div>

        {/* Value */}
        <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#e8dcc8] block mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
          {stat.value}
        </span>

        {/* Label */}
        <span className="font-display text-sm sm:text-base text-[#d4af37] tracking-wider uppercase block mb-2">
          {stat.label}
        </span>

        {/* Description */}
        <span className="font-body text-xs text-[#e8dcc8]/50">
          {stat.description}
        </span>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#d4af37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#d4af37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default Legacy;
