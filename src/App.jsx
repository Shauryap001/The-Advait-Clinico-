import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

import HeroSection from './components/sections/HeroSection';
import TrustStatsSection from './components/sections/TrustStatsSection';
import AboutSection from './components/sections/AboutSection';
import TreatmentsSection from './components/sections/TreatmentsSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import DoctorProfileSection from './components/sections/DoctorProfileSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import AppointmentSection from './components/sections/AppointmentSection';
import FAQSection from './components/sections/FAQSection';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-background selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <TrustStatsSection />
        <AboutSection />
        <TreatmentsSection />
        <WhyChooseUsSection />
        <DoctorProfileSection />
        <TestimonialsSection />
        <AppointmentSection />
        <FAQSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
