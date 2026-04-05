import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-[var(--color-cyan-primary)]/[0.1]">
      {/* Ticker Tape */}
      <div className="bg-[var(--color-orange-secondary)] text-[var(--color-bg-primary)] py-1 overflow-hidden flex items-center">
        <motion.div
          className="whitespace-nowrap font-bold text-xs tracking-widest uppercase"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
        >
          {Array(10).fill("Currently building: learning management system  |   ").join("")}
        </motion.div>
      </div>

      {/* Main Nav Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#" className="font-orbitron font-bold text-2xl tracking-widest text-[var(--color-text-main)] relative group">
            HARSH<span className="text-[var(--color-cyan-primary)]">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-cyan-primary)] transition-all duration-300 group-hover:w-full glow-cyan"></span>
          </a>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-cyan-primary)] transition-colors duration-300 relative group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 bg-[var(--color-cyan-primary)]/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 ml-2 rounded-full border border-[var(--color-cyan-primary)] text-[var(--color-cyan-primary)] hover:bg-[var(--color-cyan-primary)] hover:text-[var(--color-bg-primary)] transition-all duration-300 glow-cyan"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          <a
            href="#contact"
            className="px-6 py-2 ml-2 border border-[var(--color-cyan-primary)] text-[var(--color-cyan-primary)] font-bold text-sm uppercase tracking-widest hover:bg-[var(--color-cyan-primary)] hover:text-[var(--color-bg-primary)] transition-all duration-300 glow-cyan"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
