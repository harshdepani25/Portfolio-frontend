import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiCplusplus, SiJavascript, SiMysql, SiMui, SiRedux, SiC } from 'react-icons/si';

const skillsData = [
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express', icon: SiExpress, color: '#DDDDDD' },
  { name: 'ReactJs', icon: FaReact, color: '#61DAFB' },
  { name: 'NodeJS', icon: FaNodeJs, color: '#339933' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'MUI', icon: SiMui, color: '#007FFF' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  // { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  // { name: 'Python', icon: FaPython, color: '#3776AB' },
];

const Hexagon = ({ skill, index }) => {
  const IconProps = { size: 30, color: skill.color };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="relative flex flex-col items-center justify-center w-28 h-32 m-2 group"
      style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div 
        className="absolute inset-0 bg-transparent transition-all duration-300 z-0" 
        style={{ boxShadow: `inset 0 0 10px ${skill.color}50` }}
      ></div>
      <div 
        className="absolute inset-[2px] z-10 flex flex-col items-center justify-center bg-[var(--color-bg-tertiary)]"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        <skill.icon {...IconProps} className="group-hover:drop-shadow-[0_0_8px_var(--icon-color)] transition-all duration-300 z-20" style={{ '--icon-color': skill.color }} />
        <span className="text-[10px] text-[var(--color-text-muted)] font-sans mt-2 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {skill.name}
        </span>
      </div>
      {/* Outer border glow effect on hover via CSS override */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none"
        style={{ background: `linear-gradient(45deg, transparent, ${skill.color}50, transparent)` }}
      ></div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  
  return (
    <section id="skills" className="py-24 bg-[var(--color-bg-primary)] transition-colors duration-500 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-cyan-primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-[var(--color-orange-secondary)] pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
            <span className="text-[var(--color-text-muted)] text-lg mr-4 font-sans">&lt;</span>
            <span className="text-[var(--color-text-main)]">SKILLS</span>
            <span className="text-[var(--color-cyan-primary)]">_GRID</span>
            <span className="text-[var(--color-text-muted)] text-lg ml-4 font-sans">/&gt;</span>
          </h2>
          <p className="text-[var(--color-text-muted)] font-sans mt-4 max-w-2xl">
            A comprehensive matrix of technologies I've mastered. From crafting pixel-perfect frontend interfaces to engineering robust backend architectures and embedded systems.
          </p>
        </motion.div>

        {/* Hexagonal Layout Container */}
        <div className="flex flex-wrap justify-center items-center gap-x-1 gap-y-[-10px] max-w-4xl mx-auto py-10">
          {skillsData.map((skill, i) => (
            <Hexagon key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
