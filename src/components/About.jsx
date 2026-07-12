import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';
import AnimatedTitle from './AnimatedTitle';
import './About.css';

const About = () => {
  const { t } = useLang();

  return (
    <section className="about-section-v3" id="about">
      <AnimatedTitle text={t('about_title')} />
      <div className="section-divider"></div>

      <div className="about-container">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 
            Placeholder for user's photo. 
            User should place profile.jpg in public/ folder.
          */}
          <img src="/profile.jpg" alt="NoHaxJustFrozen" className="about-image" onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23141414'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23555555'%3EAdd /public/profile.jpg%3C/text%3E%3C/svg%3E";
          }}/>
          <div className="about-image-overlay"></div>
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>{t('about_text1')}</p>
          <p>{t('about_text2')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
