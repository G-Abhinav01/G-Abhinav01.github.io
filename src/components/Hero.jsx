import FluidCoreCanvas from './FluidCoreCanvas';
import { FileText, ArrowUpRight, Terminal, Globe, Shield, Database, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Hero() {
  const marqueeItems = [
    'NEXT.JS 16 APP ROUTER',
    'REACT 19',
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
        <div style={{ maxWidth: '960px' }}>
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
              href="https://drive.google.com/file/d/1Fp78dHZzr_OlKjfPPCVcBUrxTEmFB8pm/view?usp=drivesdk"
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
    </section>
  );
}
