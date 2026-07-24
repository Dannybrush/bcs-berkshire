import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { site } from '$lib/config/site';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const load: PageServerLoad = async () => {
	return {};
};

/**
 * NOTE FOR DEPLOYMENT
 * -----------------------------------------------------------------
 * This action is wired up but not yet live: it needs a RESEND_API_KEY
 * environment variable and a confirmed destination inbox
 * (currently site.contact.general, a placeholder — see
 * src/lib/config/site.ts) before it will actually send email.
 * Until then it will safely fail with a friendly message rather than
 * silently dropping enquiries.
 * -----------------------------------------------------------------
 */
export const actions: Actions = {
	default: async ({ request, getClientAddress }) => {
		const data = await request.formData();

		// Honeypot — real users never fill this in.
		const honeypot = String(data.get('company') ?? '');
		if (honeypot.trim().length > 0) {
			// Pretend success to the bot, do nothing.
			return { success: true };
		}

		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const topic = String(data.get('topic') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		const errors: Record<string, string> = {};
		if (name.length < 2) errors.name = 'Please enter your name.';
		if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
		if (message.length < 10) errors.message = 'Please add a little more detail (10 characters minimum).';
		if (message.length > 4000) errors.message = 'Please keep your message under 4,000 characters.';

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values: { name, email, topic, message } });
		}

		const apiKey = env.RESEND_API_KEY;
		if (!apiKey) {
			// Fails loudly to the operator (server logs) but gently to the visitor.
			console.error('RESEND_API_KEY is not configured — contact form message was not sent.');
			return fail(503, {
				errors: {
					form: 'Sorry — the contact form is not fully set up yet. Please email us directly instead.'
				} as Record<string, string>,
				values: { name, email, topic, message }
			});
		}

		try {
			const res = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${apiKey}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					from: `BCS Berkshire website <no-reply@${new URL(site.url).hostname}>`,
					to: site.contact.general,
					reply_to: email,
					subject: `Website enquiry: ${topic || 'General'}`,
					text: `From: ${name} <${email}>\nIP: ${getClientAddress()}\n\n${message}`
				})
			});

			if (!res.ok) {
				const body = await res.text();
				console.error('Resend API error:', res.status, body);
				return fail(502, {
					errors: {
						form: 'Something went wrong sending your message. Please try again or email us directly.'
					} as Record<string, string>,
					values: { name, email, topic, message }
				});
			}
		} catch (err) {
			console.error('Contact form send failed:', err);
			return fail(502, {
				errors: {
					form: 'Something went wrong sending your message. Please try again or email us directly.'
				} as Record<string, string>,
				values: { name, email, topic, message }
			});
		}

		return { success: true };
	}
};
