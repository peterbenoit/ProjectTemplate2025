import { defineStore } from 'pinia';

/**
 * Main App Store
 * Global state management using Pinia
 */
export const useAppStore = defineStore('app', {
	state: () => ({
		appName: 'ProjectTemplate2025',
		version: '1.0.0',
		theme: 'light',
		user: null,
	}),

	getters: {
		/**
		 * Get formatted app info
		 */
		appInfo: state => `${state.appName} v${state.version}`,

		/**
		 * Check if user is logged in
		 */
		isLoggedIn: state => !!state.user,
	},

	actions: {
		/**
		 * Toggle between light and dark theme
		 */
		toggleTheme() {
			this.theme = this.theme === 'light' ? 'dark' : 'light';
		},

		/**
		 * Set user data
		 * @param {Object} userData - User information
		 */
		setUser(userData) {
			this.user = userData;
		},

		/**
		 * Clear user data (logout)
		 */
		clearUser() {
			this.user = null;
		},
	},
});
