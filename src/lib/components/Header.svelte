<script lang="ts">
	import { page } from '$app/stores';
	import BranchMark from './BranchMark.svelte';
	import { primaryNav } from '$lib/data/navigation';
	import { site } from '$lib/config/site';

	let mobileOpen = $state(false);
	let openDropdown = $state<string | null>(null);

	const currentPath = $derived($page.url.pathname);

	function isActive(href: string): boolean {
		if (href === '/') return currentPath === '/';
		return currentPath === href || currentPath.startsWith(href + '/');
	}

	function closeAll() {
		mobileOpen = false;
		openDropdown = null;
	}
</script>

<header class="site-header">
	<div class="container bar">
		<a href="/" class="brand" onclick={closeAll}>
			<BranchMark size={38} />
			<span class="brand-text">
				<strong>BCS Berkshire</strong>
				<span class="brand-sub">{site.parentOrg}</span>
			</span>
		</a>

		<button
			class="menu-toggle"
			aria-expanded={mobileOpen}
			aria-controls="primary-nav"
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			<span class="visually-hidden">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
			<svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
				{#if mobileOpen}
					<path d="M6 6 L20 20 M20 6 L6 20" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
				{:else}
					<path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
				{/if}
			</svg>
		</button>

		<nav id="primary-nav" class="primary-nav" class:open={mobileOpen} aria-label="Primary">
			<ul>
				{#each primaryNav as item (item.href)}
					<li class="nav-item" class:has-children={!!item.children}>
						{#if item.children}
							<div class="dropdown-wrap">
								<button
									class="nav-link dropdown-trigger"
									class:active={isActive(item.href)}
									aria-expanded={openDropdown === item.href}
									onclick={() => (openDropdown = openDropdown === item.href ? null : item.href)}
								>
									{item.label}
									<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
										<path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</button>
								<ul class="dropdown-menu" class:open={openDropdown === item.href}>
									{#each item.children as child (child.href)}
										<li>
											<a href={child.href} class="dropdown-link" class:active={currentPath === child.href} onclick={closeAll}>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							</div>
						{:else}
							<a href={item.href} class="nav-link" class:active={isActive(item.href)} onclick={closeAll}>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
			<a href="https://www.bcs.org/membership-and-registrations/become-a-member/" class="btn btn-gold nav-cta">
				Join BCS
			</a>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: var(--space-3);
		gap: var(--space-4);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		text-decoration: none;
		color: var(--color-ink);
	}
	.brand-text {
		display: flex;
		flex-direction: column;
		line-height: 1.15;
	}
	.brand-text strong {
		font-family: var(--font-display);
		font-size: 1.05rem;
		letter-spacing: -0.01em;
	}
	.brand-sub {
		font-size: 0.72rem;
		color: var(--color-muted);
	}

	.menu-toggle {
		display: none;
		background: none;
		border: none;
		color: var(--color-ink);
		padding: var(--space-2);
		cursor: pointer;
		border-radius: var(--radius-sm);
	}

	.primary-nav ul {
		list-style: none;
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: 0;
		margin: 0;
		flex-wrap: wrap;
	}

	.primary-nav {
		display: flex;
		align-items: center;
		gap: var(--space-5);
	}

	.nav-link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-sm);
		text-decoration: none;
		color: var(--color-ink-soft);
		font-weight: 600;
		font-size: 0.92rem;
		background: none;
		border: none;
		cursor: pointer;
		font-family: inherit;
	}
	.nav-link:hover {
		color: var(--color-green-700);
		background: var(--color-green-50);
	}
	.nav-link.active {
		color: var(--color-green-700);
	}

	.dropdown-wrap {
		position: relative;
	}
	.dropdown-menu {
		list-style: none;
		margin: 0;
		padding: var(--space-2);
		position: absolute;
		top: calc(100% + 6px);
		left: 0;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-md);
		min-width: 240px;
		display: none;
		flex-direction: column;
	}
	.dropdown-menu.open {
		display: flex;
	}
	.dropdown-link {
		display: block;
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-sm);
		text-decoration: none;
		color: var(--color-ink-soft);
		font-size: 0.9rem;
		font-weight: 500;
	}
	.dropdown-link:hover,
	.dropdown-link.active {
		background: var(--color-green-50);
		color: var(--color-green-700);
	}

	.nav-cta {
		white-space: nowrap;
	}

	@media (max-width: 960px) {
		.menu-toggle {
			display: inline-flex;
		}
		.primary-nav {
			position: fixed;
			inset: 64px 0 0 0;
			background: var(--color-surface);
			flex-direction: column;
			align-items: stretch;
			padding: var(--space-5);
			transform: translateX(100%);
			transition: transform 0.2s var(--ease-standard);
			overflow-y: auto;
		}
		.primary-nav.open {
			transform: translateX(0);
		}
		.primary-nav ul {
			flex-direction: column;
			align-items: stretch;
			gap: var(--space-1);
		}
		.dropdown-menu {
			position: static;
			box-shadow: none;
			border: none;
			display: none;
			padding-left: var(--space-4);
		}
		.dropdown-menu.open {
			display: flex;
		}
		.nav-cta {
			margin-top: var(--space-4);
			justify-content: center;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.primary-nav {
			transition: none;
		}
	}
</style>
