---
layout: default
title: Nuclear Reactor Consumer Labels
description: >
  We should collect and display reactor data in 'Nutrition Facts'
  format to improve accuracy, standardization, and clarity
author: nick
image: /img/reactor-nutrition-labels.png
byline: true
---

<div class="row">
<div class="col-md-8" markdown="1">

Reactor discussions can be best held if you know some things about
the reactors being discussed. I'm hereby proposing that we start using
standardized Nuclear Reactor Consumer Labels to display information
about reactors.

Nutrition facts on cereal boxes are governed by the Nutrition Labeling and
Education Act of 1990, codified in 21 CFR 101.9. They're standardized and
useful. In fact, they're so useful that the Broadband Label Order, codified in [47 CFR
8.2](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-8/subpart-A/section-8.2)
require internet service providers to display Broadband Consumer Labels, often
called broadband nutrition labels. These provide clear, standardized, and
accurate information.

Thus, it'd be nice if we had Nuclear Reactor Consumer Labels as well! See
[Useful reactor data]({% link advanced-reactors.md %}#useful-reactor-data) on
our advanced reactor page for definitions of the fields.

Taxpayers, investors, and other stakeholders involved in reactor development
programs should certainly **demand at least this amount of basic information**
from prospective reactor vendors. This information is extremely basic and
contains nothing beyond a general definition of what the reactor at hand even
is. There's nothing proprietary or export controlled about any of this
information. If a reactor vendor does not provide this information, I would
generally recommend you not invest or support them.

</div>
<div class="col-md-2" markdown="1">

{% assign pwr = site.data.reactors[0] %}
{% include reactor_facts.liquid data=pwr %}

</div>
</div>
