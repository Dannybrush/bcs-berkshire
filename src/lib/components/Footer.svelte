<script lang="ts">
	import BranchMark from './BranchMark.svelte';
	import { footerNav } from '$lib/data/navigation';
	import { site } from '$lib/config/site';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container footer-grid">
		<div class="footer-brand">
			<a href="/" class="brand">
				<BranchMark size={34} />
				<span><strong>BCS Berkshire</strong></span>
			</a>
			<p>{site.description}</p>
			<div class="socials">
				<a href={site.social.linkedin} aria-label="BCS on LinkedIn" target="_blank" rel="noreferrer">LinkedIn</a>
				<a href={site.social.facebook} aria-label="BCS Berkshire on Facebook" target="_blank" rel="noreferrer">Facebook</a>
				<a href={site.social.youtube} aria-label="BCS on YouTube" target="_blank" rel="noreferrer">YouTube</a>
			</div>
		</div>

		<nav class="footer-nav" aria-label="Footer">
			<h2 class="footer-heading">Explore</h2>
			<ul>
				{#each footerNav as item (item.href)}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
		</nav>

		<div class="footer-contact">
			<h2 class="footer-heading">Get in touch</h2>
			<ul class="contact-list">
				<li><a href={`mailto:${site.contact.chair}`}>Chair</a></li>
				<li><a href={`mailto:${site.contact.secretary}`}>Secretary</a></li>
				<li><a href={`mailto:${site.contact.events}`}>Events</a></li>
				<li><a href={`mailto:${site.contact.volunteering}`}>Volunteering</a></li>
			</ul>
			<p class="meeting-note">{site.meeting.cadence}<br />{site.meeting.note}</p>
		</div>
	</div>

	<div class="legal-bar">
		<div class="container legal-inner">
			<p>
				© {year} BCS Berkshire — a branch of {site.bcs.charityNumberEW ? 'BCS, The Chartered Institute for IT' : ''},
				a Royal Chartered body and registered charity in England &amp; Wales (No.
				{site.bcs.charityNumberEW}) and Scotland (No. {site.bcs.charityNumberScotland}).
			</p>
			<div class="legal-links">
				<a href="/who-are-the-bcs">Who are the BCS</a>
				<a href={site.bcs.url} target="_blank" rel="noreferrer">bcs.org</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 1px solid var(--color-border);
		background: var(--color-green-900);
		color: rgba(255, 255, 255, 0.85);
		margin-top: var(--space-10);
	}
	.footer-grid {
		display: grid;
		grid-template-columns: 1.4fr 1fr 1fr;
		gap: var(--space-8);
		padding-block: var(--space-8);
	}
	@media (max-width: 800px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: var(--space-6);
		}
	}
	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--space-3);
		text-decoration: none;
		color: #fff;
		margin-bottom: var(--space-3);
	}
	.footer-brand p {
		color: rgba(255, 255, 255, 0.72);
		font-size: 0.92rem;
		max-width: 42ch;
	}
	.socials {
		display: flex;
		gap: var(--space-4);
		margin-top: var(--space-4);
	}
	.socials a {
		color: #fff;
		font-size: 0.85rem;
		font-weight: 600;
	}
	.footer-heading {
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.55);
		margin-bottom: var(--space-4);
		font-weight: 600;
	}
	.footer-nav ul,
	.contact-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.footer-nav a,
	.contact-list a {
		color: rgba(255, 255, 255, 0.82);
		text-decoration: none;
		font-size: 0.92rem;
	}
	.footer-nav a:hover,
	.contact-list a:hover,
	.socials a:hover {
		color: var(--color-gold-500);
	}
	.meeting-note {
		margin-top: var(--space-5);
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.6);
	}
	.legal-bar {
		border-top: 1px solid rgba(255, 255, 255, 0.12);
	}
	.legal-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space-3);
		padding-block: var(--space-5);
	}
	.legal-inner p {
		color: rgba(255, 255, 255, 0.55);
		font-size: 0.78rem;
		margin: 0;
		max-width: 60ch;
	}
	.legal-links {
		display: flex;
		gap: var(--space-4);
	}
	.legal-links a {
		color: rgba(255, 255, 255, 0.65);
		font-size: 0.78rem;
	}
</style>
