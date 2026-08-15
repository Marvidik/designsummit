import Link from 'next/link';
import CornerShape from '../components/CornerShape';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Akwa Ibom Design Summit',
  description: 'This page does not exist. Head back to the Akwa Ibom Design Summit.',
};

export default function NotFound() {
  return (
    <main style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#111827',
      overflow: 'hidden',
      padding: '2rem',
      fontFamily: "'Inter', 'Outfit', system-ui, sans-serif",
    }}>
      {/* Corner brand shapes */}
      <CornerShape color="#2962FF" className="shape-tl" />
      <CornerShape color="#FF6B3D" className="shape-tr" />
      <CornerShape color="#FF6B3D" className="shape-bl" />
      <CornerShape color="#2962FF" className="shape-br" />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '620px' }}>
        {/* Big 404 text */}
        <div style={{
          fontSize: 'clamp(7rem, 22vw, 14rem)',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.05em',
          marginBottom: '0.25rem',
          background: 'linear-gradient(135deg, #FF6B3D 0%, #FF855C 40%, #2962FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          404
        </div>

        {/* Divider line */}
        <div style={{
          width: '60px',
          height: '4px',
          background: 'linear-gradient(90deg, #FF6B3D, #2962FF)',
          borderRadius: '2px',
          margin: '0 auto 2rem',
        }} />

        {/* Eyebrow */}
        <p style={{
          color: '#FF6B3D',
          fontWeight: 700,
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '1rem',
        }}>
          AKWA IBOM DESIGN SUMMIT — OCT 17, 2026
        </p>

        <h1 style={{
          color: '#fff',
          fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: '1rem',
        }}>
          This page doesn&apos;t exist yet.
        </h1>

        <p style={{
          color: '#9ca3af',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          maxWidth: '480px',
          margin: '0 auto 2.5rem',
        }}>
          Looks like you wandered into the wrong room. The summit is real — this page isn&apos;t. Head back to find speakers, sessions, and everything in between.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{
            background: '#FF6B3D',
            color: '#fff',
            padding: '0.9rem 2rem',
            borderRadius: '2rem',
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            transition: 'background 0.2s',
            display: 'inline-block',
          }}>
            Back to Home
          </Link>
          <a
            href="https://www.tixo.online/akwa-ibom-design-summit-2026"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent',
              color: '#2962FF',
              border: '1.5px solid #2962FF',
              padding: '0.9rem 2rem',
              borderRadius: '2rem',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Register for Event
          </a>
        </div>
      </div>

      {/* Inline styles for corner shapes — bypasses CSS modules */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111827; }
        .shape-tl {
          position: absolute; pointer-events: none; z-index: 0; opacity: 1;
          top: -40px; left: -40px; width: 350px; height: 350px;
          transform: rotate(-45deg);
        }
        .shape-tr {
          position: absolute; pointer-events: none; z-index: 0; opacity: 1;
          top: -40px; right: -40px; width: 350px; height: 350px;
          transform: rotate(45deg);
        }
        .shape-bl {
          position: absolute; pointer-events: none; z-index: 0; opacity: 1;
          bottom: -40px; left: -40px; width: 350px; height: 350px;
          transform: rotate(-135deg);
        }
        .shape-br {
          position: absolute; pointer-events: none; z-index: 0; opacity: 1;
          bottom: -40px; right: -40px; width: 350px; height: 350px;
          transform: rotate(135deg);
        }
        @media (max-width: 768px) {
          .shape-tl, .shape-tr, .shape-bl, .shape-br { width: 180px; height: 180px; }
        }
      `}</style>
    </main>
  );
}
