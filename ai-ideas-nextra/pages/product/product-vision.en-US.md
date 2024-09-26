# Product Vision

---

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

## Design kit

- [Material UI for Figma (and MUI X)](https://www.figma.com/community/file/912837788133317724)
    - [docs](https://mui.com/material-ui/design-resources/material-ui-for-figma/)

## UI Prototypes

1. Open UI-kit [MUI for Figma](https://www.figma.com/design/bJ29Pjw22O6wPkWm26oKHN/Material-UI-for-Figma-(and-MUI-X)-(Community))

2. Open UI-prototype [Figma: Enterprise-helper](https://www.figma.com/design/zgdghcttSHdMVsGZJ6I7zO/Enterprise-helper?node-id=0-1&t=oWjDYtw5fRjsHmev-1)


https://mui.com/toolpad/ ?

https://mui.com/toolpad/core/react-dashboard-layout/ ?


## User Interface

App UI:

- [collapsible] drawer
- main page area
- [collapsible] chat area