import { useState } from 'react';
import {
  Code2,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  Globe,
  ShieldCheck,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import TiltCard from './TiltCard';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectList = [
    {
      id: 'india24x7',
      title: 'India24x7.live',
      subtitle: 'Full-Stack Dynamic News Platform & Admin CMS',
      description:
        'Engineered and deployed a production-ready dynamic news platform with a robust database-backed admin CMS. Structured around 7 CMS modules: Articles CRUD, Homepage Slots, Breaking News, Video Rails, Advertisements, Live Tickers, and Site Settings. Hardened with Row Level Security (RLS), server-side admin authorization, server-side DOMPurify HTML sanitization, and live GoDaddy DNS cutover.',
      bullets: [
        'Next.js 16 (App Router) + React 19 + TypeScript 5 + Tailwind CSS 4',
        'Supabase PostgreSQL database with Row Level Security (RLS) & Server Actions',
        'Role-based admin authorization (app_metadata.role = "admin") & DOMPurify sanitization',
        'Netlify production deployment, GoDaddy DNS cutover, SEO metadata & 23 compiled routes',
      ],
      image: '/Images/india24x7.jpg',
      category: 'web',
      tags: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'Supabase',
        'PostgreSQL',
        'RLS Security',
        'Server Actions',
        'Netlify',
      ],
      liveUrl: 'https://india24x7.live',
      github: 'https://github.com/G-Abhinav01',
      featured: true,
      clientProject: true,
      status: 'Live Client Production',
    },
    {
      id: 'yumcha',
      title: 'YumCha.ai',
      subtitle: 'AI-Driven Recipe Generation Platform',
      description:
        'AI-driven platform that converts user ingredients, cooking constraints, and dietary preferences into personalized culinary recipe recommendations through structured machine learning workflows and responsive usability.',
      bullets: [
        'AI prompt orchestration and personalized recipe recommendation workflows',
        'Translated product requirements into user-facing interactive features',
        'Refined usability, responsive layouts, and algorithmic filtering',
      ],
      image: '/Images/YumCha.jpg',
      category: 'ai',
      tags: ['AI Engine', 'Python', 'ML Workflows', 'Personalization', 'Web UI'],
      liveUrl: null,
      github: 'https://github.com/G-Abhinav01/YumCha.ai',
      featured: true,
      clientProject: false,
      status: 'Active Dev',
    },
    {
      id: 'aether',
      title: 'Aether Notes',
      subtitle: 'Hierarchical Notes & Task Management System',
      description:
        'Productivity management tool combining folder-based note organization with nested structures, to-do tracking, custom categories, and offline-first database synchronization.',
      bullets: [
        'Nested folder architecture with hierarchical content categorization',
        'Custom tagging, task prioritization, and structured state persistence',
        'Planned AI summarization and modular data schema',
      ],
      image: '/Images/Aether.jpg',
      category: 'utility',
      tags: ['Productivity', 'Nested DB', 'Clean Architecture', 'Offline-First'],
      liveUrl: null,
      github: 'https://github.com/G-Abhinav01/Aether-notes-app',
      featured: true,
      clientProject: false,
      status: 'Design Phase',
    },
    {
      id: 'osiyar',
      title: 'O-Siyar.ai',
      subtitle: 'OCR & Multilingual Speech Synthesis Utility',
      description:
        'Responsive utility platform extracting text from uploaded images using optical character recognition (OCR), coupled with dynamic translation and multi-lingual text-to-speech audio narration.',
      bullets: [
        'Optical Character Recognition (OCR) pipeline for document & image text extraction',
        'Integrated Google APIs for instant multi-language translation and speech audio',
        'Responsive web utility interface with audio player controls',
      ],
      image: '/Images/O-siyar.jpg',
      category: 'ai',
      tags: ['Python', 'OCR', 'Text-to-Speech', 'Computer Vision', 'APIs'],
      liveUrl: null,
      github: 'https://github.com/G-Abhinav01/O-Siyar.ai',
      featured: true,
      clientProject: false,
      status: 'Completed',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Full-Stack & Client Platforms' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'utility', label: 'Productivity & Utilities' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projectList
      : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Showcase &amp; Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Production-grade web platforms, client deployments, and intelligent software applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '46px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: isActive
                    ? 'rgba(0, 242, 254, 0.15)'
                    : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? 'var(--cyan)' : 'var(--text-muted)',
                  border: isActive
                    ? '1px solid var(--cyan)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive ? '0 0 18px rgba(0, 242, 254, 0.25)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} maxTilt={project.clientProject ? 10 : 8} scale={1.02}>
              <div
                className="glass-panel"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: project.clientProject
                    ? 'linear-gradient(160deg, rgba(14, 26, 64, 0.9) 0%, rgba(6, 12, 32, 0.95) 100%)'
                    : 'rgba(10, 16, 42, 0.8)',
                  border: project.clientProject
                    ? '1px solid rgba(0, 242, 254, 0.35)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: project.clientProject
                    ? '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 242, 254, 0.15)'
                    : '0 8px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Project Image Banner */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '220px',
                    overflow: 'hidden',
                    background: '#040816',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Dark Vignette Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 35%, rgba(10, 16, 42, 0.95) 100%)',
                    }}
                  />

                  {/* Status Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      background: project.clientProject
                        ? 'rgba(0, 242, 254, 0.18)'
                        : 'rgba(5, 8, 20, 0.8)',
                      backdropFilter: 'blur(8px)',
                      border: project.clientProject
                        ? '1px solid var(--cyan)'
                        : '1px solid rgba(0, 242, 254, 0.3)',
                      color: project.clientProject ? '#ffffff' : 'var(--cyan)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      boxShadow: project.clientProject ? '0 0 12px rgba(0, 242, 254, 0.4)' : 'none',
                    }}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: '24px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '14px',
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            color: project.clientProject ? '#e2e8f0' : '#94a3b8',
                            background: project.clientProject
                              ? 'rgba(0, 242, 254, 0.08)'
                              : 'rgba(255, 255, 255, 0.04)',
                            border: project.clientProject
                              ? '1px solid rgba(0, 242, 254, 0.2)'
                              : '1px solid rgba(255, 255, 255, 0.07)',
                            padding: '3px 8px',
                            borderRadius: '6px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '4px' }}>
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--cyan)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        marginBottom: '12px',
                      }}
                    >
                      {project.subtitle}
                    </p>
                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        marginBottom: '16px',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    {project.bullets && (
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: '0 0 20px 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                        }}
                      >
                        {project.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            style={{
                              fontSize: '0.82rem',
                              color: '#cbd5e1',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '6px',
                              lineHeight: '1.45',
                            }}
                          >
                            <span style={{ color: 'var(--cyan)', marginTop: '2px' }}>▹</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Links Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cyber-primary"
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          fontSize: '0.85rem',
                        }}
                      >
                        <Globe size={15} />
                        <span>Live Platform</span>
                        <ArrowUpRight size={14} style={{ marginLeft: 'auto' }} />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber-outline"
                      style={{
                        flex: project.liveUrl ? undefined : 1,
                        padding: '10px 16px',
                        fontSize: '0.85rem',
                      }}
                    >
                      <GithubIcon size={16} />
                      <span>{project.liveUrl ? 'Repo' : 'Source Code'}</span>
                      <ArrowUpRight size={14} style={{ marginLeft: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* View All Repositories Link */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="https://github.com/G-Abhinav01?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-outline"
            style={{
              display: 'inline-flex',
              padding: '12px 28px',
              borderRadius: '9999px',
            }}
          >
            <GithubIcon size={18} />
            <span>Explore More Repositories on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
