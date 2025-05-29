<template>
	<div class="min-h-screen bg-base-100">
		<AppHeader />
		<main class="container mx-auto px-4 py-8">
			<section class="hero min-h-[60vh] flex items-center justify-center">
				<div class="hero-content text-center animate-fade-in">
					<div class="max-w-md">
						<h1 class="text-5xl font-bold text-base-content mb-4">{{ title }}</h1>
						<p class="text-lg text-base-content/70 mb-8">{{ description }}</p>

						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<button class="btn btn-primary btn-lg" @click="incrementCounter">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
									stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
								Clicked {{ counter }} times
							</button>

							<a :href="deployUrl" target="_blank" rel="noopener noreferrer"
								class="btn btn-outline btn-lg">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
									class="w-5 h-5">
									<path fill-rule="evenodd"
										d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
										clip-rule="evenodd"></path>
								</svg>
								Deploy to Vercel
							</a>
						</div>
					</div>
				</div>
			</section>

			<section class="py-16">
				<div class="max-w-2xl mx-auto">
					<Counter :count="counter" @increment="incrementCounter" />
				</div>
			</section>
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
		const title = ref('[PROJECT_NAME]');
		const description = ref('[PROJECT_DESCRIPTION]');

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
/* No custom styles needed - using Tailwind/DaisyUI classes */
</style>
