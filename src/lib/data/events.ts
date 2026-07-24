export interface BranchEvent {
	slug: string;
	title: string;
	date: string; // ISO date for sorting
	displayDate: string;
	time: string;
	location: string;
	format: 'In person' | 'Online' | 'Hybrid';
	summary: string;
	registerUrl?: string;
	isPlaceholder?: boolean;
}

export interface RecurringFixture {
	title: string;
	cadence: string;
	time: string;
	description: string;
}

/**
 * Recurring, dependable fixtures — these don't need frequent edits.
 */
export const recurringFixtures: RecurringFixture[] = [
	{
		title: 'Branch committee meeting',
		cadence: 'First Tuesday of every month',
		time: '7:00pm – 9:00pm',
		description:
			'Open to all members online or in person. Contact the secretary for joining instructions — there is no obligation to join the committee.'
	},
	{
		title: 'Reading Geek Night',
		cadence: 'Second Tuesday of every month',
		time: 'From 7:00pm, talks from 8:00pm',
		description:
			'Short talks on science, tech, design and geekery, run in partnership with the wider Reading tech community, with plenty of time for networking.'
	}
];

/**
 * NOTE FOR THE COMMITTEE: replace/extend this list each time events.berkshire@bcs.org.uk
 * confirms a new date. The two dated items below are drawn from the branch's own
 * February 2026 newsletter; everything marked isPlaceholder should be reviewed
 * before the site goes live.
 */
export const upcomingEvents: BranchEvent[] = [
	{
		slug: 'reading-geek-night-february',
		title: 'Reading Geek Night',
		date: '2026-02-10',
		displayDate: 'Tuesday 10 February 2026',
		time: '7:00pm, till late',
		location: 'Reading (venue confirmed nearer the time)',
		format: 'In person',
		summary:
			'Our regular evening of short talks on science, technology, design and geekery, with plenty of time to chat over drinks. Free and open to all.',
		registerUrl: 'https://forms.office.com/e/jRPc8RqFfV'
	},
	{
		slug: 'satro-stemfest-volunteers',
		title: 'SATRO STEMfest — call for volunteers',
		date: '2026-03-23',
		displayDate: 'Monday 23 March 2026',
		time: 'Daytime — school hours',
		location: 'ACS International School, Cobham, Surrey',
		format: 'In person',
		summary:
			"Marking ten years of BCS Berkshire's support for SATRO STEMfest, inspiring the next generation of engineers and technologists. Get in touch with our STEM Ambassador if you can help on the day."
	},
	{
		slug: 'universities-apprenticeships-debate',
		title: 'Universities, Professional Training and Apprenticeships: The Future Path to Success',
		date: '2026-04-01',
		displayDate: 'Date to be confirmed',
		time: 'Evening',
		location: 'Henley Business School, University of Reading, Whiteknights Campus, Reading RG6 6UR',
		format: 'In person',
		summary:
			'A panel debate on the routes into a technology career as apprenticeships gain ground alongside traditional degrees — bringing together voices from industry, academia and training providers.',
		isPlaceholder: true
	}
];
