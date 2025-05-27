<template>
	<div class="home">
		<AppHeader />
		<main class="main-content">
			<section class="hero">
				<h1>{{ title }}</h1>
				<p>{{ description }}</p>
				<button class="cta-button" @click="incrementCounter">
					Clicked {{ counter }} times
				</button>
			</section>

			<Counter :count="counter" @increment="incrementCounter" />
		</main>
	</div>
</template>

<script>
import { ref } from 'vue';
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

		return {
			title,
			description,
			counter,
			incrementCounter,
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

.cta-button {
	background: #3498db;
	color: white;
	border: none;
	padding: 1rem 2rem;
	border-radius: 8px;
	font-size: 1.1rem;
	cursor: pointer;
	transition: background 0.3s ease;
}

.cta-button:hover {
	background: #2980b9;
}
</style>
