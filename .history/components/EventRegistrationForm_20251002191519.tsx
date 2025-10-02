import React from 'react';

const EventRegistrationForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!form.current) return

        emailjs
            .sendForm(
                "your_service_id",
                "your_template_id",
                form.current,
                "your_public_key"
            )
            .then(
                () => {
                    toast.success("Registration submitted successfully")
                    form.current?.reset()
                },
                () => {
                    toast.error("Failed to submit registration. Please try again.")
                }
            )
    }

    return (
        <div>
            <h2 id="modal-title" className="text-3xl font-bold text-center mb-6">Register for an Event</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                        className="w-full bg-[#101010] border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#FF541F] focus:border-[#FF541F] outline-none transition"
                        placeholder="Jane Smith"
                    />
                </div>
                <div>
                    <label htmlFor="regEmail" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                        type="email"
                        name="regEmail"
                        id="regEmail"
                        required
                        className="w-full bg-[#101010] border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#FF541F] focus:border-[#FF541F] outline-none transition"
                        placeholder="jane.smith@university.edu"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number (Optional)</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="w-full bg-[#101010] border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#FF541F] focus:border-[#FF541F] outline-none transition"
                        placeholder="+1 (555) 123-4567"
                    />
                </div>
                <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-300 mb-2">University / College</label>
                    <input
                        type="text"
                        name="university"
                        id="university"
                        required
                        className="w-full bg-[#101010] border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#FF541F] focus:border-[#FF541F] outline-none transition"
                        placeholder="Manipal Academy of Higher Education"
                    />
                </div>
                <div>
                    <label htmlFor="event" className="block text-sm font-medium text-gray-300 mb-2">Select Event</label>
                    <select
                        name="event"
                        id="event"
                        required
                        className="w-full bg-[#101010] border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#FF541F] focus:border-[#FF541F] outline-none transition appearance-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em',
                            paddingRight: '2.5rem',
                        }}
                    >
                        <option value="">Please select an event</option>
                        <option value="hackathon">Hackathon</option>
                        <option value="workshop">Workshop</option>
                        <option value="program">Program</option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#FF541F] to-[#FF8A65] text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity"
                    >
                        Register Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventRegistrationForm;