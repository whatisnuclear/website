---
layout: default
title: What is an Advanced Reactor?
description: >
  People and laws mention 'advanced reactors' all the time, which
  are said to have improvements over non-advanced reactors. This
  page breaks down the facets of advancement that are being referred
  to.
author: nick
byline: true
date: 2023-04-16
image: /img/reactor-type-graph.png
---

<div class="row">
<div class="col-md-10" markdown="1">

The term _advanced_ in nuclear is used loosely to mean "reactors that are better
than ones you're worried about". Due to the fact that a [huge number of somewhat
exotic reactor types were built and tested in the 1950s and 1960s]({% link
reactor-history.md %}), the term is somewhat misleading and complex. Depending
on who you talk to, advanced reactors can mean a number of quite different
things:

# Definition 1: Reactors that incorporated hard-learned lessons from the past into the design

These advanced reactors have incorporated real-world, experience-informed lessons learned from
previous versions of any given reactor make into newer, better, more optimized models. They
generally have been built before, have existing supply chains, have licenses from the regulators,
and are sitting around ready for people to purchase them. Examples:

- GEH's Advanced Boiling Water Reactor (ABWR)
- Westinghouse's Advanced Passive 1000 (AP1000)
- KEPCO's Advanced Power Reactor 1400 (APR-1400)

# Definition 2: Reactors that, once built, could theoretically have extended capabilities beyond modern LWRs

These advanced reactors have characteristics designed to enhance the performance beyond the
(already stellar) capabilities of the workhorse reactor fleet of light-water reactors (LWRs).
Such advancements may include:

- Ability to get more energy out of any given mass of nuclear fuel by
  [breeding plutonium or U-233]({% link recycling.md %})
  - [Uranium-Plutonium breeders]({% link fast-reactor.md %})
  - [Thorium-Uranium breeders]({% link thorium.md %})
- Ability to reach higher coolant temperatures to:
  - Have higher heat-to-electricity conversion (thermal efficiency)
  - Supply industrial heat to replace fossil heat sources in hard-to-decarbonize
    chemical/industrial processes
- Remove [afterglow heat]({% link decay-heat.html %}) indefinitely after
  shutdown without any backup power required to improve safety in extreme
  conditions (e.g. large regional power outages). This generally requires
  better connections to ambient heat sinks and/or special coolants like
  liquid metal or molten salt.
- Ability to be constructed without as many schedule delays or cost overruns, e.g.
  by incorporating elements of modular construction
  - Large equipment module built in factory and installed at site (e.g. AP1000 modular construction)
  - Reactor systems built in factory and shipped to site and installed in
    field-constructed buildings (e.g. NuScale SMR)
  - Entire plant systems built in factory and rail/truck shipped to site for turnkey operation
    (e.g. microreactors like the Army's [ML-1](https://en.wikipedia.org/wiki/ML-1))

# _Generation-IV_ vs. _Advanced_

Related to definition 2, in 2000, experts in the international nuclear power
community came together in the Generation-IV International Forum (GIF) to
help guide the industry's path forward. Over 100 experts looked through 130
reactor types proposed and chose [the 6 most promising reactor
types](https://www.gen-4.org/gif/jcms/c_40465/generation-iv-systems) that they
agreed had high potential to reach higher performance in [8 specific technology
goals, listed here](https://www.gen-4.org/gif/jcms/c_40472/technology-goals).

- [GIF project page](https://www.gen-4.org/gif/)
- [GIF Wikipedia page](https://en.wikipedia.org/wiki/Generation_IV_reactor#Generation_IV_International_Forum)

# Advanced _reactors_ vs. advanced reactor _concepts_

The discussion around nuclear reactors types has struggled since the early 1950s
to differentiate between the _purported benefits_ of conceptual reactors and
the _actual performance_ of built-and-operating real reactors. Admiral
Rickover most famously summarized the situation in his [paper reactors
vs. practical reactors memo]({% link rickover.md %}), which sharply criticized
people who promoted the hypothetical benefits of reactors that were not yet built
over reactor projects that were in construction or operation.

In many senses, _advanced reactors_ as used in modern discussions are basically
identical to the _academic reactors_ Rickover referred to way back in 1953.

<hr/>

{% include rickover-memo-excerpt.md %}

<hr/>

Basically, anyone can _say_ that their reactor is way better than others that
people have tried, but there's no reason to believe them even a little until
they can point to one that's operating and show you how well it works. This
is easy to forget in a world with significant VC energy funding.

# Legal definitions of Advanced Reactors

Some countries have written legal definitions of _advanced reactors_ as part of
providing government support to some reactors but not others. For example, the
USA's [Nuclear Energy Innovation and Modernization
Act](https://www.congress.gov/bill/115th-congress/senate-bill/512/text) defines
_advanced nuclear reactors_ as follows:

<div class="card mb-3">
  <div class="card-header text-white bg-success"><strong markdown="1">USA NEIMA's definition of *advanced*</strong></div>
  <div class="card-body" markdown="1">

The term _advanced nuclear reactor_ means a nuclear fission or fusion reactor,
including a prototype plant (as defined in sections 50.2 and 52.1 of title 10,
Code of Federal Regulations (as in effect on the date of enactment of this
Act)), with significant improvements compared to commercial nuclear reactors
under construction as of the date of enactment of this Act, including
improvements such as

- additional inherent safety features;
- significantly lower levelized cost of electricity;
- lower waste yields;
- greater fuel utilization;
- enhanced reliability;
- increased proliferation resistance;
- increased thermal efficiency; or
- ability to integrate into electric and nonelectric applications.
</div>
</div>

</div>
</div>

<div class="row">
<div class="col-12" markdown="1">

# Chart of reactor design choices

As described in the [reactors page]({% link reactors.md %}), there are literally millions of different
types of reactors. Which ones are _advanced_ and which ones are not is pretty subjective.

{% include_relative _reactor-types-mermaid.html %}

</div>
</div>

<div class="row">
<div class="col-md-12" markdown="1">

# Useful reactor metric inputs

Given these, many useful quantities can be computed for comparison, such as
mined uranium and SWUs needed per kWh.

<table class="table table-striped">
<tr>
<th>Metric</th>
<th>Definition</th>
<th>Purpose</th>
<th>Units</th>
<th>Examples</th>
</tr>
{% for section in site.data.metrics %}
<tr>
<td colspan="5" class="text-center fs-3 text-decoration-underline">
{{ section.name }}
</td>
</tr>
{% for metric in section.vals %}
<tr>
<td>{{ metric.name }}</td>
<td>{{ metric.description }}</td>
<td>{{ metric.why }}</td>
<td>{{ metric.units }}</td>
<td>{{ metric.examples }}</td>
</tr>

{% endfor %}
{% endfor %}

</table>

Special thanks to Brett Rampal and Adam Stein for discussing this [with "us"
here](https://twitter.com/whatisnuclear/status/1646927354370068481).

</div>
</div>
