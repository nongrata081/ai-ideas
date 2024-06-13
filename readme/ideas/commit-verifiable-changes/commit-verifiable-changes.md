# Commit verifiable changes

In tools like Pythagora, the mechanics of using the app implies that the user of the app is making a prompt, Pythagora executes it and then the user at some point has to verify the result, if it works as expected or not.

- Should we have a schematics for any type of generated file (be it configuration or code) to have a possibility of locally validating it?

- Should Pythagora commit the code at each step after its verification (by user) ?

---

Currently, all files with their contents are generated consequentially, one after another, which of course makes the entire process of generating the app slow. It could be made much faster if all files are generated in parallel, so that the user doesn't have to wait and stare at the screen until the generation is done.

---

## Two prompting strategies

- Huge prompts for the entire app (with as much details as possble)
  - Should be made much faster by parallelizing the scaffolding of the apps and generating the code, entire i/o
  - Could be done much more reliably if each scaffolded / generated entity is verified against a standard schema (for a set of files and their contents), excluding the necessity for the user to verify each step.
- Small prompts, very narrow (with as much details as possble), to implement a separate [scaffolding | feature | bugfix | etc.]
  - This approach has strong strengths because it is much easier for a developer to test and verify the result of a much smaller interation in app development, compared to big ones (don't make huge PRs).
  - On the other hand, it makes the process much slower (even though, much more qualitative).

## Exclude the human from the loop

Having to verify each step after it's completion seems to slow down the process significantly. Now it is done due to necessity to:

- make human interventions whenever needed (like running command in a cli, etc.)
- verify results of
  - the entire prompt
  - a step in the prompt

Ideally, there should be no need to verify the results of the prompt by human, all verifications, tests and commands for execution should be done and held automatically, by the tools itself, and should be done fast.

## Combining apps

Combination of Pythagora, Open Interpreter and Nextra / Nx.

- Pythagora & OI for running commands (no need for human intervention)
- Pythagora & Nextra (or Nx) for reliable generation of apps with natural language end-to-end
