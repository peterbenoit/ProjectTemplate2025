import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	root: '.',
	publicDir: 'public',
	// Fix base URL - Vercel doesn't need repository-specific paths
	base: '/',
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		minify: 'terser',
		sourcemap: true,
		rollupOptions: {
			input: {
				main: './index.html',
			},
		},
	},
	server: {
		port: 3000,
		host: true,
		open: true,
	},
	css: {
		devSourcemap: true,
	},
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@utils': '/src/utils',
			'@composables': '/src/composables',
		},
	},
	define: {
		__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
	},
});
