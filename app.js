/* Reads CONFIG from config.js and renders the site */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof CONFIG === 'undefined') { console.error('config.js not loaded'); return; }
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const track = (ev) => { try { if (window.fbq) fbq('track', ev); } catch (e) {} };
  const { identity, social, display } = CONFIG;
  // يجرّب الصورة في assets/ ولو مش موجودة يجرّبها بره، والعكس
  window.imgFallback = img => {
    if (img.dataset.tried) return; img.dataset.tried = 1;
    const s = img.getAttribute('src') || '';
    if (/^(https?:|data:)/.test(s)) return;
    img.src = s.indexOf('assets/') === 0 ? s.slice(7) : 'assets/' + s;
  };
  const SV = (p, extra = '') => `<svg viewBox="0 0 24 24" ${extra}>${p}</svg>`;
  const ICON = {
    design: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/>',
    video:  '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="M10 9l5 3-5 3z"/>',
    ads:    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  };
  const SOC = {
    behance:   ['Behance',   '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'],
    instagram: ['Instagram', '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>'],
    youtube:   ['YouTube',   '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor"/>'],
    linkedin:  ['LinkedIn',  '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v6M8 7.5v.01M12 17v-6M12 13a3 3 0 016 0v4"/>'],
    vimeo:     ['Vimeo',     '<path d="M3 8l2 1c1-2 2-2 3 0l2 6c1 2 3 1 5-2 2-3 3-5 3-6s-1-2-3-1"/>'],
    email:     ['Email',     '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 7l9 6 9-6"/>'],
  };

  // identity
  $('heroBio').textContent = identity.bio;
  $('footerName').textContent = identity.nameAr ? `${identity.name} · ${identity.nameAr}` : identity.name;
  $('year').textContent = new Date().getFullYear();
  $('contactSub').textContent = `Based in ${identity.location}. Send me what you need and your timeline. I reply fast.`;
  if (social.behance) $('behanceLink').href = social.behance;

  // marquee
  const words = ['Social Design','Reels Editing','Meta Ads','Photoshop','Premiere Pro','Creative Marketing'];
  const row = words.map(w => `${w}<b>✦</b>`).join('');
  $('mq').innerHTML = row + row;

  // services
  if (display.showServices) {
    $('servicesGrid').innerHTML = CONFIG.services.map((s, i) => `
      <div class="card ${s.main ? 'main' : ''}">
        <div class="ic">${SV(ICON[s.icon] || ICON.design)}</div>
        <div class="n">0${i + 1}</div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>
      </div>`).join('');
  } else $('services').hidden = true;

  // designs
  const lb = $('lb');
  if (display.showDesignSection) {
    $('designGrid').innerHTML = CONFIG.designs.map(d => `
      <figure class="${d.featured ? 'wide' : ''}"><img loading="lazy" src="${esc(d.src)}" alt="${esc(d.title)}" onerror="imgFallback(this)">
      <figcaption><b>${esc(d.title)}</b><span>${esc(d.category)}</span></figcaption></figure>`).join('');
    $('designGrid').querySelectorAll('img').forEach(i => i.addEventListener('click', () => { lb.querySelector('img').src = i.src; lb.classList.add('on'); }));
    lb.addEventListener('click', () => lb.classList.remove('on'));
  }

  // modal
  const modal = $('videoModal'), mc = $('modalContent');
  const openModal = (url, vertical) => {
    mc.className = vertical ? 'v' : '';
    mc.innerHTML = `<iframe src="${url}" allowfullscreen allow="autoplay; fullscreen; encrypted-media"></iframe>`;
    modal.classList.add('on'); document.body.style.overflow = 'hidden';
  };
  const closeModal = () => { modal.classList.remove('on'); mc.innerHTML = ''; document.body.style.overflow = ''; };
  $('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); lb.classList.remove('on'); } });
  const PLAY = `<div class="play">${SV('<path d="M7 4l13 8-13 8z"/>')}</div>`;

  // videos
  if (display.showVideoSection && CONFIG.videos.length) {
    $('videoGroup').hidden = false;
    $('videoGrid').innerHTML = CONFIG.videos.map((v, i) => {
      const yt = v.platform === 'youtube';
      const thumb = yt ? `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` : `https://vumbnail.com/${v.id}.jpg`;
      return `<figure data-i="${i}"><img loading="lazy" src="${thumb}" alt="${esc(v.title)}">${PLAY}
        <figcaption><b>${esc(v.title)}</b><span>${esc(v.category)}</span></figcaption></figure>`;
    }).join('');
    $('videoGrid').querySelectorAll('figure').forEach(f => f.addEventListener('click', () => {
      const v = CONFIG.videos[f.dataset.i];
      openModal(v.platform === 'youtube'
        ? `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`
        : `https://player.vimeo.com/video/${v.id}?autoplay=1`, false);
      track('ViewContent');
    }));
  }

  // reels
  if (display.showReels && CONFIG.reels && CONFIG.reels.length) {
    $('reelsGrid').innerHTML = CONFIG.reels.map((r, i) => `
      <button class="reel" data-i="${i}"><img loading="lazy" src="https://img.youtube.com/vi/${r.id}/hqdefault.jpg" alt="" onerror="this.remove()">
      ${PLAY}<b dir="rtl">${esc(r.title)}</b><span>Tap to play</span></button>`).join('');
    $('reelsGrid').querySelectorAll('.reel').forEach(b => b.addEventListener('click', () => {
      openModal(`https://www.youtube.com/embed/${CONFIG.reels[b.dataset.i].id}?autoplay=1&rel=0&playsinline=1`, true);
      track('ViewContent');
    }));
  } else $('reels').hidden = true;

  // certificates
  if (display.showCertificates) {
    $('certsGrid').innerHTML = CONFIG.certificates.map(c => `
      <div class="cert"><div class="lg" style="background:${esc(c.color)}22;color:${esc(c.color)};border:1px solid ${esc(c.color)}44">${esc(c.logo)}</div>
      <div><small>${esc(c.issuer)} · ${esc(c.date)}</small><b>${esc(c.title)}</b>
      ${c.credential && c.credential !== '#' ? `<a href="${esc(c.credential)}" target="_blank" rel="noopener">View credential ↗</a>` : ''}</div></div>`).join('');
  } else $('certificates').hidden = true;

  // socials
  $('contactSocials').innerHTML = Object.entries(social).filter(([, v]) => v).map(([k, v]) => {
    const [label, path] = SOC[k] || [k, ''];
    const href = k === 'email' ? `mailto:${v}` : v;
    return `<a class="btn" href="${esc(href)}" target="_blank" rel="noopener" data-k="${k}">${SV(path)}${label}</a>`;
  }).join('');
  $('contactSocials').addEventListener('click', e => { if (e.target.closest('a')) track('Contact'); });

  // contact form -> opens the visitor's mail app (no backend needed)
  $('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = `Project inquiry${f.get('service') ? ' — ' + f.get('service') : ''}`;
    const body = `${f.get('message')}\n\n— ${f.get('name')}`;
    track('Lead');
    location.href = `mailto:${identity.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  // scroll reveal + progress bar
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 });
  document.querySelectorAll('.card,.reel,.work figure,.pix div,.steps li,.cert,section h2,.lead,.eyebrow').forEach((el, i) => {
    el.classList.add('reveal'); el.style.transitionDelay = (i % 3) * 90 + 'ms'; io.observe(el);
  });
  const bar = $('bar');
  addEventListener('scroll', () => { const h = document.documentElement; bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%'; }, { passive: true });
});
