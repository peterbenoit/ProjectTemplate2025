<template>
	<div class="about">
		<AppHeader />
		<main class="main-content">
			<h1>About This Template</h1>
			<p>
				This is a modern Vue 3 + JavaScript project template designed for rapid development.
			</p>

			<section class="features">
				<h2>Features</h2>
				<ul>
					<li>Vue 3 with Composition API</li>
					<li>Vue Router for navigation</li>
					<li>Pinia for state management</li>
					<li>Vite for fast development</li>
					<li>ESLint + Prettier for code quality</li>
					<li>Vitest for testing</li>
					<li>Modern CSS with custom properties</li>
				</ul>
			</section>
		</main>
	</div>
</template>

<script>
import Header from '../components/Header.vue';

/**
 * About View Component
 * Information about the project template
 */
export default {
	name: 'About',
	components: {
		AppHeader: Header,
	},
};
</script>

<style scoped>
.about {
	padding: 2rem;
}

.main-content {
	max-width: 800px;
	margin: 0 auto;
}

.about h1 {
	color: #2c3e50;
	margin-bottom: 1rem;
}

.features {
	margin-top: 2rem;
}

.features h2 {
	color: #34495e;
	margin-bottom: 1rem;
}

.features ul {
	list-style-type: none;
	padding: 0;
}

.features li {
	background: #ecf0f1;
	margin: 0.5rem 0;
	padding: 1rem;
	border-radius: 8px;
	border-left: 4px solid #3498db;
}
</style>
