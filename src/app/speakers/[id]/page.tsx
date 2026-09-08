import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { speakers } from '../../../data/speakers';
import styles from './page.module.css';

interface SpeakerPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for all speakers
export function generateStaticParams() {
  return speakers.map((speaker) => ({
    id: speaker.id,
  }));
}

export default async function SpeakerPage({ params }: SpeakerPageProps) {
  const { id } = await params;
  const speaker = speakers.find((s) => s.id === id);

  if (!speaker) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <div className={styles.backgroundEffects}>
        <div className={styles.glowOrb1} />
        <div className={styles.glowOrb2} />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <Link href="/#speakers" className={styles.backButton}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
        </header>

        <article className={styles.profileGrid}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow} />
              <img
                src={speaker.photo}
                alt={speaker.name}
                className={styles.speakerImage}
              />
              <div className={styles.imageBorder} />
            </div>
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.badges}>
              <span className={styles.badgePrimary}>Speaker</span>
            </div>
            
            <h1 className={styles.name}>{speaker.name}</h1>
            <div className={styles.titleCompany}>
              <h2 className={styles.title}>{speaker.title}</h2>
              <span className={styles.separator}>•</span>
              <p className={styles.company}>{speaker.company}</p>
            </div>

            <div className={styles.divider} />

            <div className={styles.bioSection}>
              {speaker.bio.map((paragraph, index) => (
                <p key={index} className={styles.bioParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.actions}>
              <a
                href="https://www.tixo.online/akwa-ibom-design-summit-2026"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.registerButton}
              >
                Register to Attend
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
