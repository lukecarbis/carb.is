<script>
	export let title = '';
	export let dir = 'ltr';
	export let arch = 40;
</script>

<h1 style="--length: {title.length}; --arch: {arch}" aria-label={title} {dir}>
	{#each title as letter, index}
		<span style="--num: {dir === 'rtl' ? title.length - index - 1 : index}">
			{#if letter === ' '}
				&nbsp;
			{:else}
				{letter}
			{/if}
		</span>
	{/each}
</h1>

<style>
	h1 {
		font-weight: 800;
		font-size: 6rem;
		text-transform: uppercase;
		letter-spacing: 4px;
		cursor: default;
		margin: 0 auto 2rem;
	}

	h1 span {
		position: relative;
		top: 0;
		display: inline-block;
		transform-origin: center bottom;
		rotate: calc((var(--arch) / (var(--length) - 1) * var(--num) - 0.5 * var(--arch)) * 1deg);
		translate: 0
			calc(
				(
						6 * var(--arch) / ((var(--length) - 1) * (var(--length) - 1)) * var(--num) *
							(var(--num) - var(--length) + 1)
					) * 1px
			);
		text-shadow: var(--shadow),
			calc((-2 / (var(--length) - 1) * var(--num) + 1) * -6px) 6px 2px rgba(0, 0, 0, 0.2);
		transition: all 0.5s;
		--shadow-color: var(--orange);
		--shadow: calc((-2 / (var(--length) - 1) * var(--num) + 1) * -1px) 1px 0 var(--shadow-color),
			calc((-2 / (var(--length) - 1) * var(--num) + 1) * -2px) 2px 0 var(--shadow-color),
			calc((-2 / (var(--length) - 1) * var(--num) + 1) * -3px) 3px 0 var(--shadow-color),
			calc((-2 / (var(--length) - 1) * var(--num) + 1) * -4px) 4px 0 var(--shadow-color);
	}

	h1 span:hover {
		top: -10px;
		text-shadow: var(--shadow), 0 30px 15px rgba(0, 0, 0, 0.15);
	}

	@media (prefers-color-scheme: dark) {
		h1 {
			color: var(--red);
		}

		h1 span {
			--shadow-color: var(--purple);
		}
	}

	@media screen and (max-width: 1024px) {
		h1 {
			font-size: 5rem;
		}
	}

	@media screen and (max-width: 768px) {
		h1 {
			margin-top: 3rem;
			font-size: 4rem;
			translate: 0 0;
		}
		h1 span {
			text-shadow: none;
			rotate: 0deg;
			translate: none !important;
		}

		h1 span:hover {
			top: 0;
			text-shadow: none;
		}
	}

	@media screen and (max-width: 560px) {
		h1 {
			font-size: 3rem;
			letter-spacing: 1px;
			--arch: 30;
		}
		h1 span {
			--shadow: calc((-2 / (var(--length) - 1) * var(--num) + 1) * -1px) 1px 0 var(--shadow-color),
				calc((-2 / (var(--length) - 1) * var(--num) + 1) * -2px) 2px 0 var(--shadow-color);
		}
	}

	@media screen and (max-width: 440px) {
		h1 {
			font-size: 2.5rem;
		}
		h1 span {
			--shadow: calc((-2 / (var(--length) - 1) * var(--num) + 1) * -1px) 1px 0 var(--shadow-color);
		}
	}
</style>
