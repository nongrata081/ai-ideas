# Hugging face

One option to get an LM locally is to git clone it from hugging face.

Example:

https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct

https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct/tree/main

```shell
# Make sure you have git-lfs installed (https://git-lfs.com)
git lfs install
```

```shell
# Make sure your SSH key is properly setup in your user settings.
# https://huggingface.co/settings/keys
git clone git@hf.co:meta-llama/Llama-3.1-8B-Instruct
```

```shell
# If you want to clone without large files - just their pointers
GIT_LFS_SKIP_SMUDGE=1 git clone git@hf.co:meta-llama/Llama-3.1-8B-Instruct
```