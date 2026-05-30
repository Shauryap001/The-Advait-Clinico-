import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    { id: 1, title: 'Personalized Treatment', desc: 'Customized care plans tailored specifically to your body type (Prakriti) and dosha imbalances.' },
    { id: 2, title: 'Natural Therapies', desc: '100% natural, herbal medicines and authentic Ayurvedic therapies with zero side effects.' },
    { id: 3, title: 'Modern + Traditional', desc: 'Blending ancient Ayurvedic wisdom with modern diagnostic methods for the best outcomes.' },
    { id: 4, title: 'Comfortable Environment', desc: 'A premium, calm, and soothing clinic environment designed to accelerate healing.' },
    { id: 5, title: 'Long-Term Recovery', desc: 'Focus on eliminating the root cause of the disease rather than temporary symptom relief.' },
    { id: 6, title: 'Affordable Consultation', desc: 'Premium healthcare experience made accessible with transparent and reasonable pricing.' }
  ];

  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full -translate-y-1/4 translate-x-1/4 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">The Advait Difference</span>
            <h2 className="text-4xl md:text-5xl font-heading text-primary font-bold mt-2 mb-6">
              Why Choose Advait Clinico?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We stand apart by offering a truly premium and personalized healthcare experience. Our commitment is to your long-term wellness, ensuring that every step of your healing journey is supported with expertise and compassion.
            </p>
            
            <div className="space-y-6">
              {features.slice(0, 3).map((feature) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: feature.id * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 text-accent flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Text/Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <div className="space-y-8">
              {features.slice(3).map((feature, index) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary font-bold text-lg flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {feature.id}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
