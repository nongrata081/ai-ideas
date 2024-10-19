# Platform specific node_modules

as stated [here](https://github.com/npm/feedback/discussions/648#discussioncomment-2690230), platform-specific node_modules, dependent on:
- **os** (`process.platform`)
- or **cpu** (ie. `process.arch`)

**is an intended behavior**. Installed `node_modules` are indeed platform-specific, and aren't meant to work across different os `process.platform` or different cpu `process.arch`. So that, if you're trying in **macOS** to execute an npm package (or a set of those) in **node_modules** installed in **Ubuntu**, **it won't work**.

> With this in mind, & for the best results, it **makes sense to run `npm install` on the exact same architecture/environment you expect to leverage the generated node_modules again elsewhere** (ex. run inside a Docker instance that maps to whatever your **ci/staging/production** env is expected to be). If you use a strategy like this then you shouldn't have problems.

> That said, if you run `npm ci` it will actually blow away anything in your node_modules & only leverages the lockfile as a source-of-truth (ref. https://docs.npmjs.com/cli/v8/commands/npm-ci). If you're trying to reuse/check-in your node_modules folder then you'll want to **stick with `npm install`** vs. flip-flop between the two.

---

## Consequences

> What consequences does it imply?

- what about local development? If I'm on macOS, does it mean that all local development I'm going to do should be inside the container by default? Including installing new tools, experimenting with them?
    - Well, if all development done locally is gonna be done inside the container (which is future and an industry standard way of development anyways (since nobody's probably going to deploy apps and services to macOS?)), then it means few things:
        - one more layer of software to maintain (containers) during development 
        - higher entry barrier for developers (for those for example, who might not be able to cope with Docker). At least until the time, when containerized envs become an industry standard by default, super-easy, supported by all tooling, and performant (take hardware consumption into account, since Docker is quite a heavyweight thing to run. What about it's alternatives? What is devpod built on?).
        - Because everything should be now setup and done from within container, it might add a little bit of friction and time-cost when installing new tools and trying them out. But then, if succeeded locally with this once, then it becomes scalable for other stages (?) (like CI, production?). This has yet to be verified. (What it's like to run apps, services, DBs in production? In containers?). Should be anyways less hassle than without those.
        - Much higher reliability & reproducibility of the software execution & all processes related to it. (No more "works on my machine" or dev environment related issues). (It is possible to write & run environment -related sort of unit tests to ensure everything is on place according to requirements before running the app?)
        - Probably some limitations for tooling (could be that some tools are available for macOS but not for Ubuntu)? (Was I going to deploy such things to prod anyway?). Enforcement on usage devcontainers brings the context and production environment-related considerations closer to developer, to the initial stage of the development, since now his local development environment is same as production environment, to which he is going to deploy. It is going to be the same container.
        - It also means that you develop not in macOS really, but in Ubuntu. And thus, have to do everything Ubuntu-way (interact with the terminal, executing commands, etc).
        - Local SSH & Git - devcontainers interop. Some time-cost might be involved here as well, e.g. for setting up things like Git Credentials (SSH) forwarding.
        - However, forwarding SSH-agents seems to be cumbersome and error-prone (like with adding code to .bashrc, etc). Is there an easier way to handle Git Credentials with containers, that would be the best developer experience (easy, 0-setup time) ?

---

(What about ease of deploying next.js to Vercel?) No containers, 1 click?
(What about deploying a multi-service solution (frontend, backend, DB, LM?)). 
(Vercel has DB (PostgreSQL), Next.js includes backend by default (how much of server-side can you really implement with it?))

For local development and having as much control over stuff you develop, and having it as much integrated as possible, + AI-ified across all steps.
Containers are a no-brainer.

---

Based on all that, we can state that the industry entered into container-centric development, where everything software-development related should be container-centric and container-ready first.


It means that all development / deployment operations and considerations have to take containers into account and be built around them.

Development workflow:

- For local development any dev should be inside a container. Any tool to be installed in the os - Dockerfile, any cli command to be run - post-create.sh

Git operations (pulling, commiting, pushing, etc.) - should be done from within container. Which also means, that trying to push from local, if you have some pre-push scripts, etc., might just not work locally from outside the container, because of having Ubuntu-specific node-modules, which won't work on macOS.

My new development environment is not macOS, it is containerized Ubuntu.

Consider alpine for deployment to production? What is image size difference? 

---

- Does it make sense from the CI / CD perspective? Yes. It is better to have the same environment for all stages: development, CI, production. So that there is less probability of any platform-specific bugs during any of these stages.

---

## Reflection 

1. Perception shift
2. Discomfort 
3. Resistance 
4. Understanding
5. Stabilization 
6. Incorporation
7. Practice. Tooling experiments, familiarity. Experience
8. Refinement. Polishing in practice.
9. Predictability. Ease of use. Psychological Comfort.
10. Performance

---

To test how entire containerized stuff works out for the app, would be nice to develop a minimum integrated solution (frontends (across enterprise runtime stack), backends (across enterprise runtime stack), DBs, LMs).

- Locally - to containers
- CI (test all ops)
- Production 
