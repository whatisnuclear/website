---
layout: news
title: The Aircraft Reactor Experiment positive temperature coefficient of reactivity
author: nick
categories:
  - news
tags: reactors, history
description: >
  An interesting reactor physics and history lesson explaining the 
  origin of molten salt fluid fuel nuclear reactors
byline: true
image: /img/posts/are-rx-coeff.png
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

Originally, ORNL designed the Aircraft Reactor Experiment as a sodium-cooled,
beryllium oxide-moderated, solid UO₂ fueled reactor. At the very high power
densities and temperatures required to propel aircraft with nuclear heat,
however, they realized that there would be a serious positive temperature
reactivity effect caused by the Xenon-135 neutron capture cross section. To
operate in this condition, they'd need a fast-acting, super-reliable automated
control system.

<figure> 
<img class="img-fluid rounded" src="/img/posts/are-moderator-blocks.jpg"
alt="Stacked Beryllium oxide moderator blocks from the aircraft reactor
experiment" title="Stacked BeO moderator blocks from ARE" />
</figure>

Instead, they decided to switch the design to tubes of stagnant,
non-circulating fluoride molten salt fuel. The expansion of the fluid fuel
would overcome the effect from Xenon (not to mention Xenon bubbling to the
top), so the reactor would be stable at high power. The updated design
incorporated these tubes into the already-ordered BeO moderator blocks.

Further analysis suggested that stagnant salt would have a radial temperature
gradient of a few hundred degrees: the centerline temperature would be close to
the boiling point of the fuel! So they switched it over to the circulating fluid
fuel system that we now know as the world's first molten salt reactor. They did
keep the sodium cooling for the reflector.

So it was molten salt and sodium cooled, both of which transferred heat to helium,
which then went to water. Talk about advanced! It operated for 4 days and leaked
a lot of fission products, but overall we learned a ton and progressed our
ability to run interesting reactors.

I had to think a little about the xenon-related positive temperature coefficient
of reactivity thing for a sec. After plotting these thermal neutron energy
distributions vs. average temperature and the cross section, you can clearly see
the issue:

<figure> 
<img class="img-fluid rounded" src="/img/posts/are-rx-coeff.png" alt="plot of
neutron energy distributions vs. average temp and also the xenon cross section
dropping off hard right where the high temperature neutrons are" title="Plot of
neutrons and XS" />
</figure>

At high power density there is **a lot** of xenon during operation, and at high
temperature, the hot tail of the thermal neutrons starts falling off this
cliff-edge cross section. If temperature increases in that condition, more
neutrons move to the right, significantly reducing the number of them that get
absorbed in Xe, and therefore increasing overall reactivity. Crazy!

This effect can be seen in HTGRs where the temperature coefficient is less
negative when Xenon builds up, but it doesn't generally become net positive
and typical HTGR power densities.

## See Also

- [Bettis, E. S.; Schroeder, R. W.; Cristy, G. A.; Savage, H. W.; Affel, R. G.;
  Hemphill, L. F. (1957). "The Aircraft Reactor Experiment—Design and
  construction". Nuclear Science and Engineering. 2 (6): 804–825.
  ](https://doi.org/10.13182%2FNSE57-A35495)
- [ARE Wikipedia page](https://en.wikipedia.org/wiki/Aircraft_Reactor_Experiment) – it's good, I wrote a lot of it ;)
- [Temperature coefficients for the Ft. St. Vrain initial core](https://www.osti.gov/biblio/4433379)
- [X post on this topic](https://x.com/whatisnuclear/status/1900889336591053197)

</div>
</div>
