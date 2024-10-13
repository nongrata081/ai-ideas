# Dev POC #3.1

- Assemble Enterprise-helper UI system with drawer navigation list with buttons for:
    - Enterprise helper
    - knowledge base
    - ticket system
    - software engineer AI
    - continuous training pipeline
    - DevOps platform
    - Status page system
    


- choose a tool for kb, for ticket system; think how it could be implemented technically 

- the main difficulty here is **continuous integration of open-source libraries** and their latest updates & functionality **into my app**. On one hand, I want to be able to **seamlessly incorporate their latest changes**. On the other, it **has to be a part of my app & its UI**. 

---

1) The easiest way that I can think of for now, would be to assemble all buttons of the navigation list in the drawer, get kb + ticket system + continuous training pipeline serving, and have those buttons linked with target=blank to native frontends of each corresponding tool. 

2) Ideally, it has all to be assembled into one UI, without opening external links and pointing to other frontends. 

3) Question: how do I continuously integrate latest releases of the consumed apps (kb, ts, ctp) seamlessly (without a lot of manual work) ? How do I at all do it, even if its manual? In order to test it, I'd have to assemble the system together, and try to maintain it with latest versions.

---

When AI gets precise and reliable enough, it will probably unlock new scenarios for open-source development, giving much more flexibility for goals such described above. E.g. flexibly consume latest open-source libraries without much manual hassle. With a possibility to seamlessly integrate those libs / apps entirely / partially into my own apps / libs.

This could be a thing to reflect on in general, as an idea for future.


---


## Status page system

- [cachet](https://cachethq.io/)
    - https://github.com/cachethq/cachet
    - [demo@v3](https://v3.cachethq.io/)