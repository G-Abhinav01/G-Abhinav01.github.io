import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { sound } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        background: '#06070a',
        borderTop: '1px solid var(--border-hairline)',
        paddingTop: '64px',
        paddingBottom: '48px',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Giant Outlined Typography Statement */}
        <div style={{ marginBottom: '40px' }}>
          <div
            className="text-outline"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
              lineHeight: 0.95,
              fontWeight: 800,
              userSelect: 'none',
            }}
          >
            G ABHINAV
          </div>
        </div>

        {/* Sub-bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            paddingTop: '28px',
            borderTop: '1px solid var(--border-hairline)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            &copy; {new Date().getFullYear()} G Abhinav • Full-Stack Web Developer &amp; Solutions
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://github.com/G-Abhinav01"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              onMouseEnter={() => sound.playHover()}
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--acid-lime)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/g-abhinav-138a39252/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LINKEDIN"
              onMouseEnter={() => sound.playHover()}
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--acid-lime)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href="https://x.com/GAbhinav_001"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="X"
              onMouseEnter={() => sound.playHover()}
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--acid-lime)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <TwitterIcon size={18} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              data-cursor="TOP"
              className="btn-ghost-kinetic"
              style={{
                width: '40px',
                height: '40px',
                padding: 0,
                borderRadius: '10px',
                marginLeft: '8px',
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
