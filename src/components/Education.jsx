import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';
import AnimatedTitle from './AnimatedTitle';
import './Education.css';

const Education = () => {
  const { t } = useLang();

  return (
    <section className="education-section-v3" id="education">
      <AnimatedTitle text={t('edu_title')} />
      <div className="section-divider"></div>

      <motion.div
        className="edu-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="edu-left">
          <motion.span
            className="edu-year"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            2023 — Present
          </motion.span>
          <motion.div
            className="edu-badge"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            🎓
          </motion.div>
        </div>

        <div className="edu-right">
          <motion.h3
            className="edu-school-name"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('edu_school')}
          </motion.h3>
          <motion.p
            className="edu-status"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            {t('edu_status')}
          </motion.p>
          <motion.p
            className="edu-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t('edu_desc')}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
