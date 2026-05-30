import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Bone, Droplets, Brain, Sparkles, ShieldPlus, Flower2, HeartPulse, ArrowRight } from 'lucide-react';

const TreatmentsSection = () => {
  const treatments = [
    { id: 1, title: 'Chronic Disease Care', desc: 'Holistic management of long-term health conditions.', icon: Activity },
    { id: 2, title: 'Joint Pain Treatment', desc: 'Ayurvedic remedies for arthritis and joint mobility.', icon: Bone },
    { id: 3, title: 'Digestive Disorders', desc: 'Restoring gut health naturally with diet and herbs.', icon: Droplets },
    { id: 4, title: 'Stress & Anxiety', desc: 'Calming therapies for mental peace and balance.', icon: Brain },
    { id: 5, title: 'Skin Problems', desc: 'Purifying treatments for glowing, healthy skin.', icon: Sparkles },
    { id: 6, title: 'Immunity & Wellness', desc: 'Boosting the body’s natural defense mechanisms.', icon: ShieldPlus },
    { id: 7, title: 'Panchakarma & Detox', desc: 'Deep cellular cleansing and rejuvenation.', icon: Flower2 },
    { id: 8, title: 'Lifestyle Disorders', desc: 'Correcting imbalances caused by modern habits.', icon: HeartPulse }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary font-bold mt-2 mb-6">
            Comprehensive Natural Healing
          </h2>
          <p className="text-gray-600 text-lg">
            We offer specialized, personalized treatments that integrate ancient Ayurvedic wisdom with modern clinical practices for profound healing.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {treatments.map((treatment) => {
            const Icon = treatment.icon;
            return (
              <motion.div 
                key={treatment.id}
                variants={cardVariants}
                className="group relative bg-background rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer overflow-hidden border border-gray-100"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                    {treatment.desc}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-primary/70 group-hover:text-primary transition-colors">
                    Learn More 
                    <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default TreatmentsSection;
