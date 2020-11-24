---
layout: default
title: Greenpeace, CNN, The Hill miss context on radiocarbon release
category: blog
description: > 
    CNN's headline based on Greenpeace's claim that releases of radiocarbon (C-14) could "Alter Human
    DNA" are at odds with impacts seen from natural C-14 production and historical releases
author: Nick Touran, Ph.D. (nuclear engineering)
image: /img/blog-fukushima-c14-comparison.png
mathjax: true
---
<div class="row">
<div class="col-md-8" markdown="1">
# {{ page.title }}
##### {{ page.author }}, {{ page.date | date: "%Y-%m-%d" }}. Reading time: {{ page.content | reading_time_as_i }}


On Saturday, Oct. 24<sup>th</sup>, CNN published [an
article](https://www.cnn.com/2020/10/24/asia/japan-fukushima-waste-ocean-intl-scli/index.html)
with the following headline:

![Headline](/img/blog-greenpeace-dna-headline.png){: .img-responsive }

Greenpeace is suggesting that the carbon-14 ($$^{14}$$C) in the tanks will be released in
a way that is a serious threat to human health. Ionizing radiation can damage DNA, but
life evolved in a naturally radioactive world. They fail to mention important contextual
information that would help people assess the relative seriousness of this threat. This
post fills in that contextual gap.

![Plot](/img/blog-fukushima-c14-comparison.png){: .img-responsive }

## How much $$^{14}$$C are we talking about?

Greenpeace says there are 63.6 giga-Becquerel (GBq) of $$^{14}$$C in the tanks. How much
is that? A [Bq](https://en.wikipedia.org/wiki/Becquerel) is a unit of radioactivity that
is equivalent to 1 decay per second. [To convert an activity]({% link
math-behind-radioactive-decay.html %}) (A) in Bq to number of atoms (N) of a radioactive
substance, we use the formula:

$$ N = \frac{A}{\lambda} $$

where $$\lambda$$ is the decay constant and is equal to $$\frac{ln(2)}{\tau_{1/2}}$$. For
$$^{14}$$C the half-life $$\tau_{1/2}$$ is [equal to 5700
years](https://www.nndc.bnl.gov/nudat2/decaysearchdirect.jsp?nuc=14C&unc=nds) or
1.80e+11 seconds. Thus, 63.6 GBq is equal to

$$ \frac{63.6e9}{\frac{ln(2)}{1.8e11}} = 1.7e22 \text{ atoms of }^{14}C$$

A mole of atoms is 6.022e23 atoms (Avogadro's number), so this is 0.02755 moles.
At ~14 grams/mole, this comes out to a **grand total of 0.4 grams of $$^{14}$$C in all the tanks
combined**.

## Natural sources of $$^{14}$$C

You've heard of using carbon dating to figure out how old things are. This works
because $$^{14}$$C is created continuously in our atmosphere when cosmic protons interact with
our atmosphere. $$^{14}$$C has been made in our air constantly since well before humans evolved.
How much is produced? [Kanu, et al](https://doi.org/10.1002/2015GL066921) shows that 
2.2(±0.6)e26 atoms of $$^{14}$$C are produced this way per year. 

Again dividing by Avogadro's number and multiplying by 14 grams/mol, we see that nature
places 5100 grams of $$^{14}$$C per year into our atmosphere. This is equal to 14 grams per day.

**Thus, nature makes the entire inventory of $$^{14}$$C in the tanks every ~40 minutes
in the atmosphere.**

But is atmospheric and ocean health effects comparable? Yes they are. The Sellafield
report states quite clearly in §4.2.4.1:

> Carbon-14 collective doses are similar whether released to atmosphere or sea.

## Historical releases of $$^{14}$$C

[The Sellafield report](http://www.wise-paris.org/english/reports/STOAFinalStudyEN.pdf)
referred to by Greenpeace shows that the Sellafield reprocessing plant released between 30
and 60 grams of $$^{14}$$C per year for at least 20 years. At this rate (again vastly higher
than the total inventory at Fukushima released every year), it was assessed that the
natural dose from $$^{14}$$C could nearly double for critical populations due to local
concentrations. That could arguably be concerning for people sensitive to 2x their natural
background dose. 

But since the Fukushima release is so much smaller than this, and we didn't see an
alteration of human DNA from those larger releases, there is a good chance that the
Fukushima discharges will not alter human DNA.

## Citations
* [TEPCO presentation June 30, 2020 on radionuclide
  concentrations showing C-14 concentrations well below the legal limit](https://www.tepco.co.jp/en/decommission/progress/watertreatment/images/tankarea_en.pdf)
* The original Greenpeace report, entitled [Stemming the Tide 2020: The Reality of the
  Fukushima Radioactive Water
  Crisis](https://storage.googleapis.com/planet4-japan-stateless/2020/10/5768c541-the-reality-of-the-fukushima-radioactive-water-crisis_en_summary.pdf)
* [European Parliament report on the Sellafield reprocessing plant](http://www.wise-paris.org/english/reports/STOAFinalStudyEN.pdf) 
* Atmospheric production rate from [Kanu, et al](https://doi.org/10.1002/2015GL066921)
* [NNDC data for half life](https://www.nndc.bnl.gov/nudat2/decaysearchdirect.jsp?nuc=14C&unc=nds)


## See Also
* [Conca article in Forbes from 2019 explaining further context](https://www.forbes.com/sites/jamesconca/2019/09/12/its-really-ok-if-japan-dumps-radioactive-fukushima-water-into-the-ocean/#3636f309b298)
* [UNSCEAR 2008 Appendix
  B](https://www.unscear.org/docs/publications/2008/UNSCEAR_2008_Annex-B-CORR.pdf) showing
  radionuclide releases from other facilities

</div>
</div>

