const USER = "abourdim";
const VIEW = (repo) => `https://raw.githack.com/${USER}/${repo}/main/index.html`;

const APPS = [
  { name:"bitPlayground", emoji:"🧩", desc:"Play with the BBC micro:bit from your browser (BLE): LEDs, sensors, servos, gamepad, charts!", tags:["micro:bit","BLE","web"] },
  { name:"magic-hands", emoji:"🪄", desc:"Wave your hands in front of the camera to trigger magic effects like confetti & trails.", tags:["camera","hand-tracking","fun"] },
  { name:"bitmoji-lab", emoji:"😄", desc:"Turn emojis into colorful micro:bit LED art and send them wirelessly.", tags:["emoji","micro:bit","BLE"] },
  { name:"rxy", emoji:"🎛️", desc:"Build a Bluetooth remote for micro:bit — no coding, just click & play.", tags:["builder","micro:bit","BLE"] },
  { name:"usb-logger", emoji:"🔌", desc:"Talk to your micro:bit over USB serial from the browser (send/receive + speed test).", tags:["micro:bit","serial","web"] },
  { name:"ble-logger", emoji:"📡", desc:"Bluetooth logger / playground for micro:bit experiments.", tags:["BLE","micro:bit","tools"] },
  { name:"mission-control", emoji:"🚀", desc:"Mission control: video/chat + buttons to send commands (and optional micro:bit BLE).", tags:["webrtc","kids","BLE"] },
  { name:"classroom", emoji:"🏫", desc:"PeerJS Cloud Classroom Lite — simple room-code classroom for up to ~12 students.", tags:["peerjs","classroom","webrtc"] },
  { name:"arabic-translator", emoji:"📖", desc:"تطبيق مترجم عربي يعمل داخل المتصفح بدون خادم وبدون مفاتيح API.", tags:["arabic","translate","browser-only"] },
  { name:"arabic-speaker", emoji:"🗣️", desc:"Arabic TTS + STT in the browser using Web Speech API (no backend).", tags:["arabic","tts","stt"] },
  { name:"piper-arabic-tts", emoji:"🎙️", desc:"Arabic TTS demo using Piper (WASM). (May need hosting for model files.)", tags:["arabic","piper","wasm"] },
  { name:"teachable-machine", emoji:"🧠", desc:"Teach gestures/sounds, then control a micro:bit over Bluetooth.", tags:["ml","micro:bit","BLE"] },
  { name:"face-quest", emoji:"🕵️", desc:"Face Quest — a face game you can play with the camera (privacy-first: runs locally).", tags:["camera","ai","micro:bit"] },
  { name:"talking-robot", emoji:"🤖", desc:"A talking robot that can speak, listen, show emotions, and message a micro:bit.", tags:["robot","speech","BLE"] },
  { name:"face-tracking", emoji:"😎", desc:"Kids Edition face tracking with camera events and optional micro:bit BLE.", tags:["camera","face-tracking","BLE"] },
].map(a => ({
  ...a,
  github: `https://github.com/${USER}/${a.name}`,
  view: VIEW(a.name)
}));

const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const q = document.getElementById("q");
const filterButtons = [...document.querySelectorAll(".mode-btn")];

let currentFilter = "";

function normalize(s){ return (s || "").toLowerCase(); }

function matches(app){
  const text = normalize(app.name + " " + app.desc + " " + (app.tags||[]).join(" "));
  const query = normalize(q.value).trim();
  const okQuery = !query || text.includes(query);
  const okFilter = !currentFilter || (app.tags||[]).map(normalize).includes(normalize(currentFilter));
  return okQuery && okFilter;
}

function card(app){
  const el = document.createElement("article");
  el.className = "kids-card";

  const sparkles = ["✨","🎈","🎉","⭐","🍭","🌟","🫧"];
  const sp = sparkles[Math.floor(Math.random()*sparkles.length)];

  el.innerHTML = `
    <div class="sparkline">${sp}</div>
    <h3><span class="kids-emoji">${app.emoji}</span> ${app.name}</h3>
    <p class="kids-desc">${app.desc}</p>

    <div class="kids-actions">
      <a class="kids-link" href="${app.github}" target="_blank" rel="noreferrer">GitHub ↗</a>
      <a class="kids-link primary" href="${app.view}" target="_blank" rel="noreferrer">View ▶</a>
    </div>

    <div class="kids-tags">
      ${(app.tags||[]).slice(0,5).map(t => `<span class="kids-tag">${t}</span>`).join("")}
    </div>
  `;
  return el;
}

function render(){
  grid.innerHTML = "";
  const items = APPS.filter(matches);
  items.forEach(a => grid.appendChild(card(a)));
  empty.style.display = items.length ? "none" : "block";
}

q.addEventListener("input", render);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter || "";
    render();
  });
});

render();
