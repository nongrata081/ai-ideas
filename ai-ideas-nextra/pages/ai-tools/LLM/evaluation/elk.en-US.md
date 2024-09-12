# elk

https://github.com/EleutherAI/elk

Because language models are trained to predict the next token in naturally occurring text, they often reproduce common human errors and misconceptions, even when they "know better" in some sense. More worryingly, when models are trained to generate text that's rated highly by humans, they may learn to output false statements that human evaluators can't detect. We aim to circumvent this issue by directly **eliciting latent knowledge ** (ELK) inside the activations of a language model.

Specifically, we're building on the Contrastive Representation Clustering (CRC) method described in the paper Discovering Latent Knowledge in Language Models Without Supervision by Burns et al. (2022). In CRC, we search for features in the hidden states of a language model which satisfy certain logical consistency requirements. It turns out that these features are often useful for question-answering and text classification tasks, even though the features are trained without labels.

https://docs.google.com/document/d/1WwsnJQstPq91_Yh-Ch2XRL8H_EpsnjrC1dwZXR37PC8/edit?usp=sharing

https://arxiv.org/abs/2212.03827

https://arxiv.org/pdf/2212.03827

Existing techniques for training language models can be misaligned with the truth: if we train models with imitation learning, they may reproduce errors that humans make; if we train them to generate text that humans rate highly, they may output errors that human evaluators can't detect. We propose circumventing this issue by directly finding latent knowledge inside the internal activations of a language model in a purely unsupervised way. Specifically, we introduce a method for accurately answering yes-no questions given only unlabeled model activations. It works by finding a direction in activation space that satisfies logical consistency properties, such as that a statement and its negation have opposite truth values. We show that despite using no supervision and no model outputs, our method can recover diverse knowledge represented in large language models: across 6 models and 10 question-answering datasets, it outperforms zero-shot accuracy by 4\% on average. We also find that it cuts prompt sensitivity in half and continues to maintain high accuracy even when models are prompted to generate incorrect answers. Our results provide an initial step toward discovering what language models know, distinct from what they say, even when we don't have access to explicit ground truth labels.