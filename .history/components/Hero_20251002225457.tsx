import React from 'react';
import { StarIcon } from './Icons';

interface HeroProps {
  onEventClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEventClick, onContactClick }) => {
  return (
    <section 
      id="home" 
      className="py- md:py-32 px-4 relative"
    >
      <div className="container mx-auto text-center relative">
        <div className="flex justify-center items-center mb-6 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-full px-4 py-2 w-fit mx-auto backdrop-blur-sm">
          <div className="flex -space-x-2 mr-3">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/id/1027/50/50" alt="Peer 1" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/id/1011/50/50" alt="Peer 2" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/id/1012/50/50" alt="Peer 3" />
          </div>
          <div className="flex flex-col mr-3">
            <div className="flex">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
            </div>
            <span className="text-gray-300 text-xs mt-1">115+ happy peers</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Automate <span className="text-[#FF541F]">Intelligence.</span>
          <br />
          Accelerate Growth.
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
          Our AI-powered SaaS platform empowers businesses to streamline operations, automate repetitive tasks, and make smarter, data-driven decisions—all from one intuitive dashboard.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button onClick={onEventClick} className="bg-gradient-to-r from-[#FF541F] to-[#FF8A65] text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto">
            Get Started
          </button>
          <button onClick={onContactClick} className="border border-gray-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;