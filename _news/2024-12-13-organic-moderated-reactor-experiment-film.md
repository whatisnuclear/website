---
layout: news
title: "The Organic Moderated Reactor Experiment"
subtitle: A 1958 film about a weird reactor
author: nick
category: news
tags: videos
description: >
  A digitized 1958 film showing the Organic-moderated nuclear reactor experiment (OMRE).
  Organic cooled reactors can run with low pressure, and have low corrosion and activation.
  They were once expected to be a promising approach toward achieving economical nuclear power.
byline: true
image: /img/vids/omre/omre-10_card.jpg
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

In 1958 the Organic Moderated Reactor Experiment (OMRE) was put into operation
at the National Reactor Testing Station (now Idaho National Lab). Its objective
was to determine the feasibility of using hydrocarbons as a moderator,
reflector, and coolant in a nuclear power reactor. Such fluids promised a
low-pressure, non-corrosive, medium-temperature, material that did not become
significantly activated by neutrons. The unknowns it was testing were the
stability of suitable hydrocarbons under temperature and radiation environments
encountered in power reactors. We found this 1958 film in the National Archives
and got it digitized.

<figure>
<div class="ratio ratio-16x9">
{% include youtube.html id="nOkkXlqh9HM" title="OMRE film" %}
</div>
</figure>

You can also see the [same film with its original Spanish soundtrack
here.](https://www.youtube.com/watch?v=e5AOcPYXZyg)

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'Organic Moderated Reactor Experiment (OMRE)' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

This is film [88405]({% link old-videos.md %}#organic-moderated-reactor-experiment-omre) in our
catalog.

Thanks to Mikal Bøe for sponsoring the digitization of this film, and to Shirly Rodriguez Rojas
for translating the original soundtrack from Spanish to English and providing the English
soundtrack/narration.

</div>
</div>

<div class="row">
<div class="col-md-12" markdown="1">

<div class="row">
 {% for index in (1..29) %} 
  <div class="col col-3 col-sm-4 col-xs-2 col-md-2 col-lg-2 col-xl-2 p-0">
    <figure class="figure p-0 m-0">
      <a
        href="/img/vids/omre/omre-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/vids/omre/omre-{{index | prepend: '00' | slice: -2, 2 }}_sm.jpg"
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

## Additional OMRE Links

- [OMRE Wikipedia page](https://en.wikipedia.org/wiki/Organic_Moderated_Reactor_Experiment) — I wrote this entire page,
  including reference and images in celebration of this digitization.
- [OMRE OPERATING EXPERIENCE](https://archive.org/details/sim_nucleonics_1959-11_17_11/page/117/mode/1up)
- [Proceedings of the SRE-OMRE forum held at Los Angeles, California, November 8 and 9, 1956](https://catalog.hathitrust.org/Record/101701170)
- [Decontamination and decommissioning of the Organic Moderated Reactor Experiment facility (OMRE)](https://doi.org/10.2172/5080867)

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
