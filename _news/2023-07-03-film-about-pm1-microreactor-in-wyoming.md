---
layout: news
title: >
  Just digitized: a 1962 film featuring the PM-1 radar-powering nuclear 
  microreactor in Wyoming
author: nick
category: news
description: >
  This reactor was manufactured in a factory, flown by C-130 to an airfield, and
  then trucked to the remote site near Sundance, WY as part of the Army Nuclear Power Program.
byline: True
image: /img/pm1-05.jpg
tag: videos
---

<div class="row">
<div class="col-md-8" markdown="1">

We're **extremely** excited to announce the first of _four_ historical nuclear
films in our latest batch of 4K digitizations from 16mm film at the National
Archives. It features the 1 MWe **PM-1 military microreactor** that the US Army
manufactured and tested in a factory, disassembled and air-lifted to the closest
airfield by C-130, trucked to site, re-assembled, and then powered a remote Cold
War radar station back in 1962. It was a PWR that could be operated by a crew of 2.

<figure>
<div class="ratio ratio-16x9">
<iframe
src="https://www.youtube.com/embed/T9S1P54n1FA" title="PM-1 Nuclear Power Plant" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</div>
<figcaption markdown="1">1962 US Atomic Energy Commission video about the PM-1
military microreactor, digitized by us from the National Archives ([NAID
88220](https://catalog.archives.gov/id/88220))
</figcaption>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'PM-1 Nuclear Power Plant' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

Thanks to Ross Koningstein for his help in making this happen.

</div></div>

<div class="row">
<div class="col-md-12" markdown="1">

## Some stills from the film

<div class="row">
 {% for index in (1..13) %} 
  <div class="col col-xl-4 col-lg-6 col-md-8 col-sm-12 col-12 p-0">
    <figure class="figure">
      <a
        href="/img/pm1-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/pm1-{{index | prepend: '00' | slice: -2, 2 }}.jpg"
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
## Read more about PM-1

- [PM-1 Nuclear Power Program First Quarterly Report (1960)](https://babel.hathitrust.org/cgi/pt?id=mdp.39015094994988&view=1up&seq=3)
- [PM-1 Critical Experiments and Zero Power Testing (1961)](https://babel.hathitrust.org/cgi/pt?id=mdp.39015094994996&view=1up&seq=3)
- [PM-1 Design Analysis](https://babel.hathitrust.org/cgi/pt?id=umn.31951d03914092j&view=1up&seq=37)
  (from Proceedings of the ANPP Reactor Analysis Seminar)
- [Description of PM-1 criticality in Annual report to Congress - U.S. Atomic Energy Commission. 1962.](https://babel.hathitrust.org/cgi/pt?id=mdp.39015001309411&view=1up&seq=363)
- [Power Reactors in Small Packages](https://babel.hathitrust.org/cgi/pt?id=uc1.a0003433729&view=1up&seq=1)

<figure class="figure">
  <a
    href="/img/anpp-map.jpg"
  >
    <img
      src="/img/anpp-map.jpg"
      class="img-fluid"
    />
  </a>
  <figcaption>There were 5 reactors total built in the Army Nuclear Power Program in remote locations.</figcaption>
</figure>

## See Also

- [Our Old Videos page]({% link old-videos.md %}) with a running list of the available and yet-to-be-scanned films
  out there. If you're interested in helping to get some of these scanned, [contact us]({% link contact.md %})!
- [A tweet about this announcement](https://twitter.com/whatisnuclear/status/1675950732175118336)

All our video digitization announcements:
{% include taglist.liquid tag="videos" %}

</div></div>
