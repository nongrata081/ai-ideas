# Devcontainers considerations

- [Definition of Dev Containers](/product/development/considerations/devcontainers-considerations/devcontainers-definition)
- [Getting Started With Dev Containers](/product/development/considerations/devcontainers-considerations/getting-started)
- [Best practices](/product/development/considerations/devcontainers-considerations/best-practices)
- [CI/CD Environments](/product/development/considerations/devcontainers-considerations/ci-cd-enrivonments)
- [Containers tooling](/product/development/considerations/devcontainers-considerations/containers-tooling)
- [Deployment](/product/development/considerations/devcontainers-considerations/deployment)
- [Development workflow](/product/development/considerations/devcontainers-considerations/development-workflow)
- [Hardware](/product/development/considerations/devcontainers-considerations/hardware)
- [Mounting](/product/development/considerations/devcontainers-considerations/mounting)
- [Setup and Configuration](/product/development/considerations/devcontainers-considerations/setup)
- [Onboarding New Team Members](/product/development/considerations/devcontainers-considerations/team-members-ondoarding)
- [Troubleshooting](/product/development/considerations/devcontainers-considerations/troubleshooting)

---

## Conclusion

So there you have it, everything you need to know about Dev Containers to make your life as a developer so much easier.

With the power of Docker and Visual Studio Code, you now have a portable, isolated development environment that can replicate your production environment locally. No more "it works on my machine!" excuses.

You'll be coding with confidence and shipping better software in no time. 

## Vision

Instant dev environments (devcontainers + IDE)

### devpod

- What I want in terms of devcontainers? 
    - **`0 configuration devcontainers.`** 
        - Out of the box.
        - With all best practices.
        - Scaffolded for my project 
    based on its structure and guessed solution intent I'm building. In the 
    worst case, with 1-2 prompts to clarify it and generate based on that. 
        - With the implementation, that covers all typical use cases.
        - Without any hassle for setup. Ready for usage right away.
        - **`Possible solutions`**:
            - [devpod.sh](https://devpod.sh/) / [loft-sh/devpod](https://github.com/loft-sh/devpod) / [docs/what-is-devpod](https://devpod.sh/docs/what-is-devpod)
            - [![Open in DevPod!](https://devpod.sh/assets/open-in-devpod.svg)](https://devpod.sh/open#https://github.com/loft-sh/devpod-templates@subpath:docker-in-docker)
            - [devpod templates](https://github.com/loft-sh/devpod-templates), e.g. [docker-in-docker](https://github.com/loft-sh/devpod-templates/tree/main/docker-in-docker)

Implement devpod for 1 click dev environments.