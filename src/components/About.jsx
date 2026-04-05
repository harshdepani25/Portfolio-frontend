import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2 }) => {
  const nodeRef = useRef();
  const controls = useAnimation();
  const isInView = useInView(nodeRef, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (node) {
            node.textContent = Math.round(value);
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return <span ref={nodeRef} className="font-orbitron font-bold text-4xl text-[var(--color-cyan-primary)] glow-cyan" />;
};

const About = () => {
  const scrollRef = useRef(null);
  
  return (
    <section id="about" className="py-24 bg-[var(--color-bg-primary)] transition-colors duration-500 relative z-10" ref={scrollRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold inline-block relative">
            <span className="text-[var(--color-text-main)]">SYSTEM</span>
            <span className="text-[var(--color-orange-secondary)]">.ABOUT()</span>
            <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-orange-secondary)] to-transparent opacity-50"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Glitch Image Placeholder */}
          <motion.div 
            className="relative w-full aspect-square max-w-md mx-auto group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-[var(--color-cyan-primary)] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative w-full h-full glass-panel overflow-hidden border border-[var(--color-cyan-primary)]/30 group-hover:border-[var(--color-cyan-primary)] transition-colors duration-300">
              <div className="w-full h-full flex items-center justify-center relative inner-glitch z-10 bg-[var(--color-bg-primary)]/50">
                <img src="/images/pfpf.png" alt="Profile" className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                
                {/* Simulation of glitch lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 2px, var(--color-cyan-primary) 3px, var(--color-cyan-primary) 3px)' }}></div>
                <div className="absolute right-0 top-0 h-full w-2 bg-[var(--color-cyan-primary)]/50 animate-pulse"></div>
              </div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-cyan-primary)]"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--color-cyan-primary)]"></div>
          </motion.div>

          {/* Bio text */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-[var(--color-cyan-primary)]/10 px-4 py-2 rounded-full border border-[var(--color-cyan-primary)]/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-cyan-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-cyan-primary)]"></span>
              </span>
              <span className="font-orbitron text-sm text-[var(--color-cyan-primary)] tracking-wider">Surat, Gujarat, India</span>
            </div>

            <h3 className="text-3xl font-sans font-bold text-[var(--color-text-main)]">
              Developer & Innovator <br/>
              <span className="text-xl text-[var(--color-orange-secondary)] font-normal mt-2 block">17 years old · Diploma in Computer Engineering</span>
            </h3>
            
            <div className="text-[var(--color-text-muted)] font-sans leading-relaxed text-lg space-y-4">
              <p>I'm a full-stack web developer who builds end-to-end web applications — from databases to polished user interfaces — primarily using MongoDB, Express.js, React, and Node.js. I started learning web development 6–8 months ago, and since then I've shipped three real projects: a Movie Booking System, a full Learning Management System, and my personal portfolio (which you're looking at right now).</p>
              
              <p>Outside of web development, I'm deeply passionate about robotics. I competed in Robofest 5.0, India's biggest robotics competition, where my 4-member team cleared Level 1, built a working proof-of-concept robot, and had our robot design idea recognized with a patent by GUJCOST. I've also participated in e-Yantra by IIT Bombay — one of India's most prestigious robotics olympiads — where we successfully completed two stages.</p>

              <p className="italic border-l-2 border-[var(--color-cyan-primary)] pl-4">"I'm only 17, but I believe in building real things — not just learning concepts."</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-[var(--color-border-main)]">
              <div className="flex flex-col">
                <Counter from={0} to={17} duration={2} />
                <span className="text-xs text-[var(--color-text-muted)] font-orbitron uppercase mt-2">Skills</span>
              </div>
              <div className="flex flex-col">
                <Counter from={0} to={3} duration={2.5} />
                <span className="text-xs text-[var(--color-text-muted)] font-orbitron uppercase mt-2">Projects built</span>
              </div>
              <div className="flex flex-col">
                <Counter from={0} to={2} duration={3} />
                <span className="text-xs text-[var(--color-text-muted)] font-orbitron uppercase mt-2">National competitions</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
