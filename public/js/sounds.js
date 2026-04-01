// Sound effects using Web Audio API (no external files needed)
const Sound = {
  ctx: null,
  enabled: true,

  _getCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return this.ctx;
  },

  _play(freq, type, duration, volume = 0.3) {
    if (!this.enabled) return;
    try {
      const ctx = this._getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    } catch (e) { /* silent fail */ }
  },

  // Correct answer — happy rising tone
  correct() {
    this._play(523, 'sine', 0.15, 0.25);
    setTimeout(() => this._play(659, 'sine', 0.15, 0.25), 100);
    setTimeout(() => this._play(784, 'sine', 0.25, 0.25), 200);
  },

  // Wrong answer — sad descending tone
  wrong() {
    this._play(400, 'sine', 0.2, 0.2);
    setTimeout(() => this._play(300, 'sine', 0.3, 0.2), 150);
  },

  // Quiz complete — fanfare
  complete() {
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      setTimeout(() => this._play(freq, 'sine', 0.3, 0.2), i * 150);
    });
  },

  // Achievement unlocked — magical sparkle
  achievement() {
    const notes = [880, 1109, 1319, 1568, 1760];
    notes.forEach((freq, i) => {
      setTimeout(() => this._play(freq, 'sine', 0.2, 0.15), i * 80);
    });
  },

  // Click / select
  click() {
    this._play(600, 'sine', 0.05, 0.1);
  },

  // Toggle sound on/off
  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('sound_enabled', this.enabled);
    return this.enabled;
  },

  // Init from saved preference
  init() {
    const saved = localStorage.getItem('sound_enabled');
    if (saved !== null) this.enabled = saved === 'true';
  }
};

Sound.init();
