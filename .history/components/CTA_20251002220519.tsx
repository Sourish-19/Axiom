
import React from 'react';
import { ArrowRightIcon } from './Icons';

interface CTAProps {
    onContactClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onContactClick }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setIsLoading(true)
        const form = e.currentTarget;

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID1,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
            )
            .then(
                () => {
                    toast.success("Email sent successfully!")
                    form.reset();
                    onSubmit()
                    setIsLoading(false)
                },
                (error) => {
                    toast.error("Failed to send email. Try again later.")
                    setIsLoading(false)
                }
            );
    };
    
    return (
        <section id="contact" className="py-20 px-4 flex justify-center">
            <div className="relative overflow-hidden bg-[#181818] border border-white/10 rounded-3xl text-center w-[1120px] h-[374.78px] p-8 md:p-12">
                
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[2rem_2rem] opacity-50"></div>
                
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(255,84,31,0.3),_transparent_50%)]"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Ready to work with us?
                    </h2>
                    <p className="text-lg text-gray-300 mt-6 max-w-3xl mx-auto">
                        Have an innovative idea, a partnership proposal, or a question about the MAHE Innovation Centre? 
                        Reach out to us today—we're ready to connect and help accelerate your journey.
                    </p>
                    <div className="mt-10">
                        <button 
                            onClick={onContactClick}
                            className="bg-[#FF541F] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
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