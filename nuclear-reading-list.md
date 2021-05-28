---
layout: default
title: Nuclear Engineering Reading List
description: Some links to good reading material about nuclear technology
author: Nick Touran
image: /img/u238-capture-fission.png
---
<div class="row">
<div class="col-md-12" markdown="1">

# Nuclear Engineering Reading List
##### By Nick Touran, Ph.D. P.E., 2021-05-24

This is a curated (and open-source) directory of reading material that may be interesting
for people just getting into nuclear technology.

<span class="label label-success">Open source</span> You can [edit this page on github]({{site.github_repo_url}}{{page.path}})

{% for category in site.data.reading %}

## {{ category.category }}

{{ category.description }}

<table class="table table-striped">
<tr><th>Author</th><th>Title</th><th>Description</th></tr>
{%- for item in category.items -%}
<!-- tried using markdown table but no line wrap was killing me -->
<tr>
<td>{{ item.author }}</td>
<td markdown="1">
[{{ item.title }}]({{ url.href }})
</td>
<td markdown="1">
{{ item.description }}
</td>
</tr>
{%- endfor -%}
</table>
{%- endfor -%}


# Other educational websites

* [CANTEACH](https://canteach.candu.org/) --- An epic collection of freely available
  information about CANDU reactors

# Other reading lists

* [Neutron Bytes Nuclear Reading List](https://neutronbytes.com/nuclear-reading-list/) ---
  a good list.

</div>
</div>
