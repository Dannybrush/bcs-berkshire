import { site } from '$lib/config/site';

export interface ProfileSection {
	heading: string;
	paragraphs: string[];
}

export interface CommitteeMember {
	/** URL segment for the profile page, e.g. /meet-the-committee/jane-doe. */
	slug: string;
	name: string;
	role: string;
	/** One line shown on the business card and in the profile header. */
	summary: string;
	/** Short tags shown on the profile page. */
	expertise: string[];
	/** The full bio, shown on the profile page. */
	sections: ProfileSection[];
	linkedin?: string;
	/** Optional role inbox, shown on the card and profile page. */
	email?: string;
	initials: string;
	/** Optional headshot in static/committee/, e.g. '/committee/jane-doe.jpg'. Falls back to initials. */
	photo?: string;
	/** Optional extra links shown on the profile page. */
	links?: { label: string; url: string }[];
}

export const officers: CommitteeMember[] = [
	{
		slug: 'paul-leroy',
		name: 'Paul Leroy',
		role: 'Chair',
		initials: 'PL',
		photo: '/committee/paul-leroy.jpg',
		linkedin: 'https://linkedin.com/in/paulleroyza',
		email: site.contact.chair,
		summary: 'Google Cloud trainer and CTO of a small SaaS startup.',
		expertise: ['Google Cloud', 'Data engineering', 'Application development', 'DevOps', 'Machine learning', 'Networking'],
		sections: [
			{
				heading: 'Career',
				paragraphs: [
					'Paul works primarily as a Google Cloud trainer across architecture, data engineering, application development, DevOps and machine learning, and is CTO of a small SaaS startup.',
					'He moved from electronic R&D for heavy industry into networking, working in roles from network design and implementation to enterprise sales for a carrier ISP.'
				]
			},
			{
				heading: 'Background',
				paragraphs: [
					'Originally from Johannesburg, South Africa, where he studied heavy current electrical engineering and data communications at the University of the Witwatersrand (graduating in 1998), intending to go into industrial automation. Paul moved to Berkshire in 2018.'
				]
			}
		]
	},
	{
		slug: 'daniel-broomhead',
		name: 'Daniel Broomhead',
		role: 'Treasurer & Early Careers Advocate',
		initials: 'DB',
		photo: '/committee/daniel-broomhead.jpg',
		linkedin: 'https://www.linkedin.com/in/daniel-broomhead/',
		email: site.contact.treasurer,
		summary: 'Works in data and solution architecture, with a passion for cyber security and networking.',
		expertise: ['Data architecture', 'Solution architecture', 'Artificial intelligence', 'Cyber security', 'Networking'],
		sections: [
			{
				heading: 'Career',
				paragraphs: [
					'A jack-of-all-trades in computer science with a passion for cyber security and networking, whose day job centres on data and solution architecture.',
					'He is the Artificial Intelligence Lead for his company’s UK division and Lead Developer in its Emerging Technologies team, always eager to join new projects and develop his skills in any aspect of IT.'
				]
			},
			{
				heading: 'With BCS',
				paragraphs: [
					'Joined BCS at university, quickly becoming President of the University of Reading Computer Science Society and its BCS Student Chapter, and has also served on other committees, including the Open Source Specialist Group (OSSG). Now Treasurer of the Berkshire Branch.'
				]
			}
		]
	},
	{
		slug: 'andrew-fieldsend',
		name: 'Andrew Fieldsend',
		role: 'Secretary',
		initials: 'AF',
		photo: '/committee/andrew-fieldsend.jpg',
		linkedin: 'https://www.linkedin.com/in/andrew-fieldsend-baa20b2/',
		email: site.contact.secretary,
		summary: 'Technical Consultant at DXC Technologies and a BCS Fellow, on the branch committee since 2002.',
		expertise: ['Software development', 'System operations', 'Project management', 'Consultancy', 'Standards'],
		sections: [
			{
				heading: 'With BCS',
				paragraphs: [
					'Encouraged to join BCS by a first employer, Andrew became a member in 1988, a Chartered Engineer and European Engineer in 1993, and a Fellow in 2008.',
					'After some years as an inactive member due to work commitments, Andrew joined the Berkshire committee in 2002, becoming Secretary in 2003, Chair from 2004 to 2010, and Secretary again from 2015 onwards.'
				]
			},
			{
				heading: 'Career',
				paragraphs: [
					'Andrew’s career has spanned software development, system operations and support, project management and a period as a self-employed consultant, and they are now a Technical Consultant for DXC Technologies, based in Aldershot.'
				]
			},
			{
				heading: 'Education and memberships',
				paragraphs: [
					'Andrew graduated in Computational Science from the University of Leeds and gained a postgraduate diploma in computing for commerce and industry from the Open University.',
					'Outside BCS, Andrew is a Fellow of the IAP and a member of the ACM and IEEE, where he is active in the Standards Association.'
				]
			}
		]
	},
	{
		slug: 'chris-todd-davies',
		name: 'Chris Todd-Davies',
		role: 'STEM Ambassador & Education Liaison Officer',
		initials: 'CT',
		photo: '/committee/chris-todd-davies.jpg',
		email: site.contact.stem,
		summary: 'Semi-retired Senior Project Manager, building volunteer links between local charities and colleges.',
		expertise: ['Project management', 'IT transformation', 'STEM outreach', 'Volunteering'],
		sections: [
			{
				heading: 'With BCS',
				paragraphs: [
					'Chris now focuses on BCS events such as TeenTech and on building volunteer links between local charities and colleges in and around Reading, working with Tony Levene, who covers the Wokingham area. Chris is also a regular at SocialTech meets and Reading Geek Night.'
				]
			},
			{
				heading: 'Career',
				paragraphs: [
					'Now semi-retired, Chris was previously a Senior Project Manager with a German IT multinational, leading projects to transition and transform IT infrastructure and systems following acquisitions or outsourcing, and spent the last ten years working on IT change projects across the UK, US and Europe.'
				]
			},
			{
				heading: 'Background',
				paragraphs: [
					'Originally from New Zealand, Chris grew up and was educated in Queensland, Australia, before moving to the UK in the 1970s. Chris has lived in Reading since 2009.'
				]
			}
		]
	},
	{
		slug: 'michael-dzandu',
		name: 'Michael Dzandu',
		role: 'Newsletter Editor',
		initials: 'MD',
		linkedin: 'https://www.linkedin.com/in/michael-dzandu/',
		summary: 'Doctoral Researcher at Henley Business School, researching how people use stored information to make decisions.',
		expertise: ['Human-technology interaction', 'Knowledge management', 'Analytics', 'Information systems', 'Records management'],
		sections: [
			{
				heading: 'Research',
				paragraphs: [
					'Michael holds a BSc in Computer Science and Psychology and an MPhil in Information Studies (librarianship) from the University of Ghana, and is a Doctoral Researcher at the Informatics Research Centre, Henley Business School, University of Reading.',
					'Michael’s research aims to develop a framework of human information interface for knowledge activities, supporting context-specific decision making on stored information in information systems.'
				]
			},
			{
				heading: 'Career',
				paragraphs: [
					'Previously an Assistant Lecturer at the University of Ghana teaching IT courses, Michael founded and was Senior Partner of Micky Informatics Consult, providing IT sales and services, information consultancy, software development and research consultancy, and delivered IT and records management training for employees in Ghanaian industries.'
				]
			},
			{
				heading: 'With BCS',
				paragraphs: [
					'A BCS member since 2015, Michael volunteers as Newsletter Editor, part of the communications team keeping Berkshire members informed.'
				]
			},
			{
				heading: 'Interests',
				paragraphs: [
					'Interests include human-technology interaction, knowledge management and analytics, plus football, Reading Athletics Club and Parkrun.'
				]
			}
		]
	},
	{
		slug: 'zeenat-madhani',
		name: 'Zeenat Madhani',
		role: 'Inclusion Officer',
		initials: 'ZM',
		photo: '/committee/zeenat-madhani.jpg',
		summary: 'Senior Business Analyst, committed to increasing the representation of women in technology and leadership.',
		expertise: ['Business analysis', 'Business transformation', 'Process improvement', 'Stakeholder engagement', 'Mentoring'],
		sections: [
			{
				heading: 'Career',
				paragraphs: [
					'An experienced Senior Business Analyst with a strong track record of delivering business transformation, process improvement and technology-enabled change across diverse sectors, specialising in stakeholder engagement, requirements analysis and turning complex business needs into practical solutions.',
					'Holds an MBA in Finance and a Master’s degree in Commerce (Accountancy).'
				]
			},
			{
				heading: 'Inclusion and mentoring',
				paragraphs: [
					'Serves on the BCS Women Committee and the ACM-W Europe Communications Committee, is involved with Women in Localization UK, and takes part in UN Women UK initiatives.',
					'A Business Analysis mentor to aspiring and early-career professionals, committed to empowering women, promoting inclusive opportunities and increasing the representation of women in technology and leadership.'
				]
			}
		]
	}
];

export const generalMembers: CommitteeMember[] = [
	{
		slug: 'ugo-ekpo',
		name: 'Ugo Ekpo',
		role: 'General Committee Member',
		initials: 'UE',
		summary: 'Cyber security professional and author with over 25 years in the IT industry.',
		expertise: ['Cyber security', 'Cloud computing', 'AI and machine learning', 'Test management', 'Quality assurance'],
		sections: [
			{
				heading: 'Career',
				paragraphs: [
					'A cyber security professional with over 25 years in the IT industry, holding a BSc (Hons) in Computer Science, a PGDip in Software Engineering and a Master’s degree in Cyber Security, and a Chartered Member of BCS and entrepreneur.',
					'Ugo’s career has included management roles in testing, with extensive experience in billing, quality assurance and systems configuration, delivering multi-million pound programmes for blue-chip companies such as BT, Fujitsu Services and O2 UK.'
				]
			},
			{
				heading: 'Research',
				paragraphs: [
					'Interested in projects that apply AI and machine learning to cyber security and cloud computing problems, and involved in research developing cyber security solutions for African institutions and businesses.'
				]
			},
			{
				heading: 'Publications',
				paragraphs: [
					'Author of Introduction to Cyber Security: Fundamentals (hard copy and audio book), Digital Evolution: Security & facts about cloud computing, IOT and 5G technologies, and Test Management for the 21st Century.'
				]
			},
			{
				heading: 'Outside work',
				paragraphs: [
					'Supports charities including the British Heart Foundation, British Polio Fellowship and Alzheimer’s Society, and is involved in humanitarian projects in Nigeria. Hobbies include meeting new people, music, being creative and reading.'
				]
			}
		],
		links: [
			{ label: 'Introduction to Cyber Security (video)', url: 'https://youtu.be/BRL9tYMK5uk' },
			{ label: 'Digital Evolution (video)', url: 'https://youtu.be/Dm3AXXkjD1U' }
		]
	},
	{
		slug: 'femi-royale',
		name: 'Femi Royale',
		role: 'General Committee Member',
		initials: 'FR',
		summary: 'Investment associate and business analyst, and a published author on digital transformation in agribusiness.',
		expertise: ['Investment', 'Business analysis', 'Digital transformation', 'Agribusiness'],
		sections: [
			{
				heading: 'Career',
				paragraphs: [
					'An investment associate and business analyst with experience across agriculture, finance and education, and a published author on digital transformation in agribusiness.'
				]
			}
		]
	},
	{
		slug: 'neeraj-kapoor',
		name: 'Neeraj Kapoor',
		role: 'General Committee Member',
		initials: 'NK',
		photo: '/committee/neeraj-kapoor.jpg',
		summary: 'Technology and digital transformation professional, turning emerging trends into practical strategies.',
		expertise: ['Digital transformation', 'Cloud computing', 'Artificial intelligence', 'IoT', 'Industry 5.0'],
		sections: [
			{
				heading: 'Career',
				paragraphs: [
					'A technology and digital transformation professional and a member of both BCS and the Project Management Institute (PMI), helping enterprise customers in construction, travel and logistics navigate complex technology adoption and turning emerging trends into practical strategies that deliver measurable business value.',
					'His expertise spans cloud computing, artificial intelligence, IoT and Industry 5.0, combining technical depth with strategic leadership, business development and partnership building.'
				]
			},
			{
				heading: 'Career highlights',
				paragraphs: [
					'Career highlights include growing a digital portfolio sevenfold to £10 million at Tech Mahindra and securing £15 million in total contract value at Mantrac Caterpillar Digital Group UK.'
				]
			},
			{
				heading: 'Community',
				paragraphs: [
					'Keen to engage the wider technology community and contribute to discussions on digital innovation, enterprise architecture and technology-led business transformation.'
				]
			}
		]
	},
	{
		slug: 'claire-thomas',
		name: 'Claire Thomas',
		role: 'General Committee Member',
		initials: 'CT',
		summary: 'Works in governance, compliance and data protection, with a career spanning retail, FMCG and fintech.',
		expertise: ['Governance', 'Compliance', 'Data protection', 'AI governance', 'Cyber risk'],
		sections: [
			{
				heading: 'Career',
				paragraphs: [
					'Works in governance, compliance and data protection, with a career spanning retail, FMCG and fintech. Originally studied Law with French, and has since led UK GDPR programmes, supported digital and marketing teams, and helped businesses navigate fast-moving technology and regulatory change, building practical, people-focused ways of working.'
				]
			},
			{
				heading: 'Interests',
				paragraphs: [
					'Particularly interested in where technology, ethics and everyday human behaviour overlap, and enjoys making topics like AI governance, cyber risk and privacy accessible to those less familiar with them.'
				]
			},
			{
				heading: 'With BCS',
				paragraphs: [
					'Joined the Berkshire Branch to support accessible digital skills, responsible tech adoption and community learning across the region.'
				]
			}
		]
	}
];

export const allMembers: CommitteeMember[] = [...officers, ...generalMembers];
