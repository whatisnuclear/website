---
layout: default
title: What is nuclear recycling?
description: >
  Learn about recycling nuclear waste and breeder reactors. Did you know that
  typical nuclear reactors only use about 1% of the energy in their fuel, and
  that nuclear waste is recyclable? 
author: nick
image: /img/atomic-recycling.png
date: 2009-03-01
updated: 2022-10-01
byline: true
---
<div class="row">
<div id="recycling" class="col-md-8" markdown="1">

<img class="img-fluid float-end w-25" src="/img/atomic-recycling.png" {% imagesize /img/atomic-recycling.png:props %}  alt="Recycle symbol with atom inside it" >

Nuclear waste is recyclable. Once reactor fuel (uranium or thorium) is used in a
reactor, it can be treated and put into another reactor as fuel. 

Nuclear fuel used today almost all starts out as natural uranium, which has two
<a href="{% link isotopes.md %}">isotopes</a>
in it, Uranium-238 and Uranium-235.  The minority isotope (U-235) can
sustain a nuclear chain reaction. We call such isotopes <em>fissile</em>. The 
other isotopes (U-238 and Thorium-232) are <em>fertile</em>, meaning they could
be changed into fissile nuclides in a reactor, but cannot sustain a chain
reaction on their own. Natural fuel forms are shown below.

<img class="img-fluid mx-auto d-block w-100" src="/img/fuelcycle-natural.svg" alt="Diagram showing natural Uranium and natural thorium isotopic composition" {% imagesize /img/fuelcycle-natural.svg:props %} >

Because it contains some fissile material naturally, it is possible to build a
few kinds of nuclear reactors directly fueled with natural uranium. The first
man-made nuclear reactors used natural uranium and ultra-pure graphite. Canada's
CANDU reactors use natural uranium with heavy water. But many new benefits arise
if you mechanically concentrate the U-235 to a higher fraction. This difficult
process is done in <em>uranium enrichment plants</em>. Most power reactors today
are fueled with low-enriched uranium. Note that as uranium is enriched more,
larger piles of depleted uranium (mostly U-238) are left over as tails. The 
following figure shows fuel forms enabled by enrichment.

<img class="img-fluid mx-auto d-block w-100" src="/img/fuelcycle-enrich.svg" alt="Diagram showing a
number of different isotopic compositions that can be made in a uranium
enrichment plant, including low-enriched uranium, highly-enriched uranium,
and thorium mixed with enriched uranium." {% imagesize /img/fuelcycle-enrich.svg:props %} >

Once the neutron chain reaction begins in a reactor, a number of key things happen
to the atoms:

* Most (**but not all**) of the fissile atoms get split by the neutrons into smaller atoms called
  *fission products*, releasing the nuclear energy as heat. As these fission
  products build up, they eventually absorb lots of neutrons themselves, 
  requiring the reactor to refuel with new fissile atoms.
* Many of the fertile atoms absorb neutrons too, after which:
    * Some directly fission into fission products as above
    * Some go through a series of nuclear reactions to become fissile nuclides
      * Some of these newly-generated fissile atoms get fissioned right away
      * Others of the newly-generated fissile atoms **remain after the chain reaction stops**


When a nucleus has too many neutrons to remain stable, it can undergo a nuclear
transformation called beta-decay breaking a neutron into a proton and an
electron. The electron (called a beta-particle because it originated in the
nucleus) flies off into nature. 

When U-238 absorbs a neutron in a reactor, it becomes U-239, the isotope with
one extra neutron than U-238. This unstable nuclide beta-decays quickly into
Np-239. Then, the Np-239 beta-decays again to become Pu-239, a fissile isotope
that can power nuclear reactors. A analogous process happens when Thorium-232
absorbs a neutron to become fissile Uranium-233.

<img class="img-fluid mx-auto d-block w-100" src="/img/breeding.svg" title="An image of U-238 becoming
Pu-239 via neutron absorption and two beta-decays and Th-232 becoming U-233" alt="An image of U-238
becoming Pu-239 via neutron absorption and two beta-decays. Also Thorium-232 becoming Uranium-233 
via breeding." {% imagesize /img/breeding.svg:props %}  >

The fissile atoms left over in the used fuel (red in the figure below) are what
can be recycled. How many fissile atoms are in the used fuel depends strongly on
the kind of reactor used. Typical reactors leave just a little bit, but special
reactors called *breeder reactors* can actually leave more fissile material than
they started with! More on that later.

<img class="img-fluid mx-auto d-block w-100" src="/img/fuelcycle-irradiated.svg" alt="Diagram showing 
the isotopic composition of used nuclear fuel after being irradiated in a reactor." {% imagesize /img/fuelcycle-irradiated.svg:props %}  >

All reactors have some fissile material left over when the fuel is discharged. 
If you pull this material out and put it into a *reprocessing plant* you can 
separate out the constituents and then remix them as desired for your fuel cycle.
Recycling has several use cases:

* **Sustainability** —­ You can separate the fissile material from the neutron-absorbing fission products
  and refabricate it into new fuel for another reactor, thereby improving your overall
  fuel efficiency. This effectively increases the miles-per-gallon of your reactor. 
* **Radiotoxicity reduction** — If you recycle your fuel in [fast-neutron reactors]({% link fast-reactor.md %}), 
  you can transmute the waste nuclides from ones with 10,000-year half-lives to ones with 200-year half-lives, 
  reducing the long-term radiotoxicity of your waste. (See more at the [waste page]({% link waste.md %})).
* **Waste Design** — You can change the physical form of your waste into something extra
  compatible with its ultimate repository, e.g. by vitrifying it, grouting it, and so on.
* **Military weapons** — The original reprocessing was done to obtain weapons-grade plutonium
  from natural uranium fueled reactors [at Hanford]({% link hanford.md %}). Other countries
  have used reprocessing of special weapons-production reactor fuel for similar purposes.
  Note that this is less of a concern for power reactors because the isotopic composition
  of the plutonium that remains is not ideal for nuclear weapons.


## Breeder Reactors and Recycling

Breeder reactors are nuclear reactors configured to generate more fissile fuel
from fertile potential fuel during operation than they consume.  The net gain in
converting fertile material into fissile material implies that **all** of the
fertile natural resources shown in the first image of this page can be utilized
in reactors. Contrast this with non-breeder reactors, which can effectively only
use the tiny red box's worth. 

The sustainability implications of breeder reactors are astounding. If you use
breeder reactors, nuclear fuel resources can [last for billions of years]({%
link nuclear-sustainability.md
%}).

The trick to making a breeder reactor comes down to knowing something about nuclear
physics. The key facts are:

* When fast neutrons cause a fission, more secondary neutrons are released than
  if a slow neutron causes fission
* The likelihood of any nuclide capturing a neutron decreases rapidly
  when the neutron is moving really fast (faster than 1 MeV), but the likelihood
  of a fast neutron causing fission stays reasonably high.
* U-233 emits more neutrons per fission when split by a slow neutron than 
  U-235 or Pu-239, and has a better capture-to-fission ratio.

The net result of these facts can be summarized with a plot of eta (η), which
is the number of neutrons released in fission per neutron absorbed in fuel. When
eta is sufficiently higher than 2.0, you can make a breeder reactor. Thus, the options are:

* Make a thorium/U-233 breeder with slow neutrons (left-hand side), or
* Make a uranium/plutonium breeder with fast neutrons (right-hand side) 

<img class="img-fluid mx-auto d-block w-100" src="/img/eta_good.svg" alt="A plot of eta, 
the number of neutrons released per absorption in the fuel for fissile nuclides
U-233, Pu-239, and U-235. This shows how to make a breeder reactor." 
title="A plot of eta vs. incident neutron energy" {% imagesize /img/eta_good.svg:props %}  >

Both of these configurations have sufficient excess neutrons to allow you to pack in lots of 
fertile material while still sustaining a nuclear chain reaction. The more fertile
material you pack in, the more neutrons get invested in it, generating fissile material.

<div class="alert alert-success" role="alert" markdown="1">
<strong>Note:</strong> 
You can read more about [fast reactors]({% link fast-reactor.md %}) and [thorium
reactors]({% link thorium.md %}).  Note that all thorium are necessarily breeder
reactors, since natural thorium has no fissile component.
</div>

Recycling and breeding are often thought of together, but they are on separate
axes.  Countries like France recycle fuel from non-breeder reactors. Most
long-term sustainable nuclear plans involve using breeder reactors plus
recycling. It is also possible to use a breeder reactor without recycling at all
using [advanced deep-burn fuels]({% link twr.md %}).

<img class="img-fluid mx-auto d-block w-100" src="/img/breeding-vs-recycling.svg" alt="Diagram showing
examples of reactors that recycle vs. not recycle compared to breed vs. not
breed." {% imagesize /img/breeding-vs-recycling.svg:props %}  >

## Nuclear Fuel cycles
A nuclear fuel cycle is the path that nuclear fuel (Uranium, Thorium, Plutonium, etc.) takes as it
is used to generate power in a nuclear reactor. Our <a href="{% link fuel-cycle.md %}">fuel cycle
page</a> has more info. They describe where the material comes from and where it ends up. Different
fuel cycles range from very simple to fairly complicated. We describe several of these below. 

<h3 id="oncethrough">Once-Through Fuel Cycle</h3>
<!-- Use object here because we want the title tooltiops -->
<object type="image/svg+xml" data="/img/fuelcycle_once_through.svg" title="A
picture of a once-through fuel cycle." class="img-fluid w-100"
{% imagesize /img/fuelcycle_once_through.svg:props %}  
>Browser doesn't support SVG</object>
<p class="caption"><strong>Figure 1.</strong> A once-through fuel cycle. Hover for more info.</p>

The simplest fuel cycle is the once-through cycle. It is the de-facto standard in most operating
nuclear power plants, with a few exceptions in Europe and Asia. Uranium is mined, enriched, used in
a reactor (where it becomes radioactive nuclear waste), and then stored until it is no longer
dangerously radioactive. While this cycle is cheap, there are two major problems with it. Firstly,
the waste is radioactive for hundreds of thousands of years. No one has been able to design a
repository that is convincingly capable of storing material for that long. Secondly, Uranium is not
the most abundant element on Earth, and in this kind of cycle, the global supply of cheap uranium
could run low within 200 years. So much for sustainability! There are some deep-burn once-through
cycles out there that have good sustainability properties though. 

<h3 id="closed">Closed Fuel Cycle</h3>
<object type="image/svg+xml" data="/img/fuelcycle_recycle.svg" title="A picture of
a MOX recycle fuel cycle." class="img-fluid w-100"
{% imagesize /img/fuelcycle_recycle.svg:props %}  
>Browser doesn't support SVG</object>
<p class="caption"><strong>Figure 2.</strong> A closed fuel cycle. Here nuclear material is recycled. </p>
Closing the fuel cycle involves recycling the nuclear waste as new fuel. Since the main component of
nuclear waste is Uranium-238 (which can be transmuted to Plutonium, especially with advanced breeder
reactors), we can get more energy out of the waste than in a once-through cycle <a
href="{% link factoids.md %}">(see factoid 2 to see how much)</a>. The recycling plant separates
the good stuff from the bad stuff. The bad stuff is mostly fission products, the atoms that a
Uranium atom becomes after it splits in the fission process. These fission products mostly decay to
safe levels within 300-500 years, which is significantly shorter than standard nuclear waste. So, by
closing the fuel cycle with standard reactors, we address the issue of nuclear waste identified in
the once-through cycle. In this case, nuclear waste is a tractable problem. But most of the
reactivity is coming from the mine, since standard reactors burn most of the fissile nuclide, U-235.
Also, the reprocessing technology is expensive and separates out pure Plutonium, which could
possibly be stolen, bringing a rogue entity closer to having a nuclear weapon. For these reasons,
the USA does not currently recycle. There are ways to solve these issues. 


<h3 id="breeder">Breeder Fuel Cycle</h3>
<object type="image/svg+xml" data="/img/fuelcycle_breeder.svg" class="img-fluid w-100"
{% imagesize /img/fuelcycle_breeder.svg:props %}  
>Browser doesn't support SVG</object>
<p class="caption"><strong>Figure 3.</strong> A closed fuel cycle with breeding.
More fissile material is created from breeding than is used to make energy.
Hover over images for more info.</p>

<a href="{% link fast-reactor.md %}">Breeder reactors</a> can create as much or more fissile
material (atoms that readily split) than they use. These special reactors are designed to have extra
neutrons flying around, so that some can convert U-238 to Pu-239 (see above) and the others can run
the reactor. Often, these special reactors are deemed &quot;fast&quot; reactors because the neutrons
are moving through the reactor at higher speeds, on average. In a full breeder fuel cycle, we get
the maximum use of the Uranium resources on Earth, and what we already know exists can last tens of
thousands of years. The cycle has cost and proliferation concerns associated with any closed cycle.
Additionally, we have significantly less operational experience with breeder reactors, so we would
need to train builders and operators for such a machine. Using a Thorium cycle instead of a
Uranium-Plutonium cycle may allow breeding in less exotic reactors. Using this kind of fuel cycle,
nuclear power can <a href="{% link nuclear-sustainability.md %}">truly be considered sustainable</a>.

<p>Questions? <a href="contact.html">Send them in!</a></p>


## Additional Reading

* <a href="http://www-pub.iaea.org/books/IAEABooks/7112/Implications-of-Partitioning-and-Transmutation-in-Radioactive-Waste-Management">Implications of Partitioning and Transmutation in Radioactive Waste Management, IAEA Technical Reports Series 435</a>
* [Bunn, The Economics of Reprocessing Versus Direct Disposal of Spent Nuclear
  Fuel](http://nrs.harvard.edu/urn-3:HUL.InstRepos:30209100) -- A report suggesting that
  reprocessing only becomes economical after fuel costs exceed $360/kg
* [Principles of Fast, Thermal, and Breeder
  reactors](https://www.youtube.com/watch?v=YsZE_YhUXh4) -- And old but useful video about this information
* Our <a href="{% link fuel-cycle.md %}">fuel cycle page</a>
* <a href="{% link isotopes.md %}#enrichment">Our explanation of enrichment</a>
* <a href="{% link waste.md %}">Our nuclear waste page</a>
* <a href="{% link fast-reactor.md %}">Our Breeder reactors page</a>
* <a href="https://en.wikipedia.org/wiki/Yucca_mountain">Yucca Mountain (Wikipedia)</a>
* Our [Moderation]({% link moderation.md %}) page

</div>
</div>

