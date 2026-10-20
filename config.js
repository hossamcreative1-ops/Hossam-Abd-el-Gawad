/**
 * HOSSAM ABDEL-GAWAD — PORTFOLIO CONFIG
 * كل بيانات الموقع هنا. عدّل هنا بس وارفع الملف.
 */
const CONFIG = {

  identity: {
    name: "Hossam Abdel-Gawad",
    nameAr: "حسام عبد الجواد",
    title: "Visual Content Creator",
    tagline: "Social Media Design · Reels Editing · Meta Ads",
    subtag: "Turning ideas into tangible results",
    bio: "I’m Hossam, a visual content creator. I design social media content, edit Reels that hold attention, and run Meta Ads that are built to be measured.",
    email: "hossam.creative1@gmail.com",
    location: "Egypt",
  },

  theme: {
    accent:        "#ff6a4d",
    accentLight:   "#ff9d85",
    accentGlow:    "#ff6a4d40",
    bg:            "#121110",
    bgCard:        "#1b1a18",
    bgCardHover:   "#232120",
    surface:       "#1b1a18",
    border:        "#2e2c29",
    textPrimary:   "#f3f1ec",
    textSecondary: "#a09c94",
    textMuted:     "#6b6860",
  },

  social: {
    behance:   "https://www.behance.net/ef55c0e3",
    linkedin:  "",
    instagram: "https://www.instagram.com/3bgwed/?hl=ar",
    youtube:   "https://www.youtube.com/@hossam_abdel_gawed",
    vimeo:     "",
    email:     "hossam.creative1@gmail.com",
  },

  // الريلز / الشورتس (المعرف = الجزء بعد /shorts/ في اللينك)
  reels: [
    { id: "ELxaMbUtJXU", title: "هل فعلاً أول مشهد بيحدد قوة الفيديو؟" },
    { id: "bpUjK7dXmJw", title: "التجربة الأولى للتصوير بالموبايل" },
    { id: "aU3woKhzT74", title: "الفنيات قبل الأدوات" }
  ],

  videos: [
    { id: "Ye7b_9H83wA", platform: "youtube", title: "أول فيديو لي على البرمير - هل يستحق المشاهدة؟", category: "Edit", tags: [], featured: true },
    { id: "1188893778",  platform: "vimeo",   title: "أول فيديو لمحاولة الحفاظ على الملامح",          category: "AI",   tags: [], featured: false }
  ],

  designs: [
    { src: "d1.jpg", title: "White Black Friday",                    category: "Social media design", tags: [], featured: false },
    { src: "d2.jpg", title: "Gaza — From Ashes, We Rise",            category: "Photo manipulation",  tags: [], featured: false },
    { src: "d3.jpg", title: "Saudi National Day 95",                 category: "Social media design", tags: [], featured: false },
    { src: "d4.jpg", title: "Ramadan campaign banner",               category: "Ad creative",         tags: [], featured: true  },
    { src: "d5.jpg", title: "Saudi National Day 95 · B&W concept",   category: "Concept study",       tags: [], featured: false },
    { src: "d6.jpg", title: "Saudi National Day 95 · Colour concept",category: "Concept study",       tags: [], featured: false },
    { src: "https://res.cloudinary.com/dlv72mxl5/image/upload/v1776959339/474092009_122208513122210045_7246867498698929885_n_hs5fnl.jpg", title: "Dental clinic design", category: "Social media design", tags: [], featured: false },
    { src: "https://res.cloudinary.com/dlv72mxl5/image/upload/v1776959340/hossam-abdel_gawx-_lzgabt.jpg", title: "Poster", category: "Photo manipulation", tags: [], featured: false }
  ],

  certificates: [
    { title: "Strategy Consulting Essentials", issuer: "McKinsey & Company", logo: "M", date: "2024", credential: "#", color: "#1a73e8", featured: true },
    { title: "Google Digital Marketing", issuer: "Google", logo: "G", date: "2024", credential: "#", color: "#EA4335", featured: false },
    { title: "أساسيات الرسم للتحريك", issuer: "Yanfaa", logo: "Y", date: "2024", credential: "https://drive.google.com/file/d/1hiKbUNzPDkijNq0uGnvULbRdv9Ffzh4o/view?usp=drive_link", color: "#8aa0ff", featured: false },
    { title: "Reels From Scratch To Screen", issuer: "Yanfaa", logo: "Y", date: "2024", credential: "https://drive.google.com/file/d/1r9Xel3dTGHLS72E30oFYT7w0-_EnIVNY/view?usp=drive_link", color: "#8aa0ff", featured: false }
  ],

  // icon: design | video | ads
  services: [
    { icon: "design", title: "Social Media Design", desc: "Posts, carousels and stories with a consistent look, so your page feels like one brand.", main: true },
    { icon: "video",  title: "Reels & Shorts Editing", desc: "Clean cuts, captions and pacing made for the first three seconds and the last ten." },
    { icon: "ads",    title: "Meta Ads", desc: "Pixel, catalog and campaign structure set up properly, with clear naming so results are easy to read." }
  ],

  display: {
    showReels: true,
    showVideoSection: true,
    showDesignSection: true,
    showCertificates: true,
    showServices: true,
  },
};

(function applyTheme() {
  const r = document.documentElement.style, t = CONFIG.theme;
  r.setProperty("--accent", t.accent);        r.setProperty("--accent-light", t.accentLight);
  r.setProperty("--accent-glow", t.accentGlow); r.setProperty("--bg", t.bg);
  r.setProperty("--bg-card", t.bgCard);       r.setProperty("--bg-card-hover", t.bgCardHover);
  r.setProperty("--surface", t.surface);      r.setProperty("--border", t.border);
  r.setProperty("--text-primary", t.textPrimary); r.setProperty("--text-secondary", t.textSecondary);
  r.setProperty("--text-muted", t.textMuted);
})();
