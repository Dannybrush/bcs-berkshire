<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { site } from '$lib/config/site';

	const activities = [
		{
			title: 'Monthly talks & networking',
			body: 'A regular programme of speakers and panels on technology, careers and ethics, plus the informal Reading Geek Night every second Tuesday.'
		},
		{
			title: 'Schools & outreach',
			body: 'Hands-on support for schools and colleges across Berkshire through STEMfest, TeenTech Surrey and the Bucks Skills Show, connecting students with real IT careers.'
		},
		{
			title: 'Student & early careers support',
			body: 'A close relationship with the University of Reading Computer Science Society and BCS student chapter, plus an annual hackathon and the Anthony Parker Memorial Prize.'
		},
		{
			title: 'AI Taskforce',
			body: 'Briefings, roundtables and panels helping members use AI well and think seriously about its ethics and impact.'
		}
	];
</script>

<svelte:head>
	<title>Who is BCS Berkshire? — {site.name}</title>
	<meta name="description" content="The story of BCS Berkshire — a volunteer-run branch of over 2,500 IT professionals and enthusiasts." />
</svelte:head>

<div class="container">
	<Breadcrumbs
		trail={[{ label: 'Who are the BCS', href: '/who-are-the-bcs' }, { label: 'Who is BCS Berkshire?' }]}
	/>
</div>

<PageHero
	eyebrow="Who are the BCS"
	title="Who is BCS Berkshire?"
	lede="We're a community of IT professionals and enthusiasts based in and around Berkshire, committed to working with organisations, schools and colleges to raise the profile of computing and IT in the local area — for children, students and adults alike."
/>

<section class="section container stats-row">
	<div class="stat card">
		<p class="stat-num">{site.memberCount}</p>
		<p class="stat-label">Members across the county</p>
	</div>
	<div class="stat card">
		<p class="stat-num">Monthly</p>
		<p class="stat-label">Committee meetings, open to all</p>
	</div>
	<div class="stat card">
		<p class="stat-num">1957</p>
		<p class="stat-label">Founding year of BCS nationally</p>
	</div>
</section>

<section class="section container">
	<h2>What we do</h2>
	<div class="grid-2">
		{#each activities as activity (activity.title)}
			<div class="card">
				<h3>{activity.title}</h3>
				<p>{activity.body}</p>
			</div>
		{/each}
	</div>
</section>

<section class="section container-narrow">
	<h2>Run by volunteers</h2>
	<p>
		Like every BCS branch, Berkshire is run entirely by members giving their own time — elected
		each September at our AGM, with specialist skills co-opted onto the committee as needed. Read
		more about the people involved on our <a href="/meet-the-committee">committee page</a>, or
		come along to a meeting to see how it works.
	</p>
	<a class="btn btn-primary" href="/meet-the-committee">Meet the committee</a>
</section>

<style>
	.stats-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-5);
	}
	@media (max-width: 800px) {
		.stats-row {
			grid-template-columns: 1fr;
		}
	}
	.stat {
		text-align: center;
	}
	.stat-num {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 2rem;
		color: var(--color-green-700);
		margin: 0 0 4px;
	}
	.stat-label {
		margin: 0;
		color: var(--color-muted);
		font-size: 0.9rem;
	}
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
	.grid-2 h3 {
		font-size: var(--fs-h6);
	}
</style>
