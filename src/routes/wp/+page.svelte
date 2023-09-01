<script>
	import WordPressLogo from '$lib/svg/wp.svelte';
	import GoogleLogo from '$lib/svg/google.svelte';
	import ElementorLogo from '$lib/svg/elementor.svelte';
	import XWPLogo from '$lib/svg/xwp.svelte';
	import WPEngineLogo from '$lib/svg/wpengine.svelte';
	import NewscorpLogo from '$lib/svg/newscorp.svelte';
	import { email } from '$lib/email.js';
</script>

<div class="browser">
	<div class="wp">
		<div class="adminbar">
			<div class="home"><WordPressLogo /></div>
			<span class="dot blue" />
			<span class="dot" />
			<span class="dot" />
			<span class="dot" />
			<span class="button" />
		</div>
		<div class="content">
			<h2>Fractional Engineering Lead</h2>
			<p>I work with WordPress products and agencies to level-up their dev team.</p>
			<a href="https://calendly.com/carbis/30min" class="button" target="_blank">Let's chat</a>
			<p class="description">Book a 30 minute call – no charge.</p>
			<p>
				I’ve worked at companies of all sizes, helping to set up development processes and
				engineering best practices.
			</p>
			<p>I'll help you with:</p>
			<ul>
				<li>Code Review</li>
				<li>Version Control Strategy</li>
				<li>Linting</li>
				<li>Deployment</li>
				<li>Localization</li>
				<li>Continuous Integration</li>
				<li>Plugin Architecture</li>
				<li>Dependency Management</li>
				<li>Plugin Directory Optimisation</li>
				<li>Developer Mentoring</li>
			</ul>
			<p><span class="things-like-that" />… and things like that.</p>
			<p>
				Want to know more? Shoot me an
				<a href="/email.txt" on:keydown={email} on:click={email}>email</a>, find me on
				<a href="https://wordpress.slack.com/team/U02RQ0V2B" target="_blank">Slack</a>, or
				<a href="https://calendly.com/carbis/30min" target="_blank">book a call</a>.
			</p>
		</div>
		<div class="sidebar">
			<h3>A few folks I've worked&nbsp;with:</h3>
			<div class="logo"><GoogleLogo /></div>
			<div class="logo"><ElementorLogo /></div>
			<div class="logo"><XWPLogo /></div>
			<div class="logo"><WPEngineLogo /></div>
			<div class="logo"><NewscorpLogo /></div>
		</div>
	</div>
</div>

<style>
	.browser {
		border: 6px solid var(--indigo);
		border-radius: 1.5rem;
		background: var(--indigo);
		width: 52vw;
		max-width: 52rem;
		height: 52vh;
		padding-top: 1.5rem;
		box-sizing: border-box;
		overflow: hidden;
	}

	.wp {
		border-radius: 0.5rem;
		overflow: hidden;
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-areas:
			'adminbar adminbar adminbar'
			'content content sidebar';
		grid-template-rows: 2rem 1fr;
		background: var(--white);
		color: var(--black);
	}

	.adminbar {
		grid-area: adminbar;
		background: var(--white);
		border-bottom: 2px solid var(--gray);
		height: 2rem;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.adminbar .home {
		height: calc(100% + 2px);
		background: var(--black);
		color: var(--white);
		padding: 4px;
		box-sizing: border-box;
		margin-right: 0.5rem;
	}

	.adminbar .dot {
		display: block;
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 50%;
		background: var(--gray);
		margin: 0 0.5rem;
	}

	.adminbar .dot:first-of-type {
		background: var(--indigo);
	}

	.adminbar .button {
		display: block;
		width: 4rem;
		margin-left: auto;
		margin-right: 0.5rem;
		height: 1.2rem;
		background: var(--gray);
	}

	.content {
		grid-area: content;
		box-sizing: border-box;
		padding: 0 2rem 1rem;
		text-align: left;
		overflow-y: scroll;
	}

	.content p {
		font-size: 1.2rem;
		line-height: 1.5;
	}

	.content .description {
		font-size: 1rem;
		color: var(--orange);
	}

	.content .description:before {
		display: inline-block;
		rotate: 90deg;
		translate: 0 -5px;
		margin-left: 4rem;
		margin-right: 6px;
		content: '↵';
	}

	.content li {
		margin-bottom: 6px;
	}

	.content .button {
		display: inline-block;
		text-decoration: none;
		border-radius: 6px;
		background: var(--orange);
		color: var(--white);
		font-size: 1.5rem;
		font-weight: 700;
		padding: 0.5rem 1rem;
		cursor: pointer;
		box-shadow: 0 4px 0 var(--orange-dark);
	}

	.content .button:hover {
		color: var(--white);
		animation: wiggle 3s infinite;
		background-color: var(--purple);
		box-shadow: 0 4px 0 var(--purple-dark);
	}

	.content .button:active {
		box-shadow: none;
		translate: 0 4px;
	}

	.content a {
		color: var(--purple);
		-webkit-text-decoration-style: wavy;
		text-underline-offset: 4px;
		text-decoration-color: var(--purple);
		transition: all 0.2s;
	}

	.content a:hover {
		color: var(--red);
		text-decoration-color: var(--cyan);
	}

	.content .things-like-that {
		display: inline-block;
		width: 8rem;
	}

	.sidebar {
		grid-area: sidebar;
		border-left: 2px solid var(--gray);
		box-sizing: border-box;
		overflow-y: scroll;
		max-width: 12rem;
	}

	.sidebar h3 {
		font-size: 1rem;
		font-weight: 500;
		padding: 1rem 0.5rem;
		margin: 0;
		border-bottom: 2px solid var(--gray);
	}

	.sidebar .logo {
		display: block;
		padding: 1rem 1.5rem;
		border-bottom: 2px solid var(--gray);
		text-align: center;
		color: var(--gray-dark);
	}

	.sidebar .logo:nth-of-type(1):hover {
		color: var(--red);
	}

	.sidebar .logo:nth-of-type(2):hover {
		color: var(--purple);
	}

	.sidebar .logo:nth-of-type(3):hover {
		color: var(--cyan);
	}

	.sidebar .logo:nth-of-type(4):hover {
		color: var(--pink);
	}

	.sidebar .logo:nth-of-type(5):hover {
		color: var(--orange);
	}

	@keyframes wiggle {
		0% {
			rotate: 0deg;
		}
		4% {
			rotate: -2deg;
		}
		8% {
			rotate: 2deg;
		}
		12% {
			rotate: 0deg;
		}
		100% {
			rotate: 0deg;
		}
	}

	@media screen and (max-width: 1024px) {
		.browser {
			width: 72vw;
		}
	}

	@media screen and (max-width: 768px) {
		.wp {
			display: block;
			overflow-y: scroll;
			position: relative;
		}
		.adminbar {
			position: sticky;
			top: 0;
		}
		.content {
			width: 100%;
		}
		.content .things-like-that {
			width: 0;
		}
		.sidebar {
			margin-top: 1rem;
			border-top: 2px solid var(--gray);
			max-width: none;
		}
	}
	@media screen and (max-width: 560px) {
	}
</style>
