---
layout: default
title: What is a nuclear moderator?
category: details
description: Learn how moderators are used to slow down neutrons, and why. 
author: nick
byline: true
mathjax: true
date: 2007-04-21
updated: 2022-12-06
image: /img/u_235f.gif
---
<div class="row">
<div class="col-md-8" markdown="1">


The *moderator* is a material intentionally placed in a nuclear reactor core to
slow neutrons down from their initial fast speeds. Adding a moderator makes it
much easier to attain a nuclear chain reaction.

In common water-cooled nuclear reactors, the moderator is the same thing as the
coolant: water. When fast neutrons strike the hydrogen atoms in H<sub>2</sub>O,
they slow down a lot (like a billiard ball striking another). There are other
good moderators like deuterium, graphite, beryllium, and more.

## Why moderate?

When an incoming neutron causes the nucleus of an atom to split, other neutrons
are released at very high speeds. If at least one of these neutrons
can be made to split another fuel atom, a sustained chain reaction is
possible. 

As it happens, fuel atoms (like uranium) are more likely to absorb a
neutron whizzing by if it's going slow (see Figure 1). 

<figure>
<div>
<img src="/img/u_235f.gif" alt="U-235 fission cross-section" class="img-fluid rounded" title="U-235 fission cross-section" />
</div>
<caption><strong>Figure 1</strong> The probability splitting a
U<sub>235</sub> nucleus vs. the energy of the incoming neutron. Notice how much more
probable fission is for slower neutrons. Also note logarithmic scale.</caption>
</figure>

When neutrons collide with atoms, they slow down. Due to conservation of
momentum, when a neutron strikes a heavy atom, it slows down *a little* 
(imagine a ping-pong ball bouncing off a bowling ball). When a neutron strikes a light
atom of similar mass to the neutron itself, it slows down *a lot* 
(imagine a ping-pong ball bouncing off another ping-pong ball). Nuclear fuel atoms are
heavy, so to get neutrons to slow down faster, you add light-weight atoms as moderators.

You *could* just mix your moderator and fuel together, but it's *dramatically
better* to keep them separate.  If they're closely mixed, neutrons would be
absorbed by fuel as they are slowing down in neutron-capture reactions that
compete with fission (the spiky part in Figure 1).

If you instead have a fast neutron first move into the separate moderator area,
it will slow down "in peace," i.e. away from the strong neutron absorbers. It
will then re-enter the fuel as a slow neutron where the probability of fission
is extremely high. The moderator effectively teleports neutrons from fast to slow
and spits them out in the fuel right where they can best cause fission.

This "fuel lumping" insight was required in the first reactor, CP-1, which
used natural uranium. There was no enriched uranium back in the early 1940s.

## Choosing a moderator material

Some materials are better at slowing down neutrons than others.
Conservation of energy and momentum laws explain that a neutron (mass 1)
cannot slow down much after a collision with a heavy nucleus, like a fuel atom
(mass 235). However, in a collision with Hydrogen (mass 1), a neutron can in
fact slow down very far. This effect is often quantified by a parameter called
$$\xi$$, the mean lethargy gain per collision. 

The number of collisions matters as well, which is proportional to the density
of the moderator and its scattering probability. The moderating power is called
$$\xi \Sigma_s$$.

Moderators must also not be strong neutron absorbers. So we often divide by the
neutron capture cross section to make an ideal figure-of-merit for moderators: 
$$ \xi \Sigma_s/\Sigma_a$$. These parameters are summarized for a number of
moderators below:

<figure>
<div>
<img src="/img/moderating-params.png" alt="Moderating parameters of various
materials in a nuclear reactor" class="img-fluid rounded" title="Moderating
parameters" />
</div>
<caption><strong>Figure 2</strong> Slowing-down parameters (from Duderstadt & Hamilton, pg 324) </caption>
</figure>

As you can see in the last column, deuterium (heavy hydrogen) is by far the best
moderator. But regular hydrogen (aka light hydrogen) in water is OK. This is why
deutrerium reactors (like [CANDU]({% link candu.md %})) can run without
[enrichment]({% link isotopes.md %}#enrichment) but light-water reactors cannot.


## Why are moderated reactors called thermal reactors?

The word *thermal* in *thermal reactors* indicates that the neutrons causing the
most fissions are in thermal equilibrium with their surrounding atoms. All atoms
vibrate based on their temperature, and so when neutrons slow *all the way*
down, they don't stop, but rather get jostled around by the atoms they are
around. So thermal reactors is just a technical way of saying that the nuclear
reactors has slow neutrons in it, slowed down by a moderator.

The alternate to thermal (aka slow-neutron) reactors are [fast reactors]({% link
fast-reactor.md %}), which intentionally do not have moderators placed in them.
These reactors can get more total energy out of their fuel, but you have to use
much higher enriched fuel to get them started and keep them going. That's the
price you pay for not having a moderator.


<a id="references"></a>        
# See Also
* <a href="{% link fast-reactor.md %}">Fast Reactors</a>
* <a href="http://www.nndc.bnl.gov/sigma/index.jsp?as=235&lib=endfb7.0&nsub=10">Evaluated Nuclear Data File 7</a>
    
</div>
</div>
