---
layout: default
title: Old Nuclear Energy Videos
description: A directory of old nuclear energy videos including digitization status and efforts
image: /img/zppr-thumb.jpg
byline: true
---
<div class="row">
<div class="col-md-12" markdown="1">
In the olden days, the Atomic Energy Commission and other commissioned dozens
upon dozens of nuclear energy related videos. Many of these have been digitized,
but not all. We have been working to get a few digitized and are always looking
for people who would like to help fund more digitizations. 

# Old Video Directory

Summary data from various catalogs, such as:

* [Energy Video Catalog (ERDA 1975)](https://www.google.com/books/edition/Energy_Films_Catalog/8CKtsJ7XNwcC?hl=en&gbpv=1&dq=%22ATOM+AND+THE+MAN+ON+THE+MOON%22&pg=PA14&printsec=frontcover)
* [1965 directory](https://archive.org/details/16mmfilmcombined00usatrich/mode/2up?view=theater)

<table class="table table-striped">
<tr>
<th>Title</th>
<th>National Archives ID</th>
<th>Date</th>
<th>Length</th>
<th>Color</th>
<th>Description</th>
<th>Status</th>
<th>Notes</th>
<th>Links</th>
</tr>

{% for vid in site.data.videos %}

<tr>

<td>{{ vid.title }}</td>
<td markdown="1">

{% if vid.naid %}
[{{ vid.naid }}](https://catalog.archives.gov/id/{{ vid.naid }})
{% else %}
Not in archives
{% endif %}

</td>
<td>{{ vid.date }}</td>
<td>{{ vid.length }} mins</td>
<td>{{ vid.color }}</td>
<td>{{ vid.description|truncate: 600 }}</td>
<td>{{ vid.status }}</td>
<td>{{ vid.notes }}</td>
<td markdown="1">

{% if vid.links %}
{% for link in vid.links %}
[{{ link.name }}]({{ link.url }}) 
{% if link.notes %}
({{ link.notes }})
{% endif %}
{% endfor %}
{% endif %}

</td>
</tr>

{% endfor %}
</table>


## See Also

* [Our announcement of the world re-premier of a Hallam film ]({% link _news/2023-03-13-hallam-historical-films-scanned.md %}).
* [Our ZPPR video page]({% link zppr.md %}).
</div>
</div>
