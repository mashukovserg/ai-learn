/**
 * The short chime played when a learner solves a task.
 *
 * Lives here rather than inside the room page because it is pure Web Audio
 * plumbing with no React in it — it was ~35 lines of oscillator setup sitting
 * in the middle of a page component.
 *
 * The AudioContext is created lazily and reused: browsers cap the number of
 * live contexts per document, and a fresh one per task would eventually throw.
 */

type WindowWithWebkitAudio = Window &
  typeof globalThis & { webkitAudioContext?: typeof AudioContext };

let audioContext: AudioContext | null = null;

export function playTaskDoneSound(): void {
  if (typeof window === 'undefined') return;

  const AudioCtx = window.AudioContext ?? (window as WindowWithWebkitAudio).webkitAudioContext;
  if (!AudioCtx) return;

  try {
    const ctx = audioContext ?? new AudioCtx();
    audioContext = ctx;

    // Autoplay policy suspends contexts created before a user gesture.
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }

    const now = ctx.currentTime;
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
    gainNode.connect(ctx.destination);

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(660, now);
    osc.frequency.linearRampToValueAtTime(880, now + 0.12);
    osc.connect(gainNode);
    osc.start(now);
    osc.stop(now + 0.2);
  } catch {
    // Keep the UI responsive if audio is blocked by browser policy.
  }
}
