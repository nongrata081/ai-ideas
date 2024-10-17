# Data Persistence (Enterprise-helper)

- [data-persistence tools](/software-engineering/data-persistence)

## Local-first & online-ready (data-sync)

### Local-first

For data persistence approach, I think of **local first**, but **online-ready**. Which means any solution is great to be used locally only, but ideally it has to be easy to deploy it online and use as a shared solution with other people. In case of wasm ported in-browser DBs, how to address the issue of working with other people online and syncronizing the data of several people? So that they have same "picture" in the app they're using? Or just use the traditional server-hosted DBs? And reserve local and in-browser stuff only for those parts, that are intended for individual usage? 

e.g.: https://huggingface.co/datasets/google/frames-benchmark the wasm ported duckDB, and the possibility to query with SQL the data.

### Online-ready

...

---

Should I have a tool like [trilium-db-compare](https://github.com/TriliumNext/trilium-db-compare) ?