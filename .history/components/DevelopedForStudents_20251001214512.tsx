import React from 'react';
import { ArrowRightIcon } from './Icons';

interface CardProps {
  title: string;
  content: string;
  className?: string;
  hasGradient?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, className = '', hasGradient = false }) => {
  return (
    <div 
      className={`bg-[#181818] border border-gray-800/50 p-8 rounded-2xl group relative overflow-hidden h-full flex flex-col justify-between ${className}`}
    >
      {hasGradient && (
        <div aria-hidden="true" className="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,_rgba(255,84,31,0.2)_0%,_transparent_100%)] blur-2xl"></div>
      )}
      
      <div className="flex justify-between items-start">
        <p className="text-gray-400 text-base max-w-sm pr-4">{content}</p>
        <div className="bg-[#FF541F] p-3 rounded-full text-white group-hover:rotate-45 transition-transform duration-300 flex-shrink-0">
          <ArrowRightIcon className="w-6 h-6 transform -rotate-45" />
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-4xl font-bold">{title}</h3>
      </div>
    </div>
  );
};


const DevelopedForStudents = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-12">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Developed for Students.
            <br />
            Powered by <span className="text-[#FF541F]">MIC.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400">
            Unlock the full potential of your creativity with our MIC-powered student assistant. Explore new dimensions of skills and techniques.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card 
                className="md:col-span-3"
                title="Mission"
                content="To transform MAHE's innovative ideas into impactful, production-ready solutions by providing a comprehensive ecosystem of mentorship, seed funding."
                hasGradient={true}
            />
             <Card 
                className="md:col-span-2"
                title="Vision"
                content="To be recognized as a leading innovation hub in India, actively fostering a culture of technological excellence and entrepreneurship that drives national progress and positions MAHE as a pioneer in developing future-ready innovators."
            />
            <Card 
                className="md:col-span-2"
                title="Team"
                content="To serve as the core intellectual and operational engine of MAHE Innovation Centre, uniting experts from academia, industry, and entrepreneurship to provide strategic mentorship and critical oversight for every idea we accelerate."
            />
            <Card 
                className="md:col-span-3"
                title="Core Value Proposition"
                content="To be the catalyst that transforms academic projects into commercially viable ventures, ensuring every MAHE innovator has zero barrier access to seed funding."
                hasGradient={true}
            />
        </div>
      </div>
    </section>
  );
};

export default DevelopedForStudents;