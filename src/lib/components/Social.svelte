<script>
	import { email } from '$lib/email.js';
	import EmailIcon from '$lib/svg/email.svelte';
	import GitHubLogo from '$lib/svg/github.svelte';
	import LinkedInLogo from '$lib/svg/linkedin.svelte';
</script>

<div>
	<a href="http://linkedin.com/in/carbis/" target="_blank"><LinkedInLogo /></a>
	<a href="https://github.com/lukecarbis" target="_blank"><GitHubLogo /></a>
	<a href="/email.txt" on:keydown={email} on:click={email}><EmailIcon /></a>
</div>

<style>
	a {
		color: var(--black);
		transition: translate 0.5s;
	}
	a:hover {
		translate: 0 -0.4rem;
		color: var(--purple);
	}
	div {
		height: 2.5rem;
		padding: 0.5rem 1.5rem;
		border-radius: 2rem;
		border: 4px solid var(--black);
		margin: 1rem auto;
		display: inline-flex;
		gap: 1.2rem;
		justify-content: center;
	}
	@media screen and (max-width: 768px) {
		div {
			height: 2rem;
			margin-bottom: 2rem;
		}
	}
</style>
