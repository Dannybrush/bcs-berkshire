<script lang="ts">
	/**
	 * Placeholder brand mark — NOT the official BCS logo.
	 * Swap the <svg> below for the real BCS/BCS Berkshire logo file
	 * once supplied. Concept: a node branching into two paths, in the
	 * branch's green + gold, standing in for both "branch" and network.
	 */
	let { size = 40 }: { size?: number } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 40 40"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	role="img"
	aria-label="BCS Berkshire branch mark"
>
	<circle cx="10" cy="20" r="4.5" fill="var(--color-green-700)" />
	<path
		d="M14 20 C 20 20, 20 9, 27 9"
		stroke="var(--color-green-700)"
		stroke-width="2.5"
		fill="none"
		stroke-linecap="round"
	/>
	<path
		d="M14 20 C 20 20, 20 31, 27 31"
		stroke="var(--color-gold-600)"
		stroke-width="2.5"
		fill="none"
		stroke-linecap="round"
	/>
	<circle cx="29.5" cy="9" r="3.5" fill="var(--color-green-700)" />
	<circle cx="29.5" cy="31" r="3.5" fill="var(--color-gold-600)" />
</svg>
