# Terminal access & automation

I can implement a terminal in the webapp. Hypothesis: can we fine-tune Llama3.2 model on a set of prompts and code examples with Nx to generate monorepos with proper cli commands and then generate apps, libs, components, configs (& all other entities) with cli commands, in order to get a reliable high-quality result (like an app with a properly working UI with MUI, next.js, etc. from one single prompt) ? **Xterm - open interpreter**?

- https://xtermjs.org/ / https://github.com/xtermjs/xterm.js
- https://hyper.is/
- Think - what can potentially be achieved with access from this webapp to terminal?
    - It is possible to run any cli utility - run commands, and get the outputs. I can think of it as having the terminal in the webapp itself (even though it is just a "proxy" that sends inputs and gets outputs from pty, but for the user experience it doesn't matter, that all this is being send and gotten via websockets. What matters is that the terminal functionality is available from a webapp. Which means I can perform actions like evaluate an LLM + plus get all functionality of the webapp around it, like render outputs of the evaluation, generate html reports(this is useful for the eval itself, not as for the webapp+terminal), what else?)
    - I can also probably add browsing capability to the app? 