import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import CornerShape from '../components/CornerShape';

const speakers = [
  { name: 'Larissa Murmann', title: 'Principal Designer', company: 'Studio A', photo: '/speaker1.jpg' },
  { name: 'Federico Cohen Freue', title: 'Creative Director', company: 'DesignSpace', photo: '/speaker2.jpg' },
  { name: 'Lucrecia Borgonovo', title: 'Head of Architecture', company: 'Urban Build', photo: '/speaker3.jpg' },
  { name: 'Jacqui Canney', title: 'Chief Design Officer', company: 'Innovate Interiors', photo: '/speaker4.jpg' },
  { name: 'James Toshiba', title: 'Lead Interior Architect', company: 'Spaces', photo: '/speaker1.jpg' },
  { name: 'Elena Hart', title: 'Founder', company: 'Hart Design', photo: '/speaker3.jpg' },
];

const faqs = [
  { q: 'Is the Akwa Ibom Design Summit free?', a: 'Yes. Registration and attendance are free.' },
  { q: 'When is the summit?', a: 'The Akwa Ibom Design Summit takes place on October 23, 2026.' },
  { q: 'Where is the summit taking place?', a: 'The event will be held in Uyo, Akwa Ibom.' },
  { q: 'Who can attend?', a: 'The summit is open to interior designers, architects, civil engineers, students, creative professionals, business owners, real estate professionals, design enthusiasts and anyone interested in how beautiful spaces are designed and built.' },
  { q: 'Do I need to be an interior designer to attend?', a: 'No. You don\'t need to work in interior design. If you\'re interested in design, architecture, construction, real estate, creativity or beautiful spaces, you\'re welcome.' },
  { q: 'How do I register?', a: 'Registration is free. Simply complete the registration form on the website to reserve your place.' },
  { q: 'Will there be training sessions?', a: 'Yes. There will be practical breakout sessions covering interior design fundamentals, graphic design essentials and personal branding for creatives.' },
  { q: 'Can I visit the Interior Market without attending the summit?', a: 'The Interior Market is part of the summit experience. Register to attend the event and you\'ll be able to explore the participating exhibitors.' },
  { q: 'How many exhibitors will be there?', a: 'The Display Interior Market will feature 20+ exhibitors across furniture, beddings, building materials, solar and lighting, gadgets, décor, fabrics and other design-related businesses.' },
  { q: 'Will I receive anything when I attend?', a: 'Yes. Every registered attendee will receive an event tag and a souvenir on the day.' },
  { q: 'What should I bring?', a: 'Come with your phone, something to take notes with, your questions and, if you\'re attending for business, your contact details or business cards. Most importantly, come ready to meet people.' },
  { q: 'Can students attend?', a: 'Absolutely. Students are welcome and can benefit from the training sessions, industry conversations, exhibitions and networking opportunities.' },
  { q: 'Can my business exhibit at the summit?', a: 'Yes. Businesses that fit within the event\'s design, construction, home, technology and related categories can explore exhibitor opportunities.' }
];

// flip to true when you're ready to reveal — nothing else to touch
const SPEAKERS_REVEALED = false;


export default function Home() {
  return (
    <main className={styles.container}>

      {/* ── HERO ── */}
      <section className={styles.hero} id="home">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              October 23 &nbsp;·&nbsp; Uyo, Akwa Ibom &nbsp;·&nbsp; Free Registration
            </div>

            <h1 className={styles.heroTitle}>
              <span className={styles.gradientText}>Akwa Ibom</span>
              <span className={styles.titleYear}>Design Summit</span>
            </h1>

            <p className={styles.heroTagline}>
              The flagship interior design event for South-South Nigeria
            </p>
            <p className={styles.heroSub}>
              Design, people, ideas, all in one room. The Akwa Ibom Design Summit brings
              together designers, architects, engineers, creatives, businesses, students
              and industry professionals for a day of practical learning, industry
              conversations, a live interior market and meaningful connections.
            </p>

            <div className={styles.heroActions}>
              <a
                href="https://www.tixo.online/akwa-ibom-design-summit-2026"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Register for Event
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIotH96fxRokMtDy4HzuYDio0hcnUrSZNHmsZTWuLLu_9-hw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                Register for Class
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImageCard}>
              {/* Swap this src for your real venue / mood-board photo */}
              <img
                src="/summit1.jpg"
                alt="Akwa Ibom Design Summit venue"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

       <div className={styles.sectionDivider}>
        <span className={styles.sectionDividerLine} />
        <span className={styles.sectionDividerMark}>
          <span className={styles.sectionDividerDash} />
          <span className={styles.sectionDividerDot} />
        </span>
        <span className={styles.sectionDividerLine} />
      </div>

      {/* ── ABOUT THE SUMMIT ── */}
      <section className={styles.aboutSection} id="about">
        {/* <img src="/brand2.png" alt="Decorative Background" style={{ position: 'absolute', top: '10%', left: '-5%', width: '300px', transform: 'rotate(15deg)', opacity: 0.85, pointerEvents: 'none', zIndex: 0 }} /> */}
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <p className={styles.sectionEyebrow}>About the Summit</p>
            <h2 className={styles.sectionTitleLeft}>A day for the people shaping beautiful spaces.</h2>

            <div className={styles.nextSummitCard}>
              <p className={styles.nextSummitEyebrow}>Next summit</p>
              <h3 className={styles.nextSummitTitle}>
                A good space is rarely the work of one person.
              </h3>
              <div className={styles.summitDetails}>
                <div className={styles.summitRow}><span>Date</span><span>October 23, 2026</span></div>
                <div className={styles.summitRow}><span>Venue</span><span>Uyo, Akwa Ibom</span></div>
                <div className={styles.summitRow}><span>Cost</span><span>Free</span></div>
              </div>
            </div>
          </div>

          <div className={styles.aboutRight}>
            <p className={styles.aboutDescription}>
              It takes designers, architects, engineers, craftsmen, suppliers, business owners and clients making decisions that eventually become the places we live, work and gather.
            </p>
            <p className={styles.aboutDescription}>
              The Akwa Ibom Design Summit brings many of these people into one room. Across one day, you\'ll have access to expert conversations, practical training, a live market featuring design-related businesses, and opportunities to meet people working across the design and built environment.
            </p>
            <p className={styles.aboutDescription}>
              It is a space to learn something useful, discover new businesses, ask questions, exchange ideas and meet people you may not have met otherwise. And Yes. Attendance is free.
            </p>

            <div className={styles.ideaCallout}>
              <div className={styles.quoteIcon}>❝</div>
              <div>
                <h5>Leave with more than you came with.</h5>
                <p>Learn from people doing the work, build your professional circle, discover brands and products, and pick up practical skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className={styles.whySection}>
        {/* <img src="/brand4.png" alt="Decorative Background" style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '300px', transform: 'rotate(-15deg)', opacity: 0.85, pointerEvents: 'none', zIndex: 0 }} /> */}
        <div className={styles.whyHeader}>
          <div className={styles.whyHeaderLeft}>
            <p className={styles.sectionEyebrow} style={{ color: '#FF6B3D' }}>Who is this for?</p>
            <h2 className={styles.whyTitle}>Different professions.<br />Shared interests.</h2>
          </div>
          <div className={styles.whyHeaderRight}>
            <p>If you have a place in the design ecosystem, there is something here for you. The summit brings together people working across different parts of the industry.</p>
          </div>
        </div>

        <div className={styles.whyCards}>
          {[
            { id: '01', title: 'Interior Designers', desc: 'Learn from other professionals, discover products and materials, and meet potential clients, collaborators and suppliers.' },
            { id: '02', title: 'Architects', desc: 'Connect with professionals across the built environment and explore ideas, products and conversations that intersect with your work.' },
            { id: '03', title: 'Civil Engineers', desc: 'Meet designers, developers, suppliers and other professionals involved in turning concepts into functional spaces.' },
            { id: '04', title: 'Business Owners', desc: 'Meet potential customers, collaborators and partners while getting your brand in front of people who care about design and beautiful spaces.' },
            { id: '05', title: 'Creative Professionals', desc: 'From graphic designers to personal brands, the summit offers practical sessions and conversations around building and presenting your work.' },
            { id: '06', title: 'Students', desc: 'Get outside the classroom. Listen to people working in the industry, ask questions, explore different career paths and start building your network.' },
            { id: '07', title: 'Real Estate Professionals', desc: 'Connect with designers, architects, suppliers and other professionals whose work directly influences how properties are developed, presented and experienced.' },
            { id: '08', title: 'Design Enthusiasts', desc: "You don't need to work in design to appreciate it. If you've ever wondered how beautiful spaces come together, come and see the people, ideas and businesses behind them." },
          ].map(card => (
            <div key={card.id} className={styles.whyCard}>
              <div className={styles.whyCardNumber}>{card.id}</div>
              <h3 className={styles.whyCardTitle}>{card.title}</h3>
              <p className={styles.whyCardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section className={styles.experienceSection} id="programme">
        <div className={styles.experienceHeader}>
          <div className={styles.experienceHeaderLeft}>
            <p className={styles.sectionEyebrow}>What to Expect</p>
            <h2 className={styles.sectionTitleLeft}>Four parts of the day.<br />Plenty to explore.</h2>
          </div>
          <div className={styles.experienceHeaderRight}>
            <p>Your day starts with a simple registration. When you arrive in Uyo, you\'ll check in and receive your attendee tag and souvenir. From there, you can move between the main summit, training sessions, Interior Market and networking activities throughout the day.</p>
          </div>
        </div>

        <div className={styles.experienceContent}>
          <div className={styles.experienceImageBlock}>
            <div className={styles.experienceImagePlaceholder}>
              <img src="/design1.png" alt="Summit Experience" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.experienceImageContent} style={{ position: 'relative', zIndex: 1 }}>
              <span className={styles.imageTag}>The Attendee Experience</span>
              <h3>Your day starts with a simple registration.</h3>
              <p>Register for free before the event and receive the information you&apos;ll need ahead of October 23. When you arrive in Uyo, you&apos;ll check in and receive your attendee tag and souvenir.</p>
              <br />
              <p>From there, you can move between the main summit, training sessions, Interior Market and networking activities throughout the day.</p>
              <br />
              <p style={{ fontWeight: 'bold' }}>You can listen. Ask questions. Meet people. Explore brands. Take notes. Have conversations. And hopefully leave with a few ideas worth putting into practice.</p>
              <br />
              <p>No complicated process. Just register, show up and take part.</p>
            </div>
          </div>

          <div className={styles.experienceList}>
            {[
              { title: 'The Summit', desc: 'Hear from experienced voices across interior design, real estate, finance, personal branding and the creative economy.' },
              { title: 'Training Tracks', desc: 'Choose from practical breakout sessions covering interior design fundamentals, graphic design essentials and personal branding.' },
              { title: 'Display Interior Market', desc: 'See products up close from 20+ exhibitors. Discover brands, compare ideas, and talk directly with business owners.' },
              { title: 'Networking', desc: 'Some of the most useful conversations won\'t happen on stage. Bring your questions, business cards, and curiosity.' },
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

      {/* ── TRAINING TRACKS ── */}
      <section className={styles.testimonialsSection} id="training">
        <div className={styles.testimonialsHeader}>
          <div className={styles.testimonialsLeft}>
            <p className={styles.sectionEyebrow} style={{ color: '#FF6B3D' }}>Training Tracks</p>
            <h2 className={styles.testimonialsTitle}>Learn something<br />you can actually use.</h2>
          </div>
          <div className={styles.testimonialsRight}>
            <p>The learning doesn\'t stop at the main stage. Choose from practical breakout sessions. Come with questions. Leave with ideas you can actually use.</p>
          </div>
        </div>

        <div className={styles.trainingGrid}>
          <div className={styles.trainingCard}>
            <span className={styles.trainingTag}>Track 01</span>
            <h3 className={styles.trainingTitle}>Interior Design Fundamentals</h3>
            <p className={styles.trainingDesc}>A practical introduction to the principles behind creating functional, thoughtful and visually appealing spaces. Whether you\'re just starting out or looking to strengthen your foundation, this session gives you useful concepts to work with.</p>
          </div>
          <div className={styles.trainingCard}>
            <span className={styles.trainingTag}>Track 02</span>
            <h3 className={styles.trainingTitle}>Graphic Design Essentials</h3>
            <p className={styles.trainingDesc}>Explore the fundamentals of visual communication and what makes a design clear, effective and easy to understand. A useful session for creatives, business owners, students and anyone who works with visual content.</p>
          </div>
          <div className={styles.trainingCard}>
            <span className={styles.trainingTag}>Track 03</span>
            <h3 className={styles.trainingTitle}>Personal Branding for Creatives</h3>
            <p className={styles.trainingDesc}>Your work matters, but so does how people see and remember you. This session looks at the practical side of building a personal brand as a creative professional, from positioning yourself to communicating what you do.</p>
          </div>
        </div>
      </section>

      {/* ── SPEAKERS ── */}
      <section className={styles.speakers} id="speakers">
        <div className={styles.speakersHeader}>
          <div>
            <p className={styles.sectionEyebrow}>The Summit</p>
            <h2 className={styles.sectionTitleCenter} style={{ textAlign: 'left', marginBottom: '0' }}>
              Meet the speakers
            </h2>
          </div>
          <p className={styles.speakersHeaderDesc}>
            Practitioners, thinkers and makers from across the design and built environment — gathered in one room for one day.
          </p>
        </div>

        <div className={styles.speakersCarouselContainer}>
          <div className={styles.fadeLeft} />
          <div className={styles.speakersTrack}>
        {[...speakers, ...speakers].map((speaker, idx) => (
          <div key={idx} className={styles.speakerCard}>
            <div className={styles.speakerPhoto}>
              <img
                src={speaker.photo}
                alt={SPEAKERS_REVEALED ? speaker.name : 'Speaker to be revealed'}
                className={`${styles.speakerImg} ${!SPEAKERS_REVEALED ? styles.speakerImgBlurred : ''}`}
              />
              <div className={styles.speakerWatermark}>
                <CornerShape color="rgba(255,255,255,0.15)" className={styles.speakerWatermarkShape} />
              </div>
              <span className={styles.speakerBadge}>
                {String(((idx % speakers.length) + 1)).padStart(2, '0')}
              </span>

              {!SPEAKERS_REVEALED && (
                <div className={styles.speakerRevealOverlay}>
                  <span className={styles.speakerRevealBadge}>
                    <span className={styles.speakerRevealDot} />
                    Revealing soon
                  </span>
                </div>
              )}
            </div>

            <div className={styles.speakerInfo}>
              <div className={styles.speakerAccentLine} />
              {SPEAKERS_REVEALED ? (
                <>
                  <h3 className={styles.speakerName}>{speaker.name}</h3>
                  <p className={styles.speakerRole}>{speaker.title}</p>
                  <p className={styles.speakerCompanyText}>{speaker.company}</p>
                </>
              ) : (
                <>
                  <h3 className={styles.speakerName}>Speaker {String(((idx % speakers.length) + 1)).padStart(2, '0')}</h3>
                  <p className={styles.speakerRole}>Announcement coming</p>
                </>
              )}
            </div>
            </div>
          ))}
        </div>
          <div className={styles.fadeRight} />
        </div>
      </section>


      {/* ── INTERIOR MARKET / EXHIBITORS ── */}
      <section className={styles.marketSection} id="market">
        <div className={styles.marketContainer}>
          <div className={styles.marketContent}>
            <p className={styles.sectionEyebrow}>Display Interior Market</p>
            <h2 className={styles.sectionTitleLeft}>Come for the ideas.<br />Stay to explore the market.</h2>
            <p className={styles.marketText}>
              The Interior Market gives you a chance to see products and businesses up close instead of scrolling past them online.
              With 20+ exhibitors across furniture, beddings, building materials, solar and lighting, gadgets, décor, fabrics and other design-related categories, there will be plenty to explore.
            </p>
            <p className={styles.marketText}>
              You can discover new brands, speak directly with business owners, ask questions about their products and find things that could work for your next project, home or business.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'flex-start', marginTop: '2rem' }}>
              <a  href="https://wa.me/2348140617722?text=Hi%2C%20I%27m%20interested%20in%20sponsoring%20or%20exhibiting%20at%20the%20AKWA%20IBOM%20DESIGN%20SUMMIT." className={styles.primaryButton}>Become an Exhibitor</a>
            </div>
          </div>
          <div className={styles.marketImage}>
            <img src="/market.jpeg" alt="Interior Market" className={styles.marketImg} />
          </div>
        </div>
      </section>

      {/* ── SPONSORS & PARTNERS ── */}
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
        </div>

        <div className={styles.sponsorBanner}>
          <div className={styles.sponsorBannerLeft}>
            <p className={styles.sponsorEyebrow}>Become a sponsor or exhibitor</p>
            <h3 className={styles.sponsorTitle}>Put your brand in the<br />room where ideas move.</h3>
          </div>
          <div className={styles.sponsorBannerRight}>
            <div className={styles.sponsorBannerInnerCard}>
              <h4 className={styles.sponsorCardTitle}>Choose the right partnership level.</h4>
              <p className={styles.sponsorCardText}>
                Businesses that fit within the event\'s design, construction, home, technology and related categories can explore exhibitor opportunities.
              </p>
              <a
                href="https://wa.me/2348140617722?text=Hi%2C%20I%27m%20interested%20in%20sponsoring%20or%20exhibiting%20at%20the%20AKWA%20IBOM%20DESIGN%20SUMMIT."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                Contact Admin on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

       <div className={styles.sectionDivider}>
        <span className={styles.sectionDividerLine} />
        <span className={styles.sectionDividerMark}>
          <span className={styles.sectionDividerDash} />
          <span className={styles.sectionDividerDot} />
        </span>
        <span className={styles.sectionDividerLine} />
      </div>

      {/* ── CLASS CTA ── */}
      <section className={styles.classCtaSection}>
        <div className={styles.classCtaContainer}>

          <div className={styles.classCtaContent}>
            <p className={styles.classCtaEyebrow}>EXCLUSIVE MASTERCLASS</p>
            <h2 className={styles.classCtaTitle}>Take Your Skills to the Next Level</h2>
            <p className={styles.classCtaDesc}>
              Join our specialized design masterclass to gain deeper insights, practical techniques, and hands-on experience from industry leaders. This intensive session is designed for those who want to master their craft and accelerate their creative career.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIotH96fxRokMtDy4HzuYDio0hcnUrSZNHmsZTWuLLu_9-hw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className={styles.classCtaButton}>Register for Class</a>
          </div>
        </div>
      </section>

       <div className={styles.sectionDivider}>
        <span className={styles.sectionDividerLine} />
        <span className={styles.sectionDividerMark}>
          <span className={styles.sectionDividerDash} />
          <span className={styles.sectionDividerDot} />
        </span>
        <span className={styles.sectionDividerLine} />
      </div>

      {/* ── FAQ ── */}
      <section className={styles.faqSection} id="faq">
        <p className={styles.sectionEyebrow}>Frequently Asked Questions</p>
        <h2 className={styles.sectionTitleCenter}>Everything you need to know</h2>

        <div className={styles.faqGrid}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqCard}>
              <h4 className={styles.faqQuestion}>{faq.q}</h4>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.sectionDivider}>
        <span className={styles.sectionDividerLine} />
        <span className={styles.sectionDividerMark}>
          <span className={styles.sectionDividerDash} />
          <span className={styles.sectionDividerDot} />
        </span>
        <span className={styles.sectionDividerLine} />
      </div>

      {/* ── SOCIAL MEDIA ── */}
      <section className={styles.socialSection}>
        {/* <CornerShape color="#FF6B3D" className={`${styles.shapeCorner} ${styles.shapeTopLeft}`} />
        <CornerShape color="#2962FF" className={`${styles.shapeCorner} ${styles.shapeTopRight}`} />
        <CornerShape color="#2962FF" className={`${styles.shapeCorner} ${styles.shapeBottomLeft}`} />
        <CornerShape color="#FF6B3D" className={`${styles.shapeCorner} ${styles.shapeBottomRight}`} /> */}

        <div className={styles.socialInner}>
          <p className={styles.sectionEyebrow} style={{ textAlign: 'center' }}>Stay Connected</p>
          <h2 className={styles.socialTitle}>Follow the Conversation</h2>
          <p className={styles.socialDesc}>Join our growing community and stay up to date on speakers, sessions, and summit news.</p>

          <div className={styles.socialCard}>
            <div className={styles.socialCardHeader}>
              <img src="/brand4.png" alt="ADS 26 Brand" className={styles.socialCardBanner} />
            </div>

            <div className={styles.socialCardBody}>
              <div className={styles.socialCardAvatarRow}>
                <div className={styles.socialCardAvatar}>
                  <img src="/Logo2.png" alt="ADS 26 Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px' }} />
                </div>
                <a href="https://www.instagram.com/akwaibomdesignsummit?igsh=M3JsMTNzam4xcmxh" target="_blank" rel="noopener noreferrer" className={styles.socialFollowBtn}>Follow</a>
              </div>

              <div className={styles.socialCardInfo}>
                <div className={styles.socialCardNameRow}>
                  <span className={styles.socialCardName}>ADS &apos;26</span>
                  <svg className={styles.socialVerified} viewBox="0 0 24 24" fill="#1d9bf0" width="18" height="18"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81C14.67 2.63 13.43 1.75 12 1.75s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.63 9.33 1.75 10.57 1.75 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" /></svg>
                </div>
                <p className={styles.socialCardHandle}>@akwaibomdesignsummit_</p>
                <p className={styles.socialCardBio}>Inspiring Africa&apos;s next generation of designers through conversations, creativity, innovation, and collaboration.</p>
                <div className={styles.socialCardStats}>
                  <span><strong>500</strong> Following</span>
                  <span><strong>20k</strong> Followers</span>
                </div>
                <a href="https://akwaibomdesignsummit.com" target="_blank" rel="noopener noreferrer" className={styles.socialCardLink}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M11 17H7a5 5 0 0 1 0-10h4v2H7a3 3 0 0 0 0 6h4v2zm2 0h4a3 3 0 0 0 0-6h-4v-2h4a5 5 0 0 1 0 10h-4v-2zm-5-4v-2h8v2H8z" /></svg>
                  akwaibomdesignsummit.com
                </a>
              </div>
            </div>
          </div>

          <div className={styles.socialPlatforms}>
            <a href="https://www.facebook.com/share/1EKfP1G5Tk/" target="_blank" rel="noopener noreferrer" className={styles.socialPlatformBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M14 8h3V5h-3c-2.76 0-5 2.24-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-.55.45-1 1-1z" />
              </svg>
              Follow on Facebook
            </a>
            <a href="https://www.instagram.com/akwaibomdesignsummit?igsh=M3JsMTNzam4xcmxh" target="_blank" rel="noopener noreferrer" className={styles.socialPlatformBtnBlue}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA / REGISTRATION ── */}
      <section className={styles.ctaSection} id="register">
        <div className={styles.ctaBackgroundPlaceholder}>
          <img src="/design1.png" alt="Audience" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
        </div>

        <div className={styles.ctaContent}>
          <p className={styles.sectionEyebrow} style={{ color: '#FF6B3D', zIndex: 1, position: 'relative' }}>READY TO BE IN THE ROOM?</p>
          <h2 className={styles.ctaTitle} style={{ zIndex: 1, position: 'relative' }}>One day. A lot to see,<br />learn and talk about.</h2>
          <p className={styles.ctaDesc}>
            On October 23, designers, architects, engineers, creatives, businesses, students and other professionals will gather in Uyo to talk about the work behind beautiful spaces. You don\'t have to work in the industry. You just have to be interested enough to show up.
          </p>
          <div className={styles.ctaActions}>
            <a href="https://www.tixo.online/akwa-ibom-design-summit-2026" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimaryBtn} style={{ textDecoration: 'none' }}>REGISTER FOR EVENT</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIotH96fxRokMtDy4HzuYDio0hcnUrSZNHmsZTWuLLu_9-hw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondaryBtn} style={{ textDecoration: 'none' }}>REGISTER FOR CLASS</a>
          </div>
          <h1 className={styles.bigFooterText}>AKWA IBOM<br />DESIGN SUMMIT</h1>
          <p className={styles.footerSubText}>
            October 23, 2026 | Uyo, Akwa Ibom<br />
            Organised by Vizid: Live Luxury
          </p>
        </div>
      </section>

    </main>
  );
}
