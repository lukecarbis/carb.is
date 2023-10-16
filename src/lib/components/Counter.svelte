<script>
	export let pageViews = 1;
	$: formattedPageViews = new Intl.NumberFormat().format(pageViews);
</script>

<p>This site has been visited <strong><code>{formattedPageViews}</code></strong> times!</p>

<style>
	p {
		font-size: 0.9rem;
		padding: 0 2rem 1.5rem;
		margin: 0 auto;
		max-width: 48rem;
		box-sizing: border-box;
		color: var(--black);
	}
	@media (prefers-color-scheme: dark) {
		p {
			color: var(--red);
		}
	}
</style>
