"use client";

import React, { useState, useEffect } from 'react';
import styles from './SponsorshipSection.module.css';

type SponsorshipTier = {
  id: string;
  name: string;
  price: string;
  features: {
    branding: string;
    exhibition: string;
    thoughtLeadership: string;
    digitalReach: string;
    onSiteBranding: string;
    hospitality: string;
    delegateEngagement: string;
    recognition: string;
    postEventValue: string;
  };
};

const sponsorshipData: SponsorshipTier[] = [
  {
    id: 'title',
    name: 'Title Sponsor',
    price: '₦3,000,000+',
    features: {
      branding: 'Premium logo placement across all event promotional materials',
      exhibition: 'Premium 10×10 branded activation space / booth',
      thoughtLeadership: 'Dedicated speaking slot',
      digitalReach: '8 dedicated social media feature posts',
      onSiteBranding: '3 physical banner placements at the venue',
      hospitality: 'VIP table at the event proper (4 reserved seats)',
      delegateEngagement: 'Prominent branded item/souvenir placement in delegate kits',
      recognition: 'Official Certificate of Sponsorship',
      postEventValue: 'Comprehensive post-event impact report & complete media pack'
    }
  },
  {
    id: 'gold',
    name: 'Gold Sponsor',
    price: '₦1,500,000',
    features: {
      branding: 'Featured logo placement across all event materials',
      exhibition: 'Standard 6×6 branded activation booth',
      thoughtLeadership: 'Dedicated panel seat',
      digitalReach: '5 dedicated social media feature posts',
      onSiteBranding: '2 physical banner placements at the venue',
      hospitality: 'VIP table seating (2 reserved seats)',
      delegateEngagement: 'Item/souvenir inclusion in delegate kits',
      recognition: 'Official Certificate of Sponsorship',
      postEventValue: 'Post-event highlights report & media pack'
    }
  },
  {
    id: 'silver',
    name: 'Silver Sponsor',
    price: '₦750,000',
    features: {
      branding: 'Listed logo on event materials',
      exhibition: 'Branded exhibition table space',
      thoughtLeadership: 'Not applicable (✗)',
      digitalReach: '3 dedicated social media feature posts',
      onSiteBranding: '1 physical banner placement at the venue',
      hospitality: 'Not applicable (✗)',
      delegateEngagement: 'Promotional materials/souvenirs included in delegate kits',
      recognition: 'Official Certificate of Sponsorship',
      postEventValue: 'Standard media pack & post-event acknowledgment'
    }
  },
  {
    id: 'bronze',
    name: 'Bronze Sponsor',
    price: '₦300,000',
    features: {
      branding: 'Listed logo on event materials',
      exhibition: 'Not applicable (✗)',
      thoughtLeadership: 'Not applicable (✗)',
      digitalReach: '1 dedicated social media feature post',
      onSiteBranding: 'Not applicable (✗)',
      hospitality: 'Not applicable (✗)',
      delegateEngagement: 'Promotional materials/souvenirs included in delegate kits',
      recognition: 'Official Certificate of Sponsorship',
      postEventValue: 'Standard media pack & post-event acknowledgment'
    }
  }
];

export default function SponsorshipSection() {
  const [selectedTier, setSelectedTier] = useState<SponsorshipTier | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTier(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openModal = (tier: SponsorshipTier) => {
    setSelectedTier(tier);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedTier(null);
    document.body.style.overflow = 'auto';
  };

  const featureLabels: Record<keyof SponsorshipTier['features'], string> = {
    branding: 'Branding & Visibility',
    exhibition: 'Exhibition',
    thoughtLeadership: 'Thought Leadership',
    digitalReach: 'Digital Reach',
    onSiteBranding: 'On-Site Branding',
    hospitality: 'Hospitality',
    delegateEngagement: 'Delegate Engagement',
    recognition: 'Recognition',
    postEventValue: 'Post-Event Value',
  };

  return (
    <section className={styles.sponsorshipSection} id="sponsorship-tiers">
      <p className={styles.sectionEyebrow}>Partnership Opportunities</p>
      <h2 className={styles.sectionTitle}>Sponsorship Tiers</h2>
      
      <div className={styles.cardsContainer}>
        {sponsorshipData.map((tier) => (
          <div key={tier.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{tier.name}</h3>
            <div className={styles.cardPrice}>{tier.price}</div>
            
            <ul className={styles.cardHighlights}>
              <li className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>{tier.features.branding}</span>
              </li>
              <li className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>{tier.features.digitalReach}</span>
              </li>
              <li className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>{tier.features.recognition}</span>
              </li>
            </ul>
            
            <button 
              className={styles.detailsButton}
              onClick={() => openModal(tier)}
            >
              See details
            </button>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      <div 
        className={`${styles.modalOverlay} ${selectedTier ? styles.open : ''}`}
        onClick={closeModal}
      >
        <div 
          className={styles.modalContent} 
          onClick={(e) => e.stopPropagation()}
        >
          {selectedTier && (
            <>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitleWrapper}>
                  <h3 className={styles.modalTierName}>{selectedTier.name}</h3>
                  <div className={styles.modalTierPrice}>{selectedTier.price}</div>
                </div>
                <button className={styles.closeButton} onClick={closeModal} aria-label="Close modal">
                  ×
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.featureList}>
                  {(Object.keys(featureLabels) as Array<keyof SponsorshipTier['features']>).map((key) => {
                    const value = selectedTier.features[key];
                    const isNotApplicable = value.toLowerCase().includes('not applicable') || value.includes('✗');
                    return (
                      <div key={key} className={styles.featureItem}>
                        <span className={styles.featureTitle}>{featureLabels[key]}</span>
                        <span className={`${styles.featureDesc} ${isNotApplicable ? styles.notApplicable : ''}`}>
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className={styles.modalFooter}>
                <a 
                  href="https://wa.me/2348140617722?text=Hi%2C%20I%27m%20interested%20in%20becoming%20a%20sponsor%20for%20the%20AKWA%20IBOM%20DESIGN%20SUMMIT." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.contactBtn}
                >
                  Become a Sponsor
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
