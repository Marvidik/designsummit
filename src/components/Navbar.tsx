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
          <span className={styles.logoBox}>ADS</span>
          <span className={styles.logoText}>AKWAIBOM<span className={styles.logoYear}>26</span></span>
        </a>

        {/* Desktop Links */}
        <nav className={styles.links}>
          <a href="#sponsors" className={styles.link}>Sponsors</a>
          <a href="#agenda" className={styles.link}>Agenda</a>
          <a href="#speakers" className={styles.link}>Speakers</a>
          <a href="#about" className={styles.link}>About</a>
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <a href="#register" className={styles.ctaBtn}>Register for FREE</a>
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
          <a href="#sponsors" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Sponsors</a>
          <a href="#agenda" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Agenda</a>
          <a href="#speakers" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Speakers</a>
          <a href="#about" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>About</a>
          <a href="#register" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>Register for FREE</a>
        </div>
      )}
    </header>
  );
}
