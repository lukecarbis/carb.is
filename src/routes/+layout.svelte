<script>
	import { blur } from 'svelte/transition';
	import Nav from '$lib/components/Nav.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import Acknowledgement from '$lib/components/Acknowledgement.svelte';

	export let data;
	const { pageViews } = data;
	$: ({ pathname } = data);
</script>

{#key pathname}
	<div in:blur={{ duration: 500 }} out:blur={{ duration: 500 }}>
		<slot />
	</div>
{/key}

<Nav {pathname} />
<Counter {pageViews} />
<Acknowledgement />

<style>
	div {
		padding: 0 2rem;
		position: relative;
		z-index: 10;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	@media screen and (max-width: 768px), screen and (max-height: 884px) {
		div {
			justify-content: start;
			flex: 0;
		}
	}
</style>
