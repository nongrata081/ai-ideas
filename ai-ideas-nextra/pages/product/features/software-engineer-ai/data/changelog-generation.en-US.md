# Changelog generation for datasets

- ensure that dependencies (packages) used for changelog generation are gitignored, so that only actual dataset files get into the shared repository on hugging face (do I really need it? what if I leave those packages in place? can do that as well)

- Implement with git-cliff ([dspy changelog example](https://github.com/nongrata081/dspy/commit/7bb4a8f5a78e757be30ac1c16ddc321b2fbb8f75)) (for flexibility with changelog structure)
- try with github [generated release notes](https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes)? can we specify commit types and changelog structure with a template?