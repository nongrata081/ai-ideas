# Choosing 3d party open-source libraries

When choosing 3d party open-source libraries there certain considerations, that have to be taken into account, when making a decision, whether to use a certain OSS library / tool or not.

- Is it **future-proof**?
    - Is it going to be **maintained**? What is the probability of it? (Community-wide used tools are more likely to be maintained well compared to tools not adopted widely).
    - Does it have transparent **release schedule**?
        - Having a predictable release schedule for a tool enables users to plan anything related to tool versions updates beforehand
        - Examples:
            - [node.js release schedule](https://nodejs.org/en/about/previous-releases)
            - deno release [schedule page](https://docs.deno.com/runtime/contributing/release_schedule/), [milestones](https://github.com/denoland/deno/milestones), [schedule](https://docs.deno.com/runtime/fundamentals/stability_and_releases/), [releases](https://github.com/denoland/deno/releases)
    - Is its development direction intact for achieving user's intended **value**?
- Does it have correct and up-to-date **documentation**?
    - Users should be able to achieve fastest possible TTM with the tool instead of losing time on figuring out how to make it work.
- Does it have a **credible history**?
    - How many **releases**? How much **time under development** / **consumption**? (in **years**)
- How many **users** does it have?
    - The more users the better. Means it provides real value.
- etc.

> Failure to chose proper 3d party OSS tools can make the product unmantainable, which should be avoided.

> One possible way to approach things might be to develop and maintain certain OSS tools / libraries by the developer himself. This might be slow, but predictable and reliable. However, this makes sense if there is no other better way to achieve desired functionality (if 3d party OSS solution developers are not responsive, or desired features/fixes can't be implemented for whatever reasons).

---

## OSS best-practice

From [opentofu manifesto](https://opentofu.org/manifesto/)

- **Truly open source** - under a well-known and widely-accepted license that companies can trust, that won't suddenly change in the future, and isn't subject to the whims of a single vendor
- **Community-driven** - so that the community governs the project for the community, where pull requests are regularly reviewed and accepted on their merit
- **Impartial** - so that valuable features and fixes are accepted based on their value to the community, regardless of their impact on any particular vendor
- **Layered and modular** - with a programmer-friendly project structure to encourage building on top, enabling a new vibrant ecosystem of tools and integrations
- **Backwards-compatible** - so that the existing code can drive value for years to come