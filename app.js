/* ============================================================
   Workshop-Diy Kids Hub — app.js
   i18n (EN/FR/AR) · 7 Themes · Fun · Accessible
   ============================================================ */

const USER = "abourdim";
const VIEW = (repo) => `https://raw.githack.com/${USER}/${repo}/main/index.html`;

/* ──────── i18n STRINGS ──────── */
const I18N = {
  en: {
    subtitle: "Epic tools & hacks for builders ⚡",
    search_placeholder: 'Search apps\u2026 (try "robot" or "hack")',
    filter_all: "All", filter_microbit: "micro:bit", filter_camera: "Camera",
    filter_arabic: "Arabic", filter_classroom: "Classroom",
    filter_hardware: "Hardware", filter_learning: "Learning",
    filter_ai: "AI", filter_tools: "Tools",
    shuffle: "Shuffle",
    no_results: "Nothing found. Try another keyword 🔍",
    footer: 'Built by <strong>Workshop-Diy</strong> \u2022 Hit "Launch" to go!',
    github: "GitHub ↗", view_btn: "Launch ▶",
    badge_new: "NEW", badge_popular: "Popular", badge_hub: "Hub",
    status_beta: "Beta", status_dev: "Dev", status_offline: "Offline",
    stats_apps: "apps", stats_cats: "categories", stats_made: "Built with 🔥",
    greeting_morning: "Rise & grind, builder! ☀️",
    greeting_afternoon: "What's up, hacker! 🌤️",
    greeting_evening: "Night mode activated! 🌙",
    explorer_prefix: "You've explored",
    explorer_suffix: "apps!",
    explorer_title_0: "Start building! 🔰",
    explorer_title_5: "Rookie Hacker! 🎮",
    explorer_title_10: "Tech Explorer! 🚀",
    explorer_title_15: "Elite Coder! 💻",
    explorer_title_22: "Workshop Legend! 🏆",
    tooltips: [
      "This one's sick! 🔥", "Try me if you dare! 💀", "Top tier! 👑",
      "Insane build! ⚡", "Smash that button! 💥", "Beep boop! 🤖",
      "Power unlocked! 🔓", "You'll crush this! 💪"
    ],
    jokes: [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🪲",
      "What's a robot's favorite snack? Micro-chips! 🍟",
      "Why was the computer cold? It left its Windows open! 🥶",
      "What's a hacker's favorite season? Phishing season! 🎣",
      "Why do Java devs wear glasses? They can't C#! 🤓",
      "How does a computer get drunk? It takes screenshots! 📸"
    ]
  },
  fr: {
    subtitle: "Outils & hacks épiques pour builders ⚡",
    search_placeholder: "Chercher… (essaie « robot » ou « hack »)",
    filter_all: "Tous", filter_microbit: "micro:bit", filter_camera: "Caméra",
    filter_arabic: "Arabe", filter_classroom: "Classe",
    filter_hardware: "Matériel", filter_learning: "Apprendre",
    filter_ai: "IA", filter_tools: "Outils",
    shuffle: "Mélanger",
    no_results: "Rien trouvé. Essaie un autre mot 🔍",
    footer: "Construit par <strong>Workshop-Diy</strong> • Appuie sur « Lancer » pour y aller !",
    github: "GitHub ↗", view_btn: "Lancer ▶",
    badge_new: "NOUVEAU", badge_popular: "Populaire", badge_hub: "Hub",
    status_beta: "Bêta", status_dev: "Dev", status_offline: "Hors ligne",
    stats_apps: "apps", stats_cats: "catégories", stats_made: "Construit avec 🔥",
    greeting_morning: "Debout, builder ! ☀️",
    greeting_afternoon: "Salut, hacker ! 🌤️",
    greeting_evening: "Mode nuit activé ! 🌙",
    explorer_prefix: "Tu as exploré",
    explorer_suffix: "apps !",
    explorer_title_0: "Commence à builder ! 🔰",
    explorer_title_5: "Hacker débutant ! 🎮",
    explorer_title_10: "Explorateur tech ! 🚀",
    explorer_title_15: "Codeur d'élite ! 💻",
    explorer_title_22: "Légende Workshop ! 🏆",
    tooltips: [
      "Celui-ci est dingue ! 🔥", "Essaie si tu oses ! 💀", "Top niveau ! 👑",
      "Build insane ! ⚡", "Clique ! 💥", "Bip boup ! 🤖",
      "Pouvoir débloqué ! 🔓", "Tu vas gérer ! 💪"
    ],
    jokes: [
      "Pourquoi les devs préfèrent le mode sombre ? La lumière attire les bugs ! 🪲",
      "Quel est le goûter préféré d'un robot ? Des micro-chips ! 🍟",
      "Pourquoi l'ordinateur avait froid ? Il avait laissé ses fenêtres ouvertes ! 🥶",
      "Quelle est la saison préférée d'un hacker ? La saison du phishing ! 🎣",
      "Pourquoi les devs Java portent des lunettes ? Ils peuvent pas C# ! 🤓",
      "Comment un ordinateur s'enivre ? Il prend des captures d'écran ! 📸"
    ]
  },
  ar: {
    subtitle: "أدوات و اختراقات ملحمية للبناة ⚡",
    search_placeholder: "بحث عن تطبيقات… (جرّب «روبوت» أو «هاك»)",
    filter_all: "الكل", filter_microbit: "مايكرو:بت", filter_camera: "كاميرا",
    filter_arabic: "عربي", filter_classroom: "فصل",
    filter_hardware: "عتاد", filter_learning: "تعلّم",
    filter_ai: "ذكاء", filter_tools: "أدوات",
    shuffle: "خلط",
    no_results: "لم يتم العثور على شيء. جرّب كلمة أخرى 🔍",
    footer: "بناه <strong>Workshop-Diy</strong> • اضغط \"إطلاق\" للانطلاق!",
    github: "GitHub ↗", view_btn: "إطلاق ▶",
    badge_new: "جديد", badge_popular: "شائع", badge_hub: "مركز",
    status_beta: "تجريبي", status_dev: "تطوير", status_offline: "غير متصل",
    stats_apps: "تطبيق", stats_cats: "فئات", stats_made: "بُني بـ 🔥",
    greeting_morning: "صباح الخير يا بنّاء! ☀️",
    greeting_afternoon: "أهلاً يا هاكر! 🌤️",
    greeting_evening: "الوضع الليلي مفعّل! 🌙",
    explorer_prefix: "لقد استكشفت",
    explorer_suffix: "تطبيقات!",
    explorer_title_0: "ابدأ البناء! 🔰",
    explorer_title_5: "هاكر مبتدئ! 🎮",
    explorer_title_10: "مستكشف تقني! 🚀",
    explorer_title_15: "مبرمج نخبة! 💻",
    explorer_title_22: "أسطورة الورشة! 🏆",
    tooltips: [
      "هذا جنوني! 🔥", "جرّب إن كنت تجرؤ! 💀", "أعلى مستوى! 👑",
      "بناء خرافي! ⚡", "اضغط! 💥", "بيب بوب! 🤖",
      "قوة مفتوحة! 🔓", "ستسحقه! 💪"
    ],
    jokes: [
      "لماذا يفضل المبرمجون الوضع المظلم؟ لأن الضوء يجذب الحشرات! 🪲",
      "ما هي وجبة الروبوت المفضلة؟ رقائق صغيرة! 🍟",
      "لماذا كان الكمبيوتر باردًا؟ لأنه ترك نوافذه مفتوحة! 🥶",
      "ما هو الموسم المفضل للهاكر؟ موسم التصيّد! 🎣",
      "لماذا مطورو جافا يرتدون نظارات؟ لأنهم لا يستطيعون C#! 🤓",
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
   INLINE APP DATA
   status: "stable" (default) | "beta" | "dev" | "offline"
   ============================================================ */
const INLINE_APPS = [
  { name:"bit-bot", emoji:"🤖", category:"microbit", badge:"popular", tags:["robot","micro:bit","BLE"],
    desc:{ en:"Control a robot with your micro:bit over Bluetooth — drive, steer & play!", fr:"Contrôlez un robot avec votre micro:bit en Bluetooth — conduisez et jouez !", ar:"تحكم في روبوت باستخدام micro:bit عبر البلوتوث — قُد وتوجّه والعب!" }},
  { name:"magic-hands", emoji:"🪄", category:"camera", badge:"popular", tags:["camera","hand-tracking","fun"],
    desc:{ en:"Wave your hands in front of the camera to trigger magic effects like confetti & trails.", fr:"Agitez vos mains devant la caméra pour déclencher des effets magiques comme des confettis et des traînées.", ar:"لوّح بيديك أمام الكاميرا لإطلاق تأثيرات سحرية مثل القصاصات الملونة والمسارات." }},
  { name:"face-quest", emoji:"🕵️", category:"camera", badge:"", tags:["camera","ai","micro:bit"],
    desc:{ en:"Face Quest — a face game you can play with the camera (privacy-first: runs locally).", fr:"Face Quest — un jeu facial avec la caméra (respect de la vie privée : fonctionne localement).", ar:"Face Quest — لعبة وجوه تلعبها بالكاميرا (الخصوصية أولاً: تعمل محليًا)." }},
  { name:"talking-robot", emoji:"💬", category:"microbit", badge:"", tags:["robot","speech","BLE"],
    desc:{ en:"A talking robot that can speak, listen, show emotions, and message a micro:bit.", fr:"Un robot parlant qui peut parler, écouter, montrer des émotions et envoyer des messages à un micro:bit.", ar:"روبوت متكلم يمكنه التحدث والاستماع وإظهار المشاعر وإرسال رسائل إلى micro:bit." }},
  { name:"teachable-machine", emoji:"🧠", category:"microbit", badge:"popular", tags:["ml","micro:bit","BLE"],
    desc:{ en:"Teach gestures/sounds, then control a micro:bit over Bluetooth.", fr:"Enseignez des gestes/sons, puis contrôlez un micro:bit en Bluetooth.", ar:"علّم إيماءات/أصوات، ثم تحكم في micro:bit عبر البلوتوث." }},
  { name:"face-tracking", emoji:"😎", category:"camera", badge:"", tags:["camera","face-tracking","BLE"],
    desc:{ en:"Kids Edition face tracking with camera events and optional micro:bit BLE.", fr:"Suivi de visage édition enfants avec événements caméra et micro:bit BLE en option.", ar:"تتبع الوجه إصدار الأطفال مع أحداث الكاميرا ودعم micro:bit BLE اختياري." }},
  { name:"bitmoji-lab", emoji:"😄", category:"microbit", badge:"", tags:["emoji","micro:bit","BLE"],
    desc:{ en:"Turn emojis into colorful micro:bit LED art and send them wirelessly.", fr:"Transformez des emojis en art LED coloré sur micro:bit et envoyez-les sans fil.", ar:"حوّل الرموز التعبيرية إلى فن LED ملوّن على micro:bit وأرسلها لاسلكيًا." }},
  { name:"mission-control", emoji:"🚀", category:"classroom", badge:"", tags:["webrtc","kids","BLE"],
    desc:{ en:"Mission control: video/chat + buttons to send commands (and optional micro:bit BLE).", fr:"Contrôle de mission : vidéo/chat + boutons pour envoyer des commandes (et micro:bit BLE en option).", ar:"مركز التحكم: فيديو/دردشة + أزرار لإرسال الأوامر (مع micro:bit BLE اختياري)." }},
  { name:"bit-playground", emoji:"🧩", category:"microbit", badge:"", tags:["micro:bit","BLE","web"],
    desc:{ en:"Play with the BBC micro:bit from your browser (BLE): LEDs, sensors, servos, gamepad, charts!", fr:"Jouez avec le BBC micro:bit depuis votre navigateur (BLE) : LEDs, capteurs, servos, manette, graphiques !", ar:"العب مع BBC micro:bit من متصفحك (BLE): أضواء LED، مستشعرات، محركات، لوحة ألعاب، رسوم بيانية!" }},
  { name:"rxy", emoji:"🎛️", category:"microbit", badge:"", tags:["builder","micro:bit","BLE"],
    desc:{ en:"Build a Bluetooth remote for micro:bit — no coding, just click & play.", fr:"Construisez une télécommande Bluetooth pour micro:bit — sans coder, juste cliquer et jouer.", ar:"أنشئ جهاز تحكم بلوتوث لـ micro:bit — بدون برمجة، فقط انقر والعب." }},
  { name:"pixel-gateway", emoji:"🎨", category:"tools", badge:"new", tags:["retro","pixel","fun"],
    desc:{ en:"A retro pixel art portal — draw, animate, and share pixel creations.", fr:"Un portail pixel art rétro — dessinez, animez et partagez.", ar:"بوابة بيكسل آرت ريترو — ارسم وحرّك وشارك." }},
  { name:"wled-kids-lab", emoji:"💡", category:"education", badge:"new", tags:["WLED","LED","ESP32"],
    desc:{ en:"Control colorful LEDs with WLED — paint your room with light!", fr:"Contrôlez des LEDs colorées avec WLED — peignez votre chambre avec de la lumière !", ar:"تحكم في أضواء LED ملونة مع WLED — لوّن غرفتك بالضوء!" }},
  { name:"esp32-c3-kids-lab", emoji:"⚡", category:"education", badge:"new", tags:["ESP32","hardware","IoT"],
    desc:{ en:"Hack with the ESP32-C3 — blink LEDs, read sensors, build IoT projects!", fr:"Hackez avec l ESP32-C3 — LEDs, capteurs, projets IoT !", ar:"اخترق مع ESP32-C3 — أضواء LED، مستشعرات، مشاريع IoT!" }},
  { name:"crypto-academy", emoji:"🪙", category:"education", badge:"", tags:["crypto","blockchain","education"],
    desc:{ en:"Learn about cryptocurrency and blockchain with interactive lessons.", fr:"Apprenez la cryptomonnaie et la blockchain avec des leçons interactives.", ar:"تعلم عن العملات المشفرة وتقنية البلوكتشين من خلال دروس تفاعلية." }},
  { name:"pentest-lab", emoji:"🔐", category:"education", badge:"", tags:["security","pentest","education"],
    desc:{ en:"A beginner-friendly penetration testing lab to learn cybersecurity basics.", fr:"Un laboratoire de test d'intrusion pour débutants pour apprendre les bases de la cybersécurité.", ar:"مختبر اختبار اختراق للمبتدئين لتعلم أساسيات الأمن السيبراني." }},
  { name:"linux-kids-lab", emoji:"🐧", category:"education", badge:"new", tags:["linux","terminal","education"],
    desc:{ en:"Learn Linux commands in a fun, safe sandbox — become a terminal ninja!", fr:"Apprenez les commandes Linux dans un bac à sable fun — devenez un ninja du terminal !", ar:"تعلم أوامر لينكس في بيئة آمنة وممتعة — كن نينجا الطرفية!" }},
  { name:"production-chain", emoji:"🏭", category:"education", badge:"", tags:["simulation","industry","education"],
    desc:{ en:"Visualize and simulate a production chain — from raw materials to finished product.", fr:"Visualisez et simulez une chaîne de production — des matières premières au produit fini.", ar:"تصوّر ومحاكاة سلسلة إنتاج — من المواد الخام إلى المنتج النهائي." }},
  { name:"classroom", emoji:"🏫", category:"classroom", badge:"new", tags:["peerjs","classroom","webrtc"],
    desc:{ en:"PeerJS Cloud Classroom Lite — simple room-code classroom for up to ~12 students.", fr:"PeerJS Cloud Classroom Lite — salle de classe simple avec code de salle pour ~12 élèves.", ar:"PeerJS Cloud Classroom Lite — فصل دراسي بسيط برمز غرفة لما يصل إلى 12 طالب." }},
  { name:"arabic-translator", emoji:"🌐", category:"arabic", badge:"", tags:["arabic","translate","browser-only"],
    desc:{ en:"Arabic translator app that runs entirely in the browser — no server, no API keys.", fr:"Traducteur arabe qui fonctionne entièrement dans le navigateur — sans serveur, sans clés API.", ar:"تطبيق مترجم عربي يعمل بالكامل في المتصفح — بدون خادم وبدون مفاتيح API." }},
  { name:"arabic-speaker", emoji:"🗣️", category:"arabic", badge:"", tags:["arabic","tts","stt"],
    desc:{ en:"Arabic TTS + STT in the browser using Web Speech API (no backend).", fr:"Synthèse et reconnaissance vocale arabe dans le navigateur avec Web Speech API (sans backend).", ar:"تحويل النص إلى كلام والكلام إلى نص بالعربية في المتصفح باستخدام Web Speech API (بدون خادم)." }},
  { name:"piper-arabic-tts", emoji:"🎙️", category:"arabic", badge:"", tags:["arabic","piper","wasm"],
    desc:{ en:"Arabic TTS demo using Piper (WASM). (May need hosting for model files.)", fr:"Démo de synthèse vocale arabe avec Piper (WASM). (Peut nécessiter un hébergement pour les fichiers du modèle.)", ar:"عرض تجريبي لتحويل النص إلى كلام بالعربية باستخدام Piper (WASM). (قد يحتاج استضافة لملفات النموذج.)" }},
  { name:"usb-logger", emoji:"🔌", category:"microbit", badge:"", tags:["micro:bit","serial","web"],
    desc:{ en:"Talk to your micro:bit over USB serial from the browser (send/receive + speed test).", fr:"Communiquez avec votre micro:bit via USB série depuis le navigateur (envoi/réception + test de vitesse).", ar:"تواصل مع micro:bit عبر USB التسلسلي من المتصفح (إرسال/استقبال + اختبار السرعة)." }},
  { name:"ble-logger", emoji:"📡", category:"microbit", badge:"", tags:["BLE","micro:bit","tools"],
    desc:{ en:"Bluetooth logger / playground for micro:bit experiments.", fr:"Enregistreur Bluetooth / terrain de jeu pour expériences micro:bit.", ar:"مسجل بلوتوث / ساحة لعب لتجارب micro:bit." }},
  { name:"claude-toolkit", emoji:"🧰", category:"tools", badge:"new", tags:["ai","claude","tools"],
    desc:{ en:"A toolkit for building apps and workflows powered by Claude AI.", fr:"Une boîte à outils pour créer des apps et des flux de travail avec Claude AI.", ar:"مجموعة أدوات لبناء التطبيقات وسير العمل باستخدام Claude AI." }},
  { name:"puppeteer-playground", emoji:"🎭", category:"tools", badge:"", tags:["puppeteer","automation","web"],
    desc:{ en:"Experiment with Puppeteer for browser automation, scraping & testing.", fr:"Expérimentez avec Puppeteer pour l'automatisation du navigateur, le scraping et les tests.", ar:"جرّب Puppeteer لأتمتة المتصفح والكشط والاختبار." }},
  { name:"workshop-diy", emoji:"🏗️", category:"tools", badge:"new", tags:["website","workshop","hub"],
    desc:{ en:"The official Workshop-Diy website — projects, tutorials & resources.", fr:"Le site officiel Workshop-Diy — projets, tutoriels & ressources.", ar:"موقع Workshop-Diy الرسمي — مشاريع، دروس وموارد." }},
  { name:"all", emoji:"🏠", category:"tools", badge:"hub", tags:["hub","portal","web"],
    desc:{ en:"The Workshop-Diy hub — browse every mini-app in one place.", fr:"Le hub Workshop-Diy — explorez toutes les mini-apps au même endroit.", ar:"مركز Workshop-Diy — تصفح جميع التطبيقات المصغرة في مكان واحد." }},
  { name:"circuit-lab", emoji:"🔋", category:"education", badge:"new", tags:["circuit","lab"],
    desc:{ en:"Circuit Lab — explore and experiment!", fr:"Circuit Lab — explorez et expérimentez !", ar:"Circuit Lab — استكشف وجرّب!" }},
  { name:"rocket-shield-vpn", emoji:"🛡️", category:"tools", badge:"new", tags:["rocket","shield","vpn"],
    desc:{ en:"Rocket Shield Vpn — explore and experiment!", fr:"Rocket Shield Vpn — explorez et expérimentez !", ar:"Rocket Shield Vpn — استكشف وجرّب!" }},
  { name:"3d-lab", emoji:"🧊", category:"education", badge:"new", tags:["lab"],
    desc:{ en:"3D Lab — explore and experiment!", fr:"3D Lab — explorez et expérimentez !", ar:"3D Lab — استكشف وجرّب!" }},
  { name:"git-lab", emoji:"🔀", category:"education", badge:"new", tags:["git","lab"],
    desc:{ en:"Git Lab — explore and experiment!", fr:"Git Lab — explorez et expérimentez !", ar:"Git Lab — استكشف وجرّب!" }},
  { name:"prompt-hero", emoji:"✨", category:"tools", badge:"new", tags:["prompt","hero"],
    desc:{ en:"Prompt Hero — explore and experiment!", fr:"Prompt Hero — explorez et expérimentez !", ar:"Prompt Hero — استكشف وجرّب!" }},
  { name:"save-our-planet", emoji:"🌍", category:"tools", badge:"new", tags:["save","our","planet"],
    desc:{ en:"Save Our Planet — explore and experiment!", fr:"Save Our Planet — explorez et expérimentez !", ar:"Save Our Planet — استكشف وجرّب!" }},
  { name:"ops-catalog", emoji:"📋", category:"tools", badge:"new", tags:["ops","catalog"],
    desc:{ en:"Ops Catalog — explore and experiment!", fr:"Ops Catalog — explorez et expérimentez !", ar:"Ops Catalog — استكشف وجرّب!" }},
  { name:"code-kids", emoji:"💻", category:"tools", badge:"new", tags:["code","kids"],
    desc:{ en:"Code Kids — explore and experiment!", fr:"Code Kids — explorez et expérimentez !", ar:"Code Kids — استكشف وجرّب!" }},
  { name:"smart-home", emoji:"🏡", category:"tools", badge:"new", tags:["smart","home"],
    desc:{ en:"Smart Home — explore and experiment!", fr:"Smart Home — explorez et expérimentez !", ar:"Smart Home — استكشف وجرّب!" }},
];

/* ============================================================
   INIT
   ============================================================ */
function init() {
  APPS = INLINE_APPS.map((a, i) => ({
    ...a,
    _num: i + 1,
    github: `https://github.com/${USER}/${a.name}`,
    view: VIEW(a.name)
  }));

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
  initParticles();
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
  } else if (type === "zap") {
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.1);
    gain.gain.value = 0.1;
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.start(); osc.stop(audioCtx.currentTime + 0.15);
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
   PARTICLES — stars in Medina theme, circles otherwise
   ============================================================ */
let particles = [];
let animFrameId = null;

function drawStar(ctx, cx, cy, r, points, innerR) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? r : innerR;
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function initParticles() {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  const ctx = particleCanvas.getContext("2d");
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;

  const isMedina = THEME === "islamic";
  const isAlhambra = THEME === "alhambra";
  const isIznik = THEME === "iznik";
  const isZellige = THEME === "zellige";
  const isArabesque = THEME === "arabesque";
  const isIslamic = isMedina || isAlhambra || isIznik || isZellige || isArabesque;
  const color = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || 'rgba(127,90,240,0.3)';
  const count = window.innerWidth < 600 ? (isIslamic ? 18 : 25) : (isIslamic ? 35 : 50);
  particles = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * particleCanvas.width,
      y: Math.random() * particleCanvas.height,
      r: isIslamic ? Math.random() * 5 + 2 : Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * (isIslamic ? 0.25 : 0.5),
      dy: (Math.random() - 0.5) * (isIslamic ? 0.25 : 0.5),
      alpha: Math.random() * 0.5 + 0.2,
      rot: Math.random() * Math.PI * 2,
      dr: (Math.random() - 0.5) * (isArabesque ? 0.003 : 0.008),
      points: (isMedina || isAlhambra) ? (Math.random() > 0.4 ? 8 : 6) :
              isIznik ? (Math.random() > 0.5 ? 6 : 4) :
              isZellige ? 4 : 0,
      shape: isArabesque ? "leaf" : isZellige ? "diamond" : isIznik ? "diamond" : "star"
    });
  }

  function animate() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      p.rot += p.dr;
      if (p.x < 0 || p.x > particleCanvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > particleCanvas.height) p.dy *= -1;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = color.replace(/[\d.]+\)$/, p.alpha + ')');

      if (isMedina && p.points) {
        drawStar(ctx, 0, 0, p.r, p.points, p.r * 0.45);
        ctx.fill();
        ctx.strokeStyle = color.replace(/[\d.]+\)$/, (p.alpha * 0.5) + ')');
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if (isAlhambra && p.points) {
        drawStar(ctx, 0, 0, p.r, p.points, p.r * 0.4);
        ctx.fill();
        ctx.strokeStyle = color.replace(/[\d.]+\)$/, (p.alpha * 0.4) + ')');
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if ((isIznik || isZellige) && p.points) {
        // Diamond / rotated square
        const s = p.r;
        ctx.beginPath();
        ctx.moveTo(0, -s); ctx.lineTo(s, 0); ctx.lineTo(0, s); ctx.lineTo(-s, 0);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = color.replace(/[\d.]+\)$/, (p.alpha * 0.4) + ')');
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if (isArabesque) {
        // Organic leaf shape
        const s = p.r;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo(s * 0.8, -s * 0.5, s * 0.8, s * 0.5, 0, s);
        ctx.bezierCurveTo(-s * 0.8, s * 0.5, -s * 0.8, -s * 0.5, 0, -s);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
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
  const islamicThemes = {
    islamic: ["#d4a843", "#f0c75e", "#1b8c6a", "#b8922e", "#3aaf85", "#f2e8d0", "#0f5e47", "#fff"],
    alhambra: ["#e8922e", "#f0c75e", "#c46a1a", "#a0522d", "#f5e6cc", "#d4a843", "#fff"],
    iznik: ["#00bcd4", "#e84040", "#1a73e8", "#fff", "#1a3a7a", "#00e5ff", "#ff6666"],
    zellige: ["#1a8c50", "#e8a832", "#2a78c8", "#c46028", "#3aaf70", "#fff", "#f0c75e"],
    arabesque: ["#5a8068", "#b0b8d0", "#d0d8e8", "#3a5a44", "#7880a0", "#fff"]
  };
  const colors = islamicThemes[THEME]
    || ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#06b6d4", "#fff"];

  for (let i = 0; i < 100; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 16 + 6;
    pieces.push({
      x: window.innerWidth / 2, y: window.innerHeight / 2,
      dx: Math.cos(angle) * speed, dy: Math.sin(angle) * speed - 8,
      r: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360, dr: (Math.random() - 0.5) * 15,
      life: 1, shape: Math.random() > 0.5 ? "rect" : "circle"
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = false;
    pieces.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.dx; p.y += p.dy; p.dy += 0.35;
      p.rot += p.dr; p.life -= 0.016; p.dx *= 0.985;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      if (p.shape === "rect") ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.5);
      else { ctx.beginPath(); ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    });
    if (alive && frame < 180) { frame++; requestAnimationFrame(draw); }
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
  const text = normalize(app.name + " " + desc + " " + (app.tags || []).join(" ") + " " + (app.status || ""));
  const query = normalize(q.value).trim();
  const words = query.split(/\s+/).filter(Boolean);
  const okQuery = words.length === 0 || words.every(w => text.includes(w));
  const okFilter = !currentFilter || app.category === currentFilter;
  return okQuery && okFilter;
}

/* ============================================================
   CARD BUILDER
   ============================================================ */
const CARD_COLORS = [
  "#ef4444","#f97316","#eab308","#22c55e","#10b981",
  "#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1",
  "#8b5cf6","#7c3aed","#2563eb","#0891b2","#059669",
  "#ca8a04","#dc2626","#ea580c","#4f46e5","#0d9488",
  "#16a34a","#d97706","#9333ea"
];

function card(app, index) {
  const el = document.createElement("article");
  const num = app._num || (index + 1);
  const color = CARD_COLORS[((app._num || index + 1) - 1) % CARD_COLORS.length];
  el.className = "kids-card";
  el.dataset.cat = app.category || "";
  el.style.setProperty("--card-color", color);
  el.setAttribute("tabindex", "0");
  el.setAttribute("role", "article");
  el.setAttribute("aria-label", app.name);

  const desc = (app.desc && typeof app.desc === 'object') ? (app.desc[LANG] || app.desc.en || '') : (app.desc || '');
  const isFav = FAVS.includes(app.name);

  // Badge (NEW / Popular / Hub)
  let badgeHTML = "";
  if (app.badge === "new") badgeHTML = `<span class="card-badge new">${t("badge_new")}</span>`;
  else if (app.badge === "popular") badgeHTML = `<span class="card-badge popular">${t("badge_popular")}</span>`;
  else if (app.badge === "hub") badgeHTML = `<span class="card-badge hub">${t("badge_hub")}</span>`;

  // Status badge (Beta / Dev / Offline / custom — stable shows nothing)
  let statusHTML = "";
  if (app.status === "beta") statusHTML = `<span class="status-badge beta">${t("status_beta")}</span>`;
  else if (app.status === "dev") statusHTML = `<span class="status-badge dev">${t("status_dev")}</span>`;
  else if (app.status === "offline") statusHTML = `<span class="status-badge offline">${t("status_offline")}</span>`;
  else if (app.status && app.status !== "stable") statusHTML = `<span class="status-badge custom">${app.status}</span>`;

  el.innerHTML = `
    ${badgeHTML}
    <button class="fav-btn ${isFav ? 'favorited' : ''}" data-fav="${app.name}" title="Favorite" aria-label="Toggle favorite">🔥</button>
    <h3><span class="card-number">#${num}</span><span class="kids-emoji">${app.emoji}</span><span class="kids-name">${app.name}</span>${statusHTML}</h3>
    <p class="kids-desc">${desc}</p>
    <div class="kids-actions">
      <a class="kids-link" href="${app.github}" target="_blank" rel="noreferrer">${t("github")}</a>
      <a class="kids-link primary view-link" href="${app.view}" target="_blank" rel="noreferrer" data-app="${app.name}">${t("view_btn")}</a>
    </div>
    <div class="kids-tags">
      ${(app.tags || []).slice(0, 5).map(tag => `<span class="kids-tag">${tag}</span>`).join("")}
    </div>
  `;

  el.querySelector(".fav-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFav(app.name, e.currentTarget);
  });

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
    playSound("zap");
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
  items.forEach((a, i) => grid.appendChild(card(a, i)));
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

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter || "";
      playSound("pop");
      render();
    });
  });

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("pop");
      applyLang(btn.dataset.lang);
    });
  });

  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("zap");
      applyTheme(btn.dataset.theme);
    });
  });

  viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("pop");
      applyViewMode(btn.dataset.view);
    });
  });

  soundToggle.addEventListener("click", () => {
    SOUND = !SOUND;
    localStorage.setItem("wdiy-sound", SOUND ? "on" : "off");
    soundToggle.textContent = SOUND ? "🔊" : "🔇";
    if (SOUND) playSound("pop");
  });
  soundToggle.textContent = SOUND ? "🔊" : "🔇";

  shuffleBtn.addEventListener("click", shuffleApps);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    playSound("whoosh");
  });
  window.addEventListener("scroll", checkScroll, { passive: true });

  siteLogo.addEventListener("click", easterEgg);

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
