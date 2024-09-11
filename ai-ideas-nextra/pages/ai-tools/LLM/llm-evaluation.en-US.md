# Evaluation

- [Digital Socrates: Evaluating LLMs through Explanation Critiques](https://blog.allenai.org/digital-socrates-evaluating-llms-through-explanation-critiques-12f0bed7fb7a)

---

[allenai.org/evaluation-frameworks](https://allenai.org/evaluation-frameworks)
[allenai.org/olmo](https://allenai.org/olmo)

- [RewardBench](https://huggingface.co/spaces/allenai/reward-bench) leaderboard
    - Evaluating the capabilities, safety, and pitfalls of reward models
    - arxiv [RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787)
    - paper pdf [Evaluating Reward Models for Language Modeling](https://arxiv.org/pdf/2403.13787)

- [WildBench](https://huggingface.co/spaces/allenai/WildBench)
    - 🦁 WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild
    - [WILDBENCH: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://allenai.github.io/WildBench/WildBench_paper.pdf) paper pdf
    - [github](https://github.com/allenai/WildBench)

- [ConfAIde](https://confaide.github.io/)
    - As users share more personal information with AI like their personal home assistants, it’s crucial to understand how well those models can protect that sensitive information. The ConfAIde benchmark can be used to identify critical weaknesses in the privacy reasoning capabilities of LLMs.
    - [paper](https://arxiv.org/pdf/2310.17884)
    - [arxiv](https://arxiv.org/abs/2310.17884)
    - [code](https://github.com/skywalker023/confaide)
    - [data](https://github.com/skywalker023/confAIde/tree/main/benchmark)
    - 🤫 Code and benchmark for our ICLR 2024 spotlight paper: "Can LLMs Keep a Secret? Testing Privacy Implications of Language Models via Contextual Integrity Theory"
    - Our benchmark ConfAIde evaluates inference-time privacy implications of LLMs, in interactive settings. The benchmark has 4 tiers, and you can find the dataset/scenarios under the ./benchmark directory

- ZebraLogic [ZeroEval](https://github.com/yuchenlin/ZeroEval) 
    - LLMs excel at information-seeking and creative writing tasks. They have significantly improved in math and coding too. But how do they perform in logical reasoning? ZebraLogic evaluates the logical reasoning abilities of LLMs via logic grid puzzles, which require multiple high-order thinking skills. Results show that LLMs still lack several abilities required for logical reasoning, like analytical thinking, counterfactual thinking, reflective reasoning, structured memorization, and compositional generalization.
    - [ZebraLogic: Benchmarking the Logical Reasoning Ability of Language Models](https://huggingface.co/blog/yuchenlin/zebra-logic) hf article
    - 🤗 Leaderboard: https://hf.co/spaces/allenai/ZebraLogic
    - 🦓 Data: https://hf.co/datasets/allenai/ZebraLogicBench
    - 💻 Code for evaluation: https://github.com/yuchenlin/ZeroEval

- [CoCoNot](https://github.com/allenai/noncompliance)
    - This repository contains data, code and models for contextual noncompliance.
    - In addition to more straightforward safety concerns, AI practitioners should consider the cases when models should not comply with a user’s request. Noncompliance prompts should include incomplete, unsupported, indeterminate, and humanizing requests in addition to unsafe requests. CoCoNot is a dataset that includes a set of queries that should elicit noncompliance either by curating examples from existing datasets or synthetically generating them using GPT models.
    - arxiv [The Art of Saying No: Contextual Noncompliance in Language Models](https://arxiv.org/abs/2407.12043)
    - paper pdf [The Art of Saying No: Contextual Noncompliance in Language Models](https://nbviewer.org/github/allenai/noncompliance/blob/main/paper.pdf)
    - data [allenai/coconot](https://huggingface.co/datasets/allenai/coconot)

- [Olmes](https://github.com/allenai/OLMo-Eval/tree/main/olmo_eval/tasks/olmes_v0_1)
    - OLMES is a standard for reproducible language model evaluations that is open, practical, completely documented, and can be applied to current leaderboards and evaluation code bases. OLMES is designed to facilitate robust comparisons of model performances, both during model development and when comparing final powerful models, and can be used across a range of model sizes e.g., from 1B to 70B.
    - [OLMES: A Standard for Language Model Evaluations](https://www.semanticscholar.org/paper/OLMES%3A-A-Standard-for-Language-Model-Evaluations-Gu-Tafjord/c689c37c5367abe4790bff402c1d54944ae73b2a) paper pdf

- [Paloma](https://github.com/allenai/OLMo-Eval/blob/main/paloma/README.md)
    - Paloma is a benchmark for evaluating open language models across many different domains (ranging from niche artist communities to reddit forums on mental health). We have already evaluated several models to understand how language model performance varies across 585 different domains. We invite you to run our standardized inference code on additional models and submit their results to extend this benchmark!
    - In addition to the dataset hosted here, Paloma introduces guidelines for making perplexity results comparable across models and code that implements these guidelines with specific experimental controls. This page will walk you through how to apply these standards to your experiments.
    - Whether you are just evaluating an off-the-shelf model or preparing to conduct your own pretraining experiment from scratch, we recommend that you employ as much of our standardized code as possible to ensure the greatest level comparability with existing results.
    - https://github.com/allenai/OLMo-Eval/tree/main/paloma
    - [paper pdf](https://www.semanticscholar.org/paper/Paloma%3A-A-Benchmark-for-Evaluating-Language-Model-Magnusson-Bhagia/1a3f7e23ef8f0bf06d0efa0dc174e4e361226ead?utm_source=direct_link)

- [OLMo-Eval](https://github.com/allenai/OLMo-Eval)
    - OLMo-Eval is a repository for evaluating open language models.
    - The olmo_eval framework is a way to run evaluation pipelines for language models on NLP tasks. The codebase is extensible and contains task_sets and example configurations, which run a series of tango steps for computing the model outputs and metrics.
    - Using this pipeline, you can evaluate m models on t task_sets, where each task_set consists of one or more individual tasks. Using task_sets allows you to compute aggregate metrics for multiple tasks. The optional google-sheet integration can be used for reporting.

- [safety-eval](https://github.com/allenai/safety-eval) - **Ai2 Safety Tool** 🧰 (Evaluation Suite)
    - This suite of resources is focused on advancing LLM safety, which will empower researchers and industry professionals to work together on building safer LLMs. The suite includes WildTeaming, an automatic red-teaming framework for identifying and reproducing human-devised attacks, WildJailbreak, a high-quality, large-scale safety training dataset with 262K training examples, and WildGuard, a light-weight, multi-purpose moderation tool for assessing the safety of user-LLM interactions across three safety moderation tasks.
    - A simple evaluation of generative language models and safety classifiers.
    - This repository contains code for easy and comprehensive safety evaluation on generative LMs and safety moderation tools. This evaluation framework is used in safety projects at Ai2, including:
        - WildTeaming at Scale: From In-the-Wild Jailbreaks to (Adversarially) Safer Language Models
            - [WildTeaming at Scale: From In-the-Wild Jailbreaks to (Adversarially) Safer Language Models](https://arxiv.org/abs/2406.18510)
                - [pdf paper](https://arxiv.org/pdf/2406.18510)
                - WildTeaming [gh code](https://github.com/allenai/wildteaming)
                    - automatic red-teaming framework that mines in-the-wild user-chatbot interactions to discover 5.7K unique clusters of novel jailbreak tactics, and then composes selections of multiple mined tactics for systematic exploration of novel and even more challenging jailbreaks. WildTeaming intends to address two challenges:
                        - 🔍 Broadly identifying jailbroken behaviors of LLMs.
                        - 🛠️ Creating a publicly open, large-scale safety training resource for systematic defense (WildJailbreak).
                - model [llama2-7b-WildJailbreak](https://huggingface.co/allenai/llama2-7b-WildJailbreak)
                - model [allenai/llama2-13b-WildJailbreak](https://huggingface.co/allenai/llama2-13b-WildJailbreak)
                - data [allenai/wildjailbreak](https://huggingface.co/datasets/allenai/wildjailbreak)
            - [WildGuard: Open One-stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs](https://arxiv.org/abs/2406.18495) arxiv
                - [pdf paper](https://arxiv.org/pdf/2406.18495)
                - [gh code](https://github.com/allenai/wildguard)
                - [model](https://huggingface.co/allenai/wildguard)
                - [data](https://huggingface.co/datasets/allenai/wildguardmix)

- [Analysis360](https://github.com/LLM360/Analysis360) - Evaluation and analysis code for all LLM360 models.

## Cheese

- 🧀 [CHEESE](https://github.com/CarperAI/cheese) Collect human annotations for your RL application with our human-in-the-loop data collection library.
    - Used for adaptive human in the loop evaluation of language and embedding models.
    - [docs](https://cheese1.readthedocs.io/en/latest/)

## lighteval

- [lighteval](https://github.com/huggingface/lighteval)
- [Clémentine Fourrier: Let's talk about LLM evaluation](https://huggingface.co/blog/clefourrier/llm-evaluation)

## Gaia

- [GAIA: a benchmark for General AI Assistants](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UiK-jPcAAAAJ&authuser=1&citation_for_view=UiK-jPcAAAAJ:8k81kl-MbHgC)
    - [paper pdf](https://arxiv.org/pdf/2311.12983)
    - [gaia huggingface](https://huggingface.co/gaia-benchmark)

- [Hugging Face’s Trio of Innovation: Transforming LLM Training and Evaluation with nanotron, DataTrove and LightEval](https://medium.com/@datadrifters/hugging-faces-trio-of-innovation-transforming-llm-training-and-evaluation-with-nanotron-289a8a22d133) medium article

## Eleuther AI Harness

- [Eleuther AI Harness](https://github.com/EleutherAI/lm-evaluation-harness)
    - A framework for few-shot evaluation of language models.
    - [eleuther.ai](https://www.eleuther.ai/)
    - [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) github

## HELM

- [A holistic framework for evaluating foundation models.](https://crfm.stanford.edu/helm/lite/latest/)
    - 10 scenarios
        - Core scenarios
        - NarrativeQA
        - NaturalQuestions (open-book)
        - NaturalQuestions (closed-book)
        - OpenbookQA
        - MMLU (Massive Multitask Language Understanding)
        - MATH
        - GSM8K (Grade School Math)
        - LegalBench
        - MedQA
        - WMT 2014
    - 72 models
        - ...
    - [github](https://github.com/stanford-crfm/helm)