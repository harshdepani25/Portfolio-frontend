import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-bg-primary)] transition-colors duration-500 border-t border-[var(--color-cyan-primary)]/[0.1] py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[var(--color-cyan-primary)] blur-[30px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Interactive Complex ASCII Signature */}
        <div className="relative group cursor-none mb-10 mt-4 px-8 py-4 overflow-hidden">
          {/* Scanning Line overlay */}
          <div className="absolute inset-0 w-full h-[2px] bg-[var(--color-cyan-primary)] opacity-0 group-hover:opacity-40 group-hover:animate-[scan_2s_linear_infinite] shadow-[0_0_10px_var(--color-cyan-primary)] pointer-events-none z-20"></div>
          
          <div className="absolute -inset-10 bg-[var(--color-cyan-primary)] opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 rounded-full pointer-events-none"></div>
          
          <div className="relative font-mono font-bold text-[0.45rem] sm:text-xs md:text-sm leading-[1.2] select-none z-10 w-full">
            
            {/* Primary Base Layer */}
            <pre className="text-[var(--color-cyan-primary)] transition-all duration-300 drop-shadow-[0_0_5px_var(--color-cyan-primary)] group-hover:drop-shadow-[0_0_15px_var(--color-cyan-primary)] relative z-10">
{`██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗
██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║
███████║███████║██████╔╝███████╗███████║
██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║
██║  ██║██║  ██║██║  ██║███████║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝`}
            </pre>
            
            {/* Glitch Red Layer */}
            <motion.pre 
              className="absolute top-0 left-0 text-red-500 opacity-0 group-hover:opacity-80 mix-blend-screen pointer-events-none z-0"
              animate={{ x: [0, -3, 3, -2, 0], y: [0, 1, -1, 2, 0] }}
              transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
            >
{`██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗
██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║
███████║███████║██████╔╝███████╗███████║
██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║
██║  ██║██║  ██║██║  ██║███████║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝`}
            </motion.pre>

            {/* Glitch Blue Layer */}
            <motion.pre 
              className="absolute top-0 left-0 text-blue-500 opacity-0 group-hover:opacity-80 mix-blend-screen pointer-events-none z-0"
              animate={{ x: [0, 3, -3, 2, 0], y: [0, -1, 1, -2, 0] }}
              transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
            >
{`██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗
██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║
███████║███████║██████╔╝███████╗███████║
██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║
██║  ██║██║  ██║██║  ██║███████║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝`}
            </motion.pre>
          </div>
          
          {/* Animated Border Angles */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-cyan-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-cyan-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl text-[var(--color-text-muted)] text-sm font-sans">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Harsh. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span>Designed & Built with</span>
            <span className="text-[var(--color-orange-secondary)] animate-pulse">🔥</span>
            <span>in Surat, Gujarat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
