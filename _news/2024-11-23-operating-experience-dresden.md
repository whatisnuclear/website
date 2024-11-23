---
layout: news
title: "Film digitization announcement: Operating Experience, Dresden"
subtitle: A 1964 film about an early BWR
author: nick
category: news
tags: videos
description: >
  A recently-digitized film showing information about one of the first boiling water nuclear reactors.
byline: true
image: /img/vids/dresden/dresden-02.jpg
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

Announcing another digitized film, this time on the operating experience of
Dresden, the first commercially financed BWR. This reactor was a very important
step in the commercialization of BWRs, as GE put in a lot of their own money to
get it built, at considerable risk.

<figure>
<div class="ratio ratio-16x9">
<iframe 
src="https://www.youtube.com/embed/ivFiqkon_WY?si=PceNIbQtdVJCsGNU"
title="Dresden film" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'Operating Experience, Dresden' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

This is film [88206]({% link old-videos.md %}#operating-experience-dresden) in our
catalog.

This digitization was sponsored by an anonymous donor.

</div>
</div>

<div class="row">
<div class="col-md-12" markdown="1">

<div class="row">
 {% for index in (1..20) %} 
  <div class="col col-3 col-sm-4 col-xs-2 col-md-2 col-lg-2 col-xl-2 p-0">
    <figure class="figure p-0 m-0">
      <a
        href="/img/vids/dresden/dresden-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/vids/dresden/dresden-{{index | prepend: '00' | slice: -2, 2 }}_sm.jpg"
          class="img-fluid p-0"
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

## Additional Dresden Links

- [1959 AEC Annual Reports](https://babel.hathitrust.org/cgi/pt?id=mdp.39015001309403&view=1up&seq=32) — lots of good info on status of PDRP and Dresden and BWRs and stuff. 1700 pages.
- [Dresden Atomic Power Station Construction Video (1958)](https://www.youtube.com/watch?v=02wIGsI2P9Y)
- [Dresden BWR early in BWR development history ](https://babel.hathitrust.org/cgi/pt?id=umn.31951d02097618f&view=1up&seq=179)
- [Dresden Wikipedia page](https://en.wikipedia.org/wiki/Dresden_Generating_Station)

## See Also

- [Our Digital Reactor History Museum]({% link museum.md %})
- [Our Reactor Development History Page]({% link reactor-history.md %})
- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there.

If you're interested in helping to get some of these scanned, check out [our
digitization
GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
and/or [contact us]({% link contact.md %})!

</div>
</div>
