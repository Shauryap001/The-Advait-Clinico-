import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Holistic Healing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Decorative element */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-full -z-10 blur-3xl opacity-40"
            />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-8 -left-8 w-64 h-64 bg-primary rounded-full -z-10 blur-3xl opacity-20"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="text-secondary font-semibold tracking-widest uppercase text-sm">About Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-heading text-primary font-bold mt-2 mb-6 leading-tight">
                Healing the Root, <br /> Not Just the Symptom.
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                At Advait Clinico, we believe in the profound wisdom of Ayurveda combined with a modern holistic approach. We don't just treat illnesses; we rejuvenate the entire body and mind to restore natural balance.
              </p>
              
              <div className="border-l-4 border-accent pl-6 py-2 my-8 bg-white/50 rounded-r-lg shadow-sm">
                <p className="text-gray-800 font-medium italic text-xl font-heading">
                  "Wellness is a continuous journey of harmonizing the body, mind, and spirit."
                </p>
              </div>
              
              <p>
                Our personalized treatments focus on long-term wellness recovery. By addressing the root causes of ailments through natural therapies, dietary corrections, and lifestyle modifications, we ensure lasting health and vitality.
              </p>
            </div>

            <div className="mt-10">
              <button className="text-primary font-bold hover:text-secondary transition-colors border-b-2 border-primary hover:border-secondary pb-1 inline-flex items-center gap-2 group">
                Discover Our Approach
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
