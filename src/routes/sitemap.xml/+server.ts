import type { RequestHandler } from './$types';
import { footerNav } from '$lib/data/navigation';
import { allMembers } from '$lib/data/committee';
import { site } from '$lib/config/site';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const paths = [
		...footerNav.map((item) => item.href),
		...allMembers.map((member) => `/meet-the-committee/${member.slug}`)
	];
	const urls = paths
		.map(
			(path) => `\t<url>\n\t\t<loc>${site.url}${path}</loc>\n\t</url>`
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
