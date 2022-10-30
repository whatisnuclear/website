---
title: Interactive Half-Life Calculator
description: >
  Slide sliders to get a feel for half-life. Calculate how much stuff is left after a few half-lives.
author: nick
layout: default
date: 2022-10-30
image: /img/half-life.jpg
---

<div class="row">
<div class="col-12" markdown="1">

<div class="row">
<div class="col-8" markdown="1">
<label for="halflife" class="form-label">Half-life (years)</label>
<input type="range" value="5.0" step="1" min="1" class="form-range" id="halflife">
</div>
<div class="col-2" markdown="1">
<label for="value">Half-life</label>
<input type="input" value="5.0" class="form-control" id="value">
</div>
<div class="col-2">
<label for="hl-range-select">Half-life Range</label>
<select class="form-select" aria-label="Half-life Range" id="hl-range-select">
  <option value="100">100</option>
  <option value="1000">1,000</option>
  <option value="10000">10,000</option>
  <option value="100000">100,000</option>
  <option value="1000000">1,000,000</option>
  <option value="10000000">10,000,000</option>
</select>
</div>
</div>
<div class="row">

<div class="col-3" markdown="1">
<label for="maxtime" class="form-label">Max time to show (years)</label>
<input type="range" value="50.0" min="1" step="1" class="form-range" id="maxtime">
</div>
<div class="col-1" markdown="1">
<label for="maxtime-val">Max time</label>
<input type="input" value="50.0" class="form-control" id="maxtime-val">
</div>
<div class="col-2">
<label for="time-range-select">Time Range</label>
<select class="form-select" aria-label="Time Range" id="time-range-select">
  <option value="100">100</option>
  <option value="1000">1,000</option>
  <option value="10000">10,000</option>
  <option value="100000">100,000</option>
  <option value="1000000">1,000,000</option>
  <option value="10000000">10,000,000</option>
</select>
</div>
<div class="col-2" markdown="1">
<label for="numbars-range" class="form-label">Number of bars</label>
<input type="range" value="15" min="1" step="1" class="form-range" id="numbars-range">
</div>
<div class="col-2" markdown="1">
<label for="numbars-val" class="form-label">Number of bars</label>
<input type="input" value="15" class="form-control" id="numbars-val">
</div>
<div class="col-2" markdown="1">
<!-- disable logx for now b/c bars get misleadingly wide -->
<div class="form-check">
  <input hidden class="form-check-input" type="checkbox" value="" id="logx">
  <label hidden class="form-check-label" for="logx">
    Log x axis
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" checked value="" id="hlnote">
  <label class="form-check-label" for="hlnote">
    Show 50% mark
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="logy" >
  <label class="form-check-label" for="logy">
    Log y axis
  </label>
</div>
</div>

</div>

<hr/>

<div class="row">
<div class="col-md-12" id='plot'></div>
</div>

<hr/>

## More info

A thing's half-life is how long until only half of it is left. It's used
in radioactive decay, medicine, and many other things. Remember:

* Hazards in radiation are proportional the rate at which energy comes out. 
* Short half-lives imply energy is coming out quickly, and are the primary hazard.
* Long half-lives imply energy is coming out very slowly, and are less
of a hazard. For example, you can hold long half-life isotopes of natural
uranium in your hand without accumulating a hazardous dose.
* In the extreme, an infinite half-life would mean energy never comes out, representing zero radiological risk. 

Learn more about [the math here]({% link math-behind-radioactive-decay.html %}).

Learn about solutions to nuclear waste [here]({% link waste.md %}).

<script src='https://cdn.plot.ly/plotly-2.16.1.min.js'></script>

<script>

let halflife=document.getElementById("halflife");
let number=document.getElementById('value')
let hl_range_select=document.getElementById('hl-range-select')
let maxtime_range=document.getElementById("maxtime");
let maxtime_val=document.getElementById('maxtime-val')
let time_range_select=document.getElementById('time-range-select')
let numbars_range=document.getElementById("numbars-range");
let numbars_val=document.getElementById('numbars-val')
let logx=document.getElementById('logx')
let logy=document.getElementById('logy')
let hlnote=document.getElementById('hlnote')

halflife.addEventListener("input",(e)=>{
    let val = parseFloat(e.target.value);
    if (val<parseFloat(0.0)) {
        return
    }
  number.value=val;
  compute();
})
number.addEventListener("input",(e)=>{
  halflife.value=e.target.value;
  compute();
})
hl_range_select.addEventListener("change",(e)=>{
  halflife.max=e.target.value;
})

maxtime_range.addEventListener("input",(e)=>{
    let val = parseFloat(e.target.value);
    if (val<parseFloat(0.0)) {
        return
    }
  maxtime_val.value=val;
  compute();
})
maxtime_val.addEventListener("input",(e)=>{
  maxtime_range.value=e.target.value;
  compute();
})
time_range_select.addEventListener("change",(e)=>{
  maxtime_range.max=e.target.value;
})

numbars_range.addEventListener("input",(e)=>{
    let val = parseFloat(e.target.value);
    if (val<parseFloat(0.0)) {
        return
    }
  numbars_val.value=val;
  compute();
})
numbars_val.addEventListener("input",(e)=>{
  numbars_range.value=e.target.value;
  compute();
})
logx.addEventListener("input",(e)=>{
  compute();
})
logy.addEventListener("input",(e)=>{
  compute();
})
hlnote.addEventListener("input",(e)=>{
  compute();
})


function compute() {
    let maxtime = Number(maxtime_val.value);
    let initial = 100;
    let numbars = Number(numbars_val.value);
    let halflife = Number(number.value);
    // if they want 10 bars between 0 and 100 years, 
    // then the 10th bar with have index 9, and we need 9/10
    let times = Array.from({length: numbars}, (x, i) => i*maxtime/(numbars-1));
    let times2 = Array.from({length: 50}, (x, i) => i*maxtime/(50-1));
    let dec_const = Math.log(2)/halflife;

    // update line data
    let line_vals = times2.map((time) => initial*Math.exp(-dec_const * time))
    let line = {
        x: times2,
        y: line_vals,
        type: 'scatter',
        showlegend: false,
        marker: {
            "color": "black",
          }
    };
    // update bars data
    let rvals = times.map((time) => initial*Math.exp(-dec_const * time))
    let radioactive = {
        x: times,
        y: rvals,
        text: rvals.map((val) => String(val.toFixed(1))),
        name: 'Still radioactive',
        type: 'bar',
        marker: {
            "color": "firebrick",
            "pattern": {
              "solidity": 0.5
            }
          }
    };
    let decayed = {
        x: times,
        y: times.map((time) => initial*(1-Math.exp(-dec_const * time))),
        name: 'No longer radioactive',
        type: 'bar',
        marker: {
            "color": "burlywood",
            "pattern": {
              "shape": "x",
              "solidity": 0.5
            }
          }
    };

    /*
    if (numbars>30){ 
      // with too many bars the axis label gets too crowded
      // Hmm actually this isn't toggling back to auto when we have
      // lots of bars and performance tanks so we better just leave 
      // autoformatting on for now.
      layout.xaxis.autotick = true;
      layout.xaxis.autorange = true;
      layout.xaxis.dtick = '';
      layout.xaxis.ticks = '';
    } else {
      layout.xaxis.autotick = false;
      layout.xaxis.dtick = (maxtime/numbars);
    }
    */

    let halfpoint;
    if(logy.checked) {
      layout.yaxis.type="log"
      // on log plots the half-way point goofs it up so we have to manually
      // map the annotation
      halfpoint = Math.log10(initial * 0.5)

    }
    else {
      layout.yaxis.type=""
      halfpoint = initial * 0.5
    }
    if(logx.checked) {
      layout.xaxis.type="log"
    }
    else {
      layout.xaxis.type=""
    }

  if (hlnote.checked && halflife<=maxtime) {

    layout.annotations= [
      {
        x: halflife,
        y: halfpoint,
        xref: 'x',
        yref: 'y',
        text: 'Half of the<br>atoms remain',
        showarrow: true,
        font: {
          size: 16,
        },
        arrowhead: 7,
        opacity: 0.8,
        bgcolor: 'white',
        ax: 0,
        ay: -40
      }
    ]
  }
  else {
    layout.annotations=[]
  }

    var data=[line, radioactive, decayed ];
    Plotly.react('plot', data, layout);
    
}


var trace1 = { };
var trace2 = { };
var data = [trace1, trace2];

var layout = {barmode: 'stack', 
  yaxis: {
      type: 'linear', autorange: true ,
      title: { 
      text: 'Number of atoms',
        },
    }, 
  xaxis: { autotick: true, nticks: 10,
  title: {
        text: 'Time (years)', 
  }},
  showlegend: true,
  legend: {
    x: 1,
    xanchor: 'right',
    y: 1,
    font: {
        size: 18,
    },
    orientation: "h",
    bgcolor: 'rgba(255,255,255,0.8)'
  }, 
  autosize: true,
  margin: {
      t: 0
    },
};

var config = {
  'displayModeBar': false
}

Plotly.newPlot('plot', data, layout, config);

window.onresize = function() {
    Plotly.relayout('plot', {})
}

// compute initial values
compute();


</script>

</div>
</div>
