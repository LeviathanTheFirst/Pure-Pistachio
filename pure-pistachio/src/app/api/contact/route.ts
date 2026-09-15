import { Resend } from "resend";

type FieldName =
  | "name"
  | "email"
  | "company"
  | "country"
  | "interest"
  | "message";

type ContactBody = Record<FieldName, string>;

const INTEREST_VALUES = ["quote", "sample", "service", "general"] as const;

const INTEREST_LABELS: Record<(typeof INTEREST_VALUES)[number], string> = {
  quote: "Request a quote",
  sample: "Request a sample",
  service: "Services",
  general: "General",
};

/** Mirror the client-side validate() in InquiryForm.tsx so field-level
 *  errors returned here map directly onto the form's inputs. */
function validate(
  body: Record<string, unknown>,
): { data: ContactBody | null; errors: Partial<Record<FieldName, string>> } {
  const errors: Partial<Record<FieldName, string>> = {};
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const country = String(body.country ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid business email.";
  if (!company) errors.company = "Please enter your company.";
  if (!country) errors.country = "Please enter your country or region.";
  if (!interest || !(INTEREST_VALUES as readonly string[]).includes(interest))
    errors.interest = "Please choose what you're interested in.";

  if (Object.keys(errors).length > 0) return { data: null, errors };
  return { data: { name, email, company, country, interest, message }, errors };
}

/** Per-process limiter: 5 submissions / minute / IP. Vercel serverless
 *  instances are ephemeral, so this only bounds within a warm invocation —
 *  enough to discourage casual abuse without a datastore. */
const submissions = new Map<string, number[]>();
const MAX_PER_WINDOW = 5;
const WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  submissions.set(ip, recent);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  return false;
}

/** Minimal HTML escaping so a submitted `<script>` can't inject into the
 *  notification email. */
function escHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: bots fill the hidden website field that humans never see.
  // Pretend success so they don't retry with real-looking data.
  if (body.website) {
    return Response.json({ ok: true }, { status: 200 });
  }

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, message: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  const { data, errors } = validate(body);
  if (!data) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — inquiry from", data.email);
    return Response.json(
      { ok: false, message: "Email service is not configured. Please try again later." },
      { status: 503 },
    );
  }

  const interestLabel =
    INTEREST_LABELS[data.interest as (typeof INTEREST_VALUES)[number]] ?? data.interest;
  const from =
    process.env.EMAIL_FROM ?? "Pure Pistachio <onboarding@resend.dev>";

  const html = `
    <h2>New inquiry from ${escHtml(data.name)}</h2>
    <table style="border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0;font-weight:600">Name</td><td>${escHtml(data.name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td>${escHtml(data.email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600">Company</td><td>${escHtml(data.company)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600">Country</td><td>${escHtml(data.country)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600">Interest</td><td>${escHtml(interestLabel)}</td></tr>
      ${data.message ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">Message</td><td>${escHtml(data.message).replace(/\n/g, "<br>")}</td></tr>` : ""}
    </table>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: "info@purepistachio.co",
      subject: `New inquiry: ${interestLabel} — ${data.name} (${data.company})`,
      replyTo: data.email,
      html,
      tags: [{ name: "category", value: "contact-form" }],
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json(
        { ok: false, message: "Failed to send your inquiry. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] Resend raised:", err);
    return Response.json(
      { ok: false, message: "Failed to send your inquiry. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true }, { status: 200 });
}