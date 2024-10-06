# Codification of typical use-cases

For codified use cases we can:

- create & maintain [nx generators](https://nx.dev/features/generate-code) for each codified typical use case
    - [Local Generators](https://nx.dev/extending-nx/recipes/local-generators)
    - [@nx/workspace:generators | Nx](https://nx.dev/nx-api/workspace/generators)
    - [nx-api/workspace#generators](https://nx.dev/nx-api/workspace#generators)
- train an LLM on a variety of different possible implementation for each use case
    - we can probably somehow label all good & high-quality examples for each use-case so that LM can recognize those examples by some keywords and implement those when provided corresponding keywords

The idea is to **target all possible use-cases in an addressed manner**, and teach LM to do that, so that code generation output that we get are of high quality, and don't require a lot of retry attempts when prompting LM.

## Typical use-cases codification (dataset?)

- Use case 1
    - Text description
    - Code
        - How do we represent the code? Entire codebase? Some parts of it?
        - If parts, then how do we make sure this code still works in a different codebase (e.g. if there is another builder, framework, etc.) ?
            - Detailed reasoning, about which code can be implemented where, when, and under which circumstances? What affects it, what doesn't? What are the sufficient conditions for this code to be applied in the new codebase? Should there be more rounds of LM & user interaction to apply such conditions?
            - In short, LM should have a very detailed reasoning about the code in order to provide high-quality prompt execution.
    - Labels (keywords?)
    - etc.
- Use case 2
- Use case 3
- Use case n

---

It might be easier to implement if we narrow down to certain SOTA tools in each domain, e.g.:

- UI-lib: MUI
- js-backend: nest.js
- js-frontend: next.js
- LM finetuning: torchtune
- LM testing: torchchat
- LM serving: torchserve / ollama / llama.cpp
- etc.

And then, if it works, expand to support other tools.
The task could be, for example, **for each use-case** and **for each tool** to gather from the entirety of github **all public repos** that use that tool and **create a high-quality dataset**.

Could look something like:

- Use case 1
    - Text description
    - Implementation
        - Tool 1
            - Code
            - Labels (keywords?)
            - etc.
        - Tool 2
        - Tool 3
        - Tool n
- Use case 2
- Use case 3
- Use case n

See (industry-wide) [Tooling Datasets](/product/features/software-engineer-ai/data/tooling-datasets).