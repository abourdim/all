/* ============================================================
   Workshop-Diy Kids Hub — app.js
   i18n (EN/FR/AR) · 7 Themes · Fun · Accessible
   ============================================================ */

const USER = "abourdim";
const VIEW = (repo) => `https://raw.githack.com/${USER}/${repo}/main/index.html`;

/* ──────── i18n STRINGS ──────── */
const I18N = {
  en: {
    subtitle: "Fun mini-apps for curious kids ✨",
    search_placeholder: 'Search apps\u2026 (try "robot" or "emoji")',
    filter_all: "All", filter_microbit: "micro:bit", filter_camera: "Camera",
    filter_arabic: "Arabic", filter_classroom: "Classroom",
    filter_education: "Education", filter_tools: "Tools",
    shuffle: "Shuffle",
    no_results: "No apps found. Try another word 🧠",
    footer: 'Made by <strong>Workshop-Diy</strong> \u2022 Click "View" to play!',
    github: "GitHub ↗", view_btn: "View ▶",
    badge_new: "NEW", badge_popular: "Popular", badge_hub: "Hub",
    stats_apps: "apps", stats_cats: "categories", stats_made: "Made with ❤️",
    greeting_morning: "Good morning, explorer! ☀️",
    greeting_afternoon: "Good afternoon, little genius! 🌤️",
    greeting_evening: "Good evening, night owl! 🦉",
    explorer_prefix: "You've explored",
    explorer_suffix: "apps!",
    explorer_title_0: "Start clicking! 🐣",
    explorer_title_5: "Curious Kid! 🧒",
    explorer_title_10: "Tech Explorer! 🚀",
    explorer_title_15: "Super Hacker! 💻",
    explorer_title_22: "Workshop Master! 🏆",
    tooltips: [
      "Whoa, this one's cool! 😲", "Try me! I dare you! 🐔", "My favorite! 💜",
      "This is so fun! 🎉", "Click me, click me! 🤩", "Beep boop! 🤖",
      "Magic inside! ✨", "You'll love this one! 🥰"
    ],
    jokes: [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🪲",
      "What's a robot's favorite snack? Micro-chips! 🍟",
      "Why was the computer cold? It left its Windows open! 🥶",
      "What do you call a sleeping dinosaur? A dino-snore! 🦕",
      "Why did the emoji go to school? To get a little 😀-ucation!",
      "How does a computer get drunk? It takes screenshots! 📸"
    ]
  },
  fr: {
    subtitle: "Mini-apps amusantes pour enfants curieux ✨",
    search_placeholder: "Chercher… (essaie « robot » ou « emoji »)",
    filter_all: "Tous", filter_microbit: "micro:bit", filter_camera: "Caméra",
    filter_arabic: "Arabe", filter_classroom: "Classe",
    filter_education: "Éducation", filter_tools: "Outils",
    shuffle: "Mélanger",
    no_results: "Aucune app trouvée. Essaie un autre mot 🧠",
    footer: "Créé par <strong>Workshop-Diy</strong> • Clique sur « Voir » pour jouer !",
    github: "GitHub ↗", view_btn: "Voir ▶",
    badge_new: "NOUVEAU", badge_popular: "Populaire", badge_hub: "Hub",
    stats_apps: "apps", stats_cats: "catégories", stats_made: "Fait avec ❤️",
    greeting_morning: "Bonjour, petit explorateur ! ☀️",
    greeting_afternoon: "Bon après-midi, petit génie ! 🌤️",
    greeting_evening: "Bonsoir, couche-tard ! 🦉",
    explorer_prefix: "Tu as exploré",
    explorer_suffix: "apps !",
    explorer_title_0: "Commence à cliquer ! 🐣",
    explorer_title_5: "Enfant curieux ! 🧒",
    explorer_title_10: "Explorateur tech ! 🚀",
    explorer_title_15: "Super hacker ! 💻",
    explorer_title_22: "Maître Workshop ! 🏆",
    tooltips: [
      "Waouh, celui-ci est génial ! 😲", "Essaie-moi ! Chiche ! 🐔", "Mon préféré ! 💜",
      "C'est trop fun ! 🎉", "Clique-moi ! 🤩", "Bip boup ! 🤖",
      "Magie dedans ! ✨", "Tu vas adorer ! 🥰"
    ],
    jokes: [
      "Pourquoi les devs préfèrent le mode sombre ? La lumière attire les bugs ! 🪲",
      "Quel est le goûter préféré d'un robot ? Des micro-chips ! 🍟",
      "Pourquoi l'ordinateur avait froid ? Il avait laissé ses fenêtres ouvertes ! 🥶",
      "Comment appelle-t-on un dinosaure endormi ? Un dino-ronfle ! 🦕",
      "Pourquoi l'emoji va à l'école ? Pour avoir une 😀-ucation !",
      "Comment un ordinateur s'enivre ? Il prend des captures d'écran ! 📸"
    ]
  },
  ar: {
    subtitle: "تطبيقات مصغرة ممتعة للأطفال الفضوليين ✨",
    search_placeholder: "بحث عن تطبيقات… (جرّب «روبوت» أو «إيموجي»)",
    filter_all: "الكل", filter_microbit: "مايكرو:بت", filter_camera: "كاميرا",
    filter_arabic: "عربي", filter_classroom: "فصل",
    filter_education: "تعليم", filter_tools: "أدوات",
    shuffle: "خلط",
    no_results: "لم يتم العثور على تطبيقات. جرّب كلمة أخرى 🧠",
    footer: "صنع بواسطة <strong>Workshop-Diy</strong> • اضغط \"عرض\" للتجربة!",
    github: "GitHub ↗", view_btn: "عرض ▶",
    badge_new: "جديد", badge_popular: "شائع", badge_hub: "مركز",
    stats_apps: "تطبيق", stats_cats: "فئات", stats_made: "صُنع بـ ❤️",
    greeting_morning: "صباح الخير يا مستكشف! ☀️",
    greeting_afternoon: "مساء الخير يا عبقري! 🌤️",
    greeting_evening: "مساء الخير يا بومة الليل! 🦉",
    explorer_prefix: "لقد استكشفت",
    explorer_suffix: "تطبيقات!",
    explorer_title_0: "ابدأ بالنقر! 🐣",
    explorer_title_5: "طفل فضولي! 🧒",
    explorer_title_10: "مستكشف تقني! 🚀",
    explorer_title_15: "هاكر خارق! 💻",
    explorer_title_22: "سيد الورشة! 🏆",
    tooltips: [
      "واو، هذا رائع! 😲", "جرّبني! أتحداك! 🐔", "المفضل لدي! 💜",
      "هذا ممتع جدًا! 🎉", "انقر عليّ! 🤩", "بيب بوب! 🤖",
      "سحر بالداخل! ✨", "ستحب هذا! 🥰"
    ],
    jokes: [
      "لماذا يفضل المبرمجون الوضع المظلم؟ لأن الضوء يجذب الحشرات! 🪲",
      "ما هي وجبة الروبوت المفضلة؟ رقائق صغيرة! 🍟",
      "لماذا كان الكمبيوتر باردًا؟ لأنه ترك نوافذه مفتوحة! 🥶",
      "ماذا تسمي ديناصورًا نائمًا؟ دينو-شخير! 🦕",
      "لماذا ذهب الإيموجي إلى المدرسة؟ ليحصل على 😀-تعليم!",
      "كيف يسكر الكمبيوتر؟ يأخذ لقطات شاشة! 📸"
    ]
  }
};

/* ──────── LOAD APP DATA ──────── */
let APPS = [];
let LANG = localStorage.getItem("wdiy-lang") || "en";
let THEME = localStorage.getItem("wdiy-theme") || "dark";
let SOUND = localStorage.getItem("wdiy-sound") !== "off";
let FAVS = JSON.parse(localStorage.getItem("wdiy-favs") || "[]");
let EXPLORED = JSON.parse(localStorage.getItem("wdiy-explored") || "[]");
let VIEW_MODE = localStorage.getItem("wdiy-view") || "grid";
let logoClicks = 0;

/* ──────── DOM REFS ──────── */
const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const q = document.getElementById("q");
const clearBtn = document.getElementById("clear-search");
const filterButtons = [...document.querySelectorAll(".mode-btn")];
const langButtons = [...document.querySelectorAll(".lang-btn")];
const themeButtons = [...document.querySelectorAll(".theme-btn")];
const viewButtons = [...document.querySelectorAll(".view-btn")];
const soundToggle = document.getElementById("sound-toggle");
const scrollTopBtn = document.getElementById("scroll-top");
const shuffleBtn = document.getElementById("shuffle-btn");
const greetingBar = document.getElementById("greeting-bar");
const statsBar = document.getElementById("stats-bar");
const jokeBar = document.getElementById("joke-bar");
const explorerBar = document.getElementById("explorer-bar");
const siteLogo = document.getElementById("site-logo");
const particleCanvas = document.getElementById("particles");
const confettiCanvas = document.getElementById("confetti-canvas");

let currentFilter = "";

/* ============================================================
   INLINE APP DATA (works from file:// without server)
   ============================================================ */
const INLINE_APPS = [
  { name:"all", emoji:"\u{1F3E0}", category:"tools", badge:"hub", tags:["hub","portal","web"],
    desc:{ en:"The Workshop-Diy hub \u2014 browse every mini-app in one place.", fr:"Le hub Workshop-Diy \u2014 explorez toutes les mini-apps au m\u00eame endroit.", ar:"\u0645\u0631\u0643\u0632 Workshop-Diy \u2014 \u062a\u0635\u0641\u062d \u062c\u0645\u064a\u0639 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0645\u0635\u063a\u0631\u0629 \u0641\u064a \u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f." }},
  { name:"bit-bot", emoji:"\u{1F916}", category:"microbit", badge:"popular", tags:["robot","micro:bit","BLE"],
    desc:{ en:"Control a robot with your micro:bit over Bluetooth \u2014 drive, steer & play!", fr:"Contr\u00f4lez un robot avec votre micro:bit en Bluetooth \u2014 conduisez et jouez !", ar:"\u062a\u062d\u0643\u0645 \u0641\u064a \u0631\u0648\u0628\u0648\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 micro:bit \u0639\u0628\u0631 \u0627\u0644\u0628\u0644\u0648\u062a\u0648\u062b!" }},
  { name:"bit-playground", emoji:"\u{1F9E9}", category:"microbit", badge:"", tags:["micro:bit","BLE","web"],
    desc:{ en:"Play with the BBC micro:bit from your browser (BLE): LEDs, sensors, servos, gamepad, charts!", fr:"Jouez avec le BBC micro:bit depuis votre navigateur (BLE) : LEDs, capteurs, servos, manette !", ar:"\u0627\u0644\u0639\u0628 \u0645\u0639 BBC micro:bit \u0645\u0646 \u0645\u062a\u0635\u0641\u062d\u0643!" }},
  { name:"magic-hands", emoji:"\u{1FA84}", category:"camera", badge:"popular", tags:["camera","hand-tracking","fun"],
    desc:{ en:"Wave your hands in front of the camera to trigger magic effects like confetti & trails.", fr:"Agitez vos mains devant la cam\u00e9ra pour d\u00e9clencher des effets magiques.", ar:"\u0644\u0648\u0651\u062d \u0628\u064a\u062f\u064a\u0643 \u0623\u0645\u0627\u0645 \u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0627 \u0644\u0625\u0637\u0644\u0627\u0642 \u062a\u0623\u062b\u064a\u0631\u0627\u062a \u0633\u062d\u0631\u064a\u0629." }},
  { name:"bitmoji-lab", emoji:"\u{1F604}", category:"microbit", badge:"", tags:["emoji","micro:bit","BLE"],
    desc:{ en:"Turn emojis into colorful micro:bit LED art and send them wirelessly.", fr:"Transformez des emojis en art LED color\u00e9 sur micro:bit.", ar:"\u062d\u0648\u0651\u0644 \u0627\u0644\u0631\u0645\u0648\u0632 \u0627\u0644\u062a\u0639\u0628\u064a\u0631\u064a\u0629 \u0625\u0644\u0649 \u0641\u0646 LED \u0645\u0644\u0648\u0651\u0646 \u0639\u0644\u0649 micro:bit." }},
  { name:"rxy", emoji:"\u{1F39B}\uFE0F", category:"microbit", badge:"", tags:["builder","micro:bit","BLE"],
    desc:{ en:"Build a Bluetooth remote for micro:bit \u2014 no coding, just click & play.", fr:"Construisez une t\u00e9l\u00e9commande Bluetooth pour micro:bit \u2014 sans coder.", ar:"\u0623\u0646\u0634\u0626 \u062c\u0647\u0627\u0632 \u062a\u062d\u0643\u0645 \u0628\u0644\u0648\u062a\u0648\u062b \u0644\u0640 micro:bit \u2014 \u0628\u062f\u0648\u0646 \u0628\u0631\u0645\u062c\u0629." }},
  { name:"usb-logger", emoji:"\u{1F50C}", category:"microbit", badge:"", tags:["micro:bit","serial","web"],
    desc:{ en:"Talk to your micro:bit over USB serial from the browser (send/receive + speed test).", fr:"Communiquez avec votre micro:bit via USB s\u00e9rie depuis le navigateur.", ar:"\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 micro:bit \u0639\u0628\u0631 USB \u0627\u0644\u062a\u0633\u0644\u0633\u0644\u064a \u0645\u0646 \u0627\u0644\u0645\u062a\u0635\u0641\u062d." }},
  { name:"ble-logger", emoji:"\u{1F4E1}", category:"microbit", badge:"", tags:["BLE","micro:bit","tools"],
    desc:{ en:"Bluetooth logger / playground for micro:bit experiments.", fr:"Enregistreur Bluetooth pour exp\u00e9riences micro:bit.", ar:"\u0645\u0633\u062c\u0644 \u0628\u0644\u0648\u062a\u0648\u062b \u0644\u062a\u062c\u0627\u0631\u0628 micro:bit." }},
  { name:"mission-control", emoji:"\u{1F680}", category:"classroom", badge:"", tags:["webrtc","kids","BLE"],
    desc:{ en:"Mission control: video/chat + buttons to send commands (and optional micro:bit BLE).", fr:"Contr\u00f4le de mission : vid\u00e9o/chat + boutons pour envoyer des commandes.", ar:"\u0645\u0631\u0643\u0632 \u0627\u0644\u062a\u062d\u0643\u0645: \u0641\u064a\u062f\u064a\u0648/\u062f\u0631\u062f\u0634\u0629 + \u0623\u0632\u0631\u0627\u0631 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631." }},
  { name:"classroom", emoji:"\u{1F3EB}", category:"classroom", badge:"new", tags:["peerjs","classroom","webrtc"],
    desc:{ en:"PeerJS Cloud Classroom Lite \u2014 simple room-code classroom for up to ~12 students.", fr:"PeerJS Cloud Classroom Lite \u2014 salle de classe simple avec code pour ~12 \u00e9l\u00e8ves.", ar:"PeerJS Cloud Classroom Lite \u2014 \u0641\u0635\u0644 \u062f\u0631\u0627\u0633\u064a \u0628\u0633\u064a\u0637 \u0628\u0631\u0645\u0632 \u063a\u0631\u0641\u0629." }},
  { name:"claude-toolkit", emoji:"\u{1F9F0}", category:"tools", badge:"new", tags:["ai","claude","tools"],
    desc:{ en:"A toolkit for building apps and workflows powered by Claude AI.", fr:"Une bo\u00eete \u00e0 outils pour cr\u00e9er des apps avec Claude AI.", ar:"\u0645\u062c\u0645\u0648\u0639\u0629 \u0623\u062f\u0648\u0627\u062a \u0644\u0628\u0646\u0627\u0621 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Claude AI." }},
  { name:"crypto-academy", emoji:"\u{1F4B0}", category:"education", badge:"", tags:["crypto","blockchain","education"],
    desc:{ en:"Learn about cryptocurrency and blockchain with interactive lessons.", fr:"Apprenez la cryptomonnaie et la blockchain avec des le\u00e7ons interactives.", ar:"\u062a\u0639\u0644\u0645 \u0639\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u062a \u0627\u0644\u0645\u0634\u0641\u0631\u0629 \u0648\u0627\u0644\u0628\u0644\u0648\u0643\u062a\u0634\u064a\u0646." }},
  { name:"arabic-translator", emoji:"\u{1F4D6}", category:"arabic", badge:"", tags:["arabic","translate","browser-only"],
    desc:{ en:"Arabic translator app that runs entirely in the browser \u2014 no server, no API keys.", fr:"Traducteur arabe qui fonctionne enti\u00e8rement dans le navigateur.", ar:"\u062a\u0637\u0628\u064a\u0642 \u0645\u062a\u0631\u062c\u0645 \u0639\u0631\u0628\u064a \u064a\u0639\u0645\u0644 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0641\u064a \u0627\u0644\u0645\u062a\u0635\u0641\u062d." }},
  { name:"arabic-speaker", emoji:"\u{1F5E3}\uFE0F", category:"arabic", badge:"", tags:["arabic","tts","stt"],
    desc:{ en:"Arabic TTS + STT in the browser using Web Speech API (no backend).", fr:"Synth\u00e8se et reconnaissance vocale arabe dans le navigateur.", ar:"\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0646\u0635 \u0625\u0644\u0649 \u0643\u0644\u0627\u0645 \u0648\u0627\u0644\u0643\u0644\u0627\u0645 \u0625\u0644\u0649 \u0646\u0635 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629." }},
  { name:"piper-arabic-tts", emoji:"\u{1F399}\uFE0F", category:"arabic", badge:"", tags:["arabic","piper","wasm"],
    desc:{ en:"Arabic TTS demo using Piper (WASM).", fr:"D\u00e9mo de synth\u00e8se vocale arabe avec Piper (WASM).", ar:"\u0639\u0631\u0636 \u062a\u062c\u0631\u064a\u0628\u064a \u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0646\u0635 \u0625\u0644\u0649 \u0643\u0644\u0627\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Piper." }},
  { name:"teachable-machine", emoji:"\u{1F9E0}", category:"microbit", badge:"popular", tags:["ml","micro:bit","BLE"],
    desc:{ en:"Teach gestures/sounds, then control a micro:bit over Bluetooth.", fr:"Enseignez des gestes/sons, puis contr\u00f4lez un micro:bit en Bluetooth.", ar:"\u0639\u0644\u0651\u0645 \u0625\u064a\u0645\u0627\u0621\u0627\u062a/\u0623\u0635\u0648\u0627\u062a\u060c \u062b\u0645 \u062a\u062d\u0643\u0645 \u0641\u064a micro:bit \u0639\u0628\u0631 \u0627\u0644\u0628\u0644\u0648\u062a\u0648\u062b." }},
  { name:"face-quest", emoji:"\u{1F575}\uFE0F", category:"camera", badge:"", tags:["camera","ai","micro:bit"],
    desc:{ en:"Face Quest \u2014 a face game you can play with the camera (privacy-first: runs locally).", fr:"Face Quest \u2014 un jeu facial avec la cam\u00e9ra (fonctionne localement).", ar:"Face Quest \u2014 \u0644\u0639\u0628\u0629 \u0648\u062c\u0648\u0647 \u062a\u0644\u0639\u0628\u0647\u0627 \u0628\u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0627." }},
  { name:"talking-robot", emoji:"\u{1F916}", category:"microbit", badge:"", tags:["robot","speech","BLE"],
    desc:{ en:"A talking robot that can speak, listen, show emotions, and message a micro:bit.", fr:"Un robot parlant qui peut parler, \u00e9couter et montrer des \u00e9motions.", ar:"\u0631\u0648\u0628\u0648\u062a \u0645\u062a\u0643\u0644\u0645 \u064a\u0645\u0643\u0646\u0647 \u0627\u0644\u062a\u062d\u062f\u062b \u0648\u0627\u0644\u0627\u0633\u062a\u0645\u0627\u0639." }},
  { name:"face-tracking", emoji:"\u{1F60E}", category:"camera", badge:"", tags:["camera","face-tracking","BLE"],
    desc:{ en:"Kids Edition face tracking with camera events and optional micro:bit BLE.", fr:"Suivi de visage \u00e9dition enfants avec \u00e9v\u00e9nements cam\u00e9ra.", ar:"\u062a\u062a\u0628\u0639 \u0627\u0644\u0648\u062c\u0647 \u0625\u0635\u062f\u0627\u0631 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0645\u0639 \u0623\u062d\u062f\u0627\u062b \u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0627." }},
  { name:"pentest-lab", emoji:"\u{1F510}", category:"education", badge:"", tags:["security","pentest","education"],
    desc:{ en:"A beginner-friendly penetration testing lab to learn cybersecurity basics.", fr:"Un labo de test d'intrusion pour d\u00e9butants.", ar:"\u0645\u062e\u062a\u0628\u0631 \u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u062e\u062a\u0631\u0627\u0642 \u0644\u0644\u0645\u0628\u062a\u062f\u0626\u064a\u0646." }},
  { name:"production-chain", emoji:"\u{1F3ED}", category:"education", badge:"", tags:["simulation","industry","education"],
    desc:{ en:"Visualize and simulate a production chain \u2014 from raw materials to finished product.", fr:"Visualisez et simulez une cha\u00eene de production.", ar:"\u062a\u0635\u0648\u0651\u0631 \u0648\u0645\u062d\u0627\u0643\u0627\u0629 \u0633\u0644\u0633\u0644\u0629 \u0625\u0646\u062a\u0627\u062c." }},
  { name:"puppeteer-playground", emoji:"\u{1F3AD}", category:"tools", badge:"", tags:["puppeteer","automation","web"],
    desc:{ en:"Experiment with Puppeteer for browser automation, scraping & testing.", fr:"Exp\u00e9rimentez avec Puppeteer pour l'automatisation du navigateur.", ar:"\u062c\u0631\u0651\u0628 Puppeteer \u0644\u0623\u062a\u0645\u062a\u0629 \u0627\u0644\u0645\u062a\u0635\u0641\u062d." }}
];

/* ============================================================
   INIT
   ============================================================ */
async function init() {
  // Try loading from JSON file (works on server), fallback to inline data (works on file://)
  try {
    const res = await fetch("./apps-data.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    APPS = data.apps.map(a => ({
      ...a,
      github: `https://github.com/${USER}/${a.name}`,
      view: VIEW(a.name)
    }));
  } catch(e) {
    console.log("Using inline app data (file:// mode)");
    APPS = INLINE_APPS.map(a => ({
      ...a,
      github: `https://github.com/${USER}/${a.name}`,
      view: VIEW(a.name)
    }));
  }

  applyTheme(THEME);
  applyLang(LANG);
  applyViewMode(VIEW_MODE);
  updateFilterCounts();
  render();
  updateGreeting();
  updateStats();
  updateJoke();
  updateExplorer();
  initParticles();
  initListeners();
}

/* ============================================================
   i18n
   ============================================================ */
function t(key) { return (I18N[LANG] || I18N.en)[key] || (I18N.en)[key] || key; }

function applyLang(lang) {
  LANG = lang;
  localStorage.setItem("wdiy-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.lang = lang;

  langButtons.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));

  // Translate static elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  updateGreeting();
  updateStats();
  updateJoke();
  updateExplorer();
  updateFilterCounts();
  render();
}

/* ============================================================
   THEMES
   ============================================================ */
function applyTheme(theme) {
  THEME = theme;
  localStorage.setItem("wdiy-theme", theme);
  document.documentElement.dataset.theme = theme;
  themeButtons.forEach(b => b.classList.toggle("active", b.dataset.theme === theme));
  initParticles(); // re-init particles with new colors
}

/* ============================================================
   SOUND EFFECTS
   ============================================================ */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function playSound(type) {
  if (!SOUND) return;
  if (!audioCtx) audioCtx = new AudioCtx();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  gain.gain.value = 0.08;

  if (type === "pop") {
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.start(); osc.stop(audioCtx.currentTime + 0.15);
  } else if (type === "sparkle") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1600, audioCtx.currentTime + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
    osc.start(); osc.stop(audioCtx.currentTime + 0.2);
  } else if (type === "whoosh") {
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.25);
    gain.gain.value = 0.04;
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
    osc.start(); osc.stop(audioCtx.currentTime + 0.25);
  } else if (type === "tada") {
    [523, 659, 784].forEach((freq, i) => {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g); g.connect(audioCtx.destination);
      o.frequency.value = freq;
      g.gain.value = 0.06;
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3 + i * 0.1);
      o.start(audioCtx.currentTime + i * 0.1);
      o.stop(audioCtx.currentTime + 0.3 + i * 0.1);
    });
  }
}

/* ============================================================
   PARTICLES
   ============================================================ */
let particles = [];
let animFrameId = null;

function initParticles() {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  const ctx = particleCanvas.getContext("2d");
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;

  const color = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || 'rgba(127,90,240,0.3)';
  const count = window.innerWidth < 600 ? 25 : 50;
  particles = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * particleCanvas.width,
      y: Math.random() * particleCanvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > particleCanvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > particleCanvas.height) p.dy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = color.replace(/[\d.]+\)$/, p.alpha + ')');
      ctx.fill();
    });
    animFrameId = requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener("resize", () => {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
});

/* ============================================================
   CONFETTI
   ============================================================ */
function fireConfetti() {
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const pieces = [];
  const colors = ["#ff6bca", "#7f5af0", "#2cb67d", "#ffa62b", "#00b4d8", "#e9c46a", "#ff5858"];

  for (let i = 0; i < 80; i++) {
    pieces.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
      y: window.innerHeight / 2,
      dx: (Math.random() - 0.5) * 12,
      dy: Math.random() * -14 - 4,
      r: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      dr: (Math.random() - 0.5) * 10,
      life: 1
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = false;
    pieces.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.dx;
      p.y += p.dy;
      p.dy += 0.3;
      p.rot += p.dr;
      p.life -= 0.012;
      p.dx *= 0.99;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6);
      ctx.restore();
    });
    if (alive && frame < 200) { frame++; requestAnimationFrame(draw); }
    else { ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height); }
  }
  draw();
}

/* ============================================================
   FILTERING & SEARCHING
   ============================================================ */
function normalize(s) { return (s || "").toLowerCase(); }

function matches(app) {
  const desc = (app.desc && typeof app.desc === 'object') ? (app.desc[LANG] || app.desc.en || '') : (app.desc || '');
  const text = normalize(app.name + " " + desc + " " + (app.tags || []).join(" "));
  const query = normalize(q.value).trim();
  // Fuzzy: split query into words, all must match
  const words = query.split(/\s+/).filter(Boolean);
  const okQuery = words.length === 0 || words.every(w => text.includes(w));
  const okFilter = !currentFilter || app.category === currentFilter;
  return okQuery && okFilter;
}

/* ============================================================
   CARD BUILDER
   ============================================================ */
function card(app) {
  const el = document.createElement("article");
  el.className = "kids-card";
  el.dataset.cat = app.category || "";
  el.setAttribute("tabindex", "0");
  el.setAttribute("role", "article");
  el.setAttribute("aria-label", app.name);

  const sparkles = ["✨", "🎈", "🎉", "⭐", "🍭", "🌟", "🫧", "🎪", "🦄", "🔥"];
  const sp = sparkles[Math.floor(Math.random() * sparkles.length)];
  const thumb = `./thumbs/${app.name}.png`;
  const desc = (app.desc && typeof app.desc === 'object') ? (app.desc[LANG] || app.desc.en || '') : (app.desc || '');
  const tooltip = t("tooltips")[Math.floor(Math.random() * t("tooltips").length)];
  const isFav = FAVS.includes(app.name);

  // Badge
  let badgeHTML = "";
  if (app.badge === "new") badgeHTML = `<span class="card-badge new">${t("badge_new")}</span>`;
  else if (app.badge === "popular") badgeHTML = `<span class="card-badge popular">${t("badge_popular")}</span>`;
  else if (app.badge === "hub") badgeHTML = `<span class="card-badge hub">${t("badge_hub")}</span>`;

  el.innerHTML = `
    <div class="fun-tooltip">${tooltip}</div>
    <div class="sparkline">${sp}</div>
    ${badgeHTML}
    <button class="fav-btn ${isFav ? 'favorited' : ''}" data-fav="${app.name}" title="Favorite" aria-label="Toggle favorite">⭐</button>
    <div class="kids-thumb-wrap">
      <img class="kids-thumb" src="${thumb}" alt="${app.name} screenshot"
           onload="this.classList.add('loaded')"
           onerror="this.parentElement.classList.add('no-thumb')"/>
      <span class="kids-thumb-emoji">${app.emoji}</span>
      <div class="thumb-overlay"><span class="thumb-overlay-text">${app.name}</span></div>
    </div>
    <h3><span class="kids-emoji">${app.emoji}</span> ${app.name}</h3>
    <p class="kids-desc">${desc}</p>
    <div class="kids-actions">
      <a class="kids-link" href="${app.github}" target="_blank" rel="noreferrer">${t("github")}</a>
      <a class="kids-link primary view-link" href="${app.view}" target="_blank" rel="noreferrer" data-app="${app.name}">${t("view_btn")}</a>
    </div>
    <div class="kids-tags">
      ${(app.tags || []).slice(0, 5).map(tag => `<span class="kids-tag">${tag}</span>`).join("")}
    </div>
  `;

  // Favorite toggle
  el.querySelector(".fav-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFav(app.name, e.currentTarget);
  });

  // View click → confetti + track explored
  el.querySelector(".view-link")?.addEventListener("click", () => {
    fireConfetti();
    playSound("tada");
    trackExplored(app.name);
  });

  return el;
}

/* ============================================================
   FAVORITES
   ============================================================ */
function toggleFav(name, btn) {
  if (FAVS.includes(name)) {
    FAVS = FAVS.filter(f => f !== name);
    btn.classList.remove("favorited");
    playSound("pop");
  } else {
    FAVS.push(name);
    btn.classList.add("favorited");
    playSound("sparkle");
  }
  localStorage.setItem("wdiy-favs", JSON.stringify(FAVS));
}

/* ============================================================
   EXPLORER TRACKER
   ============================================================ */
function trackExplored(name) {
  if (!EXPLORED.includes(name)) {
    EXPLORED.push(name);
    localStorage.setItem("wdiy-explored", JSON.stringify(EXPLORED));
    updateExplorer();
  }
}

function updateExplorer() {
  const count = EXPLORED.length;
  let title = t("explorer_title_0");
  if (count >= 22) title = t("explorer_title_22");
  else if (count >= 15) title = t("explorer_title_15");
  else if (count >= 10) title = t("explorer_title_10");
  else if (count >= 5) title = t("explorer_title_5");

  if (count > 0) {
    explorerBar.innerHTML = `${t("explorer_prefix")} <strong>${count}</strong> ${t("explorer_suffix")} — ${title}`;
  } else {
    explorerBar.innerHTML = title;
  }
}

/* ============================================================
   GREETING
   ============================================================ */
function updateGreeting() {
  const hour = new Date().getHours();
  let key = "greeting_morning";
  if (hour >= 12 && hour < 18) key = "greeting_afternoon";
  else if (hour >= 18 || hour < 5) key = "greeting_evening";
  greetingBar.textContent = t(key);
}

/* ============================================================
   STATS
   ============================================================ */
function updateStats() {
  const cats = new Set(APPS.map(a => a.category));
  statsBar.innerHTML = `
    <span class="stat-item"><span class="stat-num">${APPS.length}</span> ${t("stats_apps")}</span>
    <span class="stat-item">•</span>
    <span class="stat-item"><span class="stat-num">${cats.size}</span> ${t("stats_cats")}</span>
    <span class="stat-item">•</span>
    <span class="stat-item">${t("stats_made")}</span>
  `;
}

/* ============================================================
   JOKE
   ============================================================ */
function updateJoke() {
  const jokes = t("jokes");
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeBar.innerHTML = `<span class="joke-emoji">😂</span> ${joke}`;
}

/* ============================================================
   FILTER COUNTS
   ============================================================ */
function updateFilterCounts() {
  document.querySelectorAll("[data-count-filter]").forEach(el => {
    const cat = el.dataset.countFilter;
    const count = cat ? APPS.filter(a => a.category === cat).length : APPS.length;
    el.textContent = count;
  });
}

/* ============================================================
   RENDER
   ============================================================ */
function render() {
  grid.innerHTML = "";
  const items = APPS.filter(matches);
  items.forEach(a => grid.appendChild(card(a)));
  empty.style.display = items.length ? "none" : "block";
}

/* ============================================================
   VIEW MODE
   ============================================================ */
function applyViewMode(mode) {
  VIEW_MODE = mode;
  localStorage.setItem("wdiy-view", mode);
  grid.classList.toggle("list-view", mode === "list");
  viewButtons.forEach(b => b.classList.toggle("active", b.dataset.view === mode));
}

/* ============================================================
   SHUFFLE
   ============================================================ */
function shuffleApps() {
  for (let i = APPS.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [APPS[i], APPS[j]] = [APPS[j], APPS[i]];
  }
  playSound("whoosh");
  render();
}

/* ============================================================
   EASTER EGG — Click logo 5 times
   ============================================================ */
function easterEgg() {
  logoClicks++;
  if (logoClicks >= 5) {
    logoClicks = 0;
    fireConfetti();
    playSound("tada");
    siteLogo.style.animation = "wiggle 0.5s ease-in-out 3";
    setTimeout(() => { siteLogo.style.animation = ""; }, 1500);
  }
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function checkScroll() {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 300);
}

/* ============================================================
   LISTENERS
   ============================================================ */
function initListeners() {
  // Search
  q.addEventListener("input", () => {
    clearBtn.style.display = q.value ? "block" : "none";
    render();
  });
  clearBtn.addEventListener("click", () => {
    q.value = "";
    clearBtn.style.display = "none";
    render();
    q.focus();
  });

  // Filters
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter || "";
      playSound("pop");
      render();
    });
  });

  // Language
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("pop");
      applyLang(btn.dataset.lang);
    });
  });

  // Theme
  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("sparkle");
      applyTheme(btn.dataset.theme);
    });
  });

  // View toggle
  viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("pop");
      applyViewMode(btn.dataset.view);
    });
  });

  // Sound toggle
  soundToggle.addEventListener("click", () => {
    SOUND = !SOUND;
    localStorage.setItem("wdiy-sound", SOUND ? "on" : "off");
    soundToggle.textContent = SOUND ? "🔊" : "🔇";
    if (SOUND) playSound("pop");
  });
  soundToggle.textContent = SOUND ? "🔊" : "🔇";

  // Shuffle
  shuffleBtn.addEventListener("click", shuffleApps);

  // Scroll to top
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    playSound("whoosh");
  });
  window.addEventListener("scroll", checkScroll, { passive: true });

  // Easter egg
  siteLogo.addEventListener("click", easterEgg);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== q) {
      e.preventDefault();
      q.focus();
    }
    if (e.key === "Escape" && document.activeElement === q) {
      q.blur();
    }
  });
}

/* ============================================================
   START
   ============================================================ */
init();
