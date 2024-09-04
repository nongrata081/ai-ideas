# Best practices

## Activity logs

To address the concerns of multi-agent dependencies, developers can provide users with access to a log of agent actions. The actions can include the use of external tools and describe the external agents utilized to reach the goal. This transparency grants users insight into the iterative decision-making process, provides the opportunity to discover errors and builds trust.

## Interruption

Preventing AI agents from running for overly long periods of time is recommended. Particularly, in cases of unintended infinite feedback loops, changes in access to certain tools, or malfunctioning due to design flaws. One way to accomplish this is by implementing **interruptibility**.

Maintaining control of this involves allowing human users the **option to gracefully interrupt** a sequence of actions or the entire operation. Choosing if and when to interrupt an AI agent requires some thoughtfulness as some terminations can cause more harm than good. For instance, it may be safer to allow a faulty agent to continue assisting in a life-threatening emergency than to completely shut it down.

## Unique agent identifiers

To mitigate the risk of agentic systems being used for malicious use, unique identifiers can be used. If these identifiers were to be required for agents to access external systems, there would be greater ease in tracing the origin of the agent's developers, deployers and its user. This would be particularly helpful in case of any malicious use or unintended harm done by the agent. This level of accountability would provide a safer environment for these AI agents to operate.

## Human supervision

To assist in the learning process for AI agents, especially in their early stages in a new environment, it can be helpful to provide occasional human feedback. This allows the AI agent to compare its performance to the expected standard and adjust accordingly. This form of feedback is helpful in improving the agent’s adaptability to user preferences.

Apart from this, it is best practice to require human approval before an AI agent takes highly impactful actions. For instance, actions ranging from sending mass emails to financial trading should require human confirmation. Some level of human monitoring is recommended for such high-risk domains.