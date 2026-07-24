<script lang="ts">
	import type { BranchEvent } from '$lib/data/events';
	let { event }: { event: BranchEvent } = $props();
</script>

<article class="card event-card">
	<p class="event-date">{event.displayDate}</p>
	<h3>{event.title}</h3>
	<dl class="meta">
		<div><dt>Time</dt><dd>{event.time}</dd></div>
		<div><dt>Where</dt><dd>{event.location}</dd></div>
		<div><dt>Format</dt><dd>{event.format}</dd></div>
	</dl>
	<p>{event.summary}</p>
	{#if event.isPlaceholder}
		<p class="tbc">Details to be confirmed — check back or ask events.berkshire@bcs.org.uk</p>
	{/if}
	{#if event.registerUrl}
		<a class="btn btn-outline" href={event.registerUrl} target="_blank" rel="noreferrer">
			Register interest
		</a>
	{/if}
</article>

<style>
	.event-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.event-date {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-green-600);
		margin: 0;
	}
	h3 {
		font-size: var(--fs-h5);
		margin: 0;
	}
	.meta {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: var(--space-3);
		margin: var(--space-2) 0;
		padding: var(--space-3) 0;
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}
	dt {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-muted);
		margin: 0;
	}
	dd {
		margin: 0;
		font-weight: 600;
		color: var(--color-ink);
		font-size: 0.92rem;
	}
	.tbc {
		font-size: 0.85rem;
		color: var(--color-gold-700);
		font-style: italic;
	}
	.btn {
		align-self: flex-start;
		margin-top: var(--space-2);
	}
</style>
