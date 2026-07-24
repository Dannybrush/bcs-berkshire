export interface NewsletterIssue {
	title: string;
	date: string;
	url?: string;
	summary: string;
}

/**
 * NOTE FOR THE EDITOR: add each new issue to the top of this list as it's published.
 * The February 2026 issue is real and linked; earlier entries are placeholders
 * to be replaced with the branch's actual archive.
 */
export const newsletterIssues: NewsletterIssue[] = [
	{
		title: 'BCS Berkshire Branch Newsletter — February 2026',
		date: '2026-02-01',
		url: 'https://www.bcs.org/media/bsaiudof/berkshire-branch-newsletter-feb-2026.pdf',
		summary:
			'Reading Geek Night dates, a call for STEMfest volunteers, an AI-in-film panel, and a debate on universities, apprenticeships and the future path to an IT career.'
	},
	{
		title: 'BCS Berkshire Branch Newsletter — Autumn 2025',
		date: '2025-10-01',
		summary:
			'Round-up from the branch AGM, committee elections and a preview of the winter events programme. (Placeholder — replace with the confirmed archive link.)'
	},
	{
		title: 'BCS Berkshire Branch Newsletter — Summer 2025',
		date: '2025-07-01',
		summary:
			'Highlights from the Great Debate on engineering and technology skills, plus schools outreach updates. (Placeholder — replace with the confirmed archive link.)'
	}
];
