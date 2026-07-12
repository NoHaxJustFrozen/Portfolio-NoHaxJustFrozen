import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useLang } from '../i18n';
import './Contact.css';

const Contact = () => {
  const { t } = useLang();

  return (
    <section className="contact-section-v2" id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t('contact_title')}
      </motion.h2>
      <div className="section-divider"></div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-info">
          <p className="contact-subtitle">{t('contact_subtitle')}</p>

          <div className="contact-details">
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:mcnrylmz@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>mcnrylmz@gmail.com</a>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>{t('contact_location')}</span>
            </div>
          </div>

          <div className="social-links-footer">
            <a href="https://github.com/NoHaxJustFrozen" target="_blank" rel="noreferrer">GitHub</a>
            <span className="dot">·</span>
            <a href="https://instagram.com/nohaxus" target="_blank" rel="noreferrer">Instagram</a>
            <span className="dot">·</span>
            <a href="https://linkedin.com/in/nohaxus" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder={t('contact_name')} className="form-input" required />
            <input type="email" placeholder={t('contact_email')} className="form-input" required />
          </div>
          <textarea placeholder={t('contact_message')} rows="5" className="form-input" required></textarea>
          <button type="submit" className="submit-btn">{t('contact_send')}</button>
        </form>
      </motion.div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} NoHaxJustFrozen. {t('footer_rights')}</p>
      </footer>
    </section>
  );
};

export default Contact;
