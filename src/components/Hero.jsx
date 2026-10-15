import FluidCoreCanvas from './FluidCoreCanvas';
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
        paddingTop: 'clamp(95px, 14vw, 140px)',
        paddingBottom: 'clamp(30px, 6vw, 50px)',
        overflow: 'hidden',
      }}
    >
      {/* 3D Liquid Chrome Realtime Canvas */}
      <FluidCoreCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '980px' }}>
          {/* Eyebrow Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span className="accent-pill">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--acid-lime)' }} />
              Client-Facing Solutions &amp; Full-Stack Systems
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
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
              fontSize: 'clamp(1rem, 2vw, 1.45rem)',
              color: 'var(--text-muted)',
              lineHeight: '1.55',
              maxWidth: '680px',
              marginBottom: '32px',
            }}
          >
            I engineer production web platforms with <strong style={{ color: '#fff' }}>Next.js 16</strong>,{' '}
            <strong style={{ color: '#fff' }}>React 19</strong>, and <strong style={{ color: '#fff' }}>TypeScript</strong>,{' '}
            grounded in strong <strong style={{ color: '#fff' }}>C++</strong> and <strong style={{ color: '#fff' }}>Python</strong> fundamentals,{' '}
            while leading enterprise database implementations with <strong style={{ color: '#fff' }}>Microsoft SQL Server</strong>,{' '}
            <strong style={{ color: '#fff' }}>SSMS</strong>, and client-facing UAT go-lives.
          </p>

          {/* Kinetic Actions */}
          <div className="hero-actions">
            <a
              href="#projects"
              data-cursor="INSPECT"
              className="btn-primary-kinetic hero-btn-main"
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
              className="btn-ghost-kinetic hero-btn-sub"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
            >
              <FileText size={18} />
              <span>Full Resume</span>
            </a>

            <a
              href="#terminal"
              data-cursor="SHELL"
              className="btn-ghost-kinetic hero-btn-term"
              title="Interactive Terminal"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
            >
              <Terminal size={18} color="var(--acid-lime)" />
            </a>
          </div>

          {/* Architectural Metrics Bar */}
          <div className="hero-metrics-grid">
            <div className="hero-metric-card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '4px', letterSpacing: '0.06em' }}>
                FLAGSHIP CLIENT SYSTEM
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>
                India24x7.live
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--acid-lime)', fontFamily: 'var(--font-mono)' }}>
                7 Dynamic CMS Modules • Netlify
              </div>
            </div>

            <div className="hero-metric-card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '4px', letterSpacing: '0.06em' }}>
                ENTERPRISE STACK
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>
                Microsoft SQL Server
              </div>
              <div style={{ fontSize: '0.8rem', color: '#818cf8', fontFamily: 'var(--font-mono)' }}>
                SSMS • SSRS • IIS • Stored Procs
              </div>
            </div>

            <div className="hero-metric-card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '4px', letterSpacing: '0.06em' }}>
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
      </div>

      <style>{`
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
          margin-bottom: 40px;
        }
        .hero-btn-term {
          padding: 15px 20px;
        }
        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          padding-top: 28px;
          border-top: 1px solid var(--border-hairline);
        }

        @media (max-width: 640px) {
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            margin-bottom: 32px;
          }
          .hero-btn-main, .hero-btn-sub {
            width: 100%;
            justify-content: center;
          }
          .hero-btn-term {
            display: none;
          }
          .hero-metrics-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding-top: 20px;
          }
          .hero-metric-card {
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .hero-metric-card:last-child {
            border-bottom: none;
          }
        }
      `}</style>

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
    </section>
  );
}
