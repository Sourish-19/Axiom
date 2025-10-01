
import React from 'react';

const stats = [
  { value: '120K+', label: 'Students' },
  { value: '150+', label: 'Projects' },
  { value: '32K+', label: '5-Star Reviews' },
];

const Stats = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center text-center gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="relative w-full md:w-auto">
              {index < stats.length - 1 && <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-16 w-px bg-gray-700 -mr-16"></div>}
              <p className="text-5xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-lg text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-gray-800"></div>
      </div>
    </section>
  );
};

export default Stats;
