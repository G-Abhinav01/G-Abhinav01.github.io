import { MapPin, Calendar, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ExperienceEducation() {
  const experiences = [
    {
      period: 'Apr 2026 — Present',
      role: 'Technical Solutions & Client-Facing Implementation',
      company: 'STPI Bhilai, Chhattisgarh',
      location: 'Bhilai, Chhattisgarh',
      summary:
        'Translating enterprise business requirements into system configurations, database procedures, UAT validation, and production support across core operational workflows.',
      achievements: [
        'Extensive database engineering with Microsoft SQL Server, SSMS, stored procedures, database updates, SSRS reporting, and IIS application hosting.',
        'Executed Dry Runs, Pilot Runs, User Acceptance Testing (UAT), Go-Live deployments, post-Go-Live support, and master-data migrations.',
        'Coordinated project delivery using hybrid Agile/Waterfall methodologies, managing deliverables in Redmine, and leading client training.',
      ],
      skills: ['MS SQL Server', 'SSMS', 'SSRS', 'IIS Server Setup', 'UAT & Go-Live', 'Stored Procedures', 'Redmine'],
    },
    {
      period: 'Vocational Training',
      role: 'AI & Machine Learning Trainee',
      company: 'Techonet Pvt. Ltd.',
      location: 'India',
      summary:
        'Applied machine learning pipelines, algorithmic modeling, and data preprocessing for automation tasks.',
      achievements: [
        'Built data cleaning and preprocessing pipelines in Python for predictive models.',
        'Analyzed model performance, feature engineering, and automated evaluation metrics.',
      ],
      skills: ['Python', 'Machine Learning', 'Data Pipelines', 'Automation'],
    },
  ];

  const education = [
    {
      period: '2022 — 2026',
      degree: 'B.Tech in Computer Science (AI & ML)',
      institution: 'Shri Shankaracharya Technical Campus',
      location: 'Bhilai, Chhattisgarh',
      details: 'Focus on Data Structures, OOP, Database Systems, Computer Networks, and Machine Learning.',
    },
    {
      period: '2009 — 2021',
      degree: 'Senior Secondary (XII), Science',
      institution: 'Kendriya Vidyalaya',
      location: 'Bhilai, Chhattisgarh',
      details: 'Mathematics, Physics, Chemistry, and Computer Science fundamentals.',
    },
  ];

  const certs = [
    { title: 'Data Science & Analytics', issuer: 'HP Life' },
    { title: 'AI & ML Based Vocational Training', issuer: 'Techonet Pvt. Ltd.' },
  ];

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-eyebrow">
            <span>[03 // TRACK RECORD]</span>
            <span>Experience &amp; Education</span>
          </div>
          <h2 className="section-headline">
            Enterprise Solutions &amp; <br />
            <span style={{ color: 'var(--acid-lime)' }}>Academic Foundation.</span>
          </h2>
        </div>

        {/* Experience Track Record */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '60px' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="arch-card"
              style={{
                padding: 'clamp(20px, 4vw, 36px)',
                borderLeft: '4px solid var(--acid-lime)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '16px',
                }}
              >
                <div>
                  <span className="accent-pill" style={{ marginBottom: '8px' }}>
                    {exp.period}
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.45rem)', color: '#fff', marginTop: '6px' }}>
                    {exp.role}
                  </h3>
                  <div style={{ color: 'var(--acid-lime)', fontFamily: 'var(--font-mono)', fontSize: '0.92rem' }}>
                    {exp.company}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  <MapPin size={14} color="var(--acid-lime)" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '18px' }}>
                {exp.summary}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {exp.achievements.map((item, i) => (
                  <li key={i} style={{ fontSize: '0.88rem', color: '#d4d4d8', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--acid-lime)' }}>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-hairline)',
                      color: '#a1a1aa',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Verified Certifications */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
          }}
        >
          {education.map((edu, idx) => (
            <div key={idx} className="arch-card" style={{ padding: 'clamp(18px, 3vw, 28px)' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--acid-lime)',
                  marginBottom: '8px',
                  display: 'block',
                }}
              >
                {edu.period}
              </span>
              <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '6px' }}>
                {edu.degree}
              </h4>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '12px' }}>
                {edu.institution} • {edu.location}
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.84rem' }}>
                {edu.details}
              </p>
            </div>
          ))}

          {/* Certifications Card */}
          <div className="arch-card" style={{ padding: '28px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--acid-lime)',
                marginBottom: '8px',
                display: 'block',
              }}
            >
              CREDENTIALS
            </span>
            <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '16px' }}>
              Verified Certifications
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {certs.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-hairline)',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#fff' }}>{c.title}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--acid-lime)' }}>
                    {c.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
