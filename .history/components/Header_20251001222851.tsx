
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

  const handleScroll = () => {
    // This offset means a section becomes "active" when its top is 100px above the viewport top
    const scrollPosition = window.scrollY + 100;

    let currentSection = 'home';
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (!section) continue;

      // Check if the user has scrolled past the top of the section
      if (section.offsetTop <= scrollPosition) {
        currentSection = sectionId;
      }
    }

    const navSection = currentSection === 'contact' ? 'faqs' : currentSection;
    setActiveLink(navSection);
    setIsScrolled(window.scrollY > 10);
  };

  // ⛔️ The immediate call to handleScroll() is removed from here.

  // Add the event listener for when the user scrolls
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Cleanup: remove the listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Empty dependency array means this effect runs only once on mount // Empty dependency array means this effect runs only once on mount

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