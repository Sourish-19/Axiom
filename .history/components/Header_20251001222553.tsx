
import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About MIC', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Resources', href: '#resources' },
  { name: 'FAQs', href: '#faqs' },
];

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'events', 'resources', 'faqs', 'contact'];

    // Use IntersectionObserver to robustly detect the currently visible section.
    // This handles layout shifts (images/fonts loading) better than offsetTop comparisons.
    let observer: IntersectionObserver | null = null;

    const setNavFromId = (id: string) => {
      const navSection = id === 'contact' ? 'faqs' : id;
      setActiveLink(navSection);
    };

    const createObserver = () => {
      if (!('IntersectionObserver' in window)) return null;

      const options: IntersectionObserverInit = {
        // Shrink the root window so the central portion of the viewport is used as the "active" region.
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.01,
      };

      const cb: IntersectionObserverCallback = (entries) => {
        // Pick the entry whose element is closest to the viewport center among intersecting entries.
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => {
            const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2;
            const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
          });
          const best = visible[0];
          if (best && best.target && (best.target as HTMLElement).id) {
            setNavFromId((best.target as HTMLElement).id);
          }
        }
      };

      return new IntersectionObserver(cb, options);
    };

    observer = createObserver();
    if (observer) {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    }

    // Fallback / initial check in case IntersectionObserver is not available or to set initial state
    const computeInitialActive = () => {
      // If observer is present, the callback will run and set active. But run a deterministic check anyway.
      let bestId = 'home';
      let bestDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < bestDistance) {
          bestDistance = dist;
          bestId = id;
        }
      }
      setNavFromId(bestId);
    };

    // Set isScrolled from current position
    const handleScrollForHeader = () => setIsScrolled(window.scrollY > 10);

    // Initial runs
    computeInitialActive();
    handleScrollForHeader();

    // Listen for scroll only to toggle header background (cheap) and for resizing/reflow that may change centers
    window.addEventListener('scroll', handleScrollForHeader, { passive: true });
    window.addEventListener('resize', computeInitialActive);

    // Also ensure we re-run initial computation after load (images/fonts may change layout)
    window.addEventListener('load', computeInitialActive);

    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      window.removeEventListener('scroll', handleScrollForHeader);
      window.removeEventListener('resize', computeInitialActive);
      window.removeEventListener('load', computeInitialActive);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md  ' : 'bg-transparent'} py-6 px-4 md:px-8 lg:px-16 xl:px-32`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <img src="/axiom_logo.png" alt="Axiom Logo" className="h-8 w-auto" />
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`relative text-base text-gray-300 hover:text-white transition-colors ${activeLink === link.href.substring(1) ? 'text-white' : ''}`}
            >
              {link.name}
              {activeLink === link.href.substring(1) && (
                  <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-[#FF541F] rounded-full"></span>
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={onContactClick} className="bg-gradient-to-r from-[#FF541F] to-[#FF8A65] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity">
            Contact us
          </button>
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;