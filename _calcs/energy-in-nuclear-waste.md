---
layout: calc
title: How much energy is contained in existing US nuclear waste?
author: nick
date: 2023-04-29
byline: true
image: "/img/all-waste-fps_sm.jpg"
factlets:
  - Existing US nuclear waste could generate 100% of US electricity for 160
    years (given a fleet of breeder reactors)
  - Existing US nuclear waste could generate 100% of world electricity for 25 years
  - Existing US nuclear waste contains about 6,670 exajoules of energy, or
    about 11 years of total world primary energy.
  - Existing US depleted uranium contains about 52,000 exajoules of energy, or
    about 80 years of total world primary energy.
  - This energy cannot be accessed without bootstrapping breeder reactors
    over about 5 doubling times, or ~150 years
---

<div class="row">
<div class="col-lg-8" markdown="1">
Since nuclear waste [is recyclable]({% link recycling.md %}), it's good to know
how much energy is available in the waste that currently exists.

The 2017 there were ~80,000 tonnes of spent fuel, increasing at at rate of ~9500
MT per 3.5 years [[EIA](https://www.eia.gov/nuclear/spent_fuel/)]. That means
that in 2023 there are about 96,500 tonnes of spent fuel.

    units -1 "80000 + 9500/3.5 * (2023-2017)
    96285.714

Breeder reactors with full multi-recycle can extract [around 800 GW-day/tonne of
thermal energy]({% link energy-density.md %}), so **there are 6670 exajoules of
usable energy in the US waste**.

    units -1 "96500 tonnes * 800 GW*day/tonne" "exajoules"
    6670.08

Considering that the world uses about 600 exajoules of primary energy per year
[[BP statistical review
2022](https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/energy-economics/statistical-review/bp-stats-review-2022-full-report.pdf)],
this means that **nuclear waste in the USA contains as much as 11.1 years of total world primary
energy (not just electricity)**.

    units -1 "96500 tonnes * 800 GW*day/tonne / (600 exajoules/yr)" "years"
    11.1168

However, most reactors don't use 100% of the heat they make. A breeder reactor
can convert about 39% of its heat to electricity. The rest of the heat could be
used for district heating, industrial processes, hydrogen production,
desalination, etc., but this is currently uncommon, and we'll never be able to
capture 100% of the energy released in a nuclear core.

Looking purely at electricity, the world generated about 28,500 TW-hour of
electricity in 2021 [BP 2022]. Thus, **nuclear waste in the USA could be used
to generated 100% of world electricity for 25 years**.

    units -1 "96500 tonnes * 800 GW*day/tonne* 0.39 / (28500 TW*hour/yr)" "years"
    25.354105

The USA uses 93 exajoules of primary energy per year, so the US waste contains
72 years of the USA's energy.

    units -1 "96500 tonnes * 800 GW*day/tonne / (93 exajoules/yr)" "years"
    71.72129

Just looking at US electricity (4406 TW-hour/year [BP 2022]), the **US waste could make 100%
of US electricity for 164 years**.

    units -1 "96500 tonnes * 800 GW*day/tonne* 0.39 / (4406 TW*hour/yr)" "years"
    164.00182

Note that these scenarios would require an established fleet of breeder reactors
to actually achieve, all of which would need to be already started up, which
would require a huge amount of fissile material. For example, the S-PRISM 1000
MWt SFR requires 2336 kg of Pu to start up {% cite
hoffmanPreliminaryCoreDesign2008 %}, and you'd need 3000 S-PRISM cores to make
all US primary thermal energy, so you'd need 7000 tonnes of separated plutonium
to start such a fleet up. There are only about 1000 tonnes of plutonium in the
spent fuel, so there needs to be a 'phase in' period before all this energy can
be accessed. Ramping up such a fleet is generally envisioned to start from the
1000 tonnes of plutonium contained in the spent fuel and ramp up gradually over
about 150 years.

## What about all our depleted uranium (DU)?

The US currently has about 750,000 tonnes
of it in storage at Paducah, KY and Portsmouth, OH left over as tails from
uranium enrichment. It's barely radioactive, and so is not high-level nuclear
waste, but is still a nuclear byproduct material. This material contains
about 52,000 exajoules!

    units -1 "750000 tonnes * 800 GW*day/tonne" "exajoules"
    51840

This is enough to provide the whole world's primary energy (~650 exajoules per year)
for about 80 years! Again, from a practical point of view this is actually not possible
without a gradual ramp-up from existing fissile material. You could start
~1000 breeder reactors with available plutonium today, making about 31 exajoules/year (5% of
total world energy) and then, over 5&ndash;6 doubling times, build up enough plutonium
to ramp up 20x to full world power, and then consume the energy in the DU. If you
used HALEU instead, you could never consume the pile of DU because you'd be adding
far more DU than you can consume while enriching the HALEU.

## References

{% bibliography --cited %}

</div>
</div>
