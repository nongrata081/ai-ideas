# Local LLMs

- [hugging face](/ai-tools/LLM/local/huggingface)
- [ollama](/ai-tools/LLM/local/ollama)
- [vllm](/ai-tools/LLM/local/vllm)
- [llamafile](/ai-tools/LLM/local/llamafile)
- [jan](/ai-tools/LLM/local/jan)
- [lmstudio](/ai-tools/LLM/local/lmstudio)

## Considerations

### Downloading LM

- Impossibility to download an LM with litgpt
    - there is a bug, when downloading the `.safetensors` file, the litgpt hangs, and the terminal too, without responding (Ctrl+C also doesn't work to stop the process).
        ```
        litgpt-test % litgpt download meta-llama/Llama-3.2-3B-Instruct --access_token=<access_token>
        Setting HF_HUB_ENABLE_HF_TRANSFER=1
        config.json: 100% ███████████████████| 878/878 [00:00<00:00, 1.25MB/s]
        generation_config.json: 100%|████████████████████| 189/189 [00:00<00:00, 888kB/s]
        model-00001-of-00002.safetensors:   0%|       | 0.00/4.97G [00:00<?, ?B/s
        ```
        - why does it happen? could be because of slow internet connection? **test on proper internet speed**
        - if the issue persists with fast internet, consider **downloading models from other sources** (hf directly?) from which there are no issues for downloading, **and manually converting** files **to binary** (for fast execution) with **llama.cpp** or **llamafile**

- **Size in GBs** 
    - Git cloned Llama 3.1 8B from [HF](/ai-tools/LLM/local/huggingface) took **78.93 GBs** of diskspace. That's a lot.
        - is it the same with litgpt?
    - Could be a problem with slow internet connections.
- **File type**
    - Downloaded files (their type) differ depending on the tool used for downloading:
        - ollama (sha-ed binaries), e.g.:
            ```shell
            sha256-a118ad7fa62a1bb534fe88ed87d4f56df573c1f1d7473b4607a27d66e1f05287
            sha256-bde69095d89f25975a0b3036253183e685b5d3edf5340825aba40bbf51296e8a
            sha256-92af2a7f5cbbaa020a1d07873572534395246dd5f9eb9e8fc15eb8b913172d10
            ```
        - hugging face, (.safetensors), e.g.:
            ```shell
            config.json
            generation_config.json
            LICENSE
            model-00001-of-00004.safetensors (4.98 GB)
            model-00002-of-00004.safetensors (5 GB)
            model-00003-of-00004.safetensors (4.92 GB)
            model-00004-of-00004.safetensors (1.17 GB)
            model.safetensors.index.json
            original/consolidated.00.pth (16.06 GB)
            original/params.json
            original/tokenizer.model
            README.md
            special_tokens_map.json
            tokenizer_config.json
            tokenizer.json
            USE_POLICY.md
            ```
        - litgpt, (.bin), e.g.:
            ```shell
            config.json
            generation_config.json
            lit_model.pth (2.47 GB)
            model_config.yaml
            model.bin (2.47 GB)
            tokenizer_config.json
            tokenizer.json
            ```
            - https://github.com/Lightning-AI/litgpt/issues/1625
                - **when downloading** and converting models to LitGPT format, we **convert downloaded .safetensor files to .bin** files. We may want to explore if/how we can read from safetensors directly. This would safe a lot of time and intermittent disk space.
                - By default, the litgpt **download** command **converts** the downloaded HF **checkpoint files into a LitGPT compatible format** after downloading. For example,
                    ```shell
                    litgpt download EleutherAI/pythia-14m
                    ```
                    creates the following files:
                    ```shell
                    checkpoints/
                    └── EleutherAI/
                        └── pythia-14m/
                            ├── config.json
                            ├── generation_config.json
                            ├── model_config.yaml      # LitGPT specific file
                            ├── lit_model.pth          # LitGPT specific file
                            ├── pytorch_model.bin
                            ├── tokenizer.json
                            └── tokenizer_config.json
                    ```

## Explanations

### Model file types

- [.gguf](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md)
    - [.gguf hf](https://huggingface.co/docs/hub/en/gguf)
- [.safetensors](https://github.com/huggingface/safetensors)
    - [.safetensors hf](https://huggingface.co/docs/safetensors/en/index)
- .pth
    - A `.pth` file in PyTorch is a file format used to save different states of model including it’s weights, biases and other parameter. These files are **python pickled objects**, which means they are serialized. This allows one to **save a trained model** and later load it to continue training or to make predictions.
        - To save a model in PyTorch, you might use:
            ```python
            torch.save(model.state_dict(), 'model.pth').
            ```
        - To load a model:
            ```python
            model.load_state_dict(torch.load('model.pth'))
            ```
        - https://pytorch.org/tutorials/beginner/saving_loading_models.html#save-load-entire-model
- pickle
    - https://docs.python.org/3/library/pickle.html
    - https://huggingface.co/docs/hub/security-pickle

### Model files

- `config.json`
    - **Purpose**: Contains the configuration for the model architecture. This file defines important parameters of the model, such as the number of layers, hidden dimensions, attention heads, and other model-specific hyperparameters.


- `generation_config.json`
- `LICENSE`
- `.safetensors`
    - `model-00001-of-00004.safetensors`
    - `model-00002-of-00004.safetensors`
    - `model-00003-of-00004.safetensors`
    - `model-00004-of-00004.safetensors`
        - **Purpose**: These are sharded parts of the model's weights in the .safetensors format, split into 4 files for easier distribution and loading. Sharding is used when the model is too large to fit into a single file. Each .safetensors file contains a part of the model's parameters (e.g., weights, biases, etc.) in a binary format optimized for speed and safety.
        - **Why Multiple Files?**: The large size of models like LLaMA requires the weights to be split into multiple files for easier handling and storage.
        - **Loading**: These files are loaded together as parts of a single model when using libraries like Hugging Face Transformers.

- `model.safetensors.index.json`
- `original/consolidated.00.pth`
    - Purpose: This file contains the **original PyTorch version of the model**'s weights, before they were converted to the .safetensors format. .pth is a PyTorch-specific format for saving models and tensors.
    - Why is it included?: This might be included to provide compatibility with users or tools that prefer the **original PyTorch format**, allowing them to load the model directly into PyTorch.
- `original/params.json`
- `original/tokenizer.model`
- `README.md`
- `special_tokens_map.json`
- `tokenizer_config.json`
- `tokenizer.json`
- `USE_POLICY.md`

---

### SHA256 Hash

The file `sha256-a118ad7fa62a1bb534fe88ed87d4f56df573c1f1d7473b4607a27d66e1f05287`is the locally stored binary for the Llama 3.1 8B model that you pulled using Ollama. Here’s a breakdown of what this file represents and why it's named this way:

- SHA256 Hash
    - SHA256 is a cryptographic hash function that generates a unique 256-bit (64-character) hash for a given input (in this case, the model file).
    - The hash ensures integrity by verifying that the file has not been altered or corrupted. If the file's content changes, even by one byte, the SHA256 hash will change completely.
- Why Use a SHA256 Hash as a Filename?
    - Naming and Uniqueness: By using the SHA256 hash as the filename, Ollama ensures each model file is uniquely identified by its content. This avoids name conflicts and allows multiple versions of the same model to be stored (since different versions will have different hashes).
    - Content Verification: The hash allows the system to verify the integrity of the file before loading it. If the hash of the file on disk doesn't match the expected hash, it indicates corruption or tampering.
- What’s Inside the File?
    - The file contains the weights and architecture information necessary to run the Llama 3.1 8B model. When you run the model via Ollama, this file is loaded into memory, and the model's computations are executed based on the data stored within it.
- How It's Used
    - When you invoke the Llama 3.1 8B model, Ollama refers to this file. It matches the hash with its internal records to identify which model you're using and then loads it for inference or further processing.

### Binary

A binary is a file that contains data in a format understood directly by a computer's processor. Unlike text files, which store data as human-readable characters, binary files store data in **machine-readable code** (sequences of bytes) that represent instructions, numbers, or other forms of data. Here's a more detailed breakdown:

#### Key Characteristics of a Binary File:

- **Machine-readable**: The data in a binary file is encoded in binary form (i.e., a series of 0s and 1s), which can be directly executed or processed by the computer.
- **Not human-readable**: If you try to open a binary file in a text editor, it will appear as a series of nonsensical or garbled characters because it's not encoded as readable text.
- **Specific Formats**: Binary files can store many types of data:
    - **Executable code**: Programs or software that can be run by a computer.
    - **Data**: Complex data structures such as images, audio, machine learning models, and more.
    - **Efficient Storage**: Binary files are more **compact** and efficient because they store data directly in the format the computer needs, without the need for encoding it as readable text.

#### Examples of Binary Files:

- **Executable files**: Programs like `.exe` on Windows or `.bin` on Unix-based systems.
- **Multimedia files**: Images, audio, and video (e.g., `.png`, `.mp3`, `.mp4`).
- **Compiled code**: Code that has been converted from a programming language into machine instructions (e.g., `.o` or `.so` files).
- **Machine learning models**: Files like LLaMA 3.1 model, which store the parameters (weights) learned during training.

#### Inspecting a Binary File:

You can open or "inspect" the contents of a binary file using tools like a hex editor or command-line utilities like `hexdump` or `xxd`. These tools display the binary data as hexadecimal numbers and corresponding ASCII characters where possible. However, this representation won't be particularly useful for understanding the contents of something like a machine learning model, because:

- **The data is encoded for machines**: The numbers represent complex patterns and structures (such as model weights, biases, and connections) that are used by the system during inference, but not meaningful in their raw form to humans.
- **Lack of context**: Without the code or algorithms that created or use the binary file, inspecting the raw data doesn't reveal how it functions or what its values mean.

**Example of Inspecting a Binary File:**

If you want to see what the inside of the file looks like, you could use a tool like `xxd` in a terminal:

```shell
xxd sha256-8eeb52dfb3bb9aefdf9d1ef24b3bdbcfbe82238798c4b918278320b6fcef18fe | less
```

This would output something like:

```shell
00000000: 4d5a 9000 0300 0000 0400 0000 ffff 0000  MZ..............
00000010: b800 0000 0000 0000 4000 0000 0000 0000  ........@.......
```

You'll see hexadecimal values (e.g., `4d5a`) and their ASCII representation (e.g., `MZ`) side by side. For large files like machine learning models, you'll see huge blocks of numbers, which represent model weights and other parameters.

#### Why It Doesn't Make Sense to Inspect Directly:

- **Model weights**: The bulk of the content is numeric data, like floating-point numbers that represent the learned parameters of the neural network. These are matrices and tensors that only make sense when processed by software like PyTorch or TensorFlow.
- **Encoded information**: There's no inherent human-readable information. For example, you won’t see labels like "neuron" or "layer"—just a sequence of values that have been learned during the training process.

#### How to Make It Useful:

- **Load it using the right software**: To actually make sense of the contents, you'd need to load the binary model file into an appropriate framework (e.g., PyTorch) that understands its structure and can interpret it, showing details like layer structure, weights, and activations.
- **Model inspection tools**: After loading the model, you can use model visualization tools (like Netron for neural networks) to explore the architecture or inspect individual layer parameters in a more understandable format.