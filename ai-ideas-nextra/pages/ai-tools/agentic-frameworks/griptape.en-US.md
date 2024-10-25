# griptape

[griptape](https://github.com/griptape-ai/griptape)

Modular Python framework for AI agents and workflows with chain-of-thought reasoning, tools, and memory.

Griptape is a modular Python framework for building AI-powered applications that securely connect to your enterprise data and APIs. It offers developers the ability to maintain control and flexibility at every step.

[griptape.ai](https://www.griptape.ai/)

## 🛠️ Core Components

### 🏗️ Structures

- 🤖 **Agents** consist of a single Task.
- 🔄 **Pipelines** organize a sequence of Tasks so that the output from one Task may flow into the next.
- 🌐 **Workflows** configure Tasks to operate in parallel.

### 📝 Tasks

Tasks are the core building blocks within Structures, enabling interaction with Engines, Tools, and other Griptape components.

### 🔧 Tools

Tools provide capabilities for LLMs to interact with data and services. Griptape includes a variety of built-in Tools, and makes it easy to create custom Tools.

### 🧠 Memory

- 💬 **Conversation Memory** enables LLMs to retain and retrieve information across interactions.
- 🗃️ **Task Memory** keeps large or sensitive Task outputs off the prompt that is sent to the LLM.
- 📊 **Meta Memory** enables passing in additional metadata to the LLM, enhancing the context and relevance of the interaction.

### 🚗 Drivers

Drivers facilitate interactions with external resources and services:

- 🗣️ **Prompt Drivers** manage textual interactions with LLMs.
- 🔢 **Embedding Drivers** generate vector embeddings from textual inputs.
- 💾 **Vector Store Drivers** manage the storage and retrieval of embeddings.
- 🎨 **Image Generation Drivers** create images from text descriptions.
- 🔎 **Image Query Drivers** query images from text queries.
- 💼 **SQL Drivers** interact with SQL databases.
- 🌐 **Web Scraper Drivers** extract information from web pages.
- 🧠 **Conversation Memory Drivers** manage the storage and retrieval of conversational data.

### 🚂 Engines

Engines wrap Drivers and provide use-case-specific functionality:

- 📊 **RAG Engine** is an abstraction for implementing modular Retrieval Augmented Generation (RAG) pipelines.
- 🛠️ **Extraction Engines** extract JSON or CSV data from unstructured text.
- 📝 **Summary Engines** generate summaries from textual content.
- 🖼️ **Image Generation Engines** generate images from textual descriptions.
- 🔎 **Image Query Engines** query images based on textual prompts.

### 📦 Additional Components

- 📐 **Rulesets** steer LLM behavior with minimal prompt engineering.
- 🔄 **Loaders** load data from various sources.
- 🏺 **Artifacts** allow for passing data of different types between Griptape components.
- ✂️ **Chunkers** segment texts into manageable pieces for diverse text types.
- 🔢 **Tokenizers**  count the number of tokens in a text to not exceed LLM token limits.