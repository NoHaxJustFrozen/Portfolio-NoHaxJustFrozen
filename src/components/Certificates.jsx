import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';
import AnimatedTitle from './AnimatedTitle';
import './Certificates.css';

const Certificates = () => {
  const { t } = useLang();

  const certsData = [
    { id: 1, title: t('cert_js'), issuer: t('cert_issuer'), year: "2023", icon: "JS" },
    { id: 2, title: t('cert_csharp'), issuer: t('cert_issuer'), year: "2023", icon: "C#" },
    { id: 3, title: t('cert_python'), issuer: t('cert_issuer'), year: "2023", icon: "PY" },
  ];

  return (
    <section className="certificates-section-v3" id="certificates">
      <AnimatedTitle text={t('cert_title')} />
      <div className="section-divider"></div>

      <div className="certs-grid-minimal">
        {certsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="cert-card-minimal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            <div className="cert-icon-badge">{cert.icon}</div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p className="cert-meta">{cert.issuer} · {cert.year}</p>
            </div>
            <div className="cert-line"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
