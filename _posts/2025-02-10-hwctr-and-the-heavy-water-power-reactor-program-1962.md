---
layout: news
title: >
  The Heavy Water Components Test Reactor and the Heavy Water Power Reactor
  Program
subtitle: >
  A 1962 film about the US effort to develop natural-uranium heavy water power
  reactors
author: nick
categories:
  - news
tags: videos
description: >
  In 1956, the US Atomic Energy Commission commissioned a study on the
  development of heavy-water moderated natural uranium fueled power reactors
  with the objective of producing low-cost commercial electricity. Since these
  reactors do not require any enrichment, it was thought that they could be cost
  competitive with fossil fuel power plants. To obtain more credible data, the
  Heavy Water Components Test Reactor (HWCTR) was built. This film describes the
  Heavy Water program and the HWCTR.
byline: true
image: /img/vids/hwctr/hwctr-13_boost.jpg
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

{{ page.description }}

The Savannah River Site was already making 1000 tons of heavy water/year for
the weapons program and had dropped the cost from $70/lb to $28/lb. At these
rates, it was conceivable to make cheap power plants.

<figure>
<div class="ratio ratio-16x9"> 
{% include youtube.html id="7ImUX6oyVqY" title="HWCTR film" %}
</div>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'The HWCTR and the Heavy Water Power Reactor Program' | first %} 
<b>Catalog description: </b> {{ vid.description }} 
</blockquote>

This is film [88394]({% link old-videos.md
%}#the-hwctr-and-the-heavy-water-power-reactor-program) in our catalog.

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
 {% for index in (1..73) %} 
  <div class="col col-3 col-sm-4 col-xs-2 col-md-2 col-lg-2 col-xl-2 p-1">
    <figure class="figure p-0 m-0">
    {% capture ipath %}/img/vids/hwctr/hwctr-{{index| prepend: '00' | slice: -2, 2 }}.jpg{% endcapture %} 
    {% capture smpath %}/img/vids/hwctr/hwctr-{{index | prepend: '00' | slice: -2, 2 }}_sm.jpg{% endcapture %}
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

- Austin, W., and D. Brinkley. “HEAVY WATER COMPONENTS TEST REACTOR
  DECOMMISSIONING.” Savannah River Site (SRS), Aiken, SC (United States), October
  13, 2011.
  [https://www.osti.gov/biblio/1027493](https://www.osti.gov/biblio/1027493).
- “Heavy Water Components Test Reactor Decommissioning - Major Component
  Removal.” Savannah River Site (SRS), Aiken, SC (United States), May 5, 2010.
  [https://www.osti.gov/biblio/978453](https://www.osti.gov/biblio/978453).
- Collins, James A., and Maxwell Gensamer. “Heavy Water Components Test Reactor:
  Condition of Reactor Vessel (Final Report).” Savannah River Site (SRS), Aiken,
  SC (United States), October 1, 1961.
  [https://doi.org/10.2172/1891327](https://doi.org/10.2172/1891327).
- Guay, A. E. “Behavior of Metallic-Uranium Tubular Fuel Elements during High
  Temperature Irradiation.” Douglas United Nuclear, Inc., Richland, Wash. (USA),
  June 13, 1969.
  [https://www.osti.gov/biblio/5099594](https://www.osti.gov/biblio/5099594).
- “HEAVY-WATER-MODERATED POWER REACTORS ENGINEERING AND ECONOMIC EVALUATIONS.
  VOLUME I. SUMMARY REPORT.” Du Pont de Nemours (E.I.) & Co. Engineering Dept.,
  Winmington, Del., June 1, 1960.
  [https://doi.org/10.2172/4133696](https://doi.org/10.2172/4133696).
- “HEAVY-WATER-MODERATED POWER REACTORS ENGINEERING AND ECONOMIC EVALUATIONS.
  VOLUME II. ENGINEERING STUDIES AND TECHNICAL DATA.” Du Pont de Nemours (E.I.) &
  Co. Engineering Dept., Wilmington, Del., December 1, 1960.
  [https://doi.org/10.2172/4068768](https://doi.org/10.2172/4068768).
- Hood, R. R., and L. Isakoff. “Heavy Water Moderated Power Reactors. Progress
  Report for December 1959.” Du Pont de Nemours (E.I.) & Co. Atomic Energy Div.,
  Wilmington, DE (United States); Savannah River Site (SRS), Aiken, SC (United
  States). Savannah River National Lab. (SRNL), January 1, 1960.
  [https://doi.org/10.2172/4182427](https://doi.org/10.2172/4182427).
- Kiger, E. O. “OPERATIONAL SUMMARY OF THE HEAVY WATER COMPONENTS TEST REACTOR,
  OCTOBER 1961-DECEMBER 1964.” Du Pont de Nemours (E.I.) and Co., Aiken, S.C.
  Savannah River Lab., April 1, 1966.
  [https://doi.org/10.2172/4541128](https://doi.org/10.2172/4541128).
- “LARGE HEAVY-WATER-MODERATED POWER REACTORS. An Engineering Feasibility
  Study.” Du Pont de Nemours (E.I.); Co., Wilmington, Del., November 1, 1964.
  [https://doi.org/10.2172/4676628](https://doi.org/10.2172/4676628).
- Marshall, R. P. “ANALYSIS OF FAILED 17-4 PH BOLTS FROM THE HWCTR.” Du Pont de
  Nemours (E. I.) and Co., Aiken, S. C. Savannah River Lab., January 1, 1967.
  [https://doi.org/10.2172/4503601](https://doi.org/10.2172/4503601).
- McKibben, J. M. “CORROSION OF EQUIPMENT IN THE HEAVY WATER COMPONENTS TEST
  REACTOR.” Du Pont de Nemours (E.I.) and Co., Aiken, S.C. Savannah River Lab.,
  June 1, 1965.
  [https://doi.org/10.2172/4584728](https://doi.org/10.2172/4584728).
- Quigley, H. C. “IRRADIATION OF A U-2% Zr FUEL TUBE IN THE VBWR.” Du Pont de
  Nemours (E.I.) & Co., Wilmington, Del., April 1, 1962.
  [https://doi.org/10.2172/4818425](https://doi.org/10.2172/4818425).

Internal links:

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
