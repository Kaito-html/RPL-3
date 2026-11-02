// ── Data Siswa XII RPL 3 ──
// Foto siswa → images/siswa/  |  Foto guru → images/guru/
const STUDENTS = [
  { no:"01", name:"Muhamad Alim Duda",                 role:"Siswa",            photo:"images/siswa/01.jpg" },
  { no:"02", name:"Muhamad Firansyah Djafar",          role:"Siswa",            photo:"images/siswa/02.jpg" },
  { no:"03", name:"Muhammad Agung Rasjid",             role:"Siswa",            photo:"images/siswa/03.jpg" },
  { no:"04", name:"Muhammad Fadhil Akbar Sya'Ban",     role:"Siswa",            photo:"images/siswa/04.jpg" },
  { no:"05", name:"Muhammad Farhan Abd. Majid",        role:"Siswa",            photo:null },
  { no:"06", name:"Muhammad Farhan Abdul Latif",       role:"Siswa",            photo:"images/siswa/06.jpg" },
  { no:"07", name:"Muhammad Khidir Abdullah",          role:"Siswa",            photo:"images/siswa/07.jpg" },
  { no:"08", name:"Muhammad Rayhan Lamusu",            role:"Siswa",            photo:"images/siswa/08.jpg" },
  { no:"09", name:"Raffi Ahmad Bowongkota",            role:"Siswa",            photo:"images/siswa/09.jpg" },
  { no:"10", name:"Rahmadi S. Mahyadi",                role:"Siswa",            photo:"images/siswa/10.jpg" },
  { no:"11", name:"Rahmat Paujan A. Djainala",         role:"Ketua Kelas",      photo:"images/siswa/11.jpg" },
  { no:"12", name:"Rahmat Rafli Dama",                 role:"Siswa",            photo:"images/siswa/12.jpg" },
  { no:"13", name:"Rahmat Reyhan Ardian Fazriansyah",  role:"Siswa",            photo:"images/siswa/13.jpg" },
  { no:"14", name:"Ramadhan Hasan",                    role:"Siswa",            photo:"images/siswa/14.jpg" },
  { no:"15", name:"Ravva'A El Ilhami",                 role:"Siswa",            photo:"images/siswa/15.jpg" },
  { no:"16", name:"Rendi Putrawan Ohi",                role:"Siswa",            photo:"images/siswa/16.jpg" },
  { no:"17", name:"Reza Alfikri Z. Uko",               role:"Siswa",            photo:"images/siswa/17.jpg" },
  { no:"18", name:"Riski Farel Ismail",                role:"Siswa",            photo:"images/siswa/18.jpg" },
  { no:"19", name:"Sahrul Ramadhan Bau",               role:"Siswa",            photo:"images/siswa/19.jpg" },
  { no:"20", name:"Salim Putra Rezki Lihu",            role:"Siswa",            photo:"images/siswa/20.jpg" },
  { no:"21", name:"Salsa Fadilah Hanapi",              role:"Siswa",            photo:"images/siswa/21.jpg" },
  { no:"22", name:"Satriani Abdullah",                 role:"Sekretaris",       photo:"images/siswa/22.jpg" },
  { no:"23", name:"Satrio Yusuf",                      role:"Siswa",            photo:"images/siswa/23.jpg" },
  { no:"24", name:"Sukmawati Usman",                   role:"Siswa",            photo:"images/siswa/24.jpg" },
  { no:"25", name:"Thezar Setia Pratama Ali",          role:"Wakil Ketua",      photo:"images/siswa/25.jpg" },
  { no:"26", name:"Tiara Agustina Putri Mantali",      role:"Bendahara",        photo:"images/siswa/26.jpg" },
  { no:"27", name:"Wiratama Linggar Sulasiyanto",      role:"Siswa",            photo:"images/siswa/27.jpg" },
  { no:"28", name:"Yusuf Ibrahim",                     role:"Siswa",            photo:"images/siswa/28.jpg" },
  { no:"29", name:"Zikran Rahmat",                     role:"Siswa",            photo:"images/siswa/29.jpg" },
];

// Rich Graphite & Slate Grey Gradient Palette for Student Avatars
const SLATE_GRADIENTS = [
  "linear-gradient(135deg, #333642, #1f2127)",
  "linear-gradient(135deg, #3e424e, #252830)",
  "linear-gradient(135deg, #464a59, #282a33)",
  "linear-gradient(135deg, #2d3039, #1a1b21)",
  "linear-gradient(135deg, #393c47, #21232a)",
];

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

function renderStudentCard(s, i) {
  const isOfficer = s.role !== 'Siswa';
  const roleBadge = `<span class="role-badge ${isOfficer ? 'role-officer' : 'role-student'}">${s.role}</span>`;
  
  const avatarContent = s.photo
    ? `<img src="${s.photo}" alt="${s.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:top center;border-radius:50%;display:block;">`
    : getInitials(s.name);

  const avatarStyle = s.photo
    ? `background: ${SLATE_GRADIENTS[i % SLATE_GRADIENTS.length]}; overflow: hidden; padding: 0;`
    : `background: ${SLATE_GRADIENTS[i % SLATE_GRADIENTS.length]};`;

  const hasPhotoClass = s.photo ? 'lightbox-trigger' : '';
  const zoomHint = s.photo ? '<div class="student-avatar-zoom">⛶</div>' : '';
  const triggerAttrs = s.photo
    ? `data-full="${s.photo}" data-title="${s.name} · ${s.role}" role="button" tabindex="0" title="Klik untuk lihat foto ${s.name}"`
    : '';

  return `
  <article class="student-card reveal">
    <span class="student-number">#${s.no}</span>
    <div class="student-avatar ${hasPhotoClass}" style="${avatarStyle}" ${triggerAttrs}>
      ${avatarContent}
      ${zoomHint}
    </div>
    <h3 class="student-name">${s.name}</h3>
    ${roleBadge}
  </article>`;
}

// ── Particles Canvas (Subtle Floating Code Particles in Slate/Grey) ──
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const symbols = ['{ }', '</>', '[]', '=>', '::', 'fn()', 'const', '01', '&&', '||', '++', '=='];
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const count = Math.min(32, Math.floor(W / 35));
  const points = Array.from({ length: count }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.25,
    vy: -(Math.random() * 0.35 + 0.1),
    alpha: Math.random() * 0.25 + 0.08,
    size: Math.random() * 3 + 9,
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    color: ['#7e8494', '#9aa1b2', '#585d6d', '#b2b7c4'][Math.floor(Math.random() * 4)]
  }));

  function render() {
    ctx.clearRect(0, 0, W, H);
    points.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.font = `${p.size}px 'JetBrains Mono', monospace`;
      ctx.fillText(p.symbol, p.x, p.y);

      p.x += p.vx;
      p.y += p.vy;

      if (p.y < -25) {
        p.y = H + 15;
        p.x = Math.random() * W;
      }
      if (p.x < -50) p.x = W + 10;
      if (p.x > W + 50) p.x = -10;
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(render);
  }

  render();

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

// ── Typing Effect in Hero ──
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const lines = [
    '<h1>Halo Dunia, Kami XII RPL 3</h1>',
    'SELECT * FROM siswa WHERE jurusan = "RPL";',
    '<div class="generasi-kode">SMK Negeri 1</div>',
    'INSERT INTO masa_depan (kelas, tahun) VALUES ("XII RPL 3", 2023);',
    '<section id="portfolio">29 Siswa Berbakat</section>',
    'UPDATE kelas SET semangat = "100%" WHERE angkatan = 2023;'
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const current = lines[lineIndex];

    if (!isDeleting) {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, 2200);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }

    setTimeout(tick, isDeleting ? 32 : 65);
  }

  tick();
}

// ── Counter Easing Animation ──
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Smooth ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counterElements = document.querySelectorAll('[data-count]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'), 10) || 0;
        animateCounter(entry.target, target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counterElements.forEach(el => observer.observe(el));
}

// ── Scroll Reveal Observer ──
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Slight stagger
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 45);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  reveals.forEach(el => observer.observe(el));
}

// ── Navbar Scrolled & Mobile Hamburger ──
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  const ham = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');

  if (ham && links) {
    ham.addEventListener('click', (e) => {
      e.stopPropagation();
      links.classList.toggle('open');
      ham.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        ham.classList.remove('open');
      });
    });

    // Menutup dropdown menu jika user klik di luar area navbar
    document.addEventListener('click', (e) => {
      if (links.classList.contains('open') && !nav.contains(e.target)) {
        links.classList.remove('open');
        ham.classList.remove('open');
      }
    });
  }
}

// ── Theme Toggle (Graphite Slate Default / Ash Grey Light) ──
function updateMetaThemeColor(isLight) {
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.appendChild(meta);
  }
  meta.content = isLight ? '#d8dbe2' : '#141519';
}

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('rpl3-theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    updateMetaThemeColor(true);
  } else {
    updateMetaThemeColor(false);
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('rpl3-theme', isLight ? 'light' : 'dark');
    updateMetaThemeColor(isLight);
  });
}

// ── Search & Filter Siswa (Hanya Nama Siswa) ──
function initSearch() {
  const input = document.getElementById('search-input');
  const grid = document.getElementById('students-grid');
  const countEl = document.getElementById('search-count');
  if (!input || !grid) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    const cards = grid.querySelectorAll('.student-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const name = (card.querySelector('.student-name')?.textContent || '').toLowerCase();
      const match = !query || name.includes(query);

      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    if (countEl) {
      countEl.textContent = `Menampilkan ${visibleCount} dari ${STUDENTS.length} siswa`;
    }

    const noResultEl = grid.querySelector('.no-results');
    if (noResultEl) {
      noResultEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
}

// ── Lightbox Modal (Lihat Full di Tab yang Sama) ──
function initLightbox() {
  let modal = document.getElementById('lightbox-modal');
  
  // Jika modal belum ada di halaman, buat secara dinamis
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'lightbox-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="lightbox-content">
        <div class="lightbox-controls">
          <a href="#" id="lightbox-direct-link" class="lightbox-btn" title="Buka gambar langsung">
            <span>🔗 Buka File</span>
          </a>
          <button class="lightbox-btn lightbox-close-btn" id="lightbox-close" aria-label="Tutup">
            ✕
          </button>
        </div>
        <img src="" alt="Pratinjau Foto Penuh" class="lightbox-img" id="lightbox-img">
        <div class="lightbox-caption" id="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const modalImg = modal.querySelector('#lightbox-img');
  const closeBtn = modal.querySelector('#lightbox-close');
  const directLink = modal.querySelector('#lightbox-direct-link');
  const captionEl = modal.querySelector('#lightbox-caption');

  function openLightbox(src, title = '') {
    if (!modalImg) return;
    modalImg.src = src;
    if (directLink) directLink.href = src;
    if (captionEl) {
      captionEl.textContent = title;
      captionEl.style.display = title ? 'block' : 'none';
    }
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!modal.classList.contains('active')) {
        modalImg.src = '';
        if (captionEl) captionEl.textContent = '';
      }
    }, 350);
  }

  // Delegated click listener (mendukung foto momen, kartu siswa dinamis, dll)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.lightbox-trigger');
    if (!trigger) return;
    e.preventDefault();
    const fullSrc = trigger.getAttribute('data-full') || trigger.getAttribute('href');
    const title = trigger.getAttribute('data-title') || '';
    if (fullSrc) openLightbox(fullSrc, title);
  });

  // Dukungan keyboard Enter / Spasi pada avatar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const trigger = document.activeElement && document.activeElement.closest('.lightbox-trigger');
      if (trigger) {
        e.preventDefault();
        const fullSrc = trigger.getAttribute('data-full') || trigger.getAttribute('href');
        const title = trigger.getAttribute('data-title') || '';
        if (fullSrc) openLightbox(fullSrc, title);
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// ── Lifecycle Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initParticles();
  initTyping();
  initNavbar();
  initCounters();
  initLightbox();

  // Populate student cards if grid is present
  const grid = document.getElementById('students-grid');
  if (grid) {
    grid.innerHTML = STUDENTS.map((s, idx) => renderStudentCard(s, idx)).join('')
      + `<p class="no-results" style="display:none">Tidak ada siswa yang sesuai dengan pencarian.</p>`;
  }

  initSearch();
  setTimeout(initReveal, 100);
});
