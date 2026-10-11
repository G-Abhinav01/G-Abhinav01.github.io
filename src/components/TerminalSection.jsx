import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';

export default function TerminalSection() {
  return (
    <section id="terminal" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <TerminalIcon size={14} />
            <span>Interactive CLI</span>
          </div>
          <h2 className="section-title">
            Developer <span className="text-gradient">Console</span>
          </h2>
          <p className="section-subtitle">
            Prefer a CLI? Query my profile, trigger interactive easter eggs, or download my resume directly.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
