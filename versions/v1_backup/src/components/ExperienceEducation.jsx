import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ExperienceEducation() {
  const experiences = [
    {
      period: 'Apr 2026 — Present',
      role: 'Technical Solutions & Client-Facing Implementation',
      company: 'Force Intellect Pvt. Ltd. — STPI Bhilai',
      location: 'Bhilai, Chhattisgarh',
      description:
        'Translating functional requirements into system configurations, database modifications, and production deployment activities. Managing end-to-end solution delivery across enterprise workflows.',
      bullets: [
        'Extensive database engineering with Microsoft SQL Server, SSMS, stored procedures, database updates, SSRS reporting, and IIS application infrastructure.',
        'Executed Dry Runs, Pilot Runs, User Acceptance Testing (UAT), Go-Live deployments, post-Go-Live support, and master-data migrations.',
        'Coordinated project delivery using hybrid Agile/Waterfall methodologies, tracking deliverables in Redmine, and leading client training.',
      ],
      tags: ['MS SQL Server', 'SSMS', 'SSRS', 'IIS Server Setup', 'UAT & Go-Live', 'Client Acceptance', 'Redmine'],
      highlight: true,
    },
    {
      period: 'Vocational Training',
      role: 'AI & Machine Learning Trainee',
      company: 'Techonet Pvt Ltd',
      location: 'India',
      description:
        'Hands-on engineering in machine learning pipelines, data preprocessing, model testing, and intelligent automated workflows.',
      bullets: [
        'Explored predictive modeling, algorithmic optimization, and data preprocessing in Python.',
        'Applied machine learning techniques to real-world datasets and automation tasks.',
      ],
      tags: ['Python', 'Machine Learning', 'Data Pipelines', 'Automation'],
      highlight: false,
    },
  ];

  const education = [
    {
      period: '2022 — 2026',
      degree: 'B.Tech in Computer Science (AI & ML)',
      institution: 'Shri Shankaracharya Technical Campus',
      location: 'Bhilai, Chhattisgarh',
      description:
        'Specialized curriculum spanning Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, Machine Learning, and Software Architecture.',
      tags: ['Computer Science', 'AI & ML', 'DSA', 'DBMS', 'OOP'],
      highlight: true,
    },
    {
      period: '2009 — 2021',
      degree: 'Senior Secondary (XII), Science',
      institution: 'Kendriya Vidyalaya',
      location: 'Bhilai, Chhattisgarh',
      description:
        'Foundational academic education focusing on Mathematics, Physics, Chemistry, and Computer Science fundamentals.',
      tags: ['Science & Math', 'CS Fundamentals'],
      highlight: false,
    },
  ];

  const certifications = [
    { name: 'Data Science & Analytics', issuer: 'HP Life' },
    { name: 'AI & ML Based Vocational Training', issuer: 'Techonet Pvt. Ltd.' },
  ];

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Milestones &amp; Experience</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience &amp; Education</span>
          </h2>
          <p className="section-subtitle">
            Client-facing solution delivery, database engineering, and academic achievements.
          </p>
        </div>

        {/* Dual Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Experience Column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(0, 242, 254, 0.1)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan)',
                }}
              >
                <Briefcase size={18} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>Work &amp; Implementation</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {experiences.map((exp, idx) => (
                <TiltCard key={idx} maxTilt={8} scale={1.01}>
                  <div
                    className="glass-panel"
                    style={{
                      padding: '28px',
                      borderRadius: '18px',
                      border: exp.highlight
                        ? '1px solid rgba(0, 242, 254, 0.35)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      background: 'rgba(10, 16, 40, 0.75)',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '10px',
                        marginBottom: '12px',
                      }}
                    >
                      <span className="cyber-badge" style={{ fontSize: '0.75rem' }}>
                        <span className="pulse-dot" />
                        {exp.period}
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#94a3b8',
                          fontSize: '0.82rem',
                        }}
                      >
                        <MapPin size={13} color="var(--cyan)" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', marginBottom: '4px', color: '#fff' }}>
                      {exp.role}
                    </h4>
                    <div
                      style={{
                        color: 'var(--cyan)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        marginBottom: '14px',
                      }}
                    >
                      {exp.company}
                    </div>

                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.92rem',
                        lineHeight: '1.65',
                        marginBottom: '14px',
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 16px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          style={{
                            fontSize: '0.85rem',
                            color: '#cbd5e1',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            lineHeight: '1.5',
                          }}
                        >
                          <span style={{ color: 'var(--cyan)', marginTop: '3px' }}>▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#cbd5e1',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div id="education">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(121, 40, 202, 0.15)',
                  border: '1px solid rgba(121, 40, 202, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a855f7',
                }}
              >
                <GraduationCap size={18} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>Academic Journey</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {education.map((edu, idx) => (
                <TiltCard key={idx} maxTilt={8} scale={1.01}>
                  <div
                    className="glass-panel"
                    style={{
                      padding: '28px',
                      borderRadius: '18px',
                      border: edu.highlight
                        ? '1px solid rgba(168, 85, 247, 0.3)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      background: 'rgba(10, 16, 40, 0.75)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '10px',
                        marginBottom: '12px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#a855f7',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'rgba(168, 85, 247, 0.1)',
                          border: '1px solid rgba(168, 85, 247, 0.25)',
                        }}
                      >
                        {edu.period}
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#94a3b8',
                          fontSize: '0.82rem',
                        }}
                      >
                        <MapPin size={13} color="#a855f7" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', marginBottom: '4px', color: '#fff' }}>
                      {edu.degree}
                    </h4>
                    <div
                      style={{
                        color: '#c084fc',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.88rem',
                        marginBottom: '14px',
                      }}
                    >
                      {edu.institution}
                    </div>

                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.92rem',
                        lineHeight: '1.65',
                        marginBottom: '18px',
                      }}
                    >
                      {edu.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#cbd5e1',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}

              {/* Verified Certifications Card */}
              <div
                className="glass-panel"
                style={{
                  padding: '22px 28px',
                  borderRadius: '18px',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  background: 'rgba(6, 11, 28, 0.7)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <Award size={18} color="var(--cyan)" />
                  <h4 style={{ fontSize: '1.1rem', color: '#fff' }}>Verified Certifications</h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {certifications.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f1f5f9' }}>
                        {c.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--cyan)',
                        }}
                      >
                        {c.issuer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
