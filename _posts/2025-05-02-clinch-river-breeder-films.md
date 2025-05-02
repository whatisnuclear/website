---
layout: news
title: The Clinch River Breeder Reactor Project films
author: nick
categories:
  - news
tags: reactors, history
description: >
  We found 27 films about the Clinch River Breeder Reactor Plant Project
  and started digitizing them.
byline: true
tags: museum
image: /img/crbrp/CRBRP-site_sm.jpg
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

The Clinch River Breeder Reactor Plant (CRBRP) Project was a massive US-government
nuclear reactor development project that aimed to build a prototype fast-neutron
breeder reactor. The project ran from around 1969 to 1983 when it was defunded. 
A large amount of equipment was fabricated and delivered, though the plant
was never built.

Aalo Atomics approached me looking to sponsor some sodium-related films. I had
just recently found a collection of 27 CRBRP-related films in the archive index,
and Aalo agreed to sponsor a batch of 12. They turned out great, so Aalo
sponsored 7 more (coming soon!). Huge thanks to Matt, Yasir, and the rest of the
team at Aalo for making these happen.

These are all on 3/4" U-matic video cassette format, so the resolution
is a lot less than the 16mm films we've scanned in the past.
</div>
</div>

<div class="row">
<div class="col-12" markdown="1">

{% assign vids = site.data.videos | where: "win", "true"  | where: "tags", "crbrp" | sort: "date" %}

## CRBRP films

<div class="row">

{% for card in vids %}  

{% assign video_id = card.links[0].url | split: "v=" | last | split: "&" | first %}

<div class="card" style="width: 18rem;">
<img src="https://img.youtube.com/vi/{{ video_id }}/mqdefault.jpg" class="img-fluid card-img-top" style="max-height: 200px; object-fit: cover" alt="Highlight picture from page">
<div class="card-body">
<p class="h5 mb-0 card-title">{{ card.title }}</p>
<p class="h6 card-subtitle mb-2 text-muted">{{ card.date }}</p>

<p class="card-text">{{ card.description | truncate: 150}}</p> 
<a href="{{ card.links[0].url }}" target="_blank" class="stretched-link"></a>
</div>
</div>
{% endfor %}

</div>


## See Also

* [CRBRP info packet]({% link crbrp-info-packet.md %})

</div>
</div>
