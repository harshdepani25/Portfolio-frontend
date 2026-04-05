import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between w-full mb-8 ${isEven ? 'flex-row-reverse' : ''}`}>
      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-5/12"></div>

      {/* Center Line Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10">
        <motion.div
          className="w-4 h-4 rounded-full bg-[var(--color-cyan-primary)] shadow-[0_0_15px_var(--color-cyan-primary)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        ></motion.div>
        {/* Pulse ring ring */}
        <motion.div
          className="absolute w-8 h-8 rounded-full border border-[var(--color-cyan-primary)]/50"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
        ></motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        className="w-full md:w-5/12 glass-panel p-6 rounded-lg relative overflow-hidden group"
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Decorative corner effect */}
        <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-2 h-full bg-gradient-to-b from-[var(--color-orange-secondary)] to-transparent opacity-50`}></div>

        <span className="text-[var(--color-cyan-primary)] font-orbitron text-sm tracking-widest">{data.year}</span>
        <h3 className="text-xl font-bold text-[var(--color-text-main)] font-sans mt-2 mb-1">{data.title}</h3>
        <h4 className="text-sm text-[var(--color-text-muted)] font-sans mb-4 uppercase tracking-wider">{data.subtitle}</h4>
        <p className="text-sm text-[var(--color-text-muted)] font-sans leading-relaxed">{data.description}</p>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const timelineData = [
    {
      year: "2026-Present",
      title: "LMS Platform",
      subtitle: "Learning Management System (MERN)",
      description: "Successfully built a full-featured Learning Management System handling user authentication, dynamic course creation, and student progress tracking.",
    },
    {
      year: "2026",
      title: "Personal Portfolio",
      subtitle: "Full-Stack Web Innovation",
      description: "Designed and engineered this dynamic portfolio featuring Light/Dark mode transitions, Framer Motion animations, and a responsive glassmorphism UI.",
    },

    {
      year: "2025-26",
      title: "E-Yantra, IIT Bombay",
      subtitle: "Prestigious national robotics olympiad",
      description: "Successfully completed two stages as part of a 4-member team in one of the most prestigious robotics competitions in India.",
    },

    {
      year: "2025-26",
      title: "Robofest 5.0",
      subtitle: "National robotics competition",
      description: "Cleared Level 1 & built a working POC robot with a 4-member team. Earned patent recognition from GUJCOST for the robot's design.",
    },

    {
      year: "2025",
      title: "Movie Booking System",
      subtitle: "Frontend Application",
      description: "Developed a functional movie ticket booking web application with robust seat selection and automated mock booking flow.",
    },
    {
      year: "2024-Present",
      title: "Diploma in Computer Engineering",
      subtitle: "Specializing in Full-Stack Web Development",
      description: "Currently pursuing a Diploma in Computer Engineering. Moving from zero to building complete, production-ready web applications primarily using the MERN stack.",
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[var(--color-bg-primary)] transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-[var(--color-text-main)]">
            TIMELINE<span className="text-[var(--color-cyan-primary)]">.LOG()</span>
          </h2>
          <p className="text-[var(--color-text-muted)] font-sans mt-4">Experience & Education</p>
        </motion.div>

        <div className="relative wrap overflow-hidden p-4 h-full">
          {/* Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[var(--color-cyan-primary)] via-[var(--color-bg-tertiary)] to-transparent shadow-[0_0_10px_var(--color-cyan-primary)]"></div>

          {timelineData.map((data, index) => (
            <TimelineItem key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
