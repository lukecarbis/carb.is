<script>
	import { currentTime } from '$lib/time.js';
	import { batteryPercentage } from '$lib/battery.js';
</script>

<div class="phone">
	<div class="screen">
		<div class="island" />
		<div class="status">
			<span>
				{$currentTime.toLocaleTimeString('en-US', {
					hour: '2-digit',
					minute: '2-digit',
					hour12: false
				})}
			</span>
			<span>
				<span class="battery" style="--battery-percentage: {$batteryPercentage}">
					{$batteryPercentage}
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
				<p><strong>Available Now</strong></p>
			</div>
		</div>
		<div class="app">
			<a href="https://apps.apple.com/app/id6476107960" target="_blank">
				<img alt="Zmanim Pro app icon" src="/images/zmanim-pro.png" />
			</a>
			<div>
				<h2><a href="https://apps.apple.com/app/id6476107960" target="_blank">Zmanim Pro</a></h2>
				<p>Accurate halachic times, anywhere in the world.</p>
				<p><strong>Available Now</strong></p>
			</div>
		</div>
		<div class="app">
			<a href="https://apps.apple.com/au/app/tonic-social-cleaner/id6747209298" target="_blank">
				<img alt="Tonic app icon" src="/images/tonic.png" />
			</a>
			<div>
				<h2><a href="https://apps.apple.com/au/app/tonic-social-cleaner/id6747209298" target="_blank">Tonic</a></h2>
				<p>Remove login nags from Facebook and Instagram.</p>
				<p><strong>Available Now</strong></p>
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
		margin: 0 auto;
	}

	.screen {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
		background: var(--white);
		position: relative;
		padding: 3.5rem 1rem 1rem;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	.island {
		position: fixed;
		top: 2rem;
		left: 50%;
		width: 6rem;
		height: 1rem;
		translate: -50% 0;
		background: var(--black);
		border-radius: 1rem;
		display: fixed;
		z-index: 10;
	}

	.status {
		position: fixed;
		top: 1rem;
		left: 2rem;
		padding: 1rem 0 0.5rem;
		box-sizing: border-box;
		width: calc(100% - 4rem);
		display: flex;
		justify-content: space-between;
		background: #fff;
	}

	.battery {
		background: linear-gradient(
			to right,
			var(--indigo) 0%,
			var(--indigo) calc(var(--battery-percentage) * 1%),
			var(--indigo-transparent) calc(var(--battery-percentage) * 1%),
			var(--indigo-transparent) 100%
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
		top: 1rem;
		right: 0;
		content: '';
		display: block;
		width: 3px;
		height: 8px;
		border-radius: 0 3px 3px 0;
		margin-top: 3px;
		margin-right: -2px;
		background: var(--indigo-transparent);
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
		-webkit-text-decoration-style: wavy !important;
		text-decoration-style: solid; /* Wavy looks weird in non-webkit browsers */
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
				var(--white-transparent) calc(var(--battery-percentage) * 1%),
				var(--white-transparent) 100%
			);
			color: var(--black);
		}

		.battery:after {
			background: var(--white-transparent);
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

	@media screen and (max-width: 768px), screen and (max-height: 884px) {
		.phone {
			margin-top: 0;
			margin-bottom: 2rem;
		}
	}
</style>
