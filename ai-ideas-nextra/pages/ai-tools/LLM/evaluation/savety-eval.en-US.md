# safety-eval

This **evaluation suite** offers open-sourced code for **easy and comprehensive safety evaluation** on generative **language models** and safety moderation tools.

- [safety-eval](https://github.com/allenai/safety-eval) - **Ai2 Safety Tool** 🧰 (Evaluation Suite)
    - This suite of resources is focused on advancing LLM safety, which will empower researchers and industry professionals to work together on building safer LLMs. The suite includes **WildTeaming**, an **automatic red-teaming framework** for identifying and reproducing human-devised attacks, **WildJailbreak**, a high-quality, large-scale **safety training dataset** with 262K training examples, and **WildGuard**, a light-weight, multi-purpose moderation **tool for assessing the safety of user-LLM interactions** across three safety moderation tasks.
    - A simple evaluation of generative language models and safety classifiers.

## WildTeaming

- WildTeaming at Scale: From In-the-Wild Jailbreaks to (Adversarially) Safer Language Models
    - [WildTeaming at Scale: From In-the-Wild Jailbreaks to (Adversarially) Safer Language Models](https://arxiv.org/abs/2406.18510) arxiv
    - [pdf paper](https://arxiv.org/pdf/2406.18510)
    - [github](https://github.com/allenai/wildteaming)
    - [allenai/llama2-7b-WildJailbreak](https://huggingface.co/allenai/llama2-7b-WildJailbreak) hf model
    - [allenai/llama2-13b-WildJailbreak](https://huggingface.co/allenai/llama2-13b-WildJailbreak) hf model
    - [allenai/wildjailbreak](https://huggingface.co/datasets/allenai/wildjailbreak) hf data
    - automatic red-teaming framework that mines in-the-wild user-chatbot interactions to discover 5.7K unique clusters of novel jailbreak tactics, and then composes selections of multiple mined tactics for systematic exploration of novel and even more challenging jailbreaks. WildTeaming intends to address two challenges:
        - 🔍 Broadly identifying jailbroken behaviors of LLMs.
        - 🛠️ Creating a publicly open, large-scale safety training resource for systematic defense (WildJailbreak).
            
### WildTeaming at Scale: From In-the-Wild Jailbreaks to (Adversarially) Safer Language Models

We introduce WildTeaming, an **automatic LLM safety red-teaming framework** that **mines** in-the-wild **user-chatbot interactions** to **discover** 5.7K unique clusters of **novel jailbreak tactics**, and then **composes** multiple **tactics for systematic exploration of novel jailbreaks**. Compared to prior work that performed red-teaming via recruited human workers, gradient-based optimization, or iterative revision with LLMs, our work investigates jailbreaks from chatbot users who were not specifically instructed to break the system. WildTeaming **reveals previously unidentified vulnerabilities of frontier LLMs**, resulting in up to **4.6x more diverse and successful adversarial attacks** compared to state-of-the-art jailbreak methods.

While many datasets exist for jailbreak evaluation, very few open-source **datasets exist for jailbreak training**, as safety training data has been closed even when model weights are open. With WildTeaming we create **WildJailbreak**, a large-scale open-source **synthetic safety dataset** with 262K vanilla (direct request) and adversarial (complex jailbreak) **prompt-response pairs**. To mitigate exaggerated safety behaviors, WildJailbreak provides two contrastive types of queries: 1) **harmful queries** (vanilla & adversarial) and 2) **benign queries** that resemble harmful queries in form but contain no harm. As WildJailbreak considerably upgrades the quality and scale of existing safety resources, it uniquely enables us to examine the **scaling effects of data** and the **interplay of data properties and model capabilities during safety training**. Through extensive experiments, we **identify the training properties** that enable an ideal **balance of safety behaviors**: **appropriate safeguarding** without over-refusal, **effective handling of** vanilla and adversarial **queries**, and **minimal**, if any, **decrease in** general **capabilities**. All components of WildJailbeak contribute to achieving **balanced safety behaviors of models**.

![](./wildteaming.png)

## WildGuard

- [WildGuard: Open One-stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs](https://arxiv.org/abs/2406.18495) arxiv
- [pdf paper](https://arxiv.org/pdf/2406.18495)
- [gh code](https://github.com/allenai/wildguard)
- [model](https://huggingface.co/allenai/wildguard)
- [data](https://huggingface.co/datasets/allenai/wildguardmix)

[WildGuard: Open One-Stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs](https://arxiv.org/abs/2406.18495)

We introduce WildGuard -- an open, light-weight moderation tool for LLM safety that achieves three goals: 
- (1) **identifying malicious intent in user prompts**, 
- (2) **detecting safety risks of model responses**, and 
- (3) **determining model refusal rate**. 

Together, WildGuard serves the increasing needs for **automatic safety moderation** and **evaluation of LLM interactions**, providing a one-stop tool with enhanced accuracy and broad coverage across **13 risk categories**. While existing open moderation tools such as Llama-Guard2 score reasonably well in classifying straightforward model interactions, they lag far behind a prompted GPT-4, especially in **identifying adversarial jailbreaks** and in **evaluating models' refusals**, a **key measure for evaluating safety behaviors in model responses**.

To address these challenges, we construct **WildGuardMix**, a large-scale and carefully balanced multi-task **safety moderation dataset** with **92K labeled examples** that cover vanilla **(direct) prompts** and **adversarial jailbreaks**, paired with various **refusal and compliance responses**. WildGuardMix is a combination of **WildGuardTrain**, the training data of WildGuard, and **WildGuardTest**, a high-quality **human-annotated moderation test set** with **5K labeled items** covering broad **risk scenarios**. Through extensive evaluations on WildGuardTest and ten existing public benchmarks, we show that WildGuard establishes **state-of-the-art performance** in open-source **safety moderation** across all the three tasks compared to ten strong existing open-source moderation models (e.g., **up to 26.4% improvement on refusal detection**). Importantly, WildGuard matches and sometimes exceeds GPT-4 performance (e.g., **up to 3.9% improvement on prompt harmfulness identification**). WildGuard serves as a **highly effective safety moderator in an LLM interface**, **reducing the success rate of jailbreak attacks from 79.8% to 2.4%**.

![](./wildguard.png)


