"""After `next build`: every internal href on every built page resolves to a
built page, and every assigned keyword appears in its page's visible text."""
import json, os, re, html, sys
root = ".next/server/app"
pages = {}
for d, _, fs in os.walk(root):
    for f in fs:
        if f.endswith(".html"):
            p = os.path.join(d, f)[len(root):-5]
            p = "/" if p == "/index" else p + "/"
            pages[p] = os.path.join(d, f)
extra = {"/sitemap.xml", "/llms.txt", "/robots.txt"}
bad, total = {}, 0
for p, f in pages.items():
    s = open(f).read()
    for h in re.findall(r'href="(/[^"#?]*)', s):
        if h.startswith("/_next") or h.startswith("/photos") or h in extra or h.endswith((".svg", ".jpg", ".webp", ".xml")):
            continue
        total += 1
        if h not in pages: bad.setdefault(h, set()).add(p)
print(f"{len(pages)} pages, {total} internal links checked, {len(bad)} broken targets")
for h, src in list(bad.items())[:15]: print("  BROKEN", h, "from", sorted(src)[:3])
def norm(t):
    t = " " + re.sub(r"[^a-z0-9&$']+", " ", t.lower().replace("’", "'")) + " "
    return re.sub(r"\s+", " ", re.sub(r" (a|an|the|your|my|our)(?= )", " ", t))
miss = 0
for e in json.load(open("seo/pages.json")):
    f = pages.get(e["path"])
    if not f: print("  NOT BUILT", e["path"]); miss += 1; continue
    s = open(f).read()
    s = re.sub(r"<script.*?</script>", " ", s, flags=re.S)
    text = norm(html.unescape(re.sub(r"<[^>]+>", " ", s)))
    m = [k for k in e["keywords"] if norm(k) not in text]
    if m: miss += len(m); print("  MISSING in rendered", e["path"], m[:5])
kw = sum(len(e["keywords"]) for e in json.load(open("seo/pages.json")))
print(f"keywords in rendered text: {kw - miss}/{kw}")
sys.exit(1 if bad or miss else 0)
