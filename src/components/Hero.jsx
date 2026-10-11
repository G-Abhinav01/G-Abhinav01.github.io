import { useState, useEffect } from 'react';
import HeroCanvas from './HeroCanvas';
import TiltCard from './TiltCard';
import {
  FileText,
  Code2,
  Mail,
  BookOpen,
  ArrowDown,
  Sparkles,
  Terminal,
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from './SocialIcons';

const ROLES = [
  'Full-Stack Web Developer',
  'Software Engineer',
  'Next.js & React Specialist',
  'SQL & Database Systems',
  'Client-Facing Solutions Dev',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setFadeState('fade-in');
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail size={18} />,
      href: 'mailto:abhinav.achiver01@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon size={18} />,
      href: 'https://www.linkedin.com/in/g-abhinav-138a39252/',
    },
    {
      name: 'GitHub',
      icon: <GithubIcon size={18} />,
      href: 'https://github.com/G-Abhinav01',
    },
    {
      name: 'X',
      icon: <TwitterIcon size={18} />,
      href: 'https://x.com/GAbhinav_001',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon size={18} />,
      href: 'https://www.instagram.com/achiver_abhinav/',
    },
    {
      name: 'Medium',
      icon: <BookOpen size={18} />,
      href: 'https://abhinav-achiver001.medium.com/',
    },
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Three.js Interactive 3D WebGL Canvas */}
      <HeroCanvas />

      {/* Ambient background glows */}
      <div
        className="ambient-glow glow-cyan"
        style={{ top: '20%', left: '15%', width: '380px', height: '380px' }}
      />
      <div
        className="ambient-glow glow-purple"
        style={{ bottom: '15%', right: '10%', width: '420px', height: '420px' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Hero Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Status Pill */}
            <div style={{ display: 'flex' }}>
              <div className="cyber-badge">
                <span className="pulse-dot" />
                <span>Open for Opportunities • Full-Stack Web &amp; Solutions</span>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan)',
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}
              >
                &lt;Full-Stack Engineer /&gt;
              </p>
              <h1
                style={{
                  fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                  lineHeight: '1.08',
                  marginBottom: '14px',
                }}
              >
                I'm <span className="text-gradient">G Abhinav</span>
              </h1>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.3rem, 2.8vw, 2.1rem)',
                  color: '#e2e8f0',
                  fontWeight: 600,
                }}
              >
                <span style={{ color: 'var(--text-muted)' }}>I build as a</span>
                <span
                  className="text-gradient-cyan"
                  style={{
                    display: 'inline-block',
                    transition: 'opacity 0.35s ease, transform 0.35s ease',
                    opacity: fadeState === 'fade-in' ? 1 : 0,
                    transform:
                      fadeState === 'fade-in'
                        ? 'translateY(0)'
                        : 'translateY(8px)',
                  }}
                >
                  {ROLES[roleIndex]}
                </span>
              </div>
            </div>

            {/* Sub-paragraph */}
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                maxWidth: '560px',
              }}
            >
              Full-Stack Web Developer &amp; Software Engineer experienced in{' '}
              <strong style={{ color: '#fff' }}>Next.js</strong>,{' '}
              <strong style={{ color: '#fff' }}>React 19</strong>,{' '}
              <strong style={{ color: '#fff' }}>TypeScript</strong>,{' '}
              <strong style={{ color: '#fff' }}>Microsoft SQL Server</strong>, and{' '}
              <strong style={{ color: '#fff' }}>Supabase</strong>. Specialized in client-facing
              enterprise implementations, database systems (SSMS/SSRS), UAT &amp; go-live deployments, and
              architecting production-grade digital platforms.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'center',
              }}
            >
              <a
                href="https://drive.google.com/file/d/1Fp78dHZzr_OlKjfPPCVcBUrxTEmFB8pm/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber-primary"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </a>

              <a href="#projects" className="btn-cyber-outline">
                <Code2 size={18} />
                <span>Explore Projects</span>
              </a>

              <a
                href="#terminal"
                className="btn-cyber-outline"
                style={{
                  padding: '12px 18px',
                  borderColor: 'rgba(0, 242, 254, 0.3)',
                }}
                title="Launch Live Terminal"
              >
                <Terminal size={18} color="var(--cyan)" />
              </a>
            </div>

            {/* Social Links Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '8px',
              }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-muted)',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--cyan)';
                    e.currentTarget.style.borderColor = 'var(--cyan)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Holographic Profile Avatar & Tech Status Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <TiltCard
              maxTilt={14}
              scale={1.03}
              style={{
                width: '100%',
                maxWidth: '380px',
                borderRadius: '24px',
              }}
            >
              <div
                className="glass-panel"
                style={{
                  padding: '24px',
                  borderRadius: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(14, 22, 51, 0.85) 0%, rgba(6, 11, 28, 0.95) 100%)',
                  border: '1px solid rgba(0, 242, 254, 0.25)',
                }}
              >
                {/* Decorative Cyber Card Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#64748b',
                  }}
                >
                  <span style={{ color: 'var(--cyan)' }}>DEV-ID: FULLSTACK-01</span>
                  <span>STATUS: PRODUCTION</span>
                </div>

                {/* Profile Image with Cyber Ring */}
                <div
                  style={{
                    position: 'relative',
                    width: '190px',
                    height: '190px',
                    margin: '0 auto 20px',
                  }}
                >
                  {/* Rotating Gradient Ring */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-6px',
                      borderRadius: '50%',
                      background: 'conic-gradient(from 0deg, #00f2fe, #7928ca, #3b82f6, #00f2fe)',
                      animation: 'spin 8s linear infinite',
                      opacity: 0.85,
                      filter: 'blur(2px)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: '2px',
                      borderRadius: '50%',
                      background: '#060b1c',
                      zIndex: 1,
                    }}
                  />
                  <img
                    src="/Images/profile.jpg"
                    alt="G Abhinav"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      zIndex: 2,
                      border: '3px solid rgba(0, 242, 254, 0.4)',
                    }}
                  />
                  {/* Verified Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '6px',
                      right: '6px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#00f2fe',
                      color: '#030611',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3,
                      boxShadow: '0 0 12px #00f2fe',
                    }}
                  >
                    <Sparkles size={16} />
                  </div>
                </div>

                {/* Card Title & Info */}
                <div style={{ textAlign: 'center', marginBottom: '18px' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>G Abhinav</h3>
                  <p style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    Full-Stack Web Developer &amp; Solutions
                  </p>
                </div>

                {/* Mini Tech Metrics Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    background: 'rgba(0, 0, 0, 0.35)',
                    padding: '12px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '1.05rem' }}>
                      Next / TS
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase' }}>Frontend</div>
                  </div>
                  <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.08)', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--cyan)', fontSize: '1.05rem' }}>
                      SQL / SSMS
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase' }}>Database</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#a855f7', fontSize: '1.05rem' }}>
                      Client UAT
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase' }}>Delivery</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <a
            href="#about"
            aria-label="Scroll down to About section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-dim)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              SCROLL
            </span>
            <div style={{ animation: 'bounce 2s infinite' }}>
              <ArrowDown size={18} />
            </div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
}
