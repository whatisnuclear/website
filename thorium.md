---
layout: default
title: "Thorium As Nuclear Fuel: the good and the bad"
category: physics
description: A discussion of the Thorium nuclear fuel cycle for nuclear reactors. How is it different from Uranium? What's so good about it? What are its downsides?
author: Nick Touran
---

<div class="row">
<div class="col-md-8" markdown="1">

# Thorium As Nuclear Fuel

<div class="pull-right"> <img width="200" class="thumbnail" alt="Thor by Marten Eskil Winge" title="Thor by Marten Eskil Winge. Thor is a mythical Norse god associated with thunder, lightning, storms, oak trees, strength, the protection of mankind, healing, and fertility. Thorium was so named in the 1820s, well before its nuclear properties were discovered in 1942. Coincidence? " src="/img/Thor.jpg"/>
</div>


Thorium is a basic element of nature, like Iron and Uranium. Like Uranium, its properties allow it
to be used to fuel a nuclear chain reaction that can run a power plant and make electricity (among
other things). Thorium itself will not split and release energy. Rather, when it is exposed to
neutrons, it will undergo a series of nuclear reactions until it eventually emerges as an isotope of
uranium called U-233,  which will readily split and release energy next time it absorbs a neutron.
Thorium is therefore called *fertile*, whereas U-233 is called *fissile*.

Reactors that use thorium are operating on what's called the Thorium-Uranium (Th-U) fuel
cycle. The vast majority of existing or proposed nuclear reactors, however, use enriched uranium
(U-235) or reprocessed plutonium (Pu-239) as fuel (in the Uranium-Plutonium cycle), and only a
handful have used thorium. Current and exotic designs can theoretically accommodate thorium.

The Th-U fuel cycle has some intriguing capabilities over the traditional U-Pu cycle. Of course, it
has downsides as well. On this page you'll learn some details about these and leave with the
ability to productively discuss and debate thorium with knowledge of the basics. 

Up and coming nuclear reactor powerhouses China and India both have substantial reserves of
Thorium-bearing minerals and not as much Uranium. So, expect this energy source to become a big deal
in the not-too-distant future...

<span class="label label-danger">Hype alert</span> &nbsp; If someone on the internet told you something unbelievable about Thorium, you might want to check out our <a href="{% link thorium-myths.md %}">Thorium Myths page</a> just to double check it.


#### On this page

* <a href="#benefits">What are the benefits of using Thorium?</a>
* <a href="#downsides">What are the downsides of Thorium?</a>
* <a href="#prolif">What about making bombs?</a>
* <a href="#lftr">Liquid Fluoride Thorium Reactors</a>
* <a href="#refs">See also</a>

<h2 id="benefits">What are the key benefits of Thorium?</h2>

* **Thorium cycles exclusively allow [thermal]({% link moderation.html %}) breeder reactors** (as
  opposed to [fast breeders]({% link fast-reactor.html %})). More neutrons are released per neutron
  absorbed in the fuel in a traditional (thermal) type of reactor. This means that if the fuel is
  [reprocessed]({% link recycling.md %}), reactors could be fueled without mining any additional
  U-235 for reactivity boosts, which means the nuclear fuel resources on Earth can be extended by 2
  orders of magnitude without some of the complications of fast reactors. Thermal breeding is perhaps
  best suited for Molten Salt Reactors, which are discussed on [their own page]({% link msr.md %}) as
  well as in summary below.

* **The Th-U fuel cycle does not irradiate Uranium-238 and therefore does not produce transuranic
  (bigger than uranium) atoms** like Plutonium, Americium, Curium, etc. These transuranics are the
  major health concern of long-term nuclear waste. Thus, Th-U waste will be less toxic on the 10,000+
  year time scale. 

## Are there any additional benefits of Thorium?

* **Thorium is more abundant in Earth's crust than Uranium**, at a concentration of 0.0006%
  vs. 0.00018% for Uranium (factor of 3.3x). This is often cited as a key benefit, but if you look
  at the known reserves of economically extractable Thorium vs. Uranium [1,2], you'll find that
  they are both nearly identical. Also, substantial Uranium is found dissolved in sea-water, whereas
  there is 86,000x less Thorium in there. If <a href="{% link recycling.md %}">closed fuel cycles or
  breeding</a> ever become mainstream, this benefit will be irrelevant because both the Th-U and the
  U-Pu fuel cycles will last us well into the tens of thousands of years, which is about as long as
  modern history.  



<h2 id="downsides">What are the downsides of Thorium?</h2>
* **We don't have as much experience with Th**. The nuclear industry is quite conservative,
  and the biggest problem with Thorium is that we are lacking in operational experience with it.
  When money is at stake, it's difficult to get people to change from the norm. 

* **Thorium fuel is a bit harder to prepare**. Thorium dioxide melts at 550 degrees higher
  temperatures than traditional Uranium dioxide, so very high temperatures are required to produce
  high-quality solid fuel. Additionally, Th is quite inert, making it difficult to chemically process.
  This is irrelevant for fluid-fueled reactors discussed below.

* **Irradiated Thorium is more dangerously radioactive in the short term**. The Th-U cycle
  invariably produces some U-232, which decays to Tl-208, which has a 2.6 MeV gamma ray decay mode.
  Bi-212 also causes problems. These gamma rays are very hard to shield, requiring more expensive
  spent fuel handling and/or reprocessing.

* **Thorium doesn't work as well as U-Pu in a fast reactor**. While U-233 an excellent fuel in
  the thermal spectrum, it is between U-235 and Pu-239 in the fast spectrum. So for reactors that
  require excellent neutron economy (such as breed-and-burn concepts), Thorium is not ideal.


<h2 id="prolif">Proliferation Issues</h2>
Thorium is generally accepted as proliferation resistant compared to U-Pu cycles. The problem with
plutonium is that it can be chemically separated from the waste and perhaps used in bombs. It is
publicly known that even reactor-grade plutonium can be made into a bomb if done carefully. By
avoiding plutonium altogether, thorium cycles are superior in this regard. 

Besides avoiding plutonium, Thorium has additional self-protection from the hard gamma rays emitted
due to U-232 as discussed above. This makes stealing Thorium based fuels more challenging. Also, the
heat from these gammas makes weapon fabrication difficult, as it is hard to keep the weapon pit from
melting due to its own heat. Note, however, that the gammas come from the decay chain of U-232, not
from U-232 itself. This means that the contaminants could be chemically separated and the material
would be much easier to work with. U-232 has a 70 year half-life so it takes a long time for these
gammas to come back. 

The one hypothetical proliferation concern with Thorium fuel though, is that the Protactinium can be
chemically separated shortly after it is produced and removed from the neutron flux (the path to
U-233 is Th-232 -> Th-233 -> Pa-233 -> U-233). Then, it will decay directly to pure U-233. By this
challenging route, one could obtain weapons material. But Pa-233 has a 27 day half-life, so once the
waste is safe for a few times this, weapons are out of the question. So concerns over people
stealing spent fuel are largely reduced by Th, but the possibility of the owner of a Th-U reactor
obtaining bomb material is not. 

<h2 id ="lftr">Molten Salt Reactors</h2>

<span class="label label-success">Update:</span> See our <a href="{% link msr.md %}">full page on Molten Salt Reactors</a> for more info.

One especially cool possibility suitable for the thermal-breeding capability of the Th-U fuel cycle
is the molten salt reactor (MSR), or as one particular MSR is commonly known on the internet, the
Liquid Fluoride Thorium Reactors (LFTR). In these, fuel is not cast into pellets, but is rather
dissolved in a vat of liquid salt. The chain reaction heats the salt, which naturally convects
through a heat exchanger to bring the heat out to a turbine and make electricity. Online chemical
processing removes fission product neutron poisons and allows online refueling (eliminating the need
to shut down for fuel management, etc.). None of these reactors operate today, but Oak Ridge had a
test reactor of this type in the 1960s called the <a
href="http://en.wikipedia.org/wiki/Molten-Salt_Reactor_Experiment">Molten Salt Reactor Experiment
[wikipedia]</a> (MSRE). The MSRE successfully proved that the concept has merit and can be operated
for extended amounts of time. It competed with the liquid metal cooled fast breeder reactors
(LMFBRs) for federal funding and lost out. Alvin Weinberg discusses the history of this project in
much detail in his autobiography, <a
href="https://www.amazon.com/First-Nuclear-Era-Times-Technological/dp/1563963582">The First Nuclear
Era [amazon.com]</a>, and there is more info available all over the internet. These reactors could
be extremely safe, proliferation resistant, resource efficient, environmentally superior (to
traditional nukes, as well as to fossil fuel obviously), and maybe even cheap. Exotic, but
successfully tested. Who's going to start the startup on these? (Just kidding, there are
already like 4 startups working on them, and China is developing them as well).


<h2 id="refs">See Also</h2>

* Our <a href="{% link thorium-myths.md %}">Thorium Myths page</a>
* Our <a href="{% link recycling.md %}">breeding and recycling page</a>
* Our <a href="{% link msr.md %}">molten salt reactor page</a>
* <a href="http://www-pub.iaea.org/mtcd/publications/pdf/te_1450_web.pdf">IAEA TECDOC-1450</a> Thorium fuel cycle - potential benefits and challenges. 113 pages of professional information.
* <a href="http://energyfromthorium.com/">Energy From Thorium</a> - a site dedicated to potentially excellent uses of Thorium in LFTRs
* <a href="https://en.wikipedia.org/wiki/Thorium_fuel_cycle">Thorium fuel cycle [wikipedia]</a>
* <a href="http://en.wikipedia.org/wiki/Molten-Salt_Reactor_Experiment">Molten Salt Reactor Experiment [wikipedia]</a>
* <a href="http://www.amazon.com/First-Nuclear-Era-Times-Technological/dp/1563963582">The First Nuclear Era [amazon.com]</a>
* <a href="http://www.thehindu.com/opinion/op-ed/nuclear-power-is-our-gateway-to-a-prosperous-future/article2601471.ece">Nuclear Power is our gateway to a prosperous future</a> - An Op-Ed by A.P.J. Abdul Kalam, a former president of India
* <a href="https://en.wikipedia.org/wiki/Liquid_fluoride_thorium_reactor">Liquid Fluoride Thorium Reactor [wikipedia]</a>
* <a href="https://ans.tandfonline.com/toc/unct20/194/2">Special May 2016 Edition of Nuclear Technology on Thorium</a>


<h2 id="refs2">References</h2>
* <a href="http://www.world-nuclear.org/information-library/current-and-future-generation/thorium.aspx">World Nuclear - Known Thorium Reserves</a>
* <a href="http://www.world-nuclear.org/information-library/nuclear-fuel-cycle/uranium-resources/supply-of-uranium.aspx">World Nuclear - Known Uranium Reserves</a>

 Questions? Comments? Send us <a href="/contact.html">a note</a>.

</div>
</div>
