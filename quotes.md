---
layout: default
title: What famous people say about nuclear
description: These famous people have said positive things about nuclear energy
author: Nick Touran
image: /img/quotes/arnold.jpg
---
<div class="row">
<div class="col-md-8" markdown="1">

# Nuclear-friendly statements of famous people
On this page we have a collection of statements made by relatively famous people about
nuclear energy. 
<hr/>

{% assign quotes = site.data.quotes | sort: "date" | reverse %}
{%  for quote in quotes -%}
<h2>{{ quote.name }}</h2>
{% if quote.img %}
<img src="/img/quotes/{{quote.img}}" style="max-height:150px;" class="img img-responsive
pull-right" alt="Image of {{quote.name}}" title="Image of
{{quote.name}} {% if quote.img_src%}(from {{quote.img_src}}){%endif%}"/>
{% endif%}
{% if quote.title %}
<h5><em>{{quote.title }}</em></h5>
{%endif%}
<h5 markdown="1">[{%- if quote.venue -%}{{quote.venue}}, {%endif%}{{ quote.date }}]({{quote.url}})</h5>


> {{ quote.quote}}

{% endfor %}

<hr />
This page is open source. You can update this page or point us to new
quotes by making an [issue](https://github.com/whatisnuclear/website/issues) or a PR on
[this file](https://github.com/whatisnuclear/website/blob/master/_data/quotes.yml) on our
GitHub, or just by [contacting us]({% link contact.md %}). (We may skip some to keep the
signal to noise high).


</div>
</div>
