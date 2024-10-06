# Product Vision

> **Suite of tools to facilitate enterprise execution**

---

[Local-first](/product/development/data-persistence#local-first) (easily deployable & [online-ready](/product/development/data-persistence#online-ready)) **suite of tools** including frontends, backends, language models **to facilitate enterprise execution with AI**.

---

## Responsible AI

SAFe has a bit analog approach to [Responsible AI](/ai-vision/responsible-ai). My vision is just **implement all evaluation types** that are possible in **programmatic way** with LMs and AI Agents. So that any developer of an AI tool can: 

- see the benchmark dashboard in real time with a report with all evals based on studying his data and code, processes with LMs and outlines of mistakes
- & recommendations of how to fix them
- & one-click implementation of fixes (like with code linting errors)
- & risks or law violations, etc.

Make entire SAFe & Responsible AI thing just a program, which is easy to run locally for your project. Functional enough to provide real value to developers of AI. Fast enough to be performant.

---

## Solutions / Features

- [nx ai generators](/product/features/nx-ai-generators)
    - [@nxlv/python](/software-engineering/python-monorepo)
    - [**bolt.new-like app UI with MUI**](/product/features/software-engineer-ai/software-engineer-ai#opensource) (for opensource community)
- [**Continuous training pipeline**](/product/features/continuous-training-pipeline)
- [Flavors](/product/features/flavors)
- [Knowledge base](/product/features/knowledge-base)
- [Ticket system](/product/features/ticket-system)
- [software engineer AI](/product/features/software-engineer-ai/software-engineer-ai)
    - [**bolt.new-like solution**](/product/features/software-engineer-ai/software-engineer-ai#boltnew)
    - [Codebase-maintainer](/product/features/software-engineer-ai/codebase-maintainer-ai)
    - [TechStack-planner](/product/features/software-engineer-ai/ai-techstack-planner)
    - [UI Prototyper](/product/features/software-engineer-ai/ui-prototyper)
- [Solution intenter](/product/features/solution-intenter)
- [Terminal access & automation](/product/features/terminal-automation)
- [Browser access & automation](/product/features/browser-automation)
- [AI Data Registry](/product/features/ai-data-registry)
- [AI Data Standard](/product/features/ai-data-registry#ai-data-standard)
- [LMs reasoning capabilities](/ai-vision/build-llm#lms-capabilities)
- [Model switcher](/product/features/model-switcher)
- [Domain-specific perspective](/product/features/domain-specific-perspective)
- Entities
    - [Generate entities](/product/features/generate-entities)
        - [Suggest entities](/product/features/generate-entities#suggest-entities)
- [Facilitate scaling](/product/features/facilitate-scaling)
- [User-input context-builder](/product/features/user-input-context-builder)
- Prompt templates (?) - Should I use them, to have some context when sending a prompt from web page to the model? (DSPy?). E.g. each entity page to have it's own prompt template, so that there is context when a user prompt for a given entity is sent?
- **Web-containerize** Enterprise-helper

---

## Language Models

- [Open source LM capable of manipulating Operating System](/models/OS-manipulation-lm) 

---

- **Integrated solution**, that would be capable of
    - Access and operations with the Operating System and File System
        - CRUD of files
        - Writing code
        - Terminal access (executing commands)
        - Browsing
        - Running LMs locally
    - Knowledge base with UI (Confluence analog)
    - Ticket system with UI (JIRA analog)
    - SAFe system with UI
    - **How do I make it?**

---

## Users collaboration

- Users can 
    - work with the product fully locally (solo-mode)
    - deploy the app to the server and work with the product together
        - user access

How do I architect the data-persistence to satisfy both scenarios?

---

## Architecture

- **Data persistence**
    - [Local Database](/software-engineering/data-persistence) to persist the data of the app.
    - What else? Persistence of LM interactions? 
    - etc ?

---

## Random

- [Perplexity: Llama 3.1 Sonar 405B Online](https://openrouter.ai/models/perplexity/llama-3.1-sonar-huge-128k-online) $5/M input/output tokens
- [Llama 3.2 90B Vision Instruct](https://openrouter.ai/models/meta-llama/llama-3.2-90b-vision-instruct)
- [Llama 3.2 11B Vision Instruct (free)](https://openrouter.ai/models/meta-llama/llama-3.2-11b-vision-instruct:free) FREE!
- [openrouter.ai/models](https://openrouter.ai/models)
- [github.com/OpenRouterTeam](https://github.com/OpenRouterTeam)
- [litellm openrouter](https://docs.litellm.ai/docs/providers/openrouter)

---

## Legal

- **Build own** LM from sratch **or use an existing one** and build on top of it?
    - Can probably use Llama, based on [Legal Considerations](/product/legal/llama/llama) until the cutoff of **700M MAU**. For **fastest TTM**.
    - Consider [building own](https://www.youtube.com/watch?v=quh7z1q7-uc) when approaching this point? Or from the very beginning? For full control & flexibility + legal rights (intellectual property) ?

## POCs

List, what are current POCs, what I intent to achieve with them.

- Dev POCs
    - [Dev POC #1](/safe-portal/POCs/Dev/poc-1)
        - Strategic Themes + Chat with docs (?)
    - [Dev POC #2](/safe-portal/POCs/Dev/poc-2)
        - Dev POC #1 + RAG + WebSearch (?)
    - [Dev POC #3](/safe-portal/POCs/Dev/poc-3) (?)
        - Put together
            - ticket system
            - knowledge base
            - software-engineer AI
        - Implement a chain of entities
            - Strategic themes
            - Epics
            - Capabilities
            - Features
            - User Stories
    - [Dev POC 4](/safe-portal/POCs/Dev/poc-4)
        - continuous training pipeline (litgpt)
    - [Dev POC 5](http://localhost:3000/safe-portal/POCs/Dev/poc-5)
        - chat + web-container (dev env: code IDE, browser, terminal)
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