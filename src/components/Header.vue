<template>
	<header class="header">
		<nav class="nav">
			<router-link to="/" class="logo"> ProjectTemplate2025 </router-link>

			<ul class="nav-links">
				<li>
					<router-link to="/" class="nav-link"> Home </router-link>
				</li>
				<li>
					<router-link to="/about" class="nav-link"> About </router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
/**
 * Header Component
 * Main navigation component used across the application
 */
export default {
	name: 'AppHeader',
};
</script>

<style scoped>
.header {
	background: #2c3e50;
	padding: 1rem 0;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
}

.logo {
	color: #ecf0f1;
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: bold;
}

.nav-links {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	gap: 2rem;
}

.nav-link {
	color: #bdc3c7;
	text-decoration: none;
	transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
	color: #3498db;
}

@media (max-width: 768px) {
	.nav {
		padding: 0 1rem;
	}

	.nav-links {
		gap: 1rem;
	}
}
</style>
