import { fail } from "@sveltejs/kit";
import { b as private_env } from "../../../chunks/shared-server.js";
import { s as site } from "../../../chunks/site.js";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const load = async () => {
  return {};
};
const actions = {
  default: async ({ request, getClientAddress }) => {
    const data = await request.formData();
    const honeypot = String(data.get("company") ?? "");
    if (honeypot.trim().length > 0) {
      return { success: true };
    }
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const errors = {};
    if (name.length < 2) errors.name = "Please enter your name.";
    if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
    if (message.length < 10) errors.message = "Please add a little more detail (10 characters minimum).";
    if (message.length > 4e3) errors.message = "Please keep your message under 4,000 characters.";
    if (Object.keys(errors).length > 0) {
      return fail(400, { errors, values: { name, email, topic, message } });
    }
    const apiKey = private_env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured — contact form message was not sent.");
      return fail(503, {
        errors: {
          form: "Sorry — the contact form is not fully set up yet. Please email us directly instead."
        },
        values: { name, email, topic, message }
      });
    }
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: `BCS Berkshire website <no-reply@${new URL(site.url).hostname}>`,
          to: site.contact.general,
          reply_to: email,
          subject: `Website enquiry: ${topic || "General"}`,
          text: `From: ${name} <${email}>
IP: ${getClientAddress()}

${message}`
        })
      });
      if (!res.ok) {
        const body = await res.text();
        console.error("Resend API error:", res.status, body);
        return fail(502, {
          errors: {
            form: "Something went wrong sending your message. Please try again or email us directly."
          },
          values: { name, email, topic, message }
        });
      }
    } catch (err) {
      console.error("Contact form send failed:", err);
      return fail(502, {
        errors: {
          form: "Something went wrong sending your message. Please try again or email us directly."
        },
        values: { name, email, topic, message }
      });
    }
    return { success: true };
  }
};
export {
  actions,
  load
};
