<script lang="ts">
	let {
		eyebrow,
		title,
		lede,
		tone = 'light'
	}: { eyebrow?: string; title: string; lede?: string; tone?: 'light' | 'deep' } = $props();
</script>

<section class="hero" class:deep={tone === 'deep'}>
	<div class="container">
		{#if eyebrow}
			<p class="eyebrow" class:eyebrow--gold={tone === 'deep'}>{eyebrow}</p>
		{/if}
		<h1>{title}</h1>
		{#if lede}
			<p class="lede">{lede}</p>
		{/if}
	</div>
</section>

<style>
	.hero {
		padding-block: var(--space-9) var(--space-7);
		border-bottom: 1px solid var(--color-border);
		background: linear-gradient(180deg, var(--color-green-50) 0%, var(--color-paper) 100%);
	}
	.hero.deep {
		background: var(--color-green-900);
		border-bottom: none;
	}
	.hero.deep :global(h1) {
		color: #fff;
	}
	.hero.deep .lede {
		color: rgba(255, 255, 255, 0.78);
	}
</style>
