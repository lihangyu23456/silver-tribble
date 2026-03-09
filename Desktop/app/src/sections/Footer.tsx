import { Film, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#d4af37]/20">
      {/* Main Footer Content */}
      <div className="px-6 sm:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Film className="w-8 h-8 text-[#d4af37]" />
              <span className="font-display text-2xl text-[#e8dcc8]">
                THE GODFATHER
              </span>
            </div>
            <p className="font-body text-sm text-[#e8dcc8]/60 leading-relaxed max-w-md mb-6">
              A tribute to Francis Ford Coppola's masterpiece trilogy. This website is a 
              fan-made project celebrating the artistry, storytelling, and cultural impact 
              of The Godfather saga.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#e8dcc8]/40">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-[#8b0000] fill-[#8b0000]" />
              <span>for cinema lovers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm text-[#d4af37] tracking-wider uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'The Saga', href: '#movies' },
                { label: 'The Family', href: '#characters' },
                { label: 'Iconic Words', href: '#quotes' },
                { label: 'Legacy', href: '#legacy' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-[#e8dcc8]/60 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#d4af37] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-display text-sm text-[#d4af37] tracking-wider uppercase mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Paramount Pictures', href: 'https://www.paramount.com' },
                { label: 'AFI 100 Years', href: 'https://www.afi.com/afis-100-years/' },
                { label: 'IMDb', href: 'https://www.imdb.com/title/tt0068646/' },
                { label: 'Francis Ford Coppola', href: 'https://www.zoetrope.com' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-[#e8dcc8]/60 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d4af37]/10">
        <div className="px-6 sm:px-12 lg:px-24 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-[#e8dcc8]/40 text-center sm:text-left">
              © {currentYear} The Godfather Tribute. All rights reserved.
            </p>
            <p className="font-body text-xs text-[#e8dcc8]/40 text-center sm:text-right">
              The Godfather is a trademark of Paramount Pictures.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-16 bg-gradient-to-b from-[#d4af37]/20 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-12 bg-gradient-to-b from-[#d4af37]/10 to-transparent" />
    </footer>
  );
};

export default Footer;
