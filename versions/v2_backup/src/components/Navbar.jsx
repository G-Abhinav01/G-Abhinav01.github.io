import { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, FileText, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Proficiencies', href: '#skills' },
    { name: 'Console', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const isNowOn = sound.toggle();
    setAudioActive(isNowOn);
    if (isNowOn) sound.playClick();
  };

  return (
    <header className="site-header">
      <nav
        className="site-nav"
        style={{
          background: scrolled
            ? 'rgba(10, 12, 18, 0.92)'
            : 'rgba(14, 16, 24, 0.72)',
        }}
      >
        {/* Brand Typography */}
        <a
          href="#home"
          data-cursor="HOME"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#fff',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            letterSpacing: '-0.03em',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: 'var(--acid-lime)' }}>●</span>
          <span>G ABHINAV</span>
          <span className="brand-sub">/ DEV</span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor="GO"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              style={{
                fontSize: '0.86rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-pure)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA & Sound Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Audio Synthesizer Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            data-cursor="AUDIO"
            title={audioActive ? 'Mute Sound FX' : 'Enable Interactive Sound FX'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 10px',
              borderRadius: '9px',
              background: audioActive ? 'rgba(198, 255, 0, 0.12)' : 'rgba(255, 255, 255, 0.04)',
              border: audioActive ? '1px solid var(--acid-lime)' : '1px solid var(--border-hairline)',
              color: audioActive ? 'var(--acid-lime)' : 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {audioActive ? <Volume2 size={14} /> : <VolumeX size={14} />}
            <span style={{ display: 'none' }} className="sound-label">
              {audioActive ? 'FX ON' : 'FX OFF'}
            </span>
          </button>

          {/* Resume Link */}
          <a
            href="https://drive.google.com/file/d/1EK7DX-XF90pNxIkMzqQczs4ENNMKBsrr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="RESUME"
            className="nav-resume-btn"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
          >
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="mobile-toggle"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '9px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-hairline)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileOpen(false);
                }}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  color: '#fff',
                  background: 'rgba(255, 255, 255, 0.03)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.name}</span>
                <span style={{ color: 'var(--acid-lime)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>→</span>
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1EK7DX-XF90pNxIkMzqQczs4ENNMKBsrr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                sound.playClick();
                setMobileOpen(false);
              }}
              style={{
                marginTop: '8px',
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'var(--acid-lime)',
                color: '#08090d',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <FileText size={16} />
              <span>View Full Resume (PDF)</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        .site-header {
          position: fixed;
          top: 20px;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          padding: 0 24px;
          pointer-events: none;
        }
        .site-nav {
          width: 100%;
          max-width: 1280px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          border-radius: 16px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-hairline);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
        }
        .brand-sub {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-dim);
          letter-spacing: 0.08em;
          padding-left: 4px;
        }
        .nav-resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--text-pure);
          color: #08090d;
          padding: 7px 14px;
          border-radius: 9px;
          font-family: var(--font-display);
          fontWeight: 800;
          font-size: 0.82rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .nav-resume-btn:hover {
          background: var(--acid-lime);
        }
        .mobile-drawer {
          position: fixed;
          top: 90px;
          left: 20px;
          right: 20px;
          background: rgba(12, 14, 22, 0.98);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border-radius: 20px;
          border: 1px solid var(--border-hairline);
          padding: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          z-index: 999;
          pointer-events: auto;
        }

        @media (max-width: 640px) {
          .site-header {
            top: 12px;
            padding: 0 12px;
          }
          .site-nav {
            height: 56px;
            padding: 0 14px;
            border-radius: 12px;
          }
          .brand-sub {
            display: none;
          }
          .mobile-drawer {
            top: 76px;
            left: 12px;
            right: 12px;
            padding: 16px;
            border-radius: 16px;
          }
          .nav-resume-btn {
            display: none;
          }
        }

        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .sound-label {
            display: inline !important;
          }
        }
      `}</style>
    </header>
  );
}
