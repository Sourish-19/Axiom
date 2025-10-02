
import React, { useState, useEffect } from 'react';
import { IoMenuOutline } from "react-icons/io5"

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
  const [showNavlinks, setShowNavlinks] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'events', 'resources', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 100;

      let currentSection = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      // Map contact to faqs for nav link highlighting
      // const navSection = currentSection === 'contact' ? 'faqs' : currentSection;
      setActiveLink(currentSection);

      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md  ' : 'bg-transparent'} py-6 px-6 md:px-8 lg:px-16 xl:px-32`}
      style={{
        backgroundColor: `${showNavlinks ? "black" : ""}`
      }}
    >
      <div className="container max-w-[1280px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/axiom_logo.png" alt="Axiom Logo" className="h-8 w-[52px] w-auto" />
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              // remove fragment/hash from URL while keeping path and query
              history.replaceState(null, '', window.location.pathname + window.location.search);
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleClick}
                className={`relative text-base text-gray-300 hover:text-white transition-colors ${activeLink === id ? 'text-white' : ''}`}
              >
                {link.name}
                {activeLink === id && (
                  <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-[#FF541F] rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={onContactClick} className="bg-gradient-to-r from-[#FF541F] to-[#FF8A65] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity">
            Contact us
          </button>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setShowNavlinks((prev: boolean) => !prev)}
          >
            <IoMenuOutline />
          </button>
        </div>
      </div>

      {showNavlinks && (
        <div
          className="lg:hidden absolute z-1 bg-black border-b border-white/30 backdrop-blur left-0 top-[80px] right-0 flex flex-col items-center pb-4"
        >
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              // remove fragment/hash from URL while keeping path and query
              history.replaceState(null, '', window.location.pathname + window.location.search);
              setShowNavlinks(false)
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleClick}
                className={`relative text-base text-gray-300 hover:text-white transition-colors py-2`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;