# Release Strategy

- [ ] Implement [continuous releasing](/software-engineering/continuous-releases)
- [ ] Implement [Release Distribution Options](#release-distribution-options)

## Release Distribution Options

For Enterprise Helper implement several release distribution options out of the box:

- **Build from source**
    - For cases when full control over the code is needed
        - e.g.: for usage with custom dependencies || a very specific version of dependency
- **Stable Releases**
    - For the most stability
- **Nightly Releases**
    - For cases, when you want to make the code available with the latest code changes (bugfixes, features) landed in main branch during previous night
    - > Implementation: At certain time (e.g. at 2 AM each day take the last green (successfuly passing CI) commit and release a package of the app on this commit)
- Binaries (?)
