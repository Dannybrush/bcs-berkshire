<script lang="ts">
	import { page } from '$app/stores';
	import { site } from '$lib/config/site';
</script>

<svelte:head>
	<title>{$page.status} — {site.name}</title>
</svelte:head>

<section class="section container-narrow error-page">
	<p class="eyebrow">Error {$page.status}</p>
	<h1>
		{#if $page.status === 404}
			We couldn't find that page
		{:else}
			Something went wrong
		{/if}
	</h1>
	<p class="lede">
		{#if $page.status === 404}
			The page you're looking for may have moved or no longer exists. Try the links below, or
			head back to the homepage.
		{:else}
			{$page.error?.message ?? 'An unexpected error occurred. Please try again shortly.'}
		{/if}
	</p>
	<div class="actions">
		<a class="btn btn-primary" href="/">Back to homepage</a>
		<a class="btn btn-outline" href="/contact-us">Contact us</a>
	</div>
</section>

<style>
	.error-page {
		padding-block: var(--space-10);
		text-align: center;
	}
	.actions {
		display: flex;
		gap: var(--space-3);
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
