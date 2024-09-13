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
