<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { site } from '$lib/config/site';
	import { newsletterIssues } from '$lib/data/newsletters';

	function formatDate(iso: string) {
		return new Date(iso).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
	}
</script>

<svelte:head>
	<title>Newsletter — {site.name}</title>
	<meta name="description" content="Read the latest BCS Berkshire branch newsletter, and browse the archive." />
</svelte:head>

<div class="container"><Breadcrumbs trail={[{ label: 'Newsletter' }]} /></div>

<PageHero
	eyebrow="Newsletter"
	title="BCS Berkshire Newsletter"
	lede="Edited by our Newsletter Editor, the branch newsletter rounds up upcoming events, schools outreach, partner news and committee updates a few times a year."
/>

<section class="section container">
	<div class="issues">
		{#each newsletterIssues as issue, i (issue.title)}
			<article class="card issue" class:latest={i === 0}>
				{#if i === 0}<p class="tag">Latest issue</p>{/if}
				<p class="issue-date">{formatDate(issue.date)}</p>
				<h2>{issue.title}</h2>
				<p>{issue.summary}</p>
				{#if issue.url}
					<a class="btn btn-outline" href={issue.url} target="_blank" rel="noreferrer">Read the PDF</a>
				{:else}
					<p class="tbc">Archive link to be added.</p>
				{/if}
			</article>
		{/each}
	</div>
</section>

<section class="section container-narrow cta card">
	<h2>Never miss an issue</h2>
	<p>
		The newsletter goes out to all Berkshire members automatically as part of your BCS
		membership. Not receiving it, or have news to share? Let our editor know.
	</p>
	<a class="btn btn-primary" href={`mailto:${site.contact.stem}`}>Contact the branch</a>
</section>

<style>
	.issues {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		max-width: var(--container-narrow);
	}
	.issue.latest {
		border-color: var(--color-green-700);
	}
	.tag {
		display: inline-block;
		background: var(--color-green-700);
		color: #fff;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 0.25rem 0.7rem;
		border-radius: 999px;
		margin: 0 0 var(--space-3);
		font-weight: 700;
	}
	.issue-date {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-muted);
		margin: 0 0 var(--space-2);
	}
	.issue h2 {
		font-size: var(--fs-h5);
	}
	.tbc {
		font-size: 0.85rem;
		color: var(--color-gold-700);
		font-style: italic;
	}
	.cta {
		text-align: center;
	}
</style>
