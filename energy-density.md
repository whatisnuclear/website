---
layout: default
title: Computing the energy density of nuclear fuel
category: concepts
description: How to compute energy density of nuclear fuel
author: nick
mathjax: true
byline: true
---
<div class="row">
<div class="col-md-8" markdown="1">

Energy density is like the miles-per-gallon rating of a power plant. It measures how much
energy is released (in megajoules) given a certain mass of fuel (in kilograms). Perhaps
the most physically unique thing about nuclear power is that the energy density of nuclear
fuel is about 2 million times higher than that of any chemical (like fossil fuel, biofuel, or
batteries).

## Details of the computation
The easy way to compute energy density of nuclear fuels is to figure out how
much fission energy can be released from 1 mole of the fuel. The equation for
energy density in MJ/kg is: 

$$\text{ED} = \frac{\kappa_{fis} \text{[MeV/fission]} N_A \text{[fissions/mol]}}{A
\text{[g/mol]}} \times \frac{1.60217\times10^{-19} \text{[Mega Joules/MeV]}}{0.001
\text{kg/g}} = \text{MJ/kg}$$

where:
   * $$\kappa_{fis}$$ is the energy release per fission for the nuclide of
     interest. These values are measured by scientists and collected in nuclear
     data files such as the ones available at the National Nuclear Data Center.
     Look for the *(n,fis.ene.release) Interpreted* field for each nuclide <a href="http://www.nndc.bnl.gov/sigma/index.jsp">here</a>.

   * $$N_A$$ is Avogadro's number, or 6.022e23. This is the number of atoms
     per mole. Since we're assuming 100% of atoms fission, this is equal to
     the number of fissions per mole.

   * $$A$$ is the atomic mass of the nuclide of interest. This can be found on any
     Chart of the Nuclides, like <a href="http://atom.kaeri.re.kr/">this one</a>.

## Some nuclear energy density calculations
Running the equation, here's how much energy is contained in certain amounts of nuclear fuel.

<table class="table table-striped">
<tr><th>Material</th><th>Energy released per fission (MeV) [1]</th><th >Atomic weight (g/mol) [2]</th><th >Energy density (MJ/kg)</th></tr>
<tr><th >U-235</th><td>193.4</td><td>235.04</td><td>79,390,000</td></tr>
<tr><th >U-238/Pu-239</th><td>198.9</td><td>238.05</td><td>80,620,000</td></tr>
<tr><th >Th-232/U-233</th><td>191.0</td><td>232.04</td><td>79,420,000</td></tr>
</table>
<p class="caption"><strong>Table 1.</strong> Energy densities of nuclear fuels. Energy per
fission does not include the energy lost to neutrinos since it is practically
unrecoverable. </p>

## Influence of burnup

Another factor worth considering is how complete the fuel is consumed. For example, a wood
fire may burn out before all the energy is extracted from the wood. In traditional LWR
nuclear power plants, usually only 5-7% of the fuel's energy is extracted.
Furthermore, the fuel has already gone through an enrichment process so only about 1% of
the energy of the mined resource is used. Advanced nuclear power plants called [breeder
reactors]({% link recycling.md %}) such as the [liquid metal fast breeder reactor]({% link
fast-reactor.md %}) (LMFBR)
or the [molten salt breeder reactor]({% link msr.md %}) (MSBR) can extract much more of
the mined energy. The fraction of the energy extracted from the fuel in a reactor is
called the burnup.

So in a LWR, the effective energy density is around 1% of 80 million, or 0.8 million MJ/kg.
Note that from a high-level waste perspective, the burnup of the fuel going into the reactor is what
matters (rather than the effective burnup of the mined material), so 5% of 80 million is
more appropriate.


## Comparison with other fuels

A single fuel pellet may weigh [about 10
grams](https://www.cameco.com/uranium_101/fuel-processing/fuel-manufacturing/). This would
have 8.8 grams of heavy metal in it (the rest is oxygen), so it contains 35,000 MJ in a
typical reactor and at least 700,000 MJ in a breeder reactor. Thus we can compare its
content to other fuels. 

{% comment %}
    units "46 MW*d/kg * 10 grams * 238/(238+32)" "MJ"
    units "46 MW*d/kg * 10 grams * 238/(238+32)/(30 MJ/kg)" "ton"
    units "46 MW*d/kg * 10 grams * 238/(238+32)/(43 MJ/kg)" "ton"

    crude oil volumetric energy density 37 MJ/L
    units "46 MW*d/kg * 10 grams * 238/(238+32)/(37 MJ/L)" "gallon"

    NG STP 0.0364 MJ/L
    units "46 MW*d/kg * 10 grams * 238/(238+32)/(0.0364 MJ/L)" "ft^3"
{% endcomment %}

{:.table .table-striped}
| Material | Energy Density<br/> (MJ/kg)| Equivalent to<br/> fuel pellet in LWR | Equivalent to fuel<br/> pellet in breeder|
|-----|-----|-----|-----|
| Coal | 30  | 1.3 tons | 22 tons |
| Oil |  42 | 250 gallons  | 4350 gallons |
| Natural Gas |  53.5  | 34,000 cubic ft | 590,000 cubic ft
| Lithium | 43 | 0.9 tons | 16 tons |


Note: The characteristics of the power generation system affect exactly how much usable
energy is extracted. For instance, if a power plant makes heat to be converted to
electricity, the thermal efficiency ($$\epsilon_{th}$$) determines how much of the heat
gets converted to electricity. These values vary from around 35-45% for coal plants and
advanced nuclear plants to 33% for typical nuclear plants, to above 60% for combined cycle
natural gas plants. Thus, from a electricity point of view, the values above would be
20-50% less.

## Other Complications

In a nuclear reactor, fission isn't the only process that releases energy. The actinides,
fission products, and even structural and coolant nuclides often undergo capture reactions
that release energy without fissioning. The fraction of energy released by a nuclear
reactor by these reactions can be on the order of 10% of the total power of the reactor.


<h1 id="references">See Also</h1>

<ol>
<li><a href="{% link fast-reactor.md %}">What is a fast breeder reactor?</a></li>
<li><a href="{% link msr.md %}">What is a molten salt reactor?</a></li>
<li><a href="https://en.wikipedia.org/wiki/Energy_density">Energy density [Wikipedia]</a>  </li> 
</ol>

<h1>References</h1>
<ol>
 <li><a href="http://www.nndc.bnl.gov/sigma/">National Nuclear Data Center</a></li>
<li><a href="http://atom.kaeri.re.kr/">KAERI Chart of the Nuclides</a></li>
</ol>

</div>
</div>
