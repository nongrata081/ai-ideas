# Datasets

## [allenai.org/open-data](https://allenai.org/open-data)

- WildChat https://wildchat.allen.ai/
    - The WildChat Dataset is a corpus of 1 million real-world user-ChatGPT interactions, characterized by a wide range of languages and a diversity of user prompts. It was constructed by offering free access to ChatGPT and GPT-4 in exchange for consensual chat history collection.

- Super-NaturalInstructions https://instructions.apps.allenai.org/
    - 1,616 diverse NLP tasks over 76 distinct task types along with expert-written instructions to measure how well NLP models can generalize to a variety of unseen tasks when provided with clear guidance.

- Self-Instruct https://github.com/yizhongw/self-instruct
    - A framework that helps language models improve their ability to follow natural language instructions by using the model's own generations to create a large collection of instructional data.
    - [Self-Instruct: Aligning Language Models with Self-Generated Instructions](https://arxiv.org/abs/2212.10560) paper

- S2ORC
    - A large corpus of structured full text for English-language open access academic papers. It is the largest publicly-available collection of machine-readable academic text, comprising over 10M documents. It aims to facilitate research and development of tools for text mining over academic text.
    - paper [S2ORC: The Semantic Scholar Open Research Corpus](https://www.semanticscholar.org/paper/S2ORC%3A-The-Semantic-Scholar-Open-Research-Corpus-Lo-Wang/5c5751d45e298cea054f32b392c12c61027d2fe7)

- S2AG
    - A collection of over 200M paper titles, abstracts, citations, and other metadata of open-access papers from the Semantic Scholar Academic Graph.
    - [The Semantic Scholar Open Data Platform](https://www.semanticscholar.org/paper/The-Semantic-Scholar-Open-Data-Platform-Kinney-Anastasiades/cb92a7f9d9dbcf9145e32fdfa0e70e2a6b828eb1) paper

- HellaSwag https://rowanzellers.com/hellaswag/
    - A challenge dataset of questions that are trivial for humans (>95% accuracy) but that state-of-the-art models struggle with (<48%), created through a collection paradigm wherein a series of discriminators iteratively select an adversarial set of machine-generated wrong answers.
    - [HellaSwag: Can a Machine Really Finish Your Sentence?](https://arxiv.org/abs/1905.07830) paper
    - [github](https://github.com/rowanz/hellaswag)
    - [data](https://github.com/rowanz/hellaswag/tree/master/data)

- WinoGrande https://huggingface.co/datasets/allenai/winogrande
    - WinoGrande is a collection of 44K problems, inspired by Winograd Schema Challenge, but adjusted to improve the scale and robustness against the dataset-specific bias. Formulated as a fill-in-a-blank task with binary options, the goal is to choose the right option for a given sentence which requires commonsense reasoning.

- SciRIFF https://huggingface.co/datasets/allenai/SciRIFF
    - 137K instruction-following demonstrations for 54 scientific literature understanding tasks. The tasks cover five essential scientific literature categories and span five domains.

- KIWI https://huggingface.co/datasets/fangyuan/kiwi
    - Instruction data collected for writing paragraph-level answers to multiple document-grounded NLP research questions. It was collected via 234 interactive sessions of NLP experts instructing different language models, culminating in 1.2K interaction turns.

- CHIME https://github.com/allenai/chime
    - 2.1K LLM-generated hierarchical organizations of medical studies on 472 research topics, with expert-provided corrections for a subset of 100 topics. This data can be used to assess and improve LLM-based tools to assist literature review.

- SciFact https://huggingface.co/datasets/allenai/scifact
    - 1.4K expert-written scientific claims paired with evidence-containing abstracts annotated with labels and rationales to support the development of scientific claim verification systems. It’s been used in shared tasks like SCIVER and retrieval benchmarks like BEIR.

- SciTLDR https://huggingface.co/datasets/allenai/scitldr
    - 5.4K extremely short (<30 words) expert-written summaries of 3.2K scientific papers, used to develop models for single document summarization and to develop the initial version of the TLDR feature on Semantic Scholar.

- Ai2 Reasoning Challenge (ARC) 
    - 7,787 genuine grade-school level, multiple-choice science questions partitioned into a Challenge Set and an Easy Set, along with a corpus of over 14 million science sentences relevant to the task. Offered as a challenge to the machine reasoning community.
    - [Think you have Solved Question Answering? Try ARC, the AI2 Reasoning Challenge](https://www.semanticscholar.org/paper/Think-you-have-Solved-Question-Answering-Try-ARC%2C-Clark-Cowhey/88bb0a28bb58d847183ec505dda89b63771bb495)

- DROP
    - A QA dataset that tests the comprehensive understanding of paragraphs. In this crowdsourced, adversarially-created, 96K question-answering benchmark, a system must resolve multiple references in a question, map them onto a paragraph, and perform discrete operations over them (such as addition, counting, or sorting).
    - [DROP: A Reading Comprehension Benchmark Requiring Discrete Reasoning Over Paragraphs](https://www.semanticscholar.org/paper/DROP%3A-A-Reading-Comprehension-Benchmark-Requiring-Dua-Wang/dda6fb309f62e2557a071522354d8c2c897a2805)

- Qasper https://huggingface.co/datasets/allenai/qasper
    - 5K information-seeking questions over 1.5K scientific papers. Each question is asked by an expert researcher and answered by a different expert researcher using supporting evidence from the paper's full text. Qasper has been included in long-context benchmarks such as SCROLLS.

- MS^2 https://huggingface.co/datasets/allenai/mslr2022
    - 20K biomedical literature review summaries synthesizing information from over 470K studies. This dataset facilitates the development of systems that can assess and aggregate contradictory evidence across multiple studies, and is one of the first large-scale, publicly available multi-document summarization dataset in the biomedical domain.

- HCI alt texts https://github.com/allenai/hci-alt-texts
    - 3386 author-written alt texts from HCI publications, of which 547 have been annotated with semantic content. Most figures in scientific papers lack alt text, harming accessibility, and this dataset can be used to build tools for understanding and describing figures, leading to a higher prevalence of alt texts.

---

- [EleutherAI/proof-pile-2](https://huggingface.co/datasets/EleutherAI/proof-pile-2)
    - The Proof-Pile-2 is a 55 billion token dataset of mathematical and scientific documents. This dataset was created in order to train the Llemma 7B and Llemma 34B models. It consists of three subsets:
        - arxiv (29B tokens): the ArXiv subset of RedPajama
        - open-web-math (15B tokens): The OpenWebMath dataset, which contains much of the high-quality mathematical text from the internet.
        - algebraic-stack (11B tokens): A new dataset of mathematical code, including numerical computing, computer algebra, and formal mathematics.

---

- [OpenWebMath](https://github.com/keirp/OpenWebMath) github
    - [hf](https://huggingface.co/datasets/open-web-math/open-web-math)
    - [OpenWebMath: An Open Dataset of High-Quality Mathematical Web Text](https://arxiv.org/abs/2310.06786) arxiv
    - [pdf paper](https://arxiv.org/pdf/2310.06786)

---