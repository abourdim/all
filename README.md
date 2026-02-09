# Workshop-Diy Kids Hub 🎮🌙

A **fun, multilingual hub** for all Workshop-Diy mini-apps — built for kids, beginners, and STEM classrooms.

> 🇫🇷 *Un hub multilingue et amusant pour toutes les mini-apps Workshop-Diy.*
>
> 🇸🇦 *مركز متعدد اللغات وممتع لجميع تطبيقات Workshop-Diy المصغرة.*

---

## ✨ Features / Fonctionnalités / الميزات

- 🎨 **7 Themes** — Dark, Light, Ocean, Space, Rainbow, Forest, Candy
- 🌍 **3 Languages** — English, Français, العربية (with full RTL support)
- 🔍 **Smart Search** — Fuzzy search across all apps
- 📂 **6 Categories** — micro:bit, Camera, Arabic, Classroom, Education, Tools
- ⭐ **Favorites** — Star your favorite apps (saved locally)
- 🎉 **Fun Interactions** — Confetti, sound effects, jokes, easter eggs
- 🖼️ **Auto Thumbnails** — Screenshots generated automatically via Puppeteer
- 🔄 **Auto-rebuild** — GitHub Action updates thumbnails daily
- 📱 **Responsive** — Mobile-first, touch-friendly
- ♿ **Accessible** — Keyboard navigation, ARIA labels, reduced motion

## 🚀 Quick Start

Just open `index.html` in your browser. No build step. No dependencies for the web app.

```bash
# To generate thumbnails (requires Node.js):
./gen_thumbs.sh

# Or use the full build pipeline:
./build.sh
```

## 📁 Project Structure

```
index.html          ← Main hub page
styles.css          ← 7 themes, RTL, animations
app.js              ← App logic, i18n, interactions
apps-data.json      ← App catalog (3 languages)
logo.svg            ← Workshop-Diy logo

# Scripts
build.sh            ← Smart incremental rebuild
script.sh           ← Clone all repos
screenshot.js       ← Puppeteer thumbnail generator
gen_thumbs.sh       ← Quick thumbnail pipeline

# CI/CD
.github/workflows/auto-thumbs.yml  ← Daily auto-rebuild

# Generated
thumbs/             ← App screenshots (auto-generated)
manifest.json       ← Thumbnail manifest
```

## 🏗️ Build Pipeline

```bash
./build.sh                 # Smart incremental (only changed repos)
./build.sh --force         # Full rebuild everything
./build.sh --thumbs-only   # Just regenerate screenshots
./build.sh --data-only     # Just refresh app catalog
./build.sh --deploy        # Rebuild + push to GitHub Pages
./build.sh --watch         # Poll every 5min for changes
```

## 📂 App Categories

| Category | Count | Description |
|----------|-------|-------------|
| 🤖 micro:bit & Robotics | 8 | Robot control, BLE, sensors |
| 📸 Camera & Vision | 3 | Face tracking, hand tracking |
| 🗣️ Arabic Language | 3 | TTS, STT, translation |
| 🏫 Classroom | 2 | WebRTC, PeerJS |
| 📚 Education | 3 | Crypto, security, simulation |
| 🛠️ Tools | 3 | Hub, AI toolkit, automation |

## 🧒 Target Audience

- Kids & beginners
- STEM classrooms
- Educators & workshop facilitators

---

Made with ❤️ by **Workshop-Diy** — Chelles, France

*Créé avec ❤️ par Workshop-Diy — Chelles, France*

*صُنع بـ ❤️ بواسطة Workshop-Diy — شيل، فرنسا*
