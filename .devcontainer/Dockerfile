FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install the xz-utils package
RUN apt-get update && \
    apt-get install -y xz-utils

# Install Node.js and npm (you can choose a specific version if necessary)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs
