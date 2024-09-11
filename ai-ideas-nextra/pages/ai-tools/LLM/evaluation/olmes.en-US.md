# Olmes

- [Olmes](https://github.com/allenai/OLMo-Eval/tree/main/olmo_eval/tasks/olmes_v0_1)
    - OLMES is a **standard for reproducible language model evaluations** that is open, practical, completely documented, and **can be applied** to current leaderboards and evaluation code bases.
    - We identify and review the varying factors in evaluation practices adopted by the community and provide **recommendations guided by results** from existing literature and new experiments investigating open questions. OLMES is designed to facilitate robust **comparisons of model performances**, both during model development and when comparing final powerful models, and can be used across a range of model sizes e.g., from 1B to 70B.
    - [OLMES: A Standard for Language Model Evaluations](https://arxiv.org/abs/2406.08446) arxiv
    - [paper pdf](https://arxiv.org/pdf/2406.08446)
    - View the evaluation source code on GitHub: [OLMES LLM Evaluation Standard (v0.1)](https://github.com/allenai/OLMo-Eval/blob/main/olmo_eval/tasks/olmes_v0_1/README.md)


    - [OLMES: A Standard for Language Model Evaluations](https://www.semanticscholar.org/paper/OLMES%3A-A-Standard-for-Language-Model-Evaluations-Gu-Tafjord/c689c37c5367abe4790bff402c1d54944ae73b2a) paper pdf


## OLMES LLM Evaluation Standard (v0.1)

[olmes_v0_1](https://github.com/allenai/OLMo-Eval/blob/main/olmo_eval/tasks/olmes_v0_1/README.md) github:

OLMES (Open Language Model Evaluation Standard) is a **set of principles and associated tasks, for evaluating large language models (LLMs)**. See our paper OLMES: [A Standard for Language Model Evaluations (Gu et al, 2024)](https://www.semanticscholar.org/paper/OLMES%3A-A-Standard-for-Language-Model-Evaluations-Gu-Tafjord/c689c37c5367abe4790bff402c1d54944ae73b2a) for more details.

The current version includes:

- Standardized formatting of dataset instances
- Curated, few-shot in-context examples for each task
- Evaluate both multiple-choice (MCF) and cloze-form (CF) formulations and use maximum score
- Standardized probability normalization schemes for CF
- Prescribed implementations details:
    - Sampling of 1000 instances for each task if more than 1500
    - Use test split if labels are available, otherwise use validation split
    - For MMLU use macro average over tasks
    - Restrict to maximum 2048 tokens per input

The full list of tasks in the v0.1 standard is as follows (more tasks, including generative CoT, to come):

- ARC-Challenge
- ARC-Easy
- BoolQ
- CommonsenseQA
- HellaSwag
- MMLU
- OpenBookQA
- PIQA
- Social IQa
- WinoGrande

---



## OLMES: A Standard for Language Model Evaluations

https://arxiv.org/pdf/2406.08446

Progress in AI is often demonstrated by new models claiming improved performance on tasks measuring model capabilities. Evaluating language models in particular is challenging, as small changes to how a model is evaluated on a task can lead to large changes in measured performance. **There is no common standard** setup, so **different models are evaluated** on the same tasks **in different ways**, leading to **claims** about which models perform best **not being reproducible**. We propose **OLMES**, a completely documented, practical, open **standard for reproducible LLM evaluations**. In developing this standard, we identify and review the varying factors in evaluation practices adopted by the community - such as details of prompt formatting, choice of in-context examples, probability normalizations, and task formulation. In particular, OLMES supports **meaningful comparisons** **between** smaller base **models** that require the unnatural "cloze" formulation of multiple-choice questions against larger models that can utilize the original formulation. OLMES includes well-considered **recommendations guided by results** *from existing literature* as well as new experiments investigating open questions.