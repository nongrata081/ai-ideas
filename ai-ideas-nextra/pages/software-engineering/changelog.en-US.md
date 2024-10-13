# Changelog

## Domain-specific changelog format

- [ ] Create own changelog format standard, like [keep a changelog](https://keepachangelog.com/en/1.1.0/) but based on my own preference and logic.
    - Create domain-specific changelog format standards (that represent data most important for each particular domain)
        - Language Models
        - Datasets
        - Frontend applications
        - Backend applications
        - etc.
    - > **Justification**. Types of changes differ based on what is being developed. Changes for a front-end app might be different from changes for a Back-end (web-server) app and might not reflect the important specifics of it. Thus we should have a **domain-specific changelog format**

### Changelog format: Front-end

...

### Changelog format: Back-end (web-server)

...

### Changelog format: Language Model

...

### ### Changelog format: Dataset

...

---

## Changelog generation tool & configuration

- Explicit template
- Generate changelog based on template (with easy template switching)

---

[github Automatically generated release notes](https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes)

## Changelog generation tools

### Python 

[git-cliff](https://github.com/orhun/git-cliff)

[git-journal](https://github.com/saschagrunert/git-journal) - The Git Commit Message and Changelog Generation Framework

[clog-cli](https://github.com/clog-tool/clog-cli) - Generate beautiful changelogs from your Git commit history

[relnotes](https://crates.io/crates/relnotes) - A tool to automatically generate release notes for your project.

[cocogitto](https://github.com/cocogitto/cocogitto) - A set of CLI tools for the conventional commit and semver specifications.

[cliff-jumper](https://github.com/favware/cliff-jumper) - A NodeJS CLI tool that combines git-cliff and conventional-recommended-bump to semantically bump a NodeJS package and generate a git-cliff powered changelog.

[release-plz](https://github.com/MarcoIeni/release-plz) - Release Rust packages from CI.

[git-changelog-command-line](https://github.com/tomasbjerre/git-changelog-command-line) - Generate changelog and determine next version with conventional commits.

[git-changelog](https://github.com/pawamoy/git-changelog): Automatic Changelog generator using Jinja2 templates.