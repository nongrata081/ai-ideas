# Product hardware vision

- [ ] Restructure contents of this file into more appropriate files / folders (contents cover not just hardware, but software too)
- [ ] I need separate files to keep the vision for each particular system (CI-platform, CD-platform, etc.)

> Enterprise-helper as a solution for AI-enabled self-hosting of apps, libs, services, models, AI.

- Consider designing and developing **Enterprise-helper** as an end-to-end **solution** for **AI-enabled** & self-healing, **self-hosting** of apps & services.
- This is based on my observations when searching for a cloud provider of managed k8ts. It was quite expensive to host it.
- Why not have your own k8ts and physical server? Managed by AI, with which you can interact with natural language. AI that handles everything, each aspect of it, so that you don't have to deal with it on your own. With physical servers & required hardware and software, pre-setup for Enterprise needs, all open-source. Configured into packages, tailored to different team-sizes / goals. From individual, small teams to Enterprise.

---

The point is, that if such AI will be able to manage a physical server end-to-end, self-heal and reduce the manual maintenance, required for it, then Enterprises themselves might be interested in it.

---

Next step in this logic. It would be logical for producers of hardware to include AI into their hardware systems, so that it is shipped with AI onboard right away. Enabling to interact with everything in their hardware through a standardized AI-interface and protocol, with just a natural language. And to achieve anything done previously with older interfaces (what are those? Cli-commands? Else?) in a much simpler way.

---

Should I consider building (or assembling from existing products (e.g. compute blade)) a compute cluster with task-specific hardware for:

- CI server (e.g. AI-fied [cloud.nx.app](https://cloud.nx.app/) but locally and for free?)
    - DevOps for apps, libs
    - MLOps for LMs, data
- AI Server for performant hardware-demanding LMs like Llama 3.1 405B, for free
    - separate server to train LMs
    - separate server to run LMs
    - use via local network via API ()?
        - [as a code assistant](https://www.youtube.com/watch?v=ayWcs5FbxGY&t=727s) ?
        - for other things ?

Imagine scalable production-ready full-cycle **AI-app-development hardware-stack** as a **commodity**. (At such a cheap affordable price, that anybody can buy it. Any individual. And scale it up to meet enterprise compute volumes, if needed).

### CI-server

#### AI for CI

Study [nx-cloud-ai](https://nx.dev/ci/concepts/nx-cloud-ai), consider implementing features alike, e.g.:

> AI for your CI
> 
> Identify and **resolve task failures** instantly with intelligent explanations and actionable solutions. Set your desired CI run time, and Nx Cloud will match it. Our **custom AI model** analyzes your previous runs, then **dynamically predicts and allocates** the optimal number of agents. The more you use it, the smarter it gets. Take the guesswork out of your work.

#### Other

Should be performant enough in order to be able to run **DevOps for apps/libs**, but also **MLOps for LMs, Data**. Ideally have an open-source solution like nx, but also cloud solution like cloud.nx.app.

- [gitea](https://about.gitea.com/) - [Open-source Private DevOps Platform](https://github.com/nitehub-org/nitehub).
    - [Code (Git) Hosting](https://about.gitea.com/products/gitea/)
        - [GitLab CE Mirror](https://github.com/gitlabhq/gitlabhq) just in case
    - [CI/CD Gitea Actions](https://about.gitea.com/products/runner/) (GitHub Actions)
    - Projects
    - Packages
- [git-lfs](https://github.com/git-lfs/git-lfs) for gitea? (for ML purposes)
- [harness](https://github.com/harness/harness) ?
    - Harness Open Source is an all-in-one platform that integrates source code management, CI/CD pipelines, hosted development environments, and artifact (registries) management.
    - [harness.io/docs/open-source](https://developer.harness.io/docs/open-source)
        - Continuous Delivery & GitOps
        - Continuous Integration
        - Artifact Registry
        - Cloud Development Environments
        - Database DevOps
        - Chaos Engineering
        - Cloud Cost Management
        - Code Repository
        - Feature Management & Experimentation
        - Infrastructure as Code Management
        - Internal Developer Portal
        - Security Testing Orchestration
        - Service Reliability Management
        - Software Engineering Insights
        - Supply Chain Security
    - Good example for inspiration. AI-ified toolchains. Reported Leader by Gartner
    - [State of developer experience](https://www.harness.io/state-of-developer-experience) report
    - [AI DevOps assistant](https://www.harness.io/products/ai-native-software-delivery#ai-devops-assistant)

- [opentofu](https://github.com/opentofu/opentofu) for Infrastructure as Code ?

#### CI-platform Status Page

[Using hud.pytorch.org](https://github.com/pytorch/pytorch/wiki/Using-hud.pytorch.org)

[hud.pytorch.org](https://hud.pytorch.org/)

[pytorch/ci-hud](https://github.com/pytorch/ci-hud)

### CD Server

Local Continuous Deployment Platform like [vercel](https://github.com/vercel/vercel) (github link) ?

#### CD Server Status Page

Do we need one?

### AI-Server

...

#### AI Server Status Page

Do we need one?

### Tabletop cluster (?)

**Enterprise-helper** Compute-blade (or any other thing it might be?) **cluster** can be designed in several flavors:

1. Tabletop solution (for individual / team usage)
2. Full-fledged rack (for enterprise)