---
layout: default
title: Safety Minutes
description: Get your nuclear safety minutes here
author: nick
date: 2022-09-26
byline: true
permalink: /safety_minutes/
---
<div class="row">
<div class="col-md-8" markdown="1">

You may have heard about safety minutes at nuclear companies, where every
meeting starts with some discussion of safety. Doing this demonstrates that your
organization is laser-focused on safety. 

It's hard to come up with new and useful safety minutes with so many meetings going 
on. Thus, we often end up hearing the same old ones again and again. This is a place
where we can list out a few of our favorites for sharing and collaboration.

<button type="button" class="btn btn-success" onClick="javascript:randomlink()">Click to go to random Safety Minute</button>


# Safety Minute Index
<ul>
{% for minute in site.safety_minutes %}
<li><a href="{{minute.url}}">{{ minute.title }}</a></li>
{% endfor %}
</ul>

# Contributing to the database

To contribute, you can add a file in [this folder on
GitHub](https://github.com/whatisnuclear/website/tree/master/_safety_minutes).
Start by just copying another one. The format is kramdown, which is kind of a
combo of markdown and HTML

</div>
</div>

<script>
// inspired by https://nicolejeanette.me/javascript-random-link-generator/
var random = new Array();
{% for minute in site.safety_minutes %}
random[{{ forloop.index| minus: 1 }}] = "{{- minute.url -}}";
{% endfor %}

function randomlink() {
window.location = random[Math.floor(Math.random()*random.length)];
}
</script>