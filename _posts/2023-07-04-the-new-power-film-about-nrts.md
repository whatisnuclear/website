---
layout: news
title: >
  The New Power — The Story of the National Reactor Testing Station (1965 film)
author: nick
category: news
description: >
  We're excited to announce the recent digitization of this 1965 film
  summarizing the test reactors and other activities of the National Reactor
  Testing Station (NRTS), known today as the Idaho National Lab (INL).  This is
  the second of _four_ historical nuclear films in our latest batch of 4K
  digitizations from 16mm film at the National Archives.
byline: True
image: /img/nrts-thumb.jpg
tags: videos
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

We're excited to announce the recent digitization of this 1965 film summarizing the
test reactors and other activities of the National Reactor Testing Station
(NRTS), known today as the [Idaho National Lab
(INL)](https://en.wikipedia.org/wiki/Idaho_National_Laboratory).
This is the second of _four_ historical nuclear films in our
latest batch of 4K digitizations from 16mm film at the National Archives.

<figure>
<div class="ratio ratio-16x9">
{% include youtube.html id="LmdLgYqJLqs" title="The New Power" %}
</div>
<figcaption markdown="1">1965 US Atomic Energy Commission video about the National 
Reactor Testing Station (NRTS), known today as the Idaho National Lab (INL).
Digitized by us from the National Archives ([NAID
88194](https://catalog.archives.gov/id/88194))
</figcaption>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'THE NEW POWER' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

Thanks to Ross Koningstein for his help in making this happen.

</div></div>

<div class="row">
<div class="col-md-12" markdown="1">

## Some stills from the film

<div class="row">
 {% for index in (1..22) %} 
  <div class="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 p-0">
    <figure class="figure">
      <a
        href="/img/nrts-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/nrts-{{index | prepend: '00' | slice: -2, 2 }}.jpg"
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

## Read more about NRTS/INL

- [Proving the Principle -- A history of the INL](https://inl.gov/factsheet/proving-the-principle/)
- [About INL](https://inl.gov/about-inl/)

Contents of the film by timestamp include:

- 00:00 Intro and pioneering
- 01:14 Intro to the NRTS
- 03:18 Scarcity of fossil fuel
- 04:38 Basics of nuclear reactors
- 10:37 Different design options
- 11:56 Central facilities and contractors
- 11:56 Central facilities and contractors
- 12:40 Destructive testing and BORAX-1
- 13:50 BORAX-III and IV and V
- 14:50 SPERT (I, II, III, IV)
- 17:23 Influence on BWRs and PWRs
- 18:05 Military reactor intro
- 18:55 S1W Submarine prototype
- 19:30 A1W Large Ship Reactor
- 20:00 S5G Natural Circulation Reactor
- 20:12 Gas Cooled Reactor Experiment (GCRE)
- 20:53 Mobile Low Power Reactor (ML-1)
- 21:51 Organic Moderated Reactor Experiment (OMRE)
- 22:18 Materials Testing Reactor (MTR)
- 25:46 Advanced Reactivity Measurement Facility (ARMF)
- 26:25 Engineering Test Reactor (ETR)
- 26:54 Advanced Test Reactor (ATR)
- 29:03 Transient Reactor Test Facility (TREAT)
- 30:25 Test Area North (TAN) and TSF shops
- 31:40 Initial Engineering Test Facility (IET)
- 32:06 Testing of SNAP-10 space reactor
- 32:42 Safety Test Engineering Program (STEP)
- 32:52 Loss of Fluid Test (LOFT)
- 33:04 710 Research Reactor Experiment
- 33:20 Experimental Beryllium Oxide Reactor (EBOR)
- 33:44 Idaho Chemical Processing Plant (ICPP)
- 35:28 Liquid waste disposal
- 36:23 Waste Calcining Facility (WCF)
- 37:42 Experimental Breeder Reactors (EBR-I and EBR-II)
- 41:43 Thorium
- 42:15 Summary of challenges
- 42:46 Fuel Cycle Facility (FCF)
- 43:50 Bridge to fusion

_These are loaded into the youtube video as chapters for your convenience._

They apparently called it Prototype Prairie (2:05)

## See Also

- [Our Digital Reactor History Museum]({% link museum.md %})
- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there. If you're interested in helping
  to get some of these scanned, check out [our digitization
  GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
  and/or [contact us]({% link contact.md %})!
- [A tweet about this announcement](https://x.com/whatisnuclear/status/1676484526254739459)

</div></div>
