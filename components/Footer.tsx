
import React from 'react';
import { GitHubIcon, GlobeIcon } from './Icons';

interface FooterProps {
    onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* About Us */}
          <div className="md:col-span-5 lg:col-span-6">
             <img src="https://i.imgur.com/GHYk3vL.png" alt="Axiom Logo" className="h-10 w-auto mb-4" />
            <p className="text-gray-400 max-w-md">
                The MAHE Innovation Centre (MIC) is the dedicated hub for fostering and accelerating technological and entrepreneurial spirit within the Manipal Academy of Higher Education (MAHE) ecosystem.
            </p>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-white">Useful Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About MIC</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events / Resources</a></li>
              <li><button onClick={onContactClick} className="text-gray-400 hover:text-white transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
            <ul className="space-y-3 text-gray-400">
                <li>BSF Campus, Yelahanka,</li>
                <li>Govindapura, Bengaluru,</li>
                <li>Karnataka 560064</li>
                <li className="pt-2"><a href="tel:+1233242653" className="hover:text-white transition-colors">+123 324 2653</a></li>
                <li><a href="mailto:username@mail.com" className="hover:text-white transition-colors">username@mail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500">
            <p>© 2025 All Right Reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#FF541F] text-gray-400 hover:text-white transition-colors"><GitHubIcon className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#FF541F] text-gray-400 hover:text-white transition-colors"><GlobeIcon className="w-5 h-5" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;