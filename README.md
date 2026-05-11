# 🌿 Farm Guide — East Africa
### Built with React + Vite

A beautiful, upgraded React version of the Fanatic UG Farm Guide app.

---

## 📁 Project Structure

```
farmguide/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          # App entry point
    ├── App.jsx           # Root with navigation
    ├── index.css         # Global styles + Google Fonts
    ├── components/
    │   └── BottomNav.jsx # Bottom tab navigation
    ├── pages/
    │   ├── Home.jsx      # Home / dashboard
    │   ├── Crops.jsx     # Crop guide with search & filter
    │   ├── Livestock.jsx # Livestock guide with search & filter
    │   └── OtherPages.jsx# Chat, Weather, Profile pages
    └── data/
        └── index.js      # All crops, livestock, seasons data
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Open in browser
Visit: `http://localhost:5173`

### 4. Build for production
```bash
npm run build
```

---

## ✨ Features

- **Home** — Hero banner, quick access cards, popular crops, daily tip
- **Crops** — 8 crops with search, category filter tabs, detailed crop pages
- **Livestock** — 8 animals with search, category filter, detailed rearing guides
- **Chat** — Community chat with channels (General, Crops, Livestock, Diseases, Weather, Market)
- **Weather** — Current weather card + East African farming seasons
- **Profile** — Farm activity tracker with add/delete/status toggle

---

## 🎨 Design Highlights

- **Fonts**: Fraunces (display) + DM Sans (body)
- **Colors**: Deep forest green `#1b4332` + warm amber `#d4860a` + cream `#f8faf8`
- **Mobile-first** layout, max-width 430px
- Smooth page transitions and interactive states
- Real Unsplash images for crops and livestock

---

## 📦 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts — it auto-detects Vite ✅
