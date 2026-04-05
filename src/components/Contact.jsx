import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-primary)] transition-colors duration-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-cyan-primary)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Text and Map/Badge */}
        <motion.div 
          className="w-full md:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 py-2 border border-[var(--color-cyan-primary)]/50 rounded-full bg-[var(--color-bg-secondary)]/80 backdrop-blur transition-colors duration-500"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-cyan-primary)] animate-ping glow-cyan"></div>
            <span className="text-[var(--color-cyan-primary)] font-orbitron text-xs uppercase tracking-widest">
              Available for Opportunities
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-[var(--color-text-main)]">
            INITIATE
            <br />
            <span className="text-[var(--color-orange-secondary)]">CONTACT</span>
          </h2>

          <p className="text-[var(--color-text-muted)] font-sans text-lg max-w-md">
            Whether you have a complex engineering problem to solve, a web/app idea to build, or just want to discuss robotics — my inbox is always open.
          </p>

          <div className="flex gap-6 pt-4">
            <a href="https://github.com/harshdepani25" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-cyan-primary)] transition-all transform hover:scale-125 glow-cyan-hover">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-depani" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-cyan-primary)] transition-all transform hover:scale-125 glow-cyan-hover">
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl flex flex-col gap-6 relative shadow-2xl">
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-cyan-primary)] to-[var(--color-orange-secondary)] rounded-t-2xl opacity-50"></div>

            <div className="group relative">
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-transparent border-b-2 border-[var(--color-border-main)] text-[var(--color-text-main)] placeholder-transparent focus:border-[var(--color-cyan-primary)] focus:outline-none focus:ring-0 peer pt-4 pb-2 font-sans transition-colors duration-300"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <label htmlFor="name" className="absolute left-0 top-0 text-[var(--color-text-muted)] font-orbitron text-xs tracking-widest transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[var(--color-cyan-primary)]">
                NAME // ID
              </label>
            </div>

            <div className="group relative mt-4">
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-transparent border-b-2 border-[var(--color-border-main)] text-[var(--color-text-main)] placeholder-transparent focus:border-[var(--color-cyan-primary)] focus:outline-none focus:ring-0 peer pt-4 pb-2 font-sans transition-colors duration-300"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <label htmlFor="email" className="absolute left-0 top-0 text-[var(--color-text-muted)] font-orbitron text-xs tracking-widest transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[var(--color-cyan-primary)]">
                CONNECTION_URI // EMAIL
              </label>
            </div>

            <div className="group relative mt-4">
              <textarea 
                id="message"
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-[var(--color-border-main)] text-[var(--color-text-main)] placeholder-transparent focus:border-[var(--color-cyan-primary)] focus:outline-none focus:ring-0 peer pt-4 pb-2 font-sans transition-colors duration-300 resize-none"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <label htmlFor="message" className="absolute left-0 top-0 text-[var(--color-text-muted)] font-orbitron text-xs tracking-widest transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[var(--color-cyan-primary)]">
                PAYLOAD // MESSAGE
              </label>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="mt-6 flex items-center justify-center gap-2 group w-full px-6 py-4 border border-[var(--color-cyan-primary)] bg-[var(--color-cyan-primary)]/10 hover:bg-[var(--color-cyan-primary)] text-[var(--color-cyan-primary)] hover:text-[var(--color-bg-primary)] transition-all duration-500 font-orbitron font-bold tracking-widest uppercase glow-cyan"
            >
              {status === 'sending' ? 'TRANSMITTING...' : status === 'success' ? 'TRANSMITTED!' : 'TRANSMIT'} 
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            {status === 'success' && (
              <p className="text-[var(--color-cyan-primary)] text-sm font-sans text-center mt-2 glow-cyan">Message received successfully! I'll get back to you soon.</p>
            )}
            
            {status === 'error' && (
              <p className="text-red-500 text-sm font-sans text-center mt-2">Transmission failed. Neural link disrupted.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
