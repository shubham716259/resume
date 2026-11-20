// Lightweight Web Audio API Synthesizer Helper
// Zero external audio files, pure browser synthesis for crisp 8-bit retro gaming sounds.

class SoundEffectsController {
  constructor() {
    this.ctx = null;
    this.enabled = true;

    // Load persisted mute preference if available
    try {
      const saved = localStorage.getItem('shubham_portfolio_sfx');
      if (saved !== null) {
        this.enabled = saved === 'true';
      }
    } catch {
      this.enabled = true;
    }

    this.listeners = new Set();
  }

  // Lazy initialize AudioContext on first user interaction
  initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.enabled);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('shubham_portfolio_sfx', String(this.enabled));
    } catch {
      // storage unavailable
    }
    this.notify();
    if (this.enabled) {
      this.playSuccess();
    }
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }

  // 1. Subtle 8-bit blip (for keyboard typing or light hover)
  playBlip() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(680, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.045);
    } catch {
      // silent fallback
    }
  }

  // 2. Crisp retro click/select sound (square wave + quick decay)
  playClick() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // silent fallback
    }
  }

  // 3. Multi-note ascending level-up arpeggio (C5 -> E5 -> G5 -> C6)
  playLevelUp() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const noteDuration = 0.06;
      const startTime = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, startTime + idx * noteDuration);

        gain.gain.setValueAtTime(0.05, startTime + idx * noteDuration);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + (idx + 1) * noteDuration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime + idx * noteDuration);
        osc.stop(startTime + (idx + 1) * noteDuration);
      });
    } catch {
      // silent fallback
    }
  }

  // 4. Cheerful 2-tone success chime (for valid commands, modal opens)
  playSuccess() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const startTime = this.ctx.currentTime;
      const pitches = [587.33, 880]; // D5, A5
      pitches.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime + idx * 0.08);

        gain.gain.setValueAtTime(0.07, startTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + idx * 0.08 + 0.12);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime + idx * 0.08);
        osc.stop(startTime + idx * 0.08 + 0.13);
      });
    } catch {
      // silent fallback
    }
  }

  // 5. Digital sweep (for Matrix mode or terminal launch)
  playMatrixSweep() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(950, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
    } catch {
      // silent fallback
    }
  }

  // 6. Retro buzz error sound
  playError() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.setValueAtTime(110, this.ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
    } catch {
      // silent fallback
    }
  }
}

export const soundFX = new SoundEffectsController();
