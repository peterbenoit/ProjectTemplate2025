<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
/**
 * Root Vue App Component
 * Entry point for the entire application
 */
export default {
	name: 'App',
};
</script>

<style>
/* Global app styles */
#app {
	min-height: 100vh;
	font-family:
		-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
</style>
