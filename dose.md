---
layout: default
title: What is radioactive dose?
category: physics
description: We discuss radioactive dose and sources of radiation. General health related stuff.
author: jesse
date: 2008-10-14
last_modified_at: 2025-05-24
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
Different types of radiation have different effects on the body because 
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

## Dose conversion table

This table shows some doses in different units. Datapoints are from the [DOE dose charts](https://www.energy.gov/sites/prod/files/2018/01/f46/doe-ionizing-radiation-dose-ranges-jan-2018.pdf).

<div class="table-responsive">
   <table class="table table-striped table-bordered table-hover">
         <thead class="table-dark">
            <tr>
               <th scope="col"></th>
               <th scope="col">rem</th>
               <th scope="col">mrem</th>
               <th scope="col">Sv</th>
               <th scope="col">mSv</th>
               <th scope="col">µSv</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Typical cross-country flight</td>
               <td>0.0037</td>
               <td>3.7</td>
               <td>0.000037</td>
               <td>0.037</td>
               <td>37</td>
            </tr>
            <tr>
               <td>Chest x-ray</td>
               <td>0.02</td>
               <td>20</td>
               <td>0.0002</td>
               <td>0.2</td>
               <td>200</td>
            </tr>
            <tr>
               <td>NRC cleanup criteria (/yr)</td>
               <td>0.025</td>
               <td>25</td>
               <td>0.00025</td>
               <td>0.25</td>
               <td>250</td>
            </tr>
            <tr>
               <td>NRC dose limit to public (/yr)</td>
               <td>0.1</td>
               <td>100</td>
               <td>0.001</td>
               <td>1</td>
               <td>1000</td>
            </tr>
            <tr>
               <td>Average background (/yr)</td>
               <td>0.6</td>
               <td>600</td>
               <td>0.006</td>
               <td>6</td>
               <td>6000</td>
            </tr>
            <tr>
               <td>Chest CT</td>
               <td>2.5</td>
               <td>2500</td>
               <td>0.025</td>
               <td>25</td>
               <td>25000</td>
            </tr>
            <tr>
               <td>Guarapari background (/yr)</td>
               <td>3.5</td>
               <td>3500</td>
               <td>0.035</td>
               <td>35</td>
               <td>35000</td>
            </tr>
            <tr>
               <td>NRC dose limit to workers (/yr)</td>
               <td>5</td>
               <td>5000</td>
               <td>0.05</td>
               <td>50</td>
               <td>50000</td>
            </tr>
            <tr>
               <td>Acute dose that may increase lifetime cancer</td>
               <td>10</td>
               <td>10000</td>
               <td>0.1</td>
               <td>100</td>
               <td>100000</td>
            </tr>
            <tr>
               <td>Typical mission on ISS</td>
               <td>12</td>
               <td>12000</td>
               <td>0.12</td>
               <td>120</td>
               <td>120000</td>
            </tr>
            <tr>
               <td>Ramsar Iran background (/yr)</td>
               <td>15</td>
               <td>15000</td>
               <td>0.15</td>
               <td>150</td>
               <td>150000</td>
            </tr>
            <tr>
               <td>Interplanetary space background (/yr)</td>
               <td>65</td>
               <td>65000</td>
               <td>0.65</td>
               <td>650</td>
               <td>650000</td>
            </tr>
            <tr>
               <td>Expected Mars mission</td>
               <td>100</td>
               <td>100000</td>
               <td>1</td>
               <td>1000</td>
               <td>1000000</td>
            </tr>
            <tr>
               <td>Human LD 50/30, no medical attn</td>
               <td>400</td>
               <td>400000</td>
               <td>4</td>
               <td>4000</td>
               <td>4000000</td>
            </tr>
            <tr>
               <td>Total Body Irradiation therapy</td>
               <td>500</td>
               <td>500000</td>
               <td>5</td>
               <td>5000</td>
               <td>5000000</td>
            </tr>
            <tr>
               <td>Human LD 50/30, w/ medical attn</td>
               <td>800</td>
               <td>800000</td>
               <td>8</td>
               <td>8000</td>
               <td>8000000</td>
            </tr>
            <tr>
               <td>Death certain</td>
               <td>1200</td>
               <td>1200000</td>
               <td>12</td>
               <td>12000</td>
                  <td>12000000</td>
               </tr>
         </tbody>
   </table>
</div>

## References

1. <a href="https://www.nrc.gov/reading-rm/doc-collections/cfr/part020/part020-1004.html">NRC readings</a>
2. <a href="https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/bio-effects-radiation.html">NRC Factsheet on radiation</a>
3. <a href="https://www.nrc.gov/about-nrc/radiation/around-us/doses-daily-lives.html">NRC Doses in Daily lives</a>

## See Also

- <a href="https://energy.gov/ehss/radiation-safety-training-materials">Radiation info from DOE [pdf]</a>
- <a href="https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/bio-effects-radiation.html">Biological effects of radiation (NRC)</a>
- <a href="https://www.nrc.gov/reading-rm/doc-collections/cfr/part020/">CFR-20 regulations (NRC)</a>
- <a href="https://www.epa.gov/radiation/calculate-your-radiation-dose">Calculate your radiation dose</a>

</div>
</div>
