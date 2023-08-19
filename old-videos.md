---
layout: default
title: Old Nuclear Energy Videos
description: A directory of old nuclear energy videos including digitization status and efforts
image: /img/camp-century-pull.jpg
byline: true
author: nick
reading_time: false
comments: true
---

<div class="row">
<div class="col-md-12" markdown="1">
In the olden days, the Atomic Energy Commission and other commissioned dozens
upon dozens of nuclear energy related videos. Many of these have been digitized,
but not all. The [list of not-yet-digitized
ones](#videos-not-yet-digitized-in-order-of-want) is shown below the list of
already-digitized ones.  We have been working to get a few digitized.  You
can read more about the process of digitization and see some results at [our
ZPPR video page]({% link _news/2022-12-19-zppr-film-scanned.md %}) and [our
announcement of the world re-premier of a Hallam film]({% link
_news/2023-03-13-hallam-historical-films-scanned.md %}).
If you're interested in helping to get more of these scanned, check out [our
digitization
GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
and/or [contact us]({% link contact.md %})!

</div>
</div>

<div class="row">
<div class="col-md-6" markdown="1">
The summary data comes from various catalogs, such as:

- [Energy Video Catalog (ERDA 1975)](https://www.google.com/books/edition/Energy_Films_Catalog/8CKtsJ7XNwcC?hl=en&gbpv=1&dq=%22ATOM+AND+THE+MAN+ON+THE+MOON%22&pg=PA14&printsec=frontcover)
- [1965 directory](https://archive.org/details/16mmfilmcombined00usatrich/mode/2up?view=theater)
- [1928-1998 catalog from IAEA](https://inis.iaea.org/collection/NCLCollectionStore/_Public/30/018/30018866.pdf)

</div>
<div class="col-md-6" markdown="1">
On this page:

<div class="" id="tocContents">
<nav id="TableOfContents" class="section-nav text-muted" markdown="1">
* Dummy list
{:toc}
</nav>
</div>

</div>
</div>
<div class="row">
<div class="col-md-12" markdown="1">

{% assign vids_gotten = site.data.videos | where: "priority", empty  %}
{% assign vids_gotten_win = vids_gotten | where: "win", "true"  | sort: "date" %}
{% assign vids_gotten_other = vids_gotten | where: "win", empty  | sort: "date" %}
{% assign vids_wanted = site.data.videos | where_exp: "item", "item.priority > 0" %}

{% assign grouped_wanted = vids_wanted | group_by: 'priority' %}
{% assign prioritiesSorted = grouped_wanted | sort: "name" %}

{% assign sorted_wanted= '' | split: '' %}
{% for pri in prioritiesSorted %}
{% assign sorted_this_pri = pri.items | sort: 'date' %}
{% assign sorted_wanted = sorted_wanted | concat: sorted_this_pri %}
{% endfor %}

# Videos digitized by whatisnuclear

{% include table_of_vids.liquid vids=vids_gotten_win %}

# Videos digitized by others

{% include table_of_vids.liquid vids=vids_gotten_other %}

# Videos not yet digitized in order of want

<a name="wantlist"></a>

{% include table_of_vids.liquid vids=sorted_wanted %}

# See Also

All our video digitization announcements:
{% include taglist.liquid tag="videos" %}

Other links:

- [A collection of hundreds of more related videos at the National Archives](https://catalog.archives.gov/search-within/88086).
- [Our nuclear reading list]({% link nuclear-reading-list.md %}).

</div>
</div>
