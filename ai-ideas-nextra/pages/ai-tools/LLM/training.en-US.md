# LLM Training

> Test [Hugging Face Transformers](#hugging-face-transformers) for ML tasks: training, fine-tuning, etc.

if it works in a stable and predictable manner, then:

> Use [Hugging Face Transformers](#hugging-face-transformers) by default for ML tasks: training, fine-tuning, etc.



## Hugging Face Transformers

[huggingface/transformers](https://github.com/huggingface/transformers)

[hf.co/transformers](https://huggingface.co/docs/transformers/index)

🤗 Transformers: State-of-the-art Machine Learning for Pytorch, TensorFlow, and JAX.

🤗 Transformers provides thousands of pretrained models to perform tasks on different modalities such as text, vision, and audio.

These models can be applied on:

📝 Text, for tasks like text classification, information extraction, question answering, summarization, translation, and text generation, in over 100 languages.
🖼️ Images, for tasks like image classification, object detection, and segmentation.
🗣️ Audio, for tasks like speech recognition and audio classification.
Transformer models can also perform tasks on several modalities combined, such as table question answering, optical character recognition, information extraction from scanned documents, video classification, and visual question answering.

🤗 Transformers provides APIs to quickly download and use those pretrained models on a given text, fine-tune them on your own datasets and then share them with the community on our model hub. At the same time, each python module defining an architecture is fully standalone and can be modified to enable quick research experiments.

🤗 Transformers is backed by the three most popular deep learning libraries — Jax, PyTorch and TensorFlow — with a seamless integration between them. It's straightforward to train your models with one before loading them for inference with the other.

## composer
https://github.com/mosaicml/composer

Composer is an open-source deep learning training library by MosaicML. Built on top of PyTorch, the Composer library makes it easier to implement distributed training workflows on large-scale clusters.

We built Composer to be optimized for scalability and usability, integrating best practices for efficient, multi-node training. By abstracting away low-level complexities like parallelism techniques, distributed data loading, and memory optimization, you can focus on training modern ML models and running experiments without slowing down.

We recommend using Composer to speedup your experimentation workflow if you’re training neural networks of any size, including:

Large Language Models (LLMs)
Diffusion models
Embedding models (e.g. BERT)
Transformer-based models
Convolutional Neural Networks (CNNs)

https://docs.mosaicml.com/en/latest/

## gpt-neox

https://github.com/EleutherAI/gpt-neox

This repository records EleutherAI's library for **training large-scale language models** on GPUs. Our current framework is based on NVIDIA's Megatron Language Model and has been augmented with techniques from DeepSpeed as well as some novel optimizations. We aim to make this repo a centralized and accessible place to gather techniques for training large-scale autoregressive language models, and accelerate research into large-scale training. This library is in widespread use in academic, industry, and government labs, including by researchers at Oak Ridge National Lab, CarperAI, Stability AI, Together.ai, Korea University, Carnegie Mellon University, and the University of Tokyo among others. Uniquely among similar libraries GPT-NeoX supports a wide variety of systems and hardwares, including launching via Slurm, MPI, and the IBM Job Step Manager, and has been run at scale on AWS, CoreWeave, ORNL Summit, ORNL Frontier, LUMI, and others.

**If you are not looking to train models with billions of parameters from scratch, this is likely the wrong library to use. For generic inference needs, we recommend you use the Hugging Face transformers library instead which supports GPT-NeoX models.**

---

## Allen AI suite

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