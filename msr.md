---
layout: default
title: Molten salt reactors
category: reactor-types yeah
description: Molten salt reactors are completely different types of nuclear reactors than those currently operating. They have interesting benefits, and a different set of problems. This page discusses what they are, what they can do, what issues they face, and their history.
author: nick
byline: true
image: /img/are.jpg
---

<div class="row">
<div class="col-md-8" markdown="1">

<figure class="float-end w-50"> <a
href="https://en.wikipedia.org/w/index.php?title=File:Molten_Salt_Reactor.svg&amp;page=1"><img
class="img-fluid img-thumbnail rounded" src="/img/Molten_Salt_Reactor.svg" alt="Molten
salt reactor schematic from GenIV" title="Molten salt reactor schematic from GenIV" /></a>
</figure>

Molten Salt Reactors (MSRs) are nuclear reactors that use a fluid fuel in the form of very
hot fluoride or chloride salt rather than the solid fuel used in most reactors. Since the
fuel salt is liquid, it can be both the fuel (producing the heat) and the coolant
(transporting the heat to the power plant). There are many different types of MSRs,
including the Molten Salt Breeder Reactor (also know commercially as the Liquid Fluoride
Thorium Reactor, or LFTR). This MSR has [Thorium]({% link thorium.md %}) and Uranium
dissolved in a fluoride salt and can get planet-scale amounts of energy out of our natural
resources of Thorium minerals, much like a fast breeder can get large amounts of energy
out of our Uranium minerals. There are also fast breeder fluoride MSRs that don&rsquo;t
use Th at all. And there are chloride salt based fast MSRs that are usually studied as
[nuclear waste]({% link waste.md %}) burners due to their extraordinary amount of very
fast neutrons.

</div>
<div class="col-md-4" markdown="1">

<div class="card border-success mb-3" >
  <div class="card-header text-success">On this page</div>
  <div class="card-body ">
<ul>
<li><a href="{% link msr.md %}#benefits">Benefits of MSRs</a></li>
<li><a href="{% link msr.md %}#problems">Problems with MSRs</a></li>
<li><a href="{% link msr.md %}#history">History of MSRs</a></li>
<li><a href="{% link msr.md %}#fhr">Salt-cooled reactors</a></li>
<li><a href="{% link msr.md %}#ongoing">Ongoing work with MSRs</a></li>
<li><a href="{% link msr.md %}#see_also">See also</a></li>
</ul>

</div>
</div>

</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">

<h2 id="benefits">Benefits of Molten Salt Reactors</h2>
<p>The benefits of MSRs are plentiful, hence their resilience as an interesting topic throughout
reactor history. We break them down by topic here.</p>
<h3>Sustainability</h3>
<p>Sustainability is a measure of how efficiently a system can use natural resources. Most
traditional reactors can only burn about 1% of the uranium on Earth. Many advanced reactors,
including MSRs, can do much better. Here&rsquo;s why MSRs are good in this regard. </p>
<ul>
<li><strong>Online fission product removal</strong> &mdash; Since the fuel is liquid, it can be
	processed during operation. This means that when atoms split into the smaller atoms (fission
	products), those small atoms can be collected and pulled out of the core very quickly. This
	prevents those atoms from absorbing neutrons that would otherwise continue the chain
	reaction. This allows very high fuel efficiency in MSRs.</li>

<li><strong>Good utilization of <a href="{% link thorium.md %}">Thorium</a></strong> &mdash; As
	mentioned above, the MSR chemical plant can continuously remove fission products and other
	actinides during operation. This means that when Thorium absorbs a neutron and becomes
	Pa-233, the Protactinium can be removed from the core and allowed to decay to U-233 in
	peace, without any risk of causing parasitic neutron losses. While this is not the only way
	to burn Thorium, it is perhaps the most elegant.  </li>

<li><strong>No neutron losses in structure</strong> &mdash; Since there is no structure like
	cladding, fuel ducts, grid spacers, etc., there are no neutron losses in these. This helps
	fuel efficiency and therefore sustainability. </li>
</ul> 
<h3>Economics</h3>
<p>Though economics are not truly known until a system is in commercial operation, there are reasons
to think MSRs would have favorable low price. </p>
<ul>
<li><strong>Online refueling</strong> &mdash; Where normal reactors have to shut down to move fuel
	around or put new fuel in, MSRs can do all this while at full power. You just dump in a new
	chunk of fuel into the vat (carefully, of course). This allows high capacity factors,
	improving economics. The reactors may still have to shut down to do maintenance, but they
	likely will have better uptimes.</li>
<li><strong>No fuel fabrication</strong> &mdash; Any commercial fuel fabricator will tell you that
	it is expensive to build fuel assemblies, fuel pellets, cladding tubes, core support
	structures, flow orifices, etc. MSRs are basically just vats of fuel, so they are much
	simpler and cheaper in this regard.</li>
<li><strong>High temperatures possible</strong> &mdash; Molten salts were first looked at for their
	ability to go to very high temperatures. At high temperatures, power cycles convert heat to
	electricity with much less loss, giving you more money for a given amount of heat.
	Additionally, many industrial processes require high-grade heat, and these reactors could be
	used to that while producing electricity. Best of all, MSRs can do high temperature without
	a pressurized coolant (as required in gas-cooled reactors). </li>
<li><strong>Smaller containment</strong> &mdash; Since the system pressure is low and the heat
	capacity is high, the containments can be smaller and thinner.</li>
</ul>
<h3>Safety</h3>
<p>The most important aspect of a nuclear reactor is safety. Here&rsquo;s the good news for
MSRs:</p>
<ul>
<li><strong>Very low excess reactivity</strong> &mdash; Since they can be continually refueled,
	there is no need to load extra fissile material to allow the reactor to operate for a long
	time. This means that it is difficult to have something happen (like an earthquake) that
	could cause a shift in geometry that inserts reactivity and causes a power spike. </li>
<li><strong>Negative temperature coefficient of reactivity</strong> &mdash; In general, if the fuel
	heats up, it expands and becomes less reactive, keeping things stable. Note that this is not
	always true in graphite-moderated MSRs.</li>
<li><strong>Low pressure</strong> &mdash; Since the fuel and coolant are at atmospheric pressure, a
	leak in a tube doesn&rsquo;t automatically result in the expulsion of a bunch of fuel and
	coolant. This is a major safety advantage that enables passive decay heat removal
	(preventing things like what happened at Fukushima). The salts generally have extremely high
	heat capacity as well, so they can absorb a lot of heat themselves. On the other hand, their
	thermal conductivity is about 60x worse than liquid metal sodium. </li>
<li><strong>No chemical reactivity with air or water</strong> &mdash; The fuel salt is generally not
	violently reactive with the environment. So where LWRs have hydrogen explosions and SFRs
	have sodium fires, MSRs do well. Of course, MSR leaks are still serious because it&rsquo;s
	not just coolant... it&rsquo;s extremely radioactive fuel.</li>

<li><strong>Drain tank failure mechanism</strong> &mdash; If something goes wrong in a MSR and the
	temperature starts going up, a freeze plug can melt, pouring the entire core into
	subcritical drain tanks that are intimately linked to an ultimate heat sink, keeping them
	cool. This is an interesting accident mitigation feature that is possible only in fluid fuel
	reactors. Since freeze plugs can take some time to actuate, faster mechanisms have
also been proposed.</li>
</ul>

<h2 id="problems">Problems with Molten Salt Reactors</h2>
<p>All those wonderful benefits can&rsquo;t possibly come without a slew of problems. Lots of people
promote these reactors without acknowledging the issues, but not us! A reactor concept has to stand
on its two feet even in the face of disadvantages (and we think the MSR can do this). Let&rsquo;s go
through them. </p>
<h3>Mobile fission products</h3>
<p>The primary concern with MSRs is that the radioactive fission products can get everywhere. They
are not in fuel pins surrounded by cladding, but are just in a big, sealed vat. You can put a
double-layer containment around it, sure, but it is still challenging to keep them all accounted
for. Where some of these fission products and actinides are radioactive, others have chemical
effects that can eat away at the containment. The implications of this are many.</p>
<ul>
<li><strong>Material Degredation</strong> &mdash; with half the periodic table of the elements
	dissolved in salt and in contact with the containment vessel, there are lots of corrosion
	and related concerns. Noble metals will naturally plate out on cold metal surfaces. In a
	power reactor, a heat exchanger will be the coldest metal around, and so the heat transfer
	surfaces will need periodic replacement. At MSRE, Tellurium caused cracking of the
	Hastelloy-N material. This was mitigated with chemistry, but similar problems may show up in
	long-lived power reactors. </li>

<li><strong>Tritium production</strong> If lithium is used in the salt, tritium will be produced,
	which is radioactive and extremely mobile (since it is small, it can go through metal like a
	hot knife through butter). ORNL used a special sodium fluoroborate intermediate salt to
	capture most of it, but a large amount still escaped to the environment.</li>

<li><strong>Remote maintenance</strong> The chemical plants will need periodic maintenance, but all
	of the equipment will be highly radioactive. Expensive remote maintenance will be required.
	If graphite moderator is used, its replacement will also be remote and expensive. </li>

<li><strong>Complex chemical plant</strong> &mdash; Some of the fission product removal is simple,
	such as the gas sparging to remove Xe and Kr, and noble metal plateout. But to do the more
	serious fission product (or actinide) separation, complex processes are required, such as
	the liquid Bismuth reductive process, volatilization, or electoplating. These have been
	studied in detail, but are complex enough to be a disadvantage. Don&rsquo;t make us post a
	process flow diagram. (You can find one from the MSBR on page 8 of <a
    href="http://www.osti.gov/scitech/biblio/6650305">ORNL-TM-6413</a>.)</li>

</ul>

<h3>Proliferation</h3>
<p>The main political barrier to MSRs is their perceived bomb-factory capabilities. If you talk to
<a href="{% link non-proliferation.md %}">non-proliferation people</a>, they will tell you that as
soon as the (solid) fuel pins are cut open, a technology is considered proliferative. The problem
with MSRs, then, is that the fuel is already completely cut open and melted. You&rsquo;re halfway to
a bomb already, they think. Here&rsquo;s what they are worried about.</p>
<ul>
<li><strong>Protactinium-233 decays to pure, weapons-grade U-233</strong> &mdash; Many Thorium-cycle
	MSRs have to capture Pa as it is produced, removing it from the system while it decays to
	U-233 and then reinserting it into the reactor. They have to do this because otherwise the
	Pa-233 absorbs too many neutrons to maintain a breeding cycle. The problem here is that that
	ex-core U-233 is basically pure weapons-grade U-233 which could be used to make a bomb. It
	usually comes with Zr, but separating Pa from Zr is simple. Not many common reactors require
	such a proliferative step in their fuel cycle. Many MSR concepts do not do this, but
MSBRs (like the LFTR)
	require it. Therefore, the owner of a MSBRs could be producing bombs on the side. Many of the
	ideas for mitigating this problem (such as U-232 contamination and denaturing) only help
	against diversion by a nefarious third party. The owners of the plant could side-step these
	kinds of fixes easily, and that&rsquo;s really what matters.  </li>
<li><strong>Inventory tracking is difficult</strong> -- Because a lot of materials plate out in the
	reactor and in the chemical plant, it is difficult to keep exact track of all of your
	actinides. The IAEA puts safeguards in reactors to make sure that all the actinides are
	accounted for (to verify that no one&rsquo;s making bombs on the side) but it will be
	difficult for the IAEA to distinguish plate-out losses from actual proliferative losses.
</li>
</ul>

### Other minor issues

There are a few other concerns, but these probably have practical solutions.

- **Unknown waste form** &mdash; It's not clear what nuclear waste from
  MSRs will look like. The salt itself is not contained enough to be put in a
  repository so someone will have to come up with a stable waste form.
- **Electrical heaters are required to stay liquid** &mdash; in a prolonged power
  outage, the colder parts of the heat transfer loop might solidify. This could cause
  temperatures to rise over in the core (which will of course still be self-heated liquid).
- **Flowing delayed neutron precursors** --- since the fuel flows, the fission products
  that generate delayed neutrons are swept out of and then back into the core. The
  dynamics of this are unconventional and can lead to reactivity increases when the pump
  stops.

<h3>Exotics in the salt</h3>
<p>For MSRs to breed with slow neutrons, the lithium in the salt must be enriched to very pure
Li-7. Li-6 is a strong neutron poison and becomes tritium, the pesky mobile radiation source. Also,
Beryllium in Flibe is a controlled substance. It has some weapons applications and is a very
dangerous material in terms of biological inhalation risks. In chloride salts, you must enrich to
have pure Cl-37. Otherwise, Cl-35 has a strong (n,proton) threshold reaction that poisons the
reactor. Also, the activation product Cl-36 is a long-lived, water soluble, hard beta emitter that
complicates waste disposal. These enrichment needs increase the cost and complexity of MSR fuel
cycles. Maybe we can find a more ideal salt someday. </p>
<h3>Summary</h3>
<p>There are more specific problems with more specific types of MSRs, but you get the general idea
here. Basically, MSRs are underdeveloped and require a lot more research (especially in corrosion)
before they can surely take off as the world&rsquo;s fleet of power plants. Personally, we think (as
did Alvin Weinberg and Edward Teller) that these reactors have a shining place in the mid-future.
Right now, we have to keep studying them! Fortunately, much work is ongoing. </p>

<h2 id="history">History of Molten Salt Reactors</h2>
<div class="float-end">
<a href="/img/htre_lg.jpg"><img  class="rounded" src="/img/htre.jpg" width="200" alt="Nuclear powered aircraft. This one is in Idaho at the EBR-I museum. It wasn&rsquo;t actually molten salt cooled but it shows that they were serious." title="Nuclear powered aircraft. This one is in Idaho at the EBR-I museum. It wasn&rsquo;t actually molten salt cooled but it shows that they were serious." /></a>
<a href="/img/are.jpg"><img  width="200" src="/img/are.jpg" class="rounded" alt="The Aircraft Reactor Experiment, the first molten salt reactor. (NSE,2, pp 804-825, 1957)" title="The Aircraft Reactor Experiment, the first molten salt reactor. (NSE,2, pp 804-825, 1957)" /></a>
</div>

The first fluid fueled reactors were built during the Manhattan project. They were Aqueous
Homogeneous Reactors (AHR), meaning they were solutions of uranium or plutonium in water. These
small reactors were primarily used to study plutonium. Later (concurrently to MSR development),
several AHR test reactors were built at Oak Ridge National Laboratory (these were the Homogeneous
Reactor Experiments HRE-1 and HRE-2). Molten salt fuels were first conceived of in the late 1940s,
when people began thinking of nuclear powered airplanes! The idea was to have very long range
bombers in the air at all times. To heat air to high enough temperatures to provide thrust, such a
nuclear reactor would need very high temperatures and very high power densities. The Aircraft
Nuclear Propulsion program was a huge effort, and most of the early studies of molten
salts were done under its direction. The first molten salt reactor, the [Aircraft Reactor
Experiment (ARE)](https://en.wikipedia.org/wiki/Aircraft_Reactor_Experiment) operated in
1954 at ORNL with a Na-Zr-U salt for 96 MW-hours. This reactor actually had fuel pumping
through tubes in blocks of Beryllium. When inter-continental ballistic missiles came
along, this program was promptly canceled.

<div class="alert alert-success"
role="alert" markdown="1"> <b>Note:</b> We have an elaborate [reactor development history
page]({% link reactor-history.md %}) that covers this topic in general.
</div>

<div class="float-end">
<a href="https://en.wikipedia.org/wiki/File:MoltenSaltReactor.jpg"> <img class="rounded" src="/img/msre.jpg" alt="The Molten Salt Reactor Experiment (MSRE)" title="The Molten Salt Reactor Experiment (MSRE)" /></a>
</div>

<p>After the cancellation of the ANP project, the people at ORNL wanted to use their MSR skills to
build a commercial power plant. In 1956, ORNL director Alvin Weinberg hired a guy named MacPherson
to form a group at ORNL to build such a thing. To be successful, they needed a fuel salt that
absorbed very few neutrons, dissolved much uranium and thorium, was thermally stable, and was
chemically compatible with structural materials. They decided the fluorides were best, but
UF<sub>4</sub> had a very high melting temperature (1035 C). Mixed with BeF<sub>2</sub>, the melting
temperature became practical, but the viscosity was too high. Mixing in some LiF brought the
viscosity down. Thus was born UF<sub>4</sub>-LiF-BeF<sub>2</sub>, now known as Flibe. Construction
of a test reactor called the Molten Salt Reactor Experiment (MSRE) began in 1962 using this salt
(with a bit of ZrF<sub>4</sub>), and the plant began operation in 1966. In 1968, all the uranium was
extracted and replaced with U-233, the fissile nuclide of the Thorium cycle. Thus, MSRE was the
first reactor to operate on U-233. The reactor was shut down on schedule in 1969 as funding was set
to go towards designing and building a bigger prototype MSR called the Molten Salt Breeder Reactor
(MSBR).</p>

<p>But it would not be so! The Atomic Energy Commission (the ancestor of the Dept. of Energy) could
not be convinced to put more money into the molten salt project. For one thing, they were already
over budget on a very large and expensive <a href="{% link fast-reactor.md %}">fast-breeder</a>
project. Besides, there were some big problems at MSRE that some people were not convinced could be
solved. ORNL director Alvin Weinberg put much energy into keeping the program going, but it was not
destined to be. Funding was largely canceled and MSRs lost their momentum. </p>

<p>MSR work continued at a low budget. The ORNL experts came up with likely solutions to most of the
problems raised at the MSRE. When proliferation concerns about the MSR were brought up in the 1980s,
ORNL developed (on paper) something called the denatured MSR, or DMSR that was not fissile
self-sufficient, but still offered favorable performance in comparison to traditional reactors.
Others throughout the world worked on salt chemistry problems and developed many other designs,
including some chloride salt fast breeder MSRs. Much later, in 2001, the MSR was chosen by the
Generation IV forum as one of the 6 Gen-IV concepts. This jump-started work on MSRs and engineers
and chemists have produced much good work on them since then. </p>

<h2 id="fhr">Salt-cooled reactors</h2>
<p>The step-sister reactor of the MSR is the fluoride cooled high temperature reactor (FHR). These
reactors have solid fuel in the form of TRISO particles (like the high temperature gas-cooled
reactor), but rather than pumping high-pressure helium coolant through, they pump low-pressure
liquid salt (usually Flibe) through. The idea here is to get the high-temperature and high-burnup
benefits of the gas reactors without the risk of a depressurization accident. Salt coolant has
incredible heat capacity (but low thermal conductivity), so it does a good job of handling
accidents. These reactors are currently being studied by the DOE and many others (including the
Chinese). <a
    href="/assets/FHR_Project_Presentation_January_2012a.pdf">Here is a
    PDF</a> presentation by one of the PIs at MIT. </p>

<h2 id="ongoing">Ongoing Molten Salt Reactor Work</h2>

In 2011, the Chinese Academy of Science started a project in Shanghai to put
substantial resources into MSR technology. There are 300-500 people on the
project, with a budget in the hundreds of millions. Most of the work is on FHRs,
but there is definitely MSR work as well. They are manufacturing Hastelloy-N,
separating lithium, building salt loops, and building advanced modeling
capabilities. That project is most likely the most exciting in MSRs since 1969.
They originally planned on having both an experimental 2MW FHR and an
experimental 2MW MSR operational by 2020.

The new Chinese MSR, called the TMSR-LF-1, was completed and brought to
criticality on Oct 11, 2023
([ref](https://www.gen-4.org/resources/webinars/education-and-training-series-97-overview-and-update-msr-activities-within-gif)).
Full power was reached on June 17, 2024. Pa-233 from the (very small amount of
included) thorium was detected Oct 8, 2024. It's not actually thorium-fueled,
it's run by U-235, but it is thorium-containing, which is a fun milestone and
something the US folks as MSRE never did. It's certainly not the first thorium
reactor, but it is the world's first thorium-containing reactor with fluid fuel.

In the USA, Abilene Christian University in Texas obtained [a construction
permit](https://www.nrc.gov/reactors/non-power/new-facility-licensing/msrr-acu.html)
from the US NRC to allow them to build a small molten salt research reactor
(MSRR) on campus. This reactor project is ongoing.

<p>Several start-up companies have emerged to commercialize molten salt reactors. In Canada, <a
href="https://terrestrialenergy.com/">Terrestrial Energy</a> is working on small modular MSRs,
featuring small reactor vessels that can be swapped out of a plant every 7 years or so. <a
href="http://thorconpower.com/">ThorCon</a> is using its extensive experience in the ship-building
industry to develop MSRs that need no new technology and can be built in the very near term. In
Alabama, Kirk Sorensen himself runs a company called <a href="http://flibe-energy.com/">Flibe
Energy</a> targeting the development of small modular Thorium-MSRs. These companies represent the
modern revival of interest in MSRs and we wish them all the best!</p>

<h2 id="see_also">See Also</h2>
<ul>
<li>Our page on <a href="{% link thorium.md %}">the Thorium cycle</a></li>
<li>Our <a href="{% link thorium-myths.md %}">Thorium Myths page</a></li>
<li>Our page on <a href="{% link reactors.md %}">nuclear reactors</a></li>
<li>A <a href="/assets/FHR_Project_Presentation_January_2012a.pdf">PDF presentation on FHRs by Charles Forsberg</a></li>
</ul>

<h2 id="refs">References</h2>

- [Program plan for development of molten-salt breeder reactors
  (ORNL-5018) ](https://www.osti.gov/biblio/4227904) — This 1974 reference is what the world's preeminent molten-salt scientists wrote to future reactor developers about what
  they had accomplished and how to pick up right where they left off. Above all other molten-salt related references, this
  one is probably the most useful to anyone working on MSRs. It has detailed lists of what research needs to be done, how
  long it will probably take, and how much it will cost. It's a true wonder.
- [Molten-Salt Reactors—History, Status, and Potential](https://www.tandfonline.com/doi/abs/10.13182/NT70-A28619) — An
  excellent discussion of the history of MSRs. Alternate download
  [here](http://moltensalt.org/references/static/downloads/pdf/NAT_MSRintro.pdf)
- [MSRE Design and Operations Report, Part I, Description of Reactor Design
  (ORNL-TM-728)](https://www.osti.gov/biblio/4654707) — A description of the Molten Salt Reactor Experiment design. This
  is part of a 10-part series describing the experience with the MSRE. All documents are widely available.
- [The Aircraft Reactor Experiment](https://en.wikipedia.org/wiki/Aircraft_Reactor_Experiment)

</div>
</div>
