<script>
	import Arch from '$lib/components/Arch.svelte';
	import GitHubLogo from '$lib/svg/github.svelte';
	import LinkedInLogo from '$lib/svg/linkedin.svelte';
	import EmailIcon from '$lib/svg/email.svelte';
	import { email } from '$lib/email.js';
</script>

<Arch title="Luke Carbis" />

<p>
	I also go by <strong>Saadia</strong>, my Hebrew name.
</p>
<p>I'm a WordPress dev and core contributor, mostly.</p>
<p>Besides that, I build apps, play music, and somehow manage to parent five children!</p>

<div class="social">
	<a href="http://linkedin.com/in/carbis/" target="_blank"><LinkedInLogo /></a>
	<a href="https://github.com/carbis" target="_blank"><GitHubLogo /></a>
	<a href on:keydown={email} on:click={email}><EmailIcon /></a>
</div>

<style>
	p {
		font-size: 1.5rem;
		line-height: 2rem;
		text-align: center;
		max-width: 48rem;
		margin: 0 auto 1rem;
	}
	strong {
		font-size: 1.8rem;
	}
	a {
		color: var(--black);
		transition: translate 0.5s;
	}
	a:hover {
		translate: 0 -0.65rem;
	}
	.social {
		height: 2.5rem;
		padding: 0.5rem 1.5rem;
		border-radius: 2rem;
		background: var(--orange);
		margin: 1rem auto 0;
		display: inline-flex;
		gap: 1rem;
		justify-content: center;
	}
</style>
