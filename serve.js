// Local preview server with video streaming (HTTP Range) support.
// Run:  node serve.js   → http://localhost:5173
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT || 5173;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
  ".svg": "image/svg+xml", ".gif": "image/gif", ".mp4": "video/mp4", ".mov": "video/quicktime", ".pdf": "application/pdf",
};

http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }

  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end("Not found"); }
    const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
    const range = req.headers.range;
    const base = { "Content-Type": type, "Accept-Ranges": "bytes", "Cache-Control": "max-age=3600" };

    if (range) {
      const [s, e] = range.replace("bytes=", "").split("-");
      const start = parseInt(s, 10) || 0;
      const end = e ? Math.min(parseInt(e, 10), st.size - 1) : st.size - 1;
      if (start >= st.size) { res.writeHead(416, { "Content-Range": `bytes */${st.size}` }); return res.end(); }
      res.writeHead(206, { ...base, "Content-Range": `bytes ${start}-${end}/${st.size}`, "Content-Length": end - start + 1 });
      fs.createReadStream(file, { start, end }).pipe(res);
    } else {
      res.writeHead(200, { ...base, "Content-Length": st.size });
      fs.createReadStream(file).pipe(res);
    }
  });
}).listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}`));
