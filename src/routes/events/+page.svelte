<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import { site } from '$lib/config/site';
	import { upcomingEvents, recurringFixtures } from '$lib/data/events';
</script>

<svelte:head>
	<title>Events — {site.name}</title>
	<meta name="description" content="Upcoming talks, panels, socials and volunteering dates from BCS Berkshire." />
</svelte:head>

<div class="container"><Breadcrumbs trail={[{ label: 'Events' }]} /></div>

<PageHero
	eyebrow="Events"
	title="Talks, panels and nights out for Berkshire's tech community"
	lede="Most of our events are free and open to everyone — you don't need to be a BCS member to come along."
/>

<section class="section container">
	<h2>Regular fixtures</h2>
	<div class="grid-2">
		{#each recurringFixtures as fixture (fixture.title)}
			<div class="card fixture-card">
				<p class="cadence">{fixture.cadence}</p>
				<h3>{fixture.title}</h3>
				<p class="time">{fixture.time}</p>
				<p>{fixture.description}</p>
			</div>
		{/each}
	</div>
</section>

<section class="section container">
	<h2>Coming up</h2>
	<div class="grid-3">
		{#each upcomingEvents as event (event.slug)}
			<EventCard {event} />
		{/each}
	</div>
</section>

<section class="section container-narrow suggest-card card">
	<h2>Have an idea for a talk?</h2>
	<p>
		We're always looking for speakers and topics — from deep technical sessions to career and
		soft-skills talks. Tell us what you'd like to see, or offer to speak yourself.
	</p>
	<a class="btn btn-primary" href={`mailto:${site.contact.events}`}>Email the events team</a>
</section>

<style>
	.grid-2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-5);
	}
	.grid-3 {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-5);
	}
	@media (max-width: 900px) {
		.grid-2,
		.grid-3 {
			grid-template-columns: 1fr;
		}
	}
	.fixture-card .cadence {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-green-600);
		margin: 0 0 var(--space-2);
	}
	.fixture-card h3 {
		font-size: var(--fs-h5);
		margin-bottom: 2px;
	}
	.fixture-card .time {
		font-weight: 600;
		color: var(--color-gold-700);
		margin-bottom: var(--space-3);
	}
	.suggest-card {
		text-align: center;
	}
</style>
