# Fine Tuning

## torchtune

- [torchtune](https://github.com/pytorch/torchtune)
    - A Native-PyTorch Library for LLM Fine-tuning
    - [pytorch.org/torchtune/main/](https://pytorch.org/torchtune/main/)
    - torchtune is a PyTorch-native library for easily authoring, fine-tuning and experimenting with LLMs. We're excited to announce our alpha release!
    - torchtune provides:
        - Native-PyTorch implementations of popular LLMs using composable and modular building blocks
        - Easy-to-use and hackable training recipes for popular fine-tuning techniques (LoRA, QLoRA) - no trainers, no frameworks, just PyTorch!
        - YAML configs for easily configuring training, evaluation, quantization or inference recipes
        - Built-in support for many popular dataset formats and prompt templates to help you quickly get started with training
    - torchtune focuses on integrating with popular tools and libraries from the ecosystem. These are just a few examples, with more under development:
        - Hugging Face Hub for accessing model weights
        - EleutherAI's LM Eval Harness for evaluating trained models
        - Hugging Face Datasets for access to training and evaluation datasets
        - PyTorch FSDP for distributed training
        torchao for lower precision dtypes and post-training quantization techniques
        - Weights & Biases for logging metrics and checkpoints, and tracking training progress
        - Comet as another option for logging
        - ExecuTorch for on-device inference using fine-tuned models
        - bitsandbytes for low memory optimizers for our single-device recipes

## trlx

- [CarperAI/trlx](https://github.com/CarperAI/trlx)
    - A repo for distributed training of language models with Reinforcement Learning via Human Feedback (RLHF)
    - trlX is a distributed training framework designed from the ground up to focus on fine-tuning large language models with reinforcement learning using either a provided reward function or a reward-labeled dataset.
    - Training support for 🤗 Hugging Face models is provided by Accelerate-backed trainers, allowing users to fine-tune causal and T5-based language models of up to 20B parameters, such as facebook/opt-6.7b, EleutherAI/gpt-neox-20b, and google/flan-t5-xxl. For models beyond 20B parameters, trlX provides NVIDIA NeMo-backed trainers that leverage efficient parallelism techniques to scale effectively.
    - [paper](https://arxiv.org/pdf/1909.08593)
    - [Offline RL for Natural Language Generation with Implicit Language Q Learning](https://sea-snell.github.io/ILQL_site/)
        - [code](https://github.com/Sea-Snell/Implicit-Language-Q-Learning)
    - Large language models distill broad knowledge from text corpora. However, they can be **inconsistent** when it comes to completing user specified tasks. This issue can be addressed by finetuning such models via **supervised learning** on **curated datasets**, or via **reinforcement learning**. In this work, we propose a novel **offline RL** method, **implicit language Q-learning (ILQL)**, designed for use on language models, that combines both the flexible utility maximization framework of RL algorithms with the ability of supervised learning to leverage previously collected data, as well as its simplicity and stability. Our method employs a combination of value conservatism alongside an implicit dataset support constraint in learning value functions, which are then used to guide language model generations towards maximizing user-specified utility functions. In addition to empirically validating ILQL, we present a detailed empirical analysis of situations where offline RL can be useful in natural language generation settings, demonstrating how it can be a more effective utility optimizer than prior approaches for end-to-end dialogue, and how it can effectively **optimize high variance reward functions based on subjective judgement**, such as whether to **label a comment as toxic or not**.
    - [trlX: A Framework for Large Scale Reinforcement Learning from Human Feedback](https://aclanthology.org/2023.emnlp-main.530/)
        - Algorithms
            - Proximal Policy Optimization (PPO) [Fine-Tuning Language Models from Human Preferences](https://arxiv.org/pdf/1909.08593)
            - [Implicit Language Q-Learning (ILQL)](https://sea-snell.github.io/ILQL_site/)

## Tulu

[Tulu](https://allenai.org/olmo)
- Tulu is a suite of models and datasets for fine-tuning state-of-the-art language models. Drawing on the latest open datasets, Tulu models and recipes aid models with **instruction-following**, **reasoning**, and **coding abilities**. The Tulu suite includes models of many sizes, from 7B to 70B parameters, trained with everything from **Direct Preference Optimization (DPO)** to **Proximal Policy Optimization (PPO)**. We take the lessons from the Tulu models and add them to the OLMo models to make **OLMo Instruct**, which are available for download on the Hugging Face Hub ([OLMO Suite](https://huggingface.co/collections/allenai/olmo-suite-65aeaae8fe5b6b2122b46778)).
- We perform adaptation on our post-training datasets, including [Tulu SFT mixture](https://huggingface.co/datasets/allenai/tulu-v2-sft-mixture) and our [cleaned version of UltraFeedback](https://huggingface.co/datasets/allenai/ultrafeedback_binarized_cleaned)
- Learn more from the original [Tulu paper](https://arxiv.org/abs/2306.04751), the [Tulu 2 paper](https://arxiv.org/abs/2311.10702), or our latest work [unpacking DPO vs PPO](https://arxiv.org/abs/2406.09279v1)
- paper [How Far Can Camels Go? Exploring the State of Instruction Tuning on Open Resources](https://arxiv.org/abs/2306.04751)
- paper 2 [Camels in a Changing Climate: Enhancing LM Adaptation with Tulu 2](https://arxiv.org/abs/2311.10702)
- github [open-instruct](https://github.com/allenai/open-instruct)
    - This repo serves as an open effort on instruction-tuning popular pretrained language models on publicly available datasets.
    
## Tulu paper 1

[How Far Can Camels Go? Exploring the State of Instruction Tuning on Open Resources](https://arxiv.org/abs/2306.04751)

In this work we explore recent advances in **instruction-tuning** language **models** on a range of open **instruction-following datasets**. Despite recent claims that open models can be on par with state-of-the-art proprietary models, these claims are often accompanied by limited evaluation, making it difficult to compare models across the board and determine the utility of various resources. We provide a large set of **instruction-tuned models** from 6.7B to 65B parameters in size, trained on 12 instruction datasets ranging from **manually curated** (e.g., OpenAssistant) to **synthetic** and **distilled** (e.g., Alpaca) and **systematically evaluate** them on their **factual knowledge**, **reasoning**, **multilinguality**, **coding**, and **open-ended** **instruction following abilities** through a **collection** of automatic, model-based, and human-based **metrics**. We further introduce Tülu, our best performing instruction-tuned model suite finetuned on a combination of high-quality open resources. Our experiments show that different instruction-tuning datasets can **uncover or enhance specific skills**, while no single dataset (or combination) provides the best performance across all evaluations. Interestingly, we find that model and human preference-based evaluations fail to reflect differences in model capabilities exposed by benchmark-based evaluations, suggesting the **need for** the type of **systemic evaluation** performed in this work. Our evaluations show that the best model in any given evaluation reaches on average 87% of ChatGPT performance, and 73% of GPT-4 performance, suggesting that further investment in building **better base models** and **instruction-tuning data** is required to close the gap. We release our **instruction-tuned models**, including a fully finetuned 65B Tülu, along with our **code**, **data**, and **evaluation framework** at [this https URL](https://github.com/allenai/open-instruct) to facilitate future research.

[Training Open Instruction-Following Language Models](https://github.com/allenai/open-instruct) github
- This repo serves as an open effort on instruction-tuning popular pretrained language models on publicly available datasets. We release this repo and will keep updating it with:
    - **Code for finetuning** language models with latest techniques and instruction datasets in a unified format.
    - **Code for** running standard **evaluation** on a range of benchmarks, targeting for differnt capabilities of these language models.
    - **Checkpoints** or other useful artifacts that we build in our exploration.

## Tulu paper 2

[Camels in a Changing Climate: Enhancing LM Adaptation with Tulu 2](https://arxiv.org/abs/2311.10702)

Since the release of TÜLU [Wang et al., 2023b], open resources for **instruction tuning** have developed quickly, from **better base models** to **new finetuning techniques**. We test and incorporate a number of these advances into TÜLU, resulting in **TÜLU 2**, a suite of **improved TÜLU models** for advancing the understanding and best practices of **adapting** pretrained **language models** **to** downstream **tasks and user preferences**. Concretely, we release: (1) TÜLU-V2-mix, an improved collection of high-quality **instruction datasets**; (2) TÜLU 2, **LLAMA-2 models finetuned** on the V2 mixture; (3) TÜLU 2+DPO, TÜLU 2 **models** trained **with direct preference optimization (DPO)**, including the largest DPO-trained model to date (TÜLU 2+DPO 70B); (4) **CODE TÜLU 2**, CODE LLAMA models finetuned on our V2 mix that outperform CODE LLAMA and its instruction-tuned variant, **CODE LLAMA-Instruct**. Our evaluation from multiple perspectives shows that the TÜLU 2 suite achieves **state-of-the-art performance** among open models and matches or exceeds the performance of GPT-3.5-turbo-0301 on several benchmarks. We release all the **checkpoints, data, training and evaluation code** to facilitate future open efforts on adapting large language models.

## Unpacking DPO and PPO

[Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://arxiv.org/abs/2406.09279v1)

Learning from **preference feedback** has emerged as an essential step for improving the generation quality and performance of modern language models (LMs). Despite its widespread use, the way preference-based learning is applied varies wildly, with differing data, learning algorithms, and evaluations used, making disentangling the impact of each aspect difficult. In this work, we identify four core aspects of **preference-based learning**: **preference data**, **learning algorithm**, **reward model**, and **policy training prompts**, systematically investigate the impact of these components on downstream model performance, and suggest a **recipe for strong learning** for preference feedback. Our findings indicate that all aspects are important for performance, with **better preference data** leading to the largest improvements, followed by the **choice of learning algorithm**, the use of **improved reward models**, and finally the use of additional unlabeled prompts for **policy training**. Notably, **PPO outperforms DPO** by up to 2.5% in math and 1.2% in general domains. High-quality preference data leads to improvements of **up to 8%** in **instruction following** and **truthfulness**. Despite significant gains of up to 5% in mathematical evaluation when scaling up reward models, we surprisingly observe marginal improvements in other categories.
We publicly release the code used for training ([this https URL](https://github.com/hamishivi/EasyLM)) and evaluating ([this https URL](https://github.com/allenai/open-instruct)) our models, along with the models and datasets themselves (this https URL).

- [hamishivi/EasyLM](https://github.com/hamishivi/EasyLM) code used for training
- [allenai/open-instruct](https://github.com/allenai/open-instruct) code used for evaluating
- [hf Tulu V2.5 Suite](https://huggingface.co/collections/allenai/tulu-v25-suite-66676520fd578080e126f618) models and datasets