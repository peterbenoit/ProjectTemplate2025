<template>
	<div class="home">
		<AppHeader />
		<main class="main-content">
			<section class="hero">
				<h1>{{ title }}</h1>
				<p>{{ description }}</p>

				<div class="action-buttons">
					<button class="cta-button primary" @click="incrementCounter">
						Clicked {{ counter }} times
					</button>

					<a :href="deployUrl" target="_blank" rel="noopener noreferrer" class="cta-button deploy">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
							class="deploy-icon">
							<path fill-rule="evenodd"
								d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
								clip-rule="evenodd"></path>
						</svg>
						Deploy to Vercel
					</a>
				</div>
			</section>

			<Counter :count="counter" @increment="incrementCounter" />
		</main>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
import Header from '../components/Header.vue';
import Counter from '../components/Counter.vue';
import { useCounter } from '../composables/useCounter';

/**
 * Home View Component
 * Main landing page of the application
 */
export default {
	name: 'Home',
	components: {
		AppHeader: Header,
		Counter,
	},
	setup() {
		const title = ref('ProjectTemplate2025');
		const description = ref('A modern Vue + JavaScript project template');

		// Using a composable for counter logic
		const { counter, incrementCounter } = useCounter();

		// Deploy to Vercel URL (this will be replaced by the setup script)
		const deployUrl = computed(() => {
			const repoUrl = '[PROJECT_REPO]';
			const projectName = '[PROJECT_NAME]';
			const encodedRepoUrl = encodeURIComponent(repoUrl);
			const encodedProjectName = encodeURIComponent(projectName.toLowerCase().replace(/[^a-z0-9]/g, '-'));

			return `https://vercel.com/new/clone?repository-url=${encodedRepoUrl}&project-name=${encodedProjectName}&repository-name=${encodedProjectName}`;
		});

		return {
			title,
			description,
			counter,
			incrementCounter,
			deployUrl,
		};
	},
};
</script>

<style scoped>
.home {
	padding: 2rem;
}

.main-content {
	max-width: 1200px;
	margin: 0 auto;
}

.hero {
	text-align: center;
	padding: 4rem 0;
}

.hero h1 {
	font-size: 3rem;
	margin-bottom: 1rem;
	color: #2c3e50;
}

.hero p {
	font-size: 1.2rem;
	color: #7f8c8d;
	margin-bottom: 2rem;
}

.action-buttons {
	display: flex;
	gap: 1rem;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 2rem;
}

.cta-button {
	border: none;
	padding: 1rem 2rem;
	border-radius: 8px;
	font-size: 1.1rem;
	cursor: pointer;
	transition: all 0.3s ease;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	font-weight: 500;
}

.cta-button.primary {
	background: #3498db;
	color: white;
}

.cta-button.primary:hover {
	background: #2980b9;
	transform: translateY(-2px);
}

.cta-button.deploy {
	background: #000;
	color: white;
	border: 2px solid #000;
}

.cta-button.deploy:hover {
	background: #fff;
	color: #000;
	transform: translateY(-2px);
}

.deploy-icon {
	width: 1.2em;
	height: 1.2em;
}

@media (max-width: 768px) {
	.action-buttons {
		flex-direction: column;
		align-items: center;
	}

	.cta-button {
		width: 100%;
		max-width: 280px;
		justify-content: center;
	}
}
</style>
