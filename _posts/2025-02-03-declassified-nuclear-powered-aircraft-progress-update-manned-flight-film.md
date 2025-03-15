---
layout: news
title: "Aircraft Nuclear Propulsion: Manned Aircraft Progress Report"
subtitle: A declassified film about nuclear powered flight from 1961
author: nick
categories:
  - news
tags: videos
description: >
  This film presents the US effort to build a nuclear-powered long-range bomber.
  The program history and evolution is discussed, from the 1955 weapons system
  125A to the 1956 re-evaluation and CAMAL concept. Work done between 1956 and
  1958 is highlighted, including a detailed technical summary of the GE direct
  cycle nuclear jet engines and the Pratt and Whitney indirect cycle liquid
  metal cooled system.  It discusses the HTRE tests performed in Idaho. GE XMA-1
  development is shown at Evandale, OH. The indirect cycle component development
  at CANEL in Connecticut are depicted.  Shielding and the Convair reactor
  flights are shown.

byline: true
image: /img/vids/anppr/anppr-16_boost.jpg
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

{{ page.description }}

<figure>
<div class="ratio ratio-16x9">
{% include youtube.html id="V-8q8INxQEY" title="Aircraft Nuclear Power progress report 1956-1958 film" %}
</div>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'Aircraft Nuclear Propulsion Program: Manned Aircraft Progress Report' | first %} 
<b>Catalog description: </b> {{ vid.description }} 
</blockquote>

This is film [62995]({% link old-videos.md
%}#aircraft-nuclear-propulsion-program-manned-aircraft-progress-report) in our catalog.

<div class="row align-items-center">
<div class="col-10">
A very special thanks to <a href="https://nucleartalentscout.com">Nuclear Talent
Scout</a> for sponsoring the digitization of this amazing film.
</div>
<div class="col-2">
<a href="https://nucleartalentscout.com"><img src="/img/vids/anppr/nts-logo.png"
class="img-fluid" alt="NTS logo"></a>
</div>
</div>

</div>
</div>

<div class="row">
<div class="col-md-12" markdown="1">

### Stills from the film

<div class="row">
 {% for index in (1..41) %} 
  <div class="col col-3 col-sm-4 col-xs-2 col-md-2 col-lg-2 col-xl-2 p-1">
    <figure class="figure p-0 m-0">
    {% capture ipath %}/img/vids/anppr/anppr-{{index| prepend: '00' | slice: -2, 2 }}.jpg{% endcapture %}
    {% capture smpath %}/img/vids/anppr/anppr-{{index | prepend: '00' | slice: -2, 2 }}_sm.jpg{% endcapture %}
    {% capture caption %}{{ ipath |remove_first: '/'| exif: 'image_description' }}{% endcapture %}
     <a
        href="{{ipath}}"
      >
        <img
          src="{{smpath}}"
          class="img-fluid"
          alt="{{caption}}"
        />
      </a>
      <caption>{{caption}}</caption>
    </figure>
  </div>
 {% endfor %}
  </div>
</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">

## References

You can read a lot more about the quest for nuclear-powered flight in [Nuclear
flight; the United States Air Force programs for atomic jets, missiles, and
rockets.](https://babel.hathitrust.org/cgi/pt?id=mdp.39015001555146&seq=7)

Amazing CANEL description in [PROPOSAL SECOND GENERATION PORTABLE NUCLEAR
POWERPLANT](https://digital.library.unt.edu/ark:/67531/metadc868990/m2/1/high_res_d/4061398.pdf).

## See Also

- [A related film about the reactor that flew]({% link _posts/2024-11-08-astr-tower-experiment.md %})
- [A X post about this](https://x.com/whatisnuclear/status/1886397754143867189)
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
