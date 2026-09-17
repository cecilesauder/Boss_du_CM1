function playTone(freq, dur) {
  try {
    let ctx  = new (window.AudioContext||window.webkitAudioContext)();
    let osc  = ctx.createOscillator();
    let gain = ctx.createGain();
    osc.type = 'sine'; osc.frequency.value = freq;
    osc.connect(gain); gain.connect(ctx.destination);
    gain.gain.setValueAtTime(.3, ctx.currentTime);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(.00001, ctx.currentTime+dur);
    setTimeout(()=>ctx.close(), dur*1000+100);
  } catch(e){}
}
function playFanfare() {
  playTone(523.25, .12);
  setTimeout(()=>playTone(659.25, .12), 150);
  setTimeout(()=>playTone(783.99, .15), 300);
  setTimeout(()=>playTone(1046.5, .3),  450);
}

// ═══════════════════════════════════════════════════════════════
//  ████ INITIALISATION ████
// ═══════════════════════════════════════════════════════════════

