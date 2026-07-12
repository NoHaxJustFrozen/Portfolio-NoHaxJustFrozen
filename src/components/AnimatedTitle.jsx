import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ text, className = '' }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const child = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.h2
      className={`section-title ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="word-wrap">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              className="animated-char"
              variants={child}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.h2>
  );
};

export default AnimatedTitle;
