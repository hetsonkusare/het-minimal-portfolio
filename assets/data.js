/* ============================================================
   WORK LIBRARY — edit titles / categories / order here.
   id  = thumbnail name (media/thumbs/<id>.jpg)
   f   = compressed video path inside /videos
   c   = category key (see CATS)
   o   = orientation: v (9:16), h (16:9), s (1:1), w (wide)
   d   = duration in seconds
   t   = title, s = subtitle (client / type)
   ============================================================ */

/* Category order = order of sections on the All Work page */
window.CATS = {
  vsl:    { name: "VSL & Long-Form",       desc: "Video sales letters and long-form edits built to hold attention and convert." },
  client: { name: "Creator Reels",         desc: "Talking-head reels for creators and coaches: hooks, captions, B-roll, sound design." },
  brand:  { name: "Brand & Product Ads",   desc: "Campaigns, product reels and festive ads for brands." },
  anim:   { name: "Animated Shorts",       desc: "Animated story and explainer shorts in English and Hindi." },
  health: { name: "Healthcare",            desc: "Doctor features, clinic reels, hospital promos and medical explainers." },
  motion: { name: "Motion & Brand",        desc: "Logo reveals, product motion and brand intros." },
  type:   { name: "Kinetic Typography",    desc: "Text-driven edits timed to voice and music." },
  sports: { name: "Sports & Cinematic",    desc: "Hype edits and cinematic character cuts." },
  anime:  { name: "Anime & AMV",           desc: "Beat-synced anime edits." },
  reels:  { name: "Lifestyle Reels",       desc: "Lifestyle, real estate and creator intros." },
  ba:     { name: "Before → After",        desc: "Raw footage next to the final edit." },
  bts:    { name: "Behind the Edit",       desc: "Screen recordings from the editing timeline." },
};

const C = "Client/", B = "Brand/", A = "Animation/";

window.WORKS = [
  /* ---------- VSL ---------- */
  { id: "ozair-vsl-2", f: C + "Ozair VSL 2.mp4", c: "vsl", o: "h", d: 421, t: "Ozair — Video Sales Letter", s: "Long-form VSL · 7 min" },
  { id: "ozair-vsl-1", f: C + "Ozair VSL 1.mp4", c: "vsl", o: "h", d: 63,  t: "Ozair — VSL Opener",        s: "Video Sales Letter" },

  /* ---------- Creator reels (client work) ---------- */
  { id: "jamal-khan-1", f: C + "Jamal Khan 1.mp4", c: "client", o: "v", d: 95,  t: "Jamal Khan", s: "Creator Reel · 01" },
  { id: "ozair-1",      f: C + "Ozair 1.mp4",      c: "client", o: "v", d: 82,  t: "Ozair",      s: "Creator Reel · 01" },
  { id: "jatin-sachdeva-1", f: C + "Jatin Sachdeva 1.mp4", c: "client", o: "v", d: 50, t: "Jatin Sachdeva", s: "Creator Reel · 01" },
  { id: "brandon",      f: C + "Brandon.mp4",      c: "client", o: "v", d: 78,  t: "Brandon",    s: "Creator Reel" },
  { id: "canada",       f: C + "Canada.mp4",       c: "client", o: "v", d: 37,  t: "Canada Story", s: "Short-form Reel" },
  { id: "jamal-khan-2", f: C + "Jamal Khan 2.mp4", c: "client", o: "v", d: 84,  t: "Jamal Khan", s: "Creator Reel · 02" },
  { id: "ozair-2",      f: C + "Ozair 2.mp4",      c: "client", o: "v", d: 43,  t: "Ozair",      s: "Creator Reel · 02" },
  { id: "jatin-sachdeva-2", f: C + "Jatin Sachdeva 2.mp4", c: "client", o: "v", d: 31, t: "Jatin Sachdeva", s: "Creator Reel · 02" },
  { id: "jamal-khan-3", f: C + "Jamal Khan 3.mp4", c: "client", o: "v", d: 17,  t: "Jamal Khan", s: "Creator Reel · 03" },
  { id: "ozair-3",      f: C + "Ozair 3.mp4",      c: "client", o: "v", d: 33,  t: "Ozair",      s: "Creator Reel · 03" },
  { id: "jatin-sachdeva-3", f: C + "Jatin Sachdeva 3.mp4", c: "client", o: "v", d: 54, t: "Jatin Sachdeva", s: "Creator Reel · 03" },
  { id: "jamal-khan-4", f: C + "Jamal Khan 4.mp4", c: "client", o: "v", d: 67,  t: "Jamal Khan", s: "Creator Reel · 04" },
  { id: "ozair-4",      f: C + "Ozair 4.mp4",      c: "client", o: "v", d: 59,  t: "Ozair",      s: "Creator Reel · 04" },
  { id: "jatin-sachdeva-4", f: C + "Jatin Sachdeva 4.mp4", c: "client", o: "v", d: 32, t: "Jatin Sachdeva", s: "Creator Reel · 04" },
  { id: "jamal-khan-5", f: C + "Jamal Khan 5.mp4", c: "client", o: "v", d: 120, t: "Jamal Khan", s: "Creator Reel · 05" },
  { id: "ozair-5",      f: C + "Ozair 5.mp4",      c: "client", o: "v", d: 89,  t: "Ozair",      s: "Creator Reel · 05" },
  { id: "jamal-khan-6", f: C + "Jamal Khan 6.mp4", c: "client", o: "v", d: 69,  t: "Jamal Khan", s: "Creator Reel · 06" },
  { id: "ozair-6",      f: C + "Ozair 6.mp4",      c: "client", o: "v", d: 100, t: "Ozair",      s: "Creator Reel · 06" },
  { id: "jamal-khan-7", f: C + "Jamal Khan 7.mp4", c: "client", o: "v", d: 78,  t: "Jamal Khan", s: "Creator Reel · 07" },
  { id: "ozair-7",      f: C + "Ozair 7.mp4",      c: "client", o: "v", d: 65,  t: "Ozair",      s: "Creator Reel · 07" },

  /* ---------- Brand & product ads ---------- */
  { id: "siroopsons-diwali",           f: B + "Siroopsons Diwali.mp4",  c: "brand", o: "v", d: 61, t: "Siroopsons — Diwali Campaign", s: "Festive Brand Ad" },
  { id: "turmeric-kinetic-reel",       f: B + "Turmeric Reel.mp4",      c: "brand", o: "v", d: 99, t: "Turmeric — Product Reel",      s: "Kinetic Product Ad" },
  { id: "saffron-badam-ki-kimat-alag", f: B + "Saffron Badam.mp4",      c: "brand", o: "v", d: 35, t: "Saffron Badam — Product Reel", s: "Product Ad" },
  { id: "igcse-sat-reel-v7",           f: B + "IGCSE_SAT_reel_v7.mp4",  c: "brand", o: "v", d: 57, t: "IGCSE & SAT — Education Ad",   s: "Education Ad" },

  /* ---------- Healthcare ---------- */
  { id: "cure-sight-november-ad-2", f: B + "Cure sight November AD_2.mp4", c: "health", o: "v", d: 68, t: "Cure Sight — November Ad",  s: "Eye-care Ad" },
  { id: "tanus-5-common-mistake",   f: B + "Tanus 5 Common Mistakes.mp4",  c: "health", o: "v", d: 31, t: "Tanus — 5 Common Mistakes", s: "Clinic Reel" },
  { id: "trion",                    f: B + "Trion.mp4",                    c: "health", o: "h", d: 39, t: "Trion — Pregnancy Timeline", s: "Healthcare Explainer" },
  { id: "video100", f: "video100.mp4", c: "health", o: "v", d: 55, t: "Doctor Feature — Talking Head", s: "Doctor Feature" },
  { id: "video101", f: "video101.mp4", c: "health", o: "v", d: 41, t: "Hospital Promo — Before / After", s: "Hospital Promo" },

  /* ---------- Animated shorts ---------- */
  { id: "why-the-leaning-tower-never-fell",     f: A + "Why the Leaning Tower Never Fell.mp4",       c: "anim", o: "v", d: 55, t: "Why the Leaning Tower Never Fell", s: "Story Short" },
  { id: "why-miners-took-canaries-underground", f: A + "Why Miners Took Canaries Underground.mp4",   c: "anim", o: "v", d: 55, t: "Why Miners Took Canaries Underground", s: "Story Short" },
  { id: "the-man-who-sold-the-shovels",         f: A + "The Man Who Sold the Shovels.mp4",           c: "anim", o: "v", d: 49, t: "The Man Who Sold the Shovels", s: "Story Short" },
  { id: "the-icebox-that-paid-back",            f: A + "The Icebox That Paid Back.mp4",              c: "anim", o: "v", d: 51, t: "The Icebox That Paid Back", s: "Story Short" },
  { id: "what-the-grave-bell-really-meant",     f: A + "What the Grave Bell Really Meant.mp4",       c: "anim", o: "v", d: 60, t: "What the Grave Bell Really Meant", s: "Story Short" },
  { id: "khud-ko-gudgudi-kyun-nahi-kar-sakte",  f: A + "Khud Ko Gudgudi Kyun Nahi Kar Sakte.mp4",    c: "anim", o: "v", d: 62, t: "Khud Ko Gudgudi Kyun Nahi Kar Sakte?", s: "Explainer Short · Hindi" },
  { id: "ye-dekhte-hi-tumhe-ubaasi-aayegi",     f: A + "Ye Dekhte Hi Tumhe Ubaasi Aayegi.mp4",       c: "anim", o: "v", d: 71, t: "Ye Dekhte Hi Tumhe Ubaasi Aayegi", s: "Explainer Short · Hindi" },
  { id: "gaana-dimaag-mein-atak-gaya-nikal-hi-nahi-raha", f: A + "Gaana Dimaag Mein Atak Gaya.mp4",  c: "anim", o: "v", d: 73, t: "Gaana Dimaag Mein Atak Gaya", s: "Explainer Short · Hindi" },
  { id: "sote-waqt-achanak-girne-jaisa-jhatka", f: A + "Sote Waqt Girne Jaisa Jhatka.mp4",           c: "anim", o: "v", d: 69, t: "Sote Waqt Girne Jaisa Jhatka", s: "Explainer Short · Hindi" },
  { id: "socket-mein-chehra-baadal-mein-chehra", f: A + "Socket Mein Chehra Baadal Mein Chehra.mp4", c: "anim", o: "v", d: 69, t: "Socket Mein Chehra, Baadal Mein Chehra", s: "Explainer Short · Hindi" },
  { id: "sleep-paralysis-short",                f: A + "Sleep Paralysis.mp4",                        c: "anim", o: "v", d: 72, t: "Sleep Paralysis", s: "Story Short" },
  { id: "mirror-face-short",                    f: A + "The Mirror Face.mp4",                        c: "anim", o: "v", d: 80, t: "The Mirror Face", s: "Story Short" },
  { id: "chhalawa-light-short",                 f: A + "Chhalawa Light.mp4",                         c: "anim", o: "v", d: 75, t: "Chhalawa Light", s: "Story Short" },

  /* ---------- Earlier work ---------- */
  { id: "video94",  f: "video94.mp4",  c: "ba",     o: "v", d: 70, t: "Raw Footage → Final Cut" },
  { id: "video98",  f: "video98.mp4",  c: "ba",     o: "v", d: 51, t: "Before / After Edit" },
  { id: "video105", f: "video105.mp4", c: "sports", o: "v", d: 15, t: "Football Hype Edit" },
  { id: "video104", f: "video104.mp4", c: "sports", o: "v", d: 11, t: "Football Legend Edit" },
  { id: "video103", f: "video103.mp4", c: "sports", o: "v", d: 11, t: "Cinematic Character Cut" },
  { id: "video108", f: "video108.mp4", c: "sports", o: "v", d: 20, t: "Series Edit — Tension" },
  { id: "video109", f: "video109.mp4", c: "sports", o: "v", d: 17, t: "Series Edit — The Game" },
  { id: "video102", f: "video102.mp4", c: "anime",  o: "v", d: 37, t: "Anime AMV — Awakening" },
  { id: "video110", f: "video110.mp4", c: "anime",  o: "v", d: 18, t: "Manga Panel Motion" },
  { id: "video112", f: "video112.mp4", c: "anime",  o: "s", d: 22, t: "Fusion — Anime Edit" },
  { id: "video113", f: "video113.mp4", c: "anime",  o: "s", d: 26, t: "\"I Believe\" — Anime Edit" },
  { id: "video111", f: "video111.mp4", c: "type",   o: "h", d: 70, t: "\"Give Up\" — Kinetic Typography" },
  { id: "video107", f: "video107.mp4", c: "type",   o: "h", d: 77, t: "\"You Work, They Hate\"" },
  { id: "video106", f: "video106.mp4", c: "type",   o: "h", d: 7,  t: "Title Sequence" },
  { id: "video87",  f: "video87.mp4",  c: "type",   o: "h", d: 13, t: "Minimal Text Reveal" },
  { id: "video90",  f: "video90.mp4",  c: "motion", o: "v", d: 11, t: "The Fall — Spotlight Motion" },
  { id: "video92",  f: "video92.mp4",  c: "motion", o: "v", d: 9,  t: "\"No Plan B\" — Motion Poster" },
  { id: "video93",  f: "video93.mp4",  c: "motion", o: "v", d: 14, t: "Automotive Promo" },
  { id: "video97",  f: "video97.mp4",  c: "motion", o: "v", d: 3,  t: "NextScene — Logo Sting" },
  { id: "video99",  f: "video99.mp4",  c: "motion", o: "v", d: 4,  t: "Krisa — Logo Reveal" },
  { id: "video95",  f: "video95.mp4",  c: "motion", o: "v", d: 72, t: "Clean Brand Explainer" },
  { id: "video88",  f: "video88.mp4",  c: "motion", o: "h", d: 18, t: "Smartwatch — Product Motion" },
  { id: "video89",  f: "video89.mp4",  c: "motion", o: "h", d: 14, t: "App UI — SaaS Motion" },
  { id: "video96",  f: "video96.mp4",  c: "motion", o: "h", d: 17, t: "Studio Brand Intro" },
  { id: "video80",  f: "video80.mp4",  c: "reels",  o: "v", d: 54, t: "Lifestyle Reel" },
  { id: "video81",  f: "video81.mp4",  c: "reels",  o: "v", d: 40, t: "City Lifestyle Reel" },
  { id: "video82",  f: "video82.mp4",  c: "reels",  o: "v", d: 45, t: "Real Estate Story Reel" },
  { id: "video83",  f: "video83.mp4",  c: "reels",  o: "h", d: 15, t: "Creator Intro" },
  { id: "video91",  f: "video91.mp4",  c: "bts",    o: "v", d: 31, t: "Inside the Edit" },
  { id: "video84",  f: "video84.mp4",  c: "bts",    o: "w", d: 21, t: "Timeline Breakdown 01" },
  { id: "video85",  f: "video85.mp4",  c: "bts",    o: "w", d: 5,  t: "Timeline Breakdown 02" },
  { id: "video86",  f: "video86.mp4",  c: "bts",    o: "w", d: 9,  t: "Timeline Breakdown 03" },
];

/* Client names shown in the "Worked with" strip on the home page */
window.CLIENTS = ["Last Page Media", "Jamal Khan", "Ozair", "Jatin Sachdeva", "Brandon", "Cure Sight", "Siroopsons", "Tanus", "Trion", "TejClinic"];

/* Home page rows: which videos to show (in order) */
window.HOME = {
  vsl:    ["ozair-vsl-2", "ozair-vsl-1"],
  client: ["jamal-khan-1", "ozair-1", "jatin-sachdeva-1", "brandon", "jamal-khan-2", "ozair-2", "canada", "jatin-sachdeva-3", "jamal-khan-4", "ozair-5"],
  brand:  ["cure-sight-november-ad-2", "siroopsons-diwali", "turmeric-kinetic-reel", "saffron-badam-ki-kimat-alag", "tanus-5-common-mistake"],
  anim:   ["why-the-leaning-tower-never-fell", "the-man-who-sold-the-shovels", "why-miners-took-canaries-underground", "khud-ko-gudgudi-kyun-nahi-kar-sakte", "mirror-face-short"],
  more:   ["video100", "video105", "video90", "video112", "trion"],
};
