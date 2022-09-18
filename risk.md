---
layout: default
title: Nuclear Reactor Risk Assessment
category: physics
description: How safe is safe enough? Risk assessments of nuclear reactors
author: brianj
byline: true
---
<div class="row">
<div class="col-md-8" markdown="1">

<div class="float-end"><img class="rounded img-fluid" src="/img/bjohnson.jpg" style="max-width:200px;" alt="The author, Brian Johnson, is a PRA analyst heavily involved in innovative nuclear reactor design. " title="The author, Brian Johnson, is a PRA analyst heavily involved in innovative nuclear reactor design." /></div>
How safe is safe enough? This is a long standing question in the development of
nuclear reactors.  The defense-in-depth philosophy mandates safety systems that
are independent, diverse, and redundant.  When using this philosophy of design
it is hard to decide if two emergency core cooling systems are enough or if
there should be three or four or more. To make these decisions, nuclear reactor
designers use two methods. 

The first method, known as the deterministic method, uses postulated accidents
and the single failure criterion.  This means that designers would assume that
there was an accident, such as a loss of coolant, and a single failure of the
single most important component to respond to the event, such as the failure of
a single safety injection pump.  Nuclear reactors were, and still are, designed
such that given these circumstances and conservative calculation methods, the
core will not melt, and no radiation would be released.  After doing this
safety analysis to show that in a series of postulated accidents and single
failures there is no core melt, a reactor is deemed safe enough.  The problem
with this method is that multiple, more frequent events, are treated the same
as rare, catastrophic failures.  Additionally it gives no quantitative value to
the risk posed by nuclear plants. 

A second way to look at the problem is to use the probability of failure as a guide.  If this
probabilistic method is to be used, the best way to start answering the question of “How safe is
safe enough?” is to find out what risks people accept in their daily lives.

</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">
## How much risk is acceptable?
As a probabilistic safety goal, the NRC issued the Quantitative Health Objectives (QHO) such that
the risk from a nuclear power plant should constitute less than 1/1000<sup>th</sup> of the total
risk to those living near the power plant. This leads to the individual fatality goal of
5x10<sup>-7</sup> per year early fatality risk for those within one mile of the site boundary.  This
is 1/1000<sup>th</sup> of the accidental deaths in United States.  There is also a goal of less than
2x10<sup>-6</sup> latent cancer risk for all of those within ten miles of the site boundary, this is
1/1000<sup>th</sup> of all cancer deaths.

Due to the complexity of nuclear power plants and the rarity of failure, the risk is difficult to
quantify directly from experience.  While cars crash every day and statistics can be tallied, this
is not true with nuclear power plants.  To calculate the risk posed by nuclear reactors
Probabilistic Risk Assessment (PRA) has been developed.  There are four basic steps in PRA.

* Define End States
* Identify Initiating Events
* Develop Event and Fault Trees
* Quantify

The end states of most interest for nuclear reactors are core damage and radiation release.  Core
damage is an intermediate end state that is easier to calculate than radiation release.  It also
means that there is the economic loss of the reactor.  Radiation release is contingent on core
damage and failure of radiation containment.

The initiating events fall into two categories, external events such as fires, floods, and
earthquakes and internal events such as turbine trip, reactivity insertion, and loss of coolant.
Event and fault trees are tools that logically connect a sequence of basic events (such as trip
signals, valve operation, and availability of power) intended to respond to an initiating event with
end states.

The frequency of initiating events and probability of failure of basic events are input into the
event and fault trees.  The frequency of end states is then calculated. The basic idea is to be able
to use quantifiable failure probabilities, such as those of single pumps, valves, and power sources,
and multiply these probabilities so they represent the frequency with which the appropriate
combination of failures leads to core damage and radiation release.  The mechanistic models of the
reactor response to these failures are done using best estimate calculations that include
uncertainty.  As a result the quantitative results are typically presented using the mean and
several percentile estimates of the risk.

## Probabilistic Risk Assessment

To communicate the results of a PRA, complementary cumulative distribution functions (CCDFs) are
often presented.  These also allow for direct comparison to the QHOs.  Due to the difficulty of
conducting a PRA from core damage, to release, to dose to public there are three levels of PRA.

Level 1 ends at core damage.  Here thermal-hydraulic and reactor physics calculations are done for
each scenario with a significant frequency to determine if the core is damaged.

Level 2 ends at release with the source term defined.  The probability and amount of radioactive
materials released from containment given the sequences from the Level 1 PRA are calculated.

Level 3 ends at dose to public with the early and latent fatality risks explicitly calculated.  The
dose to the public from the source term from the Level 2 PRA is calculated using meteorological and
other radioactive material transport calculations.  The results of a Level 3 PRA can be directly
compared to the QHOs.

## Quality Factors and Absorbed Dose Equivalencies

<table class="table table-striped">
<tr><th>Industry</th><th>Fatality frequency</th></tr>
<tr><th>All industries </th> <td>7x10<sup>-5</sup></td> </tr> 
<tr><th>Coal Mining</th><td>24x10<sup>-5</sup></td></tr> 
<tr><th>Fire fighting</th><td>40x10<sup>-5</sup></td></tr>
<tr><th>Police</th><td>32x10<sup>-5</sup></td></tr>
<tr><th>US President</th><td>1,900x10<sup>-5</sup></td></tr>

<tr><th>Public</th><th ></th></tr>
<tr><th>Total</th><td>870x10<sup>-5</sup></td></tr>
<tr><th>Heart Disease</th><td>271x10<sup>-5</sup></td></tr>
<tr><th>All Cancers</th><td>200x10<sup>-5</sup></td></tr>
<tr><th>All Accidents</th><td>50x10<sup>-5</sup></td></tr>
<tr><th>Motor vehicles</th><td>14x10<sup>-5</sup></td></tr>
</table>

<p class="caption"><strong>Table 1.</strong> Occupational and Total Annual Fatality Risks. This
shows how many people die from various causes per year. Source: Wilson &amp; Crouch, Risk/Benefit
Analysis, Harvard University Press, 2001.</p>
<hr/>


Using the results of several PRAs, the NRC has developed subsidiary goals to the QHOs.  This allows
a designer to use a Level 1 or Level 2 PRA, which are less difficult to complete than a Level 3 PRA,
to show approximate compliance with the QHOs.  These subsidiary goals are a Core Damage Frequency
(CDF) below 10<sup>-4</sup> (Level 1) and a Large Early Release Frequency (LERF) of 10<sup>-5</sup>
(Level 2).  Typically CDF is considered a good surrogate for the latent cancer risk and LERF is
considered a good surrogate for the early fatality risk.

Another important, and currently more often used, output of a PRA is the risk importance of safety
systems.  Using the results of the PRA and the event and fault tree logic, the safety systems most
important to safety can be found.  The measures most typically used are Fussell-Vesely (FV) and Risk
Achievement Worth (RAW).  FV basically measures how often failure of a system is expected to be a
contributor to risk.  RAW measures how much higher the risk would be if a system was removed from
the design.  These importance measures are used to rank the risk importance of systems.

All of the reactors operating today used deterministic methods to determine whether they are safe
enough.  The QHOs and the subsidiary goals of CDF and LERF are not binding, but are a goal.  Even
so, these risk measures are often used to risk-inform regulation for in service inspection.
Furthermore, importance measures may also be used to determine if a system must be subject to
special treatment rules or may be exempt.

The mean risk of nuclear reactors operating in the United States typically meets the QHOs by an
order of magnitude.  CDF is typically estimated around 10<sup>-5</sup> per year and LERF is
typically estimated around 10<sup>-6</sup> per year. Advanced reactors promise an even higher degree
of safety as PRA has been available during the design phase to assist designers in finding the best
ways to reduce risk.  One major challenge presented to PRA by advanced designs is the use of passive
systems.  These systems rely on inherent forces such as natural circulation.  Failure modes for
passive systems are much different than for active systems.  For example, an active system will fail
when a pump fails to run or a valve fails to open and thus the safety function is not performed.  A
passive system will certainly operate, but due to the relatively weak driving forces and uncertainty
in load, the system may not have enough capacity to perform the safety function.

</div>
</div>

<hr/>

<div class="row">
<div class="col-md-8" markdown="1">
## External Links
<ul>
<li><a href="https://www.nrc.gov/reading-rm/doc-collections/commission/policy/60fr42622.pdf">NRC Policy Statement on the Use of PRA</a></li>
<li><a href="https://ocw.mit.edu/courses/engineering-systems-division/esd-72-engineering-risk-benefit-analysis-spring-2007/">Engineering Risk-Benefit Analysis at MIT OCW</a></li>
<li><a href="https://ocw.mit.edu/courses/nuclear-engineering/22-38-probability-and-its-applications-to-reliability-quality-control-and-risk-assessment-fall-2005/">Probability And Its Applications To Reliability, Quality Control, And Risk Assessment</a></li>
<li><a href="http://www.hup.harvard.edu/catalog.php?isbn=9780674005297">Wilson &amp; Crouch, Risk/Benefit Analysis, Harvard University Press, 2001.</a></li>
</ul>

## See Also
<ul>
<li><a href="{% link reactors.md %}">Nuclear Reactor</a></li>
<li><a href="{% link dose.md %}">Radioactive Dose</a></li>
<li><a href="{% link radioactivity.md %}">Radioactivity</a></li>
<li><a href="{% link fukushima.html %}">Fukushima</a></li>
</ul>
</div>
</div>


<hr/>

<div class="row">
<div class="col-md-8">
<h2>The next stop</h2>
<p>Go on to our <a href="{% link fuel-cycle.md %}">fuel cycle page</a> to read about what goes into making nuclear fuel.</p>
</div>
</div>

