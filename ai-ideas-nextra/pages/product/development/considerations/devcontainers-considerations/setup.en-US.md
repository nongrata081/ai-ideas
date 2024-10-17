# Setup and Configuration

## Setup FAQ

- **How do I create a `devcontainer.json` file?**
    - You can create a `devcontainer.json` file manually or use the snippets provided by VS Code. The file defines the Docker image to use, the folders to mount, environment variables, and any post-create scripts to run.
- **How do I choose a base image for my dev container?**
    - Choose a base image that matches the programming language or tech stack you're using. For example, use node for Node.js projects, python for Python projects, or general-purpose images like ubuntu or alpine for more flexibility.
- **How can I add additional tools and runtimes to my dev container?**
    - You can add tools and runtimes in several ways:
        - Install them in the Dockerfile using RUN commands.
        - Use the postCreateCommand in the devcontainer.json file.
        - Use build arguments to conditionally install tools.
        - Combine multiple Dockerfiles in devcontainer.json for different setups.
        - Use Docker Compose to add sidecar containers with additional tools.

- **How do I mount my source code into a dev container?**
    - You can mount your source code using bind mounts by specifying the -v flag in the Docker run command or by defining mounts in the devcontainer.json file. This allows you to edit code on your host machine while running it inside the container.

- **How do I start debugging inside a dev container?**
    - Configure the debugging settings in the **devcontainer.json** file under the **customizations** section. Then, use the debug panel in your code editor to start the debugger, set breakpoints, and step through your code.

- **How can I share my dev container setup with my team?**
    - Share the `devcontainer.json` file within your project's repository. Alternatively, you can create a Docker image and push it to a container registry, or use Docker Compose for more complex setups and reference it in your `devcontainer.json`.

## Setting Up Container Entrypoints (Possible implementations)

When setting up Dev Containers, you need to define entrypoints which specify what commands should be run when the container starts up.

Entrypoints allow you to bootstrap your development environment by installing dependencies, setting up your codebase, starting servers, and anything else you need to do to get your project running.

There are a few options for defining entrypoints:

- **Dockerfile entrypoint** - You can define an ENTRYPOINT in your Dockerfile that will run when the container starts. This is good for simple entrypoints, but isn't flexible if you need to override it. Here is the [doc to learn more](https://docs.docker.com/reference/dockerfile/#entrypoint).

- **docker-compose.yml entrypoint** - You can define an entrypoint in your docker-compose.yml file. This gives you more flexibility, as you can override it when launching the container. Refer the [doc to read further](https://docs.docker.com/reference/compose-file/legacy-versions/#entrypoint).

- **Shell script** - You can write a shell script, mark it as executable, and use it as your entrypoint. This is a great option if you have a complex entrypoint with conditional logic. You can pass arguments to the shell script when launching the container to control its behavior.

- **Rebuild container** - You can build a new image with a different ENTRYPOINT to redefine your entrypoint. This isn't ideal, as it requires rebuilding your image. It's better to use one of the other options for a flexible entrypoint.

A good entrypoint should:

- Install any dependencies (npm install, bundle install, apt-get install, etc.)
- Set up your codebase (migrate databases, compile assets, etc.)
- Start any required servers (npm start, rails s, etc.)
- Run in the foreground and tail the logs
- Pass through any signals so Ctrl+C will stop the container

Defining a solid container entrypoint is key to having a smooth dev container experience. Put in the effort to get it right, and your dev container will start up with everything you need to get coding!

You'll be able to dive right into your work without having to deal with installation or configuration.