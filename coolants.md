---
layout: default
title: Nuclear reactor coolants
description: >
  A moderate deep dive into nuclear reactor coolants, including water, liquid
  metals, gas, molten salt, and organics
author: nick
byline: true
image: /img/loops2.jpg
date: 2025-03-20
mathjax: true
categories:
  - deep dive
---

<div class="row">
<div class="col-md-8" markdown="1">

The objective of most nuclear reactors is to unleash the energy within nuclear
bonds and put it to work for some practical purpose. We normally induce a
nuclear fission chain reaction in a **fuel material**, where the recoiling nuclei of fission products
deposit their vast energy locally. As the fuel heats, the
laws of thermodynamics kick in to dissipate the heat to the ambient environment.

At low power levels, the natural circulation of atmospheric air can be
sufficient to operate a reactor without melting fuel. Fermi's CP-1 simply
transferred its 2 watts of heat to the convecting air under the squash court.

To put a reactor to practical use, higher power is needed. Energy will dissipate
naturally one way or another. If Fermi had run CP-1 at high power, the fuel
would have heated up far above the melting temperature of the fuel. However,
melting fuel every time you turn a reactor on is not the most practical way to
put nuclear reactions to work. It's better if you can set up a system that flows
some kind of heat transfer material past the fuel so that it picks up the energy
and moves it somewhere else. Such a material is called a **coolant material**,
or just a **coolant**.

## Primary vs. secondary

In many cases, the coolant that goes into the nuclear core may not be
appropriate to drive the final power conversion system (i.e. the turbine). In
such cases, multiple coolant materials are configured in such a way to pass the
heat from one fluid to the other in heat exchangers. The coolant that picks up
heat directly from nuclear fuel is called the _primary coolant_. The next
coolant is called the _secondary coolant_, and so on. Some reactors only have
primary coolant, such BWRs and the early Hanford plutonium-production reactors.

For example, in the close quarters of a submarine, you may want to minimize the
amount of equipment that is radioactive during operation, so you might choose to
keep the coolant that comes into contact with the nuclear fuel isolated in a
small space and carry heat out with non-radioactive, non-activated secondary
coolant. In reactors with chemically reactive coolants, three loops are common.
Even more loops have been considered, e.g. four when integrating liquid metal cooled
reactors with thermal energy storage systems
{% cite foxAssessmentHighTemperature1977 %}.

Coolants are typically circulated in closed loops. The loops take on the same
name as the coolants: the _primary loop_ circulates the primary coolant, and so
on.

<figure>
<img src="/img/loops3.jpg" 
  alt="Graphic showing reactors with 1, 2, and 3 loops"
  class="img img-fluid center-block" 
  >
    <figcaption>
      Diagrams showing reactor cooling configurations with 1 coolant loop
      (direct-cycle BWR), 2 loops (PWR), and 3 loops (LMR). Images from
      {% cite hogertonNuclearReactors1964 %}. You can find an image of more
      configurations for many more reactor types in
      {% cite u.s.atomicenergycommissionUSAECPowerreactorDevelopment1963a --locator 17 %} </figcaption>
</figure>

<div class="alert alert-success" markdown="1"><span class="badge bg-success">WARNING</span> 
To further complicate this, reactor designers often include multiple
independent trains of coolant loops between the core and turbine. A
"3-loop PWR" has 3 primary loops, 3 steam generators, and 3 steam lines.
</div>

</div>

<div class="col-md-4 order-first order-lg-2 order-md-2" markdown="1">
On this page: 
<!-- prettier-ignore -->
- Dummy list
{:toc}
</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">

## Criteria for coolant selection

Parameters to look for when choosing a coolant material include generally
criticality considerations as well as the following. There are exceptions based
on applications, but these are desirable in general, building on {% cite
el-wakilNuclearPowerEngineering1962 %}:

### General

- **Readily Available** --- Materials with raw inputs that are readily available rather than
  rare are likely to be cheaper, easier to test, easier to procure, and more
  sustainable.
- **Low cost** --- All other things equal, cheaper materials (e.g. water) are
  preferable to expensive ones (isotopically separated liquid gold).
- **Easy to fabricate/synthesize** --- You want the process of going from raw
  material inputs to reactor-ready component to be cheap and easy.
- **Low toxicity** --- Non-toxic materials (e.g. helium, water) are easier to work with in
  testing, construction, operation, and decommissioning than toxic
  ones (e.g. molten lead, mercury, beryllium).
- **Compatible with long-term waste strategy** --- If you plan to dispose
  of your materials after use in a repository, it's best if they are chemically
  compatible with that repository. For example, molten salt nuclear waste may not
  be appropriate directly in certain deep repositories, but it may be fine to directly
  put it in massive salt repositories. If you plant to recycle your materials, you'll want
  them to be cheaply and easily recyclable using known processes.

### Thermal/chemical properties

- **Good thermal stability** --- Materials should remain intact at high
  temperatures. Some candidate materials (e.g. organic coolants) can chemically
  decompose at high temperature.
- **Low chemical reactivity** --- Materials should be chemically compatible
  with the other materials they may come into contact with during normal operation
  and in accident conditions.
- **High heat capacity** --- The more energy that you can store in a core material
  the better. This minimizes rapid temperature changes after rapid changes in power.
- **Low vapor pressure** --- Ideally your materials will not exert too much pressure
  on its container when it is brought up to useful temperatures
- **Readily flows at high temperature** --- The coolant should be easy to move,
  generally preferring low viscosity fluids.
- **High thermal conductivity** --- The easier it is to conduct heat
  into and then back out of a coolant, the better.
- **Low melting temperature** --- for fluid coolants, its best if the coolant
  doesn't solidify between operating modes of a reactor.
  For instance, many molten salts and liquid metals freeze at shutdown
  temperatures, which can cause flow blockages and complex stresses
- **High boiling temperature** --- for liquid coolants, you can minimize system
  pressure if you can prevent your coolant from boiling.

### Nuclear properties

- **Low non-fission neutron absorption** --- The core materials should not
  parasitically capture too many neutrons. This implies that it have minimal
  impurities, to avoid atoms with large neutron appetites.
- **Impact on average neutron speed** ---
  If you want a reactor with slow neutrons, you'll benefit from materials that
  are good at slowing neutrons down, known as good moderators (discussed soon).
  If you want a reactor with fast neutrons, you'll want to minimize materials
  that moderate.
- **Low induced radioactivity** --- Neutron-induced nuclear reactions will change
  the core materials into radioactive isotopes. Ideally, these isotopes wouldn't
  cause problematic radiation. For example, Argon in air activates to Ar-41, a
  beta and gamma emitter with a 110-minute half-life representing a serious
  inhalation hazard. In water, oxygen activates to Nitrogen-16, which, though it
  has a short half life, emits high energy beta and gamma rays during operation.
- **High radiation stability** --- The core materials must not break down to
  rapidly under intense radiation. This is most serious for fuel materials, but
  structural integrity of pressure vessels, fuel cladding tubes, or other
  non-replaceable key components often life-limit the plant due to this.

Nature has provided us with a dizzying array of candidate coolants that all
feature some complex subset of performance with respect to these criteria.
Given the complex and often competing nature of the criteria, it's unsurprising
that no one coolant is optimal across the board for any given application. Thus,
nuclear reactor development history has involved hundreds of ideas and thousands
of experimental developments and cost/benefit analyses, and (more recently)
millions of arguments in discussions online.

## Water

Water is, by far, the most common nuclear reactor coolant in use today.

Pros:

- Widely available
- Cheap
- Used widely across industries
- High heat capacity, can carry lots of heat at modest flow rates
- Low viscosity, easy to pump

Cons:

- Can be corrosive if chemistry not carefully controlled
- High vapor pressure: requires thick-walled vessels and high pressures
  to use at high temperature
- High activation during operation

In terms of radioactive activation, water emits high radiation when the reactor
is operating, but it decays away quickly after shutdown.
The relevant (n,p) nuclear reaction from Oxygen-16 is:

$$\text{O}^{16} + \text{n} \rightarrow \text{N}^{16} + \text{H}^1$$

$$\text{N}^{16}$$ has a 7.3 second half-life and therefore emits the vast
majority of its radiation within minutes after shutdown. However, it emits 10.5
MeV beta particles and up to 7.1 MeV gamma rays. Thus, any piping containing
this material must be heavily shielded if equipment nearby is to be inspected or
maintained during operation.

### Pressurized Water

Reactors that keep water under high pressure so as to not bulk boil inside the
reactor vessel is a Pressurized Water Reactor (PWR). See [Reactors]({% link
reactors.md %}) for more info.

### Boiling Water

A light-water moderated, water-cooled reactor that lets water coolant bulk boil
in the reactor itself is known as a boiling water reactor. See [Reactors]({%
link reactors.md %}) for more info.

### Heavy Water

One out of every 3200 water molecules in nature isn't actually regular old H₂O,
but has an extra neutron attached to one of the H's. Hydrogen with an extra
neutron is called Deuterium, or D, and these molecules made of HDO are called
**semiheavy water** (it's water that weighs one extra neutron more). Through an
industrial distilling process, we have grabbed this deuterium and reformed it
into synthetic water that has two deuteriums: D₂O, which is then called **heavy
water**. Deuterons have effectively no appetite for absorbing neutrons, and have
been used in a variety of Pressurized Heavy Water Reactors (PHWR), such as the
Canadian CANDUs, the CVTR in South Carolina, and numerous reactors at Savannah
River.

Note that heavy water can be used boiling or pressurized as well.

### Steam

Steam-cooled reactors, where the water is the gaseous phase, have been seriously
considered in a form of fast-neutron reactor, though none of these have been built.

## Liquid metal coolants

Liquid metal coolants, such as bismuth, mercury, and sodium, were among the
first considered coolants to make commercial power back in the Manhattan Project.
They offer:

- **Excellent heat transfer** --- high heat capacity, high thermal conductivity,
  low viscosity allows for ready cooling of even compact high power density
  cores.
- **Low system pressure** --- low vapor pressures mean you can heat the system
  up without it becoming overly pressurized. This reduces pumping power
  requirements over e.g. water (1/4). It also allows for thinner vessels, and
  can enable passive decay heat removal in accident conditions (i.e. active
  systems and backup power can be avoided)
- **Relatively high temperature** --- allows for higher thermal efficiency
- **The option of keeping neutrons moving fast** --- many liquid metals do not
  slow down neutrons. You can still slow them down with a separate moderator if
  you want, but you can choose not to if you want a fast reactor, e.g. to breed
  Plutonium.

In exchange for these tantalizing capabilities, you must be willing to sacrifice:

- **High reactivity with air and water** -- generally requiring an extra
  intermediate loop before power conversion. This somewhat counteracts the cost
  savings of the reduced pressure as well as the higher temperature.
- **Thermal shocks during transients** -- the thermal properties of liquid metals
  can impart extreme stresses on components during transients, necessitating
  the inclusion of thermal baffles to protect vessels, pipes, and welds.
- **High induced radioactivity** -- requiring additional shielding in primary systems
- **Not always liquid at room temperature** -- requiring heaters plus the
  associated sensors and controls along all piping systems to maintain
  clear flow paths throughout the system at all times, including accident
  scenarios.
- **Opaque** --- liquid metals are generally opaque, causing some challenge in
  operations and maintenance.

</div>
</div>

<div class="row">
<div class="col-md-12" markdown="1">

<p class="caption"><strong>Table 1.</strong> More specific pros and cons of a handful of liquid metal coolants </p>

<table class="table table-striped">
  <tr>
    <th>Liquid Metals</th>
    <th>Pros</th>
    <th>Cons</th>
    <th>Examples</th>
  </tr>

{% for item in site.data.liquid-metals %}

<tr>
<td>{{ item.name }}</td>
<td>{{ item.pros | liquify }}</td>
<td>{{ item.cons | liquify }}</td>
<td>{{ item.examples | liquify }}</td>
</tr>
{% endfor %}

</table>

</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">

Corrosion control due to impurities is key {% cite poplavskyLiquidMetalCoolants2009 %}.

Some more properties of liquid metals can be seen below

<figure>
<img src="/img/liquid-metal-props.png" 
  alt="Picture of table showing lots of properties"
  class="img img-fluid center-block" 
  >
    <figcaption>
Some liquid metal properties, including uranium solubility, which is relevant
when considering liquid metal fueled reactors
{% cite alderLiquidMetalFuel1958 %}.
    </figcaption>
</figure>

### Mercury (Hg)

Mercury is a common liquid metal that has been commonly used for hundreds of
years, e.g. in thermostats and thermometers. It is a liquid at room temperature,
is not overly chemically reactive, and flows easily. It's no surprise that it
was used in the first liquid metal cooled reactor ever: Clementine.
The heat transfer was unsatisfactory at Clementine, so various additives were
put in the coolant. Because of this, mercury is no longer a popular reactor
coolant.

In the Nuclear Space Program, a boiling mercury power cycle was developed, where
vaporized mercury metal passed through an ultra-compact turbine. (See <a
href="https://www.youtube.com/watch?v=Fa0SQ6Qbxvw">Mercury Rankine Program SNAP
(YouTube)</a>)

If you let the mercury boil, then the heat transfer can actually be pretty good.
{% cite bradfuteEVALUATIONMERCURYCOOLED1959 %}

### Sodium-Potassium Eutectic (NaK)

When the mercury coolant used in Clementine proved inadequate from a heat
transfer perspective, a eutectic (mixture) of sodium (Na) and potassium (K)
metal was utilized next, in the Experimental Breeder Reactor I. Like mercury,
NaK is a liquid at room temperature, avoiding the serious complications in
cooling and thermal stresses that come from coolant phase changes.
Unfortunately, NaK is highly chemically reactive, demanding careful handling and
tight specifications related to leak-tightness and moisture content.

### Sodium (Na)

Nuclear grade impurity levels and maintenance due to corrosion are essential
{% cite latgeSodiumCoolantActivation2017 %}

### Lead (Pb)

Lead does not significantly activate under irradiation. This is a major advantage
in both operation and in leak scenarios.

On the downside, lead is a dense and heavy metal. Pumping it requires large and
powerful pumps that require significant power themselves. Pumping lead through
large gravitational dimensions (e.g. tall things) is a challenge, so most
lead-cooled cores are relatively short.

### Bismuth (Bi)

Bismuth was first proposed as a coolant by Leo Szilard as a candidate coolant
for the Hanford piles back in 1942. It is the original liquid metal reactor
coolant idea.

It is far less common than lead and therefore more expensive.

Bismuth absorbs neutrons to activate to Polonium-210, which is an extremely
radiotoxic pure-alpha emitter with a 138-day half-life. It can reach
concentrations between 1--10 Ci/kg in normal reactor conditions
{% cite buongiornoStudiesPoloniumRemoval2004 %}. Since alpha particles don't
penetrate pipes and the coolant system is sealed, it does not represent a hazard
during normal operation, but rather is a concern during maintenance and leak
cleanups when the primary coolant barrier fails. Po-210 is volatile and builds
up in cover gas, which can leak through seals during operation. When the USSR
operated lead-bismuth cooled Alpha-class submarines, they employed Po-210
cleanup systems.

### Lead-Bismuth Eutectic (PbBi)

Pu-Bi eutectic is a mixture of Lead and Bismuth that exists in liquid form at
lower temperature than either pure fluid.

Obviously, it has the Po-210 activation concerns described above as well.

### Lithium metal (Li-7)

Lithium metal has an absurdly high heat capacity. This has led to its
utilization in numerous extraordinary reactor concepts, such
as the LCRE.

Lithium naturally contains 4.85% of the Lithium-6 isotope, the rest being Li-7.
For in-reactor use, lithium must be isotopically enriched to very high purity of
Lithium-7 for two related reasons:

- Lithium-6 is a very strong neutron absorber, which hurts the chain reaction
- For each neutron Lithium-6 absorbs, a tritium atom is generated. Because it's
  so small, tritium is a highly mobile radionuclide that has a pesky habit of
  escaping even sealed metal boundaries into the environment.

Enriching lithium is a significant cost adder.

<div class="alert alert-success" markdown="1"><span class="badge bg-success">DEGREE OF FREEDOM ALERT</span>

Note that the fact that you can choose the _isotopic composition_ of each
reactor material to specialize its nuclear properties to best suit your
preferences further exacerbate the combinatorial complexity of reactor
design. The isotopics of each coolant, moderator, structure, control, fuel,
etc. can be adjusted continuously, thereby truly showing that the set of
possible reactor designs is uncountably infinite.

</div>

### Potassium (K)

Liquid metal potassium was proposed as the primary coolant and direct working
fluid in the MPRE. Yes, you can make a liquid metal vapor turbine!

It was also planned as the secondary coolant in SNAP-50 and LCRE.

### Heat Pipes

Heat pipes are a form of liquid metal coolant, where the liquid metal is in a
vapor form inside a tube, which often also contains a wicking structure. Heat
moves passively from a heat source connected to one end to a heat sink connected
to the other. They are often found in consumer electronics such as laptops. They
have no moving parts and are low maintenance.

On the downside, there are five operational limits to heat pipes that kick in at
different geometries and operating conditions:

- **The viscous limit** (low temperatures) --- the vapor pressure in the
  evaporator is insufficient to drive the vapor flow toward the condenser section.
- **The sonic limit** --- choking in the vapor flow limiting the mass flow rate.
- **The capillary limit** -- when capillary pressure is insufficient to balance the pressure drops
  along the heat pipe.
- **The entrainment limit** --- when the vapor flow shears off the liquid at high-velocities,
  causing the wick to dry out.
- **The boiling limit** --- when high temperature boiling causes the wick
  structure to dry out and block the liquid flow along the wick.

Practically, these limitations prevent heat pipes from being used on large or
high power reactors. Still, they are great for high-cost fringe applications
like remote power, where simplicity and reliability are at a premium.

## Molten salt coolants

Molten salt can be used as a fuel or as a coolant. When put to work as a pure
coolant, fuel-related constraints, such as how much uranium, thorium, or
plutonium it can dissolve, fall away.

Non-nuclear systems use molten salts. Most notably, Concentrated Solar Power
(CSP) plants often use nitrate salts to collect and move heat. Solar salt
is a low-temperature eutectic, $$\text{60 NaNO}_3 - \text{40 KNO}_3$$.

<div class="alert alert-success" markdown="1"><span class="badge bg-success">TIP</span>

Many people mistakenly conflate molten salt and liquid sodium, probably because
foods that are low in salt are for labeled "low sodium" instead of "low salt".
Liquid sodium is a shiny flowing metal that conducts electricity, like what the
T-1000 is made of in Terminator 2. Molten salt is what you get if you heat up
table salt in a super high-temperature oven. It's melted salt. There is only one
liquid sodium (elemental sodium) but there are thousands of salts that can be
heated up and melted. In reactors, various fluoride and chloride salts are most
common, but there are plenty more. We have a [page on this]({% link
sodium-vs-salt.md %}).

</div>

### Fluoride salt coolants

FLiBe is a common choice for salt-cooled reactors. It was identified in the
aircraft reactor program as having appropriate properties as a coolant.

There are some economic challenges with FLiBe. The lithium generally has to be
isotopically enriched in Li-7 to minimize parasitic neutron absorption and tritium
production from the Li-6 isotope.

Futhermore, Beryllium is an industrial inhalation hazard. This is more of a
concern when machining solid beryllium, and certainly can and is handled with
appropriate precautions, but it's certainly another cost adder.

Beryllium is also a somewhat rare material shrouded in fairly obnoxious secrecy
and ITAR-related issues because of its use in components of nuclear weaponry.

As with other salt coolants, the melting temperature of FLiBe is pretty high.
The tanks and pipes must have external electrical heaters to prevent thermal
stresses from thermal expansion, and to maintain the coolant's ability to flow
and transfer heat.

### Chloride salt coolants

Chloride salts could be used as direct reactor coolants, but as far as I'm aware
there are no published concepts that use this. Reactor concepts fueled with a
chloride salt fluid fuel are much more common.

## Gaseous coolants

Blowing or circulating a gas through a nuclear chain reaction to carry the heat
away is a primordial reactor design idea. The benefits include:

- **High temperature capability** --- Since gasses have already boiled, they are
  are the most common coolants of choice for reactors that aim to operate at very
  high temperatures (700 °C and beyond).
- **Good thermal efficiency** --- High temperatures allow improved thermal efficiency
- **Access to better power cycles** --- High temperatures allow direct or
  indirect use of Brayton-cycle power conversion (i.e. gas turbines instead of
  steam turbines). These can be more compact and efficient. They can also maintain
  efficiency over a wide variety of power fractions, crucial for operating
  economically in marine propulsion or in other load-following modes.

On the downside:

- **Low power density** --- Since gas can depressurize rapidly, gas-cooled
  reactors must operate at low power density. Otherwise, the decay/afterglow heat
  rate would be too high and the fission products contained in fuel could escape.
  This ends up making gas-cooled reactors very large per unit power.
- **High pumping power** --- gas cooling requires much higher pumping power per heat
  transfer than other coolant. It's not uncommon for the gas blowers to use
  up 10% of the total reactor power. This offsets the high thermal efficiency
  to a degree.
- **Leaks** --- Gasses have low density. To pick up and transfer appreciable heat, they are
  almost always used in a high pressure arrangement. High pressure leads to
  challenges in leaking and requires pipes and structures strong enough to
  contain it.

Any gas can work, but several have been used and seriously considered.

</div>
</div>

<div class="row">
<div class="col col-12" markdown="1">

<p class="caption"><strong>Table 2.</strong> Pros and cons, and a W'/q heat
transfer metric for several common gaseous reactor coolants
normalized to H at 80 °F, from {% cite el-wakilNuclearPowerEngineering1962 %}
</p>

<table class="table table-striped">
  <tr>
    <th>Gas Coolant</th>
    <th>W'/q @ 600 °F</th>
    <th>Pros</th>
    <th>Cons</th>
    <th>Examples</th>
  </tr>

{% for item in site.data.gas-coolants %}

  <tr>
  <td>{{ item.name }}</td>
  <td>{{ item.wq }}</td>
  <td>{{ item.pros }}</td>
  <td>{{ item.cons }}</td>
  <td>{{ item.examples }}</td>
  </tr>

{% endfor %}

</table>

</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">

Neon has been investigated as an alternate to helium, since it has good nuclear
properties, but it is much harder to pump effectively {% cite
easbyComparisonNeonNeon1976 %}. Argon is more readily available (it's 0.9% of
air), but generates the hazardous airborne isotope, Ar-41, under neutron
irradiation. Methane and ammonia could be good coolants given sufficient
chemical stability in reactor conditions {% cite
el-wakilNuclearPowerEngineering1962 %}.

## Organic coolants

(Coming soon, but until then, watch [this OMRE film]({% link _posts/2024-12-13-organic-moderated-reactor-experiment-film.md %}))

## References

{% bibliography --cited %}

Also, see the Coolants chapter in {% cite roddenAnalysisEssentialNuclear1964 %} for detailed reference
information about coolants.

</div>

</div>
