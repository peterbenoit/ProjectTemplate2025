<template>
	<header class="navbar bg-base-100 shadow-lg">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"></path>
					</svg>
				</label>
				<ul tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
					<li><router-link to="/" class="text-base-content">Home</router-link></li>
					<li><router-link to="/about" class="text-base-content">About</router-link></li>
				</ul>
			</div>
			<router-link to="/" class="btn btn-ghost text-xl font-bold text-primary">
				[PROJECT_NAME]
			</router-link>
		</div>

		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><router-link to="/" class="text-base-content">Home</router-link></li>
				<li><router-link to="/about" class="text-base-content">About</router-link></li>
			</ul>
		</div>

		<div class="navbar-end">
			<button class="btn btn-ghost btn-circle" @click="toggleTheme"
				:title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
				<svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd"
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						clip-rule="evenodd" />
				</svg>
				<svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>
			</button>
		</div>
	</header>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
	name: 'Header',
	setup() {
		const isDark = ref(false);

		const toggleTheme = () => {
			isDark.value = !isDark.value;
			const theme = isDark.value ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
		};

		onMounted(() => {
			const savedTheme = localStorage.getItem('theme') || 'light';
			isDark.value = savedTheme === 'dark';
			document.documentElement.setAttribute('data-theme', savedTheme);
		});

		return {
			isDark,
			toggleTheme,
		};
	},
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
