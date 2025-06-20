<template>
	<div class="min-h-screen bg-base-100">
		<AppHeader />
		<main class="container mx-auto px-4 py-8">
			<section class="hero min-h-[60vh] flex items-center justify-center">
				<div class="hero-content text-center animate-fade-in">
					<div class="max-w-4xl">
						<h1 class="text-5xl font-bold text-base-content mb-6">About This Project</h1>
						<p class="text-lg text-base-content/70 mb-8">
							A modern Vue 3 + JavaScript template with Tailwind CSS, DaisyUI, and comprehensive tooling
						</p>
					</div>
				</div>
			</section>

			<section class="py-16">
				<div class="max-w-4xl mx-auto">
					<div class="grid md:grid-cols-2 gap-8">
						<!-- Features Card -->
						<div class="card bg-base-200 shadow-xl">
							<div class="card-body">
								<h2 class="card-title text-2xl mb-4">🚀 Features</h2>
								<ul class="space-y-2">
									<li class="flex items-center">
										<div class="badge badge-primary badge-sm mr-3"></div>
										Vue 3 + Composition API
									</li>
									<li class="flex items-center">
										<div class="badge badge-primary badge-sm mr-3"></div>
										Tailwind CSS + DaisyUI
									</li>
									<li class="flex items-center">
										<div class="badge badge-primary badge-sm mr-3"></div>
										Vite for fast development
									</li>
									<li class="flex items-center">
										<div class="badge badge-primary badge-sm mr-3"></div>
										Vitest for testing
									</li>
									<li class="flex items-center">
										<div class="badge badge-primary badge-sm mr-3"></div>
										ESLint + Prettier
									</li>
									<li class="flex items-center">
										<div class="badge badge-primary badge-sm mr-3"></div>
										SEO optimized
									</li>
								</ul>
							</div>
						</div>

						<!-- Stack Card -->
						<div class="card bg-base-200 shadow-xl">
							<div class="card-body">
								<h2 class="card-title text-2xl mb-4">🛠️ Tech Stack</h2>
								<div class="grid grid-cols-2 gap-2">
									<div class="badge badge-outline">Vue 3</div>
									<div class="badge badge-outline">JavaScript</div>
									<div class="badge badge-outline">Vite</div>
									<div class="badge badge-outline">Pinia</div>
									<div class="badge badge-outline">Vue Router</div>
									<div class="badge badge-outline">Tailwind CSS</div>
									<div class="badge badge-outline">DaisyUI</div>
									<div class="badge badge-outline">Vitest</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Getting Started -->
					<div class="card bg-base-200 shadow-xl mt-8">
						<div class="card-body">
							<h2 class="card-title text-2xl mb-4">🎯 Getting Started</h2>
							<div class="steps steps-vertical lg:steps-horizontal">
								<div class="step step-primary">
									<div class="text-left">
										<h3 class="font-bold">Use Template</h3>
										<p class="text-sm text-base-content/70">Click "Use this template" on GitHub</p>
									</div>
								</div>
								<div class="step step-primary">
									<div class="text-left">
										<h3 class="font-bold">Install Dependencies</h3>
										<p class="text-sm text-base-content/70">Run <code
												class="bg-base-300 px-1 rounded">npm install</code></p>
									</div>
								</div>
								<div class="step step-primary">
									<div class="text-left">
										<h3 class="font-bold">Setup Project</h3>
										<p class="text-sm text-base-content/70">Run <code
												class="bg-base-300 px-1 rounded">npm run setup</code></p>
									</div>
								</div>
								<div class="step step-primary">
									<div class="text-left">
										<h3 class="font-bold">Start Developing</h3>
										<p class="text-sm text-base-content/70">Run <code
												class="bg-base-300 px-1 rounded">npm run dev</code></p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Actions -->
					<div class="text-center mt-12">
						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<router-link to="/" class="btn btn-primary btn-lg">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
									stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
								</svg>
								Back to Home
							</router-link>
							<a href="https://github.com/peterbenoit/ProjectTemplate2025" target="_blank"
								rel="noopener noreferrer" class="btn btn-outline btn-lg">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor"
									viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
								View Source
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
	name: 'About',
	components: {
		AppHeader: Header,
	},
};
</script>

<style scoped>
/* No custom styles needed - using Tailwind/DaisyUI classes */
</style>
