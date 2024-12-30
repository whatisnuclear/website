---
layout: news
title: Restoration of the NRX Reactor
subtitle: "The world's first nuclear meltdown"
author: nick
category: news
tags: videos
description: This film shows the recovery effort done to clean up, rebuild, and restart the NRX reactor in Canada.
byline: true
image: /img/vids/nrx/nrx-29.jpg
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

On December 12, 1952, the NRX reactor in Ontario, Canada suffered an accidental
runaway. The increased power caused the fuel to heat up such that some of it
melted, thereby becoming the first ever nuclear meltdown in history. Highly
radioactive material spilled into the basement, and around 1 million gallons of
water containing 10,000 Ci of fission products had to be disposed of. The
NRX was restored and turned back on with improved safety systems and uprated power.
It operated until 1993.

I recently found this film summarizing the accident and cleanups. I got it
scanned, and have posted it online here.

(If you've heard of the reactor accident that Jimmy Carter helped with while he
was in the Navy, this is it. Does anyone see young Jimmy Carter in the footage?)

<figure>
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/9wLJUZ3Vhao"
title="Restoration of the NRX Reactor" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</div>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'Restoration of the NRX Reactor' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

This is film [88248]({% link old-videos.md %}#restoration-of-the-nrx-reactor) in our
catalog.

This digitization was sponsored by me.

</div>
</div>

<div class="row">
<div class="col-md-12" markdown="1">

<div class="row">
 {% for index in (1..38) %} 
  <div class="col col-3 col-sm-4 col-xs-2 col-md-2 col-lg-2 col-xl-2 p-0">
    <figure class="figure p-0 m-0">
      <a
        href="/img/vids/nrx/nrx-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/vids/nrx/nrx-{{index | prepend: '00' | slice: -2, 2 }}_sm.jpg"
          class="img-fluid p-0"
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

## Additional NRX Links

- [Gray, Reconstruction of the NRX Reactor at Chalk River, September 1953](https://archive.org/details/transactionsofen36engi/page/1269/mode/1up)
- [AECL, The accident to the NRX reactor on December 12, 1952](https://www.osti.gov/biblio/4379334)
- [Cross, THE CHALK RIVER ACCIDENT IN 1952](https://www.nuclearfaq.ca/The_CR_Accident_in_1952_WG_Cross1980.pdf)
- [Mummah, President Jimmy Carter and a Canadian nuclear meltdown, 2021](https://medium.com/generation-atomic/president-jimmy-carter-and-a-canadian-nuclear-meltdown-47c8a5b8989c)
- [Why Not the Best](https://www.goodreads.com/book/show/645520.Why_Not_the_Best_) -- Jimmy Carter autobiography
- [Jimmy Carter and the NRX Accident – How Legends Grow](https://nuclearheritage.com/jimmy-carter-and-the-nrx-accident-how-legends-grow/)
- [NRX Wikipedia page](https://en.wikipedia.org/wiki/NRX)

## See Also

- [Our Digital Reactor History Museum]({% link museum.md %})
- [Our Reactor Development History Page]({% link reactor-history.md %})
- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there.

If you're interested in helping to get some of these scanned, check out [our
digitization
GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
and/or [contact us]({% link contact.md %})!

</div>
</div>
