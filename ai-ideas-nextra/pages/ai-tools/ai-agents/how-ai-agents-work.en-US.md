# How AI agents work

At the core of AI agents are **large language models (LLMs)**. For this reason, AI agents are often referred to as **LLM agents**. Traditional **LLMs** produce their responses based on the data used to train them and **are bounded by knowledge and reasoning limitations**. In contrast, **agentic technology uses tool calling** on the backend to: 

- obtain up-to-date information, 
- ptimize workflow and 
- create subtasks autonomously 
- to **achieve complex goals**.

In this process, the autonomous agent learns to **adapt to user expectations** over time. The agent's ability to **store past interactions in memory** and **plan future actions** encourages a **personalized experience** and **comprehensive responses**. This **tool calling** can be achieved **without human intervention** and broadens the possibilities for **real-world applications** of these AI systems. The approach that AI agents take in achieving goals set by users is comprised of these three stages:

## Goal initialization and planning

Although AI **agents are autonomous in their decision-making** processes, they **require goals** and environments defined by humans. There are three main influences on autonomous agent behavior: 

- The team of developers that design and train the agentic AI system. 
- The team that deploys the agent and provides the user with access to it.
- The user that provides the AI agent with specific goals to accomplish and establishes available tools to use.

Given the user's goals and the agent’s available tools, the AI agent then performs **task decomposition** to improve performance. Essentially, the agent **creates a plan of specific tasks** and subtasks **to accomplish the complex goal**.

For simple tasks, planning is not a necessary step. Instead, an **agent can iteratively reflect on its responses and improve them** without planning its next steps.

## Reasoning using available tools

AI agents **base their actions on the information they perceive**. Often, AI agents **do not have the full knowledge** base needed for tackling all subtasks within a complex goal. To remedy this, AI agents **use their available tools**. These tools can include: 

- external data sets, 
- web searches, 
- APIs and even 
- other agents. 

After the missing **information is retrieved** from these tools, the **agent can update its knowledge** base. This means that each step of the way, the agent **reassesses its plan of action** and **self-corrects**.  

To help illustrate this process, imagine a user planning their vacation. The user tasks an AI agent with predicting which week in the next year would likely have the best weather for their surfing trip in Greece. Since the LLM model at the core of the agent does not specialize in weather patterns, the agent **gathers information from an external** database comprised of daily weather reports for Greece over the past several years.

Despite acquiring this new information, the agent still **cannot determine the optimal** weather conditions for surfing and so, the **next subtask** is created. For this subtask, the agent **communicates with an external agent** that specializes in surfing. Let’s say that in doing so, the agent learns that high tides and sunny weather with little to no rain provide the best surfing conditions.

The agent can now **combine the information** it has learned from its tools **to identify patterns**. It can predict which week next year in Greece will likely have high tides, sunny weather and a low chance of rain. These findings are then presented to the user. This **sharing of information between tools** is what allows AI agents to be **more general-purpose** than traditional AI models.

## Learning and reflection

AI agents use feedback mechanisms, such as other AI agents and human-in-the-loop (HITL), to **improve the accuracy** of their responses. Let’s return to our previous surfing example to highlight this. After the agent forms its response to the user, the agent **stores** the learned **information** along with the user’s feedback **to improve performance** and adjust to user **preferences** for future **goals**.

If **other agents** were used to reach the goal, their **feedback** may also be used. **Multi-agent feedback** can be especially useful in **minimizing the time** that human users spend **providing direction**. However, **users** can also provide **feedback** throughout the agent's **actions** and **internal reasoning** to better **align the results with the intended goal**.

**Feedback mechanisms** improve the AI agent's **reasoning and accuracy**, which is commonly referred to as **iterative refinement**. To **avoid repeating** the same **mistakes**, AI agents can also **store data** about **solutions** to previous **obstacles** in a **knowledge base**.