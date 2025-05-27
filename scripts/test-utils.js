/**
 * Simple test utilities for basic validation
 * Can be used for lightweight testing without full framework
 */

class SimpleTest {
	constructor() {
		this.tests = [];
		this.passed = 0;
		this.failed = 0;
	}

	/**
	 * Assert that a condition is true
	 */
	assert(condition, message) {
		this.tests.push({
			passed: !!condition,
			message: message || 'Assertion failed',
		});

		if (condition) {
			this.passed++;
			console.log(`✅ ${message || 'Test passed'}`);
		} else {
			this.failed++;
			console.error(`❌ ${message || 'Test failed'}`);
		}
	}

	/**
	 * Assert that two values are equal
	 */
	assertEqual(actual, expected, message) {
		const passed = actual === expected;
		const testMessage = message || `Expected ${expected}, got ${actual}`;
		this.assert(passed, testMessage);
	}

	/**
	 * Assert that a value is truthy
	 */
	assertTruthy(value, message) {
		this.assert(!!value, message || `Expected truthy value, got ${value}`);
	}

	/**
	 * Assert that a value is falsy
	 */
	assertFalsy(value, message) {
		this.assert(!value, message || `Expected falsy value, got ${value}`);
	}

	/**
	 * Assert that a function throws an error
	 */
	assertThrows(fn, message) {
		try {
			fn();
			this.assert(false, message || 'Expected function to throw');
		} catch (error) {
			this.assert(true, message || 'Function threw as expected');
		}
	}

	/**
	 * Run a test suite
	 */
	describe(suiteName, testFn) {
		console.group(`🧪 ${suiteName}`);
		testFn();
		console.groupEnd();
	}

	/**
	 * Individual test case
	 */
	it(testName, testFn) {
		console.log(`\n📝 ${testName}`);
		testFn();
	}

	/**
	 * Print test summary
	 */
	summary() {
		const total = this.passed + this.failed;
		console.log('\n📊 Test Summary:');
		console.log(`Total: ${total}, Passed: ${this.passed}, Failed: ${this.failed}`);

		if (this.failed > 0) {
			console.error(`❌ ${this.failed} test(s) failed`);
			return false;
		} else {
			console.log(`✅ All ${this.passed} test(s) passed`);
			return true;
		}
	}
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
	module.exports = SimpleTest;
} else {
	window.SimpleTest = SimpleTest;
}

// Example usage:
if (typeof module !== 'undefined' && require.main === module) {
	const test = new SimpleTest();

	test.describe('SimpleTest Example', () => {
		test.it('should pass basic assertions', () => {
			test.assert(true, 'True should be true');
			test.assertEqual(1 + 1, 2, '1 + 1 should equal 2');
			test.assertTruthy('hello', 'Non-empty string should be truthy');
			test.assertFalsy('', 'Empty string should be falsy');
		});

		test.it('should handle errors', () => {
			test.assertThrows(() => {
				throw new Error('Test error');
			}, 'Function should throw an error');
		});
	});

	test.summary();
}
