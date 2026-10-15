import { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const email = 'abhinav.achiver01@gmail.com';
  const phone = '+91 7869738340';

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#c6ff00', '#ffffff', '#818cf8'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setStatus('Transmission prepared in your email client.');
  };

  const socials = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/g-abhinav-138a39252/', icon: <LinkedinIcon size={18} /> },
    { name: 'GitHub', link: 'https://github.com/G-Abhinav01', icon: <GithubIcon size={18} /> },
    { name: 'X / Twitter', link: 'https://x.com/GAbhinav_001', icon: <TwitterIcon size={18} /> },
  ];

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-eyebrow">
            <span>[05 // INITIATE]</span>
            <span>Direct Transmission</span>
          </div>
          <h2 className="section-headline">
            Start a Project or <br />
            <span style={{ color: 'var(--acid-lime)' }}>Explore Opportunities.</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {/* Direct Channels Card */}
          <div className="arch-card" style={{ padding: 'clamp(20px, 4vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 2.8vw, 1.45rem)', color: '#fff', marginBottom: '8px' }}>
                Engineering Communication
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '28px' }}>
                Available for full-stack engineering contracts, client-facing enterprise implementations, database optimizations, and technical consulting.
              </p>

              {/* Email Block */}
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-hairline)',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ minWidth: '180px', flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '2px' }}>
                    PRIMARY EMAIL
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff', wordBreak: 'break-all' }}>
                    {email}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  data-cursor="COPY"
                  style={{
                    background: 'rgba(198, 255, 0, 0.1)',
                    border: '1px solid var(--acid-lime)',
                    color: 'var(--acid-lime)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    flexShrink: 0,
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Block */}
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-hairline)',
                  marginBottom: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '2px' }}>
                    DIRECT PHONE
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#fff' }}>
                    {phone}
                  </div>
                </div>

                <a
                  href={`tel:${phone}`}
                  data-cursor="CALL"
                  onClick={() => sound.playClick()}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--border-hairline)',
                    flexShrink: 0,
                  }}
                >
                  Call
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="VISIT"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-hairline)',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--acid-lime)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-hairline)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {s.icon}
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="arch-card" style={{ padding: 'clamp(20px, 4vw, 36px)' }}>
            <h3 style={{ fontSize: 'clamp(1.25rem, 2.8vw, 1.45rem)', color: '#fff', marginBottom: '8px' }}>
              Transmit Direct Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Provide project details or message content to route directly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                  YOUR IDENTIFIER / NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-hairline)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                  YOUR EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ada@domain.com"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-hairline)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                  PROJECT BRIEF / SCOPE
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Details regarding your platform or opportunity..."
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-hairline)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                data-cursor="TRANSMIT"
                className="btn-primary-kinetic"
                style={{ width: '100%', marginTop: '8px' }}
                onMouseEnter={() => sound.playHover()}
              >
                <span>Transmit Inquiry</span>
                <Send size={16} />
              </button>
            </form>

            {status && (
              <div
                style={{
                  marginTop: '16px',
                  padding: '12px',
                  borderRadius: '8px',
                  background: 'rgba(198, 255, 0, 0.1)',
                  border: '1px solid var(--acid-lime)',
                  color: 'var(--acid-lime)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  textAlign: 'center',
                }}
              >
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
