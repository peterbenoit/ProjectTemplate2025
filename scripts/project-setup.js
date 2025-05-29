#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// ANSI color codes for better console output
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	green: '\x1b[32m',
	blue: '\x1b[34m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
};

console.log(`${colors.bright}${colors.blue}
🚀 Vue 3 Project Template Setup
${colors.reset}`);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise(resolve => {
		rl.question(query, resolve);
	});
}

// Load configuration
const configPath = path.join(__dirname, 'config.json');
let defaultReplacements = {};

if (fs.existsSync(configPath)) {
	const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
	defaultReplacements = config.reduce((acc, item) => {
		acc[item.search] = item.replace;
		return acc;
	}, {});
}

// Files to update with their replacement patterns
const filesToUpdate = [
	{
		path: 'package.json',
		replacements: [
			{ search: /\[PROJECT_NAME\]/g, replace: 'PROJECT_NAME' },
			{ search: /\[PROJECT_DESCRIPTION\]/g, replace: 'PROJECT_DESCRIPTION' },
			{ search: /\[PROJECT_KEYWORDS\]/g, replace: 'PROJECT_KEYWORDS' },
			{ search: /\[PROJECT_AUTHOR\]/g, replace: 'AUTHOR_NAME' },
		],
	},
	{
		path: 'index.html',
		replacements: [
			{ search: /\[PROJECT_NAME\]/g, replace: 'PROJECT_NAME' },
			{ search: /\[PROJECT_DESCRIPTION\]/g, replace: 'PROJECT_DESCRIPTION' },
			{ search: /\[PROJECT_KEYWORDS\]/g, replace: 'PROJECT_KEYWORDS' },
			{ search: /\[AUTHOR_NAME\]/g, replace: 'AUTHOR_NAME' },
			{ search: /\[AUTHOR_URL\]/g, replace: 'AUTHOR_URL' },
			{ search: /\[PROJECT_URL\]/g, replace: 'PROJECT_URL' },
			{ search: /\[GA_MEASUREMENT_ID\]/g, replace: 'GA_MEASUREMENT_ID' },
			{ search: /\[GTM_ID\]/g, replace: 'GTM_ID' },
			{ search: /\[HEX_TILE_COLOR\]/g, replace: 'HEX_TILE_COLOR' },
			{ search: /\[HEX_THEME_COLOR\]/g, replace: 'HEX_THEME_COLOR' },
			{ search: /PROJECT_PROGRAMMING_LANGUAGE/g, replace: 'PROJECT_PROGRAMMING_LANGUAGE' },
			{ search: /\[PROJECT_OPERATING_SYSTEM\]/g, replace: 'PROJECT_OPERATING_SYSTEM' },
			{ search: /\[PROJECT_APPLICATION_CATEGORY\]/g, replace: 'PROJECT_APPLICATION_CATEGORY' },
		],
	},
	{
		path: 'sitemap.xml',
		replacements: [
			{ search: /\[PROJECT_URL\]/g, replace: 'PROJECT_URL' },
			{ search: /\[PROJECT_NAME\]/g, replace: 'PROJECT_NAME' },
		],
	},
	{
		path: 'site.webmanifest',
		replacements: [
			{ search: /\[PROJECT_NAME\]/g, replace: 'PROJECT_NAME' },
			{ search: /\[PROJECT_DESCRIPTION\]/g, replace: 'PROJECT_DESCRIPTION' },
			{ search: /\[HEX_THEME_COLORS\]/g, replace: 'HEX_THEME_COLORS' },
			{ search: /\[HEX_BACKGROUND_COLORS\]/g, replace: 'HEX_BACKGROUND_COLORS' },
		],
	},
	{
		path: 'robots.txt',
		replacements: [
			{ search: /\[PROJECT_URL\]/g, replace: 'PROJECT_URL' },
		],
	},
	{
		path: 'humans.txt',
		replacements: [
			{ search: /\[AUTHOR_NAME\]/g, replace: 'AUTHOR_NAME' },
			{ search: /\[AUTHOR_LOCATION\]/g, replace: 'AUTHOR_LOCATION' },
			{ search: /\[PROJECT_TWITTER\]/g, replace: 'PROJECT_TWITTER' },
			{ search: /\[PROJECT_INSTAGRAM\]/g, replace: 'PROJECT_INSTAGRAM' },
			{ search: /\[PROJECT_NAME\]/g, replace: 'PROJECT_NAME' },
		],
	},
	{
		path: 'vite.config.js',
		replacements: [
			{ search: /\/\[PROJECT_NAME\]\//g, replace: 'PROJECT_NAME' },
		],
	},
	{
		path: '.env.example',
		replacements: [
			{ search: /\[PROJECT_URL\]/g, replace: 'PROJECT_URL' },
		],
	},
	{
		path: 'src/views/Home.vue',
		replacements: [
			{ search: /\[PROJECT_NAME\]/g, replace: 'PROJECT_NAME' },
			{ search: /\[PROJECT_DESCRIPTION\]/g, replace: 'PROJECT_DESCRIPTION' },
			{ search: /\[PROJECT_REPO\]/g, replace: 'PROJECT_REPO' },
		],
	},
	{
		path: 'tailwind.config.js',
		replacements: [
			{ search: /#3b82f6/g, replace: 'HEX_THEME_COLORS' },
		],
	},
	{
		path: 'src/components/Header.vue',
		replacements: [
			{ search: /\[PROJECT_NAME\]/g, replace: 'PROJECT_NAME' },
		],
	},
];

async function main() {
	try {
		console.log(`${colors.yellow}Please provide the following information to customize your project:${colors.reset}\n`);

		// Collect user input with defaults from config
		const projectName = await question(`📦 Project name (default: "${defaultReplacements.PROJECT_NAME}"): `);
		const projectDescription = await question(`📝 Project description (default: "${defaultReplacements.PROJECT_DESCRIPTION}"): `);
		const authorName = await question(`👤 Your name (default: "${defaultReplacements.AUTHOR_NAME}"): `);
		const authorEmail = await question(`📧 Your email (default: "${defaultReplacements.AUTHOR_EMAIL}"): `);
		const authorUrl = await question(`🌐 Your website URL (default: "${defaultReplacements.AUTHOR_URL}"): `);
		const authorLocation = await question(`📍 Your location (default: "${defaultReplacements.AUTHOR_LOCATION}"): `);
		const projectUrl = await question(`🔗 Project URL (default: "${defaultReplacements.PROJECT_URL}"): `);
		const projectRepo = await question(`📂 GitHub repository URL (default: "${defaultReplacements.PROJECT_REPO}"): `);
		const projectTwitter = await question(`🐦 Twitter handle (default: "${defaultReplacements.PROJECT_TWITTER}"): `);
		const projectInstagram = await question(`📸 Instagram handle (default: "${defaultReplacements.PROJECT_INSTAGRAM}"): `);
		const themeColor = await question(`🎨 Theme color hex (default: "${defaultReplacements.HEX_THEME_COLORS}"): `);
		const gaId = await question(`📊 Google Analytics ID (default: "${defaultReplacements.GA_MEASUREMENT_ID}"): `);
		const gtmId = await question(`🏷️  Google Tag Manager ID (default: "${defaultReplacements.GTM_ID}"): `);

		console.log(`\n${colors.green}✨ Updating project files...${colors.reset}`);

		// Use input or fall back to config defaults
		const replacements = {
			PROJECT_NAME: projectName || defaultReplacements.PROJECT_NAME,
			PROJECT_DESCRIPTION: projectDescription || defaultReplacements.PROJECT_DESCRIPTION,
			PROJECT_KEYWORDS: defaultReplacements.PROJECT_KEYWORDS,
			AUTHOR_NAME: authorName || defaultReplacements.AUTHOR_NAME,
			AUTHOR_EMAIL: authorEmail || defaultReplacements.AUTHOR_EMAIL,
			AUTHOR_URL: authorUrl || defaultReplacements.AUTHOR_URL,
			AUTHOR_LOCATION: authorLocation || defaultReplacements.AUTHOR_LOCATION,
			// Fix double slash issue by ensuring URL format is correct
			PROJECT_URL: (projectUrl || defaultReplacements.PROJECT_URL).replace(/\/+$/, ''),
			PROJECT_REPO: projectRepo || defaultReplacements.PROJECT_REPO,
			PROJECT_TWITTER: projectTwitter || defaultReplacements.PROJECT_TWITTER,
			PROJECT_INSTAGRAM: projectInstagram || defaultReplacements.PROJECT_INSTAGRAM,
			HEX_THEME_COLORS: themeColor || defaultReplacements.HEX_THEME_COLORS,
			HEX_BACKGROUND_COLORS: defaultReplacements.HEX_BACKGROUND_COLORS,
			HEX_TILE_COLOR: themeColor || defaultReplacements.HEX_THEME_COLORS,
			HEX_THEME_COLOR: themeColor || defaultReplacements.HEX_THEME_COLORS,
			PROJECT_PROGRAMMING_LANGUAGE: defaultReplacements.PROJECT_PROGRAMMING_LANGUAGE,
			PROJECT_OPERATING_SYSTEM: defaultReplacements.PROJECT_OPERATING_SYSTEM,
			PROJECT_APPLICATION_CATEGORY: defaultReplacements.PROJECT_APPLICATION_CATEGORY,
			GA_MEASUREMENT_ID: gaId || defaultReplacements.GA_MEASUREMENT_ID,
			GTM_ID: gtmId || defaultReplacements.GTM_ID,
		};

		// Update files
		for (const file of filesToUpdate) {
			const filePath = path.join(projectRoot, file.path);

			if (!fs.existsSync(filePath)) {
				console.log(`${colors.yellow}⚠️  Skipping ${file.path} (not found)${colors.reset}`);
				continue;
			}

			let content = fs.readFileSync(filePath, 'utf8');

			for (const replacement of file.replacements) {
				const replaceValue = replacements[replacement.replace] || replacement.replace;
				content = content.replace(replacement.search, replaceValue);
			}

			fs.writeFileSync(filePath, content);
			console.log(`${colors.green}✅ Updated ${file.path}${colors.reset}`);
		}

		// Update package.json name to be URL-safe and fix keywords array
		const packagePath = path.join(projectRoot, 'package.json');
		if (fs.existsSync(packagePath)) {
			const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
			packageJson.name = (replacements.PROJECT_NAME || 'my-vue-app').toLowerCase().replace(/[^a-z0-9]/g, '-');
			// Convert keywords string to array
			if (typeof packageJson.keywords === 'string') {
				packageJson.keywords = packageJson.keywords.split(',').map(k => k.trim());
			}
			fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
		}

		console.log(`\n${colors.bright}${colors.green}🎉 Setup complete!${colors.reset}`);
		console.log(`\n${colors.blue}Next steps:${colors.reset}`);
		console.log('1. Run `npm install` to install dependencies');
		console.log('2. Run `npm run dev` to start development');
		console.log('3. Customize your app in the src/ directory');
		console.log('4. Delete this setup.js file when you\'re done');

		// Ask if user wants to delete setup.js
		console.log(`\n${colors.yellow}Would you like to delete this setup script now? (y/n):${colors.reset}`);
		const deleteScript = await question('');

		if (deleteScript.toLowerCase() === 'y' || deleteScript.toLowerCase() === 'yes') {
			fs.unlinkSync(__filename);
			console.log(`${colors.green}✅ Setup script deleted${colors.reset}`);
		}

	} catch (error) {
		console.error(`${colors.red}❌ Error during setup:${colors.reset}`, error.message);
		process.exit(1);
	} finally {
		rl.close();
	}
}

main();
