<script lang="ts">
	import type { CommitteeMember } from '$lib/data/committee';
	let { member }: { member: CommitteeMember } = $props();
</script>

<article class="card member-card">
	<div class="avatar" aria-hidden="true">{member.initials}</div>
	<div>
		<h3>{member.name}</h3>
		<p class="role">{member.role}</p>
		<p class="bio">{member.bio}</p>
		{#if member.linkedin}
			<a class="linkedin" href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
		{/if}
	</div>
</article>

<style>
	.member-card {
		display: flex;
		gap: var(--space-5);
		align-items: flex-start;
	}
	.avatar {
		flex-shrink: 0;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: var(--color-green-700);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1rem;
	}
	h3 {
		font-size: var(--fs-h6);
		margin: 0 0 2px;
	}
	.role {
		color: var(--color-gold-700);
		font-weight: 600;
		font-size: 0.85rem;
		margin: 0 0 var(--space-2);
	}
	.bio {
		font-size: 0.92rem;
		margin: 0 0 var(--space-2);
	}
	.linkedin {
		font-size: 0.85rem;
		font-weight: 600;
	}
</style>
