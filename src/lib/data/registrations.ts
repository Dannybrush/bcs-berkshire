export interface MembershipGrade {
	code: string;
	name: string;
	audience: string;
	description: string;
}

export const membershipGrades: MembershipGrade[] = [
	{
		code: 'Affiliate',
		name: 'Affiliate membership',
		audience: 'Anyone with an interest in IT, without a professional connection to it',
		description:
			'The most open route into BCS, for people who care about the impact of technology but don’t work in the sector day to day.'
	},
	{
		code: 'Student',
		name: 'Student membership',
		audience: 'Students on an IT-related course or Digital T-level',
		description:
			'Free or low-cost membership for those studying computing, giving early access to the professional community and events.'
	},
	{
		code: 'AMBCS',
		name: 'Associate membership',
		audience: 'IT apprentices, trainees, or those on a Skills Bootcamp',
		description:
			'The first step on the professional ladder — suited to around a year of IT experience and/or relevant entry-level qualifications.'
	},
	{
		code: 'MBCS',
		name: 'Professional membership',
		audience: 'Anyone working or teaching in computing and technology',
		description:
			'BCS’s core professional grade. Members practising, building, maintaining or teaching IT can typically apply directly, backed by a CV or LinkedIn profile.'
	},
	{
		code: 'FBCS',
		name: 'Fellowship',
		audience: 'Established leaders and role models in the IT field',
		description:
			'The most senior BCS grade, recognising significant, sustained contribution and seniority within the profession.'
	}
];

export interface Registration {
	code: string;
	name: string;
	description: string;
}

export const registrations: Registration[] = [
	{
		code: 'CITP',
		name: 'Chartered IT Professional',
		description:
			'BCS’s benchmark of IT excellence. Professional members holding CITP registration qualify as Chartered members of BCS, recognising broad, senior competence across the profession.'
	},
	{
		code: 'CEng',
		name: 'Chartered Engineer',
		description:
			'Awarded by BCS under licence from the Engineering Council to members whose work centres on engineering practice within IT and software.'
	},
	{
		code: 'IEng',
		name: 'Incorporated Engineer',
		description:
			'A professional engineering registration for members applying established techniques and technologies, awarded by BCS under licence from the Engineering Council.'
	},
	{
		code: 'RITTech',
		name: 'Registered IT Technician',
		description:
			'Recognises practical, hands-on technical competence — often the first formal professional registration on the way to Chartered status.'
	}
];
