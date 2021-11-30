---
layout: default
title: Radiation on flights
category: blog
description: How much radiation do we encounter while flying on commercial flights?
author: Nick Touran
image: /img/crshower2_nasa_big.jpg
---
<div class="row">
<div class="col-md-8" markdown="1">

<h1>Radiation on Flights</h1>
<h5>By Nick Touran, Ph.D., 2014-05-17</h5>

> *ra-di-a-tion* &mdash; the emission of energy as electromagnetic waves or as moving
> subatomic particles, especially high-energy particles that cause
> ionization.

Radiation exists in nature, and has since the beginning of time. Radio waves
and light are examples of low-energy (harmless) radiation, while x-rays and gamma
rays are examples of higher energy radiation which, in large enough doses, can
cause biological damage. The amount of radiation we receive on a daily basis is
called background radiation. Most of your background comes from inhaling the
natural (and radioactive) element radon in the air, but 1/6 of your background
(on average) comes from cosmic rays [1]. These rays are of interest when thinking
about radiation on flights.

## Cosmic rays and air showers

<div class="thumbnail pull-right" style="max-width:300px">
<a href="/img/crshower2_nasa_big.jpg"><img class="img-responsive"
src="/img/crshower2_nasa_big.jpg"  alt="An air shower"/></a> 
<div class="caption"><p>Radiation from space hits Earth 24/7 (Swordy via <a
href="https://apod.nasa.gov/apod/ap060814.html">NASA APOD</a>)</p></div>
</div>

Cosmic rays are energetic particles from space. Most of them are protons that
probably got shot out of exploding stars (supernova) in our galaxy. They are
flying around the galaxy and hit Earth very regularly. When they hit the
atmosphere, they cause an *air shower*, where hundreds of less energetic
particles are produced from one incident cosmic ray.  Because of the way Earth's
magnetic field is oriented, it's easier for galactic cosmic rays to reach the
ground on the polar regions than it is at the equator.

Besides galactic cosmic rays, events on our own sun shoot out the minority
of cosmic radiation, so we do see some changes in the cosmic dose during the
11-year solar cycles.

The atmosphere shields people from the majority of these. But when
you're in an airplane, you have a lot less shielding.

## Dose in an airplane

When you're in an airplane, high above the Earth, you receive much
higher radioactive doses from cosmic rays than people on the ground. In fact,
commercial airline workers who are on planes for up to 900 hours per year,
receive among the highest occupational dose of any occupation, coming in just
below uranium miners with 3 mSv/year [2]. Note that nuclear power plant
operators receive less than half of this.

Just for fun, I thought I'd take some radiation measurements on a flight. I had
to fly from Detroit to Paris for work recently, so I brought along my Geiger
counter and GPS to keep track of radiation vs. altitude. Check it out: 

<div class="thumbnail">
<img class="center" src="/img/dose_and_alt_vs_time.png" alt="radioactive dose
vs. altitude on a commercial flight" title="radioactive dose vs. altitude on a
commercial flight"/>
<p class="caption"><strong>Figure 1. </strong>Measured radioactive count rate of
my Geiger counter during a flight from Michigan to France. The peak value is
about 20x the background. I didn&rsquo;t calibrate the detector due to the
complex nature of radiation in the atmosphere, so the units are just in counts
per minute.</p> 
</div
>
<img class="img-rounded, pull-left" src="/img/detector.jpg"
       style="width:200px;margin:10px;" alt="the radiation detector used to make the
       measurements" title="the detector used to make the measurements"/> 

You can clearly see that the dose increases with altitude. Since this is a polar
flight, the dose is higher than average for normal flights. A typical dose rate
at cruising altitudes in polar regions is 7 &micro;Sv/h, while equatorial
flights would be more like 2.5  	&micro;Sv/h [1]. This means that you&rsquo;d
have to be in the air in polar regions (US to Europe, etc.) for about 21 hours
to get the same dose as a full mouth series of dental X-rays (150 &micro;Sv).
The average background + medical + occupational dose to someone in the US is
6240 &micro;Sv/year [3], so a few flights won&rsquo;t change that much. Only
professional aircrew get substantial fractions of their yearly dose from the
cosmos.

## So is it dangerous?

Nope. These doses are well below any levels that have been shown to cause
cancer or other damage. A 2002 study of 10,000 airline pilots was performed
over 17 years that found that &quot;no marked risk of cancer attributable to
cosmic radiation is observed in airline pilots.&quot; [4] So as long as
you&rsquo;re flying less than an airline pilot, you have nothing to worry
about. 

Outside of the atmosphere, cosmic radiation poses a major
problem for interplanetary travel (like for manned missions to Mars or a colony
on the moon), so that&rsquo;s something to keep in mind. 

<h1 id="references">See Also</h1>

* [Basics of radioactivity]({% link radioactivity.md %}) &mdash; review of what radiation is
* [Radioactive dose]({% link dose.md %}) &mdash; more info about the units of radioactive dose
* [Air shower (Wikipedia)](http://en.wikipedia.org/wiki/Air_shower_%28physics%29)
  &mdash; more info about the cascade of particles that comes raining down after a
  high energy cosmic ray interacts with the atmosphere
* [Background radiation (Wikipedia)](http://en.wikipedia.org/wiki/Background_radiation) 
  &mdash; tables detailing the various components of background radiation
* [NASA live simulation of dose rates in air](https://iswa.ccmc.gsfc.nasa.gov/IswaSystemWebApp/index.jsp?i_1=664&l_1=40&t_1=270&w_1=600&h_1=620&s_1=0_0_0&i_2=665&l_2=652&t_2=268&w_2=700&h_2=370&s_2=0_0_10_3&i_3=666&l_3=655&t_3=647&w_3=640&h_3=500&s_3=0_0_10_3) &mdash; an incredible simulation
  showing realistic current dose rates


# References
<ol>
    <li>UNSCEAR 2000 REPORT Vol. I, SOURCES AND EFFECTS OF IONIZING RADIATION,
        &quot;Exposures from natural radiation sources,&quot; <a
            href="http://www.unscear.org/docs/reports/annexb.pdf">Annex B</a>
        (2000).</li> <li>UNSCEAR 2000 REPORT Vol. I, SOURCES AND EFFECTS OF IONIZING
        RADIATION, &quot;Occupational radiation exposures,&quot; <a
    href="http://www.unscear.org/docs/reports/annexe.pdf">Annex E</a> (2000).</li>
   <li>DA Schauer, <a href="http://www.ncrppublications.org/Reports/160">Ionizing
           Radiation Exposure of the Population of the United States (2009).</a></li>
   <li>E. Pukkala, et. al., <a
           href="http://www.bmj.com/content/325/7364/567">Incidence of cancer among
           Nordic airline pilots over five decades: occupational cohort study,&quot;
   (2002).</a></li>
</ol>
</div>
</div>

