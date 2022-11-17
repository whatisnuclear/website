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


<div class="row">
<div class="col-md-12" style="min-height: 100000px" id='plot'></div>
</div>
Learn more about [breeder reactors here]({% link recycling.md %}).

<hr/>


<script src='https://cdn.plot.ly/plotly-2.16.1.min.js'></script>

<script>


let bars = {
    x: ["Uranium (breeder)","Thorium (breeder)", "Uranium (non-breeder)", "Coal", "Nat Gas", "Lithium"],
    y: [80.6e6, 79.4e6, 80.3e6/60.0, 30.0, 53.5, 43.0],
    name: 'Energy density',
    type: 'bar',
    marker: {
        "color": "firebrick",
        "pattern": {
          "solidity": 0.5
        }
      }
};
var layout = {barmode: 'stack', 
  yaxis: {
      type: 'linear', autorange: false ,
      title: { 
      text: 'Energy Density (MJ/kg)',
        },
      nticks: 500,
      range: [0.0, 80.0e6],
      fixedrange: true
    }, 
  xaxis: { autotick: true, 
    title: {
          text: 'Fuel', 
      },
    fixedrange: true,
  },
  autosize: true,
  margin: {
      t: 0
    },
};

var config = {
  'displayModeBar': false
}

let data = [bars];

Plotly.newPlot('plot', data, layout, config);

</script>

</div>
</div>
