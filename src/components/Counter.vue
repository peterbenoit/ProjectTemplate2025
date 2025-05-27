<template>
	<div class="counter">
		<h3>Counter Component</h3>
		<p>
			Current count: <span class="count-display">{{ count }}</span>
		</p>
		<button class="increment-btn" @click="handleIncrement">Increment</button>
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
.counter {
	background: #f8f9fa;
	border: 1px solid #e9ecef;
	border-radius: 8px;
	padding: 1.5rem;
	margin: 2rem 0;
	text-align: center;
}

.counter h3 {
	margin-top: 0;
	color: #495057;
}

.count-display {
	font-weight: bold;
	color: #007bff;
	font-size: 1.2rem;
}

.increment-btn {
	background: #28a745;
	color: white;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	cursor: pointer;
	margin-top: 1rem;
	transition: background 0.3s ease;
}

.increment-btn:hover {
	background: #218838;
}
</style>
