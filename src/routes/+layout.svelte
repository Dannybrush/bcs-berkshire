<script lang="ts">
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { site } from '$lib/config/site';

	let { children } = $props();
</script>

<svelte:head>
	<title>{site.name} — {site.tagline}</title>
	<meta name="description" content={site.description} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to main content</a>

<Header />

<main id="main-content">
	{@render children()}
</main>

<Footer />
