---
layout: default
title: Nuclear Power Reading List
description: Some links to good reading material about nuclear technology
author: Nick Touran
image: /img/kid_in_atom.jpg
---
<a name="top"/>
<div class="row">
<div class="col-md-12" markdown="1">

# Nuclear Power Reading List
##### By Nick Touran, Ph.D. P.E., 2021-05-24, updated 2022

This is a curated directory of reading material that may be interesting
for people to learn more about nuclear power technology.

## Contents

<ul>
{% for category in site.data.reading %}
<li><a href="#{{category.category|slugify}}">{{category.category}}</a></li>
{% endfor %}
</ul>

<span class="label label-success">Open source</span> You can contribute to this by
[editing this page on github]({{site.github_repo_url}}/_data/reading.yml)

{% for category in site.data.reading %}

## <a name="{{category.category|slugify}}"/>{{ category.category }} <a href="#{{category.category|slugify}}">&#167;</a>

{{ category.description }}

<table class="table table-striped">
<tr><th class="col-md-2">Author</th><th class="col-md-4">Title</th><th class="col-md-6">Description</th></tr>
{%- for item in category.items -%}
<!-- tried using markdown table but no line wrap was killing me -->
<tr>
<td>{{ item.author }}</td>
<td markdown="1">
[{{ item.title }}]({{ item.url }})
</td>
<td markdown="1">
{{ item.description }}{% if item.date %} ({{ item.date }}){% endif %}
</td>
</tr>
{%- endfor -%}
</table>
<p> <a href="#top">&#8593; Top</a> </p>
{%- endfor -%}


# Other educational websites

* [CANTEACH](https://canteach.candu.org/) --- An epic collection of freely available
  information about CANDU reactors

# Other reading lists

* [Neutron Bytes Nuclear Reading List](https://neutronbytes.com/nuclear-reading-list/) ---
  a good list.

</div>
</div>
