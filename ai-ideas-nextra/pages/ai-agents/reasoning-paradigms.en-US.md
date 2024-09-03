# Reasoning paradigms

There is not one standard architecture for building AI agents. Several paradigms exist for solving multi-step problems. 

## ReAct (Reasoning and Action) 

With this paradigm, we can instruct agents to **"think" and plan after each action** taken and with each tool response to **decide which tool to use** next. These **Think-Act-Observe** loops are used to solve problems **step by step** and **iteratively improve** upon responses.

Through the **prompt structure**, agents can be instructed to **reason slowly** and to **display each "thought"**. The agent's **verbal reasoning** gives insight into how responses are formulated. In this framework, agents continuously **update their context with new reasoning**. This can be interpreted as a form of [Chain-of-Thought](https://www.ibm.com/topics/chain-of-thoughts) prompting.

## ReWOO (Reasoning WithOut Observation)

The ReWOO method, unlike ReAct, **eliminates** the **dependence on tool outputs** for action planning. Instead, agents **plan upfront**. Redundant tool usage is avoided by **anticipating which tools to use** upon receiving the **initial prompt** from the user. This is desirable from a human-centered perspective since the **user can confirm the plan** before it is executed.

The ReWOO workflow is made up of three modules. In the **planning** module, the agent **anticipates** its **next steps** **given** a user's **prompt**. The next stage entails **collecting the outputs** produced by calling these **tools**. Lastly, the agent **pairs** the initial **plan with** the tool **outputs** to formulate a response. This **planning ahead** can greatly reduce token usage and computational complexity as well as the repercussions of intermediate tool failure.
