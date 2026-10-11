import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        background: 'rgba(3, 6, 17, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '48px',
        paddingBottom: '40px',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {/* Logo & Philosophy */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#fff',
                marginBottom: '8px',
              }}
            >
              <span>G</span>
              <span style={{ color: 'var(--cyan)' }}>Abhinav</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '380px' }}>
              Crafting intelligent systems, high-utility Android apps, and interactive web experiences.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://github.com/G-Abhinav01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <GithubIcon size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/g-abhinav-138a39252/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href="https://x.com/GAbhinav_001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <TwitterIcon size={20} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="btn-cyber-outline"
              style={{
                width: '42px',
                height: '42px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono)',
            color: '#64748b',
          }}
        >
          <div>&copy; {new Date().getFullYear()} G Abhinav. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Engineered with React 19 + Vite + Three.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
