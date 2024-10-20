# Changelog Generation

To generate changelog with [git-cliff](https://git-cliff.org/) in the cli run:

```shell
npm run generate:changelog
```

This will generate the `CHANGELOG.md` in the root directory, by running an npm script configured in `package.json` in the root of the project:

```json
"generate:changelog": "./node_modules/.bin/git-cliff --config changelog-template.toml --output CHANGELOG.md"
```
