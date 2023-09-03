<script>
	import { blur } from 'svelte/transition';
	import Nav from '$lib/components/Nav.svelte';
	import Acknowledgement from '$lib/components/Acknowledgement.svelte';

	export let data;
	$: ({ pathname } = data);
</script>

{#key pathname}
	<div in:blur={{ duration: 500 }} out:blur={{ duration: 500 }}>
		<slot />
	</div>
{/key}

<Nav {pathname} />
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
	@media screen and (max-width: 768px), screen and (max-height: 1024px) {
		div {
			justify-content: start;
			flex: 0;
		}
	}
</style>
