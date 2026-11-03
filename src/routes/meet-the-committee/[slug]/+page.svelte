<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import MemberAvatar from '$lib/components/MemberAvatar.svelte';
	import { site } from '$lib/config/site';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let member = $derived(data.member);
	let hasLinks = $derived(Boolean(member.linkedin || member.email || member.links?.length));
</script>

<svelte:head>
	<title>{member.name}, {member.role} — {site.name}</title>
	<meta name="description" content={member.summary} />
</svelte:head>

<div class="container">
	<Breadcrumbs trail={[{ label: 'Meet the Committee', href: '/meet-the-committee' }, { label: member.name }]} />
</div>

<section class="profile-hero">
	<div class="container hero-inner">
		<MemberAvatar {member} />
		<div>
			<p class="eyebrow eyebrow--gold">{member.role}</p>
			<h1>{member.name}</h1>
			<p class="lede">{member.summary}</p>
		</div>
	</div>
</section>

<div class="section section--tight container profile-body">
	<div class="bio">
		{#each member.sections as section (section.heading)}
			<section>
				<h2>{section.heading}</h2>
				{#each section.paragraphs as paragraph (paragraph)}
					<p>{paragraph}</p>
				{/each}
			</section>
		{/each}
	</div>

	<aside class="card sidebar">
		<h2>Expertise</h2>
		<ul class="tags">
			{#each member.expertise as tag (tag)}
				<li>{tag}</li>
			{/each}
		</ul>
		{#if hasLinks}
			<h2>Links</h2>
			<ul class="links">
				{#if member.linkedin}
					<li><a href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a></li>
				{/if}
				{#if member.email}
					<li><a href={`mailto:${member.email}`}>{member.email}</a></li>
				{/if}
				{#each member.links ?? [] as link (link.url)}
					<li><a href={link.url} target="_blank" rel="noreferrer">{link.label}</a></li>
				{/each}
			</ul>
		{/if}
	</aside>
</div>

<nav class="container member-nav" aria-label="Other committee members">
	<a class="nav-link" href={`/meet-the-committee/${data.previous.slug}`}>
		<span class="nav-label">← Previous</span>
		<span class="nav-name">{data.previous.name}</span>
	</a>
	<a class="all-link" href="/meet-the-committee">All committee members</a>
	<a class="nav-link nav-next" href={`/meet-the-committee/${data.next.slug}`}>
		<span class="nav-label">Next →</span>
		<span class="nav-name">{data.next.name}</span>
	</a>
</nav>

<style>
	.profile-hero {
		padding-block: var(--space-7);
		border-bottom: 1px solid var(--color-border);
		background: linear-gradient(180deg, var(--color-green-50) 0%, var(--color-paper) 100%);
	}
	.hero-inner {
		--avatar-size: 140px;
		display: flex;
		align-items: center;
		gap: var(--space-7);
	}
	.hero-inner h1 {
		font-size: var(--fs-h2);
		margin-bottom: var(--space-3);
	}
	.hero-inner .lede {
		margin: 0;
	}
	.profile-body {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 320px;
		gap: var(--space-8);
		align-items: start;
	}
	.bio {
		max-width: 68ch;
	}
	.bio section + section {
		margin-top: var(--space-6);
	}
	.bio h2 {
		font-size: var(--fs-h5);
		margin-bottom: var(--space-3);
	}
	.sidebar {
		padding: var(--space-5);
	}
	.sidebar h2 {
		font-family: var(--font-mono);
		font-size: var(--fs-eyebrow);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--color-green-600);
		margin-bottom: var(--space-3);
	}
	.sidebar ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}
	.tags li {
		padding: var(--space-1) var(--space-3);
		border-radius: 999px;
		background: var(--color-green-100);
		color: var(--color-green-800);
		font-size: 0.85rem;
		font-weight: 600;
	}
	.links {
		display: grid;
		gap: var(--space-2);
		font-size: 0.92rem;
		font-weight: 600;
		overflow-wrap: anywhere;
	}
	.tags + h2 {
		margin-top: var(--space-5);
	}
	.member-nav {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: var(--space-4);
		padding-block: var(--space-5) var(--space-8);
	}
	.nav-link {
		display: flex;
		flex-direction: column;
		text-decoration: none;
	}
	.nav-next {
		text-align: right;
	}
	.nav-label {
		font-size: 0.85rem;
		color: var(--color-muted);
	}
	.nav-name {
		font-family: var(--font-display);
		font-weight: 700;
		color: var(--color-green-700);
	}
	.nav-link:hover .nav-name {
		text-decoration: underline;
	}
	.all-link {
		font-size: 0.92rem;
		font-weight: 600;
		text-align: center;
	}
	@media (max-width: 900px) {
		.profile-body {
			grid-template-columns: minmax(0, 1fr);
			gap: var(--space-6);
		}
	}
	@media (max-width: 640px) {
		.hero-inner {
			--avatar-size: 96px;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-5);
		}
		.hero-inner h1 {
			font-size: var(--fs-h3);
		}
		.member-nav {
			grid-template-columns: 1fr 1fr;
		}
		.all-link {
			grid-column: 1 / -1;
			grid-row: 2;
		}
	}
</style>
