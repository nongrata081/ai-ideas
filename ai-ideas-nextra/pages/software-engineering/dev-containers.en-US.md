# Dev Containers

[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set.

The Dev Containers extension lets you use a Docker container as a full-featured development environment. Whether you deploy to containers or not, containers make a great development environment because you can:

Develop with a consistent, easily reproducible toolchain on the same operating system you deploy to.
Quickly swap between different, separate development environments and safely make updates without worrying about impacting your local machine.
Make it easy for new team members / contributors to get up and running in a consistent development environment.
Try out new technologies or clone a copy of a code base without impacting your local setup.
The extension starts (or attaches to) a development container running a well defined tool and runtime stack. Workspace files can be mounted into the container from the local file system, or copied or cloned into it once the container is running. Extensions are installed and run inside the container where they have full access to the tools, platform, and file system.

You then work with VS Code as if everything were running locally on your machine, except now they are separated inside a container.

![](./remote-containers-readme.gif)