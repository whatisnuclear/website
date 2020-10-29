---
layout: default
title: Nuclear fuel will last us for 4 billion years
category: blog
description: > 
    Some people claim nuclear fuel is inexhaustible and circular, others say
    we'll run out soon. We do the math. Turns out, it's roughly as inexhaustible as sunlight.
author: Nick Touran, Ph.D. (nuclear engineering)
image: /img/nuclear-sustainability.png
mathjax: true
---
<div class="row">
<div class="col-md-8" markdown="1">
# {{ page.title }}
##### {{ page.author }}, {{ page.date | date: "%Y-%m-%d" }}. Reading time: {{ page.content | reading_time_as_i }}

As shown in our [energy flow diagram]({% link energy-flow.md %}), our energy resource
options are derived either directly from sunlight (solar, wind, hydro, biofuel), by
digging up fossilized organic matter (coal, oil, gas), or from accessing primordial energy
(nuclear fission, geothermal, tidal, fusion). These are *all* limited in quantity.
Some will last us about as long as the sun, while others may run out soon and are thus not
sustainable.

How does nuclear fission perform in the sustainability question? This question has
been answered quite skillfully by the legendary David MacKay in [Sustainable Energy
Without the Hot Air](https://www.withouthotair.com/c24/page_162.shtml), but we figured we
could add our own version as well. Here is the result:

![Nuclear sustainability plot](/img/nuclear-sustainability.png){: .img-responsive }

[Breeder reactors]({% link recycling.md %}) can power all of humanity for more than 4
billion years.  By any reasonable definition, nuclear breeder reactors are indeed
renewable. However, billion-year sustainability does require advances in [seawater uranium
extraction](https://pubs.acs.org/toc/iecred/55/15), reactor [construction performance]({%
link economics.md %}), and public acceptance. We have [developed breeder reactors in the
past]({% link reactor_history.md %}#liquid-metal-cooled-fast-breeder-reactors), but they
remain a small minority of our current fleet.

{: .alert .alert-success}
We are talking about **all primary energy** here rather than just electricity. In
most parts of the world, electricity is about 40% of total energy. The rest is for
transportation, industrial heat, etc.

## The basis facts:

* Total world energy consumption of primary energy in 2019 was about 584 exajoules ([BP
  Statistical Review of World Energy
2020](https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/energy-economics/statistical-review/bp-stats-review-2020-full-report.pdf))
* A modern light-water reactor can pull an average of 60 MWd/kg out of its 4.8% enriched
  nuclear fuel ([AP1000 docs](https://aris.iaea.org/PDF/AP1000.pdf))
* One kg of 4.8% enriched uranium requires 9.5 kgU natural uranium input to the enrichment
  plant (and 7.8 SWU) (any old [SWU calculator](https://www.urenco.com/swu-calculator))
* A breeder reactor with a recycling fuel cycle can pull [about 900 MWd/kg]({% link
  energy-density.md %}) out of non-enriched nuclear fuel (natural or depleted uranium or
thorium)
* There are 6.1 million tonnes of uranium in reasonably assured deposits ([World
  Nuclear Uranium](https://world-nuclear.org/information-library/nuclear-fuel-cycle/uranium-resources/supply-of-uranium.aspx))
* There are 6.3 million tonnes of thorium in reasonably assured deposits ([World
  Nuclear Thorium](https://world-nuclear.org/information-library/current-and-future-generation/thorium.aspx))
* Uranium exists in seawater at an average concentration of 0.003 ppm (also World Nuclear
  Uranium)
* There are about 332 million cubic miles of water on Earth, 96.5% of it is in the ocean
  ([USGS](https://www.usgs.gov/special-topic/water-science-school/science/how-much-water-there-earth?qt-science_center_objects=0#qt-science_center_objects)).
  At a density of 1 gram/cm$$^3$$, this comes out to 1.4 yottagrams of water, or 1.4e21 kg)
* At 0.003 ppm, this means there are about 4000 million tonnes of uranium in seawater
* The average crustal concentration of uranium is about 2.8 ppm ([World Nuclear Uranium](https://world-nuclear.org/information-library/nuclear-fuel-cycle/uranium-resources/supply-of-uranium.aspx))
* There are about 6.5 million million tonnes (6.5e13 tonnes) of uranium in the crust,
  which continuously replenishes the uranium in seawater through erosion, runoff, and
  plate tectonics.
* Thorium requires the use of a breeder reactor so it is to be included only once breeder
  reactors are assumed


## The math

It's convenient to use the [GNU units program](https://www.gnu.org/software/units/) to do
these kinds of comparisons quickly. This is available for free on Windows, Linux, and Mac. 

For mined uranium and non-breeders, we use

    $ units "6.1 million tonnes*60 MW*day/kg/9.5/(584 exajoules/year)"  "years"
    5.6997837

For seawater uranium, it's

    $ units "4000 million tonnes*60 MW*day/kg/9.5/(584 exajoules/year)"  "years"
    3737.5631

Breeders with mined uranium:

    $ units "6.1 million tonnes*900 MW*day/kg/(584 exajoules/year)"  "years"
    812.21918

Breeders with mined uranium and thorium:

    $ units "(6.1 million tonnes+6.3 million tonnes)*900 MW*day/kg/(584 exajoules/year)"  "years"
    1651.0685

Breeders with mined and seawater resources:

    $ units "(6.1e6 tonnes+6.3e6 tonnes+4000e6 tonnes)*900 MW*day/kg/(584 exajoules/year)" "years"
    534253.81

Breeders with mined, seawater, and erosion resources, assuming about half the erosion
resource will reach the sea:

    $ units "(6.1e6 tonnes+6.3e6 tonnes+4000e6 tonnes+6.5e13 tonnes* 0.5)*900 MW*day/kg/(584 exajoules/year)"  "years"
    4.3279315e+09

As a bonus, let's compute how many reactors we'd need to make 100% of the primary world
energy. Assuming big gigawatt-scale reactors, we find:

    $ units "584 exajoules/yr /(3300 MW)"
    5607.9511

We have about 450 reactors in the world today, so we'd need to build about 5100 more
large reactors to produce all our energy with low-carbon nuclear. 

Another nearly unbelievable fact (HT reddit user `paulfdietz`) is that if you dig up an
average crustal rock, it will have 20x more nuclear energy in it than a piece of pure coal of
the same mass. With crustal abundances of 2.8 and 6 ppm for uranium and thorium, and a
chemical energy density of 33 MJ/kg for coal, the math here is:

    $ units "(2.8e-6 + 6e-6) * 900 MW*day/kg / (33 MJ/kg)" 
    20.736

😲

## More thoughts

Of course, no serious energy planners propose using 100% of anything, so this will be
mixed with other low-carbon energy sources like wind, solar, hydro, geothermal, etc. as
appropriate on a regional basis.

The mined uranium and thorium values are very likely to increase if demand increases. As
with most minerals, as demand goes up, people prospect more and find more. The numbers
here are expected to be conservative for the mined resources.

# See Also
* [Cohen, "Breeder reactors: A renewable energy source", 1983](http://large.stanford.edu/publications/coal/references/docs/pad11983cohen.pdf)
  -- This same story written in 1983
* [Lightfoot, "Nuclear Fission Fuel is Inexhaustible",
  2006](https://doi.org/10.1109/EICCCC.2006.277268) -- A similar story
* [Conca, "Uranium Seawater Extraction Makes Nuclear Power Completely Renewable",
  2016](https://www.forbes.com/sites/jamesconca/2016/07/01/uranium-seawater-extraction-makes-nuclear-power-completely-renewable/#24ee9a3159ae)
  -- Another explanation of uranium renewability
* [Nuclear power proposed as renewable energy (Wikipedia)](https://en.wikipedia.org/wiki/Nuclear_power_proposed_as_renewable_energy) -- A
  summary of the debate

