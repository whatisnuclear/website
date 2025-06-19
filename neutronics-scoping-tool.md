---
title: Neutronics Scoping Tool
description: >
  Plug in your reactor type, size, and enrichment and get
  info about how much fuel you need, how long it will run,
  how much leakage there is, etc.
author: nick
layout: default
date: 2025-06-06
categories:
  - reference
---

<style>
  #plotly-container {
    max-width: 400px;
    max-height: 400px;
    width: 100%
  }
  canvas {
    border: 1px solid black;
    width: 100%;
    max-width: 400px;
    max-height: 400px;
  }
  .slider-container {
    margin: 10px;
  }
  #dimensions {
    margin-top: 10px;
    font-size: 16px;
  }
  #warning-label {
    background-color: white;
    color: black; /* Text color for readability */
    font-weight: bold;
    font-size: 1.0rem;
    border: 1px solid #ccc; /* Optional: subtle border */
    transition: background-color 0.5s ease; /* Smooth color transition */
    max-width: 200px; 
  }
  #warning-subcrit {
    background-color: rgb(255, 0, 0);
    color: black; /* Text color for readability */
    font-weight: bold;
    font-size: 1.0rem;
    border: 1px solid #ccc; /* Optional: subtle border */
    max-width: 200px; 
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
  }
  #warning-subcrit.visible {
    opacity: 1;
  }
  #warning-subcrit.hidden {
    display: block;
    opacity: 0;
  }
</style>
<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.174.0/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@0.174.0/examples/jsm/"
    }
  }
</script>
<script src="/assets/fuel-cycle-cost.js?{{ site.time | date: '%s' }}"></script>
<script type="module" src="{{ '/assets/neutronics-scoping-tool.js' | relative_url }}?{{ site.time | date: '%s' }}"></script>
<script src="https://cdn.plot.ly/plotly-3.0.1.min.js" charset="utf-8"></script>

<div class="row" markdown="1">

This is a beta version of the What is Nuclear Neutronics Scoping Tool. Dial in
your core dimensions and enrichment and see how critical it is and how much the
fuel costs and what the normal power would be at that volume (assuming typical
power density). It is currently hard-coded to a LWR-like core but we'll add
TRISO and SFR cases in soon. The translucent outer area represents typical
shielding required. This uses pre-calculated unit-cell calculations under the
hood with actual transport and depletion. Still, this is very approximate
and especially **overestimates reactivity for small cores**. It can give you
an idea within like 1-4% dk/k. Please confirm with real calculations.

</div>

<div class="row">
  <div class="col-md-6">
    <canvas id="canvas"></canvas>
    <div class="slider-container">
      <label for="heightSlider">Height (cm): </label>
      <input type="range" id="heightSlider" min="0" max="700" value="75">
    </div>
    <div class="slider-container">
      <label for="radiusSlider">Radius (cm): </label>
      <input type="range" id="radiusSlider" min="0" max="500" value="100">
    </div>
    <div class="slider-container">
      <label for="enrichSlider">Enrichment (%): </label>
      <input type="range" id="enrichSlider" min="0" max="20" step="0.5" value="3">
    </div>
    <div class="slider-container">
      <label for="powerSlider">Power rating (%): </label>
      <input type="range" id="powerSlider" min="1" max="200" step="1" value="100">
    </div>
    <div id="dimensions">Height: 75 cm, Radius: 100 cm, Power: 100%</div>
    <div id="warning-label" class="text-center p-0">K OVERESTIMATE</div>
    <div id="warning-subcrit" class="text-center p-0 hidden">SUBCRITICAL</div>
  </div>
  <div class="col-md-6">
    <div id="plotly-container"></div>
    <div id="output">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Output</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Power</th>
            <td id="outPower"></td>   
          </tr>
          <tr>
            <th scope="row">Fuel loading</th>
            <td id="outFuel"></td>   
          </tr>
          <tr>
            <th scope="row">Fissile loading</th>
            <td id="outFissile"></td>   
          </tr>
          <tr>
            <th scope="row">Fuel cost</th>
            <td id="outCost"></td>   
          </tr>
          <tr>
            <th scope="row">Fuel LCOE</th>
            <td id="outLCOE"></td>   
          </tr>
          <tr>
            <th scope="row">Time critical</th>
            <td id="outTime"></td>
          </tr>
          <tr>
            <th scope="row">Discharge burnup</th>
            <td id="outBu"></td>
          </tr>
          <tr>
            <th scope="row">Reactivity swing</th>
            <td id="outSwing"></td>
          </tr>
          <tr>
            <th scope="row">Shielding Mass</th>
            <td id="outShield"></td>
          </tr>
          <tr>
            <th scope="row">Leakage</th>
            <td id="outLeakage"></td>
          </tr>
          <tr>
            <th scope="row">Migration length</th>
            <td id="outMigration"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div class="row" markdown="1">

Assumptions and simplifications in place:

- Bare cylindrical geometry, no reflector
- No control rods or burnable poison (somewhat counteracts the former)
- Vacuum boundary conditions
- No fuel shuffling (single cycle)

</div>
