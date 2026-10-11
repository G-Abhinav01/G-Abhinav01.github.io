import { useState } from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  Server,
  Layers,
  Database,
  Globe,
  CheckCircle2,
  Cpu,
  Lock,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { sound } from '../utils/sound';

export default function Projects() {
  const [activeModuleTab, setActiveModuleTab] = useState('cms');

  const secondaryProjects = [
    {
      num: '02',
      title: 'YumCha.ai',
      category: 'AI / MACHINE LEARNING',
      subtitle: 'AI-Driven Culinary Recipe Generation Platform',
      description:
        'Converts user pantry constraints, time limits, and dietary profiles into tailored recipe recommendations using prompt pipelines and structured machine learning workflows.',
      tags: ['Python', 'AI Pipelines', 'Personalization Engine', 'Responsive UI'],
      github: 'https://github.com/G-Abhinav01/YumCha.ai',
      image: '/Images/YumCha.jpg',
    },
    {
      num: '03',
      title: 'Aether Notes',
      category: 'UTILITY & ARCHITECTURE',
      subtitle: 'Hierarchical Notes & Task Management System',
      description:
        'Productivity architecture featuring nested folder hierarchies, custom tagging, offline-first persistence, and planned AI document summarization.',
      tags: ['Productivity', 'Nested Hierarchy', 'State Synchronization', 'Clean Arch'],
      github: 'https://github.com/G-Abhinav01/Aether-notes-app',
      image: '/Images/Aether.jpg',
    },
    {
      num: '04',
      title: 'O-Siyar.ai',
      category: 'COMPUTER VISION / APIS',
      subtitle: 'OCR & Multilingual Speech Synthesis Utility',
      description:
        'Optical Character Recognition utility extracting text from uploaded images, paired with instant multi-language translation and speech audio narration via Google APIs.',
      tags: ['Python', 'OCR', 'Google APIs', 'Speech Synthesis', 'Web Utility'],
      github: 'https://github.com/G-Abhinav01/O-Siyar.ai',
      image: '/Images/O-siyar.jpg',
    },
  ];

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-eyebrow">
            <span>[01 // CASE STUDY]</span>
            <span>Production Engineering</span>
          </div>
          <h2 className="section-headline">
            Featured Works &amp; <br />
            <span style={{ color: 'var(--acid-lime)' }}>Client Deployments.</span>
          </h2>
        </div>

        {/* Flagship Hero Stage: India24x7.live */}
        <div
          className="arch-card"
          style={{
            padding: '36px',
            marginBottom: '60px',
            background: 'linear-gradient(170deg, #12141c 0%, #0a0b10 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingBottom: '24px',
              borderBottom: '1px solid var(--border-hairline)',
              marginBottom: '32px',
            }}
          >
            <div>
              <span className="accent-pill" style={{ marginBottom: '8px' }}>
                CLIENT PRODUCTION PROJECT • LIVE
              </span>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
                India24x7.live
              </h3>
              <p style={{ color: 'var(--acid-lime)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                Full-Stack Dynamic News Platform &amp; Multi-Module Admin CMS
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://india24x7.live"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="VISIT"
                className="btn-primary-kinetic"
                style={{ padding: '12px 24px', fontSize: '0.88rem' }}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
              >
                <Globe size={16} />
                <span>Visit india24x7.live</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://github.com/G-Abhinav01"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="REPO"
                className="btn-ghost-kinetic"
                style={{ padding: '12px 20px', fontSize: '0.88rem' }}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
              >
                <GithubIcon size={16} />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* Interactive Split View: Architecture Inspector + Mockup */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            {/* Left: Architecture Deep-Dive Tabs */}
            <div>
              {/* Tab Selector */}
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '24px',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '12px',
                }}
              >
                {[
                  { id: 'cms', label: '7 CMS Engines' },
                  { id: 'security', label: 'RLS & Security' },
                  { id: 'infra', label: 'Netlify & DNS' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setActiveModuleTab(tab.id);
                    }}
                    style={{
                      background: activeModuleTab === tab.id ? 'rgba(198, 255, 0, 0.1)' : 'transparent',
                      border: activeModuleTab === tab.id ? '1px solid var(--acid-lime)' : '1px solid transparent',
                      color: activeModuleTab === tab.id ? 'var(--acid-lime)' : 'var(--text-muted)',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: CMS Modules */}
              {activeModuleTab === 'cms' && (
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#fff' }}>
                    Database-Backed Content Engine
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    Implemented a full-featured admin CMS structured around 7 operational modules rather than a simple static site:
                  </p>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '10px',
                    }}
                  >
                    {[
                      'Articles CRUD & Genre Filtering',
                      'Homepage Slots Override',
                      'Breaking News Ticker Engine',
                      'Video / V-Major Rails',
                      'Live Advertisement Placement',
                      'Live Updates Ribbon',
                      'Global Site Settings',
                      'Internal Article Search Linker',
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.82rem',
                          color: '#e4e4e7',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <span style={{ color: 'var(--acid-lime)' }}>✔</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Security & RLS */}
              {activeModuleTab === 'security' && (
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#fff' }}>
                    Zero-Trust Security &amp; Sanitization
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    Hardened mutation boundaries and database access rules verified through rigorous production audits:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      'PostgreSQL Row Level Security (RLS) policies isolating public reads from privileged writes',
                      'Server-side admin authorization checking app_metadata.role = "admin"',
                      'DOMPurify server-side HTML sanitization preventing XSS attacks',
                      'Next.js Server Actions used strictly as secure mutation boundaries (no public service keys)',
                    ].map((sec, i) => (
                      <li key={i} style={{ fontSize: '0.84rem', color: '#cbd5e1', display: 'flex', gap: '8px' }}>
                        <Lock size={14} color="var(--acid-lime)" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tab 3: Infrastructure & Netlify */}
              {activeModuleTab === 'infra' && (
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#fff' }}>
                    Domain Cutover &amp; Performance
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    Configured end-to-end cloud infrastructure from Git repository to live public DNS:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      'GoDaddy DNS records management & cutover to india24x7.live and www routing',
                      'Netlify Edge deployment configured with netlify.toml and Node LTS environment',
                      '23 static and dynamic routes compiled with zero build or type errors',
                      'SEO canonical URLs, Open Graph metadata, sitemap.xml, and robots.txt generation',
                    ].map((inf, i) => (
                      <li key={i} style={{ fontSize: '0.84rem', color: '#cbd5e1', display: 'flex', gap: '8px' }}>
                        <Server size={14} color="#818cf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{inf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '24px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-hairline)',
                }}
              >
                {[
                  'Next.js 16',
                  'React 19',
                  'TypeScript 5',
                  'Tailwind CSS 4',
                  'Supabase',
                  'PostgreSQL',
                  'Server Actions',
                  'Netlify',
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#e4e4e7',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Actual Mockup Presentation */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
              }}
            >
              <img
                src="/Images/india24x7.jpg"
                alt="India24x7.live Platform"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(10, 11, 16, 0.95) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {secondaryProjects.map((p) => (
            <div
              key={p.num}
              className="arch-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1.8rem',
                      color: 'var(--text-dim)',
                    }}
                  >
                    {p.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--acid-lime)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                <div
                  style={{
                    position: 'relative',
                    height: '180px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    border: '1px solid var(--border-hairline)',
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '4px' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '12px' }}>
                  {p.subtitle}
                </p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {p.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: '#a1a1aa',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="CODE"
                  className="btn-ghost-kinetic"
                  style={{ width: '100%', padding: '10px 16px', fontSize: '0.85rem' }}
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                >
                  <GithubIcon size={16} />
                  <span>Inspect Code</span>
                  <ArrowUpRight size={14} style={{ marginLeft: 'auto' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
