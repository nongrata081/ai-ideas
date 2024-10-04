# Steps to run LMs locally

[torchtune](/ai-tools/LLM/local/tools/torchtune)

[torchchat](/ai-tools/LLM/local/tools/torchchat)

## Supposed model usage

- Training / Fine-tuning / Testing / Evaluating / Serving for **development**
- Serving model for **production**

## 1. Download LM

> The most reliable way to download a model is to do it manually from **huggingface**. (Given that model files are big, safer to download files manually one by one from Chrome, so that you can see the progress download, which isn't shown in case of `git clone` in the terminal)

> Depending on the model repository, model files can be distributed in different file formats (e.g. `.safetensors, .gguf, .pth, .bin, etc.`)

> Ideally, have a `standard reliable way for downloading models` (with possibility to see the progress even with slow internet connection). `+ Have a tool to convert the model into different file formats.` + `have fast local serving, evaluation, training, fine-tuning`

- Options
    - huggingface
    - litgpt
    - ollama
    - lmstudio
    - etc.



## 2. Perform file manipulations

> Depending on the supposed model usage, it might be needed to convert model files to a certain format.

## 3. Serve the model via local web-server

- [Running LLMs on a Mac with llama.cpp](https://www.youtube.com/watch?v=YDj_ScvBpKU)
- litgpt serve

## 4. Run inference

llama.cpp / llamafile

- [Running LLMs on a Mac with llama.cpp](https://www.youtube.com/watch?v=YDj_ScvBpKU)