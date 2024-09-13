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