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
      overflow-hidden flex flex-col justify-center ${className} max-w-[420px] lg:max-w-[340px]
    `}>
      <div className="p-3 md:p-6 flex flex-col">
        <h1 className="text-lg md:text-3xl font-medium text-[#ff541f] mb-4 text-center">
          {title}
        </h1>
        <p className="text-xs md:text-md text-gray-300 mb-6">
          {description}
        </p>

        <div className="mb-8">
          <h4 className="text-sm md:text-lg font-semibold text-white mb-4">What's included</h4>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-gray-300">
                <div className="bg-[#ff541f] border border-black text-black rounded-full p-[2px] text-xs md:mt-1">
                  <FaCheck />
                </div>

                <span className="text-xs md:text-md">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onContactClick}
          className={`
            m-auto w-[160px] inline-flex items-center justify-center
            p-2 md:px-8 md:py-3 rounded-md text-white text-sm md:text-lg font-medium
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            bg-orange-600 hover:bg-orange-700 focus:ring-orange-500
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
      className="py-8 md:py-20 px-4 relative"
    >
      <div className="container max-w-[1280px] mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-lg md:text-6xl font-bold leading-tight">
            Your Launchpad to Innovation: Tools, Funding, and Mentorship
          </h2>
          <p className="text-xs md:text-lg text-gray-400 mt-2 md:mt-6">
            The MIC ecosystem is built to minimize all innovation hurdles and maximize student potential. Access our facilities, funding, and mentorship to turn your proof-of-concept into a market-ready product.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center items-center">
          <LaunchpadCard
            title="The Innovation Journey"
            description="A clean, simple flowchart or infographic with four distinct, clickable steps, showing the linear progression supported by the MIC."
            items={innovationItems}
            onContactClick={onContactClick}
            className="lg:rounded-l-[24px] lg:rounded-r-[0px] rounded-[24px] border border-white/10 lg:h-[480px]"
          />
          <LaunchpadCard
            title="Funding Opportunities"
            description="Turning an idea into a reality requires capital. The MIC provides competitive seed funding and helps you access state and national grants specifically targeted at student and faculty innovation."
            items={fundingItems}
            className="rounded-[24px] lg:h-[540px]"
            onContactClick={onContactClick}
          />
          <LaunchpadCard
            title="Mentorship Network"
            description="The right guide can save you years. Our Mentorship Network connects innovators with a diverse pool of industry leaders."
            items={mentorshipItems}
            onContactClick={onContactClick}
            className="lg:rounded-r-[24px] lg:rounded-l-[0px] rounded-[24px] border border-white/10 lg:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Launchpad;