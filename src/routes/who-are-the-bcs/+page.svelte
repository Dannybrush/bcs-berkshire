<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { site } from '$lib/config/site';

	const subpages = [
		{
			href: '/who-are-the-bcs/registrations-and-memberships',
			title: 'Registrations & Memberships',
			body: 'What AMBCS, MBCS, FBCS and Chartered status actually mean, and which grade fits where you are in your career.'
		},
		{
			href: '/who-are-the-bcs/branches',
			title: 'BCS Branches',
			body: 'How the UK-wide network of regional branches and specialist groups fits together — and where Berkshire sits within it.'
		},
		{
			href: '/who-are-the-bcs/who-is-bcs-berkshire',
			title: 'Who is BCS Berkshire?',
			body: 'Our own branch, in more detail — history, activities and how we serve the local IT community.'
		}
	];
</script>

<svelte:head>
	<title>Who are the BCS — {site.name}</title>
	<meta name="description" content="An introduction to BCS, The Chartered Institute for IT, and how the Berkshire branch fits within it." />
</svelte:head>

<div class="container"><Breadcrumbs trail={[{ label: 'Who are the BCS' }]} /></div>

<PageHero
	eyebrow="Who are the BCS"
	title="BCS, The Chartered Institute for IT"
	lede="BCS is the UK's professional body for IT, incorporated by Royal Charter and dedicated to making IT good for society. It sets standards, awards professional recognition, and connects a global community of members through branches and specialist groups — of which Berkshire is one."
/>

<section class="section container">
	<div class="grid-3">
		{#each subpages as page (page.href)}
			<a class="card link-card" href={page.href}>
				<h2>{page.title}</h2>
				<p>{page.body}</p>
				<span class="read-more">Read more →</span>
			</a>
		{/each}
	</div>
</section>

<section class="section container-narrow">
	<h2>Our mission, locally</h2>
	<p>
		Nationally, BCS champions the global IT profession, sets professional standards, and works to
		make technology good for society. In Berkshire, we bring that mission to street level: free
		talks and networking for members, hands-on schools outreach, and support for anyone taking
		their next step in a technology career — whatever grade of membership or registration that
		involves.
	</p>
	<a class="btn btn-outline" href={site.bcs.url} target="_blank" rel="noreferrer">Visit bcs.org</a>
</section>

<style>
	.grid-3 {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-5);
	}
	@media (max-width: 900px) {
		.grid-3 {
			grid-template-columns: 1fr;
		}
	}
	.link-card {
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		transition: border-color 0.15s var(--ease-standard), transform 0.15s var(--ease-standard);
	}
	.link-card:hover {
		border-color: var(--color-green-700);
		transform: translateY(-2px);
	}
	.link-card h2 {
		font-size: var(--fs-h5);
	}
	.read-more {
		margin-top: auto;
		padding-top: var(--space-3);
		color: var(--color-green-700);
		font-weight: 600;
		font-size: 0.9rem;
	}
</style>
