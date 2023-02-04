---
layout: default
title: Nuclear Energy Songs
description: Our favorite anti-nuclear and pro-nuclear energy songs.
image: /img/songs.jpg
---
<div class="row">
<div class="col-md-8" markdown="1">

Here are some pro- and anti-nuclear energy songs. There are far more
nuclear war songs than nuclear energy ones, but we tried to limit
these to just the ones about nuclear energy. Though a few war ones
slipped in anyway...

<hr/>

<h3>Contents</h3>
<ul>
{% for section in site.data.songs %}
<li>
<a href="#{{section.category|slugify}}">{{ section.category }}</a>
</li>
{% endfor %}
<li><a href="#related-collections">Other lists</a></li>
</ul>

{% for section in site.data.songs %}
<h1 id="{{section.category|slugify}}">{{section.category}} <a href="#{{section.category|slugify}}">&#167;</a></h1>
<p>{{section.description}}</p>

{% for song in section.songs %}

<h2 id="{{song.title|slugify}}" class="mb-0">{{song.artist }} - {{ song.title }} ({{song.date}}) <a href="#{{song.title|slugify}}">&#167;</a></h2>
<p>{{song.description}}</p>

<div class="container text-center my-0 ratio ratio-16x9">
<iframe src="{{song.url}}"
title="{{song.title}}"  allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>
{% endfor %}
<hr />
{% endfor %}

This page is open source. You can update this page or point us to new
quotes by making an [issue](https://github.com/whatisnuclear/website/issues) or a PR on
[this file](https://github.com/whatisnuclear/website/blob/master/_data/songs.yml) on our
GitHub, or just by [contacting us]({% link contact.md %}). (We may skip some to keep the
signal to noise high).

## Related collections

* [Top Ten Anti-nuclear songs](https://www.thenation.com/article/archive/top-ten-antinuclear-songs/)
* [Nuclear Energy Music](https://www.youtube.com/playlist?list=PLesFeXhnN6U3SWv2cNEYh1RonXIXjXUjz) -- A whole youtube playlist of pro-nuclear songs

</div>
</div>
