// scripts/build-config.js
const fs = require('fs');
const path = require('path');

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ NEXT_PUBLIC_GEMINI_API_KEY is not set.");
  process.exit(1);
}

const output = `window.GEMINI_API_KEY = "${apiKey}";\n`;

const outputPath = path.join(__dirname, '../public/config.js');
fs.writeFileSync(outputPath, output);
console.log("✅ public/config.js has been generated.");
