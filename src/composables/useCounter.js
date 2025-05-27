import { ref } from 'vue';

/**
 * Counter Composable
 * Reusable counter logic using Vue 3 Composition API
 *
 * @returns {Object} counter state and methods
 */
export function useCounter(initialValue = 0) {
	const counter = ref(initialValue);

	const incrementCounter = () => {
		counter.value++;
	};

	const decrementCounter = () => {
		counter.value--;
	};

	const resetCounter = () => {
		counter.value = initialValue;
	};

	return {
		counter,
		incrementCounter,
		decrementCounter,
		resetCounter,
	};
}
