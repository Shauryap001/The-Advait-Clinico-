import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, HeartHandshake } from 'lucide-react';

const DoctorProfileSection = () => {
  return (
    <section id="doctor" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-background rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left: Image */}
          <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-full">
            <img 
              src="/images/doctor.png" 
              alt="Chief Ayurvedic Physician" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Elegant overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/60 opacity-60"></div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-semibold tracking-widest uppercase text-sm">Meet Our Expert</span>
              <h2 className="text-4xl md:text-5xl font-heading text-primary font-bold mt-2 mb-2">
                Dr. Advait Sharma
              </h2>
              <p className="text-accent font-medium text-lg mb-8">BAMS, MD (Ayurveda) | Chief Physician</p>
              
              <div className="space-y-6 text-gray-600 mb-10">
                <p>
                  With over 15 years of clinical experience in Ayurvedic medicine, Dr. Sharma combines profound traditional knowledge with modern diagnostic approaches to provide unparalleled holistic care.
                </p>
                <p>
                  "True healing begins when we align our body's natural rhythms with nature. My mission is to guide you on this path of natural rejuvenation and lasting wellness."
                </p>
              </div>

              {/* Qualifications Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Gold Medalist</h4>
                    <p className="text-sm text-gray-500">Ayurveda University</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">15+ Years</h4>
                    <p className="text-sm text-gray-500">Clinical Experience</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">5000+ Cured</h4>
                    <p className="text-sm text-gray-500">Happy Patients</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Published Author</h4>
                    <p className="text-sm text-gray-500">Holistic Journals</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileSection;
