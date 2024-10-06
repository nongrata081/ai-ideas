# Ticket system

local, open-source

- Possible implementation
    - https://wekan.github.io/
    - https://taiga.io/
    - https://github.com/makeplane/plane
- Idea
    - as for the entire SAFe cycle, it seems logical to have tools like JIRA and Confluence as open-source tools available locally. Confluence might be substituted with Nextra. What about open-source alternative for JIRA? Make a fork of nextra (or discuss with Dima, and start building ticketing system as one of templates?)
    - In short, it seems that the decommissioning of the tools such as JIRA and Confluence in their paid flavor has come. Since it is a matter of time when such tools will turn from used by humans heavily to track their work into a sort of visibility and debugging into ai agents workflows. Having opensource tools for this, easily manipulated makes sense.
    - Introduce the **same mechanics of interaction** between people **when creating software**, but now **for human - ai**. E.g., previously - PO creates a ticket in JIRA, then a human (software engineer) picks it up, works on it, tracks all the progress on it in the ticket (linked commit updates from CVS, comments, etc). Now the same flow would be between a human (PO) and an AI (that would also keep track of all its progress on the task in the ticket). The entire communication around the task, logs, decisions made, outputs, code, will be tracked in the ticket and shown as a timeline. Having entire context of the task in a ticket (with its connections to all other entities, like features, enablers, OKRs, etc.) will also help to see things more clearly and be able to return to a task at any suitable time, pick it up and continue work on it.

    ---

