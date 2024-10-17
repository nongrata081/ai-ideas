# CI/CD Environments

Your CI/CD pipeline can use the `Dockerfile` and `devcontainer.json` to create the same environment as your local development. This **ensures that tests run in the same environment as development**, reducing discrepancies between local and CI builds.

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    container:
      image: ghcr.io/owner/repo:devcontainer
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test
```

> **Do I need Docker installed?** Yes, Dev Containers utilize Docker containerization technology. You'll need **Docker Community Edition (CE)** or higher installed.

> **Do Dev Containers replace my local development environment?** No, Dev Containers run within your local environment and development tools. They simply contain the runtimes and dependencies for your project.

> **Can I commit and push from within a Dev Container?** Yes, Dev Containers mount your local source code into the container. You can freely commit, push, pull, and work with Git as needed.

> **Do I need an internet connection to use Dev Containers?** Dev Containers do require an internet connection the first time they're built to pull dependencies. After the initial build, no internet connection is needed to use a Dev Container. However, if your project has an npm install or similar, an internet connection would be needed for those package installations.

> **Are Dev Containers platform agnostic?** Yes, Dev Containers can be used on Windows, macOS, and Linux since they utilize Docker containerization. The experience may slightly differ between operating systems but the end result is the same.

> **Can I use any code editor/IDE with Dev Containers?** Dev Containers work with any editor that supports the Remote - Containers extension including VS Code, Visual Studio, Atom, Sublime Text, and more.
