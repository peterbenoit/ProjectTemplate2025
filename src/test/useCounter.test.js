import { describe, it, expect } from 'vitest';
import { useCounter } from '../composables/useCounter';

describe('useCounter Composable', () => {
	it('initializes with default value of 0', () => {
		const { counter } = useCounter();
		expect(counter.value).toBe(0);
	});

	it('initializes with custom initial value', () => {
		const { counter } = useCounter(10);
		expect(counter.value).toBe(10);
	});

	it('increments counter correctly', () => {
		const { counter, incrementCounter } = useCounter(5);

		incrementCounter();
		expect(counter.value).toBe(6);

		incrementCounter();
		expect(counter.value).toBe(7);
	});

	it('decrements counter correctly', () => {
		const { counter, decrementCounter } = useCounter(5);

		decrementCounter();
		expect(counter.value).toBe(4);

		decrementCounter();
		expect(counter.value).toBe(3);
	});

	it('resets counter to initial value', () => {
		const initialValue = 15;
		const { counter, incrementCounter, resetCounter } = useCounter(initialValue);

		// Change the counter value
		incrementCounter();
		incrementCounter();
		expect(counter.value).toBe(17);

		// Reset should go back to initial value
		resetCounter();
		expect(counter.value).toBe(initialValue);
	});
});
