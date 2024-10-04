# Continuous Training Pipeline

- [litgpt](https://github.com/Lightning-AI/litgpt)

Create a Web UI with xterm.js + litgpt. Execute litgpt terminal commands for models:
- downloading
- pre-training
- training
- fine-tuning
- testing
- deploying 

Show all terminal outputs in a handy way in a web UI.

---

## Download

LitGPT supports a variety of LLM architectures with publicly available weights. You can download model weights and access a list of supported models using the litgpt download list command.

```shell
# 1) List all supported LLMs
litgpt download list

# 2) Use a model (auto downloads weights)
litgpt chat microsoft/phi-2

>> Prompt: What do Llamas eat?
```

The download of certain models requires an additional access token. You can read more about this in the [download](https://github.com/Lightning-AI/litgpt/blob/main/tutorials/download_model_weights.md) documentation.

> should I add a possibility to download models directly from hugging face?
> ```shell
> git lfs install
>
>git clone https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct
> ```
> (e.g. there are sometimes errors with litgpt download - hanging the process without any progress when trying to download a model).

## Pretrain

[litgpt pretrain](https://github.com/Lightning-AI/litgpt?tab=readme-ov-file#pretrain-an-llm)

Pretraining is the process of teaching an AI model by exposing it to a large amount of data before it is fine-tuned for specific tasks.

```shell
mkdir -p custom_texts
curl https://www.gutenberg.org/cache/epub/24440/pg24440.txt --output custom_texts/book1.txt
curl https://www.gutenberg.org/cache/epub/26393/pg26393.txt --output custom_texts/book2.txt

# 1) Download a tokenizer
litgpt download EleutherAI/pythia-160m \
  --tokenizer_only True

# 2) Pretrain the model
litgpt pretrain EleutherAI/pythia-160m \
  --tokenizer_dir EleutherAI/pythia-160m \
  --data TextFiles \
  --data.train_data_path "custom_texts/" \
  --train.max_tokens 10_000_000 \
  --out_dir out/custom-model

# 3) Test the model
litgpt chat out/custom-model/final
```

[Full pretraining docs](https://github.com/Lightning-AI/litgpt/blob/main/tutorials/pretrain.md)

## Finetune

[litgpt finetune](https://github.com/Lightning-AI/litgpt?tab=readme-ov-file#finetune-an-llm)

Finetuning is the process of taking a pretrained AI model and further training it on a smaller, specialized dataset tailored to a specific task or application.

```shell
# 0) setup your dataset
curl -L https://huggingface.co/datasets/ksaw008/finance_alpaca/resolve/main/finance_alpaca.json -o my_custom_dataset.json

# 1) Finetune a model (auto downloads weights)
litgpt finetune microsoft/phi-2 \
  --data JSON \
  --data.json_path my_custom_dataset.json \
  --data.val_split_fraction 0.1 \
  --out_dir out/custom-model

# 2) Test the model
litgpt chat out/custom-model/final

# 3) Deploy the model
litgpt serve out/custom-model/final
```

[Full finetuning docs](https://github.com/Lightning-AI/litgpt/blob/main/tutorials/finetune.md)

## Continue pretraining

[litgpt continue pretraining](https://github.com/Lightning-AI/litgpt?tab=readme-ov-file#continue-pretraining-an-llm)

Continued pretraining is another way of finetuning that specializes an already pretrained model by training on custom data:

```shell
mkdir -p custom_texts
curl https://www.gutenberg.org/cache/epub/24440/pg24440.txt --output custom_texts/book1.txt
curl https://www.gutenberg.org/cache/epub/26393/pg26393.txt --output custom_texts/book2.txt

# 1) Continue pretraining a model (auto downloads weights)
litgpt pretrain EleutherAI/pythia-160m \
  --tokenizer_dir EleutherAI/pythia-160m \
  --initial_checkpoint_dir EleutherAI/pythia-160m \
  --data TextFiles \
  --data.train_data_path "custom_texts/" \
  --train.max_tokens 10_000_000 \
  --out_dir out/custom-model

# 2) Test the model
litgpt chat out/custom-model/final
```

[Full pretraining docs](https://github.com/Lightning-AI/litgpt/blob/main/tutorials/pretrain.md#continued-pretraining-on-custom-data)

## Test

[litgpt test](https://github.com/Lightning-AI/litgpt?tab=readme-ov-file#test-an-llm)

Test how well the model works via an interactive chat. Use the chat command to chat, extract embeddings, etc...

```shell
litgpt chat microsoft/phi-2

>> Prompt: What do Llamas eat?
```

[Full chat docs](https://github.com/Lightning-AI/litgpt/blob/main/tutorials/inference.md)

## Evaluate

[litgpt evaluate](https://github.com/Lightning-AI/litgpt?tab=readme-ov-file#evaluate-an-llm)

Evaluate an LLM to test its performance on various tasks to see how well it understands and generates text. Simply put, we can evaluate things like how well would it do in college-level chemistry, coding, etc... (MMLU, Truthful QA, etc...)

[Full evaluation docs](https://github.com/Lightning-AI/litgpt/blob/main/tutorials/evaluation.md)

## Deploy

[litgpt deploy](https://github.com/Lightning-AI/litgpt?tab=readme-ov-file#deploy-an-llm)

Deploy a pretrained or finetune LLM to use it in real-world applications. Deploy, automatically sets up a web server that can be accessed by a website or app.

```shell
# deploy an out-of-the-box LLM
litgpt serve microsoft/phi-2

# deploy your own trained model
litgpt serve path/to/microsoft/phi-2/checkpoint
```

Test the server in a separate terminal and integrate the model API into your AI product:

```shell
# 3) Use the server (in a separate Python session)
import requests, json
response = requests.post(
    "http://127.0.0.1:8000/predict",
    json={"prompt": "Fix typos in the following sentence: Exampel input"}
)
print(response.json()["output"])
```

[Full deploy docs](https://github.com/Lightning-AI/litgpt/blob/main/tutorials/deploy.md)
