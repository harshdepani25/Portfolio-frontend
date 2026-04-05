import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className={`glass-panel rounded-xl overflow-hidden group flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,245,255,0.15)] hover:border-[var(--color-cyan-primary)]/50 ${project.featured ? 'md:flex-row col-span-1 md:col-span-2' : ''}`}
  >
    {/* Image Section */}
    <div className={`relative overflow-hidden ${project.featured ? 'md:w-3/5 h-64 md:h-auto' : 'w-full h-48'}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[var(--color-cyan-primary)] mix-blend-overlay z-10 opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Image / Glitch Effect */}
      <div className="w-full h-full bg-[var(--color-bg-secondary)] border-b md:border-b-0 md:border-r border-[var(--color-cyan-primary)]/20 flex items-center justify-center relative overflow-hidden inner-glitch">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-all duration-700 grayscale-[30%] group-hover:grayscale-0" />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-cyan-primary)]/20 to-transparent mix-blend-overlay"></div>
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(var(--color-cyan-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-cyan-primary) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1 }}></div>
            <span className="absolute font-orbitron text-[var(--color-cyan-primary)] uppercase tracking-widest text-sm glow-cyan">[ NO SIGNAL ]</span>
          </>
        )}
      </div>
      
      {/* Hover Overlay Buttons */}
      <div className="absolute inset-0 z-20 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 backdrop-blur-sm bg-[var(--color-bg-secondary)]/40">
        <a href={project.github} className="p-4 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-cyan-primary)] text-[var(--color-cyan-primary)] hover:bg-[var(--color-cyan-primary)] hover:text-[var(--color-bg-primary)] transition-all transform hover:scale-110 hover:shadow-[0_0_15px_rgba(0,245,255,0.6)]">
          <FaGithub size={24} />
        </a>
        {project.demo && (
          <a href={project.demo} className="p-4 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-orange-secondary)] text-[var(--color-orange-secondary)] hover:bg-[var(--color-orange-secondary)] hover:text-[var(--color-bg-primary)] transition-all transform hover:scale-110 hover:shadow-[0_0_15px_rgba(255,107,0,0.6)]">
            <FaLink size={24} />
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className={`p-8 flex flex-col justify-between ${project.featured ? 'md:w-2/5' : 'w-full'} bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]`}>
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold font-orbitron text-[var(--color-text-main)] group-hover:text-[var(--color-cyan-primary)] transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <p className="text-[var(--color-text-muted)] font-sans text-sm mb-6 leading-relaxed group-hover:text-[var(--color-text-main)] transition-colors duration-300">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs font-mono px-3 py-1 bg-[var(--color-bg-primary)] text-[var(--color-cyan-primary)] border border-[var(--color-cyan-primary)]/30 rounded-full shadow-[0_0_10px_rgba(0,245,255,0.05)] group-hover:border-[var(--color-cyan-primary)]/60 group-hover:shadow-[0_0_10px_rgba(0,245,255,0.2)] transition-all duration-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projectsData = [
    
    {
      title: "LMS Platform",
      description: "A full-featured Learning Management System with courses, users & progress tracking.",
      tech: ["In Progress","MongoDB", "Express", "React", "Node.js"],
      image: "/images/LMS Preview.png",
      github: "https://github.com/harshdepani25/LMSFrontend.git",
      demo: "https://lms-frontend-ten-steel.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      description: "This very website — currently in development. Showcasing my work and story.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "#",
      image: "/images/Portfolio-Preview.png",
    },
    {
      title: "Movie Booking System",
      description: "A fully functional ticket booking app with seat selection and booking flow.",
      tech: ["HTML", "CSS", "JS", "Bootstrap", "JSON Server"],
      github: "https://github.com/harshdepani25/Project-Cinema-Booking-.git",
      image: "/images/Movie-Booking Preview.png",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[var(--color-bg-primary)] transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
            <span className="text-[var(--color-text-main)]">EXECUTE</span>
            <span className="text-[var(--color-cyan-primary)]">.PROJECTS()</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-orange-secondary)] mx-auto mt-6 glow-orange rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12 hover:scale-105 transition-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/harshdepani25" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 bg-transparent border border-[var(--color-cyan-primary)] text-[var(--color-cyan-primary)] font-orbitron tracking-widest uppercase hover:bg-[var(--color-cyan-primary)] hover:text-[var(--color-bg-primary)] glow-cyan transition-all duration-300">
            View Archive --&gt;
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
