# Build own LLM

[linked.in post scikit-llm](https://www.linkedin.com/posts/liorsinclair_just-found-out-about-scikit-llm-sklearn-activity-7238516537513365504-nHCy?utm_source=share&utm_medium=member_desktop)

https://github.com/BeastByteAI

- [scikit-learn](https://scikit-learn.org/)
- [scikit-llm](https://github.com/iryna-kondr/scikit-llm)
    - Seamlessly integrate powerful language models into scikit-learn for enhanced text analysis tasks.
    - https://beastbyte.ai/scikit-llm.html
    - https://skllm.beastbyte.ai/
- [falcon](https://github.com/BeastByteAI/falcon)
    - Train a production-ready machine learning models in a single line of code.
    - https://beastbyte.ai/falcon.html
    - https://beastbyteai.github.io/falcon/intro.html#
- [agent_dingo](https://github.com/BeastByteAI/agent_dingo)
    - Develop production-ready LLM-powered applications in a simple and efficient way.
    - https://beastbyte.ai/agent-dingo.html
    - https://dingo.beastbyte.ai/

---

- [Andrej Karpathy: Neural Networks: Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)

Is building your own LLM something necessary for own product? For example, to get a LLM that would work not on probability map, but with certainty?

Or enhancing open source LLM would be enough (Llama 3 405B) ?

What is the vision about it?

## Enhance an LLM with own data

...

## LMs capabilities

### Reasoning

On terms of reasoning, it would be nice to train an LLM all of the best-practices in reasoning, that are natural for myself, but are absent in LLMs I use. Make a list of reasoning best practices or nice-to-haves, and add things to it as they pop up in the dev & testing process. The downsides of LM reasoning became obvious once I [tried generating SAFe entities with Llama 3.1 8B]() (did well for Strategic themes & OKRs, not so well for Portfolio Canvas). There was a lot of repetition. 

- [ ] Try generating again with Llama 3.2
    - define best in-context prompt for best results
    - define reasoning downsides
    - define possible reasoning improvements

---

There is a lot of flaws that I see in the current model's reasoning. I also see a lot of possible improvements. Which makes sense to try to implement step-by-step.

It might be a good idea to play with prompts a little bit, to see if and how I can get the best possible results without changing the model itself. And then verifying, what those results could be. E.g., if with in-context prompts results are satisfactory, maybe I can build something right away.