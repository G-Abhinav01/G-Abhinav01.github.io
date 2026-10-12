import FluidCoreCanvas from './FluidCoreCanvas';
import TiltCard from './TiltCard';
import { FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Hero() {
  const marqueeItems = [
    'NEXT.JS 16 APP ROUTER',
    'REACT 19',
    'C++ & DSA',
    'PYTHON',
    'SUPABASE POSTGRESQL',
    'ROW LEVEL SECURITY (RLS)',
    'MICROSOFT SQL SERVER',
    'SSMS & SSRS',
    'CLIENT-FACING UAT',
    'TYPESCRIPT 5',
    'TAILWIND CSS 4',
    'SERVER ACTIONS',
    'NETLIFY PRODUCTION',
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '130px',
        paddingBottom: '40px',
        overflow: 'hidden',
      }}
    >
      {/* 3D Liquid Chrome Realtime Canvas */}
      <FluidCoreCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Monumental Headline & Core Details */}
          <div style={{ maxWidth: '820px' }}>
            {/* Eyebrow Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <span className="accent-pill">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--acid-lime)' }} />
                Client-Facing Solutions &amp; Full-Stack Systems
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-dim)',
                }}
              >
                [FULL-STACK // 2026]
              </span>
            </div>

            {/* Colossal Kinetic Typography */}
            <h1 className="display-huge" style={{ marginBottom: '24px' }}>
              <span>FULL-STACK</span>
              <br />
              <span className="text-outline">ARCHITECT</span>
              <br />
              <span style={{ color: 'var(--text-pure)' }}>&amp; DEVELOPER.</span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                color: 'var(--text-muted)',
                lineHeight: '1.5',
                maxWidth: '680px',
                marginBottom: '36px',
              }}
            >
              I engineer production web platforms with <strong style={{ color: '#fff' }}>Next.js 16</strong>,{' '}
              <strong style={{ color: '#fff' }}>React 19</strong>, and <strong style={{ color: '#fff' }}>TypeScript</strong>,{' '}
              grounded in strong <strong style={{ color: '#fff' }}>C++</strong> and <strong style={{ color: '#fff' }}>Python</strong> fundamentals,{' '}
              while leading enterprise database implementations with <strong style={{ color: '#fff' }}>Microsoft SQL Server</strong>,{' '}
              <strong style={{ color: '#fff' }}>SSMS</strong>, and client-facing UAT go-lives.
            </p>

            {/* Kinetic Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '48px',
              }}
            >
              <a
                href="#projects"
                data-cursor="INSPECT"
                className="btn-primary-kinetic"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
              >
                <span>Explore Client Projects</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://drive.google.com/file/d/1EK7DX-XF90pNxIkMzqQczs4ENNMKBsrr/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="PDF"
                className="btn-ghost-kinetic"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
              >
                <FileText size={18} />
                <span>Full Resume</span>
              </a>

              <a
                href="#terminal"
                data-cursor="SHELL"
                className="btn-ghost-kinetic"
                style={{ padding: '15px 20px' }}
                title="Interactive Terminal"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
              >
                <Terminal size={18} color="var(--acid-lime)" />
              </a>
            </div>

            {/* Architectural Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                paddingTop: '32px',
                borderTop: '1px solid var(--border-hairline)',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '4px' }}>
                  FLAGSHIP CLIENT SYSTEM
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>
                  India24x7.live
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--acid-lime)', fontFamily: 'var(--font-mono)' }}>
                  7 Dynamic CMS Modules • Netlify
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '4px' }}>
                  ENTERPRISE STACK
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>
                  Microsoft SQL Server
                </div>
                <div style={{ fontSize: '0.8rem', color: '#818cf8', fontFamily: 'var(--font-mono)' }}>
                  SSMS • SSRS • IIS • Stored Procs
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '4px' }}>
                  DELIVERY SPECIALTY
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>
                  Client-Facing UAT
                </div>
                <div style={{ fontSize: '0.8rem', color: '#e4e4e7', fontFamily: 'var(--font-mono)' }}>
                  Dry Runs • Pilot • Go-Live
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact 3D Parallax Glass Portrait Card */}
          <div
            className="hero-portrait-wrapper"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TiltCard
              maxTilt={16}
              scale={1.04}
              style={{
                width: '100%',
                maxWidth: '240px',
                borderRadius: '24px',
              }}
            >
              <div
                className="arch-card"
                style={{
                  padding: '20px',
                  borderRadius: '24px',
                  background: 'linear-gradient(165deg, rgba(20, 24, 36, 0.85) 0%, rgba(10, 12, 18, 0.95) 100%)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(198, 255, 0, 0.08)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Header Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  <span style={{ color: 'var(--acid-lime)' }}>DEV // ID-01</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--acid-lime)',
                        boxShadow: '0 0 8px var(--acid-lime)',
                      }}
                    />
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* 3D Depth Image with Conic Halo */}
                <div
                  style={{
                    position: 'relative',
                    width: '170px',
                    height: '170px',
                    margin: '0 auto 14px',
                    transform: 'translateZ(25px)',
                  }}
                >
                  {/* Rotating Ambient Gradient Halo */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-4px',
                      borderRadius: '22px',
                      background: 'conic-gradient(from 0deg, var(--acid-lime), #818cf8, #ffffff, var(--acid-lime))',
                      animation: 'spin-halo 10s linear infinite',
                      opacity: 0.75,
                      filter: 'blur(2px)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: '2px',
                      borderRadius: '20px',
                      background: '#090a0f',
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
                      borderRadius: '18px',
                      objectFit: 'cover',
                      zIndex: 2,
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                    }}
                  />
                </div>

                {/* Profile Caption */}
                <div style={{ textAlign: 'center', transform: 'translateZ(15px)' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1.15rem',
                      color: '#fff',
                      marginBottom: '2px',
                    }}
                  >
                    G Abhinav
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--acid-lime)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Full-Stack &amp; Solutions
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Kinetic Velocity Marquee Ticker */}
      <div className="marquee-wrapper" style={{ marginTop: '60px' }}>
        <div className="marquee-content">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.1rem',
                letterSpacing: '0.06em',
                color: 'var(--text-dim)',
              }}
            >
              <span>{item}</span>
              <span style={{ color: 'var(--acid-lime)' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-halo {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .hero-portrait-wrapper {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
