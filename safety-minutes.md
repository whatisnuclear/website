---
layout: default
title: Safety Minutes
description: >
    You may have heard about safety minutes at nuclear companies, where every
    meeting starts with some discussion of safety. Doing this demonstrates that your
    organization is laser-focused on safety. You can get a random safety minute here.
    Please feel free to contribute your favorite.
date: 2022-09-26
byline: true
permalink: /safety-minutes/
image: /img/nuclear-safety-minute.png
---
<div class="row">
<div class="col-md-8" markdown="1">

You may have heard about safety minutes at nuclear companies, where every
meeting starts with some discussion of safety. Doing this demonstrates that your
organization is laser-focused on safety. 

Safety minutes don't have to just be about nuclear safety. They can be about
household safety or emergency preparedness too. 

It's hard to come up with new and useful safety minutes with so many meetings going 
on. Thus, we often end up hearing the same old ones again and again. 

This is a place
where we can list out a few of our favorites for sharing and collaboration.

<button type="button" class="btn btn-success" onClick="javascript:randomlink()"><i class="fas fa-dice"></i> Random Safety Minute</button>


# Listing of all Safety Minutes
<ul>
{% for minute in site.safetyminutes %}
<li><a href="{{minute.url}}">{{ minute.title }}</a></li>
{% endfor %}
</ul>

# Contributing to the database

To contribute, you can add a file in [this folder on
GitHub](https://github.com/whatisnuclear/website/tree/master/_safetyminutes).
Start by just copying another one. The format is kramdown, which is kind of a
combo of markdown and HTML

</div>
</div>

<script>
// inspired by https://nicolejeanette.me/javascript-random-link-generator/
var random = new Array();
{% for minute in site.safetyminutes %}
random[{{ forloop.index| minus: 1 }}] = "{{- minute.url -}}";
{% endfor %}

function randomlink() {
window.location = random[Math.floor(Math.random()*random.length)];
}
</script>