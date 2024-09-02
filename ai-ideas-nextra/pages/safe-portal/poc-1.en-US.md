# POC #1

## Strategic Themes + Chat with docs

Build something minimal with LLM + agent. Say, for Strategic themes. Possible features:

- possiblility to get **help** with how **to formulate strategic themes**
    - a **chat interface** (with a sidechat on the right side of the screen), like **chat with docs**.
    - The **helper** might be trained on SAFe articles and other data (recommended by SAFe documentation?) **about strategic themes and OKRs**, based on top of **vector search** and **vector DB**. (Check vercel example for this).
- possibility to **generate strategic themes** based on some data input
    - **AI agent** (built on top of one of AI frameworks)
- possibility to **validate existing strategic themes** against SAFe guidelines
    - - **AI agent** (built on top of one of AI frameworks)

## Components

- sidechat
    - that comes along any core SAFe functionality, that comes in the left side of the window? And the side-chat in the right side of the window? Like how Pythagora works in vscode or zed.
- vector search
- vector DB
- ai agent

## Tools

- [kotaemon](https://github.com/Cinnamon/kotaemon) ?
    - An open-source RAG-based tool for chatting with your documents.
- [RAG with Vercel AI SDK](https://vercel.com/templates/next.js/ai-sdk-rag) ?
    - [RAG Chatbot Guide](https://sdk.vercel.ai/docs/guides/rag-chatbot)
    - Vercel AI SDK
    - OpenAI (local LLM?)
    - [Drizzle ORM](https://orm.drizzle.team/)
    - [postgresql](https://www.postgresql.org/) + [pgvector](https://github.com/pgvector/pgvector)
    - 
- [haystack](https://haystack.deepset.ai/) ?
    - [haystack github](https://github.com/deepset-ai/haystack)

## Examples (Chat with docs)

- [PrivateGPT 2.0 - FULLY LOCAL Chat With Docs (PDF, TXT, HTML, PPTX, DOCX, and more)](https://youtu.be/XFiof0V3nhA?si=Itj4QO92Rd1fYUGS)
- [Graph RAG UI: Powerful Chat with your Docs!](https://www.youtube.com/watch?v=eynb_QUzYJE)
- [AnythingLLM Cloud: Fully LOCAL Chat With Docs (PDF, TXT, HTML, PPTX, DOCX, and more)](https://youtu.be/SP-Y_9OEaFg?si=2pA7UJPxdoso2PD4)
- [How To Build Your Own AI Chat with Docs (PDF, TXT, HTML, PPTX, DOCX, and More)!](https://www.youtube.com/watch?v=4ZhltfGS5xE)
- [PrivateGPT 2.0](https://youtu.be/NemHxc2FGVU?si=O1-94_KE8xPqzevh)
- [Chat with Docs using LLAMA3 & Ollama| FULLY LOCAL| Ollama RAG|Chainlit](https://www.youtube.com/watch?v=YUQ9i8FwNgM)
- [Multi-modal RAG: Chat with Docs containing Images](https://www.youtube.com/watch?v=Rg35oYuus-w)
- [RAG + Langchain Python Project: Easy AI/Chat For Your Docs](https://www.youtube.com/watch?v=tcqEUSNCn8I)
- [GPT4All - Chat with your Private Documents with LocalDocs Plugin](https://www.youtube.com/watch?v=X8QbEENUZIo)
- [ULTIMATE Llama 3 UI: Chat with Docs | Open WebUI & Ollama! (Part 2)](https://www.youtube.com/watch?v=kDwEIgmqaEE)
- [How To Install Quivr 🏹 - Chat With ANY Document from ANYWHERE! (PDF, CSV, PPT, TXT)](https://www.youtube.com/watch?v=rFEbz93G9U8)
- [Private Chat with your Documents with Ollama and PrivateGPT | Use Case | Easy Set up](https://www.youtube.com/watch?v=lhQ8ixnYO2Y)
- [AnythingLLM: Fully LOCAL Chat With Docs (PDF, TXT, HTML, PPTX, DOCX, and more)](https://www.youtube.com/watch?v=NuZ0n0LPZ5E)
- [PDF To Chat: Chat with your PDF Documents on the Web For FREE!](https://www.youtube.com/watch?v=ke1Ow_Ys3WQ)
- [How To Install PrivateGPT - Chat With PDF, TXT, and CSV Files Privately! (Quick Setup Guide)](https://www.youtube.com/watch?v=jxSPx1bfl2M)
- [PrivateGPT 4.0 Windows Install Guide (Chat to Docs) Ollama & Mistral LLM Support!](https://www.youtube.com/watch?v=Ww2oelybDz8)
- [Chat With Documents Using ChainLit, LangChain, Ollama & Mistral 🧠](https://www.youtube.com/watch?v=2IL0Sd3neWc)
- [How to Build an AI Document Chatbot in 10 Minutes](https://www.youtube.com/watch?v=riXpu1tHzl0)
- [How to chat with your PDFs using local Large Language Models [Ollama RAG]](https://www.youtube.com/watch?v=ztBJqzBU5kc)
- [How to install and use PrivateGPT 2.0 Locally | Chat with Docs ( TXT, HTML, DOCX , PDF and more )](https://www.youtube.com/watch?v=SV8WTcn26Xc)
- [Retune to make a live chatbot, chatgpt, chat with docs, chat with pdf files and more using re:tune](https://www.youtube.com/watch?v=LcNPDv7NbwQ)
- [ChatGPT With Your Docs | Full Tutorial WITH Code Examples](https://www.youtube.com/watch?v=kM3DPWO7YV4)
- [PrivateGPT is INSANE! 🤯 Chat with your Docs, TXT, PDF and more 🚀 100% LOCAL (Full Tutorial)](https://www.youtube.com/watch?v=kCLHw6b3cPY)
- [AnythingLLM - Chat with Any Docs with full Privacy|Runs Offline|FREE LOCAL LLMs + NO Code](https://www.youtube.com/watch?v=J6NJCg-hI9c)
- [LangGraph + Adaptive Rag + LLama3 Python Project: Easy AI/Chat for your Docs](https://www.youtube.com/watch?v=_8JS2U1xLps)
- [AnythingLLM Free AI for Fully LOCAL Chat with Docs | Save Your Money](https://www.youtube.com/watch?v=2CVu7Tw6Yzs)

---

## Future

### Personas ?

What would persona (s) for this task be? What roles according to SAFe are eligible to formulate strategic themes (OKRs) ?
This could probably taken outside of the scope of POC, for the sake of speed and simplicity.

### Possible feature

Once and if other parts of the app become available, it is possible to connect their data to the strategic themes helper and vice versa in different ways. One of the things - track the OKRs progress based on lower level items (features, enablers, tasks, etc.), and provide visibility and intelligence about those. Summarize on each respective hierarchy level.