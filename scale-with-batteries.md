---
layout: default
title: How many batteries do you need to store electricity for a night?
description: How many batteries does it take to power a town through the night?
author: nick
date: 2013-06-13
byline: true
---

<div class="row">
<div class="col-md-8" markdown="1">
Energy storage is a common topic that comes up in discussing energy. A lot of people think it would
be easy to just charge some batteries during the day with a solar plant and then use them through
the night. Critics of this idea frequently tell proponents to &quot;do the math.&quot; This page
does the math and tries to help you understand the energy storage issue in concrete, visualizable
numbers. We attempted this with pumped storage using <a
href="{% link scale.md %}">aircraft carriers before</a>, but this time
we're using batteries.

Robert Stone, the filmmaker who brought us the documentary Pandora's Promise, suggested at a
screening in Seattle in October 2013 that he views climate change denial in the same light that he
views scale of energy problem deniers. This page is an attempt to better educate the scale-deniers.

The case of interest is the replacement of a single large baseload power plant (1 gigawatt electric)
with a large solar array and a bunch of batteries. This is a typical size for a nuclear power plant,
and can produce electricity for a city of about 700,000 average US citizens, or 1/440th of the USA.
If you want to scale up the battery requirements to the entire USA, just multiply by 440.

While we know that energy demand decreases at night a large baseload remains, and we assume here
that the plant continuously operates at 1GWe. This is not uncommon for baseload plants to do.

(This document was created with free and open source ipython notebook)

## Doing the math

First we determine how much energy (in Joules) is produced by a 1 GWe power plant over an 8-hour
night. This is just energy=power\*time

{% highlight python %}

> > > nightEnergy = 1.0e9 _ 8.0 _ 3600.0 # 1e9 watts _ 8 hours _ 3600 seconds/hour
> > > print(nightEnergy)
> > > 2.88e+13
> > > {% endhighlight %}

Now, to figure out how many batteries that would be, we need to know how much energy is stored in a
battery. Different types of batteries can store different amounts of energy. Using information from
<a href="http://www.allaboutbatteries.com/Battery-Energy.html">here</a>, we load up some basic
information (including some that will be used later). This table mixes energy units of Joules and
watt-hours, but they are easily related by 3600 Joules = 1 watt-hour and we'll use this conversion
throughout.

{% highlight python %}
batteryTypes=['LeadAcid','Alkaline','NiMH','Li-Ion']
specificEnergy = dict(zip(batteryTypes,[146000,400000,340000,460000])) # J/kg
costPerWh=dict(zip(batteryTypes,[0.17,0.19,0.99,0.47])) # $/watt*hour
wattHPerLiter=dict(zip(batteryTypes,[100,320,300,230])) # watt*hours / liter
{% endhighlight %}

Now we can figure out the battery masses required to store 8 hours of energy from a 1 GWe plant using each type of battery:

{% highlight python %}
%pylab inline
massRequired = [nightEnergy/specificEnergy[bType] for bType in batteryTypes]
x = range(len(batteryTypes))
pylab.bar(x,[nightEnergy/specificEnergy[k] for k in batteryTypes],align='center')
pylab.xticks(x,batteryTypes)
dum=pylab.ylabel('Mass of batteries (kg)')
dum=pylab.title('Mass of batteries needed for 1 night')
{% endhighlight %}

<img alt="graph showing mass of batteries needed" src="/img/batteries-at-night1.png">

That seems like a lot, but is hard to visualize. Let's look at the plot in terms of volume. It will
still be huge numbers, but we can visualize it better by stacking the batteries up on a full
football field, which is 110x49 square meters. How tall will the full football field stacks of
batteries be?

{% highlight python %}
areaFootball = 110\*49 # area of football field in square meters

# Compute height as height= volume needed/ area available

# Convert nightEnergy from Joules to watt\*hours and liters to m^3.

heightOnFootballField = [nightEnergy/3600/wattHPerLiter[bType]\*0.001/areaFootball for bType in
batteryTypes]
pylab.bar(x,heightOnFootballField,align='center')
pylab.xticks(x,batteryTypes)
dum=pylab.ylabel('Height stacked on field (m)')
dum=pylab.title('Size of batteries needed for 1 night')`
{% endhighlight %}

<img alt="Volume of batteries graph" src="/img/batteries-at-night2.png">

So, with modern electric-car Lithium-ion batteries, the football field would have to be stacked 6
meters (~18 feet) tall to store enough energy for one night from one power plant. The next question
is, how much would this cost to build?

{% highlight python %}
cost = [nightEnergy/3600\*(costPerWh[bType]/1e9) for bType in batteryTypes]
pylab.bar(x,cost,align='center')
pylab.xticks(x,batteryTypes)
dum=pylab.ylabel('Cost of batteries (billions $)')
dum=pylab.title('Cost of batteries needed for 1 night')
{% endhighlight %}

<img alt="cost of batteries graph" src="/img/batteries-at-night3.png" >

In all cases, the storage facility adds at least an additional <code>$</code>1 billion to a power
plant, just based on battery materials alone. Assuming we don't want to build lots of 14 meter tall
lead football fields everywhere (due to heath concerns regarding lead), we're stuck with Li-ion
batteries (since Alkalines aren't rechargable), so the estimated battery cost for this facility is
<code>$</code>4 billion. This is about the cost of a new 1 GWe nuclear plant.

## Other ways to store energy

There are other ways of storing energy besides charging batteries, such as pumped storage. In that
case, you have to lift the equivalent of 44 fully loaded aircraft carriers to the top of the Burj
Khalifa every night. Another option is to use molten salt, which has high heat capacity.

In the very-cool smartgrid idea, when extra electricity is needed, the grid just temporarily asks
for energy back from a fleet of electric vehicles where some percentage are usually plugged into the
wall (because people are at home or work, not driving). This might be fine for the daily peaking,
but to do this at night, considering that a Tesla Model S comes with a 60kW\*hour battery <a
href="https://www.tesla.com/models">source</a>, it would take:

{% highlight python %}

> > > print(nightEnergy/3600/60000)
> > > 133333.333333
> > > {% endhighlight %}

133.3k Teslas per 700,000 citizens to get through the night. And then their batteries would all be
dead for a few hours after the sun came up. So if 1 in 5 people bought Teslas that they just stored
in their garage as batteries for the grid and only drove between 11am and 1pm or so, then the
storage problem would be solved.

## Conclusion

We determined that to replace a single large baseload power plant with a solar plant that doesn't
work at night, we need a very large and expensive storage system. With Lithium-ion batteries, the
storage required would be a 6-meter tall stack of batteries on an entire football field and would
cost more than the power plant itself. We assumed perfect charging, when in fact the charging
efficiency of these batteries is much less than 100%.

## Further reading

For additional education, check out our front page at <a href="/">whatisnuclear.com</a>.

</div>
</div>
