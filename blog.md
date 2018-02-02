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
<h5>{{ post.date|date_to_string }}</h5> 
{{ post.description}}
<hr/>
{% endfor %}
-
<a href="/index.html" class="btn btn-info" role="button">&#10094; Main Page</a>
