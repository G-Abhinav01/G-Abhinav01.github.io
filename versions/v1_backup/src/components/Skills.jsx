import { useState } from 'react';
import {
  Layers,
  Terminal,
  Database,
  Wrench,
  Globe,
  ShieldCheck,
  Users2,
  Cpu,
  Server,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Layers size={16} /> },
    { id: 'fullstack', name: 'Full-Stack & Web', icon: <Globe size={16} /> },
    { id: 'database-sql', name: 'SQL & Databases', icon: <Database size={16} /> },
    { id: 'infra-security', name: 'Infra & Security', icon: <ShieldCheck size={16} /> },
    { id: 'delivery-tools', name: 'Client Delivery & Tools', icon: <Users2 size={16} /> },
    { id: 'core-prog', name: 'Core Languages', icon: <Terminal size={16} /> },
  ];

  const skillList = [
    // Full-Stack & Web
    { name: 'Next.js 16 (App Router)', category: 'fullstack', level: 90, color: '#ffffff', desc: 'Server Components, Server Actions, App Router, Route Handlers' },
    { name: 'React 19', category: 'fullstack', level: 92, color: '#61dafb', desc: 'Custom Hooks, Concurrent Features, State Management & Lifecycle' },
    { name: 'TypeScript 5', category: 'fullstack', level: 88, color: '#3178c6', desc: 'Type Safety, Strict Interfaces, Generics & DB Generated Types' },
    { name: 'Tailwind CSS 4', category: 'fullstack', level: 94, color: '#38bdf8', desc: 'Responsive Design, Cyber Aesthetics & Utility-first Layouts' },
    { name: 'Node.js', category: 'fullstack', level: 82, color: '#68a063', desc: 'Runtime Scripting, NPM ecosystem, Server Actions boundary' },
    { name: 'HTML5 & Modern CSS', category: 'fullstack', level: 95, color: '#e34f26', desc: 'Semantic Structure, Glassmorphism, Responsive UI & Micro-animations' },

    // SQL & Databases
    { name: 'Microsoft SQL Server', category: 'database-sql', level: 90, color: '#cc292b', desc: 'Complex SQL queries, Stored Procedures, Transactions & Triggers' },
    { name: 'SSMS (Management Studio)', category: 'database-sql', level: 92, color: '#e05638', desc: 'Database administration, schema updates, query optimization & profiling' },
    { name: 'PostgreSQL & Supabase', category: 'database-sql', level: 88, color: '#3ecf8e', desc: 'Database migrations, generated TypeScript types, schema version control' },
    { name: 'SSRS (Reporting Services)', category: 'database-sql', level: 82, color: '#f59e0b', desc: 'Enterprise data reporting, query datasets & production reports' },
    { name: 'DBMS Core Concepts', category: 'database-sql', level: 90, color: '#6685e4', desc: 'ACID properties, database normalization, indexing & relational architecture' },
    { name: 'MySQL', category: 'database-sql', level: 85, color: '#00758f', desc: 'Relational schema design, foreign keys, index optimization' },

    // Infra & Security
    { name: 'Row Level Security (RLS)', category: 'infra-security', level: 90, color: '#10b981', desc: 'PostgreSQL/Supabase RLS policies, multi-tenant isolation' },
    { name: 'Role-Based Authorization', category: 'infra-security', level: 88, color: '#a855f7', desc: 'app_metadata roles, server-side admin guard, protected mutations' },
    { name: 'Server-Side Sanitization', category: 'infra-security', level: 86, color: '#00f2fe', desc: 'DOMPurify HTML sanitization, XSS mitigation & payload verification' },
    { name: 'Server Setup & IIS', category: 'infra-security', level: 84, color: '#0078d4', desc: 'IIS web server configuration, application hosting, ODBC connections' },
    { name: 'Netlify & DNS Cutover', category: 'infra-security', level: 88, color: '#00c7b7', desc: 'Netlify deployments, GoDaddy DNS records, SSL/canonical routing' },

    // Client Delivery & Tools
    { name: 'Client-Facing Engineering', category: 'delivery-tools', level: 90, color: '#38bdf8', desc: 'Requirements translation, user training, technical stakeholder liaison' },
    { name: 'UAT & Go-Live Deployments', category: 'delivery-tools', level: 88, color: '#10b981', desc: 'User Acceptance Testing, Dry Runs, Pilot Runs & production cutovers' },
    { name: 'Hybrid Agile / Waterfall', category: 'delivery-tools', level: 86, color: '#a855f7', desc: 'Project milestone tracking, task dependencies, Redmine management' },
    { name: 'Git & GitHub', category: 'delivery-tools', level: 92, color: '#f05032', desc: 'Branching strategies, code reviews, PR reviews, CI/CD actions' },
    { name: 'Postman & REST APIs', category: 'delivery-tools', level: 85, color: '#ff6c37', desc: 'API testing, endpoint validation, payload verification' },
    { name: 'VS Code & Dev Tools', category: 'delivery-tools', level: 94, color: '#007acc', desc: 'Full-stack development, debugging, terminal tooling' },

    // Core Programming
    { name: 'C++', category: 'core-prog', level: 86, color: '#00599c', desc: 'Data Structures & Algorithms, Object-Oriented Programming, STL' },
    { name: 'Python', category: 'core-prog', level: 84, color: '#3776ab', desc: 'Scripting, Data preprocessing, AI integrations, automation workflows' },
    { name: 'JavaScript (ES6+)', category: 'core-prog', level: 90, color: '#f7df1e', desc: 'Async/await, closures, modern ES features, functional patterns' },
  ];

  const filteredSkills =
    activeTab === 'all'
      ? skillList
      : skillList.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            Full-stack engineering, enterprise SQL databases, client-facing UAT delivery, and secure cloud infrastructure.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.25) 0%, rgba(121, 40, 202, 0.25) 100%)'
                    : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  border: isActive
                    ? '1px solid var(--cyan)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive ? '0 0 20px rgba(0, 242, 254, 0.25)' : 'none',
                }}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredSkills.map((skill) => (
            <TiltCard key={skill.name} maxTilt={9} scale={1.02}>
              <div
                className="glass-panel"
                style={{
                  padding: '22px',
                  borderRadius: '16px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'rgba(9, 14, 36, 0.7)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: skill.color,
                          boxShadow: `0 0 8px ${skill.color}`,
                        }}
                      />
                      <h4 style={{ fontSize: '1.05rem', color: '#fff' }}>{skill.name}</h4>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: 'var(--cyan)',
                        fontWeight: 600,
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.5',
                      marginBottom: '16px',
                    }}
                  >
                    {skill.desc}
                  </p>
                </div>

                {/* Animated Power Gauge */}
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, #00f2fe)`,
                      borderRadius: '9999px',
                      boxShadow: `0 0 10px ${skill.color}`,
                      transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
