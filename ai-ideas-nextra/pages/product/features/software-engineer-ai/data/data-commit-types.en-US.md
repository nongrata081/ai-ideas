# Data Commit Types

Reflect about what commit types would be optimal for tracking changes for a dataset development in a changelog. Define **commit types standard for datasets**.

## Commit type standard for datasets

## chatGPT Q/A

here are commit types for application development:
```
{ message = ".*BREAKING", group = "<!-- 0 -->🟡 BREAKING CHANGES" },
{ message = "^feat", group = "<!-- 1 -->🚀  Features" },
{ message = "^fix", group = "<!-- 2 -->💊  Bug Fixes" },
{ message = "^test", group = "<!-- 3 -->🧪  Testing" },
{ message = "^ci", group = "<!-- 4 -->🛠  Continuous Integration" },
{ message = "^perf", group = "<!-- 5 -->⚡️  Performance" },
{ body = ".*security", group = "<!-- 6 -->🛡️  Security" },
{ message = "^refactor", group = "<!-- 7 -->🚜  Refactor" },
{ message = "^chore", group = "<!-- 8 -->⚙️  Chore" },
{ message = "^style", group = "<!-- 9 -->🎨 Styling" },
{ message = "^doc", group = "<!-- 10 -->📚 Documentation" },
{ message = "^revert", group = "<!-- 11 -->⏪ Revert" },
```
what commit types can you suggest for a dataset development (for training of a language model) ?

---

For dataset development, especially for training a language model, you can use commit types similar to those in application development, but tailored to dataset-specific changes. Here are some commit types that might be relevant:

0. data - For changes or updates to the dataset:
    - Group: <!-- 0 -->📊 Dataset Updates
    - Example: { message = "^data", group = "<!-- 0 -->📊 Dataset Updates" }

1. schema - For modifications to dataset structure or metadata:
    - Group: <!-- 1 -->🗂 Schema Changes
    - Example: { message = "^schema", group = "<!-- 1 -->🗂 Schema Changes" }

2. label - For adding or modifying labels or annotations in the dataset:
    - Group: <!-- 2 -->🏷️ Label Updates
    - Example: { message = "^label", group = "<!-- 2 -->🏷️ Label Updates" }

3. source - For changes to the dataset's source, such as fetching data from new locations:
    - Group: <!-- 3 -->🌍 Source Changes
    - Example: { message = "^source", group = "<!-- 3 -->🌍 Source Changes" }

4. preprocess - For changes related to data preprocessing or augmentation:
    - Group: <!-- 4 -->🔧 Preprocessing
    - Example: { message = "^preprocess", group = "<!-- 4 -->🔧 Preprocessing" }

5. augment - For applying data augmentation techniques:
    - Group: <!-- 5 -->📈 Data Augmentation
    - Example: { message = "^augment", group = "<!-- 5 -->📈 Data Augmentation" }

6. sample - For adding or modifying samples in the dataset:
    - Group: <!-- 6 -->🧪 Sample Updates
    - Example: { message = "^sample", group = "<!-- 6 -->🧪 Sample Updates" }

7. eval - For changes related to evaluation data or metrics:
    - Group: <!-- 7 -->📊 Evaluation Data
    - Example: { message = "^eval", group = "<!-- 7 -->📊 Evaluation Data" }

8. metadata - For changes to metadata such as dataset description, versioning, etc.:
    - Group: <!-- 8 -->📝 Metadata Updates
    - Example: { message = "^metadata", group = "<!-- 8 -->📝 Metadata Updates" }

9. split - For changes in the train/validation/test splits of the dataset:
    - Group: <!-- 9 -->🔀 Data Splits
    - Example: { message = "^split", group = "<!-- 9 -->🔀 Data Splits" }

---

These commit types should help organize and track changes in dataset development, especially when working on a project involving training language models.