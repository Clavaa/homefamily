import { NextResponse } from "next/server";
import { site } from "@/site.config";

/**
 * Lead intake → SendGrid.
 * PHI-light by design: name, phone, quiz answers only (no income, no
 * diagnosis, no medical detail) — SendGrid signs no BAA.
 * Graceful no-op when SENDGRID_API_KEY is unset (dev/preview).
 */

interface LeadBody {
  name?: string;
  phone?: string;
  state?: string;
  relationship?: string;
  medicaid?: string;
  liveTogether?: string;
  verdict?: string;
  matchedPrograms?: string[];
  lang?: string;
  website?: string; // honeypot
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request) {
  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: bots fill it, humans never see it. Pretend success.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").toString().slice(0, 100).trim();
  const phone = (body.phone || "").toString().slice(0, 30).trim();
  if (!name || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["State", (body.state || "—").toString().slice(0, 60)],
    ["Cares for", (body.relationship || "—").toString().slice(0, 30)],
    ["Medicaid", (body.medicaid || "—").toString().slice(0, 20)],
    ["Live together", (body.liveTogether || "—").toString().slice(0, 20)],
    ["Match verdict", (body.verdict || "—").toString().slice(0, 20)],
    [
      "Likely programs",
      (Array.isArray(body.matchedPrograms) ? body.matchedPrograms : [])
        .map((p) => p.toString().slice(0, 80))
        .slice(0, 10)
        .join(", ") || "—",
    ],
    ["Language", body.lang === "es" ? "Spanish" : "English"],
  ];

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.log("[lead] SENDGRID_API_KEY unset — lead logged only:", rows);
    return NextResponse.json({ ok: true });
  }

  const html = `<h2>New caregiver lead — call within 5 minutes</h2>
<table cellpadding="6" style="border-collapse:collapse">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="border:1px solid #ccc"><b>${esc(k)}</b></td><td style="border:1px solid #ccc">${esc(v)}</td></tr>`
  )
  .join("\n")}
</table>`;

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: site.leadTo }] }],
      from: { email: site.leadFrom, name: site.brand },
      subject: `Lead: ${name} — ${body.state || "?"} (${body.relationship || "?"})`,
      content: [{ type: "text/html", value: html }],
    }),
  });

  if (!res.ok) {
    console.error("[lead] SendGrid error", res.status, await res.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
