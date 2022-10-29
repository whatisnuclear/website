---
layout: default
title: Nuclear Songs
description: Our favorite anti-nuclear and pro-nuclear songs.
image: /img/songs.jpg
---
<div class="row">
<div class="col-md-8" markdown="1">

Here are some pro- and anti-nuclear power songs. There are far more
nuclear war songs than nuclear power ones, but we tried to limit
these to just the ones about nuclear power.

<hr/>


{% for song in site.data.songs %}

<a name="{{song.title|slugify}}"/> 
<h2 class="mb-0">{{song.artist }} - {{ song.title }} ({{song.date}}) <a href="#{{song.title|slugify}}">&#167;</a></h2>
{% if song.anti %} <span class="badge bg-danger">Anti-nuclear</span> {% endif %}
<p>{{song.description}}</p>

<iframe width="560" height="315" src="{{song.url}}"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
<hr />
{% endfor %}

This page is open source. You can update this page or point us to new
quotes by making an [issue](https://github.com/whatisnuclear/website/issues) or a PR on
[this file](https://github.com/whatisnuclear/website/blob/master/_data/songs.yml) on our
GitHub, or just by [contacting us]({% link contact.md %}). (We may skip some to keep the
signal to noise high).

## Related collections

* [Top Ten Anti-nuclear songs](https://www.thenation.com/article/archive/top-ten-antinuclear-songs/)

</div>
</div>
