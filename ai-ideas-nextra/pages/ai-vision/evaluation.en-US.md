# Evaluation

- TODO:
    - Extract from:
        - [Lessons from the Trenches on Reproducible Evaluation of Language Models](https://www.semanticscholar.org/paper/Lessons-from-the-Trenches-on-Reproducible-of-Models-Biderman-Schoelkopf/dfa0de5cae63eacd675339fc81b13479c51bb153)
        - [Holistic Evaluation of Language Models](https://www.semanticscholar.org/paper/Holistic-Evaluation-of-Language-Models-Liang-Bommasani/ce913026f693101e54d3ab9152e107034d81fce1) (HELM)
        - [Quantifying Language Models' Sensitivity to Spurious Features in Prompt Design or: How I learned to start worrying about prompt formatting](https://www.semanticscholar.org/paper/Quantifying-Language-Models'-Sensitivity-to-in-or%3A-Sclar-Choi/17a6116e5bbd8b87082cbb2e795885567300c483)
        - [Open-LLM-Leaderboard: From Multi-choice to Open-style Questions for LLMs Evaluation, Benchmark, and Arena](https://arxiv.org/abs/2406.07545)
            - https://github.com/VILA-Lab/Open-LLM-Leaderboard
        - [Pythia: A Suite for Analyzing Large Language Models Across Training and Scaling](https://www.semanticscholar.org/paper/Pythia%3A-A-Suite-for-Analyzing-Large-Language-Models-Biderman-Schoelkopf/be55e8ec4213868db08f2c3168ae666001bea4b8)
        - [OLMo: Accelerating the Science of Language Models](https://www.semanticscholar.org/paper/OLMo%3A-Accelerating-the-Science-of-Language-Models-Groeneveld-Beltagy/ac45bbf9940512d9d686cf8cd3a95969bc313570)

---

- use [olmes](http://localhost:3000/ai-tools/LLM/evaluation/olmes) as [evaluation standard](/ai-tools/LLM/evaluation/olmes#olmes-llm-evaluation-standard-v01) for reproducible LLM evaluations
    - Standardized formatting of dataset instances
    - Curated, few-shot in-context examples for each task (Use fixed, curated 5-shot examples) TBD: [(Section 3.2)]()
    - Evaluate both multiple-choice (MCF) and cloze-form (CF) formulations and use maximum score (Evaluate with both MCF and CF, use the best result) TBD: [(Section 3.4)]()
    - Standardized probability normalization schemes for CF (Use prescribed probability normalization for CF) TBD: [(Section 3.3)]()
    - Prescribed implementations details:
        - Sampling of 1000 instances for each task if more than 1500
        - Use test split if labels are available, otherwise use validation split (Use test set when available, otherwise validation.)
        - For MMLU use macro average over tasks
        - Restrict to maximum 2048 tokens per input
    - Use standardized lists of tasks (for each LM may vary based on domain), e.g.:
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
    - Use specified, exact prompt format [page 8](https://www.semanticscholar.org/reader/c689c37c5367abe4790bff402c1d54944ae73b2a), TBD: [(Section 3.1)]()
    - Follow recommendations for all other evaluation details (in [Appendix A](#appendix-a)) 
- set **Scientific credibility for all LLMs** I use, based on reproducible comparisons between models, **as a mandatory default**
    - if a model cannot be reproducibly compared, I shouldn't use it
- evaluate LMs on a **set of specific tasks** (?)
    - when choosing which LM to use, I should probably **prefer models** capable of performing tasks they were **specifically trained on**
    - when considering models (both generalist and specific) to be used in the product, their capabilities should be evaluated with tasks (based on domain of application)
- to ensure **consistency** and **reproducibility** of models evaluation, use standard (documented) ways for deciding on choices:
    - **how the task is presented** to the model
        - prompt formatting
        - in-context examples
        - normalization techniques
        - task formulation
    - **how** the model **outputs are interpreted** before scoring
    - choices should be reported with **enough information to actually reproduce**
- **considerations** about using or not using a new / another LM **should be based on comparison against reported results**
    - **for newer version of LMs** against previous versions
    - **for alternative LMs** - against latest versions of currently used LM (or other LMs)


---

## Appendix A

A OLMES: implementation details
There are other important details that go into a fully specified evaluation result, and we enumerate the
choices made in OLMES here:
- For MMLU: use macro average (over 57 tasks) rather than micro average (over 14042 instances), following AI@Meta (2024). This better represents the diversity of fields in the dataset, although in practice it does not generally make a big difference (see Figure 7).
- When a model requires it, make sure to add the appropriate <bos> token at start of prompt (e.g., Gemma (Gemma Team et al., 2024)).
- When using the “character” normalization for CF, include the leading space in the calculation of answer length.
- Restrict all inputs (with completions) to 2048 tokens for consistency across models9
- Use the default model precision when evaluating (i.e., avoid options like load_in_8bit unless it produces identical results)
- OLMES uses the standard approach of two newlines to separate each in-context example.
- Other than the original instruction line for MMLU Hendrycks et al. (2021), we do not add any extra instructions. This is in view of previous work finding the subject information from instructions makes little changes to model ranking (Alzahrani et al., 2024), and to reduce additional sources of variation in the prompt.

Note that computational details, like batch size and type/state of GPU, can affect floating point operations such that answer choice decisions can flip if they are very close. This is hard to avoid unless consider “ties” when answers are sufficiently close in confidence.