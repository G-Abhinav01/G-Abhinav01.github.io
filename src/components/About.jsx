import TiltCard from './TiltCard';
import {
  User,
  Globe,
  Database,
  Users2,
  ShieldCheck,
  BookOpen,
  Mic,
  Globe2,
  MessageSquare,
} from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Globe size={22} color="var(--cyan)" />,
      title: 'Full-Stack Web Architecture',
      desc: 'Building production platforms using Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, and Server Actions.',
    },
    {
      icon: <Database size={22} color="#3b82f6" />,
      title: 'SQL & Enterprise Databases',
      desc: 'Extensive experience with Microsoft SQL Server, SSMS, SSRS, stored procedures, database updates, and PostgreSQL/Supabase.',
    },
    {
      icon: <Users2 size={22} color="#a855f7" />,
      title: 'Client-Facing Engineering & UAT',
      desc: 'Conducting User Acceptance Testing (UAT), dry runs, pilot runs, go-live deployments, and end-user training in hybrid Agile/Waterfall setups.',
    },
    {
      icon: <ShieldCheck size={22} color="#10b981" />,
      title: 'Security, RLS & Server Infrastructure',
      desc: 'Implementing Row Level Security (RLS), role-based authorization, server-side DOMPurify sanitization, IIS server setup, and DNS cutovers.',
    },
  ];

  const interests = [
    { icon: <Mic size={20} color="#ec4899" />, title: 'Singing', tag: 'Acoustic & Vocals' },
    { icon: <Globe2 size={20} color="var(--cyan)" />, title: 'Learning Languages', tag: 'Linguistics' },
    { icon: <MessageSquare size={20} color="#a855f7" />, title: 'Communication', tag: 'Client Facing & Collaboration' },
    { icon: <BookOpen size={20} color="#3b82f6" />, title: 'Reading Novels', tag: 'Focus & Ideation' },
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Identity &amp; Philosophy</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Engineering robust web systems, enterprise database architectures, and end-to-end client solutions.
          </p>
        </div>

        {/* Dual Column Layout: Code Manifest Window + Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
            alignItems: 'stretch',
          }}
        >
          {/* Left: IDE Code Window */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'rgba(5, 9, 24, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Editor Top Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                background: 'rgba(3, 6, 17, 0.95)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: '#94a3b8',
                    marginLeft: '8px',
                  }}
                >
                  developer_profile.ts
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--cyan)',
                }}
              >
                TypeScript 5 // Production
              </span>
            </div>

            {/* Code Body */}
            <div
              style={{
                padding: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                lineHeight: '1.7',
                color: '#cbd5e1',
                flex: 1,
              }}
            >
              <p style={{ color: '#64748b', marginBottom: '8px' }}>
                // Full-stack engineering &amp; client-facing solutions delivery
              </p>
              <p>
                <span style={{ color: '#f43f5e' }}>interface</span>{' '}
                <span style={{ color: '#facc15' }}>SoftwareEngineer</span> &#123;
              </p>
              <p style={{ paddingLeft: '20px' }}>name: <span style={{ color: '#38bdf8' }}>string</span>;</p>
              <p style={{ paddingLeft: '20px' }}>role: <span style={{ color: '#38bdf8' }}>string</span>;</p>
              <p style={{ paddingLeft: '20px' }}>fullStackStack: <span style={{ color: '#38bdf8' }}>string[]</span>;</p>
              <p style={{ paddingLeft: '20px' }}>databaseSystems: <span style={{ color: '#38bdf8' }}>string[]</span>;</p>
              <p style={{ paddingLeft: '20px' }}>deliverySkills: <span style={{ color: '#38bdf8' }}>string[]</span>;</p>
              <p>&#125;</p>
              <br />
              <p>
                <span style={{ color: '#38bdf8' }}>const</span>{' '}
                <span style={{ color: '#60a5fa' }}>gAbhinav</span>:{' '}
                <span style={{ color: '#facc15' }}>SoftwareEngineer</span> = &#123;
              </p>
              <p style={{ paddingLeft: '20px' }}>
                name: <span style={{ color: '#4ade80' }}>"G Abhinav"</span>,
              </p>
              <p style={{ paddingLeft: '20px' }}>
                role: <span style={{ color: '#4ade80' }}>"Full-Stack Web Developer &amp; Solutions Dev"</span>,
              </p>
              <p style={{ paddingLeft: '20px' }}>
                fullStackStack: [
              </p>
              <p style={{ paddingLeft: '40px', color: '#4ade80' }}>
                "Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Server Actions"
              </p>
              <p style={{ paddingLeft: '20px' }}>],</p>
              <p style={{ paddingLeft: '20px' }}>
                databaseSystems: [
              </p>
              <p style={{ paddingLeft: '40px', color: '#4ade80' }}>
                "Microsoft SQL Server", "SSMS", "SSRS", "PostgreSQL", "Supabase", "RLS"
              </p>
              <p style={{ paddingLeft: '20px' }}>],</p>
              <p style={{ paddingLeft: '20px' }}>
                deliverySkills: [
              </p>
              <p style={{ paddingLeft: '40px', color: '#4ade80' }}>
                "Client-Facing UAT", "Go-Live Deployments", "Server Setup (IIS)", "DNS Cutover"
              </p>
              <p style={{ paddingLeft: '20px' }}>],</p>
              <p>&#125;;</p>
            </div>
          </div>

          {/* Right: Core Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px',
            }}
          >
            {highlights.map((item, idx) => (
              <TiltCard key={idx} maxTilt={10} scale={1.02}>
                <div
                  className="glass-panel"
                  style={{
                    padding: '22px',
                    height: '100%',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Interests & Hobbies ("When I'm Not Coding...") */}
        <div style={{ marginTop: '50px' }}>
          <h3
            style={{
              fontSize: '1.25rem',
              color: '#e2e8f0',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            When I'm not writing code...
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {interests.map((interest, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '16px 20px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {interest.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>
                    {interest.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {interest.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
