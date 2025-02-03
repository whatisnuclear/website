---
layout: news
title: No Greater Challenge digitized
subtitle: A 1969 film about nuclear-powered Agro-Industrial complexes
author: nick
categories:
  - news
tags: videos
description: >
  This film envisions deploying large nuclear power plants coupled with
  desalination plants to form 300k-acre scientifically-managed food factories in
  otherwise arid land. Besides making 1 billion gallons of fresh water per day
  from the sea, the complexes would also generate phosphorus using electric
  furnaces, ammonia from electrolytic hydrogen, and caustic and chlorine from
  brine electrolysis. Such a complex could feed 6 million people.
byline: true
image: /img/vids/gchal/gchal-01.jpg
comments: true
---

<div class="row">
<div class="col-md-8" markdown="1">

{{ page.description }}

<figure>
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/zr37qc4omNY?si=aNwyXHBQPZQBzW7R"
title="No Greater Challenge film" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</figure>

<blockquote class="blockquote">
{% assign vid = site.data.videos | where: "title", 'No Greater Challenge' | first %}
<b>Catalog description: </b> {{ vid.description }}
</blockquote>

This is film [53094]({% link old-videos.md %}#no-greater-challenge) in our
catalog.

## Background info on nuclear agro-industrial complexes

On September 25, 1963, President John F. Kennedy said:

<figure class="text-start">
  <blockquote class="blockquote">
We are now examining in the United States today the mixed economic-technical
question of whether very large scale nuclear reactors can produce unexpected
savings in the simultaneous desalination of water and the generation of
electricity. We will have before this decade is out or sooner a tremendous
nuclear reactor which makes electricity and at the same time gets fresh water
from salt water at a competitive price. What a difference this can make to the
United States. And, indeed, not only the US. but all around the globe where
there are so many deserts on the ocean's edge.
</blockquote>
</figure>

In 1967, just after the Six-Day War, an idea to user cheap power from nuclear
plants to literally make the desert bloom with seawater desalination plants
became even more interesting and intriguing. Lewis invited Alvin Weinberg to his
estate to discuss. Lewis Strauss passed these ideas to Eisenhower, who soon
published _The Eisenhower Plan_ in Life magazine.

The Atomic Energy Commission then directed Oak Ridge National Lab to conduct
studies of the concept. They formed a team of reactor experts, agronomists,
economists, and social scientists who traveled to Egypt, Israel, and Lebanon.
The team released a series of reports including:

- [Nuclear energy centers, industrial and agro-industrial complexes](https://www.osti.gov/biblio/5173182)
- [REVIEW OF RECENT AGRO-INDUSTRIAL COMPLEX STUDIES AT ORNL](https://www.osti.gov/biblio/4712131)
- [STATUS AND RECENT DEVELOPMENTS IN AGRO-INDUSTRIAL COMPLEX STUDIES](https://www.osti.gov/biblio/4125691)
- [DATA OBTAINED ON SEVERAL POSSIBLE LOCALES FOR THE AGRO-INDUSTRIAL COMPLEX](https://www.osti.gov/biblio/4043681)
- [REVIEW OF THE PUERTO RICO ENERGY CENTER STUDY](https://www.osti.gov/biblio/4703297)
- [PUERTO RICO ENERGY CENTER STUDY. SITE SELECTION SUPPLEMENT](https://www.osti.gov/biblio/4746862)

As it turned out, nuclear plants became more expensive rather than cheaper, and this
plan depended on cheap energy, so it was never implemented. At least not yet!

</div>
</div>

<div class="row">
<div class="col-md-12" markdown="1">

<div class="row">
 {% for index in (0..12) %} 
  <div class="col col-3 col-sm-4 col-xs-2 col-md-2 col-lg-2 col-xl-2 p-0">
    <figure class="figure p-0 m-0">
      <a
        href="/img/vids/gchal/gchal-{{index| prepend: '00' | slice: -2, 2 }}.jpg"
      >
        <img
          src="/img/vids/gchal/gchal-{{index | prepend: '00' | slice: -2, 2 }}_sm.jpg"
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

## References

The info above comes from [Weinberg, The First Nuclear Era]({% link weinberg.md %}).

## See Also

- [A X post about this](https://x.com/whatisnuclear/status/1884927036738929074)
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
