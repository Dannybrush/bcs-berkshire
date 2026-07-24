<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CommitteeCard from '$lib/components/CommitteeCard.svelte';
	import { site } from '$lib/config/site';
	import { officers, generalMembers } from '$lib/data/committee';
</script>

<svelte:head>
	<title>Meet the Committee — {site.name}</title>
	<meta name="description" content="Meet the volunteers who run BCS Berkshire, elected each year at the branch AGM." />
</svelte:head>

<div class="container"><Breadcrumbs trail={[{ label: 'Meet the Committee' }]} /></div>

<PageHero
	eyebrow="Meet the committee"
	title="Run by volunteers, elected by members"
	lede="The Berkshire branch is run by a committee elected at the branch AGM each September. Committee members with specialist skills are also co-opted from time to time."
/>

<section class="section container">
	<h2>Officers</h2>
	<div class="grid-2">
		{#each officers as member (member.name)}
			<CommitteeCard {member} />
		{/each}
	</div>
</section>

<section class="section container">
	<h2>General committee members</h2>
	<div class="grid-2">
		{#each generalMembers as member (member.name)}
			<CommitteeCard {member} />
		{/each}
	</div>
</section>

<section class="section container-narrow card join-card">
	<h2>Join the committee</h2>
	<p>
		Meetings run from 7 to 9pm on the first Tuesday of every month, online or in person when we
		can. They're open to all members — come along to learn more about what we do, with no
		obligation to join. Ask our secretary for joining instructions.
	</p>
	<a class="btn btn-primary" href={`mailto:${site.contact.secretary}`}>Email the secretary</a>
</section>

<style>
	.grid-2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-5);
	}
	@media (max-width: 800px) {
		.grid-2 {
			grid-template-columns: 1fr;
		}
	}
	.join-card {
		text-align: center;
	}
</style>
