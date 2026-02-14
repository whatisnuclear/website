---
layout: default
title: Barn Jams!
description: Nuclear cross sections represent the connection between nuclear physics and nuclear engineering. Learn about them here, and listen to them!
author: nick
image: /barn-jams/u235_fission.png
---

<div class="row">
<div class="col-md-8" markdown="1">

On this page you will learn about nuclear cross sections. To make it a more
multimedia experience, we&rsquo;ve added a gimmick that allows you to
<em>listen</em> to each cross section plot as if it were sound. While making
sound out of these doesn&rsquo;t make any physical sense, it&rsquo;s a fun way
to get people to explore the variety of shapes. Look and listen to these and
then scroll down to learn about what they mean.

</div></div>

<div class="row">
<div class="col-md-6">
<h2>U-235 Fission Cross Section</h2>
<canvas id="u235_fission_canvas" width="800" height="600" onclick="startJam('u235_fission', 0.3846, 0.6923);"></canvas>
<audio id="u235_fission_audio">
<source src="/barn-jams/u235_fission.log.mp3" type="audio/mpeg">
<source src="/barn-jams/u235_fission.log.wav.ogg" type="audio/ogg">
Your browser does not support the audio element.
</audio> 
<div>
<a href="javascript:void(0)" onclick="startJam('u235_fission', 0.3846, 0.6923);" class="btn btn-primary" role="button">Jam</a> 
<a href="javascript:void(0)" onclick="document.getElementById('u235_fission_audio').pause()" class="btn btn-default" role="button">Pause</a>

</div>

</div>
<div class="col-md-6">
<h2>U-238 Fission Cross Section</h2>
<canvas id="u238_fission_canvas" width="800" height="600" onclick="startJam('u238_fission', 0.4615, 0.8461);" ></canvas>
<audio id="u238_fission_audio">
<source src="/barn-jams/u238_fission.log.mp3" type="audio/mpeg">
<source src="/barn-jams/u238_fission.log.wav.ogg" type="audio/ogg">
Your browser does not support the audio element.
</audio> 
<div>
<a href="javascript:void(0)" onclick="startJam('u238_fission', 0.4615, 0.8461);" class="btn btn-primary" role="button">Jam</a> 
<a href="javascript:void(0)" onclick="document.getElementById('u238_fission_audio').pause()" class="btn btn-default" role="button">Pause</a> 
</div> 
</div>
</div>
<div class="row">
<div class="col-md-6">
<h2>Pu-239 Elastic Scatter Cross Section</h2>
<canvas id="pu239_elastic_canvas" width="800" height="600" onclick="startJam('pu239_elastic', 0.4383, 0.6923);"></canvas>
<audio id="pu239_elastic_audio">
<source src="/barn-jams/pu239_elastic.log.mp3" type="audio/mpeg">
<source src="/barn-jams/pu239_elastic.log.wav.ogg" type="audio/ogg">
Your browser does not support the audio element.
</audio> 
<div>
<a href="javascript:void(0)" onclick="startJam('pu239_elastic', 0.4383, 0.6923);" class="btn btn-primary" role="button">Jam</a> 
<a href="javascript:void(0)" onclick="document.getElementById('pu239_elastic_audio').pause()" class="btn btn-default" role="button">Pause</a>

</div>

</div>

<div class="col-md-6">
<h2>Th-232 Capture Cross Section</h2>
<canvas id="th232_gamma_canvas" onclick="startJam('th232_gamma', 0.4615, 0.6923);" width="800" height="600"></canvas>
<audio id="th232_gamma_audio">
<source src="/barn-jams/th232_gamma.log.mp3" type="audio/mpeg">
<source src="/barn-jams/th232_gamma.log.wav.ogg" type="audio/ogg">

Your browser does not support the audio element.
</audio>

<div>
<a href="javascript:void(0)" onclick="startJam('th232_gamma', 0.4615, 0.6923);" class="btn btn-primary" role="button">Jam</a> 
<a href="javascript:void(0)" onclick="document.getElementById('th232_gamma_audio').pause()" class="btn btn-default" role="button">Pause</a> 
</div> 
</div>
</div>

<div class="row">
<div class="col-md-6">

<h2>Fe-56 Total Cross Section</h2>
<canvas id="fe56_total_canvas" width="800" height="600" onclick="startJam('fe56_total', 0.6428, 0.8571);"></canvas>
<audio id="fe56_total_audio">
<source src="/barn-jams/fe56_total.log.mp3" type="audio/mpeg">
<source src="/barn-jams/fe56_total.log.wav.ogg" type="audio/ogg">
Your browser does not support the audio element.
</audio> 
<div>
<a href="javascript:void(0)" onclick="startJam('fe56_total', 0.6428, 0.8571);" class="btn btn-primary" role="button">Jam</a> 
<a href="javascript:void(0)" onclick="document.getElementById('fe56_total_audio').pause()" class="btn btn-default" role="button">Pause</a>

</div>

</div>

<div class="col-md-6">
<h2>Xe-131 Capture Cross Section</h2>
<canvas id="xe131_gamma_canvas" onclick="startJam('xe131_gamma', 0.3846, 0.6923);" width="800" height="600"></canvas>
<audio id="xe131_gamma_audio">
<source src="/barn-jams/xe131_gamma.log.mp3" type="audio/mpeg">
<source src="/barn-jams/xe131_gamma.log.wav.ogg" type="audio/ogg"/>
Your browser does not support the audio element.
</audio> 
<div>
<a href="javascript:void(0)" onclick="startJam('xe131_gamma', 0.3846, 0.6923);" class="btn btn-primary" role="button">Jam</a> 
<a href="javascript:void(0)" onclick="document.getElementById('xe131_gamma_audio').pause()" class="btn btn-default" role="button">Pause</a> 
</div> 
</div>
</div>

<div class="row">
<div class="col-md-8" markdown="1">

## So, what am I looking at here?

Let&rsquo;s start with some background. If you like talking about nuclear
reactors, you might know that there are two <a
href="{% link isotopes.md %}">isotopes</a> of Uranium found in nature, and that
the rare Uranium-235 readily fissions and releases energy when it encounters a
neutron of any energy, while the more common Uranium-238 does not. This is why
most nuclear reactors require enrichment; to increase the concentration of
U-235. Nuclear cross section are the details of the interaction probabilities
between neutrons and nuclei of various atoms.

When a neutron strikes a nucleus, a variety of interactions may occur:

<ul> 
<li>The neutron might bounce (or <em>scatter</em>) off like a billiards ball, transferring some of its energy to the nucleus</li>
<li>The neutron might get <em>captured</em> by the nucleus, forming a larger nucleus</li>
<li>The neutron might knock one or more subatomic particles (neutrons, alpha particles, protons, etc.) out of the nucleus</li>
<li>The neutron might <em>fission</em> the whole nucleus into two or more smaller pieces</li>
</ul>

You can never know exactly which of these interactions will happen in any
particular encounter, but you can know what will happen <em>on average</em>. In
other words, if you shoot a million neutrons at a bunch of nuclei, you can
figure out how many of each interaction type will occur.

How do you figure it out? You measure the probabilities with experiments.
Simply put, you just shoot neutrons of varying speeds at various materials and
count how many interactions of each type occur.

Nuclear physicists think of the probabilities as <em>cross-sectional</em> area
the nucleus has for each interaction. If the fission probability is large, then
the nucleus&rsquo;s cross section for fission is large. During the classified
early days of the Manhattan Project, some physicists agreed on units of
<strong>barns</strong> as ways to measure nuclear cross sections without giving
away secrets of their work [1]. The unit is defined as 10<sup>-24</sup>
cm<sup>2</sup>, which was said to be &quot;as big as a barn,&quot; by which
they meant that an interaction of this cross section was decidedly likely to
occur.

## Nuclear data

Gaps in measured cross sections are typically filled-in using theoretical
nuclear models, allowing the creation of smooth curves of interaction
probability vs. the energy of the incoming neutron. There is a huge amount of
work that goes into choosing the best averages of measured data and fitting the
nuclear models to the results. Such <em>nuclear data evaluations</em> are
performed by various organizations such as CSWEG [2]. The results of an
evaluation are distributed broadly to nuclear physicists, reactor designers,
and all sorts of other people who use the information in their computer models.
Thus, nuclear data is the connection between fundamental nuclear physics and
the applications of nuclear engineering.

<figure>
<img class="img img-fluid" src="/barn-jams/u235_w_experiments.png" alt="U235 n,fis w/data">
<figcaption>
<p class="h4">Cross sections for U-235 fission</p>
This plot shows the fission cross section of U-235 for neutrons with energies
between 100 and 120 electron-Volts (eV). Shown are measured data points from
Weston, 1992, as well as the smooth line from the ENDF/B-VII.1 evaluation
(which uses nuclear models to fill in experimental gaps). You can browse the
latest US data evaluation over at the National Nuclear Data Center [3]. 
</figcaption>
</figure>

## Notable features of some cross sections

You&rsquo;ll notice in the first two plots that the U-235 fission cross section is much
higher than the U-238 fission cross section. This means U-235 fissions more often.
You&rsquo;ll also notice that the fission and absorption cross sections are high at low
energy. The high probability of U-235 fission from slow neutrons is why slow-neutron
reactors (aka _thermal_ reactors) were the only ones possible before <a href="{% link
isotopes.md %}#enrichment">enrichment</a> was invented. You can also see that capture
(gamma) cross sections tend to get small at very high energy, while the fission cross
sections level off. This is a general trend among most actinides and is part of the reason
that <a href="{% link fast-reactor.md %}">fast reactors</a> often have enough extra
neutrons to be <a href="{% link recycling.md %}">breeder reactors</a>.

Also note that the resonances tend to get closer and closer together as we go
to higher energy. Eventually, all resonances just stop and there appears to be
a smooth line. The resonances don&rsquo;t actually stop there. They just get so
close together that we can&rsquo;t know the details of them, so the smooth line
is just an average. That is called the <em>unresolved resonance</em> region.

<hr />
<h2>References</h2>
<ol>
<li> M.G.Holloway, C.P. Baker &quot;How the Barn was Born&quot;, Physics Today, p. 9 July 1972.</li>
<li><a href="http://www.nndc.bnl.gov/csewg/">Cross Section Evaluation Working Group (CSEWG)</a></li>
<li><a href="http://www.nndc.bnl.gov/sigma/">Evaluated Nuclear Data File (ENDF) Retrieval &amp; Plotting</a></li>
</ol>

</div>
</div>

<script>
	  var xss = ["fe56_total", "u238_fission", "pu239_elastic","th232_gamma","xe131_gamma", "u235_fission"];
	  var id;
	  var canvas;
	  var context;
	  var cat;
	  for (index=0;index<xss.length;index++){
		  id = xss[index]+"_canvas";
		  canvas = document.getElementById(id);
		  context = canvas.getContext("2d");
		  cat = new Image();
		  
		  cat.onload = (function(img, ctx) {
			  //http://stackoverflow.com/questions/7641588/if-i-load-multiple-images-with-the-for-loop-do-i-only-need-one-img-onload-funct
			return function(){
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			}
		})(cat, context);
		cat.src = "/barn-jams/"+xss[index]+".png";
	  }
</script>

<script>
	window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();
      
function startJam(name, minFrac, maxFrac) {
  var canvas = document.getElementById(name+"_canvas");
  var context = canvas.getContext("2d");
  var audio = document.getElementById(name+"_audio");
  audio.play();
  var image = new Image();
  image.src = "/barn-jams/"+name+".png";
  requestAnimFrame( function() {animate(canvas, context, audio, image, minFrac, maxFrac);} );
  };
  
function animate(canvas, context, audio, image, minFrac, maxFrac) {
	var leftFrac = 0.125;
	var rightFrac = 0.9
	var plotWidth = (rightFrac - leftFrac)*canvas.width;
	var windowWidth = (maxFrac - minFrac)*plotWidth;
	var leftX = canvas.width*0.125 + plotWidth*minFrac;
	var x = audio.currentTime/audio.duration * windowWidth + leftX;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(x, canvas.height*0.1);
    context.lineTo(x, canvas.height*0.9);
	context.strokeStyle = "#333";
	context.stroke();
	if(audio.currentTime != audio.duration){
	requestAnimFrame( function() {animate(canvas, context, audio, image, minFrac, maxFrac);} );
	}
	
  
};
</script>
