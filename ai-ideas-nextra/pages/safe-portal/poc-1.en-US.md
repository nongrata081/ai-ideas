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

---

## Future

### Personas ?

What would persona (s) for this task be? What roles according to SAFe are eligible to formulate strategic themes (OKRs) ?
This could probably taken outside of the scope of POC, for the sake of speed and simplicity.

### Possible feature

Once and if other parts of the app become available, it is possible to connect their data to the strategic themes helper and vice versa in different ways. One of the things - track the OKRs progress based on lower level items (features, enablers, tasks, etc.), and provide visibility and intelligence about those. Summarize on each respective hierarchy level.