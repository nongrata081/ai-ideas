# LLM Data Processing

- [llm360 github repos](https://github.com/llm360)
    - [amber-data-prep](https://github.com/LLM360/amber-data-prep)
        - Data preparation code for Amber 7B LLM
    - [crystalcoder-data-prep](https://github.com/LLM360/crystalcoder-data-prep)
        - Data preparation code for CrystalCoder 7B LLM
    - [k2-data-prep](https://github.com/LLM360/k2-data-prep)



### Process LLM's training data

- [datatrove](https://github.com/huggingface/datatrove)
    - Freeing data processing from scripting madness by providing a set of platform-agnostic customizable pipeline processing blocks.
    - DataTrove is a library to process, filter and deduplicate text data at a very large scale. It provides a set of prebuilt commonly used processing blocks with a framework to easily add custom functionality.
    - DataTrove processing pipelines are platform-agnostic, running out of the box locally or on a slurm cluster. Its (relatively) low memory usage and multiple step design makes it ideal for large workloads, such as to **process an LLM's training data**.