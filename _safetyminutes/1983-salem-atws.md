---
layout: slides
title: The 1983 Salem ATWS Event
description: Reliable automatic scram is important
date: 2024-04-13
byline: true
author: nick
image: /img/db-50-circuit-breaker-salem.jpg
---

<section>
  <h2 id="pres-title">{{page.title}}</h2>
  <img src="{% link {{page.image}} %}" class="img-fluid w-25" />
  <p id="event-c" class="frontmatter small">Delaware Bay, New Jersey<span id="event"></span></p>
  <p class="frontmatter small"><span id="date">February 22-25, 1983</span></p>
  <p class="attribution">
    A safety minute from 
    <a href="{% link safety-minutes.md %}">whatisnuclear.com</a>
  </p>
</section>

<section markdown="1">
<h2>What happened</h2>

- Salem 1 was at 12% thermal power and rising after a refueling outage
- At 12:21 am Feb 25, 1983, low-low water level in 1 steam generator initiated a
  reactor trip signal in the reactor protection system
- Both redundant reactor trip breakers failed to open!
- Operators manually initiated a trip 25 seconds later from the control room
- Investigators discovered that the same event had occurred on Feb 22nd as well,
  without operators knowing the breakers had failed.

**This was the first actual Anticipated Transient Without Scram (ATWS) event in
\*the commercial fleet, something that had
been considered a possibility for at least 10 years.**
{% cite hasksinReactorSafetyCourse1994 %}

</section>

<section markdown="1">
<h2>Investigation and root cause</h2>

- Both breakers failed due to mechanical binding in under-voltage trip mechanism
- Excessive wear from improper maintenance
- Inadequate attention to the importance of vendor-supplied information
- Absence of adequate preventive maintenance program
- Inadequate supply, control, and verification of information by the vendor

{% cite thompsonSignificantOperationalExperience2016 %}

</section>

<section markdown="1">
<h2>Regulatory reactions</h2>

- NRC did not permit Salem plants to restart until technical and management
  corrective actions were addressed
- NRC issued Bulletin 83-01 {% cite deyoungBulletin8301Failure1983 %}
- Fact finding task force sent out to investigate {% cite NRCFactFindingTask1983 %}
- NRC prepared two-volume NUREG-1000 summarizing the event
- NRC imposed a civil penalty of $850,000
- Previously identified problems at Salem and their failure to recognize the
  ATWS event on Feb 22 were the major violations

{% cite hasksinReactorSafetyCourse1994 %}

</section>

<section markdown="1">
<h2>Regulatory impact</h2>

- ATWS rule proposed {% cite nrcReductionRiskAnticipated1984 %}
- ATWS rule adopted as 10 CFR 50.62 {% cite 10CFR5062Requirements %}
- Industry required to establish formal vendor interface programs
- PWRs required to have diverse equipment to initiate trips (AMSAC)
- BWRs required to have diverse recirc pump trip, alternate rod insertion
  circuitry, or install high capacity standby liquid control systems.

{% cite thompsonSignificantOperationalExperience2016 %}

</section>

<section>
<h3 id="references">References</h3>
{% bibliography --cited %}
</section>
