
import React from 'react';
import { ArrowRightIcon } from './Icons';

interface CTAProps {
    onContactClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onContactClick }) => {
    return (
        <section id="contact" className="py-8 md:py-20 px-4 flex justify-center">
            <div className="relative overflow-hidden bg-[#181818] border border-white/10 rounded-3xl text-center max-w-[1120px] md:h-[374.78px] p-4 md:p-12">

                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[2rem_2rem] opacity-50"></div>

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(255,84,31,0.3),_transparent_50%)]"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h2 className="text-lg md:text-5xl font-bold">
                        Ready to work with us?
                    </h2>
                    <p className="text-sm text-gray-300 mt-6 max-w-3xl mx-auto">
                        Have an innovative idea, a partnership proposal, or a question about the MAHE Innovation Centre?
                        Reach out to us today—we're ready to connect and help accelerate your journey.
                    </p>
                    <div className="mt-10">
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
                            Join Us <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;