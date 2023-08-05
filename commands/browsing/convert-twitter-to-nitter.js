#!/usr/bin/env node
// Dependency: This script requires Nodejs.
// Install Node: https://nodejs.org/en/download/

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Convert Twitter to Nitter
// @raycast.mode silent

// Optional parameters:
// @raycast.icon 🐔

// Documentation:
// @raycast.description Convert Twitter link to Nitter
// @raycast.author csharp
// @raycast.authorURL https://raycast.com/csharp
// @raycast.argument1 { "type": "text", "placeholder": "Twitter Link" }

// Example Twitter link: https://twitter.com/Cron/status/1644010827647975425
const child_process = require('child_process');
let [link] = process.argv.slice(2);

if (!link) {
  console.error('No link provided');
  return;
}

try {
  link = link.replace('twitter.com', 'nitter.net');
  console.log(`Opening ${link}`);
  child_process.execSync(`open "${link}"`);
  return;
} catch (error) {
  console.error('Invalid link provided');
  return;
}
