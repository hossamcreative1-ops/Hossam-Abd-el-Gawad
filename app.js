/**
 * ═══════════════════════════════════════════════════════
 *  HOSSAM ABDEL-GAWAD — PORTFOLIO APP.JS
 *  Reads CONFIG from config.js and renders the entire site
 * ═══════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Wait for CONFIG to be available ─────────────────
  if (typeof CONFIG === 'undefined') {
    console.error('config.js not loaded. Make sure it appears before app.js in index.html');
    return;
  }

  // ─────────────────────────────────────────────────────
  //  01. INJECT IDENTITY
  // ─────────────────────────────────────────────────────
  const { identity, social } = CONFIG;

  // Hero
  const heroName = document.getElementById('heroName');
  if (heroName) {
    const [first, ...rest] = identity.name.split(' ');
    heroName.innerHTML = `${first}<br/><em>${rest.join(' ')}</em>`;
  }
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.textContent = identity.tagline + ' · ' + identity.subtag;

  const heroBio = document.getElementById('heroBio');
  if (heroBio) heroBio.textContent = identity.bio;

  // Footer
  const footerName = document.getElementById('footerName');
  if (footerName) footerName.textContent = identity.name;

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact sub
  const contactSub = document.getElementById('contactSub');
  if (contactSub) contactSub.textContent =
    `Based in ${identity.location}. Open to remote and international collaborations.`;

  // ─────────────────────────────────────────────────────
  //  02. SOCIAL LINKS
  // ─────────────────────────────────────────────────────
  const socialMap = {
    behance:   { label: 'Behance', symbol: '↗' },
    linkedin:  { label: 'LinkedIn', symbol: '↗' },
    instagram: { label: 'Instagram', symbol: '↗' },
    youtube:   { label: 'YouTube', symbol: '↗' },
    vimeo:     { label: 'Vimeo', symbol: '↗' },
    email:     { label: 'Email', symbol: '→' },
  };

  const socialsEl = document.getElementById('contactSocials');
  if (socialsEl) {
    Object.entries(social).forEach(([key, value]) => {
      if (!value) return;
      const info = socialMap[key];
      const href = key === 'email' ? `mailto:${value}` : value;
      socialsEl.innerHTML += `
        <a href="${href}" target="_blank" rel="noopener noreferrer" class="social-link">
          <span>${info.label}</span>
          <span class="social-arrow">${info.symbol}</span>
        </a>`;
    });
  }

  // ─────────────────────────────────────────────────────
  //  03. SERVICES
  // ─────────────────────────────────────────────────────
  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid && CONFIG.display.showServices) {
    CONFIG.services.forEach((s, i) => {
      servicesGrid.innerHTML += `
        <div class="service-card reveal-up" style="--delay:${i * 0.1}s">
          <span class="service-icon">${s.icon}</span>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-desc">${s.desc}</p>
          <span class="service-num">0${i + 1}</span>
        </div>`;
    });
  }

  // ─────────────────────────────────────────────────────
  //  04. VIDEO GALLERY
  // ─────────────────────────────────────────────────────
  const videoGrid = document.getElementById('videoGrid');
  if (videoGrid && CONFIG.display.showVideoSection) {
    CONFIG.videos.forEach((v) => {
      const thumbUrl = v.platform === 'youtube'
        ? `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`
        : `https://vumbnail.com/${v.id}.jpg`;

      const embedUrl = v.platform === 'youtube'
        ? `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`
        : `https://player.vimeo.com/video/${v.id}?autoplay=1`;

      const featuredClass = v.featured ? 'featured' : '';

      videoGrid.innerHTML += `
        <div class="video-card ${featuredClass} reveal-up" style="--delay:0.1s"
             data-embed="${embedUrl}">
          <img class="video-thumb" src="${thumbUrl}" alt="${v.title}" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1536240478700-b869ad10a2eb?w=800&q=60'"/>
          <div class="video-overlay">
            <div class="video-play">▶</div>
            <div class="video-info">
              <p class="video-cat">${v.category}</p>
              <h3 class="video-title">${v.title}</h3>
            </div>
          </div>
        </div>`;
    });

    // Click to open modal
    videoGrid.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', () => openVideoModal(card.dataset.embed));
    });
  }

  // ─────────────────────────────────────────────────────
  //  05. DESIGN GALLERY
  // ─────────────────────────────────────────────────────
  const designGrid = document.getElementById('designGrid');
  if (designGrid && CONFIG.display.showDesignSection) {
    CONFIG.designs.forEach((d) => {
      const featuredClass = d.featured ? 'featured' : '';
      const tagsHTML = d.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');

      designGrid.innerHTML += `
        <div class="design-card ${featuredClass} reveal-up" style="--delay:0.1s">
          <img src="${d.src}" alt="${d.title}" loading="lazy" />
          <div class="design-overlay">
            <p class="design-cat">${d.category}</p>
            <h3 class="design-title">${d.title}</h3>
            <div class="design-tags">${tagsHTML}</div>
          </div>
        </div>`;
    });
  }

  // ─────────────────────────────────────────────────────
  //  06. CERTIFICATES
  // ─────────────────────────────────────────────────────
  const certsGrid = document.getElementById('certsGrid');
  if (certsGrid && CONFIG.display.showCertificates) {
    CONFIG.certificates.forEach((c) => {
      const featuredClass = c.featured ? 'featured' : '';
      const badgeHTML = c.featured
        ? `<span class="cert-badge">Featured</span>` : '';

      certsGrid.innerHTML += `
        <div class="cert-card ${featuredClass} reveal-up" style="--delay:0.1s">
          <div class="cert-logo-wrap" style="background:${c.color}20; color:${c.color}; border: 1px solid ${c.color}40;">
            ${c.logo}
          </div>
          <div class="cert-info">
            ${badgeHTML}
            <p class="cert-issuer">${c.issuer}</p>
            <h3 class="cert-title">${c.title}</h3>
            <div class="cert-meta">
              <span class="cert-date">${c.date}</span>
              <a href="${c.credential}" target="_blank" rel="noopener" class="cert-link">
                View Credential <span class="social-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>`;
    });
  }

  // ─────────────────────────────────────────────────────
  //  07. VIDEO MODAL
  // ─────────────────────────────────────────────────────
  const modal = document.getElementById('videoModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  function openVideoModal(embedUrl) {
    modalContent.innerHTML = `<iframe src="${embedUrl}" allowfullscreen allow="autoplay; fullscreen"></iframe>`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    modal.classList.remove('active');
    modalContent.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeVideoModal);
  if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVideoModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal();
  });

  // ─────────────────────────────────────────────────────
  //  08. FILTER TABS
  // ─────────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const videoGroup = document.getElementById('videoGroup');
  const designGroup = document.getElementById('designGroup');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      if (videoGroup) videoGroup.style.display = (f === 'design') ? 'none' : 'block';
      if (designGroup) designGroup.style.display = (f === 'video') ? 'none' : 'block';
    });
  });

  // ─────────────────────────────────────────────────────
  //  09. NAV SCROLL EFFECT
  // ─────────────────────────────────────────────────────
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (nav) {
      nav.classList.toggle('scrolled', currentScroll > 60);
      // Hide nav on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 200) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }, { passive: true });

  // Nav transitions
  if (nav) nav.style.transition = 'background 0.4s, padding 0.4s, backdrop-filter 0.4s, transform 0.4s cubic-bezier(0.16,1,0.3,1)';

  // ─────────────────────────────────────────────────────
  //  10. HAMBURGER MENU
  // ─────────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ─────────────────────────────────────────────────────
  //  11. SCROLL REVEAL
  // ─────────────────────────────────────────────────────
  if (CONFIG.display.enableScrollAnimations) {
    const revealEls = document.querySelectorAll('.reveal-up, .reveal-fade');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal-up, .reveal-fade')
      .forEach(el => el.classList.add('visible'));
  }

  // ─────────────────────────────────────────────────────
  //  12. CUSTOM CURSOR
  // ─────────────────────────────────────────────────────
  if (CONFIG.display.enableCursor && window.innerWidth > 768) {
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursorDot');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
      }
    });

    // Smooth cursor follow
    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      if (cursor) {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
      }
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverTargets = document.querySelectorAll('a, button, .video-card, .design-card, .cert-card, .service-card');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => cursor?.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor?.classList.remove('hover'));
    });

    document.addEventListener('mousedown', () => cursor?.classList.add('click'));
    document.addEventListener('mouseup', () => cursor?.classList.remove('click'));
  }

  // ─────────────────────────────────────────────────────
  //  13. HERO CANVAS — PARTICLE FIELD
  // ─────────────────────────────────────────────────────
  if (CONFIG.display.enableParticles) {
    const canvas = document.getElementById('heroCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let W, H, particles = [];

      const PARTICLE_COUNT = Math.min(window.innerWidth < 768 ? 30 : 80, 80);
      const accentRGB = hexToRgb(CONFIG.theme.accent) || { r: 201, g: 169, b: 110 };

      function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

      function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
      }

      function initParticles() {
        particles = Array.from({ length: PARTICLE_COUNT }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.5 + 0.3,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.1,
        }));
      }

      function drawFrame() {
        ctx.clearRect(0, 0, W, H);

        // Connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},${(1 - dist / 140) * 0.15})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        // Dots
        particles.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},${p.opacity})`;
          ctx.fill();

          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        });

        requestAnimationFrame(drawFrame);
      }

      const ro = new ResizeObserver(() => { resize(); initParticles(); });
      ro.observe(canvas.parentElement);
      resize(); initParticles(); drawFrame();
    }
  }

  // ─────────────────────────────────────────────────────
  //  14. CONTACT FORM HANDLER
  // ─────────────────────────────────────────────────────
 const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('.btn-primary');
    const originalHTML = btn.innerHTML;

    btn.innerHTML = '<span>جاري الإرسال...</span>';
    btn.disabled = true;

    const formData = new FormData(form);
    formData.append('access_key', 'd0432ab0-173f-4686-8cf4-4c43832c90d8');
    formData.append('subject', 'رسالة جديدة من موقع HAG Portfolio');
    formData.append('from_name', 'HAG Portfolio Contact');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (data.success) {
        btn.innerHTML = '<span>تم الإرسال ✓</span>';
        btn.style.background = '#22C55E';
        btn.style.color = '#000';
        form.reset();
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      btn.innerHTML = '<span>فيه مشكلة، حاول تاني</span>';
      btn.style.background = '#FF4444';
      btn.style.color = '#fff';
    }

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
    }, 4000);
  });
}
  // ─────────────────────────────────────────────────────
  //  15. ACTIVE NAV LINK ON SCROLL
  // ─────────────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link:not(.cta-nav)');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkEls.forEach(link => {
          link.classList.toggle(
            'active-link',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => sectionObserver.observe(s));

  console.log('%c HAG PORTFOLIO ', 'background:#C9A96E;color:#000;padding:4px 8px;font-weight:bold;border-radius:2px;', '— Powered by config.js');
});
