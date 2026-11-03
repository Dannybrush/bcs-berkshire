<script lang="ts">
	import type { CommitteeMember } from '$lib/data/committee';
	let { member }: { member: CommitteeMember } = $props();
</script>

{#if member.photo}
	<img class="avatar" src={member.photo} alt="" width="88" height="88" />
{:else}
	<div class="avatar" aria-hidden="true">{member.initials}</div>
{/if}

<style>
	/* Set --avatar-size on a parent to resize. */
	.avatar {
		flex-shrink: 0;
		width: var(--avatar-size, 88px);
		height: var(--avatar-size, 88px);
		border-radius: 50%;
		object-fit: cover;
		background: var(--color-green-700);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: calc(var(--avatar-size, 88px) * 0.32);
		box-shadow: 0 0 0 3px var(--color-surface), 0 0 0 4px var(--color-gold-500);
	}
</style>
