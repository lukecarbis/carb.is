<script>
	import { blur } from 'svelte/transition';
	import Nav from '$lib/components/Nav.svelte';

	export let data;
	$: ({ pathname } = data);
</script>

{#key pathname}
	<div in:blur={{ duration: 500 }} out:blur={{ duration: 500 }}>
		<slot />
	</div>
{/key}

<Nav {pathname} />

<style>
	div {
		padding: 0 2rem;
		position: relative;
		z-index: 10;
	}
</style>
