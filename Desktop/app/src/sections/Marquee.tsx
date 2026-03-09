import { useEffect, useRef, useState } from 'react';

const Marquee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const marqueeItems = [
    { text: "I'M GONNA MAKE HIM AN OFFER HE CAN'T REFUSE", type: 'quote' },
    { text: '★', type: 'star' },
    { text: '1972', type: 'year' },
    { text: '★', type: 'star' },
    { text: 'LEAVE THE GUN. TAKE THE CANNOLI.', type: 'quote' },
    { text: '★', type: 'star' },
    { text: '1974', type: 'year' },
    { text: '★', type: 'star' },
    { text: "IT'S NOT PERSONAL. IT'S STRICTLY BUSINESS.", type: 'quote' },
    { text: '★', type: 'star' },
    { text: '1990', type: 'year' },
    { text: '★', type: 'star' },
    { text: 'KEEP YOUR FRIENDS CLOSE, BUT YOUR ENEMIES CLOSER', type: 'quote' },
    { text: '★', type: 'star' },
    { text: '9 OSCARS', type: 'award' },
    { text: '★', type: 'star' },
    { text: 'REVENGE IS A DISH BEST SERVED COLD', type: 'quote' },
    { text: '★', type: 'star' },
    { text: 'FRANCIS FORD COPPOLA', type: 'director' },
    { text: '★', type: 'star' },
  ];

  return (
    <section 
      ref={marqueeRef}
      className="relative py-8 bg-[#0a0a0a] border-y border-[#d4af37]/20 overflow-hidden"
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      
      {/* Main Marquee Track */}
      <div 
        className={`flex whitespace-nowrap transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* First set */}
        <div className="animate-marquee flex items-center">
          {marqueeItems.map((item, index) => (
            <MarqueeItem key={`1-${index}`} item={item} />
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="animate-marquee flex items-center">
          {marqueeItems.map((item, index) => (
            <MarqueeItem key={`2-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* Secondary Marquee Track (Reverse Direction) */}
      <div 
        className={`flex whitespace-nowrap mt-4 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '0.3s' }}
      >
        {/* First set - reversed */}
        <div className="animate-marquee flex items-center" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
          {[...marqueeItems].reverse().map((item, index) => (
            <MarqueeItem key={`3-${index}`} item={item} variant="secondary" />
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="animate-marquee flex items-center" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
          {[...marqueeItems].reverse().map((item, index) => (
            <MarqueeItem key={`4-${index}`} item={item} variant="secondary" />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

      {/* Side Fade Effects */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

interface MarqueeItemProps {
  item: { text: string; type: string };
  variant?: 'primary' | 'secondary';
}

const MarqueeItem = ({ item, variant = 'primary' }: MarqueeItemProps) => {
  const getItemStyle = () => {
    const baseStyle = "mx-6 font-display tracking-widest";
    
    switch (item.type) {
      case 'quote':
        return `${baseStyle} ${variant === 'primary' ? 'text-[#e8dcc8]/80 text-sm sm:text-base' : 'text-[#e8dcc8]/40 text-xs sm:text-sm'}`;
      case 'star':
        return `${baseStyle} text-[#d4af37] text-lg`;
      case 'year':
        return `${baseStyle} text-[#d4af37] text-lg sm:text-xl font-bold`;
      case 'award':
        return `${baseStyle} text-[#8b0000] text-sm sm:text-base font-bold`;
      case 'director':
        return `${baseStyle} ${variant === 'primary' ? 'text-[#d4af37]/60 text-sm' : 'text-[#d4af37]/30 text-xs'}`;
      default:
        return baseStyle;
    }
  };

  return (
    <span className={getItemStyle()}>
      {item.text}
    </span>
  );
};

export default Marquee;
