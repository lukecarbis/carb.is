<script>
	let currentTime = new Date();
	setInterval(() => (currentTime = new Date()), 10000);

	let batteryPercentage = 42;

	if ('getBattery' in navigator) {
		navigator.getBattery().then((battery) => {
			batteryPercentage = battery.level * 100;

			battery.addEventListener('levelchange', () => {
				batteryPercentage = battery.level * 100;
			});
		});
	}
</script>

<div class="phone">
	<div class="screen">
		<div class="island" />
		<div class="status">
			<span>
				{currentTime.toLocaleTimeString('en-US', {
					hour: '2-digit',
					minute: '2-digit',
					hour12: false
				})}
			</span>
			<span>
				<span class="battery" style="--battery-percentage: {batteryPercentage}">
					{batteryPercentage}
				</span>
			</span>
		</div>
		<div class="app">
			<a href="https://amberhour.app" target="_blank">
				<img alt="Amber Hour app icon" src="/images/amber-hour.png" />
			</a>
			<div>
				<h2><a href="https://amberhour.app" target="_blank">Amber Hour</a></h2>
				<p>Unlock deliciously-priced bevvies.</p>
				<p><strong>Coming Soon</strong></p>
			</div>
		</div>
		<div class="app">
			<img alt="Confetti app icon" src="/images/confetti.png" />
			<div>
				<h2>Confetti</h2>
				<p>A to-do list for the whole family.</p>
				<p><strong>WIP!</strong></p>
			</div>
		</div>
	</div>
</div>

<style>
	.phone {
		border: 6px solid var(--indigo);
		border-radius: 2rem;
		padding: 1rem;
		background: var(--black);
		rotate: -4deg;
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
		padding: 3.5rem 1rem 1rem;
		box-sizing: border-box;
	}

	.island {
		position: absolute;
		top: 1rem;
		left: 50%;
		width: 8rem;
		height: 1rem;
		translate: -50% 0;
		background: var(--black);
		border-radius: 1rem;
	}

	.status {
		position: absolute;
		top: 1rem;
		left: 0;
		padding: 0 1rem;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.battery {
		background: linear-gradient(
			to right,
			var(--indigo) 0%,
			var(--indigo) calc(var(--battery-percentage) * 1%),
			color-mix(in srgb, var(--indigo), transparent) calc(var(--battery-percentage) * 1%),
			color-mix(in srgb, var(--indigo), transparent) 100%
		);
		border-radius: 6px;
		padding: 0 0.5rem;
		color: var(--white);
		font-size: 0.9rem;
		display: block;
		margin-top: -1px;
	}

	.battery:after {
		position: absolute;
		top: 0;
		right: 1em;
		content: '';
		display: block;
		width: 3px;
		height: 8px;
		border-radius: 0 3px 3px 0;
		margin-top: 3px;
		margin-right: -2px;
		background: color-mix(in srgb, var(--indigo), transparent);
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
		-webkit-text-decoration-style: wavy;
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

		.app {
			border-bottom-color: var(--indigo);
		}

		.status {
			color: var(--gray);
		}

		.battery {
			background: linear-gradient(
				to right,
				var(--gray) 0%,
				var(--gray) calc(var(--battery-percentage) * 1%),
				color-mix(in srgb, var(--white), transparent) calc(var(--battery-percentage) * 1%),
				color-mix(in srgb, var(--white), transparent) 100%
			);
			color: var(--black);
		}

		.battery:after {
			background: color-mix(in srgb, var(--white), transparent);
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
