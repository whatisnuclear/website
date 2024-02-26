---
layout: calc
title: How much coal/gas/oil matches the energy of a single nuclear fuel pellet?
author: nick
last_modified_at: 2023-04-29
date: 2020-10-30
byline: true
factlets:
  - One nuclear fuel pellet used in a normal reactor contains the same amount
    of energy as 1.3 tons of coal, 250 gallons of oil, 34,000 cubic feet of
    natural gas, and 0.9 tons of charged lithium ion batteries
  - One nuclear fuel pellet used in a breeder reactor contains the same amount
    of energy as 22 tons of coal, 4350 gallons of oil, 590,000 cubic feet of
    natural gas, and 16 tons of charged lithium ion batteries
mathjax: true
---

<div class="row">
<div class="col-lg-8" markdown="1">

A single uranium oxide fuel pellet weighs [about 10
grams](https://www.cameco.com/uranium_101/fuel-processing/fuel-manufacturing/).
This has 8.8 grams of uranium in it (the rest is oxygen), so, using [energy
density values]({% link energy-density.md %}), it contains 35,000 MJ in a typical
reactor and at least 700,000 MJ in a breeder reactor. Thus we can compare its
content to other fuels. Here is the result:

{% include_relative _energy-equiv-table.md %}

Note: The characteristics of the power generation system affect exactly how much usable
energy is extracted. For instance, if a power plant makes heat to be converted to
electricity, the thermal efficiency ($$\epsilon_{th}$$) determines how much of the heat
gets converted to electricity. These values vary from around 35-45% for coal plants and
advanced nuclear plants to 33% for typical nuclear plants, to above 60% for combined cycle
natural gas plants. Thus, from a electricity point of view, the values above would be
20-50% less.

Data supporting this include:

- crude oil volumetric energy density 37 MJ/L
- natural gas density at STP is 0.0364 MJ/L
- lithium energy density is 43 MJ/kg
- coal energy density is 30 MJ/kg

GNU units commands:

    units -1 --digits 2 "46 MW*d/kg * 10 grams * 238/(238+32)" "MJ"
    3.5e4

    units -1 --digits 2 "46 MW*d/kg * 10 grams * 238/(238+32)/(30 MJ/kg)" "ton"
    1.3

    units -1 --digits 2 "46 MW*d/kg * 10 grams * 238/(238+32)/(43 MJ/kg)" "ton"
    0.9

    units -1 --digits 2 "46 MW*d/kg * 10 grams * 238/(238+32)/(37 MJ/L)" "gallon"
    2.5e2

    units -1 --digits 2 "46 MW*d/kg * 10 grams * 238/(238+32)/(0.0364 MJ/L)" "ft^3"
    3.4e4

For breeders, do the same with 800 MW\*day/kg instead of 46.
