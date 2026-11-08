/* =========================================================
   HET SONKUSARE — PORTFOLIO SCRIPT
   Builds the work rows / library, filters and video player.
   ========================================================= */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const THUMB = (w) => `media/thumbs/${w.id}.jpg`;
  // Compressed web copies live in /videos (same folder names, always .mp4).
  const SRC = (w) => encodeURI(`videos/${w.f}`);
  const byId = Object.fromEntries(WORKS.map((w) => [w.id, w]));
  const inCat = (c) => WORKS.filter((w) => w.c === c);
  const isTall = (w) => w.o === "v" || w.o === "s";
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
  const canHover = matchMedia("(hover: hover)").matches;

  /* ---------- Card ---------- */
  const cardHTML = (w) => `
    <button class="card" data-id="${w.id}" aria-label="Play ${w.t}">
      <div class="media ${isTall(w) ? "tall" : "wide"}">
        <img loading="lazy" decoding="async" src="${THUMB(w)}" alt="">
        <span class="playbtn"></span>
        <span class="dur">${fmt(w.d)}</span>
      </div>
      <div class="meta"><div class="ttl">${w.t}</div><div class="sub">${w.s || CATS[w.c].name}</div></div>
    </button>`;

  /* Renders a list of works: tall cards in one grid, wide cards in another. */
  const gridHTML = (list, big) => {
    const tall = list.filter(isTall), wide = list.filter((w) => !isTall(w));
    return (wide.length ? `<div class="hgrid${big ? " big" : ""}">${wide.map(cardHTML).join("")}</div>` : "")
         + (tall.length ? `<div class="vgrid">${tall.map(cardHTML).join("")}</div>` : "");
  };

  /* Wires clicks (open player with this group as playlist) + hover preview. */
  const wire = (root, playlist) => {
    $$(".card", root).forEach((card) => {
      const w = byId[card.dataset.id];
      card.addEventListener("click", () => openPlayer(playlist(), w.id));
      if (canHover) hoverPreview(card, w);
    });
  };

  /* Hover preview: only ONE preview video exists at a time. It is created after a
     short hover and fully unloaded on leave, so scrolling past cards never
     downloads or decodes video in the background. */
  let preview = null, previewCard = null, hoverTimer;
  const stopPreview = () => {
    clearTimeout(hoverTimer);
    if (!preview) return;
    preview.pause(); preview.removeAttribute("src"); preview.load(); preview.remove();
    previewCard && previewCard.classList.remove("hovering");
    preview = previewCard = null;
  };
  function hoverPreview(card, w) {
    card.addEventListener("mouseenter", () => {
      stopPreview();
      hoverTimer = setTimeout(() => {
        const v = document.createElement("video");
        Object.assign(v, { muted: true, loop: true, playsInline: true, preload: "auto", src: SRC(w) });
        v.setAttribute("muted", "");
        $(".media", card).insertBefore(v, $(".playbtn", card));
        preview = v; previewCard = card;
        v.play().then(() => { if (preview === v) card.classList.add("hovering"); }).catch(() => {});
      }, 400);
    });
    card.addEventListener("mouseleave", stopPreview);
  }

  /* ---------- Home: rows ---------- */
  $$("[data-row]").forEach((box) => {
    const key = box.dataset.row;
    const ids = (HOME[key] || []).filter((id) => byId[id]);
    const list = ids.map((id) => byId[id]);
    box.innerHTML = gridHTML(list, key === "vsl");
    wire(box, () => ids);
  });
  $$("[data-count]").forEach((el) => { el.textContent = el.dataset.count === "all" ? WORKS.length : inCat(el.dataset.count).length; });
  const clients = $("[data-clients]");
  if (clients) clients.innerHTML = CLIENTS.map((c) => `<span>${c}</span>`).join("");

  /* ---------- Work page: full library by category ---------- */
  const lib = $("[data-library]");
  if (lib) {
    const cats = Object.keys(CATS).filter((c) => inCat(c).length);
    lib.innerHTML = cats.map((c) => `
      <section class="lib-sec" data-cat="${c}" id="cat-${c}">
        <div class="lib-head">
          <div><h2>${CATS[c].name} <span class="count">${inCat(c).length}</span></h2><p>${CATS[c].desc}</p></div>
        </div>
        ${gridHTML(inCat(c), c === "vsl")}
      </section>`).join("");
    let active = "all";
    $$(".lib-sec", lib).forEach((sec) => wire(sec, () => (active === "all" ? cats.flatMap((c) => inCat(c).map((w) => w.id)) : inCat(sec.dataset.cat).map((w) => w.id))));

    const fbox = $(".filters");
    fbox.innerHTML = `<button class="chip on" data-f="all">All Work<span class="n">${WORKS.length}</span></button>`
      + cats.map((c) => `<button class="chip" data-f="${c}">${CATS[c].name}<span class="n">${inCat(c).length}</span></button>`).join("");
    const apply = (f, scroll) => {
      active = f;
      $$(".chip", fbox).forEach((ch) => ch.classList.toggle("on", ch.dataset.f === f));
      $$(".lib-sec", lib).forEach((s) => (s.hidden = f !== "all" && s.dataset.cat !== f));
      const u = new URL(location);
      f === "all" ? u.searchParams.delete("cat") : u.searchParams.set("cat", f);
      history.replaceState(null, "", u);
      if (scroll) lib.scrollIntoView({ block: "start" });
    };
    fbox.addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (c) apply(c.dataset.f, true); });
    const initial = new URLSearchParams(location.search).get("cat");
    if (initial && CATS[initial]) apply(initial, false);
  }

  /* ---------- Player ---------- */
  const lb = $(".lb");
  if (!lb) return;
  const stage = $(".lb-stage", lb), strip = $(".lb-strip", lb), title = $(".lb-title", lb);
  let ids = [], idx = 0;

  const clearStage = () => $$("video, img", stage).forEach((el) => { el.pause?.(); el.remove(); });
  const open = () => { stopPreview(); lb.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { lb.classList.remove("open"); clearStage(); document.body.style.overflow = ""; };

  function openPlayer(list, id) {
    ids = list; idx = Math.max(0, list.indexOf(id));
    strip.innerHTML = list.map((x) => `<button data-id="${x}" aria-label="${byId[x].t}"><img loading="lazy" src="${THUMB(byId[x])}" alt=""></button>`).join("");
    $$(".lb-nav", lb).forEach((b) => (b.style.display = list.length > 1 ? "" : "none"));
    open(); show();
  }
  function show() {
    const w = byId[ids[idx]];
    clearStage();
    const v = document.createElement("video");
    Object.assign(v, { src: SRC(w), poster: THUMB(w), controls: true, autoplay: true, playsInline: true });
    v.addEventListener("ended", () => { if (idx < ids.length - 1) step(1); }); // auto-play next
    stage.prepend(v);
    v.play().catch(() => {});
    title.innerHTML = `${w.t}<small>${w.s || CATS[w.c].name} ·${idx + 1} of ${ids.length}</small>`;
    $$("button", strip).forEach((b, k) => b.classList.toggle("on", k === idx));
    $("button.on", strip)?.scrollIntoView({ inline: "center", block: "nearest" });
  }
  function step(d) { if (ids.length) { idx = (idx + d + ids.length) % ids.length; show(); } }

  $(".lb-close", lb).onclick = close;
  $(".lb-prev", lb).onclick = () => step(-1);
  $(".lb-next", lb).onclick = () => step(1);
  strip.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { idx = ids.indexOf(b.dataset.id); show(); } });
  stage.addEventListener("click", (e) => { if (e.target === stage) close(); });
  addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  // Posters open as a single image
  $$(".poster").forEach((p) => p.addEventListener("click", () => {
    const src = $("img", p);
    clearStage(); ids = []; strip.innerHTML = "";
    $$(".lb-nav", lb).forEach((b) => (b.style.display = "none"));
    const img = document.createElement("img"); img.src = src.src; img.alt = src.alt;
    stage.prepend(img);
    title.innerHTML = `${src.alt}<small>Graphic Design</small>`;
    open();
  }));
})();
