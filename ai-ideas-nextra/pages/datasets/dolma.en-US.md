# Dolma

[allenai.org/dolma](https://allenai.org/dolma)
- To support the study of the relationship between the data and any model trained on it, we release Dolma, the pretraining dataset powering OLMo. Dolma is an open dataset from a diverse mix of web content, academic publications, code, books, and encyclopedic materials. To date, we have released multiple versions of Dolma improving on the previous version with increasingly diverse and higher quality data. All versions of Dolma are openly available for download from the Hugging Face Hub.
- [hf hub](https://huggingface.co/datasets/allenai/dolma)
- [github](https://github.com/allenai/dolma)
- [arxiv](https://arxiv.org/abs/2402.00159)
- Read the Dolma [paper](https://arxiv.org/pdf/2402.00159) to learn more.
    - Information about pretraining corpora used to train the current best-performing language models is seldom discussed: commercial models rarely detail their data, and even open models are often released without accompanying training data or recipes to reproduce them. As a result, it is challenging to conduct and advance scientific research on language modeling, such as understanding how training data impacts model capabilities and limitations. To facilitate scientific research on language model pretraining, we curate and release Dolma, a three-trillion-token English corpus, built from a diverse mixture of web content, scientific papers, code, public-domain books, social media, and encyclopedic materials. We extensively document Dolma, including its **design principles**, details about its **construction**, and a summary of its **contents**. We present **analyses** and experimental **results** on intermediate states of Dolma to share what we have learned about important **data curation practices**. Finally, we open-source our **data curation toolkit** to enable reproduction of our work as well as support further research in large-scale **data curation**.
- Explore our open-source tools to create and refine Dolma.

---

[allenai.org/dolma](https://allenai.org/dolma)

## ODC-BY license

Dolma, the pretraining dataset of OLMo, is an open dataset from a diverse mix of web content, academic publications, code, books, and encyclopedic materials. Multiple versions of Dolma are openly available for download from the Hugging Face Hub under the **[ODC-BY license](https://opendatacommons.org/licenses/by/1-0/)**.

- [Making a switch — Dolma moves to ODC-BY](https://blog.allenai.org/making-a-switch-dolma-moves-to-odc-by-8f0e73852f44)

## Why Dolma?
Dolma is designed to be truly open. We want everyone to create better versions of this dataset independently, study the relationship between the data and any model trained on it, and critique our curation practices, data artifacts, and models. We will continue to make improvements and add new sources to Dolma.

## Dolma 1.7: the latest version

We release Dolma 1.7 alongside OLMo 1.7–7B, with **more diverse data sources**, more **precise filtering**, and **fuzzy deduplication**. The full Dolma 1.7 collection is 2.3 trillion tokens summing across all sources. Training on Dolma 1.7 results in significant improvements in OLMo 7B’s performance on downstream benchmarks like MMLU, GSM8k, and others. Learn more about the latest Dolma 1.7 in our blog.

- [OLMo 1.7–7B: A 24 point improvement on MMLU](https://blog.allenai.org/olmo-1-7-7b-a-24-point-improvement-on-mmlu-92b43f7d269d)

## Dolma Toolkit

The Dolma toolkit is a high-performance solution for language model **dataset curation**, including **source code**, **examples**, and **documentation**. The toolkit is portable across computing environments and contains a number of features such as built-in taggers, a fast deduplication tool, and support for extension to custom taggers.

- [github.com/allenai/dolma](https://github.com/allenai/dolma)