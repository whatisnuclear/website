---
title: Enrichment SWU calculator
description: >
  Interactive nuclear enrichment and SWU calculator where
  you can enter a given feed or product mass and a product
  enrichment and it will tell you how much feed and SWU you
  need. Also plots results interactively as you go.
author: nick
layout: default
date: 2022-10-27
image: /img/enrichment-ss.png
---

<div class="row">
<div class="col-md-12" markdown="1">

Use this to calculate how much natural uranium and separative work you need to get
a given amount of enriched uranium at a certain enrichment, and so on. Learn more about [isotopes here]({% link isotopes.md %}).

<div class="row">
<div class="col-md-2 text-nowrap" markdown="1">
Tails assay (wt %)
</div>
<div class="col-md-1 text-nowrap" markdown="1">
<input type="text" value="0.25" placeholder="Tails" class="form-control" id="tails-assay">
</div>
<div class="col-md-2">Feed assay (wt %)</div>
<div class="col-md-1"> 
<input type="text" value="0.711" placeholder="Feed assay" class="form-control" id="feed-assay">
</div>
</div>

<div class="row">
<label for="enrich" class="form-label">Product Enrichment (wt %)</label>
<div class="col-md-4" markdown="1">
<input type="range" value="4.0" step="0.1" class="form-range" id="enrich">
</div>
<div class="col-md-2" markdown="1">
<input type="text" value="4.0" class="form-control" id="enrich-text">
</div>
<div class="col-md-4" markdown="1">
<select class="form-select" aria-label="Presets" id="enrich-select">
  <option value="" selected>Choose Enrichment Preset</option>
  <option value="0.711">Natural Uranium (0.711%)</option>
  <option value="4.0">LEU (4%)</option>
  <option value="20.0">HALEU (20%)</option>
  <option value="90.0">Weapons-grade (90%)</option>
</select>
</div>
<div class="col-md-2" markdown="1" id="enrich-label">
LEU
</div>
</div>
<hr/>
<div class="form-check">
  <input class="form-check-input" type="radio" name="mode" value="0" id="productConstant">
  <label class="form-check-label" for="productConstant">
    Compute product mass from given feed mass
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="mode" value="1" id="inputConstant" checked>
  <label class="form-check-label" for="inputConstant">
    Compute feed mass from given product mass
  </label>
</div>

<div class="row">
<div class="col-md-3">
<label for="feed-mass" class="form-label">Feed mass (kg or tonne)</label>
<input type="text" value="" placeholder="Feed mass" class="form-control" id="feed-mass">
</div>
<div class="col-md-3">
<label for="product-mass" class="form-label">Product mass (kg or tonne)</label>
<input type="text" value="1" placeholder="Product mass" class="form-control" id="product-mass">
</div>
<div class="col-md-3">
<label for="tails-mass" class="form-label">Tails mass (kg or tonne)</label>
<input type="text" value="" placeholder="Tails mass" class="form-control" id="tails-mass" readonly>
</div>
<div class="col-md-3">
<label for="swu-mass" class="form-label">SWU (kg-SWU or tonne-SWU)</label>
<input type="text" value="" placeholder="SWUs" class="form-control" id="swu-mass" readonly>
</div>
</div>

<div class="row">
<div class="col-12" id='plot'> </div>
</div>

<div class="row">
<div class="col-12">
<p class="text-center">
<button id="save" class="btn btn-primary">
<i class="fa fa-clipboard fa-lg"></i> Copy current settings to clipboard</button></p>
 </div>
</div>

<hr/>
<h2>Economics inputs:</h2>
<div class="row">
<div class="col-md-3">
<label for="feed-cost" class="form-label">Cost of Feed U<sub>3</sub>O<sub>8</sub> ($/kgU)</label>
<input type="text" value="110" placeholder="Feed cost" class="form-control" id="feed-cost">
</div>
<div class="col-md-3">
<label for="conversion-cost" class="form-label">Cost of Conversion to UF<sub>6</sub> ($/kgU)</label>
<input type="text" value="16" placeholder="Conversion cost" class="form-control" id="conversion-cost">
</div>
<div class="col-md-3">
<label for="swu-cost" class="form-label">Cost of SWU ($/kgSWU)</label>
<input type="text" value="100" placeholder="SWU cost" class="form-control" id="swu-cost">
</div>
<div class="col-md-3">
<label for="fab-cost" class="form-label">Fabrication cost ($/kgHM)</label>
<input type="text" value="300" placeholder="Fabrication cost" class="form-control" id="fab-cost">
</div>
</div>

<div class="row">
<label for="burnup" class="form-label">Average discharge burnup (MWd/kgHM)</label>
<div class="col-md-4">
<input type="range" value="50" step="1" min="1" max="938" class="form-range" id="burnup">
</div>
<div class="col-md-2" markdown="1">
<input type="text" value="50" class="form-control" id="burnup-text">
</div>
<div class="col-md-4" markdown="1">
<select class="form-select" aria-label="Presets" id="burnup-select">
  <option value="">Choose burnup preset</option>
  <option value="7">CANDU (7 MWd/kg)</option>
  <option value="50" selected>Typical LWR (50 MWd/kg)</option>
  <option value="200">Deep burn open cycle (200 MWd/kg)</option>
  <option value="800">Multi-recycle breeder (800 MWd/kg)</option>
</select>
</div>
</div>

<div class="row">
<label for="eff" class="form-label">Thermal efficiency (%)</label>
<div class="col-md-4">
<input type="range" value="32" step="1" min="1" max="80" class="form-range" id="eff">
</div>
<div class="col-md-2" markdown="1">
<input type="text" value="32" class="form-control" id="eff-text">
</div>
<div class="col-md-4" markdown="1">
<select class="form-select" aria-label="Presets" id="eff-select">
  <option value="">Choose efficiency preset</option>
  <option value="6">Thermionic (6%)</option>
  <option value="32" selected>Typical LWR (32%)</option>
  <option value="39" >Sodium-cooled reactor (39%)</option>
  <option value="43">High-temperature gas-cooled reactor (43%)</option>
</select>
</div>
</div>

<!--
  total power maybe useful later for total costs/initial core size/financing

<div class="row">
<label for="eff" class="form-label">Total Electric Power (MWe)</label>
<div class="col-md-4">
<input type="range" value="1110" step="1" min="0" max="3000" class="form-range" id="power">
</div>
<div class="col-md-2" markdown="1">
<input type="text" value="1110" class="form-control" id="power-text">
</div>
<div class="col-md-4" markdown="1">
<select class="form-select" aria-label="Presets" id="power-select">
  <option value="">Choose power preset</option>
  <option value="1">1 MWe microreactor (PM-1)</option>
  <option value="10" >10 MWe small reactor (MH-1A)</option>
  <option value="50" >50 MWe small reactor (NuScale)</option>
  <option value="300" selected>300 MWe medium reactor (BWRX-300)</option>
  <option value="769" >769 MWe large reactor (Palisades 1)</option>
  <option value="1141">1141 MWe large reactor (Fermi 2)</option>
  <option value="1600">1600 MWe large reactor (Olkiluoto 3)</option>
</select>
</div>
</div>
-->
<h2>Outputs</h2>
<div class="row">
<div class="col-md-2">
<label for="reload-total-cost" class="form-label">Reload total (¢/kWh)</label>
<input type="text" value="" placeholder="Total cost" class="form-control" id="reload-total-cost" readonly>
</div>
<div class="col-md-2">
<label for="reload-swu-cost" class="form-label">Reload SWU (¢/kWh)</label>
<input type="text" value="" placeholder="SWU" class="form-control" id="reload-swu-cost" readonly>
</div>
<div class="col-md-2">
<label for="reload-feed-cost" class="form-label">Reload feed (¢/kWh)</label>
<input type="text" value="" placeholder="Mined U" class="form-control" id="reload-feed-cost" readonly>
</div>
<div class="col-md-2">
<label for="reload-conv-cost" class="form-label">Conversion (¢/kWh)</label>
<input type="text" value="" placeholder="Converted UF6" class="form-control" id="reload-conv-cost" readonly>
</div>
<div class="col-md-2">
<label for="reload-fab-cost" class="form-label">Fabrication (¢/kWh)</label>
<input type="text" value="" placeholder="Fabricated fuel" class="form-control" id="reload-fab-cost" readonly>
</div>
</div>

<div class="row">
<div class="col-md-3">
<label for="reload-feed-mass" class="form-label">Required mined material (gU/MWh)</label>
<input type="text" value="" title="How much uranium you have to mine per kWh generated" placeholder="Mined U" class="form-control" id="reload-feed-mass" readonly>
</div>
<div class="col-md-3">
<label for="waste-per-kwh" class="form-label">High-level waste (gHM/MWh)</label>
<input type="text" value="" placeholder="Waste" class="form-control" id="waste-per-kwh" readonly>
</div>
</div>

Abbrevs:

<ul>
  <li>U - Uranium</li>
  <li>HM - Heavy Metal (e.g. Uranium, Neptunium, Pu, Cm, etc.)</li>
  <li>kWh - Kilowatt-hour electric</li>
  <li>MWh - Megawatt-hour electric</li>
  <li>MWd - Megawatt-day thermal</li>
  <li>SWU - Separative Work Unit</li>
</ul>

<script src='https://cdn.plot.ly/plotly-2.16.1.min.js'></script>

<script>


let range=document.getElementById("enrich");
let number=document.getElementById('enrich-text')
let select=document.getElementById('enrich-select')
let tails_assay=document.getElementById('tails-assay')
let feed_assay=document.getElementById('feed-assay')
let feed_mass=document.getElementById('feed-mass')
let product_mass=document.getElementById('product-mass')
let tails_mass=document.getElementById('tails-mass')
let swu=document.getElementById('swu-mass')
let mode=document.getElementById('mode')
let prod_const=document.getElementById('productConstant')
let save=document.getElementById('save')
let burange=document.getElementById("burnup");
let bunumber=document.getElementById('burnup-text')
let buselect=document.getElementById('burnup-select')
let effrange=document.getElementById("eff");
let effnumber=document.getElementById('eff-text')
let effselect=document.getElementById('eff-select')
let powerrange=document.getElementById("power");
let powernumber=document.getElementById('power-text')
let powerselect=document.getElementById('power-select')
let feedcost=document.getElementById('feed-cost')
let swucost=document.getElementById('swu-cost')
let fabcost=document.getElementById('fab-cost')
let convcost=document.getElementById('conversion-cost')
let reload_total_cost=document.getElementById('reload-total-cost')
let reload_swu_cost=document.getElementById('reload-swu-cost')
let reload_feed_cost=document.getElementById('reload-feed-cost')
let reload_fab_cost=document.getElementById('reload-fab-cost')
let reload_conv_cost=document.getElementById('reload-conv-cost')
let reload_waste=document.getElementById('waste-per-kwh')
let reload_feed_mass=document.getElementById('reload-feed-mass')

tails_assay.addEventListener("input",(e)=>{
  computeFeed();
})
feed_assay.addEventListener("input",(e)=>{
  computeFeed();
})
product_mass.addEventListener("input",(e)=>{
  computeFeed();
})
feed_mass.addEventListener("input",(e)=>{
  computeFeed();
})
range.addEventListener("input",(e)=>{
    let val = parseFloat(e.target.value);
    if (val<parseFloat(feed_assay.value)) {
        return
    }
  number.value=val;
  select.value=""
  setRange(val);
  computeFeed();
})
number.addEventListener("input",(e)=>{
  range.value=e.target.value;
  select.value=""
  setRange(e.target.value);
  computeFeed();
})
select.addEventListener("change",(e)=>{
    if (!e.target.value) {
        return;
    }
    number.value=e.target.value;
    range.value=e.target.value;
    setRange(e.target.value);
    computeFeed();
})

save.addEventListener("click", (e) => {
  copySettingsToClipboard();
})


// burnup
burange.addEventListener("input",(e)=>{
    let val = parseFloat(e.target.value);
  bunumber.value=val;
  buselect.value=""
  computeCost();
})
bunumber.addEventListener("input",(e)=>{
  burange.value=e.target.value;
  buselect.value=""
  computeCost();
})
buselect.addEventListener("change",(e)=>{
    if (!e.target.value) {
        return;
    }
    bunumber.value=e.target.value;
    burange.value=e.target.value;
    computeCost();
})

// efficiency
effrange.addEventListener("input",(e)=>{
  let val = parseFloat(e.target.value);
  effnumber.value=val;
  effselect.value=""
  computeCost();
})
effnumber.addEventListener("input",(e)=>{
  effrange.value=e.target.value;
  effselect.value=""
  computeCost();
})
effselect.addEventListener("change",(e)=>{
    if (!e.target.value) {
        return;
    }
    effnumber.value=e.target.value;
    effrange.value=e.target.value;
    computeCost();
})

/*
// power
powerrange.addEventListener("input",(e)=>{
    let val = parseFloat(e.target.value);
  powernumber.value=val;
  powerselect.value=""
})
powernumber.addEventListener("input",(e)=>{
  powerrange.value=e.target.value;
  powerselect.value=""
})
powerselect.addEventListener("change",(e)=>{
    if (!e.target.value) {
        return;
    }
    powernumber.value=e.target.value;
    powerrange.value=e.target.value;
})
*/

function setRange(val) {
    let label=document.getElementById("enrich-label");
    if (val>=0.0 && val<0.7) {
        label.innerHTML="Depleted";
    }
    else if (val==0.7) {
        label.innerHTML="Natural";
    }
    else if (val>0.7 && val<=5) {
        label.innerHTML="LEU";
    }
    else if (val>5 && val<=20.0) {
        label.innerHTML="HALEU";
    }
    else if (val>20.0 && val<=99.0) {
        label.innerHTML="HEU";
    }
    else if (val>99.0 && val<=100.0) {
        label.innerHTML="😲";
    }
    else {
        label.innerHTML="Impossible";
    }
}


function computeFeed() {
    // Compute feed and SWU given desired product and enrichment
    // compute MF/MP = feed factor
    let mode = document.querySelector('input[name="mode"]:checked').value
    let feed_factor= get_feed_factor();
    if (mode=="1") {
        feed_mass.value = (feed_factor * product_mass.value).toFixed(3);
    }
    else {
        product_mass.value = (feed_mass.value/feed_factor).toFixed(3);
    }
    let swu_factor=get_swu_factor(feed_factor)
    swu.value = (swu_factor * product_mass.value).toFixed(3);
    tails_mass.value = (feed_mass.value - product_mass.value).toFixed(3);

    // update plot data
    let u238 = {
        x: ['Feed', 'Product', 'Tails'],
        y: [feed_mass.value*(1-feed_assay.value/100.0), 
            product_mass.value*(1-number.value/100.0), 
            tails_mass.value*(1-tails_assay.value/100.0)
        ],
        name: 'U238',
        type: 'bar'
    };
    let u235 = {
        x: ['Feed', 'Product', 'Tails'],
        y: [feed_mass.value*(feed_assay.value/100.0), 
            product_mass.value*(number.value/100.0), 
            tails_mass.value*(tails_assay.value/100.0)
        ],
        name: 'U235',
        type: 'bar'
    };

    var data=[u238, u235];
    Plotly.react('plot', data, layout);
    computeCost();
}



function computeCost() {
    // we want to know $SWU/kWh, $Feed/kWh, $Fab/kWh and total cost for plotting
    // so we need SWU = SWUfactor*product * swu cost
    // product = how much fuel is needed to make a kWh
    // kg = 1 kWe * 1 hour * 1/eff [MWt/MWe] * 1/24 [day/hour] * 1/burnup [kg/(MWt*day)] * 1000 kW/MW)
    let feed_factor = get_feed_factor();
    let swu_factor = get_swu_factor(feed_factor)

    let prod_kg_per_kwe = 100.0/(effnumber.value * 24.0 * burnup.value * 1000.0);
    let swu_per_kwe = prod_kg_per_kwe * swu_factor;
    let feed_per_kwe = prod_kg_per_kwe * feed_factor;

    // convert to cents
    let swu_cost_per_kwe = swu_per_kwe * swucost.value*100;
    let feed_cost_per_kwe = feed_per_kwe * feedcost.value*100
    let fab_cost_per_kwe = prod_kg_per_kwe*fabcost.value*100
    let conv_cost_per_kwe = feed_per_kwe*convcost.value*100

    let tcost = swu_cost_per_kwe + feed_cost_per_kwe + conv_cost_per_kwe + fab_cost_per_kwe;
    reload_total_cost.value = tcost.toFixed(3);
    reload_swu_cost.value = swu_cost_per_kwe.toFixed(3);
    reload_feed_cost.value = feed_cost_per_kwe.toFixed(3);
    reload_fab_cost.value = fab_cost_per_kwe.toFixed(3);
    reload_conv_cost.value = conv_cost_per_kwe.toFixed(3);
    reload_waste.value = (prod_kg_per_kwe*1000000).toFixed(3);
    reload_feed_mass.value = (feed_per_kwe*1000000).toFixed(3);
}

function vx(x) {
    // value function: gotta convert percentages to fraction
    let xn = Number(x/100.0);
    return (1.0-2*xn) * Math.log((1.0-xn)/xn);
}

function get_feed_factor(){ 
  // feed factor = F/P
  return (number.value - tails_assay.value)/(feed_assay.value-tails_assay.value);

}

function get_swu_factor(feed_factor) {
  // swufactor= SWU/MP
  let vxt = vx(tails_assay.value)
  return (vx(number.value) - vxt) -  feed_factor*(vx(feed_assay.value)-vxt);
}


function setInputVals() {
  // These can all be passed in as query params
  const input = new URLSearchParams(window.location.search);
  tails_assay.value = input.get("tails-assay") || 0.25;
  feed_assay.value = input.get("feed-assay") || 0.711;
  number.value = input.get("enrich") || 4.0;
  range.value = number.value;
  setRange(number.value);
  feed_mass.value = input.get("feed-mass") || 0;
  product_mass.value = input.get("product-mass") || 1;
  feed_mass.value = input.get("feed-mass") || 1;
  if (input.get("mode") == "0") {
      // check a checkbox
      prod_const.checked=true
  };
}

function copySettingsToClipboard() {
  let params = new URLSearchParams([
    ["tails-assay", tails_assay.value], 
    ["feed-assay", feed_assay.value],
    ["enrich", number.value],
    ["feed-mass", feed_mass.value],
    ["product-mass", product_mass.value],
    ["mode", prod_const.checked ? "0" : "1"],
  ]);

  let text = new URL(`${location.protocol + '//' + location.host + location.pathname}?${params}`);
  navigator.clipboard.writeText(text);
}

var trace1 = {
  x: ['Feed', 'Product', 'Tails'],
  y: [20, 14, 23],
  name: 'U238',
  type: 'bar'
};

var trace2 = {
  x: ['Feed', 'Product', 'Tails'],
  y: [12, 18, 29],
  name: 'U235',
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {barmode: 'stack', yaxis: {
    type: 'log', autorange: true, 
}, 
autosize: true,
  margin: {
      t: 0
    },
};

Plotly.newPlot('plot', data, layout);

window.onresize = function() {
    Plotly.relayout('plot', {})
}

// compute initial values
setInputVals();
computeFeed();


</script>

</div>
</div>
