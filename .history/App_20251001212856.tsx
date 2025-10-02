
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DevelopedForStudents from './components/DevelopedForStudents';
import MICSystem from './components/MICSystem';
import Launchpad from './components/Launchpad';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import EventRegistrationForm from './components/EventRegistrationForm';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  return (
    <div className="bg-black text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url(/axiom_bg2.png)", backgroundSize: 'cover' }}></div>
      <img src="https://i.imgur.com/5i3p2R5.png" alt="background glow top" className="absolute -top-1/2 -right-1/4 w-full h-auto z-0 opacity-50 mix-blend-screen" />
      <img src="https://i.imgur.com/9v1M618.png" alt="background wave bottom" className="absolute -bottom-1/3 left-0 w-full h-auto z-0 opacity-40 mix-blend-screen" />


      <div className="relative z-10">
        <Header onContactClick={() => setIsContactModalOpen(true)} />
        <main>
          <Hero onEventClick={() => setIsEventModalOpen(true)} />
          <Stats />
          <DevelopedForStudents />
          <MICSystem onEventClick={() => setIsEventModalOpen(true)} />
          <Launchpad onContactClick={() => setIsContactModalOpen(true)} />
          <FAQ />
          <CTA onContactClick={() => setIsContactModalOpen(true)} />
        </main>
        <Footer onContactClick={() => setIsContactModalOpen(true)}/>
      </div>

      {isContactModalOpen && (
        <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
          <ContactForm />
        </Modal>
      )}

      {isEventModalOpen && (
        <Modal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)}>
          <EventRegistrationForm />
        </Modal>
      )}
    </div>
  );
}

export default App;