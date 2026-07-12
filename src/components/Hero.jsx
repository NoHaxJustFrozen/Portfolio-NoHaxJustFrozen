import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';
import MagneticButton from './MagneticButton';
import './Hero.css';

const Hero = ({ isLoading }) => {
  const { t } = useLang();
  const name = t('hero_name') || "NOHAXJUSTFROZEN";

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        
        {/* The container gives a placeholder height so the layout doesn't jump 
            when the title finally mounts into Hero */}
        <div className="hero-name-container">
          {!isLoading && (
            <motion.h1 
              className="hero-name"
              layoutId="hero-name-title"
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {name.split('').map((char, i) => (
                <motion.span key={i} style={{ display: 'inline-block' }}>{char}</motion.span>
              ))}
            </motion.h1>
          )}
        </div>

        {/* These appear AFTER the preloader fades out */}
        {!isLoading && (
          <>
            <motion.p
              className="hero-greeting"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero_greeting')}
            </motion.p>

            <motion.p
              className="hero-role"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero_role')}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MagneticButton>
                <a href="#projects" className="hero-cta">{t('hero_cta')}</a>
              </MagneticButton>
            </motion.div>

            <motion.div
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="scroll-line"></div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
