import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Heart, Leaf, Stethoscope } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// Custom animated counter component
const Counter = ({ from, to, duration = 2, inView }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easePercentage * (to - from) + from));
      
      if (percentage < 1) {
        window.requestAnimationFrame(animate);
      }
    };
    
    window.requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return <span>{count}</span>;
};

const TrustStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { id: 1, icon: Users, count: 5000, suffix: '+', text: 'Patients Treated', color: 'text-primary', bg: 'bg-primary/10' },
    { id: 2, icon: Heart, count: 100, suffix: '%', text: 'Personalized Care', color: 'text-secondary', bg: 'bg-secondary/10' },
    { id: 3, icon: Leaf, count: 100, suffix: '%', text: 'Natural Healing', color: 'text-accent', bg: 'bg-accent/10' },
    { id: 4, icon: Stethoscope, count: 15, suffix: '+', text: 'Years Experience', color: 'text-gray-700', bg: 'bg-gray-100' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-white relative z-20 -mt-10 mx-6 md:mx-12 rounded-3xl shadow-xl shadow-gray-200/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.id} 
                variants={itemVariants}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1 flex items-center">
                  <Counter from={0} to={stat.count} duration={2.5} inView={isInView} />
                  <span>{stat.suffix}</span>
                </h3>
                <p className="text-gray-500 font-medium text-sm tracking-wide uppercase">{stat.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStatsSection;
