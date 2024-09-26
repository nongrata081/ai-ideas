# Product Vision

## Responsible AI

SAFe has a bit analog approach to [Responsible AI](/ai-vision/responsible-ai). My vision is just **implement all evaluation types** that are possible in **programmatic way** with LMs and AI Agents. So that any developer of an AI tool can: 

- see the benchmark dashboard in real time with a report with all evals based on studying his data and code, processes with LMs and outlines of mistakes
- & recommendations of how to fix them
- & one-click implementation of fixes (like with code linting errors)
- & risks or law violations, etc.

Make entire SAFe & Responsible AI thing just a program, which is easy to run locally for your project. Functional enough to provide real value to developers of AI. Fast enough to be performant. 

---

## Frontend

- [ ] What frontend(s) should the product have? I can build it (or some of its parts?) with:
    - nextjs as a **web-app**
    - electron as a **desktop-app**
    - native mobile app
        - iOS
        - android

---

## Product

- **Start with frontend**
    - In terms of building the product, it seems that the approach of **starting with the frontend** is the simplest, fastest and most efficient way to go further. Because then the actual product can be seen and (to some extent) experienced right away.
- **Dive into details as needed**
    - there might be a lot of features to implement in LM ecosystem, but it's possible to drown in the amount of data without narrowing down to something. So maybe investing into feature development and research as I face such need is reasonable.
- **Data persistence**
    - Local Database to persist the data of the app.
    - What else? Persistence of LM interactions? 
    - etc ?

- **User-input context-builder** - The central point in this entire thing is **user's input**. The app should **derive as much** from it, **as possible**. It should also be able to **build the current context around** it (use web-search to build the context around it as high in quality, as possible, e.g. existing tools, sources, that might be helpful, existing examples of such things on the market, existing regulations, etc). It would be nice if based on a user input the app can generate the entirety of SAFe entities right away. And then as user corrects the input, regenerate it again. Also, would be nice if a user gets several different variants of such generated entity sets. Also, a user should be able to correct separate entities, and then all other entities, that are somehow connected with that changed one, should also in some way reflect these changes and be updated - that should be analysed by the LM and suggestions should be generated - as to what changes occurred, what consequences it might bring, what can be done in order to maximize the positive effect (reaching the OKRs / Strategic themes). Check [ai-data-registry](#ai-data-registry)

- Reflect on how SAFe AI can bring people together by setting some common grounds for them regarding their work.

- Flavors - Develop few flavors of the product:
    - Individual usage
        - It'd be nice to build the product in a scalable way, e.g. default to usage by an individual person (assume open-source AI developer, who might also be a potential backer). Default to starting a product with a subset of SAFe, clearly beneficial for an individual open-source AI developer. (Those parts, that aren't such, could be opted in manually, if needed). Fields for those items would be present from scratch, but populated or not based on the flavor.
        - Focus on individual first. What for me as **for an individual** could be **clearly beneficial & useful** from the entire SAFe methodology? Default to those fields in "Individual Flavor".
    - Team
    - ART (?)
    - Solution Train (?)
    - etc.



---


## Solutions

- **Local knowledge base tool** (open-source)
- **Local ticketing system** (open-source)
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
    - **[Codebase-maintainer](/ai-ideas/codebase-maintainer-ai)** - an open-source tool with ensuring that the implemented **solution intent** still works fine after updates (dependencies bump, code patches, etc)
    - **[TechStack-planner](/ai-ideas/ai-techstack-planner)** - define an optimal techstack for a solution, based on ... (solution intent?)
    - **[UI Prototyper](/ai-ideas/ui-prototyper)** - a tool capable of creating UI prototypes (e.g. Figma / Penpot) based on text description / image

#### AI Data Registry
- **[AI Data Registry](/ai-ideas/ai-data-registry#ai-data-registry)** - a registry of actual (real-time) data for important topics, e.g. best tools for a given task (model, framework, etc.), best approach for smth, newest research on a topic, etc.
    - **[AI Data Standard](/ai-ideas/ai-data-registry#ai-data-standard)** - a standard for data sources (websites? DBs? APIs? etc.) to expose the data for crawling for AI.

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
- **[LMs reasosning capabilities](/ai-vision/build-llm#lms-capabilities)** - it would be nice to train an LLM all of the best-practices in reasoning, that are natural for myself, but are absent in LLMs