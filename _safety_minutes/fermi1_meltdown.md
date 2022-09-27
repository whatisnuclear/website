---
layout: default
title: The EBR-1 core melt
date: 2022-09-26
byline: true
author: nick
image: /img/ebr_1_melt.jpg
---

<div class="row">
<div class="col-md-8" markdown="1">
<figure class="figure float-end w-25">
<a href="/img/ebr_1_melt.jpg"><img class="figure-img img-fluid rounded"
src="/img/ebr_1_melt.jpg"  alt="Picture of the melted nuclear core of the Experimental Breeder Reactor-1"/></a> 
<figcaption class="figure-caption">The lower half of the melted EBR-1 core. (From [3])</figcaption>
</figure>

# What happened?

EBR-1 had accomplished its primary mission of proving that breeder reactors
could indeed breed more fissle material than they consume. Later, on November
29th, 1955, an experiment was performed to try to better understand some
unexpected reactivity feedback that had previously been observed at low
power/flow ratios. During the experiment, the reactor increased in power faster
than expected. A shutdown was ordered but the operator pressed the “slow
shutdown” button (which slowly moved the reflector) rather than the “fast
shutdown” button (which quickly dropped the reflector). The core melted,
radiation alarms went off, blockage was noted, and the building was evacuated.
Later, the core was rebuilt and the research into core mechanical feedback was
completed so the reactor could retire with honor.


# Lessons

## Don’t rely on human operators to actuate shutdown when it’s necessary

This event is an early example later, followed by more serious events like
#chernobyl, of disabling automatic shutdown systems and relying on humans during
a test. Though an automatic scram signal was still in place, it wasn’t set
conservatively enough to avoid core melt. A scram signal based on low reactor
period had been disabled.

## Don’t be surprised by sensors that are not working

Some thermocouples were registering coolant temperatures instead of fuel slug
temperatures. This should have been noticed earlier via some kind of redundancy
or other inference.

## Use auto-scaling instruments

It’s unfortunate that the power excursion went “off scale” for a while on the
instrumentation. If it could have auto-scaled and stayed on the paper, we would
have had better data from which we could understand core damage accidents better
at an earlier time.  

# Legacy

Besides the lessons above, the EBR-1 experiments led to some fundamental design
changes for fast reactor mechanical core restraint. In the end the determined
that it was a combination of two competing neutronic/mechanical feedbacks that
cause the situation:

1. The upper support plate that held the pins would heat up on the bottom more
#than the top, causing it to “cup” downward and spread the pins out, introducing
#negative reactivity with negative feedback.

2. If the fuel heated up before the upper support plate, their thermal expansion
#would cause them to squeeze into each other, introducing positive reactivity
#with positive feedback.

After EBR-1, reactor designs tended to leave their pins within assemblies
unrestrained at the top and pinned at the bottom so that neither of these
effects will happen.


# References and more info

1. [Brittan, R O. ANALYSIS OF THE EBR-I CORE MELTDOWN. United States: N. p., 1958. Web. doi:10.2172/4305038. (good summary)](https://www.osti.gov/biblio/4305038/)

2. [Ray Haroldsen, The Story of the BORAX Nuclear Reactor and the EBR-I Meltdown 1 (a good first-person telling of the story)](https://www.ne.anl.gov/pdfs/reactors/Story-of-BORAX-Reactor-by-Ray-Haroldsen-v2.pdf)

3. [Kittel, J.H., Novick, M., and Buchanan, R.F. THE EBR-I MELTDOWN–PHYSICAL AND METALLURGICAL CHANGES IN THE CORE. Final Report–Metallurgy Program 7.2.18. United States: N. p., 1957. Web. doi:10.2172/4322934. 4 (tons of excellent pictures of the melted fuel)](https://www.osti.gov/biblio/4322934-ebr-meltdown-physical-metallurgical-changes-core-final-report-metallurgy-program#)

</div>
</div>