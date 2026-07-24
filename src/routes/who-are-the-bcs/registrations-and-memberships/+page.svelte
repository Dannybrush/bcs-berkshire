<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { site } from '$lib/config/site';
	import { membershipGrades, registrations } from '$lib/data/registrations';
</script>

<svelte:head>
	<title>Registrations & Memberships — {site.name}</title>
	<meta name="description" content="A plain-English guide to BCS membership grades — AMBCS, MBCS, FBCS — and professional registrations like CITP." />
</svelte:head>

<div class="container">
	<Breadcrumbs
		trail={[
			{ label: 'Who are the BCS', href: '/who-are-the-bcs' },
			{ label: 'Registrations & Memberships' }
		]}
	/>
</div>

<PageHero
	eyebrow="Who are the BCS"
	title="Registrations & Memberships"
	lede="BCS membership is structured in grades that track your experience, with professional registrations layered on top to recognise Chartered-level standing."
/>

<section class="section container">
	<h2>Membership grades</h2>
	<div class="table-wrap card">
		<table>
			<thead>
				<tr>
					<th scope="col">Grade</th>
					<th scope="col">Who it's for</th>
					<th scope="col">What it means</th>
				</tr>
			</thead>
			<tbody>
				{#each membershipGrades as grade (grade.code)}
					<tr>
						<th scope="row">{grade.code}</th>
						<td>{grade.audience}</td>
						<td>{grade.description}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<p class="postnominal-note">
		Membership postnominals — AMBCS, MBCS or FBCS — are normally shown after any decorations,
		degrees and Chartered letters you hold, for example <em>Jo Smith BEng CEng MBCS</em>.
	</p>
</section>

<section class="section band">
	<div class="container">
		<h2>Professional registrations</h2>
		<p class="lede">
			Registration is layered on top of membership and involves peer assessment against defined
			industry standards — it's how BCS recognises Chartered-level competence.
		</p>
		<div class="grid-2">
			{#each registrations as reg (reg.code)}
				<div class="card">
					<h3>{reg.code} — {reg.name}</h3>
					<p>{reg.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section container-narrow cta card">
	<h2>Ready to join, or thinking about upgrading?</h2>
	<p>
		Membership is managed centrally by BCS, not by the branch — but we're always happy to talk
		through which grade or registration fits where you are, and what Berkshire members get out of
		it locally.
	</p>
	<div class="cta-actions">
		<a class="btn btn-primary" href="https://www.bcs.org/membership-and-registrations/become-a-member/" target="_blank" rel="noreferrer">
			Join BCS
		</a>
		<a class="btn btn-outline" href="/contact-us">Ask the branch</a>
	</div>
</section>

<style>
	.table-wrap {
		padding: 0;
		overflow-x: auto;
	}
	table {
		min-width: 640px;
	}
	th,
	td {
		vertical-align: top;
	}
	.postnominal-note {
		margin-top: var(--space-4);
		font-size: 0.92rem;
		color: var(--color-muted);
	}
	.band {
		background: var(--color-green-50);
		border-block: 1px solid var(--color-border);
	}
	.grid-2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-5);
		margin-top: var(--space-6);
	}
	@media (max-width: 800px) {
		.grid-2 {
			grid-template-columns: 1fr;
		}
	}
	.grid-2 h3 {
		font-size: var(--fs-h6);
	}
	.cta {
		text-align: center;
	}
	.cta-actions {
		display: flex;
		gap: var(--space-3);
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
