#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// ANSI color codes
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	green: '\x1b[32m',
	blue: '\x1b[34m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
	cyan: '\x1b[36m',
};

console.log(`${colors.bright}${colors.cyan}
🧪 Testing Project Template
${colors.reset}`);

const testDir = path.join(projectRoot, '..', 'test-template-project');

// Files/folders to exclude from copy (simulating GitHub template behavior)
const excludePatterns = [
	'.git',
	'node_modules',
	'dist',
	'build',
	'.DS_Store',
	'*.log',
	'.env',
	'.env.local',
];

function shouldExclude(filePath) {
	const relativePath = path.relative(projectRoot, filePath);
	return excludePatterns.some(pattern => {
		if (pattern.includes('*')) {
			return relativePath.includes(pattern.replace('*', ''));
		}
		return relativePath.startsWith(pattern);
	});
}

function copyRecursive(src, dest) {
	const stats = fs.statSync(src);

	if (stats.isDirectory()) {
		if (!fs.existsSync(dest)) {
			fs.mkdirSync(dest, { recursive: true });
		}

		const items = fs.readdirSync(src);
		items.forEach(item => {
			const srcPath = path.join(src, item);
			const destPath = path.join(dest, item);

			if (!shouldExclude(srcPath)) {
				copyRecursive(srcPath, destPath);
			}
		});
	} else {
		fs.copyFileSync(src, dest);
	}
}

async function main() {
	try {
		console.log(`${colors.yellow}🗂️  Creating test template copy...${colors.reset}`);

		// Remove existing test directory if it exists
		if (fs.existsSync(testDir)) {
			fs.rmSync(testDir, { recursive: true, force: true });
			console.log(`${colors.green}✅ Cleaned up previous test directory${colors.reset}`);
		}

		// Copy template files (excluding git and build artifacts)
		copyRecursive(projectRoot, testDir);
		console.log(`${colors.green}✅ Copied template files to test directory${colors.reset}`);

		console.log(`\n${colors.bright}${colors.green}🎉 Template test setup complete!${colors.reset}`);
		console.log(`\n${colors.blue}Test directory created at:${colors.reset}`);
		console.log(`${colors.cyan}${testDir}${colors.reset}`);

		console.log(`\n${colors.blue}Next steps to test:${colors.reset}`);
		console.log(`1. ${colors.cyan}cd ${testDir}${colors.reset}`);
		console.log(`2. ${colors.cyan}npm install${colors.reset}`);
		console.log(`3. ${colors.cyan}npm run setup${colors.reset} (test the setup script)`);
		console.log(`4. ${colors.cyan}npm run dev${colors.reset} (test the development server)`);
		console.log(`5. ${colors.cyan}npm run test${colors.reset} (test the unit tests)`);

		console.log(`\n${colors.yellow}💡 Tip: run${colors.reset} ${colors.cyan}rm -rf ../test-template-project${colors.reset} ${colors.yellow}when finished to remove the test directory${colors.reset}`);
		console.log(`\n${colors.yellow}💡 Tip: You can run this test multiple times to verify the template works correctly${colors.reset}`);

	} catch (error) {
		console.error(`${colors.red}❌ Error creating test template:${colors.reset}`, error.message);
		process.exit(1);
	}
}

main();
