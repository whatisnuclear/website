---
layout: safety
title: The Sodium Reactor Experiment (SRE) fuel damage
description: >
   On July 26th, 1959, the SRE near L.A. shut down due to abnormal temperature
   readings. It was discovered that tetralin leak had caused coolant blockages
   and caused some fuel to thermally cycle enough to rupture the cladding.
date: 2022-09-27
byline: true
author: nick
image: /img/sre-fuel-damage-1_sm.jpg
---

<div class="row">
<div class="col-md-8" markdown="1">


# Background
<figure class="figure float-end w-50">
<a href="/img/sre-fuel-damage-1.jpg"><img class="figure-img img-fluid rounded"
src="/img/sre-fuel-damage-1_sm.jpg"  alt="A picture of a damaged nuclear fuel rod held by a manipulator from the sodium reactor experiment"/></a> 
<figcaption class="figure-caption">Damaged fuel from the Sodium Reactor Experiment (from [1])</figcaption>
</figure>

The Sodium Reactor Experiment was a small sodium-cooled graphite-moderated
reactor (SGR) that was built near Los Angeles at the Atomics International
Santa Susana Field Laboratory from 1957 to 1964 [2]. It was the prototype 
for [the larger SGR in Hallam, Nebraska](https://en.wikipedia.org/wiki/Hallam_Nuclear_Power_Facility).  SGRs attempt to use low-pressure high-temperature sodium
coolant to achieve high thermal efficiency, good low-pressure safety, and also
use a moderator to slow the neutrons down so that they can use low-enriched
or even natural uranium as fuel rather than higher enriched fuels typically
needed by [fast neutron reactors]({% link fast-reactor.md %}).

# What happened?

<figure class="figure float-end w-50">
<a href="/img/sre-fuel-damage-2.jpg"><img class="figure-img img-fluid rounded"
src="/img/sre-fuel-damage-2_sm.jpg"  alt="A closeup picture of a damaged nuclear fuel rod from the sodium reactor experiment"/></a> 
<figcaption class="figure-caption">Close-up of damaged fuel from the Sodium Reactor Experiment (from [1])</figcaption>
</figure>

Abnormal temperature readings were recorded in fuel channels during a 
low-power run of SRE. On July 26, 1959, the run was terminated to investigate. 
Inspections showed that 13 of the 43 fuel elements had substantial damage. 

It was determined that the tetralin service coolant had leaked into the 
primary sodium coolant. It leaked via a freeze seal on the main primary pump. 
A nitrogen purge was performed to clean out the tetralin and decomposition
products, but some of it remained in the system. 

When the next run started up, partial plugging of fuel channels occurred
starving the fuel assemblies of their cooling and causing them to go to high
temperature. Thermal cycling caused the fuel elements to cycle between uranium
alpha-beta phases and to generate low-temperature iron-uranium alloys. Cladding
tubes were ruptured due to the fuel expansion.


# Lessons

## Don't put tetralin in your sodium-cooled reactors

Due to the problematic reaction products between tetralin and sodium, NaK,
nitrogen gas, and kerosene replaced it as a service coolant. Tetralin
is no longer used in sodium-cooled systems.

## Monitor for fission product gasses during operation

Xenon-133 fission products were found in large quantities in the cover gas
above the core. Monitoring for this could have detected fuel failure earlier
and led to a faster response with less damage. Cover gas monitoring systems
are now typical in sodium-cooled reactors.

## Add flux/power deviation circuits

A flux/power deviation circuit was added to SRE that could monitor for large
mismatches between heat generation and heat removal, providing a signal to the 
plant protection system to shut down the reactor if a threshold is exceeded.


# Legacy

People in L.A. are still suing the company that bought the company that 
bought the company that ran this experiment. Additionally, after this
and Hallam's mediocre overall performance, the concept of graphite-moderated
sodium-cooled reactors fell out of favor, and is mostly forgotten today. 
But honestly it's a pretty good reactor concept. 



# References and additional reading

1. [SRE Fuel Element Damage Final Report 1961](https://babel.hathitrust.org/cgi/pt?id=mdp.39015095003268&view=1up&seq=1&skin=2021)
2. [Sodium Reactor Experiment](https://en.wikipedia.org/wiki/Sodium_Reactor_Experiment)
3. [Sodium Graphite
Reactors](https://babel.hathitrust.org/cgi/pt?id=mdp.39015003993881&view=1up&seq=7&skin=2021)
by Chauncey Starr, 1958

</div>
</div>