# AI vision

## Spatial Intelligence

[worldlabs.ai](https://www.worldlabs.ai/)

> We are a spatial intelligence company building Large World Models to perceive, generate, and interact with the 3D world.
>
> Human intelligence has many facets. One is verbal intelligence, enabling us to communicate and connect with others through language. But perhaps more fundamental is spatial intelligence, allowing us to understand and interact with the world around us. Spatial intelligence also helps us create, and bring forth pictures in our mind's eye into the physical world. We use it to reason, move, and invent - to visualize and architect anything from humble sandcastles to towering cities.
>
> We believe that artificial intelligence will help humans build better worlds. Progress has been rapid, but we have only seen the first chapter of the generative AI revolution. Language has thus far catalyzed this electrifying early moment, with text-prompted image and video models rising up alongside large language models (LLMs) as a harbinger of AI's potential in the visual realm. These models have already empowered people to work and create in new ways; but they only scratch the surface of what is possible. To advance beyond the capabilities of today's models, we need spatially intelligent AI that can model the world and reason about objects, places, and interactions in 3D space and time.
>
> **Who We Are**
>
> Today we are announcing the formation of World Labs: a spatial intelligence AI company building Large World Models (LWMs) to perceive, generate, and interact with the 3D world. We aim to lift AI models from the 2D plane of pixels to full 3D worlds - both virtual and real - endowing them with spatial intelligence as rich as our own. Human spatial intelligence evolved over millennia; but in this time of extraordinary progress, we see the opportunity to imbue AI with this ability in the near term.

> World Labs was founded by visionary AI pioneer Fei-Fei Li along with Justin Johnson, Christoph Lassner, and Ben Mildenhall; each a world-renowned technologist in computer vision and graphics. We are bringing together the most formidable slate of pixel talent ever assembled - from AI research to systems engineering to product design - creating a tight feedback loop between our spatially intelligent foundation models and products that will empower our users.

> **Where We're Going**
>
> AI is an emerging field with the potential to transform our world. However, we view it not as singularly unique but instead as part of the continuous progress of technology, continuing humanity's centuries-old quest to empower people with increasingly sophisticated tools. We believe that humans are innovative, curious, and creative; science and technology are both manifestations and drivers of these impulses. Propelling AI forward with spatial intelligence will also propel forward both individuals and humanity as a whole.
>
> Toward this goal, World Labs will develop spatially intelligent Large World Models (LWMs) that can understand and reason about the 3D world from images and other modalities. Over time, we expect to train increasingly powerful models with broader capabilities that can be applied in a variety of domains, working alongside people.
>
> Initially we will focus on generating 3D worlds without limits - creating and editing virtual spaces complete with physics, semantics, and control. We hope this will unlock new capabilities for creative users and professionals such as artists, designers, developers, and engineers. It will also allow anyone to imagine and create their own worlds, expanding the potential of generative AI from 2D images and videos to 3D worlds.

## Statistical modeling of token streams

[Statistical modeling of token streams](https://twitter.com/karpathy/status/1835024197506187617)


> *Andrej Karpathy*:
>
> It's a bit sad and confusing that LLMs ("Large Language Models") have little to do with language; It's just historical. They are highly general purpose technology for **statistical modeling of token streams**. A better name would be Autoregressive Transformers or something.
>
> They **don't care if the tokens** happen to **represent** little **text chunks**. It **could** just **as well be** little **image patches**, **audio chunks**, **action choices**, **molecules**, or **whatever**. If you can **reduce your problem to** that of **modeling token streams** (for any arbitrary vocabulary of some **set of discrete tokens**), you can **"throw an LLM at it"**.
>
> Actually, as the LLM stack becomes more and more mature, we may see a convergence of a large number of problems into this **modeling paradigm**. That is, the problem is fixed at that of "next token prediction" with an LLM, it's just the **usage/meaning of the tokens that changes per domain**.
> 
> If that is the case, it's also possible that deep learning frameworks (e.g. PyTorch and friends) are way too general for what most problems want to look like over time. What's up with thousands of ops and layers that you can reconfigure arbitrarily if 80% of problems just want to use an LLM?
>
> I don't think this is true but I think it's half true.

## Releasing AI

Autogenerate **changelogs**, have **build artifacts** for:
- apps / libs
- models / data

Introduce **release-context** for an AI-app, that would have references to everything related to a release, similar to the [ticket-context](/product/features/ticket-system/ticket#ticket-context) or [repo-context](/safe-portal/POCs/Dev/poc-6#61-repo-contextjson).

## DevOps + MLOps CI

In AI age being able to ship reliable software implies that you have to run all OPS (traditional **development operations** for linting, building, testing,  etc. for applications and libraries & **machine learning operations** like training, fine-tuning, evaluating, etc) in an automated way in **CI** as a part of your every-day development / training workflow and for making releases.

## Web-containers & bolt.new

Revolution in AI. bolt.new -like apps will most probably soon take over in every field. Imagine apps with chat with LM on the left-side + web-containerized dev environment on the right side - with an OS and stack of software (Penpot for UI prototyping, Databases and anything else open-source for any kind of work), fully manipulated by LM.

Long story told short.

![](./product/features/software-engineer-ai/img/boltnew-step-1-chatUI.png)

![](./product/features/software-engineer-ai/img/boltnew-step-2-prompt-webcontainer.png)

![](./product/features/software-engineer-ai/img/boltnew-step-3-preview.png)

![](./product/features/software-engineer-ai/img/boltnew-step-3-preview-2.png)

https://github.com/stackblitz/bolt.new

https://github.com/stackblitz/bolt.new/blob/main/CONTRIBUTING.md

### Similar examples

- [E2B Fragments](https://www.youtube.com/watch?v=2HKtVGz6xVs)
    - [fragments.e2b.dev](https://fragments.e2b.dev/)
    - [github.com/e2b-dev/fragments](https://github.com/e2b-dev/fragments)
- [openai canvas](https://openai.com/index/introducing-canvas/)
    ![](./ai-vision/img/openai-canvas.png)
    ![](./ai-vision/img/openai-canvas-ad.webp)
- [anthropic artifacts](https://www.anthropic.com/news/artifacts) / [What are Artifacts and how do I use them?](https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them) / [How we built Artifacts with Claude](https://www.youtube.com/watch?v=vUdNaAAc4FY)
    ![](./ai-vision/img/anthropic-artifacts.png)
- [codesandbox.io](https://codesandbox.io/) (only the code IDE + browser preview)

---

- Extract useful stuff from [safe ai](https://scaledagileframework.com/ai/) like
    - MLOps
    - DataOps
    - etc. (imagine all this scaffolded locally with best practice, guidance, real-time monitoring, etc.)
- https://scaledagileframework.com/introduction-to-artificial-intelligence-ai/
- [ ] **Revisit all new added pages** and add references to all entities relevant to **updated AI Vision**
    - [ ] adopt all the best practices from AllenAI, for evals and everything
    - Understand & extract stuff from video with them
- [ ] add [red teaming](https://www.ibm.com/think/topics/red-teaming) to docs

- [ ] Extract for AI vision:
    - [introducing-openai-o1-preview/](https://openai.com/index/introducing-openai-o1-preview/)
    - [learning-to-reason-with-llms](https://openai.com/index/learning-to-reason-with-llms/) 
    - [openai-o1-system-card](https://openai.com/index/openai-o1-system-card/)

---

Extract & structure data from:

- [Roman Yampolskiy: Dangers of Superintelligent AI](https://youtu.be/NNr6gPelJ3E)
- [LangChain’s Harrison Chase on Building the Orchestration Layer for AI Agents | Training Data](https://youtu.be/6XZLoW0-mPY)

---







