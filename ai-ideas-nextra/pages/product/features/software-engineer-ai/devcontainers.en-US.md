# Devcontainers

Generate, maintain & operate on devcontainers according to [Devcontainers Considerations & Vision](/product/development/considerations/devcontainers-considerations)

- Scaffold a repository
- Scaffold a devcontainer setup + add `Open in devpod` button (examples: [devpod templates](https://github.com/loft-sh/devpod-templates), e.g. [docker-in-docker](https://github.com/loft-sh/devpod-templates/tree/main/docker-in-docker)), run it and develop everything in it
    - [![Open in DevPod!](https://devpod.sh/assets/open-in-devpod.svg)](https://devpod.sh/open#https://github.com/loft-sh/devpod-templates@subpath:docker-in-docker)
- Generate documentation for how to use a devcontainer + suggested [development workflow](/product/development/considerations/devcontainers-considerations/development-workflow) and [deployment (shipping) workflow](/product/development/considerations/devcontainers-considerations/deployment#deployment-shipping-workflow)
- the workflow should be: AI-first + human-assisted on-demand (a human developer should be able to able to chip into the development process with 1-click, in case if there is something that the AI cannot properly achieve or do itself). Possibly with [devpod](/product/development/considerations/devcontainers-considerations#devpod) ?
