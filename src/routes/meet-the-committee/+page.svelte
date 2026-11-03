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

<section class="section section--tight container">
	<h2>Officers</h2>
	<div class="card-grid">
		{#each officers as member (member.slug)}
			<CommitteeCard {member} />
		{/each}
	</div>
</section>

<section class="section section--tight container">
	<h2>General committee members</h2>
	<div class="card-grid">
		{#each generalMembers as member (member.slug)}
			<CommitteeCard {member} />
		{/each}
	</div>
</section>

<section class="section section--tight container">
	<div class="card join-card">
		<h2>Join the committee</h2>
		<p>
			Meetings run from 7 to 9pm on the first Tuesday of every month, online or in person when we
			can. They're open to all members — come along to learn more about what we do, with no
			obligation to join. Ask our secretary for joining instructions.
		</p>
		<a class="btn btn-primary" href={`mailto:${site.contact.secretary}`}>Email the secretary</a>
	</div>
</section>

<style>
	h2 {
		font-size: var(--fs-h4);
		margin-bottom: var(--space-5);
	}
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
		gap: var(--space-5);
	}
	.join-card {
		text-align: center;
		background: var(--color-green-50);
	}
	.join-card p {
		max-width: 62ch;
		margin-inline: auto;
	}
</style>
