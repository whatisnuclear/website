---
layout: default
title: Nuclear Power Plants
category: technology
description: Nuclear reactors are machines that convert energy stored in atoms into heat or electricity. This page explains what comprises such a device, touches on how they work, and discusses several different varieties. 
author: Nick Touran
---

<div class="row">

<div class="col-md-12" markdown="1">

## What is a nuclear reactor?

<div class="pull-right"><img src="/img/dccook.jpg" alt="A nuclear power plant." style="max-width:300px;" class="img-rounded img-responsive" title="A nuclear power plant." /></div>

A nuclear reactor is a system that contains and controls sustained nuclear chain reactions. Reactors are used for generating 
electricity, moving aircraft carriers and submarines, producing medical isotopes for imaging and cancer treatment, 
and for conducting research. 
     
Fuel, made up of heavy atoms that split when they absorb neutrons, is placed into the reactor vessel (basically a 
large tank) along with a small neutron source. The neutrons start a chain reaction where each atom that splits 
releases more neutrons that cause other atoms to split. Each time an atom splits, it releases large amounts of 
energy in the form of heat. The heat is carried out of the reactor by coolant, which is most commonly just plain 
water. The coolant heats up and goes off to a turbine to spin a generator or drive shaft.
**Nuclear reactors are just exotic heat sources.**

#### On this page

* [Components of nuclear reactors](#components)
* [Animated reactor system](#animated)
* [The nuclear core](#core)
* [Types of nuclear reactors](#types)

</div>
</div>

<div class="row">
<div class="col-md-6" markdown="1">
<a name="components"></a>

## Main components

* **The core** of the reactor contains all of the nuclear fuel and generates all of the heat. It contains 
  low-[enriched]({% link isotopes.md %}#enrichment) uranium (&lt;5% U-235), control systems, and 
  structural materials. The core can contain hundreds of thousands of individual fuel pins.

* **The coolant** is the material that passes through the core, transferring the heat from the fuel 
  to a turbine. It could be water, heavy-water, liquid sodium, helium, or something else. In the 
  US fleet of power reactors, water is the standard. 

* **The turbine** transfers the heat from the coolant to electricity, just like in a fossil-fuel plant. 

* **The containment** is the structure that separates the reactor from the environment. These are 
  usually dome-shaped, made of high-density, steel-reinforced concrete. Chernobyl did not have a 
  containment to speak of. 

* **Cooling towers** are needed by some plants to dump the excess heat that cannot be converted 
  to energy due to the laws of thermodynamics. These are the hyperbolic icons of nuclear energy. 
  They emit only clean water vapor. 

</div>
<div class="col-md-6" markdown="1">
                
## The control room

<p><img src="/img/simulator.jpg" class="img-rounded img-responsive" alt="A training simulator (exact replica) of a control room." title="A training simulator (exact replica) of a control room."/></p>
</div>
       
</div>
<hr/>

<div class="row">
<div class="col-md-8" markdown="1">
<a name="animated"></a>
## Animated reactor system

<img class="img-thumbnail center-block img-responsive" src="/img/nrc-pwr-opt.gif" alt="A nice animation of a nuclear reactor from the NRC." title="A nice animation of a nuclear reactor from the NRC."/>
       
The image above (reproduced from [the NRC](https://www.nrc.gov)) shows a nuclear reactor heating up water and spinning 
a generator to produce electricity. It captures the essence of the system well. The water coming into the condenser 
and then going right back out would be water from a river, lake, or ocean. It goes out the cooling towers. As you 
can see, this water does not go near the radioactivity, which is in the reactor vessel.

</div>
  
</div>
<hr/>
<div class="row">
<a name="core"></a><div class="col-md-4" markdown="1">


### Fuel pins
<img class="img-thumbnail center-block img-responsive" src="/img/hex_pin_labels.png" alt="A fuel pin" title="A fuel pin" />
The smallest unit of the reactor is the fuel pin. These are typically uranium-oxide (UO<sub>2</sub>), 
but can take on other forms, including <a href="{% link thorium.md %}">thorium</a>-bearing material. 
They are often surrounded by a metal tube (called the cladding) to keep fission products from escaping 
into the coolant.

</div>
<div class="col-md-4" markdown="1">

<h3 class="text-center">Fuel assembly</h3>
<img class="img-thumbnail center-block img-responsive" src="/img/hex_assembly.gif" alt="A fuel assembly" title="A fuel assembly" />
Fuel assemblies are bundles of fuel pins. Fuel is put in and taken out of the reactor in assemblies. 
The assemblies have some structural material to keep the pins close but not touching, 
so that there's room for coolant.
</div>

<div class="col-md-4" markdown="1">
<h3 class="text-center">Full core</h3>
<img class="img-thumbnail center-block img-responsive" src="/img/hex_core2.gif" alt="A full core" title="A full core" />
This is a full core, made up of several hundred assemblies. Some assemblies are control assemblies. 
Various fuel assemblies around the core have different fuel in them. They vary in [enrichment]({% link isotopes.md %}#enrichment) 
and age, among other parameters. The assemblies may also vary with height, with different enrichments 
at the top of the core from those at the bottom.
</div>
</div>
    
<div class="row" id="types">
<div class="col-md-8" markdown="1">
## Types of Reactors
There are many different kinds of nuclear fuel forms and cooling materials can be used in a nuclear 
reactor. As a result, there are thousands of different possible nuclear reactor designs. Here, 
we discuss a few of the designs that have been built before, but don't limit your 
imagination; over a million other reactor designs are possible. Dream up your own! Or, for fun you
can try our [Random Reactor Concept Generator](./random) or see a list of over a million
options.
</div>
</div>

<div class="row">
<div class="col-md-6" markdown="1"> 

### Pressurized Water Reactor

The most common type of reactor. The PWR uses regular old water as a coolant. The primary cooling 
water is kept at very high pressure so it does not boil. It goes through a heat exchanger, 
transferring heat to a secondary coolant loop, which then spins the turbine. These use oxide 
fuel pellets stacked in zirconium tubes. They could possibly burn [thorium]({% link thorium.md %})
 or plutonium fuel as well.

#### Pros:
* Strong negative void coefficient &mdash; reactor cools down if water starts bubbling 
  because the coolant is the [moderator]({% link moderation.html %}), which is required to sustain 
  the chain reaction

* Secondary loop keeps [radioactive]({% link radioactivity.md %}) stuff away from turbines, 
  making maintenance easy.

* Very much operating experience has been accumulated and the designs and procedures have 
  been largely optimized.

#### Cons:
* Pressurized coolant escapes rapidly if a pipe breaks, necessitating lots of back-up cooling systems.
* Can't [breed new fuel]({% link recycling.md %}) &mdash; susceptible to &quot;uranium shortage&quot;

</div>
<div class="col-md-6" markdown="1">

### Boiling Water Reactor
Second most common, the BWR is similar to the PWR in many ways. However, they only have one coolant 
loop. The hot nuclear fuel boils water as it goes out the top of the reactor, where the steam 
heads over to the turbine to spin it.

#### Pros:
* Simpler plumbing reduces costs
* Power levels can be increased simply by speeding up the jet pumps, giving less boiled water and 
  more moderation. Thus, load-following is simple and easy. 
* Very much operating experience has been accumulated and the designs and procedures have been largely optimized.

#### Cons:
* With liquid and gaseous water in the system, many weird transients are possible, making safety analysis difficult
* Primary coolant is in direct contact with turbines, so if a fuel rod had a leak, radioactive material could 
  be placed on the turbine. This complicates maintenance as the staff must be dressed for radioactive environments.
* Can't breed new fuel &mdash; susceptible to "uranium shortage"
* Does not typically perform well in station blackout events, as in Fukushima.

</div>
</div>

<div class="row">
<div class="col-md-6" markdown="1">

### Canada Deuterium-Uranium Reactors (CANDU)

CANDUs are a Canadian design found in Canada and around the world. They contain *heavy water*, 
where the Hydrogen in H2O has an extra neutron (making it Deuterium instead of Hydrogen). 
Deuterium absorbs many fewer neutrons than Hydrogen, and CANDUs can operate using only 
natural uranium instead of enriched.

#### Pros:

* Require very little uranium [enrichment]({% link isotopes.md %}#enrichment).
* Can be refueled while operating, keeping capacity factors high (as long as the fuel handling machines don't break).
* Are very flexible, and can use any type of fuel.

#### Cons
* Some variants have positive coolant temperature coefficients, leading to safety concerns.
* Neutron absorption in deuterium leads to tritium production, which is radioactive and often leaks in small quantities.
* Can theoretically be modified to produce weapons-grade plutonium slightly faster than conventional reactors could be.

#### See Also
* [CANTEACH](https://betacanteach.candu.org/Pages/Welcome.aspx) --- The most comprehensive
  public domain educational and reference library on CANDU technology.

</div>
<div class="col-md-6" markdown="1">
### Sodium Cooled Fast Reactor

These reactors are cooled by liquid sodium metal. Sodium is heavier than hydrogen, a fact that leads to the 
neutrons moving around at higher speeds (hence *fast*). These can use metal or oxide fuel, and burn a wide 
variety of fuels.

#### Pros:
* Can breed its own fuel, effectively eliminating any concerns about uranium shortages 
  (see [what is a fast reactor?]({% link fast-reactor.html %}))
* Can burn its own waste
* Metallic fuel and excellent thermal properties of sodium allow for passively safe operation &mdash; 
  the reactor will shut itself down safely without any backup-systems working (or people around), 
  only relying on physics.
        
#### Cons:
* Sodium coolant is reactive with air and water. Thus, leaks in the pipes results in sodium fires.
  These can be engineered around but are a major setback for these reactors.
* To fully burn waste, these require reprocessing facilities which can also be used for 
  [nuclear proliferation]({% link non-proliferation.md %}).
* The excess neutrons used to give the reactor its resource-utilization capabilities could 
  clandestinely be used to make plutonium for weapons. 
* Positive void coefficients are inherent to most fast reactors, especially large ones. 
  This is a safety concern.
* Not as much operating experience has been accumulated. We have only about 300 reactor-years 
  of experience with sodium cooled reactors.

</div>
</div>
<div class="row">
<div class="col-md-6" markdown="1"> 

### Molten Salt Reactor
<span class="label label-success">Update!</span> There is now a [full page discussing MSRs in detail]({% link msr.md %}).
Molten Salt Reactor's (MSRs) are the internet's favorite reactor. They are unique so far in that they use fluid fuel.

#### Pros:

* Can constantly [breed new fuel]({% link recycling.md %}), eliminating concerns over energy resources
* Can make excellent use of [thorium]({% link thorium.md %}), an alternative nuclear fuel to uranium
* Can be maintained online with chemical fission product removal, eliminating the need to shut down during refueling. 
* No cladding means less neutron-absorbing material in the core, which leads to better neutron efficiency and thus higher fuel utilization
* Liquid fuel also means that structural dose does not limit the life of the fuel, allowing the reactor to extract very 
  much energy out of the loaded fuel.

#### Cons:

* Radioactive gaseous fission products are not contained in small pins, as they are in typical reactors. 
  So if there is a containment breach, all the fission gases can release instead of just the gases 
  from one tiny pin. This necessitates things like triple-redundant containments, etc. and can be handled.

* The presence of an online reprocessing facility with incoming pre-melted fuel is a [proliferation]({% link non-proliferation.md %})
  concern. The operator *could* divert Pa-233 to provide a small stream of nearly pure weapons-grade U-233. 
  Also, the entire uranium inventory can be separated without much effort. In his autobiography, Alvin Weinberg 
  explains how this was done at Oak Ridge National Lab: "It was a remarkable feat! In only 4 days all of the 
  218 kg of uranium in the reactor were separated from the intensely radioactive fission products and its 
  radioactivity reduced five billion-fold." 

* Very little operating experience, though a successful test reactor was operated in the 1960s

</div>
<div class="col-md-6" markdown="1">
        
### High Temperature Gas Cooled Reactor

HTGRs use little pellets of fuel backed into either hexagonal compacts or into larger pebbles (in the prismatic 
and pebble-bed designs). Gas such as helium or carbon dioxide is passed through the reactor rapidly to cool it. 
Due to their low power density, these reactors are seen as promising for using nuclear energy outside of 
electricity: in transportation, in industry, and in residential regimes. They are not particularly good 
at just producing electricity.

#### Pros:
* Can operate at very high temperatures, leading to great thermal efficiency (near 50%!) and the ability 
  to create process heat for things like oil refineries, water desalination plants, hydrogen fuel cell 
  production, and much more. 
* Each little pebble of fuel has its own containment structure, adding yet another barrier between 
  radioactive material and the environment.

#### Cons:
* High temperature has a bad side too. Materials that can stay structurally sound in high temperatures 
  and with many neutrons flying through them are hard to come by. 
* If the gas stops flowing, the reactor heats up very quickly. Backup cooling systems are necessary.
* Gas is a poor coolant, necessitating large amounts of coolant for relatively small amounts of power. 
  Therefore, these reactors must be very large to produce power at the rate of other reactors.
* Not as much operating experience

</div>
</div>

