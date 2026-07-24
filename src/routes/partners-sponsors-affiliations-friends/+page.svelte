<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { site } from '$lib/config/site';
	import { partners, type Partner } from '$lib/data/partners';

	const categories: Partner['category'][] = ['Academic', 'Community & industry', 'Schools & outreach'];

	function byCategory(cat: Partner['category']) {
		return partners.filter((p) => p.category === cat);
	}
</script>

<svelte:head>
	<title>Partners, Sponsors, Affiliations & Friends — {site.name}</title>
	<meta name="description" content="The academic, industry and schools partners who help BCS Berkshire run events, outreach and student programmes." />
</svelte:head>

<div class="container"><Breadcrumbs trail={[{ label: 'Partners, Sponsors, Affiliations & Friends' }]} /></div>

<PageHero
	eyebrow="Partners"
	title="Partners, Sponsors, Affiliations & Friends"
	lede="None of what we do would happen without the organisations who host us, co-promote events, and open doors for students across Berkshire."
/>

{#each categories as cat (cat)}
	<section class="section container">
		<h2>{cat}</h2>
		<div class="grid-3">
			{#each byCategory(cat) as partner (partner.name)}
				<div class="card partner-card">
					<h3>{partner.name}</h3>
					<p>{partner.description}</p>
					{#if partner.url}
						<a href={partner.url} target="_blank" rel="noreferrer">Visit site →</a>
					{/if}
				</div>
			{/each}
		</div>
	</section>
{/each}

<section class="section container-narrow cta card">
	<h2>Interested in partnering with us?</h2>
	<p>
		We work with universities, employers, schools and other technology communities across
		Berkshire. If your organisation would like to sponsor an event, host a talk, or support our
		schools programme, we'd love to hear from you.
	</p>
	<a class="btn btn-primary" href={`mailto:${site.contact.chair}`}>Talk to the branch chair</a>
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
	.partner-card h3 {
		font-size: var(--fs-h6);
		margin-bottom: var(--space-2);
	}
	.partner-card a {
		font-weight: 600;
		font-size: 0.9rem;
	}
	.cta {
		text-align: center;
	}
</style>
