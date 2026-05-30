import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is online consultation available?",
      answer: "Yes, we offer comprehensive online consultations via WhatsApp and video calls for patients who cannot visit the clinic physically. We also dispatch herbal medicines directly to your home."
    },
    {
      question: "Are your treatments 100% natural?",
      answer: "Absolutely. All our medications and therapies are derived from purely natural herbs and authentic Ayurvedic formulations, ensuring zero harmful side effects."
    },
    {
      question: "How long does the recovery process take?",
      answer: "Recovery time varies depending on the chronicity of the disease and individual body constitution (Prakriti). Ayurvedic healing focuses on uprooting the cause, so while it may take slightly longer, the results are sustainable and long-lasting."
    },
    {
      question: "What are your clinic timings?",
      answer: "We are open Monday to Saturday, from 9:00 AM to 1:00 PM in the morning, and 5:00 PM to 8:00 PM in the evening. Sunday is closed for routine consultations."
    },
    {
      question: "Do you treat chronic lifestyle diseases?",
      answer: "Yes, our primary expertise lies in treating chronic lifestyle disorders like diabetes, hypertension, arthritis, and thyroid issues through specialized Ayurvedic protocols and lifestyle modifications."
    },
    {
      question: "Is Panchakarma detox available?",
      answer: "Yes, we have a fully equipped premium Panchakarma center where we perform authentic detoxification therapies like Vamana, Virechana, Basti, Nasya, and Raktamokshana under expert supervision."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">Have Questions?</span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary font-bold mt-2 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left p-6 rounded-2xl flex justify-between items-center transition-all duration-300 ${openIndex === index ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-800 border border-gray-100 hover:shadow-md'}`}
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-gray-600 bg-white/50 rounded-b-2xl border-x border-b border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
