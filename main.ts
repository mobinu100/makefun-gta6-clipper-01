// gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json
// from the repository root to /output/VIDEO.json, where the gate reads it.
// That is all the program has to do. The entry is the video itself: the agent
// finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to
// YouTube as a public Short with the bounty's line and the play code in its
// description, VIDEO.json names the video, and the house reads the video's
// views from YouTube. Nothing this program writes about the video is scored.
//
// The clip: the finale of Rockstar's Grand Theft Auto VI Trailer 2 — an
// airboat chase, Jason on a motorcycle with a seaplane behind him, a night
// boat run, Jason and Lucia in a convertible, and the sunset drive over the
// bridge into Vice City — cut to vertical 1080x1920 with make.fun's pitch
// ("Make clips like this with AI and earn money on make.fun") on screen.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The video address must be a YouTube address (shorts, watch or youtu.be).
// This catches a mistyped VIDEO.json before the gate ever sees it.
const YOUTUBE_URL = /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/;

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
let video;
try {
  video = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof video !== 'object' || video === null || typeof video.url !== 'string' || !YOUTUBE_URL.test(video.url) || /\s/.test(video.url)) {
  console.error('VIDEO.json must be an object with a YouTube url string (no spaces).');
  process.exit(1);
}

try {
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
