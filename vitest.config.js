import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/test/setup.js'],
		watch: false,
		passWithNoTests: true,
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
