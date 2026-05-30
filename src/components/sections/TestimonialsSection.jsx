import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ramesh Patel',
      treatment: 'Joint Pain Management',
      text_en: 'I suffered from severe arthritis for 5 years. After 3 months of personalized treatment here, my mobility has restored and pain is almost gone. Highly recommended!',
      text_hi: 'मुझे 5 साल से गठिया की गंभीर समस्या थी। यहाँ 3 महीने के इलाज के बाद, मेरी गतिशीलता वापस आ गई है और दर्द लगभग खत्म हो गया है।',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      treatment: 'Panchakarma Detox',
      text_en: 'The Panchakarma therapy at Advait Clinico was a life-changing experience. The clinic feels like a premium wellness retreat. I feel completely rejuvenated.',
      text_hi: 'अद्वैत क्लिनिक में पंचकर्म थेरेपी ने मेरे जीवन को बदल दिया। मुझे पूरी तरह से नया जीवन मिला है।',
      rating: 5
    },
    {
      id: 3,
      name: 'Sunil Verma',
      treatment: 'Digestive Disorder',
      text_en: 'Dr. Advait’s holistic approach to my chronic digestive issues worked wonders when modern medicine failed. True authentic Ayurveda.',
      text_hi: 'डॉ. अद्वैत का मेरी पुरानी पाचन समस्याओं के प्रति समग्र दृष्टिकोण अद्भुत काम कर गया जब आधुनिक चिकित्सा विफल रही।',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary font-bold mt-2 mb-6">
            Healing Experiences
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quotes Icon Background */}
          <div className="absolute -top-10 -left-10 text-primary/5 hidden md:block">
            <Quote size={120} />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="flex justify-center gap-1 mb-6 text-accent">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 italic text-center mb-6 font-heading leading-relaxed">
                  "{testimonials[currentIndex].text_en}"
                </p>
                
                <p className="text-lg text-gray-500 text-center mb-8 font-hindi">
                  "{testimonials[currentIndex].text_hi}"
                </p>
                
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-secondary text-sm font-medium">{testimonials[currentIndex].treatment}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
