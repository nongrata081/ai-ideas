# Data versioning

- [ ] Use semver for data 
    - [Semantic Versioning for Data Products](https://medium.com/data-architect/semantic-versioning-for-data-products-2b060962093)
    - use **git tags**
- [ ] Extract best practice from [medium/@korenmiklos](https://medium.com/@korenmiklos)

## Git tags

[How exactly does datasets versioning work?](https://discuss.huggingface.co/t/how-exactly-does-datasets-versioning-work/20853/4) hf Q/A

...

> - dataset info in data loading script contains the version so that this metadata can be retrieved from within Python code. This version is also used to save the dataset to disk under this version
> - data files are versioned based on their git commit/tag → when given, a revision will look for these in the repository and download the corresponding files from that tag/commit
> - → you’ll have to make sure that the Version specified in your loading script corresponds with the version of your git tag (if you want to use semantic versioning)

## chatGPT Q/A

> in [huggingface datasets](https://huggingface.co/datasets) ([hf datasets docs](https://huggingface.co/docs/datasets/en/index)) is there a possibility to version a dataset? to switch between different versions of it?

Yes, in Hugging Face Datasets, you can version datasets and switch between different versions. Hugging Face allows users to host multiple versions of a dataset, and you can access a specific version by specifying the **version number** or **commit hash** in your code.

Here’s how you can work with different versions:

### 1. Using a specific version or commit:

You can specify a particular version of a dataset by using its Git commit hash. Each dataset version on Hugging Face is associated with a commit, so you can load a specific one.

```python
from datasets import load_dataset

# Specify a particular commit id or version
dataset = load_dataset("dataset_name", revision="commit_or_version")
```

You can find the specific commit hash or version in the dataset's Hugging Face model page under the "Revisions" tab.

### 2. Switching to a different version:

To switch between versions, you can simply change the `revision` argument in the `load_dataset` function to the desired commit or version.

For example, to load the latest version of a dataset:

```python
dataset = load_dataset("dataset_name")
```

Or to load a different version:

```python
dataset = load_dataset("dataset_name" revision="another_commit_or_version")
```

### 3. Tracking versions:

You can track the versions using the Hugging Face repository's commit history. Each version corresponds to a specific commit, and you can view these in the dataset's GitHub-like interface under the "Commits" section.


## Git checkout to a specific version by commit or git tag

```shell
git lfs install  # You need Git LFS installed to handle large files like datasets
git clone https://huggingface.co/datasets/{username}/{dataset_name}

cd {dataset_name}

git checkout 123abc456def  # specific commit ID
```

To checkout a specific version or commit, use the git checkout command:

```shell
git checkout {commit_hash_or_tag}
```

For example:

```shell
git checkout abcd1234  # Replace with the actual commit hash
```