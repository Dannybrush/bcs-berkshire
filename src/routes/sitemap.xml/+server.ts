import type { RequestHandler } from './$types';
import { footerNav } from '$lib/data/navigation';
import { site } from '$lib/config/site';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const urls = footerNav
		.map(
			(item) => `\t<url>\n\t\t<loc>${site.url}${item.href}</loc>\n\t</url>`
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
