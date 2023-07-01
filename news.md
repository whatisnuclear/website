---
layout: default
title: News and posts
description: >
  News and tweet-like posts from whatisnuclear.
permalink: /news/
image: /img/dc_cook.jpg
---

<div class="row">
<div class="col-md-8" markdown="1">

<ul>
{% assign sorted = site.news | sort: 'date' | reverse %}
{% for news in sorted %}
<li><a href="{{news.url}}">{{news.date| date: "%Y-%m-%d" }} {{ news.title }}</a></li>
{% endfor %}
</ul>

</div>
</div>
