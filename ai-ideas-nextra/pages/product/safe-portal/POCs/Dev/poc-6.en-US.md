# Dev POC #6

## 6.0. Try building a POC with deno-jsr-nx
- start using [deno@2](https://www.youtube.com/live/d35SlRgVxT8?si=7M14vmQKYFdzrgeV) for running cli commands in the Nx workspace
- try building and publishing a package for jsr
- try using deno for entire Nx workspace development workflow (can everything be done with deno instead of node?)

## 6.1. repo-context.json
For SEAI for operations with the repo's context and file structure and it's contents -  try building a "**repo-context.json**" file, similar to git-cliff's context.json:

- [context](https://git-cliff.org/docs/templating/context/)
- [print-context](https://git-cliff.org/docs/usage/print-context/)
- [load-context](https://git-cliff.org/docs/usage/load-context/)

that would represent everything about the repository and it's code.

## 6.2. repo-context.json + LM

Try to perform operations on `repo-context.json` with LM. See if it works, if it outputs the desired outcome. Consider training LM for it.

## 6.3. repo-context.json + LM + Strategic Themes

Try building a chain, that would:

- Generate **Strategic Themes**
- Generate an app file-structure (a proper **repo-context.json**, e.g. an **`nx next.js app`**) to help achieve it