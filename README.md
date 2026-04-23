# Hossam Abdel-Gawad — Personal Portfolio

> Multi-disciplinary Creative Portfolio — Graphic Design · Cinematic Editing · AI Marketing

---

## 📁 هيكل الملفات

```
portfolio/
├── index.html      ← صفحة الموقع الرئيسية
├── style.css       ← كل التصميم والألوان
├── config.js       ← ⭐ لوحة تحكمك الكاملة
├── app.js          ← المنطق البرمجي (لا تحتاج تعدله)
└── README.md       ← هذا الملف
```

---

## ⚡ كيفية التخصيص (config.js فقط!)

افتح ملف `config.js` وعدّل ما تريد:

### 1. معلوماتك الشخصية
```js
identity: {
  name: "اسمك هنا",
  tagline: "تخصصاتك",
  bio: "نص عنك",
  email: "your@email.com",
  location: "Egypt",
}
```

### 2. الألوان — غيّر الثيم فوراً
```js
theme: {
  accent: "#C9A96E",    // اللون الذهبي — غيّره لأي لون تريد
  bg:     "#080808",    // لون الخلفية
  // ... إلخ
}
```
**مثال:** لتغيير اللون الرئيسي للأزرق الكهربائي: `accent: "#00F5FF"`

### 3. إضافة فيديو من يوتيوب
```js
videos: [
  {
    id: "YOUTUBE_VIDEO_ID",   // المعرف من الرابط: youtube.com/watch?v=هنا
    platform: "youtube",
    title: "اسم العمل",
    category: "Cinematic Editing",
    tags: ["Luxury", "Fashion"],
    featured: true,   // true = يأخذ عمودين في الشبكة
  }
]
```

### 4. إضافة تصميم جرافيك
```js
designs: [
  {
    src: "https://رابط-الصورة.com/image.jpg",
    title: "اسم التصميم",
    category: "Graphic Design",
    tags: ["Branding", "AI"],
    featured: false,
  }
]
```
> **نصيحة:** ارفع صورك على [Cloudinary](https://cloudinary.com) (مجاناً) أو [ImgBB](https://imgbb.com) واستخدم الرابط المباشر.

### 5. إضافة شهادة
```js
certificates: [
  {
    title: "اسم الشهادة",
    issuer: "الجهة المانحة",
    date: "2024",
    credential: "https://رابط-الشهادة",
    logo: "M",      // حرف أو رمز
    color: "#1a73e8",  // لون الجهة
    featured: true,
  }
]
```

---

## 🚀 رفع الموقع على GitHub Pages

### الخطوات:

1. **أنشئ Repository جديد** على GitHub باسم: `username.github.io`
   (استبدل `username` باسم حسابك على GitHub)

2. **ارفع الملفات الأربعة:**
   ```
   index.html
   style.css
   config.js
   app.js
   ```

3. **فعّل GitHub Pages:**
   - اذهب إلى: `Settings → Pages`
   - اختر `Source: Deploy from a branch`
   - اختر `Branch: main` + `/ (root)`
   - اضغط **Save**

4. **موقعك سيكون متاحاً على:**
   `https://username.github.io`

### تحديث الموقع لاحقاً:
- عدّل أي شيء في `config.js`
- ارفع الملف المعدّل على GitHub
- الموقع يتحدث خلال دقيقتين ✓

---

## 🔗 ربط الموقع بـ Google Sheets (اختياري — للتحديث بدون كود)

إذا أردت التحكم في محتوى الموقع من Google Sheets:

### الخطوة 1: أنشئ Google Sheet
أنشئ جدول بهذه الأعمدة:
```
| type    | id/src          | title        | category         | tags        | featured |
|---------|-----------------|--------------|------------------|-------------|----------|
| video   | dQw4w9WgXcQ     | Brand Film   | Cinematic Editing| Luxury,AI   | true     |
| design  | https://img...  | Logo Design  | Graphic Design   | Branding    | false    |
```

### الخطوة 2: انشر الـ Sheet كـ CSV
- `File → Share → Publish to web`
- اختر الـ Sheet المطلوب
- اختر **CSV format**
- انسخ الرابط

### الخطوة 3: أضف هذا الكود في config.js
في نهاية ملف `config.js`، أضف:
```js
// Google Sheets Integration
const SHEET_URL = "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?output=csv";

async function loadFromSheets() {
  try {
    const res = await fetch(SHEET_URL);
    const csv = await res.text();
    const rows = csv.split('\n').slice(1).map(r => r.split(','));
    
    CONFIG.videos = rows
      .filter(r => r[0] === 'video')
      .map(r => ({
        id: r[1].trim(),
        platform: 'youtube',
        title: r[2].trim(),
        category: r[3].trim(),
        tags: r[4].split('|').map(t => t.trim()),
        featured: r[5].trim() === 'true',
      }));

    CONFIG.designs = rows
      .filter(r => r[0] === 'design')
      .map(r => ({
        src: r[1].trim(),
        title: r[2].trim(),
        category: r[3].trim(),
        tags: r[4].split('|').map(t => t.trim()),
        featured: r[5].trim() === 'true',
      }));

    console.log('✓ Content loaded from Google Sheets');
  } catch (e) {
    console.warn('Could not load from Sheets, using local config:', e);
  }
}

// Uncomment this line when your Sheet URL is ready:
// loadFromSheets();
```

---

## 🎨 أفكار لتغيير الثيم

| الثيم | accent | bg |
|-------|--------|-----|
| الذهبي (الحالي) | `#C9A96E` | `#080808` |
| أزرق كهربائي | `#00F5FF` | `#050510` |
| أخضر نيون | `#00FF87` | `#050A07` |
| بنفسجي فاخر | `#B57BFF` | `#06040E` |
| أحمر دموي | `#FF3D3D` | `#080404` |

---

## 📬 للتواصل

هذا الموقع مبني خصيصاً لـ **Hossam Abdel-Gawad** — كل الحقوق محفوظة.
