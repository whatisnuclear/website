---
layout: calc
title: How many households would generate one 55-gallon drum of nuclear waste?
author: nick
date: 2023-04-29
byline: true
image: "/img/one-drum-text.jpg"
factlets: 
    - If a 55-gallon drum was actually filled with spent fuel, it would have generated
      enough electricity to power 60,000 average US households for a year.
    - If a 55-gallon drum was actually filled with spent fuel, it would represent 55 million lbs
      of CO₂ that didn't get emitted.
---
<div class="row">
<div class="col-lg-8" markdown="1">

Greenpeace and other anti-nuclear organizations own a number of 55-gallon yellow
barrels that they often display in city centers to stage sharable anti-nuclear
information. The spent nuclear fuel they talk about is not stored in such
barrels, it's stored in [dry casks]({% link waste.md %}#current).
However, they do raise an interesting hypothetical question! If we actually did
have a 55-gallon barrel filled to the brim with modern spent nuclear fuel, how
much energy would that have provided? How much CO₂ would it have avoided?

In 2022, an average US household used 11,000 kWh
[[EIA](https://www.eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php)].
Using this, plus the same baseline references for normal reactor waste
characteristics as in [our related calc]({% link
_calcs/how-much-nuclear-waste-per-capita.md %}), we find:

    units -1 --verbose "55 gallons*(10g/cm^3) * 238/(238+32) * 46.4 MW*day/kg * 0.323 / (11000 kW*hour)"
    60010.614

**60,000 average USA nuclear-powered households generate 55 gallons of spent fuel per year.**

How much carbon savings is that over fossil energy sources?

Avg intensity in USA is 0.855 pounds of CO2 emissions per kWh [[EIA](https://www.eia.gov/tools/faqs/faq.php?id=74&t=11)].
So that's 387 grams, vs. 12 from nuclear, using lifecycle emissions numbers from [Schlomer
2014](https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf).
So total carbon savings per barrel is:

    units -1 --verbose --digits 2 "55 gallons*(10g/cm^3) * 46.4 MW*day/kg * 238/(238+32) * 0.323 * (387g-12g)/(kW*hour)" "million lbs"
    55 gallons*(10g/cm^3) * 46.4 MW*day/kg * 238/(238+32) * 0.323 * (387g-12g)/(kW*hour) = 550 million lbs

**Each 55-gallon barrel of spent fuel represents 550 million lbs (250,000 tonnes) of carbon savings over the US average emissions.**

Incidentally, the US's per-capita all-sector electricity usage is nearly
identical to the residential-sector per household usage, so these
numbers also work for individual people.

This calculation is for non-breeder reactors. With breeder reactors, about 10x
more energy would have been extracted per volume.

</div>

<div class="col-lg-4" markdown="1">

<a href="/img/one-drum-text.jpg">
<img class="img-fluid rounded" src="/img/one-drum-text.jpg" 
{% imagesize /img/one-drum-text.jpg:props %}  
alt="A barrel in front of 60,000 houses"/></a>


<figure>
<iframe class="img-fluid" width="560" height="315" src="https://www.youtube.com/embed/u-VaS14Ls8U"
title="Barrel of waste video" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
<figcaption markdown="1" class="figure-caption">A video version of this with slightly higher numbers (it assumes a brand new AP1000 reactor with higher burnup fuel rather than average discharge fuel).
</figcaption>
</figure>

</div>
</div>