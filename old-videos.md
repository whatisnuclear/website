---
layout: default
title: Historical Nuclear Energy Films
description: A directory of historical nuclear energy films including digitization status and efforts
image: /img/camp-century-pull.jpg
byline: true
author: nick
reading_time: false
comments: true
---

<div class="row">
<div class="col-md-12" markdown="1">
In the olden days, the Atomic Energy Commission and others commissioned dozens
upon dozens of nuclear energy related videos. Many of these have been digitized,
but not all. We've gone through various old catalogs and cross-linked the
entries with digitized copies when possible, as well as with modern catalog
hyperlinks e.g. in the National Archives, where the physical films are housed.
The [list of not-yet-digitized
films](#videos-not-yet-digitized-in-order-of-want) is shown below the list of
already-digitized ones.

We have also learned how to get not-yet-digitized ones that exist in the
National Archives digitized. See [our YouTube channel
here](https://www.youtube.com/@whatisnuclear/videos) and [our Digital Reactor
History Museum]({% link museum.md %}). You can read more about
the process of digitization and see some results at [our ZPPR video page]({%
link _news/2022-12-19-zppr-film-scanned.md %}) and [our announcement of the
world re-premier of a Hallam film]({% link
_news/2023-03-13-hallam-historical-films-scanned.md %}). If you're interested
in helping to get more of these scanned, check out [our digitization
GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
and/or [contact us]({% link contact.md %})!

</div>
</div>

<div class="row">
<div class="col-md-6" markdown="1">
The summary data comes from various catalogs, such as:

- [Energy Video Catalog (ERDA 1975)](https://www.google.com/books/edition/Energy_Films_Catalog/8CKtsJ7XNwcC?hl=en&gbpv=1&dq=%22ATOM+AND+THE+MAN+ON+THE+MOON%22&pg=PA14&printsec=frontcover)
- [AEC 1966-67 directory](https://archive.org/details/combined16mmfilm00usatrich/page/ii/mode/2up)
- [1928-1998 catalog from IAEA](https://inis.iaea.org/collection/NCLCollectionStore/_Public/30/018/30018866.pdf)
- [AEC 1972 Combined Catalog](https://www.google.com/books/edition/Combined_Film_Catalog/Tw0JAQAAMAAJ?hl=en&gbpv=1)

</div>
<div class="col-md-6" markdown="1">
On this page:

<div class="" id="tocContents">
<nav id="TableOfContents" class="section-nav text-muted" markdown="1">
<!-- prettier-ignore -->
* Dummy list
{:toc}
</nav>
</div>

</div>
</div>
<div class="row">
<div class="col-md-12" markdown="1">

{% assign vids_gotten = site.data.videos | where: "priority", empty  %}
{% assign vids_wanted = site.data.videos | where_exp: "item", "item.priority > 0" %}

{% assign grouped_wanted = vids_wanted | group_by: 'priority' %}
{% assign prioritiesSorted = grouped_wanted | sort: "name" %}

{% assign sorted_wanted= '' | split: '' %}
{% for pri in prioritiesSorted %}
{% assign sorted_this_pri = pri.items | sort: 'date' %}
{% assign sorted_wanted = sorted_wanted | concat: sorted_this_pri %}
{% endfor %}

# Videos that have been digitized

These films have been scanned and can be viewed online now.

{% include table_of_vids.liquid vids=vids_gotten%}

# Videos not yet digitized in order of want

The ones with non-blank NARA IDs are readily available for scanning given funding.

<a name="wantlist"></a>

{% include table_of_vids.liquid vids=sorted_wanted %}

# Title Index

{% assign vids_sorted = site.data.videos | sort: "title" %}
{% assign half = site.data.videos.size | divided_by: 2 %}

<div class="row">
<div class="col-md-6">
<ul>
{% for vid in  vids_sorted %} 
{% if forloop.index <= half %}
<li><a href="#{{ vid.title|slugify }}">{{vid.title}}</a></li>
{% endif %} 
{% endfor %} 
</ul>
</div>
<div class="col-md-6">
<ul>
{% for vid in  vids_sorted %} 
{% if forloop.index > half %}
<li><a href="#{{ vid.title|slugify }}">{{vid.title}}</a></li>
{% endif %}
{% endfor %}
</ul>
</div>
</div>

# Contribute data

The data on this page is generated from <a
href="https://github.com/whatisnuclear/website/blob/master/_data/videos.yml">this
data file</a>. You are encouraged to find full data there and suggest changes,
corrections, or additions.

# See Also

- [Our Digital Reactor History Museum]({% link museum.md %})

## Related catalogs

- [A collection of hundreds of more related videos at the National Archives](https://catalog.archives.gov/search-within/88086).
- [Our nuclear reading list]({% link nuclear-reading-list.md %}).
- [ANL's video channel, with lots of reactor videos](https://www.youtube.com/@ArgonneNuclear/videos)
- [miSci's video channel, which has lots of old GE videos](https://www.youtube.com/@SchdyInventTech/videos)

</div>
</div>
