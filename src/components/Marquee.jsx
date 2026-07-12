import React from 'react';
import { motion } from 'framer-motion';
import './Marquee.css';

const techStack = [
  "React", "JavaScript", "C#", "Python", "Three.js", "Framer Motion",
  ".NET Core", "HTML5", "CSS3", "Git", "Vite", "Node.js"
];

const Marquee = () => {
  // Duplicate to create seamless loop
  const items = [...techStack, ...techStack];

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        <motion.div
          className="marquee-inner"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear'
            }
          }}
        >
          {items.map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-dot">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
