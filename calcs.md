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

</div>
</div>

{% capture imgs  %}
{%- for calc in site.calcs -%}
{{ calc.image }},
{%-endfor-%}
{% endcapture%}

{% assign imgs = imgs|split:","|uniq |compact %}


<div class="dense">

<div class="row">
<div class="col-lg-8" markdown="1">

{% for calc in site.calcs %}
**[{{ calc.title }}]({{ calc.url }})**
<ul>
{% for factlet in calc.factlets %}
<li>{{ factlet }}</li>
{% endfor %}
</ul>
{% endfor %}

Have a good idea for a new factlet? [Contact us!]({% link contact.md %})

</div>

<div class="col-lg-4" markdown="1">
{% for img in imgs %}
<p>
<img class="img-fluid rounded p-1" src="{{ img }}"/>
</p>
{% endfor %}
</div>


</div>
</div>
