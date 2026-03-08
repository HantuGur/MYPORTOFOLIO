// ═══════════════════════════════════════
// PORTFOLIO — script.js
// ═══════════════════════════════════════

// ── CUSTOM CURSOR ──
const cur = document.getElementById('cursor');
const fol = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

// Follower lerp
(function loop() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  fol.style.left = fx + 'px';
  fol.style.top  = fy + 'px';
  requestAnimationFrame(loop);
})();

// ── NAV STICKY ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('stuck', window.scrollY > 60);
});

// ── MOBILE MENU ──
let mobOpen = false;
function toggleMob() {
  mobOpen = !mobOpen;
  document.getElementById('mob').classList.toggle('open', mobOpen);
  const h1 = document.getElementById('h1');
  const h2 = document.getElementById('h2');
  h1.style.transform = mobOpen ? 'translateY(6px) rotate(45deg)'  : '';
  h2.style.transform = mobOpen ? 'translateY(-6px) rotate(-45deg)' : '';
}
function closeMob() {
  mobOpen = false;
  document.getElementById('mob').classList.remove('open');
  document.getElementById('h1').style.transform = '';
  document.getElementById('h2').style.transform = '';
}

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = a.getAttribute('href');
    if (!t || t === '#') return;
    e.preventDefault();
    const el = document.querySelector(t);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── SCROLL REVEAL ──
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

function observeAll() {
  document.querySelectorAll('.rev:not(.in)').forEach(el => revObs.observe(el));
}

// ── PROJECT CARDS — stagger on enter ──
const pjObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const cards = document.querySelectorAll('.pj');
      cards.forEach((c, i) => {
        setTimeout(() => {
          c.style.opacity = '1';
          c.style.transform = 'translateY(0)';
        }, i * 80);
      });
      pjObs.disconnect();
    }
  });
}, { threshold: 0.05 });

const grid = document.getElementById('projectsGrid');
if (grid) {
  // Set initial state
  document.querySelectorAll('.pj').forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(32px)';
    c.style.transition = 'opacity .7s cubic-bezier(0.16,1,0.3,1), transform .7s cubic-bezier(0.16,1,0.3,1)';
  });
  pjObs.observe(grid);
}

// ── INIT ──
window.addEventListener('DOMContentLoaded', () => {
  observeAll();
});

// ── PROJECT TILE TILT ──
document.querySelectorAll('.pj').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 6;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 6;
    card.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── SKILLS STAGGER ──
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.skill-item').forEach((s, i) => {
        s.style.opacity = '0';
        s.style.transform = 'translateX(-20px)';
        s.style.transition = `opacity .5s ${i * 0.06}s ease, transform .5s ${i * 0.06}s ease`;
        setTimeout(() => {
          s.style.opacity = '1';
          s.style.transform = 'translateX(0)';
        }, 50 + i * 60);
      });
      skillObs.disconnect();
    }
  });
}, { threshold: 0.3 });

const skillsWrap = document.querySelector('.skills-wrap');
if (skillsWrap) skillObs.observe(skillsWrap);
