<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { site } from '$lib/config/site';
	import { allBranches, nearbyBranches, featuredSpecialistGroups } from '$lib/data/branches';
</script>

<svelte:head>
	<title>BCS Branches — {site.name}</title>
	<meta name="description" content="How BCS's UK-wide network of regional branches and specialist groups fits together, and where Berkshire sits within it." />
</svelte:head>

<div class="container">
	<Breadcrumbs trail={[{ label: 'Who are the BCS', href: '/who-are-the-bcs' }, { label: 'BCS Branches' }]} />
</div>

<PageHero
	eyebrow="Who are the BCS"
	title="Regional and specialist communities"
	lede="Beyond national membership, BCS members can get involved locally through regional branches, and by subject through specialist groups. Most members belong to both."
/>

<section class="section container two-col">
	<div>
		<h2>Regional branches</h2>
		<p>
			BCS's network spans almost fifty branches across the UK, from Aberdeen to Belfast and
			Sussex to the South West — each run by local volunteers, holding its own programme of
			talks, socials and outreach. Berkshire is one of them.
		</p>
		<h3>Neighbouring branches</h3>
		<ul class="chip-list">
			{#each nearbyBranches as branch (branch)}
				<li>{branch}</li>
			{/each}
		</ul>
		<details class="all-branches">
			<summary>See all UK branches</summary>
			<ul class="chip-list">
				{#each allBranches as branch (branch)}
					<li class:current={branch === 'Berkshire'}>{branch}</li>
				{/each}
			</ul>
		</details>
	</div>

	<div>
		<h2>Specialist groups</h2>
		<p>
			Alongside regional branches, over fifty specialist groups let members go deep on a subject —
			from Artificial Intelligence to Fortran. A few with particular relevance to our members:
		</p>
		<div class="sg-list">
			{#each featuredSpecialistGroups as sg (sg.name)}
				<div class="card sg-card">
					<h3>{sg.name}</h3>
					<p>{sg.blurb}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section container-narrow cta card">
	<h2>Regional or specialist — why not both?</h2>
	<p>
		Most active BCS members belong to their local branch for networking and community, and to one
		or more specialist groups for depth in their field. Membership of both is normally included in
		your BCS subscription.
	</p>
	<a class="btn btn-outline" href={`${site.bcs.url}/membership-and-registrations/member-communities/`} target="_blank" rel="noreferrer">
		Browse all member communities on bcs.org
	</a>
</section>

<style>
	.two-col {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-8);
	}
	@media (max-width: 900px) {
		.two-col {
			grid-template-columns: 1fr;
		}
	}
	.chip-list {
		list-style: none;
		padding: 0;
		margin: var(--space-3) 0 var(--space-5);
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}
	.chip-list li {
		background: var(--color-green-50);
		border: 1px solid var(--color-border);
		border-radius: 999px;
		padding: 0.35rem 0.9rem;
		font-size: 0.85rem;
		color: var(--color-ink-soft);
	}
	.chip-list li.current {
		background: var(--color-green-700);
		border-color: var(--color-green-700);
		color: #fff;
		font-weight: 700;
	}
	.all-branches summary {
		cursor: pointer;
		font-weight: 600;
		color: var(--color-green-700);
		margin-top: var(--space-3);
	}
	.sg-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		margin-top: var(--space-4);
	}
	.sg-card h3 {
		font-size: var(--fs-h6);
		margin-bottom: 4px;
	}
	.sg-card p {
		margin: 0;
		font-size: 0.92rem;
	}
	.cta {
		text-align: center;
	}
</style>
