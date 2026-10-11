import { useState } from 'react';
import { Layers, Globe, Database, ShieldCheck, Users2, Check } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const skillDomains = [
    {
      domain: 'fullstack',
      label: 'Full-Stack Web',
      icon: <Globe size={16} />,
      items: [
        { name: 'Next.js 16 (App Router)', tag: 'CORE PLATFORM', desc: 'Server Actions mutation boundary, dynamic routing, App Router, production builds' },
        { name: 'React 19', tag: 'UI ARCHITECTURE', desc: 'Custom hooks, concurrent rendering, state isolation, responsive component hierarchies' },
        { name: 'TypeScript 5', tag: 'STRICT TYPE SAFETY', desc: 'Generated Supabase DB types, strict interfaces, generic utilities, compile-time safety' },
        { name: 'Tailwind CSS 4', tag: 'STYLING ENGINE', desc: 'Modern responsive systems, mobile-first design, fluid layouts, custom themes' },
        { name: 'Node.js & npm', tag: 'RUNTIME & TOOLING', desc: 'Server action execution, build scripts, dependency management, LTS configurations' },
        { name: 'HTML5 & Modern CSS', tag: 'STANDARDS & ACCESS', desc: 'Semantic layout, SEO tags, accessible DOM structure, glassmorphic styling' },
      ],
    },
    {
      domain: 'sql',
      label: 'SQL & Database Systems',
      icon: <Database size={16} />,
      items: [
        { name: 'Microsoft SQL Server', tag: 'ENTERPRISE DATABASE', desc: 'Complex SQL queries, multi-table transactions, database updates, stored procedures' },
        { name: 'SSMS (Management Studio)', tag: 'ADMIN & OPTIMIZATION', desc: 'Database administration, schema synchronization, query profiling, index updates' },
        { name: 'PostgreSQL & Supabase', tag: 'CLOUD POSTGRES', desc: 'Database migrations, schema version control, direct Supabase JS client integration' },
        { name: 'SSRS (Reporting Services)', tag: 'ENTERPRISE BI', desc: 'Business intelligence operational reports, dataset definitions, parameter controls' },
        { name: 'DBMS Fundamentals', tag: 'THEORETICAL CORE', desc: 'ACID properties, database normalization (1NF-BCNF), foreign keys, concurrency' },
        { name: 'MySQL', tag: 'RELATIONAL DB', desc: 'Relational data modeling, query optimization, indexing strategies' },
      ],
    },
    {
      domain: 'security',
      label: 'Security & Cloud Infra',
      icon: <ShieldCheck size={16} />,
      items: [
        { name: 'Row Level Security (RLS)', tag: 'ACCESS POLICIES', desc: 'Multi-tenant database isolation, declarative read/write permission rules in Postgres' },
        { name: 'Role-Based Authorization', tag: 'APP METADATA', desc: 'app_metadata.role = "admin" verification, protected server-side mutation gates' },
        { name: 'DOMPurify HTML Sanitization', tag: 'XSS DEFENSE', desc: 'Server-side article body HTML sanitization before database persistence' },
        { name: 'Server Setup & IIS (ODBC)', tag: 'HOSTING & RUNTIME', desc: 'Internet Information Services (IIS) server setup, ODBC connections, enterprise host setup' },
        { name: 'Netlify & GoDaddy DNS', tag: 'DEPLOYMENT & CUTOVER', desc: 'Production Netlify setup, custom domain cutover, DNS records, SSL certification' },
      ],
    },
    {
      domain: 'delivery',
      label: 'Client Delivery & Methodology',
      icon: <Users2 size={16} />,
      items: [
        { name: 'Client-Facing Engineering', tag: 'STAKEHOLDER LIAISON', desc: 'Direct client communication, requirement mapping, user training, acceptance signoff' },
        { name: 'UAT & Dry Run Verification', tag: 'QUALITY AUDIT', desc: 'User Acceptance Testing, Dry Runs, Pilot Runs, post-Go-Live deployment support' },
        { name: 'Hybrid Agile / Waterfall', tag: 'PROJECT GOVERNANCE', desc: 'Milestone delivery, task and dependency tracking in Redmine, risk mitigation' },
        { name: 'Git & GitHub Workflows', tag: 'VERSION CONTROL', desc: 'Branching models, pull requests, automated GitHub Actions CI/CD workflows' },
        { name: 'Postman & REST Testing', tag: 'API VERIFICATION', desc: 'HTTP endpoint verification, payload boundary checking, response validation' },
      ],
    },
  ];

  const filteredDomains =
    activeFilter === 'all'
      ? skillDomains
      : skillDomains.filter((d) => d.domain === activeFilter);

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-eyebrow">
            <span>[04 // ARSENAL]</span>
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="section-headline">
            Production Skills &amp; <br />
            <span style={{ color: 'var(--acid-lime)' }}>Enterprise Competencies.</span>
          </h2>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setActiveFilter('all');
            }}
            style={{
              background: activeFilter === 'all' ? 'var(--acid-lime)' : 'rgba(255, 255, 255, 0.04)',
              color: activeFilter === 'all' ? '#08090d' : 'var(--text-muted)',
              border: activeFilter === 'all' ? '1px solid var(--acid-lime)' : '1px solid var(--border-hairline)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 700,
              padding: '8px 18px',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            All Competencies
          </button>
          {skillDomains.map((d) => (
            <button
              key={d.domain}
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveFilter(d.domain);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: activeFilter === d.domain ? 'var(--acid-lime)' : 'rgba(255, 255, 255, 0.04)',
                color: activeFilter === d.domain ? '#08090d' : 'var(--text-muted)',
                border: activeFilter === d.domain ? '1px solid var(--acid-lime)' : '1px solid var(--border-hairline)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                padding: '8px 18px',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {d.icon}
              <span>{d.label}</span>
            </button>
          ))}
        </div>

        {/* Domains Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {filteredDomains.map((domain) => (
            <div key={domain.domain} className="arch-card" style={{ padding: '32px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border-hairline)',
                }}
              >
                <div style={{ color: 'var(--acid-lime)' }}>{domain.icon}</div>
                <h3 style={{ fontSize: '1.35rem', color: '#fff' }}>{domain.label}</h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '16px',
                }}
              >
                {domain.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-hairline)',
                      transition: 'border-color 0.2s, background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(198, 255, 0, 0.3)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-hairline)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#fff' }}>
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: 'var(--acid-lime)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: 'rgba(198, 255, 0, 0.08)',
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: '1.5' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
