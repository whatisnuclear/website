---
layout: default
title: Nuclear Power Reading List
description: Some links to good reading material about nuclear technology
author: nick
image: /img/kid_in_atom.jpg
byline: true
date: 2021-05-24
last_modified_at: 2024-02-23
reading_time: false
comments: true
---

<div class="row">
<div class="col-md-12" markdown="1">

This is a curated directory of reading material that may be interesting
for people to learn more about nuclear power technology. Free items are
indicated with <span class="badge bg-success">Free!</span>

## Contents

<ul>
{% for category in site.data.reading %}
<li><a href="#{{category.category|slugify}}">{{category.category}}</a></li>
{% endfor %}
</ul>

<span class="badge bg-success">Open source</span> You can contribute to this by
[editing this page on github]({{site.github_repo_url}}/_data/reading.yml)

{% for category in site.data.reading %}

<h2 id="{{category.category|slugify}}">{{ category.category }} <a href="#{{category.category|slugify}}">&#167;</a> </h2>

{{ category.description }}
{% assign sorted = category.items | sort: 'date' | reverse %}

<table class="table table-striped">
<tr><th class="col-md-2">Author</th><th class="col-md-4">Title</th><th class="col-md-1"></th><th class="col-md-5">Description</th></tr>
{%- for item in sorted -%}
<!-- tried using markdown table but no line wrap was killing me -->
<tr>
<td>{{ item.author }}</td>
<td markdown="1">
[{{ item.title }}]({{ item.url }})
</td>
<td>
{% if item.free %}&nbsp;<span class="badge bg-success">Free!</span>{% endif %}
</td>
<td markdown="1">
{{ item.description }}{% if item.date %} ({{ item.date }}){% endif %}
</td>
</tr>
{%- endfor -%}
</table>
<p> <a href="#">&#8593; Top</a> </p>
{%- endfor -%}

# Other educational websites

- [CANTEACH](https://canteach.candu.org/) --- An epic collection of freely available
  information about CANDU reactors

# Other lists

- [Neutron Bytes Nuclear Reading List](https://neutronbytes.com/nuclear-reading-list/) ---
  a good list.
- [Old AEC Videos]({% link old-videos.md %}) ---
  our list of old Atomic Energy Commission videos.

</div>
</div>
