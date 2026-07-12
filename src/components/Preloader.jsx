import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const { t } = useLang();
  const name = t('hero_name') || "NOHAXJUSTFROZEN";

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // Wait for initial letter animations + a small pause
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="preloader-content">
        <motion.h1 
          className="hero-name"
          style={{ marginBottom: 0 }}
          layoutId="hero-name-title"
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
          className="preloader-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
