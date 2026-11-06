/* ============================================================
   WORK LIBRARY — edit titles / categories here.
   o = orientation: v (9:16), h (16:9), s (1:1), w (wide 1662x1080)
   ============================================================ */
window.CATS = {
  all:    "All Work",
  health: "Healthcare",
  ba:     "Before → After",
  sports: "Sports & Cinematic",
  anime:  "Anime & AMV",
  type:   "Kinetic Typography",
  motion: "Motion & Brand",
  reels:  "Lifestyle Reels",
  bts:    "Behind the Edit",
};

window.WORKS = [
  { id: 100, f: "video100.mp4", c: "health", o: "v", d: 55, t: "Doctor Feature — Talking Head" },
  { id: 101, f: "video101.mp4", c: "health", o: "v", d: 41, t: "Hospital Promo — Before / After" },
  { id: 94,  f: "video94.mp4",  c: "ba",     o: "v", d: 70, t: "Raw Footage → Final Cut" },
  { id: 98,  f: "video98.mp4",  c: "ba",     o: "v", d: 51, t: "The Glow-Up Edit" },
  { id: 105, f: "video105.mp4", c: "sports", o: "v", d: 15, t: "Football Hype Edit" },
  { id: 104, f: "video104.mp4", c: "sports", o: "v", d: 11, t: "Legend Mode — Football" },
  { id: 103, f: "video103.mp4", c: "sports", o: "v", d: 11, t: "Cinematic Character Cut" },
  { id: 108, f: "video108.mp4", c: "sports", o: "v", d: 20, t: "Series Edit — Tension" },
  { id: 109, f: "video109.mp4", c: "sports", o: "v", d: 17, t: "Series Edit — The Game" },
  { id: 102, f: "video102.mp4", c: "anime",  o: "v", d: 37, t: "Anime AMV — Awakening" },
  { id: 110, f: "video110.mp4", c: "anime",  o: "v", d: 18, t: "Manga Panel Motion" },
  { id: 112, f: "video112.mp4", c: "anime",  o: "s", d: 22, t: "Fusion — Anime Edit" },
  { id: 113, f: "video113.mp4", c: "anime",  o: "s", d: 26, t: "\"I Believe\" — Anime Edit" },
  { id: 111, f: "video111.mp4", c: "type",   o: "h", d: 70, t: "\"Give Up\" — Kinetic Typography" },
  { id: 107, f: "video107.mp4", c: "type",   o: "h", d: 77, t: "\"You Work, They Hate\" — Typography" },
  { id: 106, f: "video106.mp4", c: "type",   o: "h", d: 7,  t: "Title Sequence" },
  { id: 87,  f: "video87.mp4",  c: "type",   o: "h", d: 13, t: "Minimal Text Reveal" },
  { id: 90,  f: "video90.mp4",  c: "motion", o: "v", d: 11, t: "The Fall — Spotlight Motion" },
  { id: 88,  f: "video88.mp4",  c: "motion", o: "h", d: 18, t: "Smartwatch — Product Motion" },
  { id: 89,  f: "video89.mp4",  c: "motion", o: "h", d: 14, t: "App UI — SaaS Motion" },
  { id: 92,  f: "video92.mov",  c: "motion", o: "v", d: 9,  t: "\"There's No Plan B\" — Motion Poster" },
  { id: 93,  f: "video93.mov",  c: "motion", o: "v", d: 14, t: "Automotive Promo" },
  { id: 96,  f: "video96.mov",  c: "motion", o: "h", d: 17, t: "Studio Brand Intro" },
  { id: 97,  f: "video97.mov",  c: "motion", o: "v", d: 3,  t: "NextScene — Logo Sting" },
  { id: 99,  f: "video99.mov",  c: "motion", o: "v", d: 4,  t: "Krisa — Logo Reveal" },
  { id: 95,  f: "video95.mp4",  c: "motion", o: "v", d: 72, t: "Clean Brand Explainer" },
  { id: 80,  f: "video80.mp4",  c: "reels",  o: "v", d: 54, t: "Lifestyle Reel — Open" },
  { id: 81,  f: "video81.mp4",  c: "reels",  o: "v", d: 40, t: "Lifestyle Reel — City" },
  { id: 82,  f: "video82.mp4",  c: "reels",  o: "v", d: 45, t: "Real Estate Story Reel" },
  { id: 83,  f: "video83.mp4",  c: "reels",  o: "h", d: 15, t: "Creator Intro" },
  { id: 84,  f: "video84.mov",  c: "bts",    o: "w", d: 21, t: "Timeline Breakdown #1" },
  { id: 85,  f: "video85.mov",  c: "bts",    o: "w", d: 5,  t: "Timeline Breakdown #2" },
  { id: 86,  f: "video86.mov",  c: "bts",    o: "w", d: 9,  t: "Timeline Breakdown #3" },
  { id: 91,  f: "video91.mov",  c: "bts",    o: "v", d: 31, t: "Inside the Edit Bay" },
];

/* Featured on the home page, in order */
window.FEATURED = [105, 100, 112, 111, 90, 94, 108, 80];
/* Showreel playlist (Play Showreel button) */
window.REEL = [105, 112, 104, 90, 99, 108, 102, 97];
