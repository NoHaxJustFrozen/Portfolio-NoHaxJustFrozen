import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useLang } from '../i18n';
import AnimatedTitle from './AnimatedTitle';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "LUMIRISE",
    tech: "Web Platform",
    url: "https://lumirise.org.tr",
    color: "#c9a96e"
  },
  {
    id: 2,
    title: "CYBERDASH",
    tech: "JS, GSAP",
    url: "https://github.com/NoHaxJustFrozen",
    color: "#888888"
  },
  {
    id: 3,
    title: "NEXUS API",
    tech: "C#, .NET Core",
    url: "https://github.com/NoHaxJustFrozen",
    color: "#555555"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useLang();

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
            target="_blank"
            rel="noreferrer"
            key={project.id}
            className="project-row"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <span className="project-index">0{index + 1}</span>
            <h2 className="project-huge-title">{project.title}</h2>
            <span className="project-hover-tech">
              {project.tech}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </span>
          </motion.a>
        ))}
      </div>

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
