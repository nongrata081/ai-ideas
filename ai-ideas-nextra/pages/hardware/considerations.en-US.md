# Hardware Considerations

- it's possible to assemble an [AI server]() (with GPUs memory (for inference speed) & RAM volume (for running / training LMs)) depending on the customer needs. 
- AI Hardware has to be thought of in terms of RoI. What RoI can be gotten on certain different assemblies of an AI Server? What capabilities does each assembly provide in terms of training / running LMs? 
- What assembly or a set of assemblies is the best practice for being able to continuously train and serve LMs?
- How does the workflow look from a process standpoint in order to maximize the RoI (for both training and serving)? Do training and serving of LMs have to happen on different machines in order to be continuously executed in parallel? Or it could be done without efficiency loss on the same machine ?

## Model sizes
- it is ridiculous that a computer program takes up so much disk space to store tensors and require so much RAM to run.
    - In [Apple M3 Max MLX beats RTX4090m](https://www.youtube.com/watch?v=0wxobKsnf2o) runs [whisper.cpp](https://github.com/ggerganov/whisper.cpp) to transcribe a video into a text. With a [whisper-tiny](https://huggingface.co/openai/whisper-tiny) [**`model weighing 150MB`**](https://huggingface.co/openai/whisper-tiny/tree/main) (**not gigabytes!**).
    - arxiv [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361)
        - > We study empirical scaling laws for language model performance on the cross-entropy loss. The **loss scales** as a power-law **with model size**, **dataset size**, and the **amount of compute** used **for training**, with some trends spanning more than seven orders of magnitude. Other architectural details such as **network width** or **depth** have minimal effects within a wide range. Simple equations govern the **dependence of overfitting on model/dataset size** and the **dependence of training speed on model size**. These relationships allow us to determine the **optimal allocation of a fixed compute budget**. Larger models are significantly more sample-efficient, such that optimally compute-efficient training involves **training** very large **models** on a relatively **modest** amount of **data** and **stopping significantly before convergence**.
- Regarding the cost of it and the market heat it creates, it looks like a global bubble. There is definitely a need for new ways to store tensors, that would be lightweight (enough to run 405b on a consumer laptop) and to train it (having to buy a 100k$ AI server solely for the LM purpose seems ridiculous). What are some possible ways to reduce the LMs weight and need for disk space for storing and RAM for training?
- Ideally, models should be lightweight (not GBs in size), easy and fast to train, finetune, perform any operations on (upload, download, move, run, etc) and should not require so much expensive hardware to work with. If there is a way to reduce the size of the LMs (and to run it efficiently on consumer grade hardware), it should definitely be done.
    - [Were RNNs All We Needed?](https://arxiv.org/abs/2410.01201)
    - YT [Were RNNs All We Needed](https://www.youtube.com/watch?v=PrMgV4zFHTg)

### Why LLMs use so much RAM?

[OnnxStream](https://github.com/vitoplantamura/OnnxStream)

Lightweight inference library for ONNX files, written in C++. It can run Stable Diffusion XL 1.0 on a **[RPI Zero 2](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/)** **(or in 298MB of RAM)** but also **Mistral 7B on desktops** and servers. ARM, x86, **WASM**, RISC-V supported. Accelerated by XNNPACK.

> Generally major **machine learning frameworks** and libraries **are focused on minimizing inference latency and/or maximizing throughput**, all of which **at the cost of RAM** usage. So I decided to write a super small and hackable inference library specifically focused on minimizing memory consumption: OnnxStream.
>
> OnnxStream is based on the idea of **decoupling the inference engine from the component responsible of providing the model weights**, which is **a class derived from WeightsProvider**. A **WeightsProvider** specialization can implement any type of **loading**, **caching** and **prefetching** of the **model parameters**. For example a custom WeightsProvider can decide to download its data from an HTTP server directly, without loading or writing anything to disk (hence the word "Stream" in "OnnxStream"). Three default WeightsProviders are available: **DiskNoCache**, **DiskPrefetch** and **Ram**.
>
> OnnxStream can consume even **55x less memory** than OnnxRuntime with only a **50% to 200% increase in latency** (on CPU, with a good SSD, with reference to the SD 1.5's UNET - see the Performance section [below](https://github.com/vitoplantamura/OnnxStream?tab=readme-ov-file#stable-diffusion-15)).

[OnnxStreamGui](https://github.com/ThomAce/OnnxStreamGui)

[OnnxStream running TinyLlama 1.1B and Mistral 7B with initial GPU support](https://github.com/vitoplantamura/OnnxStream/blob/master/assets/LLM.md)

## ML Hardware specifics

From [Apple M3 Max MLX beats RTX4090m](https://www.youtube.com/watch?v=0wxobKsnf2o)

> When you run large LLMs an RTX machine is going to be faster in general, because its going to load up all the data into memory. We havo to move between the CPU and GPU back and forth. The discrete GPU here has its own memory, it doesn't have a unified memory, like it does on Apple Silicon machine. It has to do a lot of moving back and forth, between the CPU memory, there's copying going on back and forth between the two different memories, and the processing and the GPU. And all that incurs a cost. And perhaps, if this was a bigger model, the 4090 would be faster on something like this. 

Consider MLX's use of [unified memory model (shared memory)](/hardware/mlx#utilization-of-unified-memory).

## 120 tokens / sec

[120+ toks/sec on an M2 Ultra! With the latest MLX, 4-bit Mistral 7B](https://x.com/awnihannun/status/1849922613403058398)

[Macstudio 120 tokens per second (Mistral 7B)](/hardware/mlx#macstudio-120-tokens-per-second-mistral-7b)

## DIY Considerations

1. It is possible to design and produce hardware
2. There is a community of people who are into this
3. Does it make sense to invest time & effort into producing own AI-specific hardware?
    - In case if reducing model size is possible, that it is def a higher priority way to go.
    - If not, then DIY hardware might be worth.

