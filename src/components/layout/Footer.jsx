import React from 'react';
import { MapPin, Phone, Mail, Clock, Link as LinkIcon, Camera, Video } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#163829] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-hindi text-3xl font-bold text-white">अद्वैत क्लिनिक</span>
              <span className="font-heading text-sm tracking-widest text-secondary font-semibold uppercase mt-1">Advait Clinico</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A premium wellness destination dedicated to holistic healing, Ayurvedic therapies, and long-term recovery. Experience healthcare rooted in ancient wisdom and modern trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <LinkIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Video size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Treatments', 'Why Us', 'Doctor', 'Testimonials'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link.toLowerCase().replace(' ', '-')}
                    smooth={true}
                    duration={500}
                    className="text-white/70 hover:text-secondary cursor-pointer transition-colors text-sm flex items-center"
                  >
                    <span className="text-secondary mr-2 text-xs">▹</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-secondary mr-3 mt-1 shrink-0" />
                <span className="text-white/70 text-sm">123 Wellness Avenue, Health City, Ayurveda Marg, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-secondary mr-3 shrink-0" />
                <a href="tel:+917558568228" className="text-white/70 text-sm hover:text-secondary">+91 75585 68228</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-secondary mr-3 shrink-0" />
                <a href="mailto:info@advaitclinico.com" className="text-white/70 text-sm hover:text-secondary">info@advaitclinico.com</a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 border-b border-white/20 pb-2 inline-block">Clinic Timings</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock size={18} className="text-secondary mr-3 mt-1 shrink-0" />
                <div className="text-white/70 text-sm">
                  <p className="font-semibold text-white mb-1">Mon - Sat</p>
                  <p>9:00 AM - 1:00 PM</p>
                  <p>5:00 PM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start mt-2">
                <Clock size={18} className="text-white/20 mr-3 mt-1 shrink-0" />
                <div className="text-white/70 text-sm">
                  <p className="font-semibold text-white/50 mb-1">Sunday</p>
                  <p className="text-accent font-medium">Closed</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                to="appointment"
                smooth={true}
                duration={500}
                className="inline-block bg-secondary text-primary font-bold px-6 py-2 rounded-full text-sm hover:bg-white transition-colors cursor-pointer"
              >
                Book Now
              </Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Advait Clinico. All rights reserved. Designed for Premium Healthcare.
          </p>
          <div className="flex space-x-6 text-xs text-white/50">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
