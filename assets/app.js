/* =========================================================
   HET SONKUSARE — PORTFOLIO SCRIPT
   Builds the work grids, filters and the video player.
   ========================================================= */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const THUMB = (w) => `media/thumbs/video${w.id}.jpg`;
  const SRC = (w) => `media/${w.f}`;
  const byId = Object.fromEntries(WORKS.map((w) => [w.id, w]));
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
  const canHover = matchMedia("(hover: hover)").matches;

  /* ---------- Cards ---------- */
  const cardHTML = (w) => `
    <button class="card" data-id="${w.id}" data-c="${w.c}" data-o="${w.o}" aria-label="Play ${w.t}">
      <div class="media">
        <img loading="lazy" src="${THUMB(w)}" alt="">
        <span class="playbtn"></span>
        <span class="dur">${fmt(w.d)}</span>
      </div>
      <div class="meta"><div class="ttl">${w.t}</div><div class="cat">${CATS[w.c]}</div></div>
    </button>`;

  // Muted preview on hover (desktop only); video file loads only when hovered.
  function hoverPreview(card, w) {
    let v;
    card.addEventListener("mouseenter", () => {
      if (!v) {
        v = document.createElement("video");
        Object.assign(v, { muted: true, loop: true, playsInline: true, src: SRC(w) });
        v.setAttribute("muted", "");
        $(".media", card).insertBefore(v, $(".playbtn", card));
      }
      v.play().then(() => card.classList.add("hovering")).catch(() => {});
    });
    card.addEventListener("mouseleave", () => { card.classList.remove("hovering"); v && v.pause(); });
  }

  /* ---------- Grid + filters ---------- */
  const grid = $(".grid[data-grid]");
  let visibleIds = [];
  if (grid) {
    const list = grid.dataset.grid === "featured" ? FEATURED.map((id) => byId[id]) : WORKS;
    grid.innerHTML = list.map(cardHTML).join("");
    visibleIds = list.map((w) => w.id);
    $$(".card", grid).forEach((card) => {
      const w = byId[card.dataset.id];
      card.addEventListener("click", () => openPlayer(visibleIds, w.id));
      if (canHover) hoverPreview(card, w);
    });

    const fbox = $(".filters[data-for]");
    if (fbox) {
      const counts = WORKS.reduce((a, w) => ((a[w.c] = (a[w.c] || 0) + 1), a), {});
      fbox.innerHTML = Object.entries(CATS)
        .filter(([k]) => k === "all" || counts[k])
        .map(([k, v]) => `<button class="chip${k === "all" ? " on" : ""}" data-f="${k}">${v}<span class="n">${k === "all" ? WORKS.length : counts[k]}</span></button>`)
        .join("");
      const apply = (f) => {
        $$(".chip", fbox).forEach((c) => c.classList.toggle("on", c.dataset.f === f));
        visibleIds = [];
        $$(".card", grid).forEach((c) => {
          const show = f === "all" || c.dataset.c === f;
          c.classList.toggle("hide", !show);
          if (show) visibleIds.push(+c.dataset.id);
        });
        const u = new URL(location);
        f === "all" ? u.searchParams.delete("cat") : u.searchParams.set("cat", f);
        history.replaceState(null, "", u);
      };
      fbox.addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (c) apply(c.dataset.f); });
      const initial = new URLSearchParams(location.search).get("cat");
      if (initial && CATS[initial]) apply(initial);
    }
  }

  /* ---------- Player ---------- */
  const lb = $(".lb");
  if (!lb) return;
  const stage = $(".lb-stage", lb), strip = $(".lb-strip", lb), title = $(".lb-title", lb);
  let ids = [], idx = 0;

  const clearStage = () => $$("video, img", stage).forEach((el) => { el.pause?.(); el.remove(); });
  const open = () => { lb.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { lb.classList.remove("open"); clearStage(); document.body.style.overflow = ""; };

  function openPlayer(list, id) {
    ids = list; idx = Math.max(0, list.indexOf(id));
    strip.innerHTML = list.map((x) => `<button data-id="${x}" aria-label="${byId[x].t}"><img src="${THUMB(byId[x])}" alt=""></button>`).join("");
    $$(".lb-nav", lb).forEach((b) => (b.style.display = list.length > 1 ? "" : "none"));
    open(); show();
  }
  function show() {
    const w = byId[ids[idx]];
    clearStage();
    const v = document.createElement("video");
    Object.assign(v, { src: SRC(w), poster: THUMB(w), controls: true, autoplay: true, playsInline: true });
    v.addEventListener("ended", () => { if (idx < ids.length - 1) step(1); }); // keep watching: auto-play next
    stage.prepend(v);
    v.play().catch(() => {});
    title.innerHTML = `${w.t}<small>${CATS[w.c]} · ${idx + 1} of ${ids.length}</small>`;
    $$("button", strip).forEach((b, k) => b.classList.toggle("on", k === idx));
    $("button.on", strip)?.scrollIntoView({ inline: "center", block: "nearest" });
  }
  function step(d) { if (ids.length) { idx = (idx + d + ids.length) % ids.length; show(); } }

  $(".lb-close", lb).onclick = close;
  $(".lb-prev", lb).onclick = () => step(-1);
  $(".lb-next", lb).onclick = () => step(1);
  strip.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { idx = ids.indexOf(+b.dataset.id); show(); } });
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
