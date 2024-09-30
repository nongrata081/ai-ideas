# Product Vision

## Responsible AI

SAFe has a bit analog approach to [Responsible AI](/ai-vision/responsible-ai). My vision is just **implement all evaluation types** that are possible in **programmatic way** with LMs and AI Agents. So that any developer of an AI tool can: 

- see the benchmark dashboard in real time with a report with all evals based on studying his data and code, processes with LMs and outlines of mistakes
- & recommendations of how to fix them
- & one-click implementation of fixes (like with code linting errors)
- & risks or law violations, etc.

Make entire SAFe & Responsible AI thing just a program, which is easy to run locally for your project. Functional enough to provide real value to developers of AI. Fast enough to be performant. 

---

## Product development approach

- **Start with frontend**
    - In terms of building the product, it seems that the approach of **starting with the frontend** is the simplest, fastest and most efficient way to go further. Because then the actual product can be seen and (to some extent) experienced right away.
- **Dive into details as needed**
    - there might be a lot of features to implement in LM ecosystem, but it's possible to drown in the amount of data without narrowing down to something. So maybe investing into feature development and research as I face such need is reasonable.
- One possible approach to development could also be - start with building a simple but well functioning **open-source tool for regular SAFe workflow** (without AI). Then, add AI capabilities to it.

## Product Frontend

- [ ] What frontend(s) should the product have? I can build it (or some of its parts?) with:
    - nextjs as a **web-app**
    - electron as a **desktop-app**
    - native mobile app
        - iOS
        - android
- [ ] update this part with reflections and considerations from latest findings: OpenHands, xterm.js, open-source ticketing system, open-source knowledge-base
    - what capabilities does web-ui have? is it sufficient for my project goals as of now?

---

## Architecture

- **Data persistence**
    - Local Database to persist the data of the app.
    - What else? Persistence of LM interactions? 
    - etc ?

## Product

- **User-input context-builder** - The central point in this entire thing is **user's input**. The app should **derive as much** from it, **as possible**. It should also be able to **build the current context around** it (use web-search to build the context around it as high in quality, as possible, e.g. existing tools, sources, that might be helpful, existing examples of such things on the market, existing regulations, etc). It would be nice if based on a user input the app can generate the entirety of SAFe entities right away. And then as user corrects the input, regenerate it again. Also, would be nice if a user gets several different variants of such generated entity sets. Also, a user should be able to correct separate entities, and then all other entities, that are somehow connected with that changed one, should also in some way reflect these changes and be updated - that should be analysed by the LM and suggestions should be generated - as to what changes occurred, what consequences it might bring, what can be done in order to maximize the positive effect (reaching the OKRs / Strategic themes). Check [ai-data-registry](#ai-data-registry)

- Reflect on how SAFe AI can bring people together by setting some common grounds for them regarding their work.

---
- **Flavors** - Develop few flavors of the product:
    - Flavor types:
        - Individual usage
            - It'd be nice to build the product in a scalable way, e.g. default to usage by an individual person (assume open-source AI developer, who might also be a potential backer). Default to starting a product with a subset of SAFe, clearly beneficial for an individual open-source AI developer. (Those parts, that aren't such, could be opted in manually, if needed). Fields for those items would be present from scratch, but populated or not based on the flavor.
            - Focus on individual first. What for me as **for an individual** could be **clearly beneficial & useful** from the entire SAFe methodology? Default to those fields in "Individual Flavor".
        - Team
        - Corporate
        - etc.
    - Define, which entities are active by default for which flavors 
    - Create **different entry points into the app** (& supplement it with explanations) to facilitate different categories of users (Individual, Team, Corporate) with the app-flow & scope, pre-designed for them (different amount of active entities).

- **Facilitate scaling** (of OPs, & everything else) **from day 0**
    - Starting with SAFe from scratch might also ease probable scaling for startups (?) like build things scale-enabled from day 0 (consider how Nx helps with that for building the frontend?).
    - Architect app in such a way, that it helps to build things in an easily scalable way

## Solutions

- **Local knowledge base tool** (open-source)
- **Local ticketing system** (open-source)
    - Possible implementation
        - https://wekan.github.io/
        - https://taiga.io/
        - https://github.com/makeplane/plane
    - Idea
        - as for the entire SAFe cycle, it seems logical to have tools like JIRA and Confluence as open-source tools available locally. Confluence might be substituted with Nextra. What about open-source alternative for JIRA? Make a fork of nextra (or discuss with Dima, and start building ticketing system as one of templates?)
        - In short, it seems that the decommissioning of the tools such as JIRA and Confluence in their paid flavor has come. Since it is a matter of time when such tools will turn from used by humans heavily to track their work into a sort of visibility and debugging into ai agents workflows. Having opensource tools for this, easily manipulated makes sense.
        - Introduce the **same mechanics of interaction** between people **when creating software**, but now **for human - ai**. E.g., previously - PO creates a ticket in JIRA, then a human (software engineer) picks it up, works on it, tracks all the progress on it in the ticket (linked commit updates from CVS, comments, etc). Now the same flow would be between a human (PO) and an AI (that would also keep track of all its progress on the task in the ticket). The entire communication around the task, logs, decisions made, outputs, code, will be tracked in the ticket and shown as a timeline. Having entire context of the task in a ticket (with its connections to all other entities, like features, enablers, OKRs, etc.) will also help to see things more clearly and be able to return to a task at any suitable time, pick it up and continue work on it.
- Imagine a user (human) generating OKRs with AI. Then step-by-step, approving and whenever needed, re-iterating on generation steps & correcting mistakes, generates all corresponding items downstream for all hierarchy levels (features, enablers, etc). Eventually, generating tickets (as user stories). And then generating the code for it, along with any other results needed (designs, documentation, etc).
- **Integrated solution**, that would be capable of
    - Access and operations with the Operating System and File System
        - CRUD of files
        - Writing code
        - Terminal access (executing commands)
        - Browsing
        - Running LMs locally
    - Knowledge base with UI (Confluence analog)
    - Ticketing system with UI (JIRA analog)
    - SAFe system with UI
    - **How do I make it?**

- Local open-source **software engineer**
    - Possible implementation - [**OpenHands github**](https://github.com/All-Hands-AI/OpenHands) / [**all-hands.dev**](https://www.all-hands.dev/)
        - paper [OpenDevin: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)
        - [Youtube Video 1](https://www.youtube.com/watch?v=Q3DyeIV96tY)
        - [Youtube Video 2](https://www.youtube.com/watch?v=FCqsjwfmrmM)
        - [Youtube Video 3](https://www.youtube.com/watch?v=dKD4a_sv69o)
        - Context
            - [gh issue: ollama](https://github.com/All-Hands-AI/OpenHands/issues/3960)
            - [old: Using Ollama](https://github.com/All-Hands-AI/OpenHands/discussions/509)
            - [old2: ollama](https://github.com/All-Hands-AI/OpenHands/discussions/2088)
            - [Local LLM Guide](https://github.com/All-Hands-AI/OpenHands/commit/08a2dfb01af1aec6743f5e4c23507d63980726c0)
            - [docs: LLM Backends](https://docs.all-hands.dev/modules/usage/llms)
        - Where is easy Ollama integration? With easy local model switching?
    - Features
        - **[Codebase-maintainer](/ai-ideas/codebase-maintainer-ai)** - an open-source tool with ensuring that the implemented **solution intent** still works fine after updates (dependencies bump, code patches, etc)
            - Have a page to list all dependencies & their versions used in the project (node version, npm version, etc.)
        - **[TechStack-planner](/ai-ideas/ai-techstack-planner)** - define an optimal techstack for a solution, based on ... (solution intent?)
        - **[UI Prototyper](/ai-ideas/ui-prototyper)** - a tool capable of creating UI prototypes (e.g. Figma / Penpot) based on text description / image

#### AI Data Registry
- **[AI Data Registry](/ai-ideas/ai-data-registry#ai-data-registry)** - a registry of actual (real-time) data for important topics, e.g. best tools for a given task (model, framework, etc.), best approach for smth, newest research on a topic, etc.
    - **[AI Data Standard](/ai-ideas/ai-data-registry#ai-data-standard)** - a standard for data sources (websites? DBs? APIs? etc.) to expose the data for crawling for AI.
        - https://github.com/BerriAI/litellm ? Call all LLM APIs using the OpenAI format [Bedrock, Huggingface, VertexAI, TogetherAI, Azure, OpenAI, Groq etc.]
        - https://docs.litellm.ai/

## Features

- **LM model switcher** - for easy switching between LM models (as in [open-webui](https://github.com/open-webui/open-webui))
- **[Solution intenter](https://scaledagileframework.com/solution-intent/)** - a capability in LM to perform actions with solution intent
    - Add possibility to recognize solution intent from UI-prototypes (images? Etc?)
    - Analyze the code to guess solution intent. Suggest implementations / improvements based on it.
- **Suggest entities** - would be nice if a user can start at any point in the SAFe journey, and fill in some entity (-ies). And then, if based on those filled entities, the app can suggest filling in other ones. E.g. I can start either with creating a ticket, or writing a code, or formulating a solution intent, and based on that, other entities can be suggested (based on guessing of the user intent).
- **Domain-specific perspective** - Implement for different roles (?) possibility to have visibility into whatever (or the entire project?) from their domain-specific perspective: 
    - Legal,
    - Finance,
    - Compliance,
    - Performance,
    - Architecture, 
    - Security, 
    - Networking, 
    - etc.
- **[LMs reasoning capabilities](/ai-vision/build-llm#lms-capabilities)** - it would be nice to train an LLM all of the best-practices in reasoning, that are natural for myself, but are absent in LLMs
- **Terminal access & automation** - I can implement a terminal in the webapp. Hypothesis: can we fine-tune Llama3.2 model on a set of prompts and code examples with Nx to generate monorepos with proper cli commands and then generate apps, libs, components, configs (& all other entities) with cli commands, in order to get a reliable high-quality result (like an app with a properly working UI with MUI, next.js, etc. from one single prompt) ? **Xterm - open interpreter**?
    - https://xtermjs.org/ / https://github.com/xtermjs/xterm.js
    - https://hyper.is/
    - Think - what can potentially be achieved with access from this webapp to terminal?
        - It is possible to run any cli utility - run commands, and get the outputs. I can think of it as having the terminal in the webapp itself (even though it is just a "proxy" that sends inputs and gets outputs from pty, but for the user experience it doesn't matter, that all this is being send and gotten via websockets. What matters is that the terminal functionality is available from a webapp. Which means I can perform actions like evaluate an LLM + plus get all functionality of the webapp around it, like render outputs of the evaluation, generate html reports(this is useful for the eval itself, not as for the webapp+terminal), what else?)
        - I can also probably add browsing capability to the app? 
- **Browser access & automation** - 
    - https://github.com/go-rod/rod
    - https://pptr.dev/
        - https://developer.chrome.com/docs/puppeteer
        - https://github.com/puppeteer
        - https://github.com/puppeteer/replay
        - https://github.com/puppeteer/recorder
            - https://developer.chrome.com/docs/devtools/recorder/
        - https://github.com/puppeteer/puppeteer
    - https://github.com/microsoft/playwright ?
        - [Playwright Python Browser Automation Crash Course | For Beginners](https://www.youtube.com/watch?v=cO997sPYZ9U)
        - https://playwright.dev/
            - In the OpenHands project, browser automation is implemented using Playwright, a powerful browser automation tool. The integration allows OpenHands agents to interact with web pages, capturing HTML, CSS, and screenshots, and executing various actions. The browser functionality was added to enable OpenHands agents (like OpenDevin) to browse live websites, collect information, and display it to the user, making it a key feature for real-time web interactions. 
            - Playwright handles tasks such as opening a browser, visiting target websites, capturing screenshots, and gathering page content, which is then communicated to the frontend. This provides users with both the URL and a visual representation of what the agent is viewing on the website​
            - https://github.com/All-Hands-AI/OpenHands/issues/138
            - [github.com/All-Hands-AI/OpenHands/blob/main/agenthub/codeact_agent/__init__.py](https://github.com/All-Hands-AI/OpenHands/blob/main/agenthub/codeact_agent/__init__.py)
            - how do they implement streaming in realtime of browser activity ?
                - In the OpenHands project, real-time streaming of browser activity is likely implemented using a combination of WebSockets and Playwright. Here’s how it typically works:
                - Browser Automation via Playwright: The backend uses Playwright to automate the browser. Playwright can interact with web pages, execute JavaScript, and capture screenshots or DOM changes as they happen. This enables the automation of tasks like navigating pages, clicking elements, and retrieving content.
                - WebSockets for Real-Time Communication: WebSockets provide a persistent connection between the backend (where Playwright is running) and the frontend (the client that is viewing the session). Through this connection, real-time updates (such as HTML content changes, screenshots, or browser events) can be streamed to the user. As Playwright performs actions in the browser, it sends data back to the server, which then relays it to the client over WebSockets.
                - Data Streaming: As the browser interacts with a page, important data—such as page content, element updates, or screenshots—can be sent incrementally to the client. This provides the user with a real-time view of what the Playwright-controlled browser is doing. Screenshots or HTML snippets can be transmitted in chunks, allowing for a more responsive experience.
                - Frontend Rendering: On the client side, JavaScript renders the streamed data (e.g., updating the DOM with new HTML or displaying new screenshots), giving users a live view of the browser's activities.
                - This method allows for near-instant updates as the browser executes commands, making it possible to monitor or control browser sessions remotely in real-time​(GitHub).
    - https://github.com/nightwatchjs/nightwatch ?
        - https://nightwatchjs.org/
        - https://nightwatchjs.org/guide/overview/what-is-nightwatch.html
    - https://developer.mozilla.org/en-US/docs/Web/WebDriver
        - https://webdriver.io/

---

## POCs

List, what are current POCs, what I intent to achieve with them.

- Dev POCs
    - [Dev POC #1](/safe-portal/POCs/Dev/poc-1)
        - Strategic Themes + Chat with docs (?)
    - [Dev POC #2](/safe-portal/POCs/Dev/poc-2)
        - Dev POC #1 + RAG + WebSearch (?)
    - [Dev POC #3](/safe-portal/POCs/Dev/poc-3) (?)
        - Put together
            - ticketing system
            - knowledge base
            - software-engineer AI
        - Implement a chain of entities
            - Strategic themes
            - Epics
            - Capabilities
            - Features
            - User Stories
- Training POCs
    - [Training POC #1](/safe-portal/POCs/Training/poc-1)
        - Fine-tuned Llama 3.1 8B
---

## LM Evaluation for SAFe

- Create own evaluation for LMs for SAFe questions.
    - Create a dataset of Q&A.
        - Base
        - Supervised
- Evaluate models against it. 
    - Get the results.
    - Compare
- Which LM performs best on this benchmark (give it a name) ?
        
---

## Prompt templates

Should I use them, to have some context when sending a prompt from web page to the model? (DSPy?). E.g. each entity page to have it's own prompt template, so that there is context when a user prompt for a given entity is sent?

---

## Random

- [Perplexity: Llama 3.1 Sonar 405B Online](https://openrouter.ai/models/perplexity/llama-3.1-sonar-huge-128k-online) $5/M input/output tokens
- [Llama 3.2 90B Vision Instruct](https://openrouter.ai/models/meta-llama/llama-3.2-90b-vision-instruct)
- [Llama 3.2 11B Vision Instruct (free)](https://openrouter.ai/models/meta-llama/llama-3.2-11b-vision-instruct:free) FREE!
- [openrouter.ai/models](https://openrouter.ai/models)
- [github.com/OpenRouterTeam](https://github.com/OpenRouterTeam)
- [litellm openrouter](https://docs.litellm.ai/docs/providers/openrouter)