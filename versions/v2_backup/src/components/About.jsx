import { useState } from 'react';
import { Layers, ShieldCheck, Terminal, Database, ArrowRight, Check } from 'lucide-react';
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

        {/* Blueprint Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
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
                style={{ padding: '28px' }}
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
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { id: 'fullstack', label: 'Next.js Actions' },
                  { id: 'sql', label: 'MS SQL Server' },
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
                      fontSize: '0.78rem',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                VERIFIED SYNTAX
              </span>
            </div>

            {/* Code Output */}
            <pre
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#d4d4d8',
                lineHeight: '1.65',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                flex: 1,
              }}
            >
              {snippets[activeTab]}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
