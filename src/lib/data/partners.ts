export interface Partner {
	name: string;
	category: 'Academic' | 'Community & industry' | 'Schools & outreach';
	description: string;
	url?: string;
}

export const partners: Partner[] = [
	{
		name: 'University of Reading — Computer Science Society & BCS Student Chapter',
		category: 'Academic',
		description:
			'Our closest academic partnership, connecting students with the branch, our hackathon and volunteering opportunities, and a regular source of committee talent.'
	},
	{
		name: 'Henley Business School, University of Reading',
		category: 'Academic',
		description: 'Host venue for branch debates and panel events on careers, education and technology.'
	},
	{
		name: 'ISC2 Thames Valley Chapter',
		category: 'Community & industry',
		description:
			'Our cybersecurity partner chapter, with whom we co-promote AGMs, briefings and technical talks across the Thames Valley.',
		url: 'https://isc2tvch.co.uk'
	},
	{
		name: 'Thames Valley AI Hub',
		category: 'Community & industry',
		description: 'A regional community for AI practitioners that we cross-promote events with, including panels on applied and responsible AI.',
		url: 'https://www.tvaihub.co.uk'
	},
	{
		name: 'Reading Geek Night',
		category: 'Community & industry',
		description: 'The long-running monthly tech talks night we help support and promote across Reading.'
	},
	{
		name: 'SATRO STEMfest',
		category: 'Schools & outreach',
		description: 'A schools STEM festival we have proudly supported for a decade, inspiring the next generation of engineers and technologists.'
	},
	{
		name: 'TeenTech Surrey',
		category: 'Schools & outreach',
		description: 'Co-sponsored with the BBC, connecting students aged 11–19 with real technology careers and role models.'
	},
	{
		name: 'Bucks Skills Show',
		category: 'Schools & outreach',
		description: 'A regional skills fair where we help showcase computing and IT careers to students and families.'
	}
];
