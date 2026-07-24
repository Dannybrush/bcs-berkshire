<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { site } from '$lib/config/site';

	const focusAreas = [
		{
			title: 'Applied AI briefings',
			body: 'Practical sessions on using AI tools well at work — from prompt craft to evaluating vendor claims — pitched at people who use AI day to day, not just those who build it.'
		},
		{
			title: 'Ethics, governance & impact',
			body: 'Roundtables on the responsible side of AI: bias, transparency, data protection and the real-world impact of automated decisions on people and society.'
		},
		{
			title: 'Sector spotlights',
			body: 'Panels looking at how AI is reshaping specific fields locally — from AI in film and creative industries to its role in healthcare, finance and education.'
		},
		{
			title: 'Regional collaboration',
			body: 'We work with regional partners including the Thames Valley AI Hub to widen the conversation beyond BCS membership and connect people doing similar work nearby.'
		}
	];
</script>

<svelte:head>
	<title>AI Taskforce — {site.name}</title>
	<meta name="description" content="BCS Berkshire's AI Taskforce runs briefings, roundtables and panels on applied and responsible AI for the local tech community." />
</svelte:head>

<div class="container"><Breadcrumbs trail={[{ label: 'AI Taskforce' }]} /></div>

<PageHero
	eyebrow="AI Taskforce"
	tone="deep"
	title="Making sense of AI, together"
	lede="Artificial intelligence now touches almost every role in IT. Our AI Taskforce exists to help Berkshire members understand it, use it responsibly, and separate genuine capability from hype."
/>

<section class="section container">
	<div class="grid-2">
		{#each focusAreas as area (area.title)}
			<div class="card">
				<h2>{area.title}</h2>
				<p>{area.body}</p>
			</div>
		{/each}
	</div>
</section>

<section class="section container-narrow">
	<h2>Recent activity</h2>
	<p>
		The taskforce has recently convened an AI roundtable on ethics and impact, and is preparing a
		panel on how AI is reshaping the film industry — creatively, ethically and commercially.
		Details of upcoming taskforce sessions are published on our <a href="/events">events page</a>
		and in the branch <a href="/newsletter">newsletter</a>.
	</p>
	<h2>Get involved</h2>
	<p>
		Whether you're deep in machine learning research or simply trying to use AI tools sensibly at
		work, the taskforce welcomes members at every level. Get in touch if you'd like to speak at a
		session, suggest a topic, or help organise.
	</p>
	<a class="btn btn-primary" href={`mailto:${site.contact.events}`}>Contact the AI Taskforce</a>
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
	.grid-2 h2 {
		font-size: var(--fs-h5);
	}
</style>
