<script lang="ts">
	import { enhance } from '$app/forms';
	import PageHero from '$lib/components/PageHero.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { site } from '$lib/config/site';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let submitting = $state(false);

	const officerContacts = [
		{ label: 'Chair', email: site.contact.chair },
		{ label: 'Treasurer', email: site.contact.treasurer },
		{ label: 'Secretary', email: site.contact.secretary },
		{ label: 'Events', email: site.contact.events },
		{ label: 'STEM & schools', email: site.contact.stem },
		{ label: 'Volunteering', email: site.contact.volunteering }
	];
</script>

<svelte:head>
	<title>Contact us — {site.name}</title>
	<meta name="description" content="Get in touch with BCS Berkshire — email the committee directly or send us a message." />
</svelte:head>

<div class="container"><Breadcrumbs trail={[{ label: 'Contact us' }]} /></div>

<PageHero
	eyebrow="Contact us"
	title="Get in touch with BCS Berkshire"
	lede="Whether it's a question about membership, an idea for a talk, or an offer to volunteer, we'd love to hear from you."
/>

<section class="section container contact-grid">
	<div class="card form-card">
		<h2>Send us a message</h2>

		{#if form?.success}
			<p class="success" role="status">
				Thanks — your message has been sent. We usually reply within a few working days.
			</p>
		{:else}
			<form
				method="POST"
				use:enhance={() => {
					submitting = true;
					return async ({ update }) => {
						submitting = false;
						await update();
					};
				}}
			>
				{#if form?.errors?.form}
					<p class="error" role="alert">{form.errors.form}</p>
				{/if}

				<!-- Honeypot field — hidden from real users, catches bots -->
				<div class="honeypot" aria-hidden="true">
					<label for="company">Company</label>
					<input type="text" id="company" name="company" tabindex="-1" autocomplete="off" />
				</div>

				<div class="field">
					<label for="name">Full name</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						value={form?.values?.name ?? ''}
						aria-invalid={!!form?.errors?.name}
						aria-describedby={form?.errors?.name ? 'name-error' : undefined}
					/>
					{#if form?.errors?.name}<p class="error" id="name-error">{form.errors.name}</p>{/if}
				</div>

				<div class="field">
					<label for="email">Email address</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						value={form?.values?.email ?? ''}
						aria-invalid={!!form?.errors?.email}
						aria-describedby={form?.errors?.email ? 'email-error' : undefined}
					/>
					{#if form?.errors?.email}<p class="error" id="email-error">{form.errors.email}</p>{/if}
				</div>

				<div class="field">
					<label for="topic">What's this about?</label>
					<select id="topic" name="topic" value={form?.values?.topic ?? ''}>
						<option value="General enquiry">General enquiry</option>
						<option value="Membership">Membership</option>
						<option value="Speaking at an event">Speaking at an event</option>
						<option value="Sponsorship or partnership">Sponsorship or partnership</option>
						<option value="Schools & STEM">Schools &amp; STEM</option>
						<option value="Volunteering">Volunteering</option>
					</select>
				</div>

				<div class="field">
					<label for="message">Message</label>
					<textarea
						id="message"
						name="message"
						rows="5"
						required
						minlength="10"
						maxlength="4000"
						aria-invalid={!!form?.errors?.message}
						aria-describedby={form?.errors?.message ? 'message-error' : undefined}
						>{form?.values?.message ?? ''}</textarea
					>
					{#if form?.errors?.message}<p class="error" id="message-error">{form.errors.message}</p>{/if}
				</div>

				<button class="btn btn-primary" type="submit" disabled={submitting}>
					{submitting ? 'Sending…' : 'Send message'}
				</button>
			</form>
		{/if}
	</div>

	<div class="contact-side">
		<div class="card">
			<h2>Branch officers</h2>
			<ul class="officer-list">
				{#each officerContacts as c (c.email)}
					<li>
						<span class="officer-label">{c.label}</span>
						<a href={`mailto:${c.email}`}>{c.email}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="card">
			<h2>Committee meetings</h2>
			<p>{site.meeting.cadence}</p>
			<p>{site.meeting.note}</p>
		</div>
	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		gap: var(--space-6);
		align-items: start;
	}
	@media (max-width: 900px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
	.form-card h2,
	.contact-side h2 {
		font-size: var(--fs-h5);
	}
	.field {
		margin-bottom: var(--space-4);
	}
	label {
		display: block;
		font-weight: 600;
		font-size: 0.9rem;
		margin-bottom: var(--space-2);
	}
	input,
	select,
	textarea {
		width: 100%;
		font: inherit;
		padding: 0.65rem 0.8rem;
		border: 1.5px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-surface);
		color: var(--color-ink);
	}
	input:focus-visible,
	select:focus-visible,
	textarea:focus-visible {
		border-color: var(--color-green-700);
	}
	.error {
		color: var(--color-error);
		font-size: 0.85rem;
		margin: var(--space-2) 0 0;
	}
	.success {
		color: var(--color-success);
		font-weight: 600;
	}
	.honeypot {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
	.contact-side {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}
	.officer-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.officer-list li {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid var(--color-border);
		padding-bottom: var(--space-2);
	}
	.officer-label {
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-muted);
	}
</style>
