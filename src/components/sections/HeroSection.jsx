import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Calendar } from 'lucide-react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Ayurvedic Background" 
          className="w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm">
            Premium Holistic Healing
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-hindi text-primary font-bold leading-tight mb-4">
            अद्वैत क्लिनिक<br />
            <span className="text-3xl md:text-4xl text-gray-800 font-heading font-medium mt-2 block">
              शरीर और मन के सम्पूर्ण स्वास्थ्य के लिए
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed max-w-xl">
            Personalized Ayurvedic & Holistic Treatments Focused on Long-Term Wellness, Recovery, and Rejuvenation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="appointment"
              smooth={true}
              duration={500}
              className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <Calendar size={20} />
              Book Appointment
            </Link>
            
            <a 
              href="https://wa.me/919876543210" // Replace with actual number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-100 px-8 py-4 rounded-full font-medium hover:border-secondary hover:text-secondary transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <PhoneCall size={20} />
              WhatsApp Consult
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/images/clinic.png" 
              alt="Advait Clinico Premium Interior" 
              className="w-full h-auto object-cover"
            />
            {/* Glowing effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>

          {/* Floating Trust Card 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent text-xl font-bold">
              +
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">5000+</p>
              <p className="text-xs text-gray-500 font-medium">Patients Treated</p>
            </div>
          </motion.div>

          {/* Floating Trust Card 2 */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-1/4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
              🌿
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">100% Natural</p>
              <p className="text-xs text-gray-500 font-medium">Ayurvedic Healing</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
