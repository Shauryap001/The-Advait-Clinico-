import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, PhoneCall } from 'lucide-react';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Advait Clinico,%0A%0AI would like to request an appointment.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Preferred Time:* ${formData.time || 'Any'}%0A*Health Concern:* ${formData.concern || 'Not specified'}%0A%0APlease let me know the availability.`;
    window.open(`https://wa.me/917558568228?text=${message}`, '_blank');
  };

  return (
    <section id="appointment" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            
            {/* Left Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center text-white">
              <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">Start Your Healing</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Book Your Consultation Today
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-md">
                Take the first step towards a healthier, balanced life. Fill out the form, and our team will get back to you to confirm your appointment.
              </p>

              <div className="space-y-6">
                <a 
                  href="https://wa.me/917558568228" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors backdrop-blur-sm border border-white/10 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp Booking</h4>
                    <p className="text-white/70 text-sm">Instant reply & easy scheduling</p>
                  </div>
                </a>

                <a 
                  href="tel:+917558568228"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors backdrop-blur-sm border border-white/10 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-lg">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Clinic Directly</h4>
                    <p className="text-white/70 text-sm">+91 75585 68228</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-background p-10 md:p-16 lg:rounded-l-[2.5rem] flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-primary mb-8 font-heading">Request an Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <select 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white text-gray-600"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                    <option value="Afternoon (1PM - 4PM)">Afternoon (1PM - 4PM)</option>
                    <option value="Evening (5PM - 8PM)">Evening (5PM - 8PM)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Health Concern (Optional)</label>
                  <textarea 
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white resize-none"
                    placeholder="Briefly describe your health issue"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                >
                  Confirm Booking <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
