---
layout: news
title: "Armour Research Reactor"
subtitle: A 1958 film about the first privately owned reactor dedicated to industrial research
author: nick
categories:
  - news
tags: videos
description: >
  The Armour Research Reactor was a small homogeneous-type nuclear reactor with
  uranyl sulfate fuel dissolved in water. It was installed at the Illinois
  Institute of Technology in Chicago. This film, recorded in February 1958 and
  digitized in 2025, shows the core construction, reactor controls, shield, and
  various applications of the reactor.
byline: true
image: /img/vids/armour/armour-04_boost_sm.jpg
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

{{ page.description }}

<figure>
<div class="ratio ratio-16x9"> 
{% include youtube.html id="2Y3JsQ3evcM" title="Armour Research Reactor film" %}
</div>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'Armour Research Reactor' | first %} 
<b>Catalog description: </b> {{ vid.description }} 
</blockquote>

This is film [88092]({% link old-videos.md
%}#armour-research-reactor) in our catalog.

A very special thanks to <a href="https://veriten.com">Veriten</a> for
sponsoring the digitization of this film.

The Armour Research Reactor (ARR)'s license application was submitted on Jan 7, 1955. The construction permit was issued on March 28, 1955, and the license was
issued on December 5, 1958 ([ref](https://www.osti.gov/servlets/purl/1364041)).
It went critical on June 24, 1956, and operated until 1958 at 10 kW before
uprating. It was shut down in 1967 and the license was terminated on April 28, 1972. The reactor was a L-54 model from Atomics International.

</div>
</div>

<div class="row">
<div class="col-md-12" markdown="1">

### Stills from the film

<div class="row">
 {% for index in (1..32) %} 
  <div class="col col-3 col-sm-4 col-xs-2 col-md-2 col-lg-2 col-xl-2 p-1">
    <figure class="figure p-0 m-0">
    {% capture ipath %}/img/vids/armour/armour-{{index| prepend: '00' | slice: -2, 2 }}.jpg{% endcapture %}
    {% capture smpath %}/img/vids/armour/armour-{{index | prepend: '00' | slice: -2, 2 }}_sm.jpg{% endcapture %}
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

## See Also

- [Armour Pamphlet](https://archive.org/details/armour-research-reactor-pamphlet) -- an amazing pamphlet describing
  the reactor
- [Armour Archive Clippings](https://archive.org/details/armour-research-reactor-iit-in-archives) -- more archival Armour info
- [Reiffel, The First Industrial Research Reactor Facility Design, Operational
  Experience, and Research
  Programs](https://babel.hathitrust.org/cgi/pt?id=coo.31924105615128&seq=1) -- a
  June 1958 paper from the 2nd UN International Conference on the Peaceful Uses of
  Atomic Energy (Atoms for Peace) that describes the reactor history and numerous
  challenges encountered after first turning on the reactor
- [Picture of sign announcing the reactor](https://repository.iit.edu/islandora/object/islandora%3A1004684)
- [Federal Register May 6, 1961 announcing license change to 75 kW](https://www.govinfo.gov/content/pkg/FR-1961-05-06/pdf/FR-1961-05-06.pdf) -- See page 19 of the PDF
- [Aqueous Homogeneous Research Reactors]({% link
  _news/2024-05-17-aqueous-homogeneous-reactors.html %}) -- An Atomics International pamphlet that also
  shows the ARR
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
