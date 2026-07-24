<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { site } from '$lib/config/site';
</script>

<svelte:head>
	<title>Anthony Parker Memorial Prize — {site.name}</title>
	<meta name="description" content="An annual prize awarded by BCS Berkshire in memory of former branch chairman Anthony Parker, recognising outstanding student computing projects." />
</svelte:head>

<div class="container"><Breadcrumbs trail={[{ label: 'Anthony Parker Memorial Prize' }]} /></div>

<PageHero
	eyebrow="In memoriam"
	title="The Anthony Parker Memorial Prize"
	lede="Awarded each year in memory of Anthony Parker, a former chairman of BCS Berkshire, who died unexpectedly on 1 January 2021 at the age of 45."
/>

<section class="section container-narrow">
	<h2>About the prize</h2>
	<p>
		The prize was established to honour Anthony's contribution to the branch and to the wider
		Berkshire technology community. It is awarded alongside the branch's annual student hackathon
		at the University of Reading, recognising an outstanding piece of work from a young person
		taking their first steps in computing.
	</p>
	<p>
		It sits within our broader <strong>Project of the Year</strong> programme, in which students
		aged 11–19 submit personal computing projects — anything from a smartphone app to an indie
		game — for the chance to win prizes and meet professionals from across the local IT industry.
	</p>

	<h2>Why it matters</h2>
	<p>
		Beyond the prize itself, the programme gives young people in Berkshire a genuine route into
		the profession: the chance to have their work seen by working technologists, to build
		confidence presenting it, and to make connections that can shape a future career.
	</p>

	<h2>Get involved</h2>
	<p>
		We welcome judges, mentors and sponsors for both the hackathon and Project of the Year. If
		you're a teacher, parent or student wanting to know more about entering, or a professional
		who'd like to help judge, please get in touch with our STEM and schools team.
	</p>
	<a class="btn btn-primary" href={`mailto:${site.contact.stem}`}>Contact the STEM team</a>
</section>

<section class="section container-narrow tribute">
	<blockquote>
		This prize keeps Anthony's commitment to Berkshire's technology community alive by giving the
		next generation the same encouragement he gave to so many during his time as chairman.
	</blockquote>
</section>

<style>
	.tribute {
		border-top: 1px solid var(--color-border);
	}
	blockquote {
		margin: 0;
		padding: var(--space-6);
		background: var(--color-green-50);
		border-left: 4px solid var(--color-gold-600);
		border-radius: var(--radius-md);
		font-family: var(--font-display);
		font-style: normal;
		font-size: var(--fs-h6);
		font-weight: 600;
		color: var(--color-ink-soft);
		line-height: var(--lh-snug);
	}
</style>
