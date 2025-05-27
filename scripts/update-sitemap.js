#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Updates the lastmod date in sitemap.xml to the current date
 * Can be used as part of any build process (Node, Vite, Webpack, etc.)
 */

function updateSitemapDate() {
	const sitemapPath = path.join(process.cwd(), 'sitemap.xml');

	// Check if sitemap.xml exists
	if (!fs.existsSync(sitemapPath)) {
		console.error('❌ sitemap.xml not found in current directory');
		process.exit(1);
	}

	try {
		// Read the current sitemap
		const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

		// Get current date in YYYY-MM-DD format
		const currentDate = new Date().toISOString().split('T')[0];

		// Update lastmod dates using regex
		const updatedContent = sitemapContent.replace(
			/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
			`<lastmod>${currentDate}</lastmod>`
		);

		// Write the updated content back
		fs.writeFileSync(sitemapPath, updatedContent, 'utf8');

		console.log(`✅ Sitemap updated with date: ${currentDate}`);
	} catch (error) {
		console.error('❌ Error updating sitemap:', error.message);
		process.exit(1);
	}
}

// Run the script if called directly
if (require.main === module) {
	updateSitemapDate();
}

module.exports = updateSitemapDate;
