#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Updates the lastmod date in sitemap.xml to the current date
 * Can be used as part of any build process (Node, Vite, Webpack, etc.)
 */

function updateSitemapDate() {
	// Get the current date in YYYY-MM-DD format
	const today = new Date().toISOString().split('T')[0];

	// Path to sitemap.xml
	const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');

	try {
		// Read the sitemap file
		let sitemap = fs.readFileSync(sitemapPath, 'utf8');

		// Update the lastmod date
		sitemap = sitemap.replace(
			/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
			`<lastmod>${today}</lastmod>`
		);

		// Write the updated sitemap back
		fs.writeFileSync(sitemapPath, sitemap);

		console.log(`✅ Sitemap updated with date: ${today}`);
	} catch (error) {
		console.error('❌ Error updating sitemap:', error.message);
		process.exit(1);
	}
}

// Run the script (ES module version)
updateSitemapDate();

export default updateSitemapDate;
