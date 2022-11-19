---
title: Energy Density Comparison with Nuclear
description: >
  Bar graph showing nuclear vs. conventional energy density on a linear axis ;)
author: nick
layout: default
date: 2022-11-17
image: /img/kid_in_atom.jpg
---



<div class="row">
<div class="col-12" markdown="1">

[Energy density]({% link energy-density.md %}) measures how much energy is in a certain mass of fuel. [Relevant xkcd](https://xkcd.com/1162/).

</div>
</div>

<div class="row">

<div class="col-md-12" style="min-height: 8060040px" id="plot">

</div>
</div>

<div class="row">
<div class="col-12" markdown="1">

Learn more about [breeder reactors here]({% link recycling.md %}).

<hr/>




</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@3.0/dist/svg.min.js"></script>

<script>
// max height allowable is around 33 million, sadly, so we can't do a pixel per MJ
// https://stackoverflow.com/questions/16637530/whats-the-maximum-pixel-value-of-css-width-and-height-properties
let divisor = 10;
labelHeight = 40;
let height = 80600000/divisor;

let data= [
  {label: "Uranium \n(breeder)", val: 80.6e6},
  {label: "Thorium \n(breeder)", val: 79.4e6}, 
  {label: "Uranium \n(non-breeder)", val: 80.3e6/60},
  {label: "Nat Gas", val: 53.3},
  {label: "Lithium", val:43.0},
  {label: "Coal", val: 30.0},
];

var draw = SVG().addTo('#plot').size('100%', '100%');

var pattern = draw.pattern(10, 10, function(add) {
  add.rect(10,10).fill('orange')
  add.rect(5,5)
  add.rect(5,5).move(5,5)
});


data.forEach((val, index, array) => {
  var rect = draw.rect(100, val.val/divisor).attr({ fill: pattern }).move(110*index, (height-val.val/divisor));
  var back = draw.rect(100, 40).attr({fill: "white"}).move(110*index, (height))
  var text = draw.text(val.label).font({
  size: 12,
  family: 'Menlo, sans-serif',
  anchor: 'end',
  fill: '#000'
}).move(110*index, height)
})

</script>