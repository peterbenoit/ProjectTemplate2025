// Test setup file for Vitest
import { vi } from 'vitest';

// Mock console methods if needed
global.console = {
	...console,
	// Suppress console.log in tests unless needed
	log: vi.fn(),
	debug: vi.fn(),
	info: vi.fn(),
	warn: vi.fn(),
	error: vi.fn(),
};
