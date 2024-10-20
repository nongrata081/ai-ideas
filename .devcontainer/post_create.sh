#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

# # Setup ssh identity for github
# echo -e "Host github.com\n  AddKeysToAgent yes\n  IdentityFile ~/.ssh/id_ed25519" >> ~/.ssh/config

# Install nx globally
sudo npm add --global nx@latest

# Run npm install in the workspace root
npm install --legacy-peer-deps

# Change directory to ai-ideas-nextra and run npm install
cd ai-ideas-nextra
npm install

# Start the knowledge base development server
npm run dev