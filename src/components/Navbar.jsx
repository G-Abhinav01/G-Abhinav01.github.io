import { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink, Code2, Sparkles, FileText } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: '16px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 20px',
        pointerEvents: 'none',
      }}
    >
      <nav
        style={{
          width: '100%',
          maxWidth: '1180px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          borderRadius: '9999px',
          background: scrolled
            ? 'rgba(6, 11, 28, 0.82)'
            : 'rgba(8, 14, 34, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.09)',
          boxShadow: scrolled
            ? '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 242, 254, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#fff',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.2rem',
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#030611',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)',
            }}
          >
            <Code2 size={18} strokeWidth={2.5} />
          </div>
          <span>
            G <span style={{ color: 'var(--cyan)' }}>Abhinav</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '4px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  position: 'relative',
                  padding: '8px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: isActive ? 'var(--cyan)' : 'var(--text-muted)',
                  background: isActive ? 'rgba(0, 242, 254, 0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(0, 242, 254, 0.25)' : '1px solid transparent',
                  transition: 'all 0.25s ease',
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://drive.google.com/file/d/1Fp78dHZzr_OlKjfPPCVcBUrxTEmFB8pm/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-primary"
            style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              borderRadius: '9999px',
            }}
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
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
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '90px',
            left: '20px',
            right: '20px',
            background: 'rgba(6, 11, 28, 0.96)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            borderRadius: '24px',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
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
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '12px 18px',
                borderRadius: '12px',
                color: activeSection === link.href.substring(1) ? 'var(--cyan)' : '#f1f5f9',
                background:
                  activeSection === link.href.substring(1)
                    ? 'rgba(0, 242, 254, 0.1)'
                    : 'rgba(255, 255, 255, 0.03)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
