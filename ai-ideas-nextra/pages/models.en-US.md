# Models

## Apple Silicon

> **`IMPORTANT`**: On Apple devices run [LLMs on Apple Silicon with MLX](https://huggingface.co/mlx-community?sort_models=likes#models). 

If you're running regular (non-MLX) models from [huggingface](huggingface.co), you'll get worse LM performance (slower response generation by LMs, less amount of tokens per second) due to running LMs with Pytorch backend, not optimized for best performance on Apple Silicon. 

[120+ toks/sec on an M2 Ultra! With the latest MLX, 4-bit Mistral 7B](https://x.com/awnihannun/status/1849922613403058398)

[Local LLMs on Apple Mac - powered by MLX!](https://www.youtube.com/watch?v=7DQsZQzCVuE)

## MLX community models

[MLX community models](https://huggingface.co/mlx-community?sort_models=likes#models)

## mlx-vlm

[Blaizzy/mlx-vlm](https://github.com/Blaizzy/mlx-vlm)

MLX-VLM is a package for running Vision LLMs locally on your Mac using MLX.