# Organization-wide (voice) chat with docs

Where can the idea of interacting with knowledge and data lead?

What are potential use cases for it?

- Chat with docs (or broader, interact with knowledge or data?). There are tons of solutions that enable it. Could be a standardized feature. Cut costs for support. Voice-enabled AI Support agent.
  - To interact 1-on-1 with customers
  - To act as a helper for Support worker (human)

---

## What

Each and every process in a company / team / organization, that requires human interaction for information exchange, can be (at least to somewhat extent) complemented and/or substituted by such **“(Voice) Chat with Docs”**. Imagine:

- an **organization-wide data-lake**
  - that is **easily scaffolded**, e.g. with 1 click
  - that is very **easy to connect data-sources to** (copy-paste URL of data-source into data-lake)
    - do we have a standardized solution for real-time “broadcasting“ a data-source? that would take any sequence of data and make it available on the web with just 1 URL (to be copypasted into the data-lake) in real-time?
- a **process-wide data lake**
  - making an org-wide data-lake might be a task too complicated to implement right away. It can be split into chunks and approached bit by bit. Each bit would be more easily digestible. Imagine any repetitive process in an organization. Imagine all data, that appears during this process, continuously available in real-time in a process-wide data-lake. And then available via (voice) chat interface (e.g. via Slack / Discord / WhatsApp / Telegram / any other interface).
- a **(Voice) Chat with Docs**, that allows any team member to get any company-wide / organization-wide knowledge on any related topic just by interacting with such chat (through a text or voice interface, e.g. either by typing text messages or sending voice messages)

---

## Why

Justification

Such solution could potentially significantly cut time spent on getting knowledge on any topic within a team, whatever its size:

- Faster, cheaper, wider information retrieval
- Less time & money spent on communication and information exchange
  - Fewer meetings between team-members to get knowledge about things
  - Less time spent during such meetings
- Any information about anything in the company at your fingertips 24/7

---

## Technical

- [GraphQL Mesh](https://the-guild.dev/graphql/mesh) as a Data Gateway for any kind of data?
- [Grok-1](https://github.com/xai-org/grok-1) as an open-source LLM ?
- [Qdrant](https://github.com/xai-org/qdrant) as a vector database?
- [Langchain ?](https://github.com/langchain-ai/langchain)
- [Haystack ?](https://haystack.deepset.ai/)
  - [Prompting LLMs Using Haystack](https://www.youtube.com/watch?v=-TfPkX3IoUQ)
  - [Building Applications with LLM-based Agents](https://drive.google.com/file/d/1YLYll8GWCV4EjlWJ35q_eyoGYy-iadwb/view)

---

## Nice to have

- Inference
  - Continuous (train in background on Real-time data, showing timestamps of last data model was trained on, e.g. Feb 24, 13:30)
  - Fast (have the latest, real-time data available all the time)

---

## Challenges

- Continuously training a model on an entire data-lake might be a compute-heavy task, taking into account initial amount of data for the model to be trained on and amount of data being continuously added to it. How do we solve it? Cloud compute?
- To have such data lake requires to have as a prerequisite any data (from any source, from software, that people use, to static assets, like images, and whatever, etc.) available for this data lake quickly and easily. How do we solve this (taking into account concerns about data safety and privacy)? Do we transfer that data online? Should any software have a way to enable such data online easily (1 click)? **Should there be a standardized way to expose and add such data into a data lake?** Once and if there is such a standard way (imagine all software was updated to have such data available), **should there be an open-source package to enable fast and secure delivery of such data from data-sources to a data lake** (continuously, fastly, reliably)?

---

## Inspiration

- [AnythingLLM Cloud: Fully LOCAL Chat With Docs (PDF, TXT, HTML, PPTX, DOCX, and more)](https://www.youtube.com/watch?v=SP-Y_9OEaFg)
- [FREE AI Voice Tool: Text-to-Speech (TTS) & Voice Cloning - MetaVoice](https://www.youtube.com/watch?v=gVKbf31hrYs)
- [FREE AI Voice Tool: Best Opensource AI Text-to-Speech (TTS) - Amphion Better Than Bark!](https://www.youtube.com/watch?v=gwrKk649-Pw)
