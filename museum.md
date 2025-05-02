---
layout: default
title: Digital Nuclear Reactor History Museum
description: Our collection of digitized nuclear reactor historical items
author: nick
image: /img/hallam-fuel.jpg
permalink: /museum/
categories:
  - history
date: 2024-06-01
---

{% assign items = site.pages | concat: site.posts | where_exp: "page", "page.tags contains 'museum'" | sort: 'date'%}
{% assign vids = site.data.videos | where: "win", "true"  | sort: "date" %}
{% assign external = site.data.museum-pieces | sort: "date" %}

<div class="row">

<p>
What Is Nuclear has, through the years, collected, funded, and/or coordinated
the digitization of forgotten and unique nuclear reactor history artifacts in
order to preserve them for educational and archival purposes. This page contains
a list of them all.  We have digitized <span class="hit-counter font-monospace
px-2 bg-dark rounded d-inline-block">{{ vids | size }}</span> films and counting.
</p>

<h1>Films</h1>

{% for card in vids %}  
{%- comment -%}Look for announcement page. If there is none, direct link to youtube.{%- endcomment -%}
{%- capture url -%}
{%- for link in card.links -%}
{%- assign first = link.url|split: ""|first  -%}
{%- if first == "/" -%}
{{ link.url}}
{%- endif -%}
{%- endfor -%}
{% endcapture %}
{%- if url==nil or url == "" -%}
{%- assign url = card.links[0].url -%} 
{%- endif -%}


{% assign other =  site.pages | concat: site.posts | where_exp: "page", "page.url==url" | first -%}
{%- capture img -%}
{%- if card.image -%}
{{ card.image }}
{%- elsif other.image != nil and other.image != "" -%}
{{ other.image }}
{%- else -%}
{% assign video_id = card.links[0].url | split: "v=" | last | split: "&" | first %}
https://img.youtube.com/vi/{{ video_id }}/mqdefault.jpg
{%- endif -%}
{% endcapture %}

<div class="card" style="width: 18rem;">
<img src="{{ img }}" class="img-fluid card-img-top" style="max-height: 200px; object-fit: cover" alt="Highlight picture from page">
<div class="card-body">
<p class="h5 mb-0 card-title">{{ card.title }}</p>
<p class="h6 card-subtitle mb-2 text-muted">{{ card.date }}</p>

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
<p class="h5 mb-0 card-title">{{ card.title }}</p>
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
<a href="{{card.url}}" >
<img src="{{ card.image }}" class="img-fluid card-img-top" style="max-height: 200px; object-fit: cover" alt="Highlight picture from item">
</a>
<div class="card-body">
<a href="{{card.url}}" > <p class="h5 mb-0 card-title">{{ card.title }}</p> </a>
<p class="h6 card-subtitle mb-2 text-muted">{{ card.date }}</p>
<p class="card-text">{{ card.description | truncate: 150}}
{%- if card.more -%}
<a href="{{ card.more }}" class="text-muted">More info</a>
{%- endif -%}
</p>
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
