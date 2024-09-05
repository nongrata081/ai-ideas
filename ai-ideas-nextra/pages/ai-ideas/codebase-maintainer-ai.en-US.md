# Codebase Maintainer AI

[depshub](https://depshub.com/) 

what about open-source? quite sure it can become a built-in github feature one day. A matter of time.

---

Any software codebase, once written, gets deprecated and broken with time, due to updates to the underlying dependency layers.

Wouldn't it be nice to not have this problem? And have an AI that would maintain the codebase in a properly working condition by:

- updating all the underlying dependencies, including:

  - versions of runtime environments, like nodejs
  - package manager version

- updating the code itself (patches, breaking changes)
- ensuring it works on the latest dependency versions
  - e2e tests (? would that be enough)

In an ideal situation, I as a developer would like to have all this tech stuff be abstracted away and handled by an AI, that would just do all the code-related manipulations (patching code, used APIs, especially when getting breaking changes from new versions of used packages) and be able to get quickly to the solution of my domain-related goal.

---

It resembles the approach of the TDD and BDD, but AI-ified and applied to the specific codebase maintenance set of problems.

TDD and BDD exist for a long time, and are implied as a tool to make software development more predictable and durable.

Does having such AI-tool require a **BDD-first** or **Behavior first** approach for developing an app?

Imagine having a standard way to describe the behavior of an app (Cucumber, Gherkin ?) and being able to implement such behavior in the code with a prompt and update the codebase, including dependency versions, tests (if needed? E2E? Cucumber / Gherkin?) to ensure that intended app's behavior still works properly with the updated dependencies. (Isn't PythagoraAI enough for this? Should I try verifying it with one of my old codebases?) Should visual regression testing be one part of it? Should all types of tests be included by default (with options to opt-out from using each particular type of testing? E2E, Unit, Visual Regression, Performance) ?

I can imagine a process of developing an app (say, with PythagoraAI), where I in natural language specify the desired behavior I want from the app, and the AI automatically creates all the necessary tests first (E2E, then Unit, in a hierarchically consecutive way, starting from the higher-order level (domain-related goals or business logic)) and then the implementation code that fits these tests. Then also creates reference screenshots of the UI for visual regression testing automation. Also (optionally) Performance requirements (for Lighthouse?). And then acts as a bot like [renovatebot](https://github.com/renovatebot) but not just by creating a PR with updated versions of dependencies, but with the updates to the code as well.

As a result, I as a developer get regularly scheduled Pull Requests (with an option to define the frequence as in renovate) with updated dependency versions and updated codebase, that passes all tests (including their different types: E2E, Unit, Visual Regression, sonarqube?, etc.)

Could be implemented for TypeScript. Also potentially for other languages.

> **Isn't PythagoraAI sufficient for all that?**
>
> Does the possibility to generate code by interacting with an LLM via natural language make all this unnecessary?

Seems that no, it doesn't. Because the LLM itself doesn't provide all the above described logic in a complex out of the box. PythagoraAI implies prompt-based interaction of a user with an LLM, leaving all those choices to be made for the user. Who then has to perform all of the above described operations as a series of steps, submitting a separate prompt for each step (and verifying that step's results).

What could be done in that regard, is combine a complex of underlying tasks (like unit tests, e2e, bdd, visual regression, codebase maintenance, etc.) in an AI-bot, that would perform all of those things automatically and do it by standard (with a series of checkboxes to opt out from using a certain feature).

Could be like this:

- [ ] Maintain the codebase
  - ...
  - ...
- [ ] Generate BDD tests
- [ ] Generate E2E tests
- [ ] Generate unit tests

## New development flow

At the end, would be nice to get well-functioning apps **by default compliant to NFRs (non-functional requirements)** by interacting with an LLMs via prompts.

> An LLM would recognize, which tasks require implementation of those NFRs, and would build those in as a standard way for resolving prompts, when building apps and implementing app's functionality (behavior).

---

## Example

[coding-interview-university](https://github.com/jwasham/coding-interview-university) hosts some education data on CS. All data is in text, thus no dependencies, thus no maintenance headache.

While having all data in raw text is simple, and doesn't require maintenance, UX-wise it is not the best possible solution. Having a simple webapp UI (think next.js + MUI) with language-switcher might provide a more comfortable way to consume that education data.

However, it'd come at a certain cost - having to maintain the codebase, including:

- updating the dependencies
- updating the code (patches, fixing broken APIs)

**Let's consider nx as an example implementation**

- https://nx.dev/nx-api/nx/documents/migrate
- https://nx.dev/features/automate-updating-dependencies
- https://nx.dev/recipes/adopting-nx/manual
- https://nx.dev/extending-nx/recipes/migration-generators

---

## Approach

- **VSCode extension** (like PythagoraAI)
  - context-aware of the repo and its file structure
  - capable to perform CRUD on files & contents
  - capable to execute commands in CLI.
- **Local LLM** (that extension gets completions from)

### Open Interpreter ?

(locally + local llm? groq?)

[How to use Open Interpreter cheaper! (LM studio / groq / gpt3.5)](https://www.youtube.com/watch?v=FXCaJ3Ga9TE)

[Groq Models](https://console.groq.com/docs/models)

[OI locally](https://docs.openinterpreter.com/guides/running-locally)

### Aider ?

#1 SWE-bench

https://www.swebench.com/

https://aider.chat/

https://aider.chat/docs/llms.html

https://github.com/paul-gauthier/aider

---

## Goals

- [ ] Get a good reliable local LLM
- [ ] Get it to work well with [Open Interpreter](https://github.com/OpenInterpreter/open-interpreter)

---

For codebase maintenance AI, can a set of application 's features and tests act alltogether as a desired app state to be maintained, when updating all dependencies?

E.g., newer versions of the framework become available, tooling, ways and options for generation of the apps and other entities (unit test runners, e2e, etc)., so that the core desired functionality is preserved? Including (with a possible opt out?) visual regression tests (the visual state of the app, it's components), e2e flows, unit tests, etc?

