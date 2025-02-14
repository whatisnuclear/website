---
layout: default
title: Blog
category: blog
description: Some blog posts
permalink: /blog/
---

<div class="row">
<div class="col-md-8" markdown="1">

# Whatisnuclear Blog

Here you'll find blog posts, sometimes from guest posters, on various relevant topics.

{% for post in site.posts %}

<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p class="h5 mb-0">{{ post.date|date_to_string }}</p> 
{{ post.description}}
<hr/>
{% endfor %}

<a href="/" class="btn btn-info" role="button">&#10094; Main Page</a>
