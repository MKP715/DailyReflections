#!/usr/bin/env node

/**
 * This script extracts daily reflections data from index.html
 * and generates individual JSON files in the api/ directory
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Read the index.html file
const htmlContent = fs.readFileSync('index.html', 'utf8');

// Extract the dailyReflections object using regex
const match = htmlContent.match(/const dailyReflections = \{([\s\S]*?)\n        \};/);

if (!match) {
    console.error('Could not find dailyReflections data in index.html');
    process.exit(1);
}

// Parse the data using vm module for safer execution
const dataString = '(' + '{' + match[1] + '\n        }' + ')';

let dailyReflections;
try {
    dailyReflections = vm.runInNewContext(dataString);
} catch (e) {
    console.error('Error parsing dailyReflections:', e.message);
    process.exit(1);
}

// Create api directory if it doesn't exist
const apiDir = path.join(__dirname, 'api');
if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
}

// Generate JSON files
const dates = Object.keys(dailyReflections);
console.log(`Found ${dates.length} reflections to process`);

dates.forEach(date => {
    const reflection = dailyReflections[date];
    const filename = `${date}.json`;
    const filepath = path.join(apiDir, filename);

    fs.writeFileSync(filepath, JSON.stringify(reflection, null, 2));
    console.log(`Created: ${filename}`);
});

// Create index.json
const indexData = {
    message: "AA Daily Reflections API",
    version: "1.0.0",
    endpoints: {
        individual: "/api/{month}-{date}.json",
        example: "/api/1-2.json"
    },
    usage: "Access individual reflections by date using the format: /api/{month}-{date}.json",
    availableDates: dates
};

fs.writeFileSync(
    path.join(apiDir, 'index.json'),
    JSON.stringify(indexData, null, 2)
);

console.log('\nAPI files generated successfully!');
console.log(`Total files created: ${dates.length + 1}`);
