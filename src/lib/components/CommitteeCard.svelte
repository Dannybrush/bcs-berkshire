<script lang="ts">
	import MemberAvatar from '$lib/components/MemberAvatar.svelte';
	import type { CommitteeMember } from '$lib/data/committee';
	let { member }: { member: CommitteeMember } = $props();
</script>

<article class="card member-card">
	<div class="identity">
		<MemberAvatar {member} />
		<div>
			<!-- The link stretches over the whole card; contact icons sit above it. -->
			<h3><a class="profile-link" href={`/meet-the-committee/${member.slug}`}>{member.name}</a></h3>
			<p class="role">{member.role}</p>
			<p class="summary">{member.summary}</p>
		</div>
	</div>
	<div class="card-footer">
		<div class="contact">
			{#if member.linkedin}
				<a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}>
					<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
						<path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 13.4c0-3.09-1.65-4.53-3.85-4.53a3.32 3.32 0 0 0-3 1.65V8.5h-3.37c.05.95 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92a2.2 2.2 0 0 1 2.06-1.47c1.46 0 2.04 1.11 2.04 2.73V20h3.37l.25-6.6Z" />
					</svg>
				</a>
			{/if}
			{#if member.email}
				<a href={`mailto:${member.email}`} aria-label={`Email ${member.role}, ${member.name}`}>
					<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<rect x="3" y="5" width="18" height="14" rx="2" />
						<path d="m3 7 9 6 9-6" />
					</svg>
				</a>
			{/if}
		</div>
		<span class="cta" aria-hidden="true">View profile <span class="arrow">→</span></span>
	</div>
</article>

<style>
	.member-card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding: var(--space-5);
		transition:
			transform 0.15s var(--ease-standard),
			box-shadow 0.15s var(--ease-standard),
			border-color 0.15s var(--ease-standard);
	}
	.member-card:hover,
	.member-card:focus-within {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-green-500);
	}
	.identity {
		display: flex;
		gap: var(--space-5);
		align-items: flex-start;
		flex: 1;
	}
	h3 {
		font-size: var(--fs-h6);
		margin: 0 0 2px;
	}
	.profile-link {
		color: var(--color-ink);
		text-decoration: none;
	}
	.profile-link::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
	}
	.profile-link:focus-visible {
		outline: none;
	}
	.profile-link:focus-visible::after {
		outline: 2px solid var(--color-green-600);
		outline-offset: 2px;
		border-radius: var(--radius-lg);
	}
	.role {
		color: var(--color-gold-700);
		font-weight: 600;
		font-size: 0.85rem;
		line-height: var(--lh-snug);
		margin: 0 0 var(--space-2);
	}
	.summary {
		font-size: 0.92rem;
		line-height: 1.5;
		color: var(--color-ink-soft);
		margin: 0;
	}
	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		padding-top: var(--space-3);
		border-top: 1px solid var(--color-border);
	}
	.contact {
		display: flex;
		gap: var(--space-1);
		/* Keeps footers level on cards with no contact links. */
		min-height: 36px;
	}
	.contact a {
		/* Above the stretched profile link, so these stay separately clickable. */
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		color: var(--color-green-700);
	}
	.contact a:hover {
		background: var(--color-green-100);
	}
	.cta {
		margin-left: auto;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--color-green-700);
		white-space: nowrap;
	}
	.arrow {
		display: inline-block;
		transition: transform 0.15s var(--ease-standard);
	}
	.member-card:hover .arrow {
		transform: translateX(3px);
	}
	@media (max-width: 480px) {
		.identity {
			--avatar-size: 64px;
			gap: var(--space-4);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.member-card,
		.arrow {
			transition: none;
		}
		.member-card:hover,
		.member-card:focus-within,
		.member-card:hover .arrow {
			transform: none;
		}
	}
</style>
