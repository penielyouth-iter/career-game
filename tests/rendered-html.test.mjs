import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const distRoot = new URL("../dist/", import.meta.url);

test("builds a static GitHub Pages entry", async () => {
  const html = await readFile(new URL("index.html", distRoot), "utf8");
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /type="module"/);
  assert.doesNotMatch(html, /\/api\//);
});

test("copies public game assets", async () => {
  await access(new URL("og-career-game.png", distRoot));
  await access(new URL("assets/audio/walking.mp3", distRoot));
});
