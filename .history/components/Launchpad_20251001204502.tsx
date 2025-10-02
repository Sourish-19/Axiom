import React from 'react';
import { ArrowRightIcon } from './Icons';
import { FaCheck } from "react-icons/fa6"

interface LaunchpadItem {
    text: string;
    isOrangeCheck?: boolean;
}

interface LaunchpadCardProps {
    title: string;
    description: string;
    items: LaunchpadItem[];
    className?: string;
    onContactClick: () => void;
}

const LaunchpadCard: React.FC<LaunchpadCardProps> = ({ title, description, items, className, onContactClick }) => {
  const isMiddleCard = title === "Funding Opportunities";

  return (
    <div className={`
      relative bg-[#1b1b1c] shadow-lg
      overflow-hidden flex flex-col ${className}
    `}>
      <div className="p-8 flex flex-col flex-grow">
        <h1 className="text-2xl font-bold text-[#ff541f] mb-4">
          {title}
        </h1>
        <p className="text-base text-gray-300 mb-6 flex-grow">
          {description}
        </p>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">What's included</h4>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start text-gray-300">
                {/* <CheckCircleIcon className={`
                  mt-1 mr-3 flex-shrink-0 text-lg
                  ${isMiddleCard || item.isOrangeCheck ? 'text-orange-600' : 'text-white/50'}
                `} /> */}
                <div>
                  FaCheck />
                </div>

                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={onContactClick}
          className={`
            mt-auto inline-flex items-center justify-center
            px-8 py-3 rounded-md text-white text-lg font-medium
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${isMiddleCard
              ? 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500'
              : 'bg-zinc-800 hover:bg-zinc-700 focus:ring-white/40 border border-white/20'
            }
          `}
        >
          Join Us
          <ArrowRightIcon className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

interface LaunchpadProps {
    onContactClick: () => void;
}

const Launchpad: React.FC<LaunchpadProps> = ({ onContactClick }) => {
    const innovationItems: LaunchpadItem[] = [
        { text: "Ideation (Source)", isOrangeCheck: true },
        { text: "Prototyping (Build)", isOrangeCheck: true },
        { text: "Incubation (Grow)", isOrangeCheck: true },
        { text: "Launch (Scale)", isOrangeCheck: true }
    ];
    const fundingItems: LaunchpadItem[] = [
        { text: "MIC Seed Fund: Provides initial grants (up to ₹5 Lakhs) for prototyping, proof-of-concept development, and initial market validation." },
        { text: "External Grant Facilitation: Offers dedicated support to help MAHE teams apply for competitive national grants from bodies like BIRAC and DST." }
    ];
    const mentorshipItems: LaunchpadItem[] = [
        { text: "Become a Mentor: Passionate about giving back? Join our network and shape the next generation of innovators. [Link to Join Committee/Mentor Form]", isOrangeCheck: true }
    ];

    return (
        <section 
          id="resources" 
          className="py-20 px-4 relative"
        >
            <div className="container mx-auto relative">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                        Your Launchpad to Innovation: Tools, Funding, and Mentorship
                    </h2>
                    <p className="text-lg text-gray-400 mt-6">
                        The MIC ecosystem is built to minimize all innovation hurdles and maximize student potential. Access our facilities, funding, and mentorship to turn your proof-of-concept into a market-ready product.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 items-center">
                    <LaunchpadCard 
                        title="The Innovation Journey" 
                        description="A clean, simple flowchart or infographic with four distinct, clickable steps, showing the linear progression supported by the MIC." 
                        items={innovationItems} 
                        onContactClick={onContactClick}
                        className="rounded-l-[24px] border border-white/10"
                    />
                    <LaunchpadCard 
                        title="Funding Opportunities" 
                        description="Turning an idea into a reality requires capital. The MIC provides competitive seed funding and helps you access state and national grants specifically targeted at student and faculty innovation." 
                        items={fundingItems} 
                        className="lg:py-10 rounded-[24px]"
                        onContactClick={onContactClick}
                    />
                    <LaunchpadCard 
                        title="Mentorship Network" 
                        description="The right guide can save you years. Our Mentorship Network connects innovators with a diverse pool of industry leaders." 
                        items={mentorshipItems} 
                        onContactClick={onContactClick}
                        className="rounded-r-[24px] border border-white/10"
                    />
                </div>
            </div>
        </section>
    );
}

export default Launchpad;