---
layout: default
title: Nuclear-friendly statements of famous people
description: These famous people have said positive things about nuclear energy
image: /img/quotes/arnold.jpg
byline_extra: Contributions from many on github
byline: true
---
<div class="row">
<div class="col-md-8" markdown="1">

On this page we have a collection of statements made by relatively famous people about
nuclear energy. 
<hr/>
{% comment %}
For sorting, we have lots of options, but we're just going to start
by sorting by the person with the most recent quote. If the person
has multiple quotes, all of them will be shown alongside the most
recent one. This is a PITA in Liquid templates but it is doable,
as you can see below...
{% endcomment %}


{% capture datesandpeople  %}
{%- for person in site.data.quotes -%}
{%- for quote in person.quotes -%}
{{ quote.date }} {{person.name}} , 
{%-endfor-%}
{%-endfor-%}
{% endcapture%}

{% assign datesandpeople = datesandpeople | split: "," | sort |reverse %}

{% comment %}
Now cut the sorted dates off the list (hacky)
{% endcomment %}
{% capture people  %}
{%-for dp in datesandpeople-%}
{{ dp | slice: 10,80 | strip}},
{%-endfor-%}
{% endcapture %}

{% assign names = people | split: "," | uniq %}
{% for name in names %}
{% assign person = site.data.quotes | where: "name", name | first%}
{% assign quotes = person.quotes  %}

<a name="{{person.name|slugify}}"/> 
<h2 class="mb-0">{{ person.name }} <a href="#{{person.name|slugify}}">&#167;</a></h2>
{%- if person.title %}
<h6>{{ person.title }}</h6>
{%- endif -%}
{%- if person.img -%}
<img src="/img/quotes/{{person.img}}" style="max-height:150px;" class="img img-fluid
float-end" alt="Image of {{person.name}}" title="Image of
{{person.name}} {% if person.img_src %}(from {{person.img_src}}){%endif%}"/>
{%- endif %}

{%  for quote in quotes -%}

<figure class="text-start">
  <blockquote class="blockquote">
    <p>{{ quote.quote}}</p>
  </blockquote>
  <figcaption class="text-center blockquote-footer">
    <cite markdown="1" title="Source Title">[{%- if quote.venue -%}{{quote.venue}}, {% endif %}{{ quote.date }}]({{quote.url}})</cite> </figcaption>
</figure>


{% endfor %}
{% endfor %}

<hr />
This page is open source. You can update this page or point us to new
quotes by making an [issue](https://github.com/whatisnuclear/website/issues) or a PR on
[this file](https://github.com/whatisnuclear/website/blob/master/_data/quotes.yml) on our
GitHub, or just by [contacting us]({% link contact.md %}). (We may skip some to keep the
signal to noise high).

## Related collections

* [Who gets it?](https://decarbonisesa.com/about-2/who-gets-it/) by Ben Heard

</div>
</div>
