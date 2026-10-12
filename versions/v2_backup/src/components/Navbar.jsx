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
    <header
      style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 24px',
        pointerEvents: 'none',
      }}
    >
      <nav
        style={{
          width: '100%',
          maxWidth: '1280px',
          height: '66px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
          borderRadius: '16px',
          background: scrolled
            ? 'rgba(10, 12, 18, 0.88)'
            : 'rgba(14, 16, 24, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border-hairline)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto',
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
            gap: '12px',
            textDecoration: 'none',
            color: '#fff',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.03em',
          }}
        >
          <span style={{ color: 'var(--acid-lime)' }}>●</span>
          <span>G ABHINAV</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.08em',
              paddingLeft: '6px',
            }}
          >
            / DEV
          </span>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
              padding: '8px 12px',
              borderRadius: '10px',
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
            href="https://drive.google.com/file/d/1Fp78dHZzr_OlKjfPPCVcBUrxTEmFB8pm/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="RESUME"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--text-pure)',
              color: '#08090d',
              padding: '8px 18px',
              borderRadius: '10px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.85rem',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--acid-lime)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'var(--text-pure)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
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
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-hairline)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '95px',
            left: '20px',
            right: '20px',
            background: 'rgba(12, 14, 22, 0.98)',
            backdropFilter: 'blur(30px)',
            borderRadius: '20px',
            border: '1px solid var(--border-hairline)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 999,
            pointerEvents: 'auto',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                sound.playClick();
                setMobileOpen(false);
              }}
              style={{
                padding: '14px 18px',
                borderRadius: '12px',
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.03)',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.05rem',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
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
