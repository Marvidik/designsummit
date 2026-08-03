import React from 'react';
import styles from './page.module.css';
import Countdown from '@/components/Countdown';

const speakers = [
  { name: 'Larissa Murmann', title: 'Principal Designer', company: 'Studio A' },
  { name: 'Federico Cohen Freue', title: 'Creative Director', company: 'DesignSpace' },
  { name: 'Lucrecia Borgonovo', title: 'Head of Architecture', company: 'Urban Build' },
  { name: 'Jacqui Canney', title: 'Chief Design Officer', company: 'Innovate Interiors' },
  { name: 'James Toshiba', title: 'Lead Interior Architect', company: 'Spaces' },
  { name: 'Elena Hart', title: 'Founder', company: 'Hart Design' },
];

const testimonials = [
  {
    tag: 'Founder feedback',
    quote: '"Every session felt practical and full of energy. I left with better ideas, stronger connections, and a clearer plan for my next move."',
    name: 'Maya Collins',
    role: 'Founder, Brightline Studio',
  },
  {
    tag: 'Growth team',
    quote: '"The event brought together the right mix of speakers, founders, and business leaders. It felt focused, useful, and easy to connect."',
    name: 'Daniel Reeves',
    role: 'Growth Lead, Northpeak',
  },
  {
    tag: 'Networking value',
    quote: '"I joined for the talks but stayed for the conversations. The networking moments were just as valuable as the main sessions."',
    name: 'Elena Hart',
    role: 'Marketing Strategist',
  },
  {
    tag: 'Event experience',
    quote: '"The schedule was well planned, the speakers were sharp, and the whole event felt professional from start to finish."',
    name: 'Jordan Mills',
    role: 'Product Manager, Kinetic Labs',
  },
];

const partnerCategories = [
  { type: 'Marketing', partners: [{ name: 'Emergence' }, { name: 'Immigway' }] },
  { type: 'Media', partners: [{ name: 'Brain Station' }, { name: 'AxromInc' }] },
  { type: 'Event', partners: [{ name: 'Avenzo' }, { name: 'Novotel' }] },
  { type: 'Print', partners: [{ name: '' }] },
  { type: 'Telco', partners: [{ name: '' }] },
];

export default function Home() {
  return (
    <main className={styles.container}>

      {/* ── HERO ── */}
      <section className={styles.hero} id="home">
        <div className={styles.heroCircle} />
        <div className={styles.heroCircleOuter} />

        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Dec 2–3 &nbsp;·&nbsp; 100% Free
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.gradientText}>AKWAIBOM</span>
          <span className={styles.gradientText}>
            DESIGN SUMMIT <span className={styles.titleYear}>26</span>
          </span>
        </h1>

        <p className={styles.heroTagline}>Shape the Future</p>
        <p className={styles.heroSub}>
          The world&apos;s leading summit on interior design, architecture, and spaces.<br />
          90 speakers. 10,000+ executives. 16 hours of insight.
        </p>

        <div className={styles.heroActions}>
          <a href="#register" className={styles.primaryButton}>Register for FREE</a>
          <a href="#sponsors" className={styles.secondaryButton}>Become a Sponsor</a>
        </div>

        <div className={styles.heroStats}>
          {[
            { n: '90', l: 'World-class Speakers' },
            { n: '10K+', l: 'Design Executives' },
            { n: '16h', l: 'of Content' },
            { n: '2', l: 'Action-packed Days' },
          ].map(s => (
            <div key={s.n} className={styles.heroStat}>
              <span className={styles.heroStatNum}>{s.n}</span>
              <span className={styles.heroStatLabel}>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SPEAKERS CAROUSEL ── */}
      <section className={styles.speakers} id="speakers">
        <div className={styles.sectionLabel}>
          <p className={styles.sectionEyebrow}>World-Class Speakers</p>
          <h2 className={styles.sectionTitleCenter} style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
            Meet the voices shaping the future of design
          </h2>
        </div>
        <div className={styles.speakersCarouselContainer}>
          <div className={styles.fadeLeft} />
          <div className={styles.speakersTrack}>
            {[...speakers, ...speakers].map((speaker, idx) => (
              <div key={idx} className={styles.speakerCard}>
                <div className={styles.speakerCardHeader}>
                  <div className={styles.speakerInfoLeft}>
                    <h3 className={styles.speakerName}>{speaker.name}</h3>
                    <p className={styles.speakerRole}>{speaker.title}</p>
                    <p className={styles.speakerCompanyText}>{speaker.company}</p>
                  </div>
                  <div className={styles.companyLogoPlaceholder}>Logo</div>
                </div>
                <div className={styles.speakerPhotoPlaceholder}>
                  <img src="/design2.jpg" alt="Speaker" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.fadeRight} />
        </div>
      </section>

      {/* ── EVENT PARTNERS ── */}
      <section className={styles.partnersSection} id="sponsors">
        <p className={styles.sectionEyebrow}>Event Partners</p>
        <h2 className={styles.sectionTitleCenter}>
          Supported by brands that<br />move ideas forward.
        </h2>
        <p className={styles.sectionSubtitleCenter}>
          We are proud to partner with companies, communities, and media partners<br />
          who support meaningful conversations, business growth, and new ideas.
        </p>

        {/* Two-line left-to-right marquee */}
        <div className={styles.partnersMarqueeWrapper}>
          {/* Row 1 */}
          <div className={styles.partnersTrackRow}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.partnerTile}>
                <div className={styles.partnerImgBox}>
                  <img src={['/amazon.png', '/dhl.jpeg', '/ebay.jpeg', '/fedex.png', '/maersk.png', '/shopify.png', '/ups.png', '/amazon.png'][i % 8]} alt="Partner" style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }} />
                </div>
                <p className={styles.partnerType}>{['Marketing', 'Media', 'Event', 'Print', 'Telco', 'Branding', 'Digital', 'Creative'][i % 8]}</p>
                <p className={styles.partnerLabel}>PARTNER</p>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[...Array(8)].map((_, i) => (
              <div key={`dup-${i}`} className={styles.partnerTile}>
                <div className={styles.partnerImgBox}>
                  <img src={['/amazon.png', '/dhl.jpeg', '/ebay.jpeg', '/fedex.png', '/maersk.png', '/shopify.png', '/ups.png', '/amazon.png'][i % 8]} alt="Partner" style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }} />
                </div>
                <p className={styles.partnerType}>{['Marketing', 'Media', 'Event', 'Print', 'Telco', 'Branding', 'Digital', 'Creative'][i % 8]}</p>
                <p className={styles.partnerLabel}>PARTNER</p>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className={styles.partnersTrackRow}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.partnerTile}>
                <div className={styles.partnerImgBox}>
                  <img src={['/amazon.png', '/dhl.jpeg', '/ebay.jpeg', '/fedex.png', '/maersk.png', '/shopify.png', '/ups.png', '/amazon.png'][7 - (i % 8)]} alt="Partner" style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }} />
                </div>
                <p className={styles.partnerType}>{['Event', 'Print', 'Telco', 'Marketing', 'Creative', 'Media', 'Branding', 'Digital'][i % 8]}</p>
                <p className={styles.partnerLabel}>PARTNER</p>
              </div>
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`dup-${i}`} className={styles.partnerTile}>
                <div className={styles.partnerImgBox}>
                  <img src={['/amazon.png', '/dhl.jpeg', '/ebay.jpeg', '/fedex.png', '/maersk.png', '/shopify.png', '/ups.png', '/amazon.png'][7 - (i % 8)]} alt="Partner" style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }} />
                </div>
                <p className={styles.partnerType}>{['Event', 'Print', 'Telco', 'Marketing', 'Creative', 'Media', 'Branding', 'Digital'][i % 8]}</p>
                <p className={styles.partnerLabel}>PARTNER</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sponsorBanner}>
          <div className={styles.sponsorBannerLeft}>
            <p className={styles.sponsorEyebrow}>Become a sponsor</p>
            <h3 className={styles.sponsorTitle}>Put your brand in the<br />room where ideas move.</h3>
          </div>
          <div className={styles.sponsorBannerRight}>
            <div className={styles.sponsorBannerInnerCard}>
              <h4 className={styles.sponsorCardTitle}>Choose the right partnership level.</h4>
              <p className={styles.sponsorCardText}>
                Reach out to discuss partnership tiers, visibility options, and how to get your brand in front of thousands of design and architecture leaders.
              </p>
              <a
                href="https://wa.me/2348000000000?text=Hi%2C%20I%27m%20interested%20in%20sponsoring%20the%20AKWAIBOM%20DESIGN%20SUMMIT.%20Please%20share%20the%20partnership%20tiers."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact Admin on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS INCONFE ── */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <p className={styles.sectionEyebrow}>What is AkwaIbom Design Summit</p>
            <h2 className={styles.sectionTitleLeft}>A summit built<br />around better<br />business thinking.</h2>

            <div className={styles.nextSummitCard}>
              <p className={styles.nextSummitEyebrow}>Next summit</p>
              <h3 className={styles.nextSummitTitle}>
                A full-day summit for clearer ideas,<br />stronger moves, and useful connections.
              </h3>
              <div className={styles.summitDetails}>
                <div className={styles.summitRow}><span>Date</span><span>5th December 26</span></div>
                <div className={styles.summitRow}><span>Venue</span><span>Arc Hall Center</span></div>
                <div className={styles.summitRow}><span>Location</span><span>Los Angeles</span></div>
                <div className={styles.summitRow}><span>Attendees</span><span>800+</span></div>
              </div>
            </div>
          </div>

          <div className={styles.aboutRight}>
            <p className={styles.aboutDescription}>
              AkwaIbom Design Summit brings top interior designers, architects, and creative directors into one focused room to learn from real project experience, discuss practical design solutions, and build useful connections. The event is shaped for professionals who want clearer direction, stronger creative conversations, and design lessons they can take back to their studios.
            </p>
            <div className={styles.tagsContainer}>
              <span className={styles.tagPrimary}>Practical talks</span>
              <span className={styles.tagSecondary}>Honest lessons</span>
              <span className={styles.tagSecondary}>Useful connections</span>
            </div>

            <div className={styles.statsGridSmall}>
              {[{ n: '800+', l: 'Expected attendees' }, { n: '45+', l: 'Sessions' }, { n: '20+', l: 'Leaders & Speakers' }, { n: '12+', l: 'Workshops' }].map(s => (
                <div key={s.n} className={styles.statCardSmall}>
                  <h4>{s.n}</h4>
                  <p>{s.l}</p>
                </div>
              ))}
            </div>

            <div className={styles.ideaCallout}>
              <div className={styles.quoteIcon}>❝</div>
              <div>
                <h5>Leave with ideas you can use.</h5>
                <p>The summit is planned to help attendees return with clearer thinking, better conversations, and practical next steps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREMIUM COUNTDOWN ── */}
      <section className={styles.premiumCountdownWrapper}>
        <img src="/design1.png" alt="Summit Background" className={styles.premiumCountdownBg} />
        <div className={styles.premiumCountdownOverlay} />
        <div className={styles.premiumCountdownInner}>
          <span className={styles.premiumCountdownEyebrow}>Tickets close soon</span>
          <h2 className={styles.premiumCountdownTitle}>Reserve your seat<br />before the room fills.</h2>
          <p className={styles.premiumCountdownDesc}>
            Seats are limited for this one-day leadership summit. Reserve early to join the keynote<br />sessions, workshops, and networking moments before the room fills.
          </p>
          <Countdown />
          <div className={styles.premiumCountdownAction}>
            <button className={styles.premiumCountdownBtn}>Buy Your Ticket</button>
          </div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section className={styles.whySection}>
        <div className={styles.whyHeader}>
          <div className={styles.whyHeaderLeft}>
            <p className={styles.sectionEyebrow} style={{ color: '#f97316' }}>Why we exist</p>
            <h2 className={styles.whyTitle}>Built for substance,<br />not noise.</h2>
          </div>
          <div className={styles.whyHeaderRight}>
            <p>AkwaIbom Design Summit is made for professionals who want more than surface-level design trends. Every session, panel, and connection is planned to help attendees leave with clearer creative vision.</p>
          </div>
        </div>

        <div className={styles.whyCards}>
          {[
            { id: '01', title: 'Practical ideas', desc: 'Every session focuses on real business problems, useful lessons, and clear takeaways attendees can bring back to their work.' },
            { id: '02', title: 'Meaningful rooms', desc: 'The event is shaped to help people meet others with shared goals, different experience, and fresh ways of thinking.' },
            { id: '03', title: 'Better design leadership', desc: 'From client communication to project decision-making, AkwaIbom Design Summit helps creative leaders sharpen how they design, pitch, and execute.' },
          ].map(card => (
            <div key={card.id} className={styles.whyCard}>
              <div className={styles.whyCardNumber}>{card.id}</div>
              <h3 className={styles.whyCardTitle}>{card.title}</h3>
              <p className={styles.whyCardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EVENT EXPERIENCE ── */}
      <section className={styles.experienceSection}>
        <div className={styles.experienceHeader}>
          <div className={styles.experienceHeaderLeft}>
            <p className={styles.sectionEyebrow}>Event experience</p>
            <h2 className={styles.sectionTitleLeft}>Designed for<br />learning, meeting,<br />and moving forward.</h2>
          </div>
          <div className={styles.experienceHeaderRight}>
            <p>AkwaIbom Design Summit combines keynotes, panels, networking, and focused sessions to help attendees learn from real design experience and leave with clearer creative next steps.</p>
          </div>
        </div>

        <div className={styles.experienceContent}>
          <div className={styles.experienceImageBlock}>
            <div className={styles.experienceImagePlaceholder}>
              <img src="/design1.png" alt="Summit Experience" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.experienceImageContent} style={{ position: 'relative', zIndex: 1 }}>
              <span className={styles.imageTag}>Inside the room</span>
              <h3>Real talks from people doing the work.</h3>
              <p>Direct lessons from founders, operators, managers, and business voices who understand the pressure of building.</p>
            </div>
          </div>

          <div className={styles.experienceList}>
            {[
              { title: 'Keynote sessions', desc: 'Big ideas on leadership, change, market movement, and the future of growing teams.' },
              { title: 'Founder panels', desc: 'Honest stories about what worked, what failed, and what changed while building.' },
              { title: 'Networking breaks', desc: 'Time planned for real introductions, useful conversations, and possible partnerships.' },
              { title: 'Action-focused sessions', desc: 'Smaller sessions built around practical problems in growth, product, teams, and communication.' },
            ].map((item, idx) => (
              <div key={idx} className={styles.experienceListItem}>
                <div className={styles.experienceListIcon}>◆</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsHeader}>
          <div className={styles.testimonialsLeft}>
            <p className={styles.sectionEyebrow} style={{ color: '#f97316' }}>Community voices</p>
            <h2 className={styles.testimonialsTitle}>Real stories from<br />people who joined<br />the room.</h2>
          </div>
          <div className={styles.testimonialsRight}>
            <p>Hear from founders, leaders, creators, and professionals who joined the event to learn, connect, and leave with new ideas.</p>
          </div>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <span className={styles.testimonialTag}>{t.tag}</span>
              <p className={styles.testimonialQuote}>{t.quote}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>
                  <img src="/design2.jpg" alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <div>
                  <p className={styles.testimonialName}>{t.name}</p>
                  <p className={styles.testimonialRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackgroundPlaceholder}>
          <img src="/design1.png" alt="Audience" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
        </div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to join the room?</h2>
          <p className={styles.ctaDesc}>
            Reserve your seat and spend one focused day with people building<br />ideas, teams, and companies.
          </p>
          <div className={styles.ctaActions}>
            <button className={styles.ctaPrimaryBtn}>Reserve Your Seat</button>
            <button className={styles.ctaSecondaryBtn}>Join as Sponsor</button>
          </div>
          <h1 className={styles.bigFooterText}>AKWAIBOM SUMMIT</h1>
          <p className={styles.footerSubText}>
            A business innovation summit built for founders, teams, and leaders who want<br />
            sharper ideas, stronger communication, and meaningful connections.
          </p>
        </div>
      </section>

    </main>
  );
}
