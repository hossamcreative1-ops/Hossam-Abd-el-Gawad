/**
 * ============================================================
 *  HOSSAM ABDEL-GAWAD — PORTFOLIO CONFIG
 *  ============================================================
 *  هذا الملف هو لوحة تحكمك الكاملة للموقع.
 *  عدّل أي قيمة هنا وسيتغير الموقع تلقائياً بدون لمس أي كود آخر.
 *  ============================================================
 */

const CONFIG = {

  // ─── الهوية الشخصية ──────────────────────────────────────
  identity: {
    name: "Hossam Abdel-Gawad",
    nameAr: "حسام عبد الجواد",
    title: "Multi-disciplinary Creative",
    tagline: "Graphic Design · Cinematic Editing · Marketing",
    subtag: "Luxury Content Powered by AI",
    bio: "I craft high-end visual experiences that blur the line between art and strategy — blending cinematic storytelling, bold graphic design, and AI-driven creativity to build brands that command attention.",
    email: "hossam@example.com",
    location: "Egypt",
  },

  // ─── الألوان (غيّر هذه القيم لتغيير ثيم الموقع فوراً) ─────
  theme: {
    accent:       "#C9A96E",   // الذهبي الرئيسي
    accentLight:  "#E8CFA0",   // ذهبي فاتح
    accentGlow:   "#C9A96E40", // توهج الذهبي
    bg:           "#080808",   // خلفية رئيسية
    bgCard:       "#111111",   // خلفية الكروت
    bgCardHover:  "#181818",   // hover للكروت
    surface:      "#1A1A1A",   // أسطح ثانوية
    border:       "#222222",   // الحدود
    textPrimary:  "#F5F0E8",   // النص الرئيسي
    textSecondary:"#888880",   // النص الثانوي
    textMuted:    "#444440",   // نص باهت
  },

  // ─── روابط التواصل الاجتماعي ─────────────────────────────
  social: {
    behance:   "https://behance.net/your-profile",
    linkedin:  "https://linkedin.com/in/your-profile",
    instagram: "https://instagram.com/your-profile",
    youtube:   "https://youtube.com/@your-channel",
    vimeo:     "",
    email:     "hossam@example.com",
  },

  // ─── قسم الأعمال — الفيديوهات ────────────────────────────
  // platform: "youtube" | "vimeo"
  // id: معرّف الفيديو من الرابط
  videos: [
    {
      id: "dQw4w9WgXcQ",
      platform: "youtube",
      title: "Brand Film — Luxury Fashion",
      category: "Cinematic Editing",
      tags: ["Luxury", "Fashion", "AI"],
      featured: true,
    },
    {
      id: "dQw4w9WgXcQ",
      platform: "youtube",
      title: "Product Launch — High-End Watch",
      category: "Cinematic Editing",
      tags: ["Product", "Luxury"],
      featured: false,
    },
    {
      id: "dQw4w9WgXcQ",
      platform: "youtube",
      title: "Social Media Reel — Beauty Brand",
      category: "Marketing",
      tags: ["Social", "Beauty"],
      featured: false,
    },
  ],

  // ─── قسم الأعمال — الجرافيك ──────────────────────────────
  // استبدل الـ src بروابط صورك الحقيقية
  designs: [
    {
      src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
      title: "Brand Identity — Noir Parfum",
      category: "Graphic Design",
      tags: ["Branding", "Luxury", "AI"],
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      title: "Editorial Layout — Fashion Magazine",
      category: "Graphic Design",
      tags: ["Editorial", "Print"],
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      title: "Campaign — AI Generated Visuals",
      category: "AI + Design",
      tags: ["AI", "Campaign"],
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1567359781514-81173b801d58?w=800&q=80",
      title: "Motion Graphics — Brand Story",
      category: "Motion",
      tags: ["Motion", "Brand"],
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
      title: "Social Media Kit — Luxury Real Estate",
      category: "Marketing",
      tags: ["Social", "Real Estate"],
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80",
      title: "Visual Identity — Tech Startup",
      category: "Graphic Design",
      tags: ["Tech", "Identity"],
      featured: false,
    },
  ],

  // ─── الشهادات ──────────────────────────────────────────────
  certificates: [
    {
      title: "Strategy Consulting Essentials",
      issuer: "McKinsey & Company",
      issuerShort: "McKinsey",
      date: "2024",
      credential: "#",
      logo: "M",  // حرف أو رمز يمثل الجهة
      color: "#1a73e8",
      featured: true,
    },
    {
      title: "Google Digital Marketing",
      issuer: "Google",
      issuerShort: "Google",
      date: "2024",
      credential: "#",
      logo: "G",
      color: "#EA4335",
      featured: false,
    },
    {
      title: "Meta Social Media Marketing",
      issuer: "Meta",
      issuerShort: "Meta",
      date: "2023",
      credential: "#",
      logo: "f",
      color: "#1877F2",
      featured: false,
    },
    {
      title: "Adobe Certified Professional",
      issuer: "Adobe",
      issuerShort: "Adobe",
      date: "2023",
      credential: "#",
      logo: "Ai",
      color: "#FF9A00",
      featured: false,
    },
  ],

  // ─── خدماتي ────────────────────────────────────────────────
  services: [
    {
      icon: "◈",
      title: "Graphic Design",
      desc: "Brand identities, editorial layouts, and visual systems built for luxury markets.",
    },
    {
      icon: "◉",
      title: "Cinematic Editing",
      desc: "Film-quality video production and post-processing for brands that demand excellence.",
    },
    {
      icon: "◇",
      title: "AI-Powered Content",
      desc: "Cutting-edge visuals and campaigns leveraging the latest AI tools — Midjourney, Sora, Runway.",
    },
    {
      icon: "◈",
      title: "Marketing Strategy",
      desc: "High-impact campaigns crafted with data-driven insight and creative boldness.",
    },
  ],

  // ─── إعدادات العرض ────────────────────────────────────────
  display: {
    gridColumns: 3,          // عدد أعمدة الجاليري على الـ Desktop
    showVideoSection: true,
    showDesignSection: true,
    showCertificates: true,
    showServices: true,
    enableCursor: true,       // مؤشر مخصص
    enableParticles: true,    // جسيمات الخلفية
    enableScrollAnimations: true,
  },

};

// ─── تطبيق الألوان تلقائياً ───────────────────────────────
(function applyTheme() {
  const root = document.documentElement;
  const t = CONFIG.theme;
  root.style.setProperty("--accent",        t.accent);
  root.style.setProperty("--accent-light",  t.accentLight);
  root.style.setProperty("--accent-glow",   t.accentGlow);
  root.style.setProperty("--bg",            t.bg);
  root.style.setProperty("--bg-card",       t.bgCard);
  root.style.setProperty("--bg-card-hover", t.bgCardHover);
  root.style.setProperty("--surface",       t.surface);
  root.style.setProperty("--border",        t.border);
  root.style.setProperty("--text-primary",  t.textPrimary);
  root.style.setProperty("--text-secondary",t.textSecondary);
  root.style.setProperty("--text-muted",    t.textMuted);
})();