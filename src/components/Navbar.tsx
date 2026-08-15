'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          {/* <img src="/Logo1.png" alt="Akwa Ibom Design Summit Logo" className={styles.logoImg} /> */}
        </a>

        {/* Desktop Links */}
        <nav className={styles.links}>
          <a href="#about" className={styles.link}>About</a>
          <a href="#programme" className={styles.link}>Programme</a>
          <a href="#speakers" className={styles.link}>Speakers</a>
          <a href="#sponsors" className={styles.link}>Sponsors</a>
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <a href="https://www.tixo.online/akwa-ibom-design-summit-2026" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>Register for Event</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIotH96fxRokMtDy4HzuYDio0hcnUrSZNHmsZTWuLLu_9-hw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className={styles.ctaBtnSecondary}>Register for Class</a>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#about" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>About</a>
          <a href="#programme" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Programme</a>
          <a href="#speakers" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Speakers</a>
          <a href="#sponsors" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Sponsors</a>
          <a href="https://www.tixo.online/akwa-ibom-design-summit-2026" target="_blank" rel="noopener noreferrer" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>Register for Event</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIotH96fxRokMtDy4HzuYDio0hcnUrSZNHmsZTWuLLu_9-hw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className={styles.mobileCtaSecondary} onClick={() => setMenuOpen(false)}>Register for Class</a>
        </div>
      )}
    </header>
  );
}
