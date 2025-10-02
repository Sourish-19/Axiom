
import React from 'react';
import { ArrowRightIcon } from './Icons';

const timelineItems = [
    {
        title: "Hackathons",
        description: "SDG Hackspace 2025, Lifeathon 2025, Manipal BioPharma Hackathon.",
        content: (
            <div className="flex -space-x-2">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover" src="https://picsum.photos/seed/hack1/50" alt="Avatar 1" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover" src="https://picsum.photos/seed/hack2/50" alt="Avatar 2" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover" src="https://picsum.photos/seed/hack3/50" alt="Avatar 3" />
            </div>
        ),
    },
    {
        title: "Workshops",
        description: "The Entrepreneur's Toolkit, Prototype in a Day, 3D Printing.",
        content: (
            <img className="rounded-lg h-16 w-auto object-cover" src="https://picsum.photos/seed/workshop/200/80" alt="Workshop" />
        ),
    },
    {
        title: "Programs",
        description: "Pre-incubation Track (PIT), Innovation Mela 2026.",
        content: (
            <div className="flex -space-x-2">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover" src="https://picsum.photos/seed/prog1/50" alt="Avatar 4" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover" src="https://picsum.photos/seed/prog2/50" alt="Avatar 5" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover" src="https://picsum.photos/seed/prog3/50" alt="Avatar 6" />
            </div>
        ),
    },
    {
        title: "Design2Deploy",
        isLargeTitle: true,
        description: (
            <>
                <p className="font-semibold text-white mt-2">Project in work</p>
                <p className="text-gray-500 text-sm">What we do right now</p>
            </>
        ),
        content: (
            <img className="rounded-lg h-16 w-auto object-cover" src="https://picsum.photos/seed/deploy/200/80" alt="Design2Deploy" />
        ),
    }
];

interface MICSystemProps {
    onEventClick: () => void;
}

const MICSystem: React.FC<MICSystemProps> = ({ onEventClick }) => {
    return (
        <section id="events" className="py-20 px-4">
            <div className="container mx-auto text-center">
                <p className="text-lg text-gray-400 font-semibold">MIC 2025</p>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-5xl mx-auto leading-tight">
                    The MIC ecosystem is designed to minimize hurdles and maximize your potential. Access the facilities, financial support, and expert guidance you need to take your project from a proof-of-concept to a market-ready product.
                </h2>

                <div className="mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {timelineItems.map((item, index) => (
                            <div key={index} className={`flex flex-col items-center ${index % 2 !== 0 ? "mt-[84px]" : ""}`}>
                                <div className="text-left">
                                    <h3 className={`${item.isLargeTitle ? 'text-[#FF541F]' : ''} tracking-[-4px] text-[46px] font-semibold`}>
                                        {item.title}
                                    </h3>

                                    <div className="text-neutral-400/75 text-sm">
                                        {item.description}
                                    </div>
                                </div>

                                {/* <div className="min-h-[64px] flex items-center mt-6 justify-center">
                                    {item.content}
                                </div> */}
                                <div
                                    style={{
                                        height: {index%2 !== 0 ?  `64px`},
                                        width: "100%",
                                        border: "1px solid white",
                                        borderLeftWidth: "0px",
                                        borderTopWidth: "0px"
                                    }}
                                    className="relative mr-4"
                                >
                                    <div 
                                        className="absolute top-[63px] left-[100%]"
                                        style={{
                                        height: "24px",
                                        width: "24px",
                                        border: "1px solid white",
                                        borderRightWidth: "0px",
                                        borderBottomWidth: "0px"
                                    }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
                    <button onClick={onEventClick} className="bg-gradient-to-r from-[#FF541F] to-[#FF8A65] text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto flex items-center justify-center gap-2">
                        Get Started <ArrowRightIcon className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-400">Slots are available</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MICSystem;