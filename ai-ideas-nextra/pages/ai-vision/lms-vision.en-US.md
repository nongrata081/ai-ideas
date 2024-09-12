# LMs Vision

- **Multiple LMs** for **different purposes** in the product.
- **Keep models narrow**
    - according to the **particular domain of application** (e.g. persona, or task, etc.) ?

- LMs should **run locally**
    - LMstudio / Ollama

- LMs should be **fully reproducible**

- **Build own LMs**
    - it seems that **training** / fine-tuning **own LMs is inevitable** if I want to build my own product. Custom-tailored LMs for particular domains or even specific tasks might be what gives the **maximum quality for problem solving**.
        - One possible way forward could be **take a SOTA model and fine-tuning it** with my own data for some purpose
        - Build LM **from scratch** (?)

- **Standardize** in-product **model replacement**
    - Models will come and go, and change. New ones are and will be continuously released, probably enabling access to better models. Which means I have to consider and be ready to monitor for new releases and be able to **train, fine-tunie and incorporate** those into the product **easily** and **quickly**, without much hassle. Which means I have to automate and standardize it. And maybe release as open-source if it's good enough.

