# DSPy Mental Model

- [DSPY: COMPILING DECLARATIVE LANGUAGE MODEL CALLS INTO SELF-IMPROVING PIPELINES](https://arxiv.org/pdf/2310.03714)

---

## Glossary

- [LM prompt] **Pipeline**
    - a stack of LM prompting tecnhiques, that solves a complex task
    - **a stack of LM prompts**
- **Prompt template**
    - a string
- **Text transformation graph**
    - Imperative computation graph
- **Declarative module**
- **Parameterized module**
- **Composition**
- **Prompting**
- **Fine-tuning**
- **Augmentation**
- **Reasoning**
- **Compiler**
- **Metric**
- **Multi-hop retrieval**
- **Agent loops**
- **Self-bootstrap** [pipelines]
- **Few-shot** prompting
- **Demonstrations**
    - [expert-created]
- **Prompt-chains**
    - [expert-written]

---

As can be seen based on the paper title, it is about:

- Entities
    - LM calls
    - Pipelines
    - Compilation

So, it is about **compiling LM calls into pipelines**.

---

To solve complex tasks there are:

- LM prompting techniques
    - Stacks of those (Pipelines)

- Complex tasks are solved by stacking LM prompts into pipelines. 
- Existing [LM prompt] pipelines typically use hard-coded prompt templates (strings)
- DSPy is to develop and optimize [LM prompt] pipelines
    - by providing a more systematic approach to do it
- DSPy abstracts [LM prompt] pipelines as text transformation graphs
    - LMs are invoked through declarative modules
- DSPy modules are parameterized
- DSPy modules can learn
    - (by creating and collecting demonstrations)
    - how to apply compositions of
        - prompting [techniques]
        - finetuning [techniques]
        - augmentation [techniques]
        - reasoning [techniques]
