import { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
  Phone,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import TiltCard from './TiltCard';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const email = 'abhinav.achiver01@gmail.com';
  const phone = '+91 7869738340';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00f2fe', '#7928ca', '#3b82f6', '#ffffff'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Launch email client with pre-filled contents
    const subject = encodeURIComponent(`Portfolio / Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setStatus('Draft prepared in your email client!');
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#00f2fe', '#10b981'],
    });
  };

  const socials = [
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon size={20} />,
      link: 'https://www.linkedin.com/in/g-abhinav-138a39252/',
      handle: 'g-abhinav-138a39252',
    },
    {
      name: 'GitHub',
      icon: <GithubIcon size={20} />,
      link: 'https://github.com/G-Abhinav01',
      handle: 'G-Abhinav01',
    },
    {
      name: 'X (Twitter)',
      icon: <TwitterIcon size={20} />,
      link: 'https://x.com/GAbhinav_001',
      handle: '@GAbhinav_001',
    },
  ];

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Direct Channel</span>
          </div>
          <h2 className="section-title">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open for full-stack engineering roles, technical implementation contracts, or consulting opportunities.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Quick Connect Card & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TiltCard maxTilt={8} scale={1.01}>
              <div
                className="glass-panel"
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                  background: 'linear-gradient(145deg, rgba(14, 22, 51, 0.8) 0%, rgba(6, 11, 28, 0.9) 100%)',
                  border: '1px solid rgba(0, 242, 254, 0.25)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(0, 242, 254, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cyan)',
                    }}
                  >
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Let's Build Solutions</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>
                      Response time: &lt; 24 hrs
                    </p>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  Whether you have an upcoming full-stack platform, enterprise database migration, or
                  need a client-facing developer for high-stakes deliverables, feel free to reach out directly.
                </p>

                {/* Email Copy Card */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    background: 'rgba(5, 8, 20, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '14px',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Direct Email
                    </div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem', textOverflow: 'ellipsis' }}>
                      {email}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="btn-cyber-outline"
                    style={{
                      padding: '8px 14px',
                      fontSize: '0.8rem',
                      borderRadius: '8px',
                    }}
                  >
                    {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Phone Contact Card */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    background: 'rgba(5, 8, 20, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Direct Phone
                    </div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>
                      {phone}
                    </div>
                  </div>

                  <a
                    href={`tel:${phone}`}
                    className="btn-cyber-outline"
                    style={{
                      padding: '8px 14px',
                      fontSize: '0.8rem',
                      borderRadius: '8px',
                    }}
                  >
                    <Phone size={14} />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* Social Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '14px' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel"
                  style={{
                    padding: '16px',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ color: 'var(--cyan)' }}>{s.icon}</div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>{s.name}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textOverflow: 'ellipsis' }}>
                      {s.handle}
                    </div>
                  </div>
                  <ArrowUpRight size={14} color="#64748b" style={{ marginLeft: 'auto' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '20px',
              background: 'rgba(8, 14, 36, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>
                Transmit Message
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Fill in the details below to initialize communication.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#94a3b8',
                      marginBottom: '6px',
                    }}
                  >
                    IDENTIFIER / NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(5, 8, 20, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#94a3b8',
                      marginBottom: '6px',
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(5, 8, 20, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#94a3b8',
                      marginBottom: '6px',
                    }}
                  >
                    MESSAGE TRANSMISSION
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Abhinav, I'd like to discuss a project..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(5, 8, 20, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-cyber-primary"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  <Send size={16} />
                  <span>Transmit Message</span>
                </button>
              </form>

              {status && (
                <div
                  style={{
                    marginTop: '14px',
                    padding: '10px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10b981',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
