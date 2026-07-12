import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    };

    // Smooth ring follow with lerp
    const animate = () => {
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;
      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      requestAnimationFrame(animate);
    };

    // Detect hover on interactive elements
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .project-row, .cert-card-minimal, .central-node, .hero-cta, .submit-btn, .lang-toggle')) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${isHovering ? 'hovering' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${isHovering ? 'hovering' : ''}`} />
    </>
  );
};

export default CustomCursor;
