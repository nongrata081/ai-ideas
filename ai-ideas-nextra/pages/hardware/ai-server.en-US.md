# AI Server

- [Computer AI for 550 000 AED - 2x RTX 6000 Ada Generation / 2x AMD EPYC 9754 / RAM 6Tb / SSD 32Tb](https://www.youtube.com/watch?v=4Ixqo8gmCu4)
    - 2x RTX 6000 Ada Generation
    - 2x AMD EPYC 9754
    - RAM 6Tb
    - SSD 32Tb
-  Configuration: 
    - CPUs - [AMD EPYC 9754 2.25 GHz 360W 128-core SP5 Server Processor](https://www.ebay.com/itm/176574041542) (**$3,525.00**) - 2 (**$7050**)
    - Motherboard - [Gigabyte MZ73-LM0 Rev 2.0 DP EATX SP5 Server Motherboard](https://www.ebay.com/itm/125950923786) (**$1,700.00**) - 1 (**$1,700.00**)
    - Memory - [Hynix 256GB DDR5-4800MHz PC5-38400 ECC Registered CL40 288-Pin RDIMM 1.1V Octa-Rank Memory](https://www.ebay.com/itm/305356221032) (**$3,799.00**) - 24 (**$91176**)
    - SSD - [Storage Sabrent Rocket 4 Plus 8 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive](https://sabrent.com/products/sb-rkt4p-8tb) (**$1,199.99**) - 4 (**$4796**)
    - Video Cards - [NVIDIA RTX 6000 ADA Generation [48GB, 18176 CUDA]](https://store.nvidia.com/en-us/nvidia-rtx/products/nvidia-rtx-6000-ada-generation/) (**$6,800.00**) - 2 (**$13600**)
    - Case - [Lian Li V3000PLUS](https://lian-li.com/product/v3000-plus) (**$499.99**) - [1](https://www.amazon.com/V3000-Black-Tempered-Gaming-Computer/dp/B0BN3TZR5G?th=1) (**$499.99**)
    - Power Supply - [FSP 2000W 80 Plus Platinum Modular Power Supply](https://www.amazon.com/FSP-Cannon-Certified-Modular-FSP2000-52AGPBI/dp/B09JYHTNHK) (**$459.99**) - 1 (**$459.99**)
    - Network Card - [Intel X550-T2 PCIe](https://www.ebay.com/itm/266280136878) (**$239.00**) - 1 (**$239.00**)
    - Wi-Fi Adaptor - [Cudy WE3000 3000Mbps Wi-Fi 6/ Bluetooth 5.0 PCl Express Adapter, Intel chipset](https://www.ebay.com/itm/145016556048) (**$22.84**) - 1 (**$22.84**)
    - EKWB full water-cooled system - EK Quantum Velocity² Waterblocks, EK-Quantum Surfaces, EK-Quantum Kinetic TBE 300 D5, EK fittings, EK-Loop ZMT Soft Tube 10/16mm 3m – Black, EK fittings, EK-Quantum Vector² waterblocks, EKWB fans.

---

## 3XS DBP G6-X Fluid (AI Workstation)

[Watercooled Intel Xeon Sapphire Rapids Deep Learning Workstation](https://www.scan.co.uk/3xs/configurator/dbp-g6srfluid) **£25,253.50**

- Case
    - Corsair 1000D with 3XS Custom Front Panel £449.98
- Motherboard
    - ASUS PRO WS W790E-SAGE SE - 2x 10 GbE, 1x 1 GbE, 6x USB-A, 2x USB-C **£1,099.99**
-   CPU
    - Intel Xeon W7-3465X, 28 Core, 56 Threads, 112 PCIe Lanes, 2.5GHz, 4.8GHz Turbo, 75MB Cache **£2,915.99**
- GPU
    - 24GB NVIDIA GeForce RTX 4090, 16384 CUDA Cores, 512 Tensor cores, 176 RT cores [6x GPU Accelerators] **£12,863.66** (???) - https://store.nvidia.com/en-gb/consumer/?page=1 ??? (**£1,499.00+**) ?

---

## Other

- [INSANE Ollama AI Home Server - Quad 3090 Hardware Build, Costs, Tips and Tricks](https://www.youtube.com/watch?v=JN4EhaM7vyw) 512GB RAM
    - [Ollama AI Home Server ULTIMATE Setup Guide](https://www.youtube.com/watch?v=q_cDvCq1pww)
- [host ALL your AI locally](https://www.youtube.com/watch?v=Wjrdr0NU4Sk)
    ![](./hardware/img/hardware-performance-monitoring.png)
- [$29000 Threadripper Pro 7995WX ㅣRTX 4090 4Way Super Workstion](https://www.youtube.com/watch?v=PAgz6NowMhI)
- [The Build AI Dev Box | Corsair 1000D | 6 x RTX 4090 | W7-3465X](https://www.youtube.com/watch?v=C548PLVwjHA)
- [Mini Rack, HomeLab Stack - Mini Server Rack](https://www.youtube.com/watch?v=kGZa-81IDGY)

https://github.com/NVIDIA/nvidia-container-toolkit

https://github.com/intel-analytics/ipex-llm

---

## AI Server Software

- [codeproject.ai](https://codeproject.ai/)
    - [github.com/codeproject](https://github.com/codeproject)
- [CodeProject.AI Server](https://www.codeproject.com/Articles/5322557/CodeProject-AI-Server-AI-the-easy-way)
    - [CodeProject.AI-Server](https://github.com/codeproject/CodeProject.AI-Server) gh
    - CodeProject.AI Server is a locally installed, self-hosted, fast, free and Open Source Artificial Intelligence server for any platform, any language.
    - For those who want to integrate AI functionality into their applications without writing the AI functionality or dealing with the insanely painful task of ensuring everything is setup correctly. CodeProject.AI Server manages your MLOps for you.
    - Think of CodeProject.AI Server like a database server: you install it, it runs in the background, and provides AI operations for any application via a simple API. The AI operations are handled by drop-in modules that can be easily created using any language, any stack, as long as that stack runs on the host machine. Python, .NET, node - whatever works for you.
    - CodeProject.AI server runs as a Windows service, under systemd in Linux, or on startup on macOS. Alternatively there are multiple Docker images for x64, arm64 and CUDA enabled systems. Any language that can make HTTP calls can access the service, and the server does not require an external internet connection. Your data stays in your network.
    - Currently CodeProject.AI Server contains AI modules that provide:
        - Object Detection - Python and .NET versions that use YOLO, plus a Tensorflow-Lite module that's ultra-lightweight and great for Raspberry Pi and Coral USB sticks
        - Face Detection and recognition
        - Text processing such as sentiment analysis and summarization
        - Image processing such as background removal, background blur, cartoon-isation and resolution enhancement
        - Model training, including dataset acquisition, for YOLO object detection