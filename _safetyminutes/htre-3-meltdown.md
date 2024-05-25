---
layout: safety
title: The HTRE-3 nuclear excursion and meltdown
description: Don't hook robots up to control rod drives without redundancy
date: 2022-09-28
byline: true
author: nick
image: /img/htre-3-melted-fuel_sm.jpg
---

<div class="row">
<div class="col-md-8" markdown="1">


<figure class="figure float-end w-25">

<a href="/img/htre-3.jpg">
<img class="figure-img img-fluid rounded" src="/img/htre-3.jpg"
alt="The Heat Transfer Reactor Experiment (HTRE) 3, an experimental nuclear reactor
built in Idaho to understand the prospects of nuclear-power flight."/> 
</a> 
<figcaption class="figure-caption">
The Heat Transfer Reactor Experiment (HTRE) 3, an experimental nuclear reactor
built in Idaho to understand the prospects of nuclear-power flight. [2]
</figcaption>
</figure>

# Background

In 1951 the United States military began a program to develop a nuclear-powered
aircraft with unlimited range. It was to have jet engines heated with an
extremely high-temperature nuclear reactor (as opposed to typical chemical 
combustion). The program was huge, spanning many institutions across the
country, including Oak Ridge National Lab (where they focused on fluid-fueled
reactors like the [Aircraft Reactor
Experiment](https://en.wikipedia.org/wiki/Aircraft_Reactor_Experiment)) and the
National Reactor Testing Station (NRTS, now called Idaho National Lab), where
air-cooled solid-fueled reactor experiments were built.

The solid-fueled, air-cooled, hydrided zirconium-moderated reactor experiments
in Idaho were called Heat Transfer Reactor Experiments (HTRE), and we ran three
of them total, HTRE-1, HTRE-2, and HTRE-3. HTRE-2 was a reconfigured version of
HTRE-1, and HTRE-3 was built separately. 



# What happened?
<figure class="figure float-end w-50">
<a href="/img/htre-excursion-trace.jpg">
<img class="figure-img img-fluid rounded" src="/img/htre-excursion-trace_sm.jpg"
alt="Log-flux, period, and linear-flux traces during the HTRE-3 nuclear excursion"/> 
</a> 
<figcaption class="figure-caption">
Log-flux, period, and linear-flux traces during the HTRE-3 nuclear excursion [1]
</figcaption>
</figure>

<figure class="figure float-end w-50">
<a href="/img/htre-3-melted-fuel.jpg">
<img class="figure-img img-fluid rounded" src="/img/htre-3-melted-fuel_sm.jpg"
alt="Melted fuel from the HTRE-3"/> 
</a> 
<figcaption class="figure-caption">
Melted fuel from the HTRE-3 [1]
</figcaption>
</figure>

On November 18, 1958, HTRE-3 suffered a nuclear power excursion and fuel
meltdown.  The automatic control system erroneously withdrew control rods to
cause the excursion.  The false demand that triggered this withdrawal was caused
by a less-than-actual indication of reactor power from a radiation detector that
was hooked to it.

The erroneous sensor reading was caused by an installation fault related to
the power supply of the ion chamber. Safety actions that should have stopped
the reactor did not occur, also because of errors in their installation.

Minor changes to the operating procedure and circuitry installation could have
prevented the event. 

The melting and collapse of fuel rings reduced reactivity, and a scram of
the safety system due to a high fuel element temperature indication.

All of the fuel elements experienced melting. The total energy release 
is estimated at about 770 MW-sec.




# Lessons

## Don't hook robots up to control rod withdrawal mechanisms without redundancy

Even though there was some redundancy in HTRE-3's control system, there
was a common cause power supply issue that prevented it from working. 

## Be careful when reusing control system circuitry from previous systems

The circuit error was related to a 1-megaohm resistor in a voltage-smoothing RC
circuit that limited current to 0.80 mA, whereas 0.96 mA was required to 
actuate the scram signal at 120% full power. The power supplies and filters
had been brought over from the previous HTRE-3 without appropriate adjustments

# Legacy

<figure class="figure float-end w-50">
<a href="/img/HTRE-2.jpg">
<img class="figure-img img-fluid rounded" src="/img/HTRE-2.jpg"
alt="The HTRE-2 sitting in the parking lot of the EBR-1 museum. The HTRE-3 can be partially seen behind it, on the left."/> 
</a> 
<figcaption class="figure-caption">
The HTRE-2 sitting in the parking lot of the EBR-1 museum in Idaho. The HTRE-3 can be partially seen behind it, on the left.
</figcaption>
</figure>

You can see the HTRE-2 and HTRE-3 sitting in the parking lot of the EBR-1 
museum, which is a fantastic museum if you're ever in the region.



# References and more info

1. [SUMMARY REPORT OF HTRE NO. 3 NUCLEAR EXCURSION](https://doi.org/10.2172/4643464)
2. [Comprehensive Technical Report, General Electric Direct-Air-Cycle Aircraft Nuclear Propulsion Program, Program Summary and References](https://www.osti.gov/biblio/1048124)


</div>
</div>