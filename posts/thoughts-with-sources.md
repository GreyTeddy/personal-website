---
title: 'Thoughts with Sources!'
date: '2026-07-08'
excerpt: 'Thoughts might be better than nothing?'
---

_2026-07-09_
- The easier the onboarding, the easier to contribute to something.
  - I personally can attest to the fact that it has been easy to start developing [locally on a Zig project on macos](https://github.com/ghostty-org/ghostty/blob/main/HACKING.md), given that it did pass [the README check](https://youtu.be/iqddnwKF8HQ?t=2866)
---
_Before 2026-07-09_
- Having [a bad coding standard is better than not having a coding standard at all](https://youtu.be/9yTjNGnw-4Q?t=91)...
  - but I'm probably going to be lazy and not write it down on the repo.
- [They only had one postgres _write_ instance on OpenAI not one postgres instance](https://openai.com/index/scaling-postgresql/)… I’m stupid
    - Had like 50 read replicas, which of course caused issues on WAL
    - … and they ended up with Azure CosmosDB, i.e. …sharding 🫠
- [Things should be simple, as simple as possible](https://www.youtube.com/watch?v=Ge3aKEmZcqY)… then again [they don’t build a resume do they](https://ieeexplore.ieee.org/document/9402191)…. [maybe they build a bank account](https://x.com/levelsio).
    - then again of course… [simple better than complex, complex better than complicated](https://peps.python.org/pep-0020/#the-zen-of-python)
- [A server should stop processing a request, if the user doesn’t want it anymore](https://sre.google/sre-book/addressing-cascading-failures/)…
    - with exceptions of course, can’t stop in a weird “in processing” state - we would need to handle that.
    - ... who is putting the effort to doing that? I have definitely seen websites do that... but I don't think that many stop the request server side.
- _(need source)_ _O(1)_ is faster than _O(n)_... if the constants that are simplified out are comparable... and THE _n_ IS LARGE ENOUGH
    - i.e. [checking assymptotically](https://www.cs.cornell.edu/courses/cs3110/2012sp/lectures/lec25-locality/lec25.html#:~:text=Asymptotically%2C%20it%20doesn%27t%20matter%2C%20because%20there%20is%20an%20upper%20bound%20on%20how%20long%20each%20step%20takes.)
    - Is bubble sort is faster than quick sort? [Sure](https://youtu.be/EmzdmqUWq3o?t=39)?
    - Just do a lookup on the array instead of having to create and then use an _"expensive"_ hashmap
      - [Have memory locality on your side, but you can also improve the hashmap implementation](https://www.cs.cornell.edu/courses/cs3110/2012sp/lectures/lec25-locality/lec25.html)
    - Again, as always... "it depends"
- _(need source)_ Internal or external tool means you should consider who supports it (and who owns it)… either way you end up paying for it somehow lool. [
 
- https://youtu.be/iqddnwKF8HQ?t=2866

_I should have my thoughts, but I should also remember why I had them, or more like… who/what inspired me to have the thought. for extra sources I guess an extra (yeap)/(yeah) hopefully will suffice._

ʕ •ᴥ•ʔ
