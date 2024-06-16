---
layout: default
title: Digital Nuclear Reactor History Museum
description: Our collection of digitized nuclear reactor historical items
author: nick
image: /img/hallam-fuel.jpg
permalink: /museum/
date: 2024-06-01
---

{% assign items = site.pages | concat: site.news | where_exp: "page", "page.tags contains 'museum'" | sort: 'date'%}
{% assign vids = site.data.videos | where: "win", "true"  | sort: "date" %}
{% assign external = site.data.museum-pieces | sort: "date" %}

<div class="row">

<p>
What Is Nuclear has, through the years, collected, funded, and/or coordinated
the digitization of forgotten and unique nuclear reactor history artifacts in
order to preserve them for educational and archival purposes. This page contains
a list of them all. 
</p>

<h1>Films</h1>

{% for card in vids %}  
{%- capture url -%}
{%- for link in card.links -%}
{%- assign first = link.url|split: ""|first  -%}
{%- if first == "/" -%}
{{ link.url}}
{%- endif -%}
{%- endfor -%}
{% endcapture %}

{%- capture img -%}
{%- if card.image -%}
{{ card.image }}
{%- else -%}
{% assign other =  site.pages | concat: site.news | where_exp: "page", "page.url==url" | first -%}
{{ other.image }}
{%- endif -%}
{% endcapture %}

<div class="card" style="width: 18rem;">
<img src="{{ img }}" class="img-fluid card-img-top" style="max-height: 200px; object-fit: cover" alt="Highlight picture from page">
<div class="card-body">
<h5 class="card-title">{{ card.title }}</h5>
<h6 class="card-subtitle mb-2 text-muted">{{ card.date }}</h6>

<p class="card-text">{{ card.description | truncate: 150}}</p> 
<a href="{{ url }}" class="stretched-link"></a>
</div>
</div>
{% endfor %}

<h1>Other</h1>

<p>In addition to films, we like to collect and scan various pamphlets, booklets, and other things</p>

{% for card in items %}

<div class="card" style="width: 18rem;">
<img src="{{ card.image }}" class="img-fluid card-img-top" style="max-height: 200px; object-fit: cover" alt="Highlight picture from page">
<div class="card-body">
<h5 class="card-title">{{ card.title }}</h5>
<!-- TODO: differentiate posted date from item date
<h6 class="card-subtitle mb-2 text-muted">{{ card.date }}</h6> 
-->
<p class="card-text">{{ card.description | truncate: 150}}</p>
<a href="{{card.url}}" class="stretched-link"></a>
</div>
</div>
{% endfor %}

<h1>Additional</h1>
<p>Some of the things we've collected are posted externally without further commentary</p>

{% for card in external %}

<div class="card" style="width: 18rem;">
<img src="{{ card.image }}" class="img-fluid card-img-top" style="max-height: 200px; object-fit: cover" alt="Highlight picture from item">
<div class="card-body">
<h5 class="card-title">{{ card.title }}</h5>
<h6 class="card-subtitle mb-2 text-muted">{{ card.date }}</h6>
<p class="card-text">{{ card.description | truncate: 150}}</p>
<a href="{{card.url}}" class="stretched-link"></a>
</div>
</div>
{% endfor %}

</div>

## See Also

- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there. If you're interested in helping
  to get some of these scanned, check out [our digitization
  GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
  and/or [contact us]({% link contact.md %})!
