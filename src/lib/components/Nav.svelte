<script>
	import { blur } from 'svelte/transition';

	export let pathname = '/';
	$: secondary = pathname !== '/';

	const navItems = [
		{ href: '/wp', label: 'WordPress' },
		{ href: '/podcasts', label: 'Podcasts' },
		{ href: '/apps', label: 'Apps' },
		{ href: 'https://blog.carb.is/', label: 'Blog' }
	];
</script>

{#if secondary}
	<h1>
		{#each navItems as { href, label }}
			{#if pathname === href}
				{label}
			{/if}
		{/each}
	</h1>
{/if}
<nav class={secondary ? 'secondary' : ''}>
	<ul>
		{#each navItems as { href, label }}
			<li class:selected={pathname === href}>
				<a {href}>{label}</a>
			</li>
		{/each}
		{#if secondary}
			<li transition:blur class="back">
				<a href="/" aria-label="Back">☚ Back</a>
			</li>
		{/if}
	</ul>
</nav>

<style>
	h1 {
		display: none;
		font-weight: 800;
		font-size: 3rem;
		text-align: center;
		margin-top: 4rem;
		margin-bottom: 5rem;
		text-decoration: underline;
		text-decoration-color: var(--cyan);
		text-decoration-thickness: 6px;
		-webkit-text-decoration-style: wavy;
		text-underline-offset: 6px;
	}

	nav {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		font-weight: 700;
		font-size: 3rem;
		text-align: center;
		position: absolute;
		transition: all 0.5s;
	}

	li:hover,
	li.selected {
		translate: 0 -1rem;
	}

	li:hover > a,
	li.selected > a {
		padding-bottom: 1rem;
		text-decoration-color: var(--cyan);
	}

	li:nth-child(1) {
		left: 15%;
		top: 15%;
		rotate: -12deg;
	}

	li:nth-child(2) {
		right: 15%;
		top: 15%;
		rotate: 12deg;
	}

	li:nth-child(3) {
		left: 15%;
		bottom: 15%;
		rotate: 12deg;
	}

	li:nth-child(4) {
		right: 15%;
		bottom: 15%;
		rotate: -12deg;
	}

	li.back {
		left: 50%;
		bottom: 15%;
		translate: -50% 0;
		scale: 0.7;
		transition: translate 0.5s;
	}

	li.back:hover {
		translate: -50% -1rem;
	}

	a {
		text-decoration: underline;
		text-decoration-color: var(--purple);
		text-decoration-thickness: 4px;
		-webkit-text-decoration-style: wavy;
		text-underline-offset: 6px;
		color: var(--black);
		transition: all 0.2s;
	}

	@media (prefers-color-scheme: dark) {
		h1 {
			text-decoration-color: var(--cyan);
		}

		a {
			text-decoration-color: var(--purple);
			color: var(--red);
		}

		a:hover {
			text-decoration-color: var(--cyan);
		}

		li.back a:hover {
			color: var(--cyan);
		}
	}

	@media screen and (max-width: 1024px) {
		li:nth-child(1) {
			left: 10%;
			top: 10%;
		}

		li:nth-child(2) {
			right: 10%;
			top: 10%;
		}

		li:nth-child(3) {
			left: 10%;
			bottom: 10%;
		}

		li:nth-child(4) {
			right: 10%;
			bottom: 10%;
		}
	}

	@media screen and (max-width: 768px) {
		h1 {
			display: block;
			text-decoration-thickness: 5px;
			order: -1;
		}

		nav {
			position: relative;
			padding-top: 1rem;
			height: auto;
		}

		nav.secondary li {
			display: none;
			width: 100%;
			left: 0;
			right: 0;
		}

		nav li.back {
			display: block;
			translate: 0 !important;
			transition: none !important;
			animation: none !important;
			animation-delay: 0s !important;
			animation-duration: 0s !important;
		}

		li {
			position: static;
			rotate: 0deg !important;
			margin-bottom: 4rem;
			top: 0;
		}

		a {
			text-decoration-thickness: 5px;
		}
	}

	@media screen and (max-width: 560px) {
		h1 {
			font-size: 2.5rem;
			text-decoration-thickness: 3px;
		}

		li {
			font-size: 2.5rem;
		}

		a {
			text-decoration-thickness: 3px;
		}
	}

	@media screen and (max-width: 440px) {
		h1 {
			font-size: 2rem;
			text-decoration-thickness: 2px;
		}

		li {
			font-size: 2rem;
		}

		a {
			text-decoration-thickness: 2px;
		}
	}
</style>
