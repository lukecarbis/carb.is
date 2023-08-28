<div class="phone">
	<div class="screen">
		<div class="island" />
		<div class="app">
			<a href="https://amberhour.app">
				<img alt="Amber Hour app icon" src="/images/amber-hour.png" />
			</a>
			<div>
				<h2><a href="https://amberhour.app">Amber Hour</a></h2>
				<p>Unlock deliciously-priced bevvies every month.</p>
				<p><strong>Coming Soon</strong></p>
			</div>
		</div>
		<div class="app">
			<img alt="Confetti app icon" src="/images/confetti.png" />
			<div>
				<h2>Confetti</h2>
				<p>A to-do list for the whole family.</p>
				<p><strong>Coming Soon</strong></p>
			</div>
		</div>
	</div>
</div>

<style>
	.phone {
		border: 6px solid var(--black);
		border-radius: 2rem;
		padding: 1rem;
		background: var(--indigo);
		rotate: -6deg;
		width: 18rem;
		height: 32rem;
		margin-top: -4rem;
	}

	.screen {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
		background: var(--white);
		position: relative;
		padding: 4rem 1rem 1rem;
		box-sizing: border-box;
	}

	.island {
		position: absolute;
		top: 1rem;
		left: 50%;
		width: 8rem;
		height: 1rem;
		translate: -50% 0;
		background: var(--indigo);
		border-radius: 1rem;
	}

	.app {
		padding-bottom: 1.5rem;
		margin-bottom: 1.5rem;
		display: flex;
		gap: 1rem;
		text-align: left;
		width: 100%;
		border-bottom: 2px solid var(--gray);
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 800;
		margin: 0 0 0.5rem 0;
	}

	p {
		margin: 0 0 0.5rem;
	}

	p:last-of-type {
		margin-bottom: 0;
	}

	strong {
		color: var(--indigo);
	}

	img {
		width: 4rem;
		height: 4rem;
		border: 4px solid var(--white);
		border-radius: 1rem;
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

	a:hover img {
		border-color: var(--cyan);
	}

	@media (prefers-color-scheme: dark) {
		.screen {
			background: var(--black);
		}

		img {
			border: 4px solid var(--black);
		}

		a {
			color: var(--red);
			text-decoration-color: var(--purple);
			transition: all 0.2s;
		}

		strong {
			color: var(--purple);
		}
	}

	@media screen and (max-width: 768px) {
		.phone {
			margin-top: 0;
			margin-bottom: 2rem;
		}
	}
</style>
