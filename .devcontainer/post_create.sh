#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

# Install nx globally
sudo npm add --global nx@latest

# Run npm install in the workspace root
npm install --legacy-peer-deps

# Install Playwright Browsers
npx playwright install

# Install Playwright Dependencies
npx playwright install-deps

# Change directory to ai-ideas-nextra and run npm install
cd ai-ideas-nextra
npm install

# Start the knowledge base development server
# npm run dev