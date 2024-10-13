# Datasets

## huggingface/datasets

https://github.com/huggingface/datasets

🤗 The largest hub of ready-to-use datasets for ML models with fast, easy-to-use and efficient data manipulation tools

🤗 Datasets is a lightweight library providing two main features:

one-line dataloaders for many public datasets: one-liners to download and pre-process any of the number of datasets major public datasets (image datasets, audio datasets, text datasets in 467 languages and dialects, etc.) provided on the HuggingFace Datasets Hub. With a simple command like squad_dataset = load_dataset("squad"), get any of these datasets ready to use in a dataloader for training/evaluating a ML model (Numpy/Pandas/PyTorch/TensorFlow/JAX),
efficient data pre-processing: simple, fast and reproducible data pre-processing for the public datasets as well as your own local datasets in CSV, JSON, text, PNG, JPEG, WAV, MP3, Parquet, etc. With simple commands like processed_dataset = dataset.map(process_example), efficiently prepare the dataset for inspection and ML model evaluation and training.