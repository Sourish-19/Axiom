
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
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader';
import { useLoader } from './store/useLoader';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const isLoading = useLoader(state => state.isLoading)

  return (
    <div className="relative bg-black text-white overflow-hidden relative">
      { isLoading && <Loader /> }
      
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `url(${'/axiom_bg.jpg'})`, backgroundSize: 'cover' }}></div>
      <div className="relative z-10 px-6">
        <Header onContactClick={() => setIsContactModalOpen(true)} />
        <main>
          <Hero
            onEventClick={() => setIsEventModalOpen(true)}
            onContactClick={() => setIsContactModalOpen(true)}
          />
          <Stats />
          <DevelopedForStudents />
          <MICSystem onEventClick={() => setIsEventModalOpen(true)} />
          <Launchpad onContactClick={() => setIsContactModalOpen(true)} />
          <FAQ />
          <CTA onContactClick={() => setIsContactModalOpen(true)} />
        </main>
        <Footer onContactClick={() => setIsContactModalOpen(true)} />
      </div>

      {isContactModalOpen && (
        <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
          <ContactForm onSubmit={() => setIsContactModalOpen(false)} />
        </Modal>
      )}

      {isEventModalOpen && (
        <Modal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)}>
          <EventRegistrationForm onSubmit={() => setIsEventModalOpen(false)} />
        </Modal>
      )}

      <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={true}
          theme="dark"
          closeOnClick={true}
          aria-label="Notification"
      />
    </div>
  );
}

export default App;