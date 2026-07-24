<script lang="ts">
	interface Crumb {
		label: string;
		href?: string;
	}
	let { trail }: { trail: Crumb[] } = $props();
</script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
	<ol>
		<li><a href="/">Home</a></li>
		{#each trail as crumb, i (crumb.label)}
			<li>
				<span aria-hidden="true">/</span>
				{#if crumb.href && i !== trail.length - 1}
					<a href={crumb.href}>{crumb.label}</a>
				{:else}
					<span aria-current="page">{crumb.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	.breadcrumbs {
		padding-block: var(--space-4);
	}
	ol {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		padding: 0;
		margin: 0;
		font-size: 0.85rem;
	}
	li {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--color-muted);
	}
	a {
		color: var(--color-muted);
		text-decoration: none;
	}
	a:hover {
		color: var(--color-green-700);
		text-decoration: underline;
	}
	[aria-current='page'] {
		color: var(--color-ink);
		font-weight: 600;
	}
</style>
