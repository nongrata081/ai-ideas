# Build own LLM

- pytorch
- torchtune
- torchchat

---

## LLM101n (Karpathy)

[github.com/karpathy/LLM101n](https://github.com/karpathy/LLM101n)

>  What I cannot create, I do not understand. -Richard Feynman

In this course we will build a Storyteller AI Large Language Model (LLM). Hand in hand, you'll be able to create, refine and illustrate little [stories](https://huggingface.co/datasets/roneneldan/TinyStories) with the AI. We are going to build everything end-to-end from basics to a functioning web app similar to ChatGPT, from scratch in Python, C and CUDA, and with minimal computer science prerequisites. By the end you should have a relatively deep understanding of AI, LLMs, and deep learning more generally.

**Syllabus**

- Chapter 01 **Bigram Language Model** (language modeling)
- Chapter 02 **Micrograd** (machine learning, backpropagation)
- Chapter 03 **N-gram model** (multi-layer perceptron, matmul, gelu)
- Chapter 04 **Attention** (attention, softmax, positional encoder)
- Chapter 05 **Transformer** (transformer, residual, layernorm, GPT-2)
- Chapter 06 **Tokenization** (minBPE, byte pair encoding)
- Chapter 07 **Optimization** (initialization, optimization, AdamW)
- Chapter 08 **Need for Speed I: Device** (device, CPU, GPU, ...)
- Chapter 09 **Need for Speed II: Precision** (mixed precision training, fp16, bf16, fp8, ...)
- Chapter 10 **Need for Speed III: Distributed** (distributed optimization, DDP, ZeRO)
- Chapter 11 **Datasets** (datasets, data loading, synthetic data generation)
- Chapter 12 **Inference I: kv-cache** (kv-cache)
- Chapter 13 **Inference II: Quantization** (quantization)
- Chapter 14 **Finetuning I: SFT** (supervised finetuning SFT, PEFT, LoRA, chat)
- Chapter 15 **Finetuning II: RL** (reinforcement learning, RLHF, PPO, DPO)
- Chapter 16 **Deployment** (API, web app)
- Chapter 17 **Multimodal** (VQVAE, diffusion transformer)

**Appendix**

Further topics to work into the progression above:

- Programming languages: Assembly, C, Python
- Data types: Integer, Float, String (ASCII, Unicode, UTF-8)
- Tensor: shapes, views, strides, contiguous, ...
- Deep Learning frameworks: PyTorch, JAX
- Neural Net Architecture: GPT (1,2,3,4), Llama (RoPE, RMSNorm, GQA), MoE, ...
- Multimodal: Images, Audio, Video, VQVAE, VQGAN, diffusion

## Building LLM from scratch:

Follow [How I Studied LLMs in Two Weeks](/ai-vision/build-llm#how-i-studied-llms-in-two-weeks) to eventually be able to **reproduce GPT-2 with ease** ([Andrej Karpathy: Let's reproduce GPT-2 (124M)](https://www.youtube.com/watch?v=l8pRSuU81PU&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&index=12)) (playlist [Neural Networks: Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ))

[Hesam Sheikh](https://medium.com/@itshesamsheikh) ai/ml | rigorously overfitting on a learning curve

### How I Studied LLMs in Two Weeks

[How I Studied LLMs in Two Weeks: A Comprehensive Roadmap](https://towardsdatascience.com/how-i-studied-llms-in-two-weeks-a-comprehensive-roadmap-e8ac19667a31) :

### ML retreat

[hesamsheikh/ml-retreat](https://github.com/hesamsheikh/ml-retreat)

A [day-by-day detailed LLM roadmap](https://github.com/hesamsheikh/ml-retreat/tree/main/Days) from beginner to advanced, plus some study tips

---

[aman.ai](https://aman.ai/) - exploring the art of artificial intelligence
one concept at a time

[Hesamation](https://x.com/Hesamation) x.com
[github.com/hesamsheikh](https://github.com/hesamsheikh)

---

### Other

- [Building LLMs from the Ground Up: A 3-hour Coding Workshop](https://www.youtube.com/watch?v=quh7z1q7-uc)
    - [build-a-large-language-model-from-scratch](https://www.manning.com/books/build-a-large-language-model-from-scratch)
    - [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) gh

---

...

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

> it would be nice to train an LLM all of the best-practices in reasoning, that are natural for myself, but are absent in LLMs

On terms of reasoning, it would be nice to train an LLM all of the best-practices in reasoning, that are natural for myself, but are absent in LLMs I use. Make a list of reasoning best practices or nice-to-haves, and add things to it as they pop up in the dev & testing process. The downsides of LM reasoning became obvious once I [tried generating SAFe entities with Llama 3.1 8B]() (did well for Strategic themes & OKRs, not so well for Portfolio Canvas). There was a lot of repetition. 

- [ ] Try generating again with Llama 3.2
    - define best in-context prompt for best results
    - define reasoning downsides
    - define possible reasoning improvements

---

There is a lot of flaws that I see in the current model's reasoning. I also see a lot of possible improvements. Which makes sense to try to implement step-by-step.

It might be a good idea to play with prompts a little bit, to see if and how I can get the best possible results without changing the model itself. And then verifying, what those results could be. E.g., if with in-context prompts results are satisfactory, maybe I can build something right away.

---

## Random ideas

Current SOTA coding models, like DeepSeekV2 - what data are they trained on? Is the dataset annotated well ? Is it of the highest quality? Imagine a dataset of all GitHub open-source codebases, perfectly annotated, where every LOC (line of code) is properly labelled. Also, where certain blocks of functionality are labeled. Like, implemented entities (e.g. drawer, appbar, etc.). Does it help to beld better fine-tuned models? With higher accuracy rate for code generation ? Also, imagine generating sintetic data of highest quality for such training. What would it be and cost in time & effort? What would it allow to achieve? 