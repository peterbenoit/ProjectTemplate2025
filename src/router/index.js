import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

/**
 * Vue Router Configuration
 * Define your application routes here
 */
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// Route level code-splitting for better performance
		component: () => import('../views/About.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// Return desired scroll position
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

export default router;
