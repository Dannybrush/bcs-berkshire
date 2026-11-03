import { error } from '@sveltejs/kit';
import { allMembers } from '$lib/data/committee';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const index = allMembers.findIndex((member) => member.slug === params.slug);
	if (index === -1) error(404, 'Committee member not found');

	return {
		member: allMembers[index],
		previous: allMembers[(index - 1 + allMembers.length) % allMembers.length],
		next: allMembers[(index + 1) % allMembers.length]
	};
};
