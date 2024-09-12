# AI vision

- [ ] **Revisit all new added pages** and add references to all entities relevant to **updated AI Vision**

---

Extract & structure data from:

- [Roman Yampolskiy: Dangers of Superintelligent AI](https://youtu.be/NNr6gPelJ3E)
- [LangChain’s Harrison Chase on Building the Orchestration Layer for AI Agents | Training Data](https://youtu.be/6XZLoW0-mPY)

---

Vision update

Hypotheses:

- There probably will be multiple LMs for different purposes in the product.
- it probably makes sense to keep those models narrow (according to the particular domain of application (e.g. persona, or task, etc.))
- Preferably everything should run locally and be fully reproducible 
- As for the beginning I can consider running all models locally (as well as using Groq?)

---

- industry has been evolving for quite some time now. There are a lot of publications, a lot of tools (including models, datasets, evals, etc). At a certain point, after stacking the knowledge base with all this new data becomes somewhat tiring, because of the amount of cognitive load. The scope seems to be quite big.

- In terms of building the product, it seems at some point, that the approach of starting with the frontend is the simplest, fastest and most efficient way to go further. Because then the actual product can be seen and (to some extent) experienced right away. 
- there might be a lot of features to implement in LM ecosystem, but it's possible to drown in the amount of data without narrowing down to something. So maybe investing into feature development and research as I face such need is reasonable.

- it seems that training / fine-tuning own LMs is inevitable if I want to build my own product. Custom-tailored LMs for particular domains or even specific tasks might be what gives the maximum quality for problem solving.

- I need a way to locally run models. LMstudio / Ollama

- I can probably adopt all the best practices from AllenAI, for evals and everything
- Understand & extract stuff from video with them



- One possible way forward could be taking a SOTA model and fine-tuning it with my own data for some purpose

- I understand that models will come and go, and change. New ones are and will be continuously released, probably enabling access to better models. Which means I have to consider and be ready to monitor for new releases and be able to train, fine-tunie and incorporate those into the product easily and quickly, without much hassle. Which means I have to automate and standardize it. And maybe release as open-source if it's good enough.


- as for the entire SAFe cycle, it seems logical to have tools like JIRA and Confluence as open-source tools available locally. Confluence might be substituted with Nextra. What about open-source alternative for JIRA?

In short, it seems that the decommissioning of the tools such as JIRA and Confluence in their paid flavor has come. Since it is a matter of time when such tools will turn from used by humans heavily to track their work into a sort of visibility and debugging into ai agents workflows. Having opensource tools for this, easily manipulated makes sense.


