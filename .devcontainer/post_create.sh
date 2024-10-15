#!/bin/sh

set -e  # Exit immediately if a command exits with a non-zero status.

# Run npm install in the workspace root
sudo npm install --legacy-peer-deps

# Change directory to ai-ideas-nextra and run npm install
cd ai-ideas-nextra
sudo npm install

# Start the knowledge base development server
npm run dev