---
layout: default
title: Nuclear energy factlets and calculations
description: >
  A collection of nuclear-energy related calculations with references.
author: nick
image: /img/equations-wow.png
date: 2023-04-29
byline: false
permalink: /calcs/
# this should replace the factoids page. 
---
<div class="row">
<div class="col-md-8" markdown="1">

Here are a number of interesting factlets about nuclear energy, including details of the calculations.

<ul class="dense">
{% for calc in site.calcs %}
<li markdown="1">
**[{{ calc.title}}]({{calc.url}})**
<ul>
{% for factlet in calc.factlets %}
<li>{{ factlet }}</li>
{% endfor %}
</ul></li>
{% endfor %}
</ul>

Have a good idea for a new factlet? [Contact us!]({% link contact.md %})

</div>
</div>
