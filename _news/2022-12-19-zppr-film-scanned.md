---
layout: news
title: Historical AEC film about ZPPR scanned
description: >
  This is the story of how we found and digitized an old AEC film
  about the Zero Power Plutonium Reactor (ZPPR).
author: nick
categories:
  - news
image: /img/zppr-thumb.jpg
byline: true
tag: videos
---

<div class="row">
<div class="col-md-8" markdown="1">

This is the story about how this 1970 film about ZPPR ended up on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/jmvbbRRYb6k" 
allow="autoplay; encrypted-media" allowfullscreen></iframe>

On October 22, 2022, I was reading an old Atomic Energy Commission booklet
called [Understanding the atom: Breeder
Reactors](https://babel.hathitrust.org/cgi/pt?id=umn.31951d03596374f&view=1up&seq=49) when I came
across a listing of motion pictures. It listed three:

- In Search of a Critical Moment (1970)
- [Principles of Thermal, Fast, and Breeder Reactors (1963)](https://www.youtube.com/watch?v=YsZE_YhUXh4)
- [A Breeder in the Desert (1965)](https://www.youtube.com/watch?v=Y4Ks2TA8h4M)

I had seen the latter two, but had never heard of the first, which was about the
Zero Power Plutonium Reactor (ZPPR), now called the Zero Power Physics Reactor.
I searched around but couldn't find a copy of it anywhere. There was [mention of it
in the National Archives](https://catalog.archives.gov/id/88308), but it was
clearly labeled with: **This item has not been digitized**. I [pinged the
National Labs on Twitter but heard
nothing](https://twitter.com/whatisnuclear/status/1584024975518093314).

[Having
briefly pounded out](https://en.wikipedia.org/w/index.php?title=Zero_Power_Physics_Reactor&diff=prev&oldid=1025855316)
the [Wikipedia page on
ZPPR,](https://en.wikipedia.org/wiki/Zero_Power_Physics_Reactor) I felt a
slightly special dedication to preserving more historical information about this
facility. So I decided to look into what the process was for digitizing old
16mm films from the National Archives.

I e-mailed the Archives and they pointed me to the [Item Approval Request
Form](https://www.archives.gov/research/order/item-approval-form.html). You
have to fill this out and send it in to get authorization first. I filled it in
and sent it. They approved it about 10 days later.

After you get approval, you head over to the [Archive's list of approved
film-scanning
vendors](https://www.archives.gov/research/motion-pictures/vendors) and send the
approval form in for quotes. I sent it in to the two that can handle films that
are only available as masters due to an I on my IAR form (as instructed). They
sent quotes back in a few days.

There was some variation depending on what resolution you request it in, how
much compression the files will have, and how they deliver the files. For a 28
minute film, if you get 1080 FHD scans and have them compress to h264 avi and
upload it, it would be roughly $500-$700, all in.

After thinking about it for a while I decided that if I'm going to get it
scanned I might as well get it done in 4K, and if I get 4K I want the high-res
file without too much compression. So I went for the ProRes format 4K, which
then required the purchase of a USB hard drive and shipping, since uploading
the 345 GB would be way more expensive with their upload fees. This bumped
the total cost up to over $900.

I convinced my SO to let me do it because I just like nuclear history that much.
I authorized the scan and then waited for a while. They got it done and sent the
hard drive via FedEx. I loaded the 345 GB file onto my NAS and then used ffmpeg
to make a h246 version of it that was only 23.4 GB. Thank goodness for my big
AMD 5950 CPU. Then I uploaded that to YouTube. Thank goodness for fiber!

It premiered on YouTube on December 19th, 2022 at noon PT.

Along the way, my colleague Michael Castillo found [a booklet listing dozens
more AEC
videos](https://archive.org/details/16mmfilmcombined00usatrich/mode/2up?view=theater)
(and there's related/newer one
[here](https://babel.hathitrust.org/cgi/pt?id=coo.31924004286914)). Given the
pricing, we're gonna have to crowd-fund the rest of them I guess :).
We are now maintaining a list of scanned and wanted films in order of want over at
[our Old Videos page]({% link old-videos.md %}).

There appears to be an archive with 26 episodes of
**The Magic of the Atom** at the [American Archive of Public Broadcasting](https://americanarchive.org/catalog?f%5Baccess_types%5D%5B%5D=all&f%5Bseries_titles%5D%5B%5D=The+Magic+of+the+Atom&per_page=50&sort=episode_number_sort+asc), none of which appears digitized yet. So it would be fun to check in with them about how to get things scanned as well.

If anyone needs the 345 GB ProRes-format version, [let me know]({% link contact.md %}).

## See Also

- [ZPPR wikipedia page](https://en.wikipedia.org/wiki/Zero_Power_Physics_Reactor)
- [Film and Video Catalogue Peaceful Applications of Nuclear Energy 1927-1998](https://inis.iaea.org/collection/NCLCollectionStore/_Public/30/018/30018866.pdf)
- [Another catalog](https://files.eric.ed.gov/fulltext/ED067128.pdf)
- [Our Old Videos page]({% link old-videos.md %}) with a running list of the
  available and yet-to-be-scanned films out there. If you're interested in helping
  to get some of these scanned, check out [our digitization
  GoFundMe](https://www.gofundme.com/f/the-digitization-of-old-nuclear-energy-videos)
  and/or [contact us]({% link contact.md %})!

All our video digitization announcements:
{% include taglist.liquid tag="videos" %}

</div>
</div>
