const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const USER = "abourdim";
const VIEW = (repo) => `https://raw.githack.com/${USER}/${repo}/main/index.html`;
const OUT_DIR = path.join(__dirname, "thumbs");

const APPS = [
  "all","bit-bot","bit-playground","magic-hands","bitmoji-lab","rxy",
  "usb-logger","ble-logger","mission-control","classroom","claude-toolkit",
  "crypto-academy","arabic-translator","arabic-speaker","piper-arabic-tts",
  "teachable-machine","face-quest","talking-robot","face-tracking",
  "pentest-lab","production-chain","puppeteer-playground"
];

(async () => {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const name of APPS) {
    const url = VIEW(name);
    const outFile = path.join(OUT_DIR, `${name}.png`);
    console.log(`📸  ${name} → ${url}`);

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    try {
      await page.goto(url, { waitUntil: "networkidle2", timeout: 20000 });
      // Give animations / lazy-loaded content a moment
      await new Promise((r) => setTimeout(r, 2000));
      await page.screenshot({ path: outFile, type: "png" });
      console.log(`   ✅ saved ${outFile}`);
    } catch (err) {
      console.warn(`   ⚠️  failed (${err.message}) — using placeholder`);
      // Skip — card will fall back to emoji header
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("\n🎉 Done! Thumbnails saved in ./thumbs/");
})();
