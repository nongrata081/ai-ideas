# Glossary

## Training

(Explanation from chatGPT for terms **test split** and **validation split** from [OLMES: A Standard for Language Model Evaluations](https://www.semanticscholar.org/reader/c689c37c5367abe4790bff402c1d54944ae73b2a), page 5 (sampling))

In the context of large language models (LLMs), the **test split** and **validation split** refer to different **subsets of a dataset** that are **used during training** and **evaluation**.

### Test split

- **Test split** is a portion of the dataset that provides an unbiased **evaluation of the model's performance** on unseen data
    - is used only after the model has been fully trained
    - is used to measure how well the model generalizes to new data that it has not encountered during training or validation
    - In the case of public datasets, if the labels are publicly available, the test split can be used for evaluation, but if they are hidden (like in some competitions), it's reserved for final performance assessment.

### Validation split

- **Validation split** is a portion of the dataset that is used during the training process **to tune the model** and check its performance **while** it is **being trained**.
    - It helps to **adjust** the model’s **hyperparameters** (e.g., learning rate, architecture choices) and **avoid overfitting** (when the model performs well on training data but poorly on unseen data).
    - Unlike the test split, the validation data **is used frequently during training** to **guide improvements** but is separate from the training data.

Key Difference:

- Test Split: 
    - Used for final evaluation after training is complete.
- Validation Split: 
    - Used during training to monitor and fine-tune the model.
    When working with a dataset where labels are publicly available, you might use the test split directly. If the labels are hidden, you would use the validation split **for interim evaluations**, as it contains **labeled data** that **can guide model development**.

---

### Example 1: Test Split
Let’s say we are training an LLM on a large question-answering dataset.

- The dataset contains 100,000 labeled question-answer pairs.
- We split it as follows:
    - Training Set: 80,000 pairs (used to train the model).
    - Validation Set: 10,000 pairs (used during training to adjust the model).
    - Test Set: 10,000 pairs (used for final evaluation).

After the model has been fully **trained** using the **training set** and **fine-tuned** using the **validation set**, we evaluate its performance on the test set, which consists of 10,000 **completely unseen question-answer pairs**. This gives us a sense of how well the model performs on new data.

#### Test Split Usage Example:
- If the task is **public question-answering** and the labels (correct answers) are available to everyone, the test split can be used for evaluation after training to check how well the model generalizes.
- In some cases, like in competitions (e.g., Kaggle), the test labels are **not public**, and you can't use the test split for validation purposes during training.

### Example 2: Validation Split
Suppose you are training an LLM on a dataset for text classification.

- You split the dataset like this:
    - **Training Set**: 50,000 samples (used to train the model).
    - **Validation Set**: 5,000 samples (used to tune and evaluate the model during training).
    - **Test Set**: 5,000 samples (used for final evaluation).

After each **training epoch** (a full pass over the training data), you evaluate the model’s performance on the **validation set**. This helps you identify whether the model is overfitting or underfitting, and it helps adjust **hyperparameters** (e.g., learning rate, model size) based on how well the model is doing on the validation set.

#### Validation Split Usage Example:
- After training the model for 5 epochs, you check its accuracy on the **validation set** and see it’s **improving with each epoch**. However, in the 6th and 7th epochs, the performance on the validation set starts decreasing, while the **training set accuracy** keeps improving. This suggests **overfitting** — the model is learning the training data too well but failing to generalize.
- You stop training and fine-tune your hyperparameters (like reducing the model size or adjusting the learning rate) to prevent overfitting.

### Conclusion:

- Test Split: Used at the end of the training process to evaluate model performance on unseen data (if the labels are publicly available).
- Validation Split: Used during training to monitor the model’s performance and tune hyperparameters.

Both splits are essential for ensuring that the LLM is robust and generalizes well to unseen data!

## Statistics

### Normalization

Normalization or normalisation refers to a process that makes something more normal or regular. - [wiki](https://en.wikipedia.org/wiki/Normalization)

In statistics and applications of statistics, normalization can have a range of meanings.[1] In the simplest cases, normalization of ratings means adjusting values measured on different scales to a notionally common scale, often prior to averaging. In more complicated cases, normalization may refer to more sophisticated adjustments where the intention is to bring the entire probability distributions of adjusted values into alignment. In the case of normalization of scores in educational assessment, there may be an intention to align distributions to a normal distribution. A different approach to normalization of probability distributions is quantile normalization, where the quantiles of the different measures are brought into alignment.

In another usage in statistics, normalization refers to the creation of shifted and scaled versions of statistics, where the intention is that these normalized values allow the comparison of corresponding normalized values for different datasets in a way that eliminates the effects of certain gross influences, as in an anomaly time series. Some types of normalization involve only a rescaling, to arrive at values relative to some size variable. In terms of levels of measurement, such ratios only make sense for ratio measurements (where ratios of measurements are meaningful), not interval measurements (where only distances are meaningful, but not ratios).

In theoretical statistics, parametric normalization can often lead to pivotal quantities – functions whose sampling distribution does not depend on the parameters – and to ancillary statistics – pivotal quantities that can be computed from observations, without knowing parameters. - [wiki statistics](https://en.wikipedia.org/wiki/Normalization_(statistics))