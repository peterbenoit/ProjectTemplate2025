/**
 * HTTP Client Utility
 * A simple, lightweight HTTP client with interceptors and error handling
 * Built on top of the native fetch API
 */

/**
 * HTTP Client class
 */
class HttpClient {
	constructor(config = {}) {
		this.baseURL = config.baseURL || '';
		this.timeout = config.timeout || 10000;
		this.headers = {
			'Content-Type': 'application/json',
			...config.headers,
		};

		// Interceptors
		this.requestInterceptors = [];
		this.responseInterceptors = [];
		this.errorInterceptors = [];
	}

	/**
	 * Add request interceptor
	 * @param {Function} interceptor - Function to modify request config
	 */
	addRequestInterceptor(interceptor) {
		this.requestInterceptors.push(interceptor);
	}

	/**
	 * Add response interceptor
	 * @param {Function} interceptor - Function to modify response
	 */
	addResponseInterceptor(interceptor) {
		this.responseInterceptors.push(interceptor);
	}

	/**
	 * Add error interceptor
	 * @param {Function} interceptor - Function to handle errors
	 */
	addErrorInterceptor(interceptor) {
		this.errorInterceptors.push(interceptor);
	}

	/**
	 * Apply request interceptors
	 * @param {Object} config - Request configuration
	 * @returns {Object} Modified configuration
	 */
	async applyRequestInterceptors(config) {
		let modifiedConfig = { ...config };

		for (const interceptor of this.requestInterceptors) {
			modifiedConfig = await interceptor(modifiedConfig);
		}

		return modifiedConfig;
	}

	/**
	 * Apply response interceptors
	 * @param {Response} response - Fetch response
	 * @returns {Response} Modified response
	 */
	async applyResponseInterceptors(response) {
		let modifiedResponse = response;

		for (const interceptor of this.responseInterceptors) {
			modifiedResponse = await interceptor(modifiedResponse);
		}

		return modifiedResponse;
	}

	/**
	 * Apply error interceptors
	 * @param {Error} error - Error object
	 * @returns {Error} Modified error
	 */
	async applyErrorInterceptors(error) {
		let modifiedError = error;

		for (const interceptor of this.errorInterceptors) {
			modifiedError = await interceptor(modifiedError);
		}

		return modifiedError;
	}

	/**
	 * Create AbortController for request timeout
	 * @param {number} timeout - Timeout in milliseconds
	 * @returns {AbortController}
	 */
	createTimeoutController(timeout) {
		const controller = new AbortController();

		setTimeout(() => {
			controller.abort();
		}, timeout);

		return controller;
	}

	/**
	 * Build URL with base URL and path
	 * @param {string} url - Request URL
	 * @returns {string} Complete URL
	 */
	buildURL(url) {
		if (url.startsWith('http://') || url.startsWith('https://')) {
			return url;
		}

		const baseURL = this.baseURL.endsWith('/') ? this.baseURL.slice(0, -1) : this.baseURL;
		const path = url.startsWith('/') ? url : `/${url}`;

		return `${baseURL}${path}`;
	}

	/**
	 * Make HTTP request
	 * @param {Object} config - Request configuration
	 * @returns {Promise} Response promise
	 */
	async request(config) {
		try {
			// Apply request interceptors
			const modifiedConfig = await this.applyRequestInterceptors(config);

			// Build URL
			const url = this.buildURL(modifiedConfig.url);

			// Create timeout controller
			const timeoutController = this.createTimeoutController(
				modifiedConfig.timeout || this.timeout
			);

			// Prepare fetch options
			const fetchOptions = {
				method: modifiedConfig.method || 'GET',
				headers: {
					...this.headers,
					...modifiedConfig.headers,
				},
				signal: timeoutController.signal,
				...modifiedConfig.options,
			};

			// Add body for non-GET requests
			if (modifiedConfig.data && ['POST', 'PUT', 'PATCH'].includes(fetchOptions.method)) {
				if (typeof modifiedConfig.data === 'object') {
					fetchOptions.body = JSON.stringify(modifiedConfig.data);
				} else {
					fetchOptions.body = modifiedConfig.data;
				}
			}

			// Make request
			const response = await fetch(url, fetchOptions);

			// Apply response interceptors
			const modifiedResponse = await this.applyResponseInterceptors(response);

			// Handle HTTP errors
			if (!modifiedResponse.ok) {
				const error = new Error(
					`HTTP Error: ${modifiedResponse.status} ${modifiedResponse.statusText}`
				);
				error.status = modifiedResponse.status;
				error.statusText = modifiedResponse.statusText;
				error.response = modifiedResponse;

				// Try to parse error response body
				try {
					const errorData = await modifiedResponse.clone().json();
					error.data = errorData;
				} catch {
					// Ignore if response is not JSON
				}

				throw error;
			}

			// Parse response based on content type
			const contentType = modifiedResponse.headers.get('content-type') || '';

			if (contentType.includes('application/json')) {
				const data = await modifiedResponse.json();
				return {
					data,
					status: modifiedResponse.status,
					statusText: modifiedResponse.statusText,
					headers: modifiedResponse.headers,
					response: modifiedResponse,
				};
			} else if (contentType.includes('text/')) {
				const data = await modifiedResponse.text();
				return {
					data,
					status: modifiedResponse.status,
					statusText: modifiedResponse.statusText,
					headers: modifiedResponse.headers,
					response: modifiedResponse,
				};
			} else {
				return {
					data: modifiedResponse,
					status: modifiedResponse.status,
					statusText: modifiedResponse.statusText,
					headers: modifiedResponse.headers,
					response: modifiedResponse,
				};
			}
		} catch (error) {
			// Handle timeout
			if (error.name === 'AbortError') {
				const timeoutError = new Error('Request timeout');
				timeoutError.name = 'TimeoutError';
				throw timeoutError;
			}

			// Apply error interceptors
			const modifiedError = await this.applyErrorInterceptors(error);
			throw modifiedError;
		}
	}

	/**
	 * GET request
	 * @param {string} url - Request URL
	 * @param {Object} config - Request configuration
	 * @returns {Promise} Response promise
	 */
	get(url, config = {}) {
		return this.request({
			...config,
			method: 'GET',
			url,
		});
	}

	/**
	 * POST request
	 * @param {string} url - Request URL
	 * @param {any} data - Request data
	 * @param {Object} config - Request configuration
	 * @returns {Promise} Response promise
	 */
	post(url, data, config = {}) {
		return this.request({
			...config,
			method: 'POST',
			url,
			data,
		});
	}

	/**
	 * PUT request
	 * @param {string} url - Request URL
	 * @param {any} data - Request data
	 * @param {Object} config - Request configuration
	 * @returns {Promise} Response promise
	 */
	put(url, data, config = {}) {
		return this.request({
			...config,
			method: 'PUT',
			url,
			data,
		});
	}

	/**
	 * PATCH request
	 * @param {string} url - Request URL
	 * @param {any} data - Request data
	 * @param {Object} config - Request configuration
	 * @returns {Promise} Response promise
	 */
	patch(url, data, config = {}) {
		return this.request({
			...config,
			method: 'PATCH',
			url,
			data,
		});
	}

	/**
	 * DELETE request
	 * @param {string} url - Request URL
	 * @param {Object} config - Request configuration
	 * @returns {Promise} Response promise
	 */
	delete(url, config = {}) {
		return this.request({
			...config,
			method: 'DELETE',
			url,
		});
	}
}

/**
 * Create HTTP client instance
 * @param {Object} config - Client configuration
 * @returns {HttpClient} HTTP client instance
 */
export function createHttpClient(config = {}) {
	const baseURL = config.baseURL || import.meta.env.VITE_API_BASE_URL || '';
	const timeout = config.timeout || import.meta.env.VITE_API_TIMEOUT || 10000;

	const client = new HttpClient({
		baseURL,
		timeout: parseInt(timeout),
		...config,
	});

	// Add default request interceptor for authentication
	client.addRequestInterceptor(async config => {
		const token = localStorage.getItem('authToken');
		if (token) {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${token}`,
			};
		}
		return config;
	});

	// Add default error interceptor for common error handling
	client.addErrorInterceptor(async error => {
		// Handle 401 unauthorized
		if (error.status === 401) {
			localStorage.removeItem('authToken');
			// You can dispatch a logout action here if using a store
			console.warn('Authentication token expired');
		}

		// Handle network errors
		if (error.name === 'TypeError' && error.message.includes('fetch')) {
			error.message = 'Network error: Please check your internet connection';
		}

		return error;
	});

	return client;
}

// Create default HTTP client instance
export const http = createHttpClient();

// Export HttpClient class for custom instances
export { HttpClient };
