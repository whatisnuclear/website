---
layout: news
title: >
  BONUS for Puerto Rico: a digitized film from 1967
author: nick
category: news
description: >
  See the story of the BONUS nuclear reactor in Puerto Rico in full color.
byline: True
image: /img/bonus-03.jpg
tag: videos
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

Puerto Rico and the US Atomic Energy Commission built and operated an extremely
interesting nuclear reactor in the 1960s. It was intended to demonstrate an
ability to not only boil water to steam in the nuclear core, but also to
superheat the steam to higher temperature. Superheated dry steam would improve
the efficiency of power plant and allow use of cheaper off-the-shelf turbine
equipment, dramatically improving cost performance over non-superheat boiling
water reactors. A variety of small technical problems arose that proved
expensive to fix permanently, and so the project was eventually abandoned, and
today's BWRs sadly do not superheat their steam.

We just received in the mail a hard drive containing this documentary, digitized off
of 16mm film from the National Archives for (what we believe is) the first time
ever. Now, the story of BONUS, its construction, and initial operation, can
stream to you in living color wherever you are. Enjoy!

<figure>
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/yRYfUsY5W8o?si=8NOIyCMyoPpDCzIK" title="BONUS for Puerto Rico" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</div>
<figcaption markdown="1">1967 film entitled "BONUS for Puerto Rico", digitized
and uploaded by us, sourced from the US National Archives. 
</figcaption>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'BONUS for Puerto Rico' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

Thanks to Brett Rampal for funding the digitization of this film.

</div></div>

<div class="row">
<div class="col-md-12" markdown="1">

## Some stills from the film

<div class="row">
 {% for index in (0..24) %} 
  <div class="col col-xl-4 col-lg-6 col-md-8 col-sm-12 col-12 p-0">
    <figure class="figure">
      <a
        href="/img/bonus-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/bonus-{{index | prepend: '00' | slice: -2, 2 }}.jpg"
          class="img-fluid"
        />
      </a>
    </figure>
  </div>
 {% endfor %}
  </div>
</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">

## Read more about BONUS

- [Wikipedia entry](https://en.wikipedia.org/wiki/Boiling_Nuclear_Superheater_Reactor_Facility)
- [Nuclear Energy for Puerto Rico, ANS Nuclear Cafe](https://www.ans.org/news/article-1818/nuclear-energy-for-puerto-rico/)
- [Boiling Nuclear Superheater (BONUS) Power Station : final summary design report](https://babel.hathitrust.org/cgi/pt?id=mdp.39015095034941&view=1up&seq=1)
- [BONUS, Puerto Rico, Decommissioned Reactor Site Office of Legacy Management](https://www.energy.gov/lm/bonus-puerto-rico-decommissioned-reactor-site)
- [BOILING NUCLEAR SUPER-HEATER (BONUS) POWER STATION TECHNICAL SPECIFICATIONS](https://doi.org/10.2172/4768881)

Contents of the film by timestamp include:

- 00:00 Intro credits
- 01:12 Introduction
- 03:48 Clearing the site
- 04:41 Ground-breaking ceremony
- 06:37 Vessel fabrication
- 07:40 Animations of operating principles
- 09:16 Arrival of vessel in San Juan
- 11:07 Completion of containment shell and turbine
- 15:55 Repairs during construction
- 16:45 Installing control rods
- 17:44 Installing fuel assemblies
- 19:15 Initial criticality and operation
- 20:49 Summary

_These are loaded into the youtube video as chapters for your convenience._

</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">
## See Also

- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there. If you're interested in helping
  to get some of these scanned, check out [our digitization
  GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
  and/or [contact us]({% link contact.md %})!
- [Tweet announcement of this](https://twitter.com/whatisnuclear/status/1679261517571850240)

All our video digitization announcements:
{% include taglist.liquid tag="videos" %}

</div></div>

{% include lazyload.html %}
