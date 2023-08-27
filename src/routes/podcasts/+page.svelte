<script>
	import Nav from '../../components/Nav.svelte';
</script>

<div>
	<h2><a href="https://crossword.fm">Crossword</a></h2>
	<p>Perspectives on WordPress and the Open Web.</p>
</div>
<div>
	<h2><a href="#">Ultra Max Pro</a></h2>
	<p>App development and the Apple ecosystem.</p>
</div>

<Nav secondary={true} selected={1} />

<style>
	div {
		margin-bottom: 3rem;
		position: relative;
		z-index: 10;
		padding: 0 2rem;
	}

	h2 {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 800;
		font-family: 'Rubik', sans-serif;
		margin: 0 0 2rem 0;
	}

	p {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 500;
		font-family: 'Rubik', sans-serif;
	}

	a {
		color: var(--black);
		text-decoration-style: wavy;
		text-underline-offset: 4px;
		text-decoration-color: var(--purple);
		transition: all 0.2s;
	}

	a:hover {
		text-decoration-color: var(--cyan);
	}

	@media (prefers-color-scheme: dark) {
		a {
			color: var(--red);
			text-decoration-color: var(--purple);
		}
		a:hover {
			text-decoration-color: var(--cyan);
		}
	}

	@media screen and (max-width: 560px) {
		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
</style>
