import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Counter from '../components/Counter.vue';

describe('Counter Component', () => {
	it('renders correctly with initial count', () => {
		const wrapper = mount(Counter, {
			props: {
				count: 5,
			},
		});

		expect(wrapper.find('.stat-value').text()).toBe('5');
		expect(wrapper.find('.card-title').text()).toBe('Counter Component');
	});

	it('emits increment event when button is clicked', async () => {
		const wrapper = mount(Counter, {
			props: {
				count: 0,
			},
		});

		await wrapper.find('.btn-primary').trigger('click');

		expect(wrapper.emitted()).toHaveProperty('increment');
		expect(wrapper.emitted().increment).toHaveLength(1);
	});

	it('displays the correct count prop', () => {
		const testCount = 42;
		const wrapper = mount(Counter, {
			props: {
				count: testCount,
			},
		});

		expect(wrapper.find('.stat-value').text()).toBe(testCount.toString());
	});
});
