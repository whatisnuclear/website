---
layout: news
title: >
  1961 film, 'Remote Repair and Modification of the HRE-2 Core Vessel' digitized
author: nick
category: news
description: >
  A 1961 film detailing a major repair of the Homogeneous Reactor Experiment-2
  (HRE-2), a fluid-fueled aqueous homogeneous reactor at the Oak Ridge National
  Lab in Tennessee This reactor was an early predecessor to molten salt reactors.
byline: True
image: /img/hre-04.jpg
tags: videos
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

We're **super** excited to announce the recent digitization of a 1961 film
detailing a major repair of the **Homogeneous Reactor Experiment-2 (HRE-2)**, a
fluid-fueled aqueous homogeneous reactor at the Oak Ridge National Lab in
Tennessee This reactor was an early predecessor to [molten salt reactors]({%
link msr.md %}). This is the third of four historical nuclear films in our
latest batch of 4K digitizations from 16mm film at the National Archives.

HRE-2 developed a hole that leaked fluid fuel from the core region into the
heavy water blanket region. They adjusted procedures and operated in this
condition for a while. Later, it developed a second hole and they decided to
repair it. This film shows highly specialized tools and equipment allowing them
to diagnose and repair the holes remotely. Inside the core the radiation dose
rate was a nearly-unbelievable 100,000 R/hr.

I read the story of the HRE-2 vessel leak many years ago in [Alvin Weinberg's
autobiography]({% link weinberg.md %}) (pg 124), so when I learned that there
was an old video describing its repair, I knew it had to be digitized. This is
an extremely rare film that probably hasn't been viewed by hardly anyone since
the 1960s... until today!

<figure>
<div class="ratio ratio-16x9">
<iframe
src="https://www.youtube.com/embed/Dc2VZav17Ag" title="Remote Repair and Modification of the HRE-2 Core Vessel" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</div>
<figcaption markdown="1">1961 US Atomic Energy Commission video entitled "Remote
Repair and Modification of the HRE-2 Core Vessel" showing the repair of the
HRE-2 core vessel after it got two holes in it, digitized by us from the
National Archives ([NAID 88244](https://catalog.archives.gov/id/88244))
</figcaption>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'REMOTE REPAIR AND MODIFICATION OF THE HRE-2 CORE VESSEL' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

Thanks to Ross Koningstein for his help in making this happen.

</div></div>

<div class="row">
<div class="col-md-12" markdown="1">

## Some stills from the film

<div class="row">
 {% for index in (0..11) %} 
  <div class="col col-xl-4 col-lg-6 col-md-8 col-sm-12 col-12 p-0">
    <figure class="figure">
      <a
        href="/img/hre-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/hre-{{index | prepend: '00' | slice: -2, 2 }}.jpg"
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
## Read more about HRE-2

- [INSPECTION AND MAINTENANCE EXPERIENCE WITH HRE-2](https://www.osti.gov/biblio/4185668)
- [Some more references](https://www.google.com/books/edition/Nuclear_Safety/Lc9eg1BKlI0C?hl=en&gbpv=1&dq=claiborne+%22leak+in+the+homogeneous+reactor+test+core+tank%22&pg=RA6-PA115&printsec=frontcover)

Contents of the film by timestamp include:

- 00:00 Intro
- 01:14 Description of HRE-2 systems
- 03:09 Description of core vessel and first hole
- 04:22 Remote viewing and diagnostics
- 05:02 This is the hole
- 05:18 Full-scale mockup flow tests
- 07:14 Repair and modification plans
- 08:17 Access options and hazards
- 09:10 Development and testing of repair tools
- 10:59 Blanket viewing device
- 11:34 Articulated TV camera
- 12:23 Underwater cutting of diffuser plates
- 14:48 Cleaning tools
- 15:21 Thermoplastic hole impression device
- 16:30 Specimen removal saw
- 17:55 Patch placement tool and patching
- 19:23 Upper hole patch with dissolvable head
- 20:06 Tool contamination precautions
- 20:35 The actual repair
- 21:28 Resuming operation at low power

_These are loaded into the youtube video as chapters for your convenience._

## See Also

- [Our Digital Reactor History Museum]({% link museum.md %})
- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there. If you're interested in helping
  to get some of these scanned, check out [our digitization
  GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
  and/or [contact us]({% link contact.md %})!
- [Tweet announcement of this](https://twitter.com/whatisnuclear/status/1676807927225806849)

</div></div>
