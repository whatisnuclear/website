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
image: /img/pm1/pm1-05.jpg
tags: videos
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

We're **extremely** excited to announce the first of _four_ historical nuclear
films in our latest batch of 4K digitizations from 16mm film at the National
Archives. It features the 1 MWe **PM-1 military microreactor**, a small modular
reactor that the US Army manufactured and tested in a factory, disassembled into
16 modules, and air-lifted to the closest airfield by C-130, trucked to site,
re-assembled, and then powered a remote Cold War radar station back in 1962. It
had direct air cooling, meaning it did not need to be near any water supply. It
was designed to be disassembled, moved, and re-assembled as necessary. No field
welding was needed for re-assembly. It was a PWR that could be operated by a
crew of 2.

<figure>
<div class="ratio ratio-16x9">
{% include youtube.html id="T9S1P54n1FA" title="PM-1 Nuclear Power Plant" %}
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
        href="/img/pm1/pm1-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/pm1/pm1-{{index | prepend: '00' | slice: -2, 2 }}.jpg"
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
- [PM-1 NUCLEAR POWER PLANT PROGRAM. Quarterly Progress Report No. 2 for June 1 to August 31, 1959](https://www.osti.gov/biblio/4167059)
- [PM-1 NUCLEAR POWER PLANT PROGRAM 3RD QUARTERLY PROGRESS REPORT FOR SEPTEMBER 1 TO NOVEMBER 30, 1959](https://www.osti.gov/biblio/4150785)
- [PM-1 NUCLEAR POWER PLANT PROGRAM. Quarterly Progress Report No. 4 for December 1, 1959 to February 29, 1960](https://www.osti.gov/biblio/4159522)
- [PM-1 NUCLEAR POWER PLANT PROGRAM. Quarterly Progress Report No. 4 for December 1, 1959 to February 29, 1960](https://www.osti.gov/biblio/4159522)
- [PM-1 NUCLEAR POWER PLANT PROGRAM 5TH QUARTERLY PROGRESS REPORT FOR MARCH 1, 1960 TO MAY 31, 1960](https://www.osti.gov/biblio/4153065)
- [PM-1 NUCLEAR POWER PLANT PROGRAM. Sixth Quarterly Progress Report, June 1, 1960 to August 31, 1960](https://www.osti.gov/biblio/4796875)
- [PM-1 Critical Experiments and Zero Power Testing (1961)](https://babel.hathitrust.org/cgi/pt?id=mdp.39015094994996&view=1up&seq=3)
- [PM-1 Design Analysis](https://babel.hathitrust.org/cgi/pt?id=umn.31951d03914092j&view=1up&seq=37)
  (from Proceedings of the ANPP Reactor Analysis Seminar)
- [Description of PM-1 criticality in Annual report to Congress - U.S. Atomic Energy Commission. 1962.](https://babel.hathitrust.org/cgi/pt?id=mdp.39015001309411&view=1up&seq=363)
- [PM Research and Development Program: 1st Quarterly Progress Report, April 15, 1961 to June 30, 1961](https://digital.library.unt.edu/ark:/67531/metadc303768/)
- [PM RESEARCH AND DEVELOPMENT PROGRAM. Quarterly Progress Report No. 8, January 1, 1963 to March 31, 1963](https://www.osti.gov/biblio/4664260)
- [Power Reactors in Small Packages](https://babel.hathitrust.org/cgi/pt?id=uc1.a0003433729&view=1up&seq=1)
- [Record of Decision FORMER SUNDANCE AIR FORCE STATION, PM-1 REACTOR SITE OFF-SITE RELEASE (2011)](https://semspub.epa.gov/work/08/1216052.pdf)

As for what happened in the end, the [PM-1 Final Summary Report](/assets/PM-1%20
Final%20Summary%20Report.pdf) explains the situation clearly. This report contains
the lessons learned after operating the military microreactor for 4 years.
It highlights all the unplanned outages, maintenance costs, and lists the
performance of each individual system. It's highly readable, but to summarize
briefly:

- The reactor was difficult to perform maintenance on because of its compactness.
  The operators recommend designing the next microreactor with maintenance
  requirements satisfied first, and then compactness requirements
- The conventional steam plant cause roughly half of the unplanned outages
  and required a lot of maintenance, leading the authors to suggest that
  perhaps a non-steam approach is needed at this small scale (e.g. other
  energy conversion systems).
- The nuclear instrumentation system was oversensitive and overcomplicated
  for a field plant.
- The HVAC system and building design were wholly inadequate
- It was difficult to maintain qualified staff to operate and maintain the reactor
- The reactor was used as a training reactor for crews headed to Antarctica to
  operate the sister plant PM-3A, which reduced PM-1's overall performance.

The best zingers inside include:

<figure>
<blockquote class="blockquote text-start">
In an attempt to correct some of these original design oversights, several
modifications and additions have been made to the plant which have made it
virtually a stationary plant. Consequently, the Air Force now has a plant that
is neither portable nor easily maintainable or operable.
</blockquote>
 <figcaption class="blockquote-footer text-end">
  Introduction
</figcaption>
</figure>

<figure>
<blockquote class="blockquote text-start">
Factors that have resulted in this high cost of power production are
numerous; however, many of these costs could be reduced or brought into a
realistic value by equating a plant such as the PM-1 to a compatible mission.
The problems such as overmanning, excessive modification requirement, training
requirement due to the policy of giving maximum training to the majority of
the crew members, loss of personnel by premature transfers, operating the
plant below capacity, and excessive down time (especially during the first
2 years of operation for design improvement) have all added up to present a
dim economical picture of nuclear power production.
</blockquote>
 <figcaption class="blockquote-footer text-end">
  Summary
</figcaption>
</figure>

Note: I obtained [this report](https://apps.dtic.mil/sti/citations/AD0832917) through
a FOIA request 😎.

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

Contents of the film by timestamp include:

- 00:00 Intro
- 02:30 Package (module) descriptions
- 03:04 Primary system modules
- 03:23 Secondary system modules
- 03:41 Turbine/generator module
- 03:55 Switchgear module
- 04:43 Heat transfer equipment module
- 05:21 Maintenance module
- 05:50 Decontamination and water chemistry module
- 06:22 Animations of design
- 08:37 Fuel element fabrication
- 10:00 Core testing in the critical facility
- 12:20 Magnetic jack control rod drives
- 13:01 Flow testing in 1/4 scale model
- 13:27 Factory fab and initial assembly
- 13:51 Airlifting the reactor and flight testing
- 15:10 Field re-assembly
- 15:45 Startup testing and criticality
- 17:10 2-person operation team
- 17:40 Safety and reliability
- 19:05 Summary

_These are loaded into the youtube video as chapters for your convenience._

## See Also

- [Our Digital Reactor History Museum]({% link museum.md %})
- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there. If you're interested in helping
  to get some of these scanned, check out [our digitization
  GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
  and/or [contact us]({% link contact.md %})!
- [A tweet about this announcement](https://twitter.com/whatisnuclear/status/1675950732175118336)

</div></div>
