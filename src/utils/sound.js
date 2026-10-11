// Minimalist Web Audio API synthesizer for tactile UI micro-interactions
class SoundController {
  constructor() {
    this.ctx = null;
    this.enabled = false; // default to false or user-enabled to respect autoplay policies
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.enabled = true;
      }
    } else if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
      this.enabled = true;
    }
  }

  toggle() {
    if (!this.ctx) {
      this.init();
      return true;
    }
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playBlip(freq = 800, duration = 0.04) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  }

  playClick() {
    this.playBlip(1200, 0.03);
  }

  playHover() {
    this.playBlip(600, 0.02);
  }
}

export const sound = new SoundController();
