<div class="podcast">
	<a href="https://crossword.fm" target="_blank"
		><img alt="Crossword podcast art" src="/images/crossword.png" /></a
	>
	<div>
		<h2><a href="https://crossword.fm" target="_blank">Crossword</a></h2>
		<p>Perspectives on WordPress and the Open Web.</p>
	</div>
</div>
<div class="podcast">
	<a href="https://www.buzzsprout.com/2395469" target="_blank">
		<img alt="Async podcast art" src="/images/async.png" />
	</a>
	<div>
		<h2><a href="https://www.buzzsprout.com/2395469" target="_blank">Async</a></h2>
		<p>Async is a <a href="https://diggingforfire.blog/posts/turn-based-podcasting/">turn-based podcast</a>. It's a conversation about technology, app development, and remote work.</p>
	</div>
</div>

<img class="headphone" src="/images/headphone.png" alt="A headphone" />
<img class="headphone" src="/images/headphone.png" alt="A headphone" />

<style>
	.podcast {
		margin-bottom: 3rem;
		padding: 0;
		position: relative;
		display: flex;
		gap: 2rem;
		text-align: left;
	}

	.podcast:nth-child(even) {
		text-align: right;
		flex-direction: row-reverse;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 800;
		margin: 0 0 2rem 0;
	}

	img {
		width: 8rem;
		height: 8rem;
		rotate: -6deg;
		border: 4px solid var(--purple);
		border-radius: 1rem;
		background-color: var(--purple);
	}

	a:hover img {
		border-color: var(--cyan);
	}

	.podcast:nth-child(even) img {
		rotate: 6deg;
	}

	p {
		font-size: 1.5rem;
		max-width: 550px;
	}

	a {
		color: var(--black);
		-webkit-text-decoration-style: wavy;
		text-underline-offset: 4px;
		text-decoration-color: var(--purple);
		transition: all 0.2s;
	}

	a:hover {
		text-decoration-color: var(--cyan);
	}

	.headphone {
		position: absolute;
		z-index: -10;
		width: 3rem;
		height: auto;
		border: none;
		rotate: -16deg;
		top: 50%;
		margin-top: -16rem;
		right: 14rem;
		background: transparent;
	}

	.headphone:nth-of-type(2) {
		margin-top: -17rem;
		right: 7rem;
		rotate: 42deg;
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

	@media screen and (max-width: 768px), screen and (max-height: 884px) {
		.podcast:nth-child(even) {
			text-align: left;
			flex-direction: row;
		}

		img {
			width: 6rem;
			height: 6rem;
			rotate: 0deg !important;
		}

		.headphone {
			display: none;
		}
	}
	@media screen and (max-width: 560px), screen and (max-height: 560px) {
		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
</style>
