# Product Vision

> **Suite of tools to facilitate enterprise execution**

---

> Ship **solution** that helps people focus on business value

- software
- hardware

---

[Local-first](/product/development/data-persistence#local-first) (easily deployable & [online-ready](/product/development/data-persistence#online-ready)) **suite of tools** including frontends, backends, language models **to facilitate enterprise execution with AI**.

---

> Build & deploy AI apps with a mobile phone.

- resonsive markup for all pages + good UX

> Execute AI Enterprise with a mobile phone.

---

## Enterprise Runtime Stack

- Enterprise-helper (entities)
- [Continuous training pipeline](/product/features/continuous-training-pipeline)
- [Knowledge base](/product/features/knowledge-base)
- [Ticket system](/product/features/ticket-system)
- [software engineer AI](/product/features/software-engineer-ai/software-engineer-ai)
- DevOps platform
- CI-server
- CD-server
- AI-server
- Code Intelligence
- [Network intelligence](/product/features/network-intelligence)
- Enterprise Intelligence
- Team Communication
- Status Page System
- etc.

## LLM-empowered features

AI-native enterprise execution platform. Each **feature**, each **process** is to be thought of from the perspective of **how it can be enhanced with LLMs**. Throughout the entire **[Enterprise Runtime Stack](#enterprise-runtime-stack)**.

## Neural interface

Implement a neural interface to interact with LMs. Instead of sending text / voice to LMs, **make LMs able to recognize thoughts and execute them**. (e.g. **neuralink** ?)

- [emotiv](https://www.emotiv.com/)
- [EmotivAcademy](https://www.youtube.com/@EmotivAcademy/videos)
- [emotivstation](https://www.youtube.com/@emotivstation)

bci (brain-computer-interface)

## Responsible AI

SAFe has a bit analog approach to [Responsible AI](/ai-vision/responsible-ai). My vision is just **implement all evaluation types** that are possible in **programmatic way** with LMs and AI Agents. So that any developer of an AI tool can: 

- see the benchmark dashboard in real time with a report with all evals based on studying his data and code, processes with LMs and outlines of mistakes
- & recommendations of how to fix them
- & one-click implementation of fixes (like with code linting errors)
- & risks or law violations, etc.

Make entire SAFe & Responsible AI thing just a program, which is easy to run locally for your project. Functional enough to provide real value to developers of AI. Fast enough to be performant.

---

## SRE ?

Consider adding SRE management to the Enterprise-helper?

- [The Evolving SRE Engagement Model](https://sre.google/sre-book/evolving-sre-engagement-model/)
    - [ ] Extract vision from ^^

---

## Solutions / Features

- [The AI-Native Software Delivery Platform](https://www.harness.io/)
    - [Shaping the Future of AI-Native Software Delivery](https://www.harness.io/blog/accelerating-innovation-at-unscripted-2024)
    - [AI DevOps assistant](https://www.harness.io/products/ai-native-software-delivery#ai-devops-assistant)
        - study all of Harness coolness & get inspiration from
        - fill in kb with ideas, tasks
    - [Harness named a Leader in the 2024 Gartner® Magic Quadrant™ for DevOps Platforms](https://www.harness.io/resource/gartner-magic-quadrant-for-devops-platforms-2024)
    - [Harness named a Leader in the 2024 Gartner® Magic Quadrant™ for DevOps Platforms](https://www.gartner.com/reviews/market/devops-platforms/vendor/harness/product/harness/review/view/5062690)
    - [github.com/harness](https://github.com/harness)
    - [drone](https://github.com/C-EO/drone) / [drone.io](https://www.drone.io/)
- [nx ai generators](/product/features/nx-ai-generators)
    - [@nxlv/python](/software-engineering/python-monorepo)
    - [**bolt.new-like app UI with MUI**](/product/features/software-engineer-ai/software-engineer-ai#opensource) (for opensource community)
    - [github template reposities](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) ?
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
- Add IAM & SSO (**Single-Sign-On**)
    - [authelia.com](https://www.authelia.com/)
    - [authelia/authelia](https://github.com/authelia/authelia)
- Add **team communication** with [element.io]()
    - [element-hq/element-web](https://github.com/element-hq/element-web) github
    - Add realtime translations? (enable people speaking different languages to communicate in their own language, and get translations in real-time (text / voice?)) [Talk to Anyone! - Better Translations with OpenAI's NEW Realtime API](https://www.youtube.com/watch?v=T0_jOv9thyM)
- Build a **CLI-tool** for Enterprise-helper?
    - like https://github.com/cli/cli
    - https://github.com/supabase/cli
- add [codeQL](https://github.com/github/codeql) for **code security**
    - [codeql.github.com](https://codeql.github.com/)
- Add **code-intelligence** tool (for code search, fix, update) across codebases
    - with [sourcegraph](https://sourcegraph.com/) or something similar (& maintained as open-source)
    - https://github.com/sourcegraph/sourcegraph-public-snapshot
- Implement an education-portal (to help learn AI-development)
    - with [noodle.run](https://noodle.run/) / [noodle github](https://github.com/noodle-run/noodle) or similar
- vpn? 
    - https://github.com/OpenVPN/openvpn
- database package manager ?
    - https://database.dev/ - For Postgres Trusted Language Extensions
    - [pg_tle](https://github.com/aws/pg_tle) - Framework for building trusted language extensions for PostgreSQL
        - PostgreSQL provides an extension framework for adding more functionality to PostgreSQL without having to fork the codebase. This powerful mechanism lets developers build new functionality for PostgreSQL, such as new data types, the ability to communicate with other database systems, and more. It also lets developers consolidate code that is functionally related and apply a version to each change. This makes it easier to bundle and distribute software across many unique PostgreSQL databases.
    - https://supabase.github.io/dbdev/
    - https://github.com/supabase/dbdev
- Use [visulima](https://github.com/visulima/visulima) for knowledge base?
    - Update existing kb with [card links](https://www.visulima.com/docs/package/connect/introduction)
        - [cards markdown](https://github.com/visulima/visulima/blob/main/packages/error/__docs__/quickstart.mdx)
    - add comments
    - add footer
    - add reactions
- add badges to git repo with [shields](https://github.com/badges/shields)
    - code-coverage
    - stable release version
    - package manager release
    - status of third-party dependencies
    - static code analysis grade
    - SemVer version observance
    - Python (JS?) package downloads
    - Uptime Robot percentage
    - create [own badges](https://github.com/badges/shields?tab=readme-ov-file#examples) if needed
- add AI powered search (?)
    - [miurla/morphic](https://github.com/miurla/morphic)
    - [morphic.sh](https://www.morphic.sh/)
- automate syncing between your computer and cloud drive?
    - [meganz/MEGAsync](https://github.com/meganz/MEGAsync)
- add a [bookreader](https://github.com/internetarchive/bookreader) for on-site library?
    - [openlibrary-client](https://github.com/internetarchive/openlibrary-client) ?
    - [free-programming-books](https://github.com/EbookFoundation/free-programming-books)
Python Client Library for the Archive.org OpenLibrary API
- consider [Ghost](https://github.com/TryGhost/Ghost) for something?
- [typebot](https://github.com/baptisteArno/typebot.io) self-hosted chatbot builder?
- markdown powered blog - [beam](https://github.com/planetscale/beam)
- manage database with UI ? [rowy](https://github.com/rowyio/rowy)
- support maths with [mathjax](https://www.mathjax.org/) / [katex](https://katex.org/) / [ckeditor5-math](https://www.npmjs.com/package/ckeditor5-math) ?
- add rich text editor (to knowledge base?)
    - [Quill](https://quilljs.com/) / [gh](https://github.com/quilljs/quill)
    - [ckeditor 5](https://ckeditor.com/ckeditor-5/) / [gh](https://github.com/ckeditor/ckeditor5)
    - [TinyMCE](https://www.tiny.cloud/) / [gh](https://github.com/tinymce/tinymce)
    - [Slate](https://www.slatejs.org/) / [slate](https://github.com/ianstormtaylor/slate)
    - [Froala](https://froala.com/wysiwyg-editor/) / [gh](https://github.com/froala/wysiwyg-editor)
    - [Summernote](https://summernote.org/) / [gh](https://github.com/summernote/summernote)
    - [ProseMirror](https://prosemirror.net/) / [gh](https://github.com/ProseMirror/prosemirror)
    - [Trumbowyg](https://alex-d.github.io/Trumbowyg/) / [gh](https://github.com/Alex-D/Trumbowyg)
- **Share conversations** (chat) history **across** different **LM-chat apps**. (e.g. open-webui - Enterprise -helper).
- Implement **AI Assistance for Finance** 
    - Reference: **Report Cruncher** as a reference for Fin part of Enterprise-helper:
https://chuangtc.com/openai-hackathon-2023/
- Add Enterprise-helper **AI plugins for business use-cases**:
    - https://tome.app/
    - https://zapier.com/
    - https://gravitywrite.com/
    - https://audiobox.metademolab.com/
    - https://akool.com/
    - https://elevenlabs.io/
    - https://www.goenhance.ai/
    - https://pictory.ai/
    - https://taplio.com/
    - https://www.nvidia.com/nl-nl/geforce/broadcasting/broadcast-app/
    - https://revoicer.com/
- **Knowledge packages for LMs** ?
    - Is that related? : [Efficient Document Chunking Using LLMs: Unlocking Knowledge One Block at a Time](https://towardsdatascience.com/efficient-document-chunking-using-llms-unlocking-knowledge-one-block-at-a-time-355717a88c5c)
- Add LLM benchmark:
    - https://www.youtube.com/watch?v=0EInsMyH87Q
    - https://github.com/aidatatools/ollama-benchmark
    - https://llm.aidatatools.com/
- Add LLM Sentinel:
    - https://github.com/aidatatools/LLM_Sentinel
    - Read Articles, Extract !!!!
- ADD click-template-cli 
    - https://github.com/chuangtc/click-template-cli

- Update product vision. What I'm building is not just an application with features, but rather intelligence, applicable to certain domains, e.g. code intelligence, finance intelligence, quality intelligence, etc. Thus, the Enterprise-helper is a set of programmatic intelligences, capable of human-like problem-solving.
- Consider [ghosty](https://mitchellh.com/writing/ghostty-is-coming) as a terminal? 

### Finance

Enable AI-ified insights into finance & possible optimizations.

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

- **tools** for different purposes (like Vscode for coding, or Figma for UI prototyping might be released at some point **bundled with LMs**, trained for performance in their corresponding domain). Most probably, it is a matter of time, when it becomes a new industry standard.

What does it mean for the product I'm building?

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
    - [Dev POC #3.1](/safe-portal/POCs/Dev/poc-3-1)
        - Put together
            - knowledge base
            - ticket system
            - software-engineer AI
            - continuous training pipeline
            - DevOps platform
            - Status page system
    - [Dev POC #3.2](/safe-portal/POCs/Dev/poc-3-2)
        - Implement a chain of entities
            - Strategic themes
            - Epics
            - Capabilities
            - Features
            - User Stories
    - [Dev POC 4](/safe-portal/POCs/Dev/poc-4)
        - continuous training pipeline (litgpt)
    - [Dev POC 5](/safe-portal/POCs/Dev/poc-5)
        - chat + web-container (dev env: code IDE, browser, terminal)
    - [Dev POC 6](/safe-portal/POCs/Dev/poc-6)
        - generate app from strategic themes
            - repo-context.json + LM + Strategic Themes
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

## [Hardware](/hardware/requirements#reqs-for-a-cluster)

