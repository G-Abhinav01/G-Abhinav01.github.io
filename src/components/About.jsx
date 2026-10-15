import { useState } from 'react';
import TiltCard from './TiltCard';
import { Layers, ShieldCheck, Terminal, Database, ArrowRight, Check, MapPin, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function About() {
  const [activeTab, setActiveTab] = useState('fullstack');

  const snippets = {
    fullstack: `// Next.js 16 Server Action Boundary & HTML Sanitization
import DOMPurify from 'isomorphic-dompurify';
import { createServerClient } from '@/lib/supabase/server';

export async function publishArticle(data: ArticlePayload) {
  const supabase = await createServerClient();
  const { data: user } = await supabase.auth.getUser();
  
  if (user?.app_metadata?.role !== 'admin') {
    throw new Error('Unauthorized mutation boundary');
  }

  const cleanBody = DOMPurify.sanitize(data.body);
  return await supabase.from('articles').insert({
    ...data,
    body: cleanBody,
    published_at: new Date().toISOString()
  });
}`,
    sql: `-- Microsoft SQL Server: Enterprise Stored Procedure Pattern
CREATE PROCEDURE dbo.usp_ExecuteGoLiveValidation
    @EnvironmentId INT,
    @DryRunPassed BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRANSACTION;
    TRY
        -- Validate master-data consistency and schema constraints
        EXEC dbo.usp_VerifyMasterDataIntegrity @EnvId = @EnvironmentId;
        SET @DryRunPassed = 1;
        COMMIT TRANSACTION;
    CATCH
        ROLLBACK TRANSACTION;
        THROW;
    END CATCH;
END;`,
    cpp: `// C++: Algorithmic Systems & Memory Efficiency
#include <iostream>
#include <vector>
#include <unordered_map>

template <typename Key, typename Value>
class CacheManager {
private:
    std::unordered_map<Key, Value> lookup;
public:
    void put(const Key& k, const Value& v) {
        lookup[k] = v;
    }
    bool exists(const Key& k) const {
        return lookup.find(k) != lookup.end();
    }
};`,
    uat: `// Hybrid Agile / Client UAT Acceptance Flow
const UATWorkflow = {
  phases: ['Dry Run Verification', 'Pilot Testing', 'Client Stakeholder UAT', 'Go-Live Cutover'],
  tracking: 'Redmine Milestones',
  governance: 'Risk & Dependency Matrix',
  handover: 'End-user Training & Knowledge Transfer'
};`,
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-eyebrow">
            <span>[02 // PHILOSOPHY]</span>
            <span>Engineering Discipline</span>
          </div>
          <h2 className="section-headline">
            System Design &amp; <br />
            <span style={{ color: 'var(--acid-lime)' }}>Technical Architecture.</span>
          </h2>
        </div>

        {/* Architect Profile & System Persona Dossier */}
        <div
          className="about-profile-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(260px, 320px) 1fr',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '48px',
            padding: '36px',
            borderRadius: '28px',
            background: 'linear-gradient(150deg, rgba(18, 22, 34, 0.65) 0%, rgba(10, 12, 18, 0.85) 100%)',
            border: '1px solid var(--border-hairline)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Left Column: 3D Parallax Glass Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TiltCard
              maxTilt={16}
              scale={1.04}
              style={{
                width: '100%',
                maxWidth: '260px',
                borderRadius: '24px',
              }}
            >
              <div
                className="arch-card"
                style={{
                  padding: '22px',
                  borderRadius: '24px',
                  background: 'linear-gradient(165deg, rgba(22, 27, 40, 0.92) 0%, rgba(10, 12, 18, 0.98) 100%)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 30px rgba(198, 255, 0, 0.08)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Header Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  <span style={{ color: 'var(--acid-lime)' }}>DEV // ARCHITECT-01</span>
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

                {/* 3D Depth Image with Conic Ambient Halo */}
                <div
                  style={{
                    position: 'relative',
                    width: '175px',
                    height: '175px',
                    margin: '0 auto 16px',
                    transform: 'translateZ(28px)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-4px',
                      borderRadius: '22px',
                      background: 'conic-gradient(from 0deg, var(--acid-lime), #818cf8, #ffffff, var(--acid-lime))',
                      animation: 'spin-halo 10s linear infinite',
                      opacity: 0.8,
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

                {/* Profile Caption & Badges */}
                <div style={{ textAlign: 'center', transform: 'translateZ(18px)' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      color: '#fff',
                      marginBottom: '2px',
                    }}
                  >
                    G Abhinav
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      color: 'var(--acid-lime)',
                      letterSpacing: '0.04em',
                      marginBottom: '10px',
                    }}
                  >
                    Full-Stack &amp; Solutions
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      fontSize: '0.72rem',
                      color: 'var(--text-dim)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <MapPin size={12} style={{ color: '#818cf8' }} />
                    <span>Bhilai, Chhattisgarh, IN</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Architectural Executive Narrative */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="accent-pill" style={{ fontSize: '0.75rem' }}>
                <Sparkles size={12} style={{ color: 'var(--acid-lime)' }} />
                Architectural Identity &amp; Discipline
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                color: '#fff',
                lineHeight: 1.25,
                marginBottom: '16px',
              }}
            >
              Bridging Low-Level Algorithmic Rigor With High-Velocity Web Systems.
            </h3>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '20px',
              }}
            >
              I specialize in bridging the technical divide between robust algorithmic fundamentals{' '}
              (<strong style={{ color: '#fff' }}>C++</strong>, <strong style={{ color: '#fff' }}>Python</strong>), enterprise data engines{' '}
              (<strong style={{ color: '#fff' }}>Microsoft SQL Server</strong>, <strong style={{ color: '#fff' }}>SSMS</strong>, <strong style={{ color: '#fff' }}>SSRS</strong>), and modern reactive web applications{' '}
              (<strong style={{ color: '#fff' }}>Next.js 16</strong>, <strong style={{ color: '#fff' }}>React 19</strong>, <strong style={{ color: '#fff' }}>Supabase PostgreSQL</strong>).
            </p>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.94rem',
                lineHeight: '1.65',
                marginBottom: '24px',
              }}
            >
              My background at <strong style={{ color: 'var(--acid-lime)' }}>STPI Bhilai</strong> shaped my focus on client stakeholder alignment: executing formal user acceptance testing (UAT), verifying master-data schema integrity, leading pilot dry-runs, and delivering zero-downtime go-lives.
            </p>

            {/* Quick Capability Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'Next.js 16 App Router',
                'React 19 & TypeScript',
                'C++ & Data Structures',
                'Python & AIML Background',
                'MS SQL Server & Stored Procs',
                'Supabase RLS Zero-Trust',
                'Client UAT & Production Cutover',
              ].map((pill, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-hairline)',
                    color: '#e4e4e7',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Blueprint Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Principles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                num: '01',
                title: 'Client-Facing Pragmatism',
                desc: 'Bridge the gap between executive business requirements and technical execution. Delivering functional systems, conducting UAT pilot runs, and ensuring zero-downtime cutovers.',
              },
              {
                num: '02',
                title: 'Zero-Trust Data Boundaries',
                desc: 'Never trust client payloads. All access is protected by Row Level Security (RLS) policies in PostgreSQL, stored procedures in Microsoft SQL Server, and server-side DOMPurify sanitization.',
              },
              {
                num: '03',
                title: 'High-Velocity Full-Stack Delivery',
                desc: 'Modern web architectures built on Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Fast, SEO-optimized, accessible, and structured for long-term maintainability.',
              },
            ].map((principle) => (
              <div
                key={principle.num}
                className="arch-card"
                style={{ padding: 'clamp(18px, 3vw, 28px)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      color: 'var(--acid-lime)',
                      fontWeight: 700,
                    }}
                  >
                    [{principle.num}]
                  </span>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>{principle.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.65' }}>
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive Code & Architecture Inspector */}
          <div
            className="arch-card"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              background: '#0a0b10',
            }}
          >
            {/* Header Tabs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border-hairline)',
                marginBottom: '20px',
              }}
            >
              <div className="inspector-tabs-row touch-scroll-row" style={{ display: 'flex', gap: '8px', paddingBottom: '4px' }}>
                {[
                  { id: 'fullstack', label: 'Next.js Actions' },
                  { id: 'sql', label: 'MS SQL Server' },
                  { id: 'cpp', label: 'C++ & Algorithms' },
                  { id: 'uat', label: 'UAT Delivery' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setActiveTab(t.id);
                    }}
                    style={{
                      background: activeTab === t.id ? 'rgba(198, 255, 0, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                      border: activeTab === t.id ? '1px solid var(--acid-lime)' : '1px solid var(--border-hairline)',
                      color: activeTab === t.id ? 'var(--acid-lime)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s',
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <span className="inspector-badge" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                VERIFIED SYNTAX
              </span>
            </div>

            {/* Code Output */}
            <pre
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.72rem, 1.8vw, 0.82rem)',
                color: '#d4d4d8',
                lineHeight: '1.65',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                flex: 1,
                maxWidth: '100%',
              }}
            >
              {snippets[activeTab]}
            </pre>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-halo {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 960px) {
          .about-profile-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 28px !important;
          }
        }
        @media (max-width: 640px) {
          .about-profile-grid {
            padding: 20px 16px !important;
            border-radius: 20px !important;
            gap: 24px !important;
          }
          .inspector-badge {
            display: none !important;
          }
          .inspector-tabs-row {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
