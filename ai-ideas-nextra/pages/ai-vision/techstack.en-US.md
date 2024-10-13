# TechStack

It is possible to build desktop apps with:
- Rust+Tauri+JS(Next.js) 
- Electron


what about Tauri + Nx ?
Nx + Rust?

---

- Agentic framework
    - Langchain python
        - platform
        - most capable (?) compared to other frameworks
        - integrations (compared to langchainjs)
        - has [integration with DSPy](https://python.langchain.com/v0.2/docs/integrations/providers/dspy/) (even though not all of its capabilities)
    - Langchainjs (?)
        - '+' same nx monorepo tooling
        - '+' easy usage in next.js
        - '-' less capabilities
    - Vercel AI SDK (?)
        - '+' native next.js integration
            - a lot of features out of the box
        - '+' same nx monorepo tooling
        - '---' few capabilities
            - **no local models**

- Python monorepo
    - nx (?)
        - [@nxlv/python](https://github.com/lucasvieirasilva/nx-plugins/tree/main/packages/nx-python)
            - [Poetry Python Nx Monorepo](https://betterprogramming.pub/poetry-python-nx-monorepo-5750d8627024)
        - [nx-python-pdm](https://github.com/dman926/nx-python-pdm)
    - pants (?)

- Local LLM
    - Ollama
    - Llama 3.1 8b

- Self-refine
    - DSPy (?)

---

## Actual stack for next.js app

- Node v20.17.0
- npm v10.8.2
- bun v1.0.35
- nx v19.8.2

---

## Build tools

### Rust

[Platform Support](https://doc.rust-lang.org/nightly/rustc/platform-support.html)

### Tauri

[Target](https://v2.tauri.app/reference/acl/capability/#target)

- MacOS
- Windows
- Linux
- Android
- iOS

### Deno

[Supported targets](https://docs.deno.com/runtime/reference/cli/compiler/#supported-targets)

- Windows
- macOS
- Linux

