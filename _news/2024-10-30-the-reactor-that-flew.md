---
layout: news
title: ASTR Tower Experiment
subtitle: "The Reactor that Flew (1958 film)"
author: nick
category: news
tags: videos
description: >
  In January, 1946, the U.S. Air Force started working to build a long-range
  nuclear-powered bomber.  This page exhibits and discusses a historic film from
  1958 discussing a flying reactor and follow-up experiments where they lifted
  it up into the air on a huge tower in Oak Ridge.
byline: True
image: /img/vids/astr/astr-tower-17_sm.jpg
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

In January, 1946, the U.S. Air Force started working to build a
long-range nuclear-powered bomber. The program evolved and became multi-pronged
and truly massive.  At one point they actually loaded a nuclear reactor onto an
airplane, took off, and turned the reactor on in flight (it didn't propel the
plane though).  We recently learned of a historic film from 1958 discussing this
flying reactor and follow-up experiments where they lifted it up into the air on
a huge tower in Oak Ridge.  We found it, got it scanned, and have posted it
online here:

<figure>
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/rW7X0u_1268"
title="ASTR Tower Experiment: the reactor that flew" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</div>
</figure>


<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'ASTR TOWER EXPERIMENT' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

This is film [67389]({% link old-videos.md %}#astr-tower-experiment) in our
catalog.

Thanks to **Gil Brueckner** for making this happen!

</div>
</div>

<div class="row">
<div class="col-md-12" markdown="1">

<div class="row">
 {% for index in (1..24) %} 
  <div class="col col-3 col-sm-4 col-xs-2 col-md-2 col-lg-2 col-xl-2 p-0">
    <figure class="figure p-0 m-0">
      <a
        href="/img/vids/astr/astr-tower-{{index| prepend: '00' | slice: -2, 2 }}_4k.jpg"
      >
        <img
          src="/img/vids/astr/astr-tower-{{index | prepend: '00' | slice: -2, 2 }}_sm.jpg"
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

## More info about the ASTR

The Air Force Programs (NEPA and ANP) built reactors hooked to jet engines
and also built the first molten salt reactor: the Aircraft Reactor Experiment.
Besides reactor and heat transfer technology, radiation shielding questions
needed answers. Could pilots and crew in a nuclear-propelled aircraft be
appropriately shielded from the radiation?  What kind of radiation scattering
would occur off the air under and around the reactor? 

To answer these questions, the NB-36 program was created to operate a nuclear
reactor onboard a flying aircraft. The reactor would be at power, but would not
itself be propelling the aircraft.
On September 5, 1955 the first nuclear reactor to operate in the air went
critical in a modified Convair B-36 called the Nuclear Test Aircraft (NTA). 
The reactor put onboard was the Aircraft Shield Test Reactor (ASTR).

The NTA flew 47 flights over two years with the reactor on it. It 
took off from Carswell Airforce Base in Texas with the reactor shut down,
flew to the New Mexico desert, then powered up the reactor for testing,
then powered it back down and flew back to base. (ref: NX-2)
Remotely coupled hydraulic, mechanical, and electrical connections were tested
many times before the reactor was operated at high enough power to become 
overly radioactive.

As a shield test reactor, the reactor necessarily emitted lots of radiation,
to the point that personnel access to unload, maintain, and reload the reactor
into and out of the aircraft was prohibited. It was all done remotely, with
sophisticated reactor handling equipment.

For maintenance, the reactor was removed from the aircraft, placed into a large
pool of water, and then maintained with long tools. The reactor was placed into
a cradle that allowed it to be flipped over: forward side up for fuel
loading/unloading, and aft side up for instrumentation and control adjustments.

Great photos of the equipment trucks/etc. {% cite gantzNuclearFlightUnited1960 --locator 187 %}


## More info

The ASTR had the following characteristics {% cite nanceAircraftShieldTest1958 %}:

* Thermal power: 1000 kw
* Thermal flux: 6.3e12 avg, 1.2e13 peak
* Fuel: plat type U-Al with Al clad (MTR type)
* Isotope: 150 gm U-235 per element, 4800 gram U-235 total
* Shape: Right cylinder on side
* Control: 3 cadmium-lined steel rods inserted horizontally from aft
* Coolant: light water, 500 gpm
* Heat sink: Water (ground operations), Air (flight operations)

In 1959, the ASTR was redesignated as the Aerospace Systems Test Reactor and
upgraded from 1 to 3 MWt. In 1963 it was further modified and updated to 10 MW.
It was also once known as the Aerospace Shield Test Reactor. It was used to 
support other astronuclear-related work {% cite warinnerComparisonAerospaceSystems1983 %}. 

The reactor was permanently installed at the Nuclear Aerospace Research Facility
(NARF) at General Dynamics/Fort Worth, Texas, for shielding, cryogenic-heating,
and radiation-effects experiments.

The Tower Shielding Facility was a facility in Oak Ridge, TN where they hooked
operating nuclear reactors up to cables and lifted them high into the air to
measure various characteristics of elevated radiation sources and shielding 
{% cite muckenthalerTowerShieldingFacility1997 %}. It was built as part
of the ANP. 

As of 2024 the towers are still standing.

## Read more about the Aircraft Shield Test Reactor

* {% cite nanceAircraftShieldTest1958 %}
* [Temperature Coefficient of The ASTR (Nucleonics, Aug 1956)](https://archive.org/details/sim_nucleonics_1956-08_14_8/page/98/mode/2up)
* [Giving Wings to the Atom Aircraft Nuclear Propulsion (Unofficial archives)](https://leehite.org/anp/documents.htm)
* [Aircraft Nuclear Propulsion: An Annotated Bibliography](https://www.govinfo.gov/app/details/GOVPUB-D301-PURL-gpo125304)
* [Convair NB-36B Wikipedia](https://en.wikipedia.org/wiki/Convair_NB-36H)
* [3-D interactive view of TSF](https://www.google.com/maps/@35.8988825,-84.3024269,270a,35y,105.52h,36.08t/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D)
* [Nice pic of TSF](https://www.flickr.com/photos/departmentofenergy/13452138804)

{% bibliography --cited %}

## Help find these non-digitized references

* [EQUIPMENT MODIFICATIONS FOR THE ASTR-TSF EXPERIMENT](https://www.osti.gov/biblio/4310182)
* [CALIBRATION OF THE ASTR](https://www.osti.gov/biblio/4347121)
* [ENVIRONMENTAL RADIOACTIVITY IN THE NTA TEST AREA AND FLIGHT CORRIDOR](https://www.osti.gov/biblio/4346296)
* [OPERATION AND INSTRUCTION MANUAL FOR THE NTA NUCLEAR INSTRUMENT CONTROL CONSOLE](https://www.osti.gov/biblio/4375660)


## See Also

- [Our Digital Reactor History Museum]({% link museum.md %})
- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there. If you're interested in helping
  to get some of these scanned, check out [our digitization
  GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
  and/or [contact us]({% link contact.md %})!

</div>
</div>

