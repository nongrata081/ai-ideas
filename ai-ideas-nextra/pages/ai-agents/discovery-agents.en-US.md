# Discovery agents

## Scientific Discovery

Ai2 is actively working on technologies to help with scientific research, data analysis, and ultimately **assist scientists in making novel discoveries**. Check out our recent research and open resources in this important area.

### DiscoveryWorld

*Automated Scientific Discovery Agents*

- [DiscoveryWorld: A Virtual Environment for Developing and Evaluating Automated Scientific Discovery Agents](https://allenai.github.io/discoveryworld/)
    - [arxiv](https://arxiv.org/abs/2406.06769)
    - [github](https://github.com/allenai/discoveryworld)
        - A virtual environment for developing and evaluating automated scientific discovery agents.
    - Automated scientific discovery promises to accelerate progress across scientific domains. However, developing and evaluating an **AI agent's capacity for end-to-end scientific reasoning** is challenging as running real-world experiments is often prohibitively expensive or infeasible. In this work we introduce DiscoveryWorld, the first **virtual environment** for developing and benchmarking an agent's ability to perform complete cycles **of novel scientific discovery**. DiscoveryWorld contains a variety of different challenges, covering topics as diverse as radioisotope dating, rocket science, and proteomics, to encourage **development of general discovery skills** rather than task-specific solutions. DiscoveryWorld itself is an inexpensive, **simulated, text-based environment** (with optional 2D visual overlay). It includes 120 different **challenge tasks**, spanning eight topics each with three **levels of difficulty** and several **parametric variations**. Each task requires an agent to 
        - **form hypotheses**, 
        - design and **run experiments**, 
        - **analyze results**, 
        - and **act on conclusions**.
    - DiscoveryWorld further provides three **automatic metrics for evaluating** performance, based on 
        - (a) **task completion**, 
        - (b) **task-relevant actions taken**, 
        - and (c) the **discovered** explanatory **knowledge**. 
    - We find that strong baseline agents, that perform well in prior published environments, struggle on most DiscoveryWorld tasks, suggesting that DiscoveryWorld captures some of the novel challenges of discovery, and thus that DiscoveryWorld may help **accelerate** near-term development and assessment of **scientific discovery competency in agents**.