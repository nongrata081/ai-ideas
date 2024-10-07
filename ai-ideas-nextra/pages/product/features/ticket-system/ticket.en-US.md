# Ticket

## UI



## Description

### Prompt persistence

Tickets serve:
- as containers for
    - **prompt persistence**
        - abstract away certain parts of the prompt (by a user to LM) into a persistent form, which can be acted on again and again for different purposes
    - description of the desired functionality
    - full context of the work done after (prompt) (re) execution
- for atomicity of the definition of app's functionality

Persistence of tickets allows to **easily** prompt a LM to **(re) generate a certain part of the application** (with possible editions) any number of times (which would be much harder in case of editing an unpersisted text prompt again and again by hand) by simply providing a ticket number.

> ### Ticket preparation
> 
> **Initial phase** of the software development would be a **ticket preparation**, similar to data preparation before training a LM. Users would have first to prepare tickets, and then execute an LM on them.

## Ticket context

Each ticket after execution of it should have **full context** of everything related to it (for better visibility, debugging, regeneration, etc.):

- **related** (highligted) **code** of its implementation (file(s), LOC's)
- (for frontend) **snapshots** of **visual regression** testing
- (prompt) ticket **execution logs**
- **BDD testing reports**
- **e2e testing reports**
- **unit testing reports**
- business value ?
- story points (compute points) ? (how much compute is required for execution)
- **definition of done**
- **NFRS (non-functional requirements)**
- **user story**
- **acceptance criteria**

## Ticket types

SAFe specific

- [Story](/product/features/ticket-system/ticket/ticket-types/story)
- [Enabler story](/product/features/ticket-system/ticket/ticket-types/enabler-story)
- [Feature](/product/features/ticket-system/ticket/ticket-types/feature)
- [Enabler feature](/product/features/ticket-system/ticket/ticket-types/enabler-feature)
- [Capability](/product/features/ticket-system/ticket/ticket-types/capability)
- [Enabler Capability](/product/features/ticket-system/ticket/ticket-types/enabler-capability)
- [Epic](/product/features/ticket-system/ticket/ticket-types/epic)
- [Enabler epic](/product/features/ticket-system/ticket/ticket-types/enabler-epic)

Other

- bug fix

---

## Examples

### User story

...

### Enabler story

...

### Feature

...

### Enabler feature

...

### Capability

...

### Enabler Capability

...

### Epic

...

### Enabler epic

...

---

## TDD / BDD

Each ticket might be generated with TDD (BDD) approach, including generating e2e tests first and then generating the code.

## Manual evaluation

> There should be a possibility to evaluate the quality and results of the LM's execution of the ticket on the atomic level (each **[execution run](/product/features/software-engineer-ai/prompt-execution#execution-run)**). 

Users should be able to provide human feedback with a feedback form through an easy-to-use UI.

### Human feedback form

- [Select](https://mui.com/material-ui/react-select/): Execution run
- [Textfield](https://mui.com/material-ui/react-text-field/#multiline): Description of the feedback (what went wrong, what user wanted instead, etc.)
- [Upload](https://mui.com/material-ui/react-button/#file-upload): Image or any other document to supplement the text

This feedback might be as detailed as possible. LM(s) might then be continuously trained on it. The SEAI could then be continuously improved by the means of open-source community using it and contributing back with PRs.

- User generates code locally
- Gets some mistakes done by LM
- Provides feedback
- LM is trained on it (yes, on a single feedback)
- LM executes the prompt again
- ... feedback & retry loop continues, until the desired result is reached
- User creates a pull request with updates of the trained model
- PR is reviewed and is either accepted & merged / cancelled

## Ticket Versioning

Tickets can be versioned. When ticket is edited, its versioned is bumped. Tickets are the main unit of work in SEAI. It is considered normal for tickets to be edited / updated with time (probably growing from more simple into more complex), thus versions for tickets' change tracking. Each **[Execution Run](/product/features/software-engineer-ai/prompt-execution#execution-run)** is registered on a certain **ticket version**.

### Ticket Version

For representing a certain ticket version use `#` sign and a number `N`, e.g. `#1`, `#2`, `#3`, etc.