---
layout: calc
title: How much CO₂ is avoided by each individual cask of nuclear waste?
author: nick
image: /img/dry-cask-co2-meme.jpg
date: 2021-12-21
byline: true
factlets: 
    - Each dry cask of nuclear waste represents 2 million tonnes of CO₂
      that weren't emitted.
---

<div class="row">
<div class="col-lg-8" markdown="1">


<figure>
<a href="/img/dry-cask-co2-meme.jpg">
<img class="img-fluid w-75" src="/img/dry-cask-co2-meme.jpg" 
{% imagesize /img/dry-cask-co2-meme.jpg:props %}  
alt="A nuclear dry casks with text explaining that it represents 2 million tonnes of displaced CO2"/></a>
<figcaption markdown="1" class="figure-caption">Each cask is 2 million tonnes of CO₂ that were avoided.
</figcaption>
</figure>

In 2017, there were 3482 PWR assemblies discharged in the USA, initially
containing 1526.5 tonnes of uranium, and that on average the assemblies were
burned to 46.2 MWd/kgHM [[EIA](https://www.eia.gov/nuclear/spent_fuel/)]. HM
means heavy metal, and refers to the mass of initial uranium of the fresh
assembly.  This means that a single average 2017 PWR assembly gave out 21.5
GW-days of (thermal) energy.

    units -1 "1526.5 tonnes * 46.2 MW*day/kg/3282" "GW*day" 
    21.488208

PWRs are about 32% thermally efficient, so those thermal GW-days are roughly
equivalent to 6.9 GW-days of electricity, or 1.7e8 kWh.

    units -1 "1526.5 tonnes * 46.2 MW*day/kg/3282 * 0.32" "kW*hour" 
    1.6502944e+08

A typical dry cask (e.g. HI-STORM 100) holds 24 discharged PWR fuel assemblies
[[HOLTEC](https://holtecinternational.com/innovation/technical-papers/an-overview-of-hi-storm-hi-stars-metcon-conjugate/)].
Thus, an average dry cask full of PWR spent fuel represents about 4e9 kWh of
electricity.

    units -1 "1526.5 tonnes * 46.2 MW*day/kg/3282 * 0.32 * 24" "kW*hour" 
    3.9607066e+09

Each kWh of nuclear electricity saves (490-12) = 478 grams of CO₂ (equivalent)
over gas, full lifecycle [[Schlomer
2014](https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf)].
Thus, a single dry cask represents a savings of 1.9 million tonnes of CO₂-eq!!

    units -1 "1526.5 tonnes * 46.2 MW*day/kg/3282 * 0.32 * 24 * ((490-12) grams/(kW*hour))"  "million tonnes" 
    1.8932177

(Older spent fuel had lower average burnup but displaced coal instead of gas, so that's a similar result)
</div>
</div>