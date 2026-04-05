import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-500, 500], [15, -15]);
  const rotateY = useTransform(x, [-500, 500], [-15, 15]);

  const handleMouseMove = (event) => {
    const rx = event.clientX - window.innerWidth / 2;
    const ry = event.clientY - window.innerHeight / 2;
    x.set(rx);
    y.set(ry);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Typing Effect
  const words = ["Full Stack Developer.", "Robotics Enthusiast.", "Problem Solver."];
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => setDisplayText(currentWord.substring(0, displayText.length - 1)), 50);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => setDisplayText(currentWord.substring(0, displayText.length + 1)), 150);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-primary)] transition-colors duration-500"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Particle Circuit Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="var(--color-cyan-primary)" strokeWidth="0.5" strokeDasharray="5,5" />
              <circle cx="10" cy="10" r="2" fill="var(--color-orange-secondary)" />
              <circle cx="90" cy="90" r="2" fill="var(--color-cyan-primary)" />
              <path d="M 50 10 L 50 90" stroke="var(--color-orange-secondary)" strokeWidth="0.5" opacity="0.3" />
              <path d="M 10 50 L 90 50" stroke="var(--color-cyan-primary)" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Main Content with 3D Tilt */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center p-8 rounded-2xl glass-panel"
        style={{ x, y, rotateX, rotateY, perspective: 1000 }}
      >
        <motion.p
          className="text-[var(--color-orange-secondary)] font-sans uppercase tracking-[0.3em] text-sm mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          System Initialized
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black font-orbitron mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="glitch-text text-[var(--color-text-main)]" data-text="HARSH.">
            HARSH.
          </span>
        </motion.h1>

        <motion.div
          className="h-12 mt-6 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="font-sans text-xl md:text-3xl font-light text-[var(--color-text-main)]">
            <span className="text-[var(--color-cyan-primary)]">&gt;</span> const role = "
            <span className="text-[var(--color-text-main)] font-medium">{displayText}</span>
            <span className="animate-pulse">|</span>"
          </p>
        </motion.div>

        <motion.p
          className="mt-8 max-w-2xl mx-auto text-[var(--color-text-muted)] font-sans text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Hi, I'm Harsh Depani — a 17-year-old full-stack developer and robotics enthusiast pursuing a Diploma in Computer Engineering.         </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs tracking-widest text-[var(--color-text-muted)] uppercase">Scroll to explore</span>
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-cyan-primary)] to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
