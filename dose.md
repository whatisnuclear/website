---
layout: default
title: What is radioactive dose?
category: physics
description: We discuss radioactive dose and sources of radiation. General health related stuff.
author: jesse
date: 2008-10-14
byline: true
---


<div class="row">
<div class="col-md-8" markdown="1" id="dose">

Radiation dose is a measurement of how much energy is deposited into a material from a source of 
radiation (see <a href="{% link radioactivity.md %}">what is radiation</a>). It is measured in 
units called rads. Dose gives a physical explanation of energy deposited in mass but does not 
give a good description of the effects of that energy deposited into a living organism. For 
this, we need something called the dose equivalent.

<div class="alert alert-success" role="alert" markdown="1">
**Did you know?** You get 50 times more radioactive 
dose in a single flight from D.C. to L.A. than you get from living next to a nuclear power plant 
for a whole year.
</div>

<h2 id="doseequiv">What is dose equivalent?</h2>
Great question. Different types of radiation have different effects on the body because 
of the way they deposit their energy. To meaningfully interpret different doses of radiation, 
we modify a given dose by something called a quality factor that depends on the type of radiation. 
The higher the quality factor, the more dangerous an encounter with radiation may be. A table of 
quality factors is shown below.

</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">


## Quality Factors and Absorbed Dose Equivalencies

<table class="table table-striped">

<tr><th>Type of radiation </th><th >Quality factor<br />(Q)</th><th >Absorbed dose equal to a unit dose equivalent</th></tr>
<tr><td>X-, gamma, or beta radiation</td><td>1</td><td>1</td></tr>
<tr><td>Alpha particles, multiple-charged particles, fission 
fragments and heavy particles of unknown charge</td><td>20</td><td>0.05</td></tr>
<tr><td>Neutrons of unknown energy</td><td>10</td><td>0.1</td></tr>
<tr><td>High-energy protons</td><td>10</td><td>0.1</td></tr>
</table>

Dose equivalent is defined as H = D\*Q, where D is the dose and Q is the quality factor taken 
from the table above. Dose equivalent is supposed to approximate the biological effect of 
different types of radiation so the Sv (or rem) is used as the unit to regulate 
the amount of dose an individual receives, rather than rads.

Find more details offsite at: <a href="https://www.euronuclear.org/glossary/radiation-weighting-factors/">Radiation Weight Factor [euronuclear.org]</a>

## How much dose equivalent is safe?

When it comes to judging safety of radiation, we run into a lot of uncertainty. The only real data we have on the health effects of radiation
come from the victims of the nuclear bombings in Japan and from victims of other very high-radiation accidents. So we know quite well that receiving
a very large dose in a very short time (hours or days) is very dangerous. In fact, 50% of people receiving over 300 REM in a short time will die within 30 days 
of severe radiation poisoning. To get such a dose, you would have to stand very close (with no shielding) to a nuclear chain reaction or some 
other highly intense radiation source, such as a freshly spent fuel rod. So, obviously, a lot of radiation is very bad.

Less extreme doses can still have serious health effects. Radioactive particles stream through cells, breaking up their 
DNA and killing them, or causing them to become cancerous. Our skin provides good defense against much of the radiation 
we encounter on a daily basis. But when ingested, or uptaken into the body (like in the thyroid), very small amounts 
of radioactive material can cause serious illness and death. An example of this would be the terrible 
<a href="http://en.wikipedia.org/wiki/Alexander_Litvinenko_poisoning">poisoning of Alexander Litvinenko [wikipedia]</a>. 
As a result of the <a href="{% link chernobyl-main.html %}">Chernobyl disaster</a>, many cases of thyroid cancer were reported (thankfully, 
these were mostly treatable). Worse, you cannot smell or see radiation. It's nearly undetectable without special 
instruments. These are the reasons many people are terrified of radiation. 

Things get much more hazy when dealing with very low levels of radiation. Regulators often assume 
the linear no-threshold model, which says that any amount of radiation at any level is bad. This 
conservative model tells us to stay away from radiation as much as possible. By the way, other 
models, such as <a href="https://en.wikipedia.org/wiki/Hormesis">hormesis [wikipedia]</a>, suggest 
that in low levels, radiation is actually beneficial. There is no scientific consensus on this, 
so we just say better safe than sorry and minimize our radiation exposure. 

To help you determine how much radiation you are OK with, you first have to know how much radiation you already 
get. We provide the following data.

<figure>
<img src="/img/rad_effects.png" alt="Radiation doses and expected life impacts of various activities."/>
<figcaption>
<p><strong>Figure 1.</strong>  Dose equivalences from several activities and health risks of other activities.</p>
</figcaption>
</figure>

<figure>
<img src="/img/doses-in-perspective.jpg" alt="Radiation doses in perspective
(from the NRC)." title="Radiation doses in perspective (from the NRC)."/>
<figcaption>
<p><strong>Figure 2.</strong>  A logarithmic plot of doses you get from various sources.</p>
</figcaption>
</figure>

As you can see, you get radiation from many things you may not expect. Flying brings you 
outside the protection of many layers of atmosphere that shield us from cosmic radiation 
from the stars. Naturally radioactive building materials give more dose than chest X-rays. 
Living near a nuclear power plant doesn't even register on the graph.


<h2 id="protect">How do you minimize your dose around a radioactive source?</h2>
1. **Time** – Limit the time that you are located in a radiation area.  Less time means less absorbed dose for a given source.
2. **Distance** – The more distance that is put between you and the source decreases the intensity of the exposure from that source.
3. **Shielding** – Shielding is quite simply putting material between you and the source to lower intensity of the radiation.
   Examples include concrete walls or lead but generally the more material the better.

## References
1. <a href="https://www.nrc.gov/reading-rm/doc-collections/cfr/part020/part020-1004.html">NRC readings</a>
2. <a href="https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/bio-effects-radiation.html">NRC Factsheet on radiation</a>
3. <a href="https://www.nrc.gov/about-nrc/radiation/around-us/doses-daily-lives.html">NRC Doses in Daily lives</a>

## See Also
* <a href="https://energy.gov/ehss/radiation-safety-training-materials">Radiation info from DOE [pdf]</a>
* <a href="https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/bio-effects-radiation.html">Biological effects of radiation (NRC)</a>
* <a href="https://www.nrc.gov/reading-rm/doc-collections/cfr/part020/">CFR-20 regulations (NRC)</a>
* <a href="https://www.epa.gov/radiation/calculate-your-radiation-dose">Calculate your radiation dose</a>

</div>
</div>



