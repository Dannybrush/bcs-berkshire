export interface CommitteeMember {
	name: string;
	role: string;
	bio: string;
	linkedin?: string;
	initials: string;
}

export const officers: CommitteeMember[] = [
	{
		name: 'Paul Leroy',
		role: 'Chair',
		initials: 'PL',
		bio: 'Trained in electrical engineering and data communications in South Africa before moving into networking. Now works as a Google Cloud trainer across architecture, data engineering and DevOps, and is CTO of an early-stage SaaS company.',
		linkedin: 'https://linkedin.com/in/paulleroyza'
	},
	{
		name: 'Daniel Broomhead',
		role: 'Treasurer & Early Careers Advocate',
		initials: 'DB',
		bio: 'Data and solution architect with a background in cyber security and networking, and an AI lead within his organisation. Formerly president of the University of Reading Computer Science Society and its BCS student chapter.'
	},
	{
		name: 'Andrew Fieldsend',
		role: 'Secretary',
		initials: 'AF',
		bio: 'A BCS member since 1988 and Fellow since 2008, with a career spanning software development, systems support and consultancy. Has served the branch as Secretary and Chair across two decades, and currently works as a technical consultant.',
		linkedin: 'https://www.linkedin.com/in/andrew-fieldsend-baa20b2/'
	},
	{
		name: 'Chris Todd-Davies',
		role: 'STEM Ambassador & Education Liaison Officer',
		initials: 'CT',
		bio: 'A semi-retired senior project manager with experience delivering IT transformation programmes internationally. Leads the branch’s schools outreach, connecting local colleges and charities with volunteers around Reading.'
	},
	{
		name: 'Michael Dzandu',
		role: 'Newsletter Editor',
		initials: 'MD',
		bio: 'A doctoral researcher at Henley Business School, University of Reading, studying how people interact with information systems. Edits the branch newsletter, keeping members up to date with news and events.',
		linkedin: 'https://www.linkedin.com/in/michael-dzandu/'
	},
	{
		name: 'Buki Ogunleye',
		role: 'Inclusion Officer',
		initials: 'BO',
		bio: 'A cloud solution architect manager with two decades in the IT sector, spanning systems engineering, enterprise architecture and people management. Champions inclusion and design thinking across the branch’s programme.'
	}
];

export const generalMembers: CommitteeMember[] = [
	{
		name: 'Ugo Ekpo',
		role: 'General Committee Member',
		initials: 'UE',
		bio: 'A Chartered cyber security professional with over 25 years in the industry, whose interests include applying AI to security problems and cloud computing.'
	},
	{
		name: 'Carlo Petrini',
		role: 'General Committee Member',
		initials: 'CP',
		bio: 'A cyber security specialist with a long-standing interest in quantum cryptography and AI-based anti-ransomware tools, working in customer success management.'
	},
	{
		name: 'Dinesh Chacko',
		role: 'General Committee Member',
		initials: 'DC',
		bio: 'Founder and managing director of a technology consultancy, and a Chartered IT professional specialising in digital strategy, cloud transformation and DevOps automation.'
	},
	{
		name: 'Femi Royale',
		role: 'General Committee Member',
		initials: 'FR',
		bio: 'An investment associate and business analyst with experience across agriculture, finance and education, and a published author on digital transformation in agribusiness.'
	},
	{
		name: 'Christopher Sly',
		role: 'General Committee Member',
		initials: 'CS',
		bio: 'A senior solution architect bridging sales, design and delivery, with recent work on AI-enabled customer experience and intelligent automation for the public sector.'
	},
	{
		name: 'John Fisher',
		role: 'General Committee Member',
		initials: 'JF',
		bio: 'A long-standing contributor to the Berkshire committee, supporting the branch’s day-to-day running.'
	}
];
