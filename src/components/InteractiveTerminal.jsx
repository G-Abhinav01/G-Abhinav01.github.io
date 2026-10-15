import { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Check, CornerDownLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'SYSTEM INITIALIZED: Welcome to G-Abhinav Terminal v2.5. Type "help" or click quick commands below.',
    },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  • about       - Profile summary & core philosophy
  • skills      - Full-stack, SQL Server, and delivery skills
  • projects    - Key projects including India24x7.live & YumCha.ai
  • contact     - Direct communication channels & email
  • resume      - Download or view direct resume link
  • confetti    - Trigger interactive celebration 🎉
  • clear       - Clean terminal output`,
        });
        break;

      case 'about':
        newHistory.push({
          type: 'response',
          text: `[G ABHINAV]
Role: Full-Stack Web Developer & Technical Solutions Consultant
Experience: Technical Implementation (STPI Bhilai), AIML Trainee (Techonet)
Education: B.Tech in Computer Science (AI & ML) @ SSTC (2022 - 2026)
Focus: C++, Python, Next.js 16, React 19, TypeScript, MS SQL Server, SSMS, UAT.`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: `TECHNICAL COMPETENCIES:
  • Full-Stack & Web: Next.js 16, React 19, TypeScript, Tailwind CSS, Node.js, Server Actions
  • SQL & Databases: Microsoft SQL Server, SSMS, SSRS, PostgreSQL, Supabase, MySQL, Stored Procedures
  • Security & Infra: Row Level Security (RLS), Server Setup & IIS, DOMPurify HTML Sanitization, Netlify, DNS
  • Client Delivery: User Acceptance Testing (UAT), Dry Runs, Go-Live Deployments, Hybrid Agile, Redmine
  • Core Languages: C++, Python, JavaScript`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: `KEY PRODUCTION & SOFTWARE PROJECTS:
  1. India24x7.live -> Full-Stack News Platform & Admin CMS (Next.js 16, React 19, Supabase, RLS, Netlify)
  2. YumCha.ai      -> AI-Driven Recipe Recommendation Platform (Python, Machine Learning)
  3. Aether Notes   -> Hierarchical Notes & Task Management System (Offline-first, Nested DB)
  4. O-Siyar.ai     -> Optical Character Recognition (OCR) + Multi-lingual TTS Narration`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `CONNECT:
  • Email: abhinav.achiver01@gmail.com
  • Phone: +91 7869738340
  • LinkedIn: linkedin.com/in/g-abhinav-138a39252
  • GitHub: github.com/G-Abhinav01
  • X/Twitter: @GAbhinav_001`,
        });
        break;

      case 'resume':
        newHistory.push({
          type: 'response',
          text: `Opening Resume... Link: https://drive.google.com/file/d/1EK7DX-XF90pNxIkMzqQczs4ENNMKBsrr/view?usp=drive_link`,
        });
        window.open(
          'https://drive.google.com/file/d/1EK7DX-XF90pNxIkMzqQczs4ENNMKBsrr/view?usp=drive_link',
          '_blank'
        );
        break;

      case 'confetti':
        newHistory.push({
          type: 'response',
          text: `🎉 Boom! Celebrating high-performance full-stack web platforms and client solutions!`,
        });
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f2fe', '#4facfe', '#7928ca', '#ffffff'],
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" to see available options.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div
      style={{
        background: 'rgba(8, 13, 30, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 242, 254, 0.25)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0, 242, 254, 0.1)',
        fontFamily: 'var(--font-mono)',
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          background: 'rgba(5, 8, 20, 0.9)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56', flexShrink: 0 }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e', flexShrink: 0 }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f', flexShrink: 0 }} />
          <span className="term-full-path" style={{ marginLeft: '6px', fontSize: '0.78rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>
            abhinav@fullstack-workstation:~ (zsh)
          </span>
          <span className="term-short-path" style={{ display: 'none', marginLeft: '6px', fontSize: '0.75rem', color: '#94a3b8' }}>
            abhinav:~
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--acid-lime)', flexShrink: 0 }}>
          <Sparkles size={13} />
          <span>SHELL v2</span>
        </div>
      </div>

      {/* Terminal Output */}
      <div
        style={{
          padding: 'clamp(14px, 3vw, 20px)',
          minHeight: '240px',
          maxHeight: '340px',
          overflowY: 'auto',
          fontSize: 'clamp(0.78rem, 2vw, 0.88rem)',
          lineHeight: '1.6',
        }}
      >
        {history.map((item, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '10px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              color:
                item.type === 'user'
                  ? 'var(--acid-lime)'
                  : item.type === 'error'
                  ? '#f87171'
                  : item.type === 'system'
                  ? '#a78bfa'
                  : '#e2e8f0',
            }}
          >
            {item.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Action Badges */}
      <div
        className="touch-scroll-row"
        style={{
          padding: '8px 14px',
          background: 'rgba(5, 8, 20, 0.6)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Presets:</span>
        {['skills', 'projects', 'resume', 'contact', 'confetti', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            style={{
              background: 'rgba(198, 255, 0, 0.08)',
              border: '1px solid rgba(198, 255, 0, 0.2)',
              borderRadius: '6px',
              color: 'var(--acid-lime)',
              fontSize: '0.72rem',
              padding: '3px 8px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(198, 255, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(198, 255, 0, 0.08)';
            }}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Line */}
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 14px',
          background: 'rgba(12, 18, 42, 0.9)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <span style={{ color: 'var(--acid-lime)', marginRight: '8px', fontWeight: 'bold' }}>&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command ('help', 'projects', 'skills')..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontFamily: 'var(--font-mono)',
            fontSize: '16px', // 16px prevents iOS Safari auto-zoom
            outline: 'none',
          }}
        />
        <button
          type="submit"
          aria-label="Send command"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--acid-lime)',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CornerDownLeft size={16} />
        </button>
      </form>

      <style>{`
        @media (max-width: 540px) {
          .term-full-path {
            display: none !important;
          }
          .term-short-path {
            display: inline !important;
          }
        }
      `}</style>
    </div>
  );
}
