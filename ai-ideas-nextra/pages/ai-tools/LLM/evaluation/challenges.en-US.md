# Challenges

- MMLU
- ARC
- WinoGrande
- PIQA
- CommonsenseQA
- Race
- MedMCQA
- OpenbookQA
- Hellaswag

---

## MMLU

https://github.com/hendrycks/test

## ARC

https://huggingface.co/datasets/allenai/ai2_arc

## WinoGrande

https://winogrande.allenai.org/

## PIQA

https://leaderboard.allenai.org/physicaliqa/submissions/get-started

## CommonsenseQA

https://www.tau-nlp.sites.tau.ac.il/commonsenseqa

## Race

https://www.cs.cmu.edu/~glai1/data/race/
https://arxiv.org/abs/1704.04683

## MedMCQA

https://medmcqa.github.io/
https://github.com/vlievin/medical-reasoning
https://github.com/MotzWanted/med-chain
https://arxiv.org/abs/2207.08143

## OpenbookQA

https://huggingface.co/datasets/allenai/openbookqa
https://rowanzellers.com/hellaswag/

## Hellaswag

https://rowanzellers.com/hellaswag/

# OpenLLM leaderboard's challenges

## IFEval

IFEval (https://arxiv.org/abs/2311.07911) – IFEval is a dataset designed to test a model’s ability to follow explicit instructions, such as “include keyword x” or “use format y.” The focus is on the model’s adherence to formatting instructions rather than the content generated, allowing for the use of strict and rigorous metrics.

## BBH (Big Bench Hard)

BBH (Big Bench Hard) (https://arxiv.org/abs/2210.09261) – A subset of 23 challenging tasks from the BigBench dataset to evaluate language models. The tasks use objective metrics, are highly difficult, and have sufficient sample sizes for statistical significance. They include multistep arithmetic, algorithmic reasoning (e.g., boolean expressions, SVG shapes), language understanding (e.g., sarcasm detection, name disambiguation), and world knowledge. BBH performance correlates well with human preferences, providing valuable insights into model capabilities.

## MATH

MATH (https://arxiv.org/abs/2103.03874) – MATH is a compilation of high-school level competition problems gathered from several sources, formatted consistently using Latex for equations and Asymptote for figures. Generations must fit a very specific output format. We keep only level 5 MATH questions and call it MATH Lvl 5.

## GPQA
GPQA (Graduate-Level Google-Proof Q&A Benchmark) (https://arxiv.org/abs/2311.12022) – GPQA is a highly challenging knowledge dataset with questions crafted by PhD-level domain experts in fields like biology, physics, and chemistry. These questions are designed to be difficult for laypersons but relatively easy for experts. The dataset has undergone multiple rounds of validation to ensure both difficulty and factual accuracy. Access to GPQA is restricted through gating mechanisms to minimize the risk of data contamination. Consequently, we do not provide plain text examples from this dataset, as requested by the authors.

## MuSR
MuSR (Multistep Soft Reasoning) (https://arxiv.org/abs/2310.16049) – MuSR is a new dataset consisting of algorithmically generated complex problems, each around 1,000 words in length. The problems include murder mysteries, object placement questions, and team allocation optimizations. Solving these problems requires models to integrate reasoning with long-range context parsing. Few models achieve better than random performance on this dataset.

## MMLU-PRO

MMLU-PRO (Massive Multitask Language Understanding - Professional) (https://arxiv.org/abs/2406.01574) – MMLU-Pro is a refined version of the MMLU dataset, which has been a standard for multiple-choice knowledge assessment. Recent research identified issues with the original MMLU, such as noisy data (some unanswerable questions) and decreasing difficulty due to advances in model capabilities and increased data contamination. MMLU-Pro addresses these issues by presenting models with 10 choices instead of 4, requiring reasoning on more questions, and undergoing expert review to reduce noise. As a result, MMLU-Pro is of higher quality and currently more challenging than the original.