# LLM Training


https://allenai.org/olmo

- [Dolma]()
    - To support the study of the relationship between the data and any model trained on it, we release Dolma, the pretraining dataset powering OLMo. Dolma is an open dataset from a diverse mix of web content, academic publications, code, books, and encyclopedic materials. To date, we have released multiple versions of Dolma improving on the previous version with increasingly diverse and higher quality data. All versions of Dolma are openly available for download from the [Hugging Face Hub](https://huggingface.co/datasets/allenai/dolma).
    - Read the Dolma paper to learn more.
        - [Dolma: an Open Corpus of Three Trillion Tokens for Language Model Pretraining Research](https://arxiv.org/abs/2402.00159)
    - Explore our open-source tools to create and refine Dolma.
        - [github](https://github.com/allenai/dolma)

- [OLMo](https://allenai.org/olmo)
    - OLMo is our series of open language models, which includes full model weights, training code, training logs, training metrics in the form of Weights & Biases logs, and inference code. To date, we have released multiple models at the 1B and 7B scales, trained to 2-3 trillion tokens. For all OLMo models, we’ve released all code, weights, and 500+ intermediate checkpoints, each supported by tooling that can be used to trace back to the exact data that was used at that point during training. All OLMo weights and code are released under the Apache 2.0 License and available for download from the [Hugging Face Hub](https://huggingface.co/collections/allenai/olmo-suite-65aeaae8fe5b6b2122b46778).
    - Read the OLMo paper to learn more.
        - [OLMo: Accelerating the Science of Language Models](https://arxiv.org/abs/2402.00838)

---

- [k2-train](https://github.com/LLM360/k2-train)
    - code for training K2-65B, a 65 billion parameter large language model from LLM360
- [crystalcoder-train](https://github.com/LLM360/crystalcoder-train)
    - Pre-training code for CrystalCoder 7B LLM
    - training code for CrystalCoder, a 7B-parameter language model pretrained on code and natural language.
- [amber-train](https://github.com/LLM360/amber-train)
    - Pre-training code for Amber 7B LLM



### Pretrain models on custom datasets

- [nanotron](https://github.com/huggingface/nanotron)
    - Minimalistic large language model 3D-parallelism training
    - Nanotron is a library for pretraining transformer models. It provides a simple and flexible API to **pretrain models on custom datasets**. Nanotron is designed to be easy to use, fast, and scalable. It is built with the following principles in mind:
        - Simplicity: Nanotron is designed to be easy to use. It provides a simple and flexible API to pretrain models on custom datasets.
        - Performance: Optimized for speed and scalability, Nanotron uses the latest techniques to train models faster and more efficiently.

- [trlx](https://github.com/CarperAI/trlx)
    - [trlX: A Framework for Large Scale Reinforcement Learning from Human Feedback](https://aclanthology.org/2023.emnlp-main.530/) paper
    - A repo for distributed training of language models with Reinforcement Learning via Human Feedback (RLHF)
    - trlX is a distributed training framework designed from the ground up to focus on **fine-tuning large language models with reinforcement learning** using either a provided reward function or a **reward-labeled dataset**.
    - 🧀 [CHEESE](https://github.com/CarperAI/cheese) Collect human annotations for your RL application with our human-in-the-loop data collection library.
        - Used for adaptive human in the loop evaluation of language and embedding models.