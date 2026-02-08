npm install puppeteer
node screenshot.js
```
This creates a `thumbs/` folder with a PNG for each app.

**`app.js`** — Updated cards now show a thumbnail image with a graceful fallback (shows the emoji if the screenshot is missing).

**`styles.css`** — Added thumbnail styles with hover zoom effect and a nice fallback display.

Your project structure should look like:
```
index.html
app.js
styles.css
thumbs/
  all.png
  bit-bot.png
  bit-playground.png
  ...
