
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
  // This small handler is just for changing the header background
  const handleBgChange = () => {
    setIsScrolled(window.scrollY > 10);
  };
  window.addEventListener('scroll', handleBgChange);

  // --- Intersection Observer Logic ---
  const sections = ['home', 'about', 'events', 'resources', 'faqs'];

  // This configures the observer. The magic is in `rootMargin`.
  // It creates a "trigger zone" in the middle of the screen.
  // A link becomes active when its section enters this zone.
  const observerOptions = {
    root: null, // observing relative to the viewport
    rootMargin: "-30% 0px -70% 0px",
    threshold: 0,
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      // When a section is intersecting our trigger zone, set it as active.
      if (entry.isIntersecting) {
        // The 'contact' section is handled by the button, so if the 'faqs'
        // section is intersecting, we keep 'faqs' highlighted.
        const sectionId = entry.target.id;
        setActiveLink(sectionId);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Tell the observer to watch each of our sections
  sections.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }
  });

  // Cleanup function to remove listeners and observers when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleBgChange);
    const elements = sections.map(id => document.getElementById(id)).filter(el => el);
    elements.forEach(element => observer.unobserve(element!));
  };
}, []); // Empty array ensures this runs only once

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