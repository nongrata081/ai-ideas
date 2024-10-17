# Getting Started With Dev Containers

Getting started with Dev Containers is pretty straightforward. To use them, you'll need:

A **code editor** that supports Dev Containers. Dev Containers currently work with Visual Studio Code and JetBrains IDEs like WebStorm. For this guide, we'll focus on VS Code.

**Docker Desktop installed**. Dev Containers use Docker to build and run containers. So you'll need Docker Desktop for your OS installed and running.

A **devcontainer.json** file: This file defines your container environment. It specifies things like:

- The Docker image you want to use (e.g., node:12-alpine)
- Folders to mount into the container
- Environment variables
- Post-create scripts to run

VS Code has snippets to help you generate a devcontainer.json file for popular tech stacks.

## Step-by-Step Example:

Create a new project folder:

```bash
mkdir my-dev-container-project
cd my-dev-container-project
```

Open the project in VS Code:

```bash
code .
```

Add a `.devcontainer` folder with a `devcontainer.json` file:

```bash
mkdir .devcontainer
touch .devcontainer/devcontainer.json
```

Edit the `devcontainer.json` file:

```json
{
    "name": "Node.js Sample",
    "dockerFile": "Dockerfile",
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },
    "extensions": [
        "dbaeumer.vscode-eslint"
    ],
    "postCreateCommand": "npm install",
    "remoteUser": "node"
}
```

Add a `Dockerfile` to the `.devcontainer` folder:

```dockerfile
FROM node:12-alpine
```

Build and run the container:

- Press `F1` and select "Remote-Containers: Reopen in Container" to build the container image and reopen the folder in the container.
- VS Code will build the container, install its dependencies, and start the container - all in the background.
- Your VS Code window will reload, and you'll be working directly in the container with everything set up and ready to go!

Anytime you need to build a fresh instance of the container, just run the "Remote-Containers: Rebuild and Reopen in Container" command again.

## Choosing a Base Image

Choosing a base image for your dev container is an important first step. This base image contains the basic Linux operating system and initial tools/settings that your container will build upon.

**Language-Specific Images** If you're building a container for a particular programming language like [Python](https://www.python.org/), JavaScript, or Go, start with an image tailored for that language.

These images will have the runtime and base packages pre-installed so you can get started coding right away. Some popular options include:

- python: For Python development. Comes with Python, Pip, and other basics.
- node: For JavaScript/Node.js projects. Includes Node.js and NPM.
- golang: For Go development. Comes with the Go compiler, build tools, and common libraries.

### General Purpose Images 

For a more flexible dev container base, you can choose a general purpose image like:

- [Ubuntu](https://ubuntu.com/): A popular Linux distribution with a lightweight footprint. Easy to install any languages/tools on top.
- [Debian](https://www.debian.org/): Another popular, open-source Linux OS. Stable and reliable.
- [Alpine](https://www.alpinelinux.org/): A tiny Linux distribution perfect for containers. Only a 5MB image but you can still install whatever you need.

These general images give you more control to fully customize your container's contents. However, it also means more work upfront to get your programming environment set up. It depends if you prefer convenience or flexibility!

In the end, choose an image that has:

1. The minimum tools/packages you need to get started
2. A small footprint for fast builds and load times
3. Active maintenance to keep the image secure and up-to-date

Your dev container's base image establishes a solid foundation. From there, you can install specific tools, sync in source code, and fully configure your development environment. The possibilities are endless!

### Adding Tools and Runtimes

Adding tools and runtimes to your dev container gives you a lot of flexibility. You have a few options for how to do this:

#### Install Tools/Runtimes When You Build the Image

This is good if you know exactly what you need for your project ahead of time. You can install tools/runtimes using the Dockerfile with `RUN apt-get install`.

```dockerfile
# Dockerfile
FROM node:14

# Install Python
RUN apt-get update && apt-get install -y python3 python3-pip
```

#### Install Tools/Runtimes When You Start the Container

This is useful if you want to install things at runtime or if your tooling needs change from project to project. You can install tools/runtimes using the `devcontainer.json postCreateCommand`.

```json
{
  "name": "Node.js Sample",
  "image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14",
  "postCreateCommand": "npm install && pip install requests"
}
```

#### Use `devcontainer.json` `build.args` to Pass in Tools/Runtimes as Build Arguments

This lets you build once but start the container multiple times with different tools and runtimes. You pass the build args when you start the container, and the Dockerfile uses the build args to conditionally install tools/runtimes.

```dockerfile
# Dockerfile
ARG PYTHON_VERSION=3.8
FROM python:${PYTHON_VERSION}

RUN apt-get update && apt-get install -y curl
```

```json
{
  "name": "Python Sample",
  "build": {
    "dockerfile": "Dockerfile",
    "args": {
      "PYTHON_VERSION": "3.9"
    }
  }
}
```

You can refer to this documentation for understanding the syntax and usage of build arguments: [Docker ARG documentation](https://docs.docker.com/reference/dockerfile/#arg)

#### Create a `devcontainer.json` with Multiple Builds for Different Stacks

This allows you to pick a "stack" when starting the container and get a set of predetermined tools. You define multiple build objects in `devcontainer.json`, each with a Dockerfile to install a particular set of tools. The [devcontainer.json](https://containers.dev/implementors/json_reference/) reference guide explains the available options and settings you can use to customize your development containers.

#### Install a Common Set of Tools in the Dockerfile, Then Use Install-Specific Tools in `devcontainer.json`

This gives you a base set of tools on start, then you can install additional tooling as needed for your particular project in the `postCreateCommand`.

#### Use Docker Compose to Start Additional "Sidecar" Containers with Other Tools/Runtimes

This lets you start up other containers with tooling/runtimes that your main dev container can access. You define the sidecar services in a `docker-compose.yml` file referenced by `devcontainer.json`. The [Docker Compose documentation](https://docs.docker.com/compose/) explains how to define and manage multi-container applications using Docker Compose YAML files.

```yml
# docker-compose.yml
version: '3'
services:
  dev:
    build: .
    volumes:
      - .:/workspace
    command: npm start
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
```

Using a combination of these techniques, you can craft a dev container with a robust set of tools for any development needs.

The options are plentiful - you just have to choose what works best for your particular project!