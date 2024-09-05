# AI Techstack planner

- Given description of a project, define an optimal techstack for it.
- Research the web
    - Search engines
    - Research Papers
    - Open Source Repositories
        - Website pages
        - Documentation
        - Implementation examples (code)
    - Articles
    - Youtube videos
- Suggest different options with justifications and differences.
    - first stage, text-only
    - second stage, implement in code
        - with all best practices
        - repo scaffolding & set-up
            - monorepos
            - release process (document what & how)
                - make initial release
            - linting, testing, etc.
            - commitizen & changelogs, conventional commits, etc.
        - etc.


Use choosing tools and techstack (crewAI, langchain, local LLMs, etc.) as an example and a starting point. Train on the current repository (part relevant to techstack defining), including PDF description of tools, comparative analysis, etc.

---

Take as example thoughts about using Vercel AI SDK for multi-agent workflow dev.

1. Vercel has easy deployment to prod of frontend apps with next
2. It has also Vercel AI SDK, which based on releases (and other factors) signals about an intent of the Vercel team to develop long-term a solution for AI
3. It has a lot of out of the box niceties for next.js with AI
4. But if compared to Langchain, has much less capabilities (incomparably)
5. Which drives to a question - should this AI SDK be used, and if yes, then for what exactly? And for what not? For which features it would be optimal? Maybe use it partially? With a possibility to switch to it in the future? Or not use it at all?
6. For what to use Langchain? 
7. Given that there are models available on Groq, building some POCs for free with Groq could be fast, easy and free. So should I even start building with Vercel AI SDK + Groq? Or use Ollama + free local model? If yes, which one? What does my hardware allow in this sense?


Every step in this overall reasoning process should be unfolded and detailed as much as possible, so that best possible decisions can be made. Like with AI Vercel SDK, if the team is building the product, who does it consist of, what are their plans, experience, etc. What is the team dynamic, news, that signal for or against a hypothesis that they'll be doing it further or not?

It makes sense for all tech service providers to come up with a standard for sharing this valuable data with the world, so that AI can make most value out of their products and also promote it's usage.

Also makes sense to have a way for the community to contribute examples (by connecting their GitHub repo) to gather insights. (By default entity, that has access to all this data has better chances for such training). But could also be a community opt-in effort (?)