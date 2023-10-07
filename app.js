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
    badge_new: "NEW", badge_popular: "Popular", badge_hub: "Hub", badge_stable: "Stable",
    status_beta: "Beta", status_dev: "Dev", status_offline: "Offline",
    status_filter_all: "All", status_filter_stable: "Stable", status_filter_beta: "Beta", status_filter_dev: "Dev", status_filter_offline: "Offline",
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
    badge_new: "NOUVEAU", badge_popular: "Populaire", badge_hub: "Hub", badge_stable: "Stable",
    status_beta: "Bêta", status_dev: "Dev", status_offline: "Hors ligne",
    status_filter_all: "Tous", status_filter_stable: "Stable", status_filter_beta: "Bêta", status_filter_dev: "Dev", status_filter_offline: "Hors ligne",
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
    badge_new: "جديد", badge_popular: "شائع", badge_hub: "مركز", badge_stable: "مستقر",
    status_beta: "تجريبي", status_dev: "تطوير", status_offline: "غير متصل",
    status_filter_all: "الكل", status_filter_stable: "مستقر", status_filter_beta: "تجريبي", status_filter_dev: "تطوير", status_filter_offline: "غير متصل",
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
let THEME = localStorage.getItem("wdiy-theme") || "islamic";
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
const statusFilterButtons = [...document.querySelectorAll(".st-tog")];
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

let currentFilter = "microbit";
let currentStatusFilter = "stable";

/* ============================================================
   INLINE APP DATA
   status: "stable" (default) | "beta" | "dev" | "offline"
   ============================================================ */
const INLINE_APPS = [
  { name:"bit-bot", emoji:"🤖", categories:["microbit"], badge:"popular", status:"stable", tags:["robot","micro:bit","BLE","AI","chatbot"],
    desc:{ en:"AI-powered talking robot companion for kids — chat with voice, customizable personalities, connects to micro:bit via Bluetooth.", fr:"Compagnon robot parlant alimenté par IA pour enfants — chat vocal, personnalités personnalisables, connexion micro:bit via Bluetooth.", ar:"رفيق روبوت ناطق بالذكاء الاصطناعي للأطفال — دردشة صوتية، شخصيات قابلة للتخصيص، اتصال بـ micro:bit عبر البلوتوث." }},
  { name:"magic-hands", emoji:"🪄", categories:["camera", "ai"], badge:"popular", status:"stable", tags:["camera","hand-tracking","mediapipe","effects","fun"],
    desc:{ en:"Wave your hands in front of the camera to trigger magic effects — confetti, trails, neon glow — powered by MediaPipe hand tracking.", fr:"Agitez vos mains devant la caméra pour déclencher des effets magiques — confettis, traînées, lueur néon — grâce au suivi de mains MediaPipe.", ar:"لوّح بيديك أمام الكاميرا لإطلاق تأثيرات سحرية — قصاصات ملونة، مسارات، توهج نيون — بفضل تتبع اليد MediaPipe." }},
  { name:"face-quest", emoji:"🕵️", categories:["camera", "ai", "microbit"], badge:"popular", status:"stable", tags:["camera","face-detection","game","privacy","local"],
    desc:{ en:"A face-detection game you play with your webcam — smile, blink, turn your head to score points. Privacy-first: runs 100% locally.", fr:"Un jeu de détection faciale avec votre webcam — souriez, clignez, tournez la tête pour marquer des points. Respect de la vie privée : 100% local.", ar:"لعبة كشف الوجه بكاميرا الويب — ابتسم، اغمز، أدر رأسك لتسجيل النقاط. الخصوصية أولاً: تعمل 100% محلياً." }},
  { name:"talking-robot", emoji:"💬", categories:["microbit", "ai"], badge:"stable", status:"stable", tags:["robot","speech","TTS","STT","BLE","emotions"],
    desc:{ en:"A browser robot that speaks, listens and shows emotions — send text or voice commands to a micro:bit over BLE.", fr:"Un robot navigateur qui parle, écoute et montre des émotions — envoyez du texte ou des commandes vocales à un micro:bit en BLE.", ar:"روبوت متصفح يتحدث ويستمع ويُظهر المشاعر — أرسل نصوصاً أو أوامر صوتية إلى micro:bit عبر BLE." }},
  { name:"teachable-machine", emoji:"🧠", categories:["microbit", "camera", "ai"], badge:"popular", status:"stable", tags:["ml","tensorflow","micro:bit","BLE","camera","gestures"],
    desc:{ en:"Train gestures or sounds in the browser with Teachable Machine, then send the results to a micro:bit over Bluetooth in real time.", fr:"Entraînez des gestes ou sons dans le navigateur avec Teachable Machine, puis envoyez les résultats à un micro:bit en Bluetooth en temps réel.", ar:"درّب إيماءات أو أصوات في المتصفح مع Teachable Machine، ثم أرسل النتائج إلى micro:bit عبر البلوتوث في الوقت الحقيقي." }},
  { name:"face-tracking", emoji:"😎", categories:["camera", "microbit"], badge:"stable", status:"stable", tags:["camera","face-tracking","BLE","events","kids"],
    desc:{ en:"Kids-friendly face tracking with event triggers — optionally send face position data to a micro:bit over BLE.", fr:"Suivi de visage pour enfants avec déclencheurs d'événements — envoyez optionnellement les données au micro:bit en BLE.", ar:"تتبع وجه للأطفال مع مشغلات أحداث — أرسل اختيارياً بيانات موضع الوجه إلى micro:bit عبر BLE." }},
  { name:"bitmoji-lab", emoji:"😄", categories:["microbit"], badge:"stable", status:"stable", tags:["emoji","micro:bit","BLE","LED","art"],
    desc:{ en:"Pick emojis, paint them with custom colors and send designs to an 8×8 or 16×16 NeoPixel LED matrix via micro:bit USB Serial.", fr:"Choisissez des emojis, peignez-les et envoyez les designs vers une matrice LED NeoPixel 8×8 ou 16×16 via micro:bit USB Serial.", ar:"اختر رموزاً تعبيرية، لوّنها وأرسل التصاميم إلى مصفوفة LED NeoPixel بحجم 8×8 أو 16×16 عبر micro:bit USB Serial." }},
  { name:"mission-control", emoji:"🚀", categories:["classroom", "microbit"], badge:"stable", status:"stable", tags:["webrtc","video","chat","BLE","commands"],
    desc:{ en:"Mission control dashboard with live video/chat via WebRTC — send button commands to a micro:bit over BLE.", fr:"Tableau de bord mission control avec vidéo/chat en direct via WebRTC — envoyez des commandes au micro:bit en BLE.", ar:"لوحة تحكم المهام مع فيديو/دردشة مباشرة عبر WebRTC — أرسل أوامر إلى micro:bit عبر BLE." }},
  { name:"bit-playground", emoji:"🧩", categories:["microbit"], badge:"stable", status:"stable", tags:["micro:bit","BLE","LEDs","sensors","servos","gamepad","charts"],
    desc:{ en:"The ultimate micro:bit BLE playground — control LEDs, read sensors, drive servos, play games and plot charts from the browser.", fr:"Le terrain de jeu ultime micro:bit BLE — LEDs, capteurs, servos, jeux et graphiques depuis le navigateur.", ar:"ملعب micro:bit BLE المطلق — تحكم في LEDs، اقرأ المستشعرات، حرّك المحركات، العب وارسم مخططات من المتصفح." }},
  { name:"rxy", emoji:"🎛️", categories:["microbit"], badge:"stable", status:"stable", tags:["remote","builder","micro:bit","BLE","no-code"],
    desc:{ en:"Build a custom Bluetooth remote for micro:bit — drag buttons, sliders and D-pads. No coding, just click and play.", fr:"Créez une télécommande Bluetooth personnalisée pour micro:bit — glissez des boutons, curseurs et D-pads. Sans code.", ar:"أنشئ جهاز تحكم بلوتوث مخصص لـ micro:bit — اسحب أزراراً ومنزلقات ولوحات اتجاه. بدون برمجة." }},
  { name:"pixel-gateway", emoji:"🎨", categories:["microbit"], badge:"stable", status:"stable", tags:["neopixel","micro:bit","LED","emoji"],
    desc:{ en:"Send colorful emoji art to a NeoPixel LED matrix connected to a micro:bit — supports USB Serial and Bluetooth LE.", fr:"Envoyez des emojis colorés vers une matrice LED NeoPixel connectée à un micro:bit — USB Serial et Bluetooth LE.", ar:"أرسل رسومات إيموجي ملونة إلى مصفوفة LED NeoPixel متصلة بـ micro:bit — عبر USB Serial وBluetooth LE." }},
  { name:"wled-kids-lab", emoji:"💡", categories:["hardware", "learning"], badge:"stable", status:"beta", tags:["WLED","LED","ESP32","neopixel","colors"],
    desc:{ en:"Control WS2812 / Neopixel LED strips with WLED — pick colors, effects and brightness. Fun intro to addressable LEDs.", fr:"Contrôlez des rubans LED WS2812 / Neopixel avec WLED — couleurs, effets et luminosité. Introduction ludique aux LEDs adressables.", ar:"تحكم في شرائط LED WS2812 / Neopixel مع WLED — ألوان، تأثيرات وسطوع. مقدمة ممتعة لأضواء LED القابلة للعنونة." }},
  { name:"esp32-c3-kids-lab", emoji:"⚡", categories:["hardware", "learning"], badge:"stable", status:"beta", tags:["ESP32","C3","IoT","sensors","LED","WiFi"],
    desc:{ en:"Hands-on ESP32-C3 lab — blink LEDs, read temperature sensors, connect to WiFi and build simple IoT projects from the browser.", fr:"Labo pratique ESP32-C3 — faites clignoter des LEDs, lisez des capteurs, connectez-vous au WiFi et créez des projets IoT depuis le navigateur.", ar:"مختبر ESP32-C3 عملي — أضئ LEDs، اقرأ مستشعرات الحرارة، اتصل بالواي فاي وأنشئ مشاريع IoT من المتصفح." }},
  { name:"crypto-academy", emoji:"🪙", categories:["learning"], badge:"stable", status:"beta", tags:["cryptography","encryption","education","interactive"],
    desc:{ en:"Interactive cryptography education platform — learn encryption, hashing, digital signatures, PKI and TLS with real Web Crypto API operations.", fr:"Plateforme éducative interactive de cryptographie — apprenez le chiffrement, le hachage, les signatures numériques, la PKI et le TLS avec l'API Web Crypto.", ar:"منصة تعليمية تفاعلية للتشفير — تعلّم التشفير والتجزئة والتوقيعات الرقمية وPKI وTLS باستخدام Web Crypto API." }},
  { name:"pentest-lab", emoji:"🔐", categories:["learning"], badge:"stable", status:"beta", tags:["security","pentest","hacking","education","CTF"],
    desc:{ en:"A beginner-friendly penetration testing sandbox — learn cybersecurity basics through guided challenges and CTF-style exercises.", fr:"Un bac à sable de test d'intrusion pour débutants — apprenez la cybersécurité à travers des défis guidés et des exercices de type CTF.", ar:"بيئة اختبار اختراق للمبتدئين — تعلّم أساسيات الأمن السيبراني من خلال تحديات موجهة وتمارين CTF." }},
  { name:"linux-kids-lab", emoji:"🐧", categories:["learning"], badge:"stable", status:"beta", tags:["linux","terminal","bash","commands","sandbox"],
    desc:{ en:"Learn Linux commands in a safe browser sandbox — navigate files, use pipes, write scripts and become a terminal ninja.", fr:"Apprenez les commandes Linux dans un bac à sable navigateur — naviguez dans les fichiers, utilisez les pipes, écrivez des scripts.", ar:"تعلّم أوامر لينكس في بيئة آمنة بالمتصفح — تنقل بين الملفات، استخدم الأنابيب، اكتب السكريبتات." }},
  { name:"classroom", emoji:"🏫", categories:["classroom"], badge:"stable", status:"beta", tags:["peerjs","webrtc","classroom","video","room-code"],
    desc:{ en:"PeerJS-powered cloud classroom — create a room with a code, share screens, chat and collaborate with up to 12 students.", fr:"Classe cloud PeerJS — créez une salle avec un code, partagez l'écran, discutez et collaborez avec jusqu'à 12 élèves.", ar:"فصل سحابي PeerJS — أنشئ غرفة برمز، شارك الشاشة، تحدث وتعاون مع حتى 12 طالب." }},
  { name:"arabic-translator", emoji:"🌐", categories:["arabic"], badge:"stable", status:"stable", tags:["arabic","translate","browser-only","no-server"],
    desc:{ en:"Translate text to and from Arabic directly in the browser — no server, no API key, fully offline-capable.", fr:"Traduisez du texte vers et depuis l'arabe dans le navigateur — sans serveur, sans clé API, fonctionne hors ligne.", ar:"ترجم النصوص من وإلى العربية مباشرة في المتصفح — بدون خادم، بدون مفتاح API، يعمل بدون إنترنت." }},
  { name:"piper-arabic-tts", emoji:"🎙️", categories:["arabic", "ai"], badge:"stable", status:"beta", tags:["arabic","piper","WASM","TTS","neural"],
    desc:{ en:"High-quality Arabic text-to-speech using Piper neural TTS compiled to WebAssembly — runs in the browser, no cloud needed.", fr:"Synthèse vocale arabe haute qualité avec Piper TTS neuronal compilé en WebAssembly — fonctionne dans le navigateur.", ar:"تحويل نص إلى كلام عربي عالي الجودة بتقنية Piper TTS العصبية عبر WebAssembly — يعمل في المتصفح." }},
  { name:"usb-logger", emoji:"🔌", categories:["microbit"], badge:"stable", status:"stable", tags:["micro:bit","serial","USB","WebSerial","data"],
    desc:{ en:"Talk to your micro:bit over USB serial from the browser — send commands, receive data and run speed tests via WebSerial.", fr:"Communiquez avec votre micro:bit via USB série depuis le navigateur — commandes, données et tests de vitesse via WebSerial.", ar:"تواصل مع micro:bit عبر USB التسلسلي من المتصفح — أرسل أوامر، استقبل بيانات واختبر السرعة عبر WebSerial." }},
  { name:"ble-logger", emoji:"📡", categories:["microbit"], badge:"stable", status:"stable", tags:["BLE","micro:bit","logger","debug","tools"],
    desc:{ en:"Bluetooth logger and debug playground for micro:bit — connect, inspect services, read sensors and log data in real time.", fr:"Enregistreur et débogueur Bluetooth pour micro:bit — connectez, inspectez les services, lisez les capteurs et logguez en temps réel.", ar:"مسجل وأداة تصحيح بلوتوث لـ micro:bit — اتصل، تفحّص الخدمات، اقرأ المستشعرات وسجّل البيانات." }},
  { name:"claude-toolkit", emoji:"🧰", categories:["ai", "tools"], badge:"dev", status:"beta", tags:["ai","claude","anthropic","prompts","workflow"],
    desc:{ en:"A toolkit for building apps and workflows with Claude AI — prompt templates, chained calls and output formatting.", fr:"Boîte à outils pour créer des apps et workflows avec Claude AI — modèles de prompts, appels chaînés et formatage.", ar:"مجموعة أدوات لبناء تطبيقات وسير عمل مع Claude AI — قوالب أوامر، استدعاءات متسلسلة وتنسيق المخرجات." }},
  { name:"puppeteer-playground", emoji:"🎭", categories:["tools"], badge:"stable", status:"beta", tags:["puppeteer","automation","scraping","testing","headless"],
    desc:{ en:"Experiment with Puppeteer browser automation — write scripts to scrape pages, take screenshots and run headless tests.", fr:"Expérimentez l'automatisation navigateur avec Puppeteer — scraping, captures d'écran et tests headless.", ar:"جرّب أتمتة المتصفح مع Puppeteer — كشط صفحات، التقاط لقطات شاشة واختبارات بدون واجهة." }},
  { name:"workshop-diy", emoji:"🏗️", categories:["tools"], badge:"hub", status:"stable", tags:["website","workshop","landing","STEM"],
    desc:{ en:"The official Workshop-Diy landing site — browse workshops, meet the team and explore STEM resources.", fr:"Le site officiel Workshop-Diy — parcourez les ateliers, découvrez l'équipe et explorez les ressources STEM.", ar:"موقع Workshop-Diy الرسمي — تصفح الورشات، تعرّف على الفريق واستكشف موارد STEM." }},
  { name:"circuit-lab", emoji:"🔋", categories:["hardware", "learning"], badge:"dev", status:"beta", tags:["circuit","electronics","simulation","LED","resistor"],
    desc:{ en:"Build and simulate electronic circuits in the browser — wire up LEDs, resistors, sensors and see the current flow.", fr:"Construisez et simulez des circuits électroniques dans le navigateur — câblez des LEDs, résistances, capteurs et visualisez le courant.", ar:"ابنِ وحاكِ دوائر إلكترونية في المتصفح — وصّل LEDs، مقاومات، مستشعرات وشاهد تدفق التيار." }},
  { name:"rocket-shield-vpn", emoji:"🛡️", categories:["tools"], badge:"dev", status:"beta", tags:["vpn","network","security","privacy"],
    desc:{ en:"Visual guide to VPNs and network security — see how encrypted tunnels protect your data.", fr:"Guide visuel des VPN et de la sécurité réseau — visualisez les tunnels chiffrés qui protègent vos données.", ar:"دليل مرئي للشبكات الافتراضية وأمن الشبكات — شاهد كيف تحمي الأنفاق المشفرة بياناتك." }},
  { name:"3d-lab", emoji:"🧊", categories:["learning"], badge:"dev", status:"beta", tags:["3D","three.js","modeling","creative"],
    desc:{ en:"Explore 3D design in the browser — create, rotate and light up objects using Three.js.", fr:"Explorez la 3D dans le navigateur — créez, faites pivoter et éclairez des objets avec Three.js.", ar:"استكشف التصميم ثلاثي الأبعاد في المتصفح — أنشئ، أدر وأضئ أشكالاً بـ Three.js." }},
  { name:"git-lab", emoji:"🔀", categories:["learning"], badge:"dev", status:"beta", tags:["git","version-control","tutorial","interactive"],
    desc:{ en:"Learn Git step by step — interactive lessons on commit, branch, merge and pull requests.", fr:"Apprenez Git pas à pas — leçons interactives sur commit, branch, merge et pull requests.", ar:"تعلّم Git خطوة بخطوة — دروس تفاعلية حول commit و branch و merge و pull requests." }},
  { name:"prompt-hero", emoji:"✨", categories:["ai", "learning"], badge:"dev", status:"beta", tags:["prompt","LLM","ai","writing","techniques"],
    desc:{ en:"Master AI prompting — learn techniques to write effective prompts for ChatGPT, Claude and other language models.", fr:"Maîtrisez l'art du prompting IA — techniques pour écrire des prompts efficaces pour ChatGPT, Claude et autres.", ar:"أتقن كتابة الأوامر للذكاء الاصطناعي — تقنيات لكتابة أوامر فعّالة لـ ChatGPT و Claude وغيرها." }},
  { name:"save-our-planet", emoji:"🌍", categories:["learning"], badge:"dev", status:"beta", tags:["robots","environment","asimov","kids"],
    desc:{ en:"Interactive trilingual app for kids — robots saving Earth in 2050, inspired by Asimov's Three Laws. 13 zones, 39 robots.", fr:"Application interactive trilingue pour enfants — des robots sauvent la Terre en 2050, inspirée des Trois Lois d'Asimov. 13 zones, 39 robots.", ar:"تطبيق تفاعلي ثلاثي اللغات للأطفال — روبوتات تنقذ الأرض في 2050، مستوحى من قوانين أسيموف الثلاثة. 13 منطقة، 39 روبوتاً." }},
  { name:"ops-catalog", emoji:"📋", categories:["tools"], badge:"dev", status:"beta", tags:["projects","voting","hardware","catalog"],
    desc:{ en:"293 DIY hardware project ideas across 42 categories — team voting app to decide what gets built first.", fr:"293 idées de projets hardware DIY en 42 catégories — application de vote en équipe pour choisir quoi construire.", ar:"293 فكرة مشروع عتاد DIY في 42 فئة — تطبيق تصويت جماعي لاختيار ما يُبنى أولاً." }},
  { name:"smart-home", emoji:"🏡", categories:["hardware", "learning"], badge:"dev", status:"beta", tags:["IoT","dashboard","sensors","ESP32","automation"],
    desc:{ en:"Build a smart home dashboard — monitor sensors, toggle lights, set automations and learn IoT basics.", fr:"Créez un tableau de bord maison connectée — capteurs, lumières, automatisations et bases de l'IoT.", ar:"أنشئ لوحة تحكم للمنزل الذكي — راقب المستشعرات، بدّل الأضواء، اضبط الأتمتة وتعلّم أساسيات IoT." }},
  { name:"makecode-adventures", emoji:"🧱", categories:["microbit", "learning"], badge:"dev", status:"beta", tags:["makecode","blocks","micro:bit","beginner"],
    desc:{ en:"Block-based coding adventures with MakeCode — guided projects that teach programming through micro:bit challenges.", fr:"Aventures de programmation par blocs avec MakeCode — projets guidés qui enseignent la programmation via des défis micro:bit.", ar:"مغامرات برمجة بالكتل مع MakeCode — مشاريع موجهة تعلّم البرمجة عبر تحديات micro:bit." }},
  { name:"bit-54-activities", emoji:"🤖", categories:["microbit", "learning"], badge:"dev", status:"beta", tags:["micro:bit","activities","projects","beginner","advanced"],
    desc:{ en:"54 hands-on activities for BBC micro:bit — from blinking LEDs to BLE robots, beginner to advanced.", fr:"54 activités pratiques pour BBC micro:bit — du clignotement de LEDs aux robots BLE, débutant à avancé.", ar:"54 نشاطاً عملياً لـ BBC micro:bit — من إضاءة LEDs إلى روبوتات BLE، من المبتدئ إلى المتقدم." }},
  { name:"crypto-vault", emoji:"💰", categories:["learning"], badge:"dev", status:"beta", tags:["cryptography","encryption","hashing","keys","digital-signatures"],
    desc:{ en:"Learn cryptography basics hands-on — encrypt messages, hash passwords, generate keys and verify digital signatures.", fr:"Apprenez la cryptographie en pratique — chiffrez des messages, hachez des mots de passe, générez des clés et vérifiez des signatures.", ar:"تعلّم أساسيات التشفير عملياً — شفّر رسائل، جزّئ كلمات مرور، ولّد مفاتيح وتحقق من التوقيعات الرقمية." }},
  { name:"apps", emoji:"🏠", categories:["tools"], badge:"new", status:"dev", tags:["hub","index","multilingual","kids","STEM"],
    desc:{ en:"A fun, multilingual hub for all Workshop-Diy mini-apps — built for kids, beginners, and STEM classrooms.", fr:"Hub multilingue et ludique pour toutes les mini-apps Workshop-Diy — conçu pour les enfants, débutants et classes STEM.", ar:"مركز متعدد اللغات وممتع لجميع تطبيقات Workshop-Diy المصغرة — مصمم للأطفال والمبتدئين وفصول STEM." }},
  { name:"bonjour", emoji:"👋", categories:["learning"], badge:"new", status:"dev", tags:["mDNS","Bonjour","DNS-SD","networking","kids"],
    desc:{ en:"Learn mDNS/Bonjour networking — discover devices, send queries, register services and explore local network protocols.", fr:"Apprenez le réseau mDNS/Bonjour — découvrez des appareils, envoyez des requêtes, enregistrez des services et explorez les protocoles réseau locaux.", ar:"تعلم شبكات mDNS/Bonjour — اكتشف الأجهزة، أرسل الاستعلامات، سجّل الخدمات واستكشف بروتوكولات الشبكة المحلية." }},
  { name:"cowsay", emoji:"🐄", categories:["learning"], badge:"new", status:"dev", tags:["math","ASCII-art","fun-facts","kids"],
    desc:{ en:"A fun ASCII cow that solves math expressions and shares amazing facts — pick a category and learn!", fr:"Une vache ASCII amusante qui résout des expressions mathématiques et partage des faits étonnants — choisissez une catégorie et apprenez !", ar:"بقرة ASCII مرحة تحل التعبيرات الرياضية وتشارك حقائق مذهلة — اختر فئة وتعلم!" }},
  { name:"dhcp-lab", emoji:"🔗", categories:["tools", "hardware"], badge:"new", status:"dev", tags:["DHCP","networking","Python","dashboard"],
    desc:{ en:"Zero-dependency Python DHCP server with real-time web dashboard.", fr:"Serveur DHCP Python sans dépendances avec tableau de bord web en temps réel.", ar:"خادم DHCP بلغة Python بدون تبعيات مع لوحة تحكم ويب في الوقت الفعلي." }},
  { name:"emojis", emoji:"😀", categories:["learning"], badge:"new", status:"dev", tags:["emoji","visual-coding","programming","kids"],
    desc:{ en:"EmojiFlow — learn programming concepts through emoji-based coding challenges and visual blocks.", fr:"EmojiFlow — apprenez les concepts de programmation à travers des défis de codage basés sur les emojis et des blocs visuels.", ar:"EmojiFlow — تعلم مفاهيم البرمجة من خلال تحديات الترميز بالرموز التعبيرية والكتل المرئية." }},
  { name:"morse-code", emoji:"📟", categories:["microbit", "learning", "hardware"], badge:"new", status:"dev", tags:["morse-code","BLE","micro:bit","audio","kids"],
    desc:{ en:"Learn Morse code interactively — alphabet trainer, encoder/decoder, audio playback, challenge quizzes and micro:bit BLE communication.", fr:"Apprenez le code Morse de façon interactive — entraîneur d'alphabet, encodeur/décodeur, lecture audio, quiz et communication BLE micro:bit.", ar:"تعلم شفرة مورس بشكل تفاعلي — مدرب الأبجدية، مشفر/فاك شفرة، تشغيل صوتي، اختبارات وتواصل BLE مع micro:bit." }},
  { name:"mqtt-lab", emoji:"📨", categories:["learning", "hardware"], badge:"new", status:"dev", tags:["MQTT","IoT","pub-sub","security","kids"],
    desc:{ en:"Learn MQTT hands-on — connect to a broker, publish/subscribe to topics, explore IoT security and chat with an AI assistant.", fr:"Apprenez MQTT en pratique — connectez-vous à un broker, publiez/abonnez-vous à des sujets, explorez la sécurité IoT et chattez avec un assistant IA.", ar:"تعلم MQTT عمليًا — اتصل بوسيط، انشر/اشترك في المواضيع، استكشف أمان إنترنت الأشياء ودردش مع مساعد ذكاء اصطناعي." }},
  { name:"ocpp", emoji:"⛽", categories:["tools", "learning"], badge:"new", status:"dev", tags:["OCPP","EV-charging","WebSocket","Python","simulation"],
    desc:{ en:"A complete, production-quality OCPP 1.6J simulation ecosystem for learning, testing, and development. Includes a CSMS, Charging Station, and EV Battery simulator — all with real-time web UIs —...", fr:"Écosystème complet de simulation OCPP 1.6J pour l'apprentissage, les tests et le développement — CSMS, station de charge et simulateur de batterie avec interfaces web en temps réel.", ar:"منظومة محاكاة OCPP 1.6J كاملة للتعلم والاختبار والتطوير — CSMS ومحطة شحن ومحاكي بطارية مع واجهات ويب في الوقت الفعلي." }},
  { name:"ollama-bot", emoji:"🦙", categories:["ai", "tools"], badge:"new", status:"dev", tags:["AI","chatbot","ollama","local-LLM","offline"],
    desc:{ en:"Chat with a local AI running on your computer via Ollama — private, offline, no cloud needed.", fr:"Discutez avec une IA locale sur votre ordinateur via Ollama — privé, hors ligne, sans cloud.", ar:"تحدث مع ذكاء اصطناعي محلي على حاسوبك عبر Ollama — خاص، بدون إنترنت، بدون سحابة." }},
  { name:"salat-times", emoji:"🕐", categories:["microbit", "arabic"], badge:"new", status:"dev", tags:["prayer-times","adhan","micro:bit","BLE","PWA","Islamic"],
    desc:{ en:"A single-file Islamic prayer times web app with micro:bit V2 Adhan Lantern support.", fr:"Application web de horaires de prière islamique en fichier unique avec support micro:bit V2 Adhan Lantern.", ar:"تطبيق ويب لمواقيت الصلاة الإسلامية في ملف واحد مع دعم فانوس الأذان micro:bit V2." }},
  { name:"scapy", emoji:"🕸️", categories:["learning"], badge:"new", status:"dev", tags:["packets","networking","Scapy","cybersecurity","kids"],
    desc:{ en:"Scapy Kids Lab — 16 interactive demos to build, inspect and visualize network packets layer by layer.", fr:"Scapy Kids Lab — 16 démos interactives pour construire, inspecter et visualiser les paquets réseau couche par couche.", ar:"Scapy Kids Lab — 16 عرضًا تفاعليًا لبناء وفحص وتصور حزم الشبكة طبقة بطبقة." }},
  { name:"sdr-lab", emoji:"📻", categories:["learning", "hardware"], badge:"new", status:"dev", tags:["SDR","radio","spectrum","frequencies","kids"],
    desc:{ en:"SDR Kids Lab — learn Software Defined Radio with interactive lessons on radio waves, frequencies and signal decoding.", fr:"SDR Kids Lab — apprenez la Radio Logicielle avec des leçons interactives sur les ondes radio, les fréquences et le décodage de signaux.", ar:"SDR Kids Lab — تعلم الراديو المعرّف بالبرمجيات مع دروس تفاعلية عن موجات الراديو والترددات وفك تشفير الإشارات." }},
  { name:"tesbih", emoji:"📿", categories:["arabic"], badge:"new", status:"dev", tags:["tasbih","dhikr","prayer","counter","PWA","Islamic"],
    desc:{ en:"A digital tasbih (prayer bead counter) with dhikr tracking — tap to count, fully offline PWA.", fr:"Tasbih numérique (compteur de perles de prière) avec suivi du dhikr — tapez pour compter, PWA entièrement hors ligne.", ar:"تسبيح رقمي (عداد مسبحة) مع تتبع الذكر — اضغط للعدّ، تطبيق PWA يعمل بدون إنترنت." }},
  { name:"tethkir", emoji:"✅", categories:["arabic", "tools"], badge:"new", status:"dev", tags:["task-manager","notes","encryption","PWA","Islamic"],
    desc:{ en:"Islamic Task Manager & Secure Notes", fr:"Gestionnaire de tâches islamique et notes sécurisées.", ar:"مدير مهام إسلامي وملاحظات مشفّرة." }},
  { name:"time-machine", emoji:"⏳", categories:["learning", "arabic"], badge:"new", status:"dev", tags:["Islamic-scientists","history","game","interactive","kids"],
    desc:{ en:"An interactive educational game about Muslim scientists who changed the world.", fr:"Jeu éducatif interactif sur les scientifiques musulmans qui ont changé le monde.", ar:"لعبة تعليمية تفاعلية عن العلماء المسلمين الذين غيّروا العالم." }},
  { name:"tty", emoji:"🖥️", categories:["tools", "hardware"], badge:"new", status:"dev", tags:["serial","terminal","bash","WebSerial","remote"],
    desc:{ en:"A web-based tool to send and execute bash scripts on a Linux board over serial — terminal, session recording, hex display and profiles.", fr:"Outil web pour envoyer et exécuter des scripts bash sur une carte Linux via série — terminal, enregistrement de session, affichage hex et profils.", ar:"أداة ويب لإرسال وتنفيذ سكريبتات bash على لوحة Linux عبر المنفذ التسلسلي — طرفية، تسجيل جلسات، عرض hex وملفات تعريف." }},
  { name:"flight-tracker", emoji:"✈️", categories:["learning", "microbit"], badge:"stable", status:"stable", tags:["flight-tracking","real-time","micro:bit","BLE","kids"],
    desc:{ en:"A kid-friendly real-time flight tracker that turns the sky into an interactive classroom.", fr:"Suivi de vols en temps réel adapté aux enfants — transforme le ciel en classe interactive.", ar:"متتبع رحلات جوية في الوقت الفعلي للأطفال — يحوّل السماء إلى فصل دراسي تفاعلي." }},
  { name:"flyers", emoji:"📰", categories:["tools"], badge:"stable", status:"stable", tags:["flyers","social-media","marketing","design"],
    desc:{ en:"Promotional flyer templates and social media posts for Workshop-DIY apps.", fr:"Modèles de flyers promotionnels et publications réseaux sociaux pour les apps Workshop-DIY.", ar:"قوالب منشورات ترويجية ومنشورات وسائل التواصل الاجتماعي لتطبيقات Workshop-DIY." }},
  { name:"git-pulse", emoji:"💓", categories:["tools"], badge:"dev", status:"offline", tags:["GitHub","repository-manager","CLI","developer-tool"],
    desc:{ en:"The complete GitHub repository manager — CLI + Web UI", fr:"Le gestionnaire complet de dépôts GitHub — CLI + interface web.", ar:"مدير مستودعات GitHub الكامل — سطر أوامر + واجهة ويب." }},
  { name:"golden-age", emoji:"🏛️", categories:["learning", "arabic", "classroom"], badge:"stable", status:"stable", tags:["Islamic-history","Golden-Age","interactive","game","kids"],
    desc:{ en:"An interactive educational journey through the Islamic Golden Age — explore algebra, medicine, optics, engineering and more.", fr:"Voyage éducatif interactif à travers l'Âge d'Or islamique — explorez l'algèbre, la médecine, l'optique, l'ingénierie et plus encore.", ar:"رحلة تعليمية تفاعلية عبر العصر الذهبي الإسلامي — استكشف الجبر والطب والبصريات والهندسة والمزيد." }},
  { name:"hacktivist-kids", emoji:"🥷", categories:["learning"], badge:"stable", status:"stable", tags:["cybersecurity","pranks","crypto","hacker-culture","kids"],
    desc:{ en:"A playful cybersecurity roleplay for kids — fake hacker terminal, prank missions, poster generator and spy-themed mini-games.", fr:"Jeu de rôle cybersécurité ludique pour enfants — faux terminal hacker, missions de farces, générateur d'affiches et mini-jeux d'espionnage.", ar:"لعب أدوار أمن سيبراني مرح للأطفال — طرفية قرصنة وهمية، مهام مقالب، مولّد ملصقات وألعاب تجسس مصغرة." }},
  { name:"linkedin", emoji:"💼", categories:["tools"], badge:"stable", status:"stable", tags:["portfolio","job-search","CV","multilingual"],
    desc:{ en:"Multi-country job search portfolio — 111+ documents, 4 markets, 3 languages, live job search via Adzuna API.", fr:"Portfolio de recherche d'emploi multi-pays — 111+ documents, 4 marchés, 3 langues, recherche d'emplois en direct via l'API Adzuna.", ar:"ملف بحث عن عمل متعدد الدول — 111+ وثيقة، 4 أسواق، 3 لغات، بحث مباشر عن وظائف عبر Adzuna API." }},
  { name:"posts", emoji:"📝", categories:["tools"], badge:"stable", status:"stable", tags:["post-generator","social-media","canvas","PWA"],
    desc:{ en:"Multi-mode visual creator for Workshop-DIY — 58 styles, cowsay art, chat mockups, memes and notifications. 100% client-side, single HTML file, installable PWA.", fr:"Outil multi-mode de création de visuels pour Workshop-DIY — 58 styles, art cowsay, maquettes de chat, mèmes et notifications. 100% client-side, fichier HTML unique, PWA installable.", ar:"منشئ مرئيات متعدد الأوضاع لـ Workshop-DIY — 58 نمطًا، فن cowsay، محاكاة محادثات، ميمات وإشعارات. 100% من جانب العميل، ملف HTML واحد، PWA قابل للتثبيت." }},
  { name:"sada", emoji:"📖", categories:["learning", "arabic"], badge:"stable", status:"stable", tags:["content-archive","564-files","multilingual","educational"],
    desc:{ en:"564 self-contained HTML files across 3 languages (EN/FR/AR) for the Workshop-DIY educational ecosystem.", fr:"564 fichiers HTML autonomes en 3 langues (EN/FR/AR) pour l'écosystème éducatif Workshop-DIY.", ar:"564 ملف HTML مستقل بـ 3 لغات (EN/FR/AR) للمنظومة التعليمية Workshop-DIY." }},
  { name:"sanitize-names-toolkit", emoji:"🧹", categories:["tools"], badge:"stable", status:"stable", tags:["bash","file-names","sanitize","CLI"],
    desc:{ en:"Bash toolkit to sanitize and normalize file and folder names — simple and advanced modes.", fr:"Boîte à outils Bash pour assainir et normaliser les noms de fichiers et dossiers — modes simple et avancé.", ar:"مجموعة أدوات Bash لتنظيف وتوحيد أسماء الملفات والمجلدات — وضع بسيط ومتقدم." }},
  { name:"satellites", emoji:"🛰️", categories:["learning", "arabic", "classroom"], badge:"stable", status:"stable", tags:["satellite-tracking","astronomy","Islamic-heritage","interactive","kids"],
    desc:{ en:"An interactive educational experience about satellites, orbital mechanics, and the Arab astronomical heritage that made it all possible.", fr:"Expérience éducative interactive sur les satellites, la mécanique orbitale et l'héritage astronomique arabe qui a rendu tout cela possible.", ar:"تجربة تعليمية تفاعلية عن الأقمار الصناعية وميكانيكا المدارات والتراث الفلكي العربي الذي جعل كل ذلك ممكنًا." }},
  { name:"termlite", emoji:"🔧", categories:["tools"], badge:"stable", status:"stable", tags:["SSH","SFTP","VNC","remote-access","self-hosted"],
    desc:{ en:"Self-hosted browser-based remote access hub. SSH terminal, SFTP file browser, VNC viewer, network scanner, encrypted credential vault, AI copilot, DHCP server, session recording, workflow...", fr:"Hub d'accès distant auto-hébergé dans le navigateur — terminal SSH, navigateur SFTP, client VNC, scanner réseau, coffre-fort chiffré, copilote IA, serveur DHCP et enregistrement de sessions.", ar:"مركز وصول عن بُعد ذاتي الاستضافة في المتصفح — طرفية SSH، متصفح SFTP، عارض VNC، ماسح شبكة، خزنة مشفرة، مساعد ذكاء اصطناعي، خادم DHCP وتسجيل جلسات." }},
  { name:"AI-hacker-lab", emoji:"🧠", categories:["ai", "learning", "microbit", "hardware", "tools", "camera", "classroom"], badge:"new", status:"stable", tags:["BLE","tensorflow","micro:bit","ESP32","game","git","HTML"],
    desc:{ en:"Interactive workshops teaching AI & Machine Learning to all ages.", fr:"Ai Hacker Lab — explorez et expérimentez !", ar:"Ai Hacker Lab — استكشف وجرّب!" }},
  { name:"al-maqlub-", emoji:"🗣️", categories:["arabic", "ai", "microbit", "tools", "learning"], badge:"new", status:"stable", tags:["BLE","TTS","STT","WLED","game","linux","HTML","LED"],
    desc:{ en:"Arabic Reversible Poetry — Museum · Creator · Game · Reciter", fr:"Al Maqlub  — explorez et expérimentez !", ar:"Al Maqlub  — استكشف وجرّب!" }},
  { name:"arabic-tts", emoji:"🗣️", categories:["arabic", "tools", "microbit", "ai"], badge:"new", status:"stable", tags:["BLE","TTS","game","git","linux","HTML","LED"],
    desc:{ en:"> Modern Standard Arabic Text-to-Speech · VITS + HiFi-GAN · FastAPI · PyTorch", fr:"Arabic Tts — explorez et expérimentez !", ar:"Arabic Tts — استكشف وجرّب!" }},
  { name:"builders-of-light", emoji:"📚", categories:["learning", "arabic", "tools", "classroom", "microbit", "hardware"], badge:"new", status:"stable", tags:["BLE","TTS","STT","WLED","game","HTML","LED","kids"],
    desc:{ en:"Version 1.0 · Single-file HTML app · 830 KB · 139 sections · 434+ functions · 3 languages · Zero dependencies", fr:"Builders Of Light — explorez et expérimentez !", ar:"Builders Of Light — استكشف وجرّب!" }},
  { name:"callgraph", emoji:"🛠️", categories:["tools"], badge:"new", status:"stable", tags:["BLE","game","git","linux","HTML","LED"],
    desc:{ en:"Interactive call graph analyzer for C codebases. Designed for embedded systems handover — understand a new codebase fast.", fr:"Callgraph — explorez et expérimentez !", ar:"Callgraph — استكشف وجرّب!" }},
  { name:"dir-pulse", emoji:"🤖", categories:["microbit", "tools", "hardware", "learning"], badge:"new", status:"stable", tags:["BLE","game","HTML"],
    desc:{ en:"بسم الله الرحمن الرحيم", fr:"Dir Pulse — explorez et expérimentez !", ar:"Dir Pulse — استكشف وجرّب!" }},
  { name:"fihris", emoji:"🛠️", categories:["tools", "learning", "microbit", "arabic", "hardware"], badge:"new", status:"stable", tags:["BLE","camera","micro:bit","WLED","IoT","linux","security","HTML"],
    desc:{ en:"The Workshop-DIY App Catalog", fr:"Fihris — explorez et expérimentez !", ar:"Fihris — استكشف وجرّب!" }},
  { name:"git-date-rewrite", emoji:"🤖", categories:["microbit", "tools"], badge:"new", status:"stable", tags:["BLE","git","linux","security","LED"],
    desc:{ en:"Clone → Rewrite → Push — Rewrite all commit dates across your GitHub repos from a single interactive terminal menu.", fr:"Git Date Rewrite — explorez et expérimentez !", ar:"Git Date Rewrite — استكشف وجرّب!" }},
  { name:"jisr", emoji:"🗣️", categories:["arabic", "learning", "hardware"], badge:"new", status:"stable", tags:["TTS","WLED","IoT","game","HTML","LED"],
    desc:{ en:"> \"Le pont entre les civilisations\" · The bridge between civilizations · الجسر بين الحضارات", fr:"Jisr — explorez et expérimentez !", ar:"Jisr — استكشف وجرّب!" }},
  { name:"kalami", emoji:"🗣️", categories:["arabic", "microbit", "ai"], badge:"new", status:"dev", tags:["BLE","TTS","STT","git","linux","HTML","LED"],
    desc:{ en:"<div align=\"center\">", fr:"Kalami — explorez et expérimentez !", ar:"Kalami — استكشف وجرّب!" }},
  { name:"luminaries-of-islam", emoji:"📚", categories:["learning", "arabic", "hardware", "microbit", "ai"], badge:"new", status:"stable", tags:["BLE","TTS","STT","WLED","game","git","linux","security"],
    desc:{ en:"> أنوار الإسلام — علماء العصر الذهبي", fr:"Luminaries Of Islam — explorez et expérimentez !", ar:"Luminaries Of Islam — استكشف وجرّب!" }},
  { name:"meridian", emoji:"🛠️", categories:["tools", "microbit", "hardware"], badge:"new", status:"dev", tags:["BLE","ESP32","git","linux","HTML","LED"],
    desc:{ en:"<div align=\"center\">", fr:"Meridian — explorez et expérimentez !", ar:"Meridian — استكشف وجرّب!" }},
  { name:"production-chain", emoji:"🏭", categories:["tools", "microbit", "learning"], badge:"new", status:"stable", tags:["BLE","git","linux","security","HTML","LED"],
    desc:{ en:"A fully containerized development and CI/CD infrastructure for teams building firmware (ARM Cortex-M), embedded Linux (Yocto/Buildroot), and desktop applications. Everything runs in Docker on a...", fr:"Production Chain — explorez et expérimentez !", ar:"Production Chain — استكشف وجرّب!" }},
  { name:"tools", emoji:"🛠️", categories:["tools"], badge:"new", status:"stable", tags:[],
    desc:{ en:"Official Workshop-DIY logo pack — SVG, PNG, ICO and AI formats for all platforms.", fr:"Tools — explorez et expérimentez !", ar:"Tools — استكشف وجرّب!" }},
  { name:"true-crypt", emoji:"🛠️", categories:["tools", "microbit"], badge:"new", status:"dev", tags:["BLE","git","security","crypto","HTML"],
    desc:{ en:"A browser-based encrypted volume manager inspired by TrueCrypt/VeraCrypt. Create, lock/unlock, and manage AES-256-GCM encrypted containers through a modern web interface.", fr:"True Crypt — explorez et expérimentez !", ar:"True Crypt — استكشف وجرّب!" }},
  { name:"warsha", emoji:"⚡", categories:["hardware"], badge:"new", status:"stable", tags:["BLE","git","linux","HTML"],
    desc:{ en:"بسم الله الرحمن الرحيم", fr:"Warsha — explorez et expérimentez !", ar:"Warsha — استكشف وجرّب!" }},
  { name:"web-kids", emoji:"📚", categories:["learning", "microbit", "tools", "arabic", "hardware"], badge:"new", status:"stable", tags:["BLE","TTS","game","linux","HTML","LED","kids"],
    desc:{ en:"A zero-dependency, single-file educational coding platform for kids aged 6–14.", fr:"Web Kids — explorez et expérimentez !", ar:"Web Kids — استكشف وجرّب!" }},
  { name:"web-kvm", emoji:"🛠️", categories:["tools", "microbit"], badge:"new", status:"stable", tags:["BLE","game","git","linux","security","crypto","HTML","LED"],
    desc:{ en:"Software KVM switch — share one keyboard and mouse across multiple computers over your local network.", fr:"Web Kvm — explorez et expérimentez !", ar:"Web Kvm — استكشف وجرّب!" }},
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
  const okFilter = !currentFilter || (app.categories && app.categories.includes(currentFilter));
  const okStatus = !currentStatusFilter || app.status === currentStatusFilter;
  return okQuery && okFilter && okStatus;
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
  el.dataset.cat = (app.categories && app.categories[0]) || "";
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
  else if (app.badge === "stable") badgeHTML = `<span class="card-badge stable">${t("badge_stable")}</span>`;

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
  const cats = new Set(APPS.flatMap(a => a.categories || []));
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
    const count = cat ? APPS.filter(a => a.categories && a.categories.includes(cat)).length : APPS.length;
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

  statusFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      statusFilterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentStatusFilter = btn.dataset.status || "";
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
