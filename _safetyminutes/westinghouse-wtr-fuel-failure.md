---
layout: slides
title: The Westinghouse Test Reactor Fuel Melt
description: Fuel fabrication must have minimal defects
date: 2025-07-01
byline: true
author: nick
image: /img/wtr-carwash_sm.jpg
---

<section>
  <h2 id="pres-title">{{page.title}}</h2>
  <img src="{% link {{page.image}} %}" class="img-fluid w-25" />
  <p id="event-c" class="frontmatter small">Waltz Mill site, 20 miles southeast of Pittsburgh<span id="event"></span></p>
  <p class="frontmatter small"><span id="date">April 3, 1960</span></p>
  <p class="attribution">
    A safety minute from 
    <a href="{% link safety-minutes.md %}">whatisnuclear.com</a>
  </p>
</section>
<section markdown="1">
<h2>Context</h2>
<div class="row">
  <div class="col-6 text-start" markdown="1">
  * WTR was a pressurized tank-type water-cooled/water-moderated test reactor
  * Pressurized by head tank 250 ft. in the air
  * 60 MWt, designed to test materials and components
  * Privately owned
  * Each assembly had 200 grams of highly-enriched uranium in uranium-aluminum alloy
  * Fuel elements made of 3 concentric rings
  </div>
  <div class="col-6">
    <img src="/img/westinghouse-test-reactor.jpg" alt="Westinghouse Test Reactor site">
    {% cite tardiffASPECTSWTRSL11962 %}
  </div>
</div>
</section>

<section markdown="1">
<h2>What happened</h2>

<div class="row">
  <div class="col-6 text-start" markdown="1">
  * A test was planned to reduce flow and see how the reactor operated
  * Power was 40 MW and flow was 15,000 gpm
  * Power was reduced to 30 MW and safety system setpoints were adjusted
  * Flow was reduced to 5250 gpm, power increased back to 37 MW and then back to 40 MW
  * At 8:35 pm, power unexpectely dropped to 17 MW
  * Automatic control rods withdrew to upper limit
  * Power started increasing again
  * Radiation alarms! ☢️😱
  * Personnel scramed and secured the plant and evacuated the area
  </div>
  <div class="col-6">
    <img src="/img/wtr-core.jpg" alt="Westinghouse Test Reactor core">
  </div>
</div>
</section>

<section markdown="1">
<h2>Investigation</h2>
<div class="row">
  <div class="col-6 text-start" markdown="1">
  * Gross fission product contamination of primary coolant
  * By April 9, the head was raised and scrubbed with carwash brushes
  * A three-inch thick shielded platform was constructed
  * Fuel was removed, but one assembly was stuck
  * It was melted
  * Coolant voiding around it explains the power reduction
  </div>
  <div class="col-6">
    <img src="/img/wtr-carwash.jpg" alt="Westinghouse Test Reactor opened up and cleaned">
  </div>
</div>
</section>

<section data-background-image="/img/wtr-fuel.jpg"
  data-background-size="contain"
  data-background-repeat="no-repeat" >
</section>

<section data-background-image="/img/wtr-melted-fuel.jpg"
  data-background-size="contain"
  data-background-repeat="no-repeat" >
</section>

<section markdown="1">
<h2>Root cause</h2>
<div class="row">
  <div class="col-6 text-start" markdown="1">
  * Bonding defect from fuel fabrication over 1/2" found able to cause burnout
  * Inspections of spare fuel showed tons of big defects, up to 1"
  * Solution: improved fabrication tolerances and inspection
  * Blister tests insuffucient, ultrasonic inspection required
  * Cost increase of fabrication lower than cleanup costs

{% cite editorsFUELDAMAGEWTR1960 %}

  </div>
  <div class="col-6">
    <img src="/img/wtr-bonding-fail.jpg" alt="Failed fuel from the WTR">
  </div>
</div>
</section>

<section>
<h3 id="references">References</h3>

{% bibliography --cited %}

</section>
