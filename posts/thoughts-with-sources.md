---
title: 'Thoughts with Sources!'
date: '2026-07-03'
excerpt: 'Thoughts might be better than nothing?'
---

- _(need source)_ Internal or external tool means you should consider who supports it (and who owns it)… either way you end up paying for it somehow lool.
- [They only had one postgres write instance on OpenAI not one postgres instance](https://openai.com/index/scaling-postgresql/)… I’m stupid
    - Had like 50 read replicas, which of course caused issues on WAL
    - … and the ended up with Azure CosmosDB, i.e. …sharding 🫠
- [Things should be simple, as simple as possible](https://www.youtube.com/watch?v=Ge3aKEmZcqY)… then again [they don’t build a resume do they](https://ieeexplore.ieee.org/document/9402191)…. [maybe they build a bank account](https://x.com/levelsio).
    - then again of course… [simple better than complex, complex better than complicated](https://peps.python.org/pep-0020/#the-zen-of-python)
- [A server should stop processing a request, if the user doesn’t want it anymore](https://sre.google/sre-book/addressing-cascading-failures/)…
    - with exceptions of course, can’t stop in a weird “in processing” state - we would need to handle that.

_I should have my thoughts, but I should also remember why I had them, or more like… who/what inspired me to have the thought. for extra sources I guess an extra (yeap)/(yeah) hopefully will suffice._

ʕ •ᴥ•ʔ
