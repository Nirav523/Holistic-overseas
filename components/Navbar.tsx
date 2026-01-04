
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Set dynamic favicon matching the logo
    const link = (document.querySelector("link[rel*='icon']") as HTMLLinkElement) || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = '/Public/images/Logo.png';
    document.head.appendChild(link);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.reload()}>
          <img src="/public/images/Logo.png" alt="Holistic Overseas Logo" className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
          <span className="font-display text-2xl tracking-tighter text-neutral-900">
            HOLISTIC <span className="text-[rgba(55,205,250)]">OVERSEAS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {['Services', 'Global Hubs', 'Blueprint', 'FAQ'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-[10px] uppercase font-bold tracking-[0.3em] transition-colors ${scrolled ? 'text-neutral-600 hover:text-[rgba(55,205,250)]' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-[rgba(55,205,250)] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-neutral-900 transition-colors">
            Inquiry // Open
          </a>
        </div>
        
        {/* Mobile Mini Toggle */}
        <div className="md:hidden">
          <div className="w-6 h-0.5 mb-1 bg-neutral-900"></div>
          <div className="w-6 h-0.5 bg-neutral-900"></div>
        </div>
      </div>
    </nav>
  );
};
