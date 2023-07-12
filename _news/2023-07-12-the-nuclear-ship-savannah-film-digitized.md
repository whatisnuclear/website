---
layout: news
title: >
  The Nuclear Ship Savannah -- newly digitized 1964 film
author: nick
category: news
description: >
  A 1964 documentary describing the Nuclear Ship Savannah and the dream
  of a clean nuclear-powered merchant shipping future. 
byline: True
image: /img/savannah-03.jpg
tag: videos
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

For the grand finale of our June/July 2023 batch of film digitizations, we're
**extraordinarily** excited to announce the recent digitization of a 1964 film
all about everyone's favorite nuclear-powered cargo ship: The N.S. Savannah!

<figure>
<div class="ratio ratio-16x9">
<iframe
src="https://www.youtube.com/embed/SA8W2Xpz2hA" title="The Nuclear Ship Savannah" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</div>
<figcaption markdown="1">1964 US Atomic Energy Commission video entitled "The
Nuclear Ship Savannah", digitized by us from the National Archives ([NAID
88199](https://catalog.archives.gov/id/88199))
</figcaption>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'THE NUCLEAR SHIP SAVANNAH' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

Thanks to Ross Koningstein for his help in making this happen. And thanks to
Sohail Khan for helping with getting the sound track as the first-ever donor
to our film-scanning GoFundMe (linked below).


</div></div>

<div class="row">
<div class="col-md-12" markdown="1">

## Some stills from the film

<div class="row">
 {% for index in (0..28) %} 
  <div class="col col-xl-4 col-lg-6 col-md-8 col-sm-12 col-12 p-0">
    <figure class="figure">
      <a
        href="/img/savannah-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/savannah-{{index | prepend: '00' | slice: -2, 2 }}.jpg"
          class="img-fluid"
        />
      </a>
    </figure>
  </div>
 {% endfor %}
  </div>
</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">
## Read more about N.S. Savannah

* [Wikipedia entry](https://en.wikipedia.org/wiki/NS_Savannah)
* [N.S. Savannah Association](http://www.ns-savannah.org/)
* [US MARAD Savannah Site](https://www.maritime.dot.gov/nssavannah)
* [Tour of NS Savannah](https://maritime.org/tour/savannah/)
* [Step inside the world's only nuclear-powered passenger ship -- built in 1959 (NPR)](https://www.npr.org/2023/06/23/1182973358/step-aboard-the-nuclear-powered-passenger-ship-of-tomorrow-from-1959)


Contents of the film by timestamp include:

- 00:00 Intro Sea Trials
- 01:52 Intro credits
- 02:21 The S.S. Savannah steam ship
- 03:57 Conventional Merchant Marine
- 04:59 Nuclear-powered ships
- 06:04 Proposal by Eisenhower
- 07:01 Start of Construction
- 08:02 Schematic power cycle
- 09:05 Shielding 
- 10:04 Component manufacturing
- 10:37 Training operators
- 12:06 Full-size mockup
- 13:07 Retractable stabilizers and launching
- 14:15 Reactor test assembly
- 17:05 Final assembly and Fueling
- 18:19 Head installation and criticality
- 19:14 Sea trials
- 20:55 First port of call
- 25:32 Panama Canal
- 26:08 Seattle World's Fair
- 26:49 Service in Galveston
- 27:26 Message from Lyndon B. Johnson

_These are loaded into the youtube video as chapters for your convenience._

## See Also

- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there. If you're interested in helping
  to get some of these scanned, check out [our digitization
  GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
  and/or [contact us]({% link contact.md %})!
- [Tweet announcement of this](https://twitter.com/whatisnuclear/status/)

All our video digitization announcements:
{% include taglist.liquid tag="videos" %}

</div></div>
