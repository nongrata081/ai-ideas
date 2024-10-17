# Best practices

- Keep your dev container **lightweight**
    - The more you pack into your dev container, the larger its image size grows. This can impact build and startup times. Only include tools, packages and software specifically needed for your project. Don't install extras "just in case" you might need them someday. You can always add more later if needed.
        - [Creating A Lightweight Windows Container Dev Environment without Docker Desktop](https://boxofcables.dev/a-lightweight-windows-container-dev-environment/)
        - [Lightweight Docker Images in 5 Steps](https://semaphoreci.com/blog/2016/12/13/lightweight-docker-images-in-5-steps.html)
            - 1: Use Fewer Layers
            - 2: Make Container Boot Time Predictable
            - 3: Understand and Use **[Docker Cache](https://docs.docker.com/build/cache/)** Effectively
            - 4: Use a [Small](https://github.com/devcontainers/images/tree/main/src/base-alpine) Base [Image](https://github.com/devcontainers/images/tree/main/src/base-ubuntu)
            - 5: Build Your Own Base Image
- **Use multi-stage builds**
    - Multi-stage Docker builds allow you to separate your dev environment from artifacts you want to ship. You can have one stage for your dev environment, and another to build your application. The second stage can copy only the built artifact from the first stage, keeping your final image lean.
- **Cache dependencies**
    - Caching dependencies and packages between builds can significantly speed up dev container startup times. Docker's cache directive was made for this. 
        - Add a line like `RUN npm install --cache /tmp/cache` to your Dockerfile, and Docker will reuse the cached /tmp/cache directory on subsequent builds.
        - [Use cache mounts](https://docs.docker.com/build/cache/optimize/#use-cache-mounts)
            ```docker
            FROM node:latest
            WORKDIR /app
            RUN --mount=type=cache,target=/root/.npm npm install
            ```
- **Keep containers ephemeral**
    - Treat your dev containers as ephemeral. Don't store any important files or data on the container itself. Commit all your source code and work to your host machine or a Docker volume. This allows you to freely rebuild your container image without worrying about losing work.
- **Use Docker Compose**
    - Docker Compose allows you to define multiple services - like:
        - a **database container**, 
        - **cache container** 
        - and your **dev container** 
    - in a single YAML file. With Docker Compose, you can spin up your entire dev environment with a single command. No need to start containers individually and wire them up.
        - Refer this official guide by Containers.dev using [docker compose](https://containers.dev/guide/dockerfile).
    - > Should a **language model** container also be added to docker compose (via ollama)?
        - > Should a typical example config for it be added to `docker docs` and `devcontainer docs`?
- **Bind to host networking**
    - For the easiest development experience, bind your dev container to your host machine's network. This will give the container access to services on your host like databases or API servers. It will appear as just another process on your network.
- **Keep images up to date**
    - As with any software, the components in your dev container like Ubuntu, Node, etc release updates to patch security issues and bugs. It's a good practice to periodically rebuild your dev container image to pull in the latest updates. This helps keep your environment secure and working as expected.