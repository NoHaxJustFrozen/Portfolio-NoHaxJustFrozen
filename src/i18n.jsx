import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Header
    nav_projects: "Projects",
    nav_education: "Education", 
    nav_certificates: "Certificates",
    nav_contact: "Contact",
    
    // Hero
    hero_greeting: "Hello, I'm",
    hero_name: "NoHaxJustFrozen",
    hero_role: "Creative Developer & Problem Solver",
    hero_cta: "Explore My Work",
    
    // Education
    edu_title: "Education",
    edu_school: "Okan University",
    edu_status: "Currently Enrolled",
    edu_desc: "Pursuing academic excellence in software and technology.",
    edu_hint: "Click the node to reveal",
    
    // Certificates
    cert_title: "Certificates",
    cert_js: "Advanced JavaScript",
    cert_csharp: "C# Programming",
    cert_python: "Python Programming",
    cert_issuer: "BTK Academy",
    
    // Projects
    proj_title: "Selected Work",
    
    // About
    about_title: "About Me",
    about_text1: "I'm a creative developer who blends technical expertise with an eye for design. I build digital experiences that are not only functional but visually striking and memorable.",
    about_text2: "My passion lies in pushing the boundaries of web technologies, creating immersive interfaces, and solving complex problems with elegant code.",
    
    // Contact
    contact_title: "Let's Connect",
    contact_subtitle: "Got a project in mind? Let's build something extraordinary together.",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Your Message",
    contact_send: "Send Message",
    contact_location: "Istanbul, Turkey",
    footer_rights: "All Rights Reserved."
  },
  tr: {
    // Header
    nav_projects: "Projeler",
    nav_education: "Eğitim",
    nav_certificates: "Sertifikalar",
    nav_contact: "İletişim",
    
    // Hero
    hero_greeting: "Merhaba, ben",
    hero_name: "NoHaxJustFrozen",
    hero_role: "Yaratıcı Geliştirici & Problem Çözücü",
    hero_cta: "Çalışmalarıma Göz At",
    
    // Education
    edu_title: "Eğitim",
    edu_school: "Okan Üniversitesi",
    edu_status: "Devam Ediyor",
    edu_desc: "Yazılım ve teknoloji alanında akademik eğitim.",
    edu_hint: "Düğüme tıkla",
    
    // Certificates
    cert_title: "Sertifikalar",
    cert_js: "İleri JavaScript",
    cert_csharp: "C# Programlama",
    cert_python: "Python Programlama",
    cert_issuer: "BTK Akademi",
    
    // Projects
    proj_title: "Seçili Çalışmalar",
    
    // About
    about_title: "Hakkımda",
    about_text1: "Teknik uzmanlığı tasarım gözüyle harmanlayan yaratıcı bir geliştiriciyim. Sadece işlevsel değil, aynı zamanda görsel olarak çarpıcı ve akılda kalıcı dijital deneyimler inşa ediyorum.",
    about_text2: "Tutkum, web teknolojilerinin sınırlarını zorlamak, sürükleyici arayüzler yaratmak ve karmaşık sorunları zarif kodlarla çözmektir.",
    
    // Contact
    contact_title: "İletişime Geç",
    contact_subtitle: "Aklında bir proje mi var? Birlikte olağanüstü bir şey inşa edelim.",
    contact_name: "Adınız",
    contact_email: "E-posta Adresiniz",
    contact_message: "Mesajınız",
    contact_send: "Mesajı Gönder",
    contact_location: "İstanbul, Türkiye",
    footer_rights: "Tüm Hakları Saklıdır."
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  
  const t = (key) => translations[lang]?.[key] || key;
  const toggleLang = () => setLang(prev => prev === 'en' ? 'tr' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
