---
layout: default
title: Radiation detectors are amazingly sensitive
category: physics
description: >
  Radiation detection equipment is capable of detecting and identifying a single 
  atom decaying. This means radiation is detectable at levels thousands of times
  lower than what is known to be hazardous.
author: nick
date: 2023-07-22
byline: true
image: /img/nim_bin_lg.jpg
---

<div class="row">
<div class="col-md-8" markdown="1">

Radiation detection equipment, such as Geiger counters, can detect the radiation
emitted from a single atom decaying. They generally count how rapidly such
energetic rays or particles are entering the detector and give an estimate on
the gauge of the [dose rate]({% link dose.md %}), which is proportional to the
hazard to health. High dose rate (lots of radiation per second) is bad, low dose
rate (near or below the [natural background
level](https://en.wikipedia.org/wiki/Background_radiation)) not so much.

# Radiation has identifiable fingerprints

More sophisticated equipment, such as scintillator and high-purity germanium
detectors can both count each energetic ray coming in _while also measuring its
energy_. Since atomic nuclei exist in quantized energy levels, the energy of
emitted radiation from any given nucleus is always the same. For example, a
Cesium-137 nucleus _always_ emits gamma rays that have an energy of 661.7 keV.
So if you detect even one 661.7 keV gamma ray, you know that one atom of Cs-137
just decayed.

<figure>
<a href="img/cs137-decay.png"><img class="img-fluid" 
src="/img/cs137-decay.png" alt="Decay scheme for Cesium-137"/></a>
<figcaption>Cesium-137 emits gamma rays with exactly 661.7 keV 
(from <a href="https://www.nndc.bnl.gov/nudat3/getdecayscheme.jsp?nucleus=137BA&dsid=137cs%20bM%20decay&unc=nds">
NNDC</a>)</figcaption>
</figure>

The crazy thing here is that we can detect _absolutely trace amounts_ of Cs-137
(or any other nuclide) even if if it is contributing a thousandth or even less
of the natural background radiation.

# Measurable doesn't always imply dangerous

This shockingly sensitive detection capability can lead to undue confusion and
fear in headlines. Whenever anything radioactive at any concentration is
released to the environment, it is measurable, and big headlines ensue.

It is measurable if the dose rate is 1/1000th of the natural background dose
(and therefore utterly harmless) and it is measurable if the dose rate is 1000x
the natural background (and therefore hazardous indeed). Headlines that say
that radiation is being detected without offering an indication of dose rate are
meaningless.

Radiation dose rate numbers are a bit obscure and confusing. We have a [tool to
help]({% link dose-calc.md %}) understand and contextualize them by comparing
them to the natural background dose rate.

In many cases, leaks well below the hazardous level make major headlines.
Sometimes one must wonder if news organizations tend to capitalize on fear
to get more views rather than provide appropriate analysis and context.

# Always ask for the dose rate

If you are ever hearing about radiation somewhere with an implication of hazard,
seek information about the dose rate. If it's near or below background levels,
don't worry too much. If it's 10x, that may be a concern. If it's 1000x
background, seek shelter immediately.

# See Also

- [What is radiation?]({% link radioactivity.md %})
- [What is dose rate?]({% link dose.md %})
- [Dose rate comparison tool]({% link dose-calc.md %})
- [Scintillator detector](https://en.wikipedia.org/wiki/Scintillation_counter)
- [HPGe detector](https://en.wikipedia.org/wiki/Semiconductor_detector#Germanium_detectors)

</div>
</div>
