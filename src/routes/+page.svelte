<script lang="ts">
	import BranchMark from '$lib/components/BranchMark.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import { site } from '$lib/config/site';
	import { upcomingEvents, recurringFixtures } from '$lib/data/events';
	import { officers } from '$lib/data/committee';

	const nextEvents = upcomingEvents.slice(0, 3);
	const featuredOfficers = officers.slice(0, 3);
</script>

<svelte:head>
	<title>{site.name} — Home</title>
	<meta name="description" content={site.description} />
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow"><BranchMark size={20} /> {site.parentOrg}</p>
			<h1>Berkshire's community of IT professionals, 2,500 strong.</h1>
			<p class="lede">
				We're the local branch of BCS, run entirely by volunteers — bringing talks, networking,
				schools outreach and career support to everyone working in or curious about technology
				across the county.
			</p>
			<div class="hero-actions">
				<a class="btn btn-primary" href="/events">See upcoming events</a>
				<a class="btn btn-outline" href="/who-are-the-bcs/who-is-bcs-berkshire">Who we are</a>
			</div>
			<dl class="hero-stats">
				<div>
					<dt>Members</dt>
					<dd>{site.memberCount}</dd>
				</div>
				<div>
					<dt>Meets</dt>
					<dd>Monthly</dd>
				</div>
				<div>
					<dt>Since</dt>
					<dd>1957</dd>
				</div>
			</dl>
		</div>
		<div class="hero-panel card">
			<h2 class="panel-title">Next up</h2>
			{#each recurringFixtures as fixture (fixture.title)}
				<div class="fixture">
					<p class="fixture-cadence">{fixture.cadence}</p>
					<p class="fixture-title">{fixture.title}</p>
					<p class="fixture-time">{fixture.time}</p>
				</div>
			{/each}
			<a class="btn btn-gold" href="/events">Full events calendar</a>
		</div>
	</div>
</section>

<section class="section container">
	<div class="section-head">
		<div>
			<p class="eyebrow">Upcoming events</p>
			<h2>Talks, panels and nights out for the Berkshire tech community</h2>
		</div>
		<a class="btn btn-outline" href="/events">View all events</a>
	</div>
	<div class="grid-3">
		{#each nextEvents as event (event.slug)}
			<EventCard {event} />
		{/each}
	</div>
</section>

<section class="section band">
	<div class="container band-grid">
		<div>
			<p class="eyebrow eyebrow--gold">AI Taskforce</p>
			<h2>Helping members make sense of AI — and use it responsibly</h2>
			<p class="lede">
				Our AI Taskforce runs briefings, roundtables and panels on applied and responsible AI for
				members across every sector, from ethics and governance to hands-on adoption in the
				workplace.
			</p>
			<a class="btn btn-primary" href="/ai-taskforce">Explore the AI Taskforce</a>
		</div>
		<div class="band-card card">
			<h3>Anthony Parker Memorial Prize</h3>
			<p>
				Awarded each year in memory of our former chairman, recognising an outstanding student
				computing project from young people across Berkshire.
			</p>
			<a class="btn btn-outline" href="/anthony-parker-memorial-prize">Read about the prize</a>
		</div>
	</div>
</section>

<section class="section container">
	<div class="section-head">
		<div>
			<p class="eyebrow">Meet the committee</p>
			<h2>Run entirely by volunteers, for the benefit of the profession</h2>
		</div>
		<a class="btn btn-outline" href="/meet-the-committee">Meet the full committee</a>
	</div>
	<div class="grid-3">
		{#each featuredOfficers as member (member.name)}
			<article class="card officer-preview">
				<div class="avatar" aria-hidden="true">{member.initials}</div>
				<h3>{member.name}</h3>
				<p class="role">{member.role}</p>
			</article>
		{/each}
	</div>
</section>

<section class="section container-narrow cta-section">
	<h2>Join the conversation shaping IT in Berkshire</h2>
	<p class="lede">
		Whether you're taking your first step into a tech career or leading transformation at board
		level, there's a BCS grade for you — and a branch on your doorstep.
	</p>
	<div class="hero-actions">
		<a class="btn btn-primary" href="/who-are-the-bcs/registrations-and-memberships">
			Compare membership grades
		</a>
		<a class="btn btn-outline" href="/contact-us">Get in touch</a>
	</div>
</section>

<style>
	.hero {
		background: linear-gradient(180deg, var(--color-green-50), var(--color-paper));
		border-bottom: 1px solid var(--color-border);
		padding-block: var(--space-9) var(--space-8);
	}
	.hero-grid {
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		gap: var(--space-8);
		align-items: start;
	}
	@media (max-width: 900px) {
		.hero-grid {
			grid-template-columns: 1fr;
		}
	}
	.hero-actions {
		display: flex;
		gap: var(--space-3);
		flex-wrap: wrap;
		margin-block: var(--space-5);
	}
	.hero-stats {
		display: flex;
		gap: var(--space-7);
		margin: 0;
		padding-top: var(--space-5);
		border-top: 1px solid var(--color-border);
	}
	.hero-stats dt {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-muted);
	}
	.hero-stats dd {
		margin: 0;
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.6rem;
		color: var(--color-green-700);
	}

	.hero-panel {
		background: var(--color-green-900);
		border-color: var(--color-green-900);
	}
	.panel-title {
		color: #fff;
		font-size: var(--fs-h6);
		margin-bottom: var(--space-4);
	}
	.fixture {
		padding-block: var(--space-3);
		border-top: 1px solid rgba(255, 255, 255, 0.15);
	}
	.fixture:first-of-type {
		border-top: none;
	}
	.fixture-cadence {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-gold-500);
		margin: 0 0 4px;
	}
	.fixture-title {
		color: #fff;
		font-weight: 700;
		margin: 0 0 2px;
	}
	.fixture-time {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.85rem;
		margin: 0;
	}
	.hero-panel .btn {
		margin-top: var(--space-5);
		width: 100%;
		justify-content: center;
	}

	.section-head {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: var(--space-5);
		margin-bottom: var(--space-6);
		flex-wrap: wrap;
	}
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

	.band {
		background: var(--color-green-50);
		border-block: 1px solid var(--color-border);
	}
	.band-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: var(--space-8);
		align-items: center;
	}
	@media (max-width: 900px) {
		.band-grid {
			grid-template-columns: 1fr;
		}
	}
	.band-card h3 {
		font-size: var(--fs-h5);
	}

	.officer-preview {
		text-align: center;
	}
	.officer-preview .avatar {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: var(--color-green-700);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-display);
		font-weight: 700;
		margin: 0 auto var(--space-3);
	}
	.officer-preview h3 {
		font-size: var(--fs-h6);
		margin-bottom: 2px;
	}
	.officer-preview .role {
		font-size: 0.85rem;
		color: var(--color-gold-700);
		font-weight: 600;
		margin: 0;
	}

	.cta-section {
		text-align: center;
	}
	.cta-section .hero-actions {
		justify-content: center;
	}
</style>
