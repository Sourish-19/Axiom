import React from 'react';
import emailjs from "emailjs-com";

const ContactForm = ({ onSubmit }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,  // from EmailJS dashboard
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // from EmailJS template
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // from EmailJS account
            )
            .then(
                () => {
                    alert("✅ Email sent successfully!");
                    form.reset();
                    onSubmit()
                    toast.success("Username updated successfully!")
                : toast.error("Update failed.")

                },
                (error) => {
                    console.error(error);
                    alert("❌ Failed to send email. Try again later.");
                }
            );
    };

    return (
        <div>
            <h2 id="modal-title" className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full bg-[#101010] border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#FF541F] focus:border-[#FF541F] outline-none transition"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full bg-[#101010] border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#FF541F] focus:border-[#FF541F] outline-none transition"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject (Optional)</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="w-full bg-[#101010] border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#FF541F] focus:border-[#FF541F] outline-none transition"
                        placeholder="Partnership Proposal"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        className="w-full bg-[#101010] border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#FF541F] focus:border-[#FF541F] outline-none transition"
                        placeholder="Your message here..."
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#FF541F] to-[#FF8A65] text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;