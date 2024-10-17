# Onboarding New Team Members

Your team is working on a JavaScript application. Instead of having new team members manually install Node.js, npm, and other dependencies, you provide them with a `devcontainer.json` file. They clone the repository, open it in VS Code, and the dev container sets up everything for them automatically.

```json
{
  "name": "Node.js Dev Container",
  "image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14",
  "postCreateCommand": "npm install"
}
```