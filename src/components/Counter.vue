<template>
	<div class="card bg-base-200 shadow-xl">
		<div class="card-body text-center">
			<h2 class="card-title justify-center text-2xl mb-4">Counter Component</h2>
			<div class="stats shadow bg-base-100">
				<div class="stat">
					<div class="stat-title">Current Count</div>
					<div class="stat-value text-primary">{{ count }}</div>
					<div class="stat-desc">Click the button to increment</div>
				</div>
			</div>
			<div class="card-actions justify-center mt-6">
				<button class="btn btn-primary btn-wide" @click="handleIncrement">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
					</svg>
					Increment Counter
				</button>
			</div>
		</div>
	</div>
</template>

<script>
/**
 * Counter Component
 * Reusable counter component demonstrating props and events
 *
 * @param {number} count - Current counter value
 * @emits {increment} - Emitted when increment button is clicked
 */
export default {
	name: 'Counter',
	props: {
		count: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	emits: ['increment'],
	setup(props, { emit }) {
		const handleIncrement = () => {
			emit('increment');
		};

		return {
			handleIncrement,
		};
	},
};
</script>

<style scoped>
/* No custom styles needed - using DaisyUI classes */
</style>
