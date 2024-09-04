# Agents vision

## High level definition

AI Agent is a computer program, that uses conversational AI techniques (natural language processing (NLP)) to understand user questions and automate responses to them.

AI Agent can have memory and reasoning, can use tools. Can achieve long-term goals, resolve complex tasks and plan ahead. Doesn't require continuous user input, can achieve complex goals autonomously. Can produce responses to prompts and learn to adapt to user expectations. Can provide personalized experience and comprehensive responses.

Can complete complex tasks by creating subtasks without human intervention and considering different plans. Can self-correct its plans and update them. Can assess its tools and use its available resources to fill in information gaps.

---

AI agent
- capability of autonomously performing **tasks**
- on behalf of a **user**
- or another **system**
- following a designed **workflow**
- utilizing **tools**

Functionalities:

- natural language processing
- decision-making
- problem-solving
- interacting with external environments
- executing actions

---

- solve complex tasks
- assist in a conversation
- use LLMs to comprehend
- respond to user inputs (step-by-step)
- determine when to call on external tools

---

## How agent should work

- should **use LLMs** to **comprehend** and **produce responses**
- should be able to **use tool calling** 
    - without human intervention
    - to:
        - **obtain** up-to-date **information**
        - optimize workflow
        - **create subtasks** autonomously
        - **achieve** complex **goals**
- should be able to **adapt to user expectations** over time
- should be able to **store past interactions in memory**
- should be able to **plan future actions**
- should be able to provide a **personalized experience**
- should be able to provide **comprehensive responses**

### Approaches in achieving goals

Should be able to:

- initialize goals and plan
    - implement task decomposition
    - create a plan of specific tasks and subtasks to accomplish the complex goal
    - iteratively reflect on its responses and improve them without planning its next steps

### Reasoning using available tools

Should be able to:

- base its actions on the information it perceives
- in case of lack of knowledge base needed for achieving a complex goal, should be able to use tools:
    - external data sets, DBs
    - web searches
    - APIs
    - other agents
- update its knowledge base after retrieving information from the tools
- at each step to reassess its plan of action and self-correct
- combine information from the tools to identify patterns
- share information between tools

### Learning and reflection

Should be able to:

- use feedback mechanisms to improve accuracy of responses
    - other AI agents
    - human in the loop
- after forming a response to the user, store the learned information with user's feedback
    - to improve performance
    - to adjust to user preferences for future goals
- use multi-agent feedback to minimize human's time for providing direction
- collect user's feedback throughout it's actions and internal reasoning
    - to better align the results with the intended goal
- perform iterative refinement (use feedback mechanisms to improve its reasoning and accuracy)
- store data about solutions to previous obstacles in a knowledge base
    - to avoid repeating same mistakes

### Agentic versus non-agentic AI

- doesn't require continuous user input to respond
- perform well on questions unique to the user and their data
- can learn from its mistakes if its responses are unsatisfactory
- can learn to adapt to user expectations over time
- can provide personalized experience 
- can provide comprehensive responses
- can complete complex tasks by creating subtasks
    - without human intervention
    - considering different plans
- can self-correct its plans and update plans as needed
- can assess its tools
- can use available tools to fill in information gaps

## Reasoning

Should be capable of ReAct and ReWOO.

- React. Should be able to:
    - "think" and plan after each action take
    - with each tool response to decide which tool to use next
    - solve problems step by step using Think-Act-Observe loops
    - iteratively improve upon responses
    - through the prompt structure should be able to reason slowly and to display each "thought"
    - through its verbal reasoning to give insight into how responses are formulated
    - continuously update its context with new reasoning
    - be capable of [Chain-Of-Thought](https://www.ibm.com/topics/chain-of-thoughts) prompting / reasoning
    - be capable of [Program-Of-Thought]() ?

- ReWoo. Should be able to:
    - eliminate the dependence on tool outputs for action planning, and plan upfront instead
    - avoid redundant tools usage by anticipating which tools to use upon receiving the initial prompt
    - provide a user an option to confirm the plan before it is executed
    - In the planning module, to anticipate its next steps given a user's prompt
    - in the next stage, collect the outputs produced by calling the tools
    - pair the initial plan with the tool outputs to formulate a response
    - greatly reduce token usage and computational complexity as well as the repercussions of intermediate tool failure with planning ahead

## Agent Type

Can be developed to have varying levels of capabilities. In order to limit unnecessary computational complexity, can be of following types:

- Simple reflex agent
    - grounds actions on current perception
    - does not hold any memory
    - doesn't interact with other agents if it is missing information
    - functions on a set of rules
    - is preprogrammed to perform actions that correspond to certain conditions being met
    - if encounters a situation that it is not prepared for, it cannot respond appropriately
    - is only effective in environments that are fully observable granting access to all necessary information

- Model-based reflex agent
    - uses current perception +
    - memory
    - to maintain an internal model of the world
    - updates the model of the world, as continues to receive new information
    - its actions depend on its:
        - model,
        - reflexes,
        - previous precepts and
        - current state
    - can store information in memory
    - can operate in environments that are partially observable and changing
    - is limited by its set of rules

- Goal-based agent
    - has an internal model of the world
    - has a goal / set of goals
    - can search for action sequences that reach its goal
    - can plan its actions before acting on them

- Utility-based agent
    - can select the sequence of actions that reach the goal and also maximize utility
    - calculates Utility with a utility function
        - assigns a utility value, a metric measuring the usefulness of an action to each scenario based on a set of fixed criteria, e.g.:
            - progression toward the goal
            - time requirements
            - computational complexity
    - can choose one optimal scenario to achieve the goal when multiple scenarios are available

- Learning agent
    - has the ability to learn by autonomously adding new experiences to its knowledge base
    - enhances its ability to operate in unfamiliar environments by learning
    - has 4 major internal features:
        - **Learning**: improves its knowledge by learning from the environment through its precepts and sensors
        - **Critic**: provides feedback on whether the quality of its responses meets the performance standard
        - **Performance**: selecting actions upon learning
        - **Problem generator**: creates various proposals for actions to be taken.
    - can continuously store user's activity for learning purposes
    - can track user activity and preferences in its memory
    - can use this information to recommend certain solutions to the user

## Risks and limitations

- **Multi-agent dependencies**
    - Risk of malfunction when implementing multi-agent frameworks for resolving complex tasks that require the knowledge of multiple AI agents
    - Shared pitfalls of multi-agent systems built on the same foundation models
- **Infinite feedback loops**
    - Risk of agents repeatedly calling the same tools, invoking infinite feedback loops, if agent is unable to create a comprehensive plan or reflect on its findings
        - use real-time human monitoring to avoid it
- **Computational complexity**
    - Building AI agent from scratch is time-consuming and can be very computationally expensive
    - Resources required for training a high-performance agent can be extensive
    - Depending on the complexity of the task, agents can take several days to complete tasks

## Best practices

- **Activity logs**
    - User should have an access to a log of agent's actions. Actions can include:
        - Use of external tools
        - external agents utilized to reach the goal
    - Provide insights into the iterative decision-making process
    - Provide the opportunity to discover errors
- **Interruptibility**
    - Possibility to prevent agent from running for overly long periods, in cases of:
        - unintended infinite feedback loops
        - changes in access to certain tools
        - malfunctioning due to design flaws
    - Allow human users the option to gracefully interrupt a sequence of actions or the entire operation
- **Unique agent identifiers**
    - in case if identifiers are required for agents to access external systems, it is easier to trace the origin of the agent's developers, deployers and its user
    - particularly helpful in case of any malicious use or unintended harm done by the agent
    - accountability for safer environment for AI agents
- **Human supervision**
    - possibility to provide occasional human feedback
    - allow the AI agent to compare its performance to the expected standard and adjust accordingly
    - enable improvement of the agent’s adaptability to user preferences
    - require human approval before an AI agent takes *highly impactful actions*