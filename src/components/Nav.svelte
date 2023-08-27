<script>
	export let secondary = false;
	export let selected = -1;
</script>

{#if secondary && selected !== -1}
	<h1>
		{selected === 0 ? 'WordPress' : ''}
		{selected === 1 ? 'Podcasts' : ''}
		{selected === 2 ? 'Apps' : ''}
		{selected === 3 ? 'Blog' : ''}
	</h1>
{/if}
<nav class={secondary ? 'secondary' : ''}>
	<ul>
		<li class={selected === 0 ? 'selected' : ''}><a href="#">WordPress</a></li>
		<li class={selected === 1 ? 'selected' : ''}><a href="/podcasts">Podcasts</a></li>
		<li class={selected === 2 ? 'selected' : ''}><a href="#">Apps</a></li>
		<li class={selected === 3 ? 'selected' : ''}><a href="https://blog.carb.is">Blog</a></li>
		{#if secondary}
			<li><a href="/" aria-label="Back">☚ Back</a></li>
		{/if}
	</ul>
</nav>

<style>
	h1 {
		display: none;
		font-family: 'Rubik', sans-serif;
		font-weight: 800;
		font-size: 3rem;
		text-align: center;
		margin-top: 4rem;
		margin-bottom: 5rem;
		text-decoration: underline;
		text-decoration-color: var(--cyan);
		text-decoration-thickness: 6px;
		text-decoration-style: wavy;
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
		font-family: 'Rubik', sans-serif;
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

	li:nth-child(5) {
		left: 50%;
		bottom: 15%;
		translate: -50% 0;
		scale: 0.7;
	}

	li:nth-child(5):hover {
		translate: -50% -1rem;
	}

	a {
		text-decoration: underline;
		text-decoration-color: var(--purple);
		text-decoration-thickness: 6px;
		text-decoration-style: wavy;
		text-underline-offset: 6px;
		color: var(--black);
		transition: all 0.2s;
	}

	.selected a,
	a:hover {
		text-decoration-color: var(--cyan);
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

		li:nth-child(5) a:hover {
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

		nav.secondary li:nth-child(5) {
			display: block;
			translate: 0 !important;
		}

		li {
			position: relative;
			rotate: 0deg !important;
			margin-bottom: 4rem;
		}

		a {
			text-decoration-thickness: 5px;
		}
	}

	@media screen and (max-width: 560px) {
		h1 {
			font-size: 2.5rem;
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
		}

		li {
			font-size: 2rem;
		}

		a {
			text-decoration-thickness: 2px;
		}
	}
</style>
