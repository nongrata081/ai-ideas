# Deployment

- **Reliability**
    - **Having** `development`, `testing` and `deployment` **environments identical is reliable**. 
        - Operating System (its architecture, version)
        - tooling ([platform-specific] packages)
        - dependencies
        - binaries
        - etc.
    - It is much more reliable, rather than if you develop in one OS, but deploy to another.
- **Ease and speed**
    - It allows to streamline and automate development processes, such as: 
        - setting up a project locally (for development / testing)
        - testing a project in CI
        - deployment to production

> **All environments**, in which the code is **developed**, **tested** and **deployed** to for production, **should be identical**. This minimizes the risk of the app not working because of any environment-related differences. 

> - **Environment identity** can be represented and shared across environments by:
>   - .devcontainer.json
>   - Dockerfile
>   - docker-compose.yml

## Deployment (shipping) workflow

...