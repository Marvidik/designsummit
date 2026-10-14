'use client';

import React, { useEffect } from 'react';
import styles from './RegisterModal.module.css';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    handle: '@AkwaIbomDesignSummit',
    url: 'https://www.facebook.com/share/1EKfP1G5Tk/',
    iconStyle: styles.facebookIcon,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@akwaibomdesignsummit_',
    url: 'https://www.instagram.com/akwaibomdesignsummit?igsh=M3JsMTNzam4xcmxh',
    iconStyle: styles.instagramIcon,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@akwaibom.design.s',
    url: 'https://www.tiktok.com/@akwaibom.design.s',
    iconStyle: styles.tiktokIcon,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.25-1.51 3.27-3.32.05-3.89.02-7.78.02-11.67V.02z" />
      </svg>
    ),
  },
];

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-modal-title"
      id="register-modal-overlay"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.categoryTag}>Akwa Ibom Design Summit 2026</span>
          <h2 id="register-modal-title" className={styles.title}>
            Follow our socials
          </h2>
          <p className={styles.subtitle}>
            Follow our official channels for event announcements, speaker highlights, and schedule updates.
          </p>
        </div>

        {/* Social Links List */}
        <div className={styles.socialList}>
          {SOCIAL_LINKS.map((item) => (
            <div key={item.name} className={styles.socialRow}>
              <div className={styles.socialLeft}>
                <div className={`${styles.socialIcon} ${item.iconStyle}`}>
                  {item.icon}
                </div>
                <div className={styles.socialDetails}>
                  <span className={styles.socialPlatform}>{item.name}</span>
                  <span className={styles.socialHandle}>{item.handle}</span>
                </div>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.followButton}
                id={`social-follow-${item.name.toLowerCase()}`}
              >
                Follow
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className={styles.footer}>
          <a
            href="https://www.tixo.online/akwa-ibom-design-summit-2026"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.continueButton}
            data-modal-continue="true"
            id="modal-continue-registration-btn"
            onClick={onClose}
          >
            <span>Continue to Registration</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <span className={styles.footerNote}>
            Registration is free and takes place on Tixo.
          </span>
        </div>
      </div>
    </div>
  );
}
