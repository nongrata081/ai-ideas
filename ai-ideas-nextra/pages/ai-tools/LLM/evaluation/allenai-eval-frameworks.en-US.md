# AllenAI Evaluation Frameworks

[allenai.org/evaluation-frameworks](https://allenai.org/evaluation-frameworks)
[allenai.org/olmo](https://allenai.org/olmo)

---

- [RewardBench](https://huggingface.co/spaces/allenai/reward-bench) leaderboard
    - Evaluating the capabilities, safety, and pitfalls of reward models
    - arxiv [RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)
    - paper pdf [Evaluating Reward Models for Language Modeling](https://arxiv.org/pdf/2403.13787)

---

- [WildBench](https://huggingface.co/spaces/allenai/WildBench)
    - 🦁 WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild
    - [WILDBENCH: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://allenai.github.io/WildBench/WildBench_paper.pdf) paper pdf
    - [github](https://github.com/allenai/WildBench)

---

- [ConfAIde](https://confaide.github.io/)
    - As users share more personal information with AI like their personal home assistants, it’s crucial to understand how well those models can protect that sensitive information. The ConfAIde benchmark can be used to identify critical weaknesses in the privacy reasoning capabilities of LLMs.
    - [paper](https://arxiv.org/pdf/2310.17884)
    - [arxiv](https://arxiv.org/abs/2310.17884)
    - [code](https://github.com/skywalker023/confaide)
    - [data](https://github.com/skywalker023/confAIde/tree/main/benchmark)
    - 🤫 Code and benchmark for our ICLR 2024 spotlight paper: "Can LLMs Keep a Secret? Testing Privacy Implications of Language Models via Contextual Integrity Theory"
    - Our benchmark ConfAIde evaluates inference-time privacy implications of LLMs, in interactive settings. The benchmark has 4 tiers, and you can find the dataset/scenarios under the ./benchmark directory

---

- ZebraLogic [ZeroEval](https://github.com/yuchenlin/ZeroEval) 
    - LLMs excel at information-seeking and creative writing tasks. They have significantly improved in math and coding too. But how do they perform in logical reasoning? ZebraLogic evaluates the logical reasoning abilities of LLMs via logic grid puzzles, which require multiple high-order thinking skills. Results show that LLMs still lack several abilities required for logical reasoning, like analytical thinking, counterfactual thinking, reflective reasoning, structured memorization, and compositional generalization.
    - [ZebraLogic: Benchmarking the Logical Reasoning Ability of Language Models](https://huggingface.co/blog/yuchenlin/zebra-logic) hf article
    - 🤗 Leaderboard: https://hf.co/spaces/allenai/ZebraLogic
    - 🦓 Data: https://hf.co/datasets/allenai/ZebraLogicBench
    - 💻 Code for evaluation: https://github.com/yuchenlin/ZeroEval

---

- [CoCoNot](https://github.com/allenai/noncompliance)
    - This repository contains data, code and models for contextual noncompliance.
    - In addition to more straightforward safety concerns, AI practitioners should consider the cases when models should not comply with a user’s request. Noncompliance prompts should include incomplete, unsupported, indeterminate, and humanizing requests in addition to unsafe requests. CoCoNot is a dataset that includes a set of queries that should elicit noncompliance either by curating examples from existing datasets or synthetically generating them using GPT models.
    - arxiv [The Art of Saying No: Contextual Noncompliance in Language Models](https://arxiv.org/abs/2407.12043)
    - paper pdf [The Art of Saying No: Contextual Noncompliance in Language Models](https://nbviewer.org/github/allenai/noncompliance/blob/main/paper.pdf)
    - data [allenai/coconot](https://huggingface.co/datasets/allenai/coconot)

---

- [OLMo-Eval](https://github.com/allenai/OLMo-Eval)
    - OLMo-Eval is a repository for evaluating open language models.
    - The olmo_eval framework is a way to run evaluation pipelines for language models on NLP tasks. The codebase is extensible and contains task_sets and example configurations, which run a series of tango steps for computing the model outputs and metrics.
    - Using this pipeline, you can evaluate m models on t task_sets, where each task_set consists of one or more individual tasks. Using task_sets allows you to compute aggregate metrics for multiple tasks. The optional google-sheet integration can be used for reporting.
