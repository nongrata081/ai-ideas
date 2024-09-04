# Risks and limitations

## Multi-agent dependencies

Certain complex tasks require the knowledge of multiple AI agents. When implementing these multi-agent frameworks, there is a risk of malfunction. Multi-agent systems built on the same [foundation models](https://research.ibm.com/blog/what-are-foundation-models) may experience shared pitfalls. Such weaknesses could cause a system-wide failure of all involved agents or expose vulnerability to adverse attacks. This highlights the importance of data governance in building foundation models and thorough training and testing processes.

## Infinite feedback loops

The convenience of the hands-off reasoning for human users using AI agents also comes with its risks. Agents that are unable to create a comprehensive plan or reflect on their findings, may find themselves repeatedly calling the same tools, invoking infinite feedback loops. To avoid these redundancies, some level of real-time human monitoring may be used.

## Computational complexity

Building AI agents from scratch is both time-consuming and can also be very computationally expensive. The resources required for training a high-performance agent can be extensive. Additionally, depending on the complexity of the task, agents can take several days to complete tasks.