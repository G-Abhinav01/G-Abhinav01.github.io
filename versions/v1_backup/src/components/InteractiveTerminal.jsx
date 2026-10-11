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
Experience: Client-Facing Implementation (Force Intellect), AIML Trainee (Techonet)
Education: B.Tech in Computer Science (AI & ML) @ SSTC (2022 - 2026)
Focus: Next.js 16, React 19, TypeScript, MS SQL Server, SSMS, UAT, and cloud deployments.`,
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
          text: `Opening Resume... Link: https://drive.google.com/file/d/1Fp78dHZzr_OlKjfPPCVcBUrxTEmFB8pm/view?usp=drivesdk`,
        });
        window.open(
          'https://drive.google.com/file/d/1Fp78dHZzr_OlKjfPPCVcBUrxTEmFB8pm/view?usp=drivesdk',
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
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ marginLeft: '8px', fontSize: '0.8rem', color: '#94a3b8' }}>
            abhinav@fullstack-workstation:~ (zsh)
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--cyan)' }}>
          <Sparkles size={14} />
          <span>PRODUCTION SHELL</span>
        </div>
      </div>

      {/* Terminal Output */}
      <div
        style={{
          padding: '20px',
          minHeight: '260px',
          maxHeight: '340px',
          overflowY: 'auto',
          fontSize: '0.88rem',
          lineHeight: '1.6',
        }}
      >
        {history.map((item, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '10px',
              whiteSpace: 'pre-wrap',
              color:
                item.type === 'user'
                  ? 'var(--cyan)'
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
        style={{
          padding: '10px 18px',
          background: 'rgba(5, 8, 20, 0.6)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Presets:</span>
        {['skills', 'projects', 'resume', 'contact', 'confetti', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            style={{
              background: 'rgba(0, 242, 254, 0.08)',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              borderRadius: '6px',
              color: 'var(--cyan)',
              fontSize: '0.75rem',
              padding: '3px 10px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 242, 254, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 242, 254, 0.08)';
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
          padding: '12px 18px',
          background: 'rgba(12, 18, 42, 0.9)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <span style={{ color: 'var(--cyan)', marginRight: '8px', fontWeight: 'bold' }}>&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command ('help', 'skills', 'projects', 'resume')..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          aria-label="Send command"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--cyan)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CornerDownLeft size={16} />
        </button>
      </form>
    </div>
  );
}
