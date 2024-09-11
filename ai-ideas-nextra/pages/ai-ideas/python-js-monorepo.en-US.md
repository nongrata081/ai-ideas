# NX with first-class support for python

It would be nice to have all the niceties that nx provides for JavaScript to also have for Python. To be able to have python code in the same repo as JS code. Also to generate python apps, have task executors, generators and everything.

Ideally, to have one monorepo (nx) to cover all needs and necessities for:

- javascript
    - front-end
    - backend
- python
    - language models
        - tooling + processes (what are those?)
    - datasets
        - tooling + processes (what are those?)

The apps of today are not just frontend and/or backend, but also include LLMs and their datasets, so it makes sense to bring it all together and host in one repo and be able to run all necessary operations and activities on those from one place.

Since nx already solves this for frontend and backend, it makes sense to broaden its functionality into supporting python and providing tooling for LMs and datasets.

As I try building apps out myself with Python (LMs) + Datasets + JS (frontend, backend) and gain knowledge about what exactly is needed for LMs and datasets toolkit-wise and monorepo-wise, I might come up with some suggestions for nx team (if they don't come up with those themselves before that).