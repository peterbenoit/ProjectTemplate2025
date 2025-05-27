/**
 * Form validation composable using Vue 3 Composition API
 * Provides reusable form validation logic with reactive error handling
 */

import { ref, reactive, computed, watch } from 'vue';

/**
 * Form validation rules
 */
export const validationRules = {
	required: value => {
		if (!value || (typeof value === 'string' && !value.trim())) {
			return 'This field is required';
		}
		return true;
	},

	email: value => {
		if (!value) return true;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value) || 'Please enter a valid email address';
	},

	minLength: min => value => {
		if (!value) return true;
		return value.length >= min || `Must be at least ${min} characters`;
	},

	maxLength: max => value => {
		if (!value) return true;
		return value.length <= max || `Must be no more than ${max} characters`;
	},

	url: value => {
		if (!value) return true;
		try {
			new URL(value);
			return true;
		} catch {
			return 'Please enter a valid URL';
		}
	},

	phone: value => {
		if (!value) return true;
		const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
		return phoneRegex.test(value.replace(/\s/g, '')) || 'Please enter a valid phone number';
	},

	number: value => {
		if (!value) return true;
		return !isNaN(value) || 'Must be a valid number';
	},

	min: minValue => value => {
		if (!value) return true;
		return Number(value) >= minValue || `Must be at least ${minValue}`;
	},

	max: maxValue => value => {
		if (!value) return true;
		return Number(value) <= maxValue || `Must be no more than ${maxValue}`;
	},

	match:
		(otherField, fieldName = 'password') =>
			value => {
				if (!value) return true;
				return value === otherField || `Must match ${fieldName}`;
			},

	custom: (validator, message) => value => {
		return validator(value) || message;
	},
};

/**
 * useForm composable for form validation
 * @param {Object} initialValues - Initial form values
 * @param {Object} rules - Validation rules for each field
 * @returns {Object} Form state and methods
 */
export function useForm(initialValues = {}, rules = {}) {
	const formData = reactive({ ...initialValues });

	const errors = reactive({});
	const touched = reactive({});
	const isSubmitting = ref(false);
	const submitCount = ref(0);

	const isValid = computed(() => {
		return Object.keys(errors).length === 0;
	});

	const hasErrors = computed(() => {
		return Object.keys(errors).some(field => errors[field]);
	});

	const touchedFields = computed(() => {
		return Object.keys(touched).filter(field => touched[field]);
	});

	/**
	 * Validate a single field
	 * @param {string} field - Field name to validate
	 * @returns {boolean} - True if valid, false if invalid
	 */
	const validateField = field => {
		const value = formData[field];
		const fieldRules = rules[field];

		if (!fieldRules) {
			delete errors[field];
			return true;
		}

		const rulesArray = Array.isArray(fieldRules) ? fieldRules : [fieldRules];

		for (const rule of rulesArray) {
			const result = rule(value);
			if (result !== true) {
				errors[field] = result;
				return false;
			}
		}

		delete errors[field];
		return true;
	};

	/**
	 * Validate all fields
	 * @returns {boolean} - True if all fields are valid
	 */
	const validateForm = () => {
		let isFormValid = true;

		for (const field in rules) {
			const fieldValid = validateField(field);
			if (!fieldValid) {
				isFormValid = false;
			}
		}

		return isFormValid;
	};

	/**
	 * Mark a field as touched
	 * @param {string} field - Field name
	 */
	const touchField = field => {
		touched[field] = true;
	};

	/**
	 * Handle field blur event
	 * @param {string} field - Field name
	 */
	const handleBlur = field => {
		touchField(field);
		validateField(field);
	};

	/**
	 * Handle field input event
	 * @param {string} field - Field name
	 * @param {any} value - New field value
	 */
	const handleInput = (field, value) => {
		formData[field] = value;

		if (errors[field]) {
			validateField(field);
		}
	};

	/**
	 * Reset form to initial state
	 */
	const resetForm = () => {
		Object.keys(formData).forEach(key => {
			formData[key] = initialValues[key] || '';
		});

		Object.keys(errors).forEach(key => delete errors[key]);
		Object.keys(touched).forEach(key => delete touched[key]);

		isSubmitting.value = false;
		submitCount.value = 0;
	};

	/**
	 * Set form values
	 * @param {Object} values - New form values
	 */
	const setValues = values => {
		Object.assign(formData, values);
	};

	/**
	 * Set field value
	 * @param {string} field - Field name
	 * @param {any} value - Field value
	 */
	const setValue = (field, value) => {
		formData[field] = value;
	};

	/**
	 * Set field error
	 * @param {string} field - Field name
	 * @param {string} error - Error message
	 */
	const setError = (field, error) => {
		errors[field] = error;
	};

	/**
	 * Clear field error
	 * @param {string} field - Field name
	 */
	const clearError = field => {
		delete errors[field];
	};

	/**
	 * Handle form submission
	 * @param {Function} onSubmit - Submit handler function
	 * @returns {Promise} - Submit promise
	 */
	const handleSubmit = async onSubmit => {
		submitCount.value++;

		Object.keys(rules).forEach(field => {
			touched[field] = true;
		});

		const isFormValid = validateForm();

		if (!isFormValid) {
			return Promise.reject(new Error('Form validation failed'));
		}

		try {
			isSubmitting.value = true;
			await onSubmit(formData);
		} finally {
			isSubmitting.value = false;
		}
	};

	watch(
		() => ({ ...formData }),
		() => {
			touchedFields.value.forEach(field => {
				validateField(field);
			});
		},
		{ deep: true }
	);

	return {
		formData,
		errors,
		touched,
		isSubmitting,
		submitCount,

		isValid,
		hasErrors,
		touchedFields,

		validateField,
		validateForm,
		touchField,
		handleBlur,
		handleInput,
		handleSubmit,
		resetForm,
		setValues,
		setValue,
		setError,
		clearError,
	};
}

/**
 * useField composable for individual field management
 * @param {string} name - Field name
 * @param {any} initialValue - Initial field value
 * @param {Array|Function} rules - Validation rules
 * @returns {Object} Field state and methods
 */
export function useField(name, initialValue = '', rules = []) {
	const value = ref(initialValue);
	const error = ref('');
	const touched = ref(false);

	const rulesArray = Array.isArray(rules) ? rules : [rules];

	const validate = () => {
		for (const rule of rulesArray) {
			const result = rule(value.value);
			if (result !== true) {
				error.value = result;
				return false;
			}
		}
		error.value = '';
		return true;
	};

	const handleBlur = () => {
		touched.value = true;
		validate();
	};

	const handleInput = newValue => {
		value.value = newValue;
		if (error.value) {
			validate();
		}
	};

	const reset = () => {
		value.value = initialValue;
		error.value = '';
		touched.value = false;
	};

	return {
		value,
		error,
		touched,
		validate,
		handleBlur,
		handleInput,
		reset,
	};
}
