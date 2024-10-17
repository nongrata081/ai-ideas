# Development workflow

## Local Development Environments

You're working on a Python project that requires specific versions of Python and several libraries. With a dev container, you can create a `Dockerfile` and a `devcontainer.json` file that installs the necessary Python version and libraries. Whenever you open the project in VS Code, it automatically sets up the environment, and you can start coding immediately.

```json
{
  "name": "Python Dev Container",
  "dockerFile": "Dockerfile",
  "settings": {
    "python.pythonPath": "/usr/local/bin/python3"
  },
  "extensions": [
    "ms-python.python"
  ],
  "postCreateCommand": "pip install -r requirements.txt"
}
```

```dockerfile
FROM python:3.8-slim

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
```

## Isolated Environments

You want to test a new version of a library without affecting your current setup. You create a new branch and modify the `Dockerfile` in your dev container to use the new version of the library. If the new version causes issues, your main environment remains unaffected.

```dockerfile
FROM node:14

RUN npm install -g new-library@beta
```

## Reproducible Setups

Your project uses a specific set of tools and configurations. By committing your `devcontainer.json` and `Dockerfile` to the repository, every team member and CI/CD pipeline can use the exact same environment.

```json
{
  "name": "Consistent Dev Environment",
  "dockerFile": "Dockerfile",
  "settings": {
    "editor.formatOnSave": true
  },
  "extensions": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ],
  "postCreateCommand": "npm install"
}
```

```dockerfile
FROM node:14-alpine

RUN npm install -g eslint prettier
```

## Tooling Experiments

You want to experiment with the latest version of Go for a new project. You create a dev container that installs the latest Go version and sets up a sample project. If you decide not to proceed, you can delete the container without any impact on your local environment.

```json
{
  "name": "Go Dev Container",
  "image": "golang:latest",
  "postCreateCommand": "go mod tidy"
}
```