import React, { useState, useEffect } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { useLang } from '../i18n';
import AnimatedTitle from './AnimatedTitle';
import './Projects.css';

const Projects = () => {
  const { t } = useLang();
  
  const projectsData = [
    {
      id: 1,
      title: t('proj_1_title'),
      tech: t('proj_1_tech'),
      url: "https://lumirise.org.tr",
      color: "#c9a96e"
    },
    {
      id: 2,
      title: t('proj_2_title'),
      tech: t('proj_2_tech'),
      url: "https://github.com/NoHaxJustFrozen",
      color: "#a9b0c0"
    },
    {
      id: 3,
      title: t('proj_3_title'),
      tech: t('proj_3_tech'),
      url: "#",
      color: "#555555"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedProject, setClickedProject] = useState(null);

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    if (project.url === "#") return;
    
    setClickedProject(project);
    
    // Wait for the full-screen animation to finish (800ms) then redirect
    setTimeout(() => {
      window.location.href = project.url;
    }, 1000);
  };

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section className="projects-section-v2" id="projects">
      <AnimatedTitle text={t('proj_title')} />
      <div className="section-divider"></div>

      <div className="projects-list">
        {projectsData.map((project, index) => (
          <motion.a
            href={project.url}
            onClick={(e) => handleProjectClick(e, project)}
            layoutId={`project-wrapper-${project.id}`}
            key={project.id}
            className={`project-row ${clickedProject && clickedProject.id !== project.id ? 'dimmed' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <span className="project-index">0{index + 1}</span>
            <motion.h2 layoutId={`project-title-${project.id}`} className="project-huge-title">{project.title}</motion.h2>
            <span className="project-hover-tech">
              {project.tech}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </span>
          </motion.a>
        ))}
      </div>

      <AnimatePresence>
        {clickedProject && (
          <motion.div
            layoutId={`project-wrapper-${clickedProject.id}`}
            className="fullscreen-project-overlay"
            initial={{ borderRadius: "20px" }}
            animate={{ borderRadius: "0px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.h2 
              layoutId={`project-title-${clickedProject.id}`}
              className="fullscreen-project-title"
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              {clickedProject.title}
            </motion.h2>
            
            <motion.div 
              className="loading-line-bottom"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smaller, elegant floating cursor indicator */}
      <motion.div
        className="floating-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { type: "spring", stiffness: 300 } }}
      >
        <span>→</span>
      </motion.div>
    </section>
  );
};

export default Projects;
