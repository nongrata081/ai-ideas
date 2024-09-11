# Paloma

- [Paloma](https://github.com/allenai/OLMo-Eval/blob/main/paloma/README.md)
    - Paloma is a **benchmark for evaluating** open language **models** across many different domains (ranging from niche artist communities to reddit forums on mental health). We have already evaluated several models to **understand how** language **model performance varies across** 585 different **domains**. We invite you to run our standardized inference code on additional models and submit their results to extend this benchmark!
    - In addition to the dataset hosted here, Paloma introduces **guidelines** for making perplexity **results comparable across models** and **code** that implements these guidelines with specific experimental controls. This page will walk you through **how to apply these standards to your experiments**.
    - Whether you are just evaluating an off-the-shelf model or preparing to conduct your own pretraining experiment from scratch, we recommend that you employ as much of our standardized code as possible to ensure the greatest level comparability with existing results.
    - [allenai/OLMo-Eval](https://github.com/allenai/OLMo-Eval) Evaluation suite for LLMs, github
    - [paper pdf](https://www.semanticscholar.org/paper/Paloma%3A-A-Benchmark-for-Evaluating-Language-Model-Magnusson-Bhagia/1a3f7e23ef8f0bf06d0efa0dc174e4e361226ead)
    - [evaluation data on hf](https://huggingface.co/datasets/allenai/paloma)

## Paloma: A Benchmark for Evaluating Language Model Fit

[Paloma: A Benchmark for Evaluating Language Model Fit](https://arxiv.org/abs/2312.10523) arxiv

Language models (LMs) commonly report perplexity on monolithic data held out from training. Implicitly or explicitly, this data is composed of **domains–varying distributions of language**. Rather than assuming perplexity on one distribution extrapolates to others, **Perplexity Analysis for Language Model Assessment (Paloma)**, **measures LM fit to** 585 **text domains**, ranging from [this http URL](https://www.nytimes.com/) to r/depression on Reddit. We invite submissions to our benchmark and **organize results by comparability based on compliance with guidelines** such as **removal of benchmark contamination from pretraining**. Submissions can also record parameter and training token count to **make comparisons of** Pareto **efficiency** for performance as a function of these measures of cost. We populate our benchmark with results from 6 baselines pretrained on popular corpora. In case studies, we demonstrate analyses that are possible with Paloma, such as finding that **pretraining without data beyond Common Crawl** leads to inconsistent **fit to many domains**.

Extract useful stuff from paper like:

- Evaluation format
- Evaluation data
- Metrics
- Controls
