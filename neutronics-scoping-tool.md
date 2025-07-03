---
title: Neutronics Scoping Tool
description: >
  Plug in your reactor type, size, and enrichment and get
  info about how much fuel you need, how long it will run,
  how much leakage there is, etc.
author: nick
layout: default
date: 2025-06-06
image: /img/scoping-tool-cover.png
categories:
  - reference
css:
  - scoping-tool.css
---

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
<script src="https://cdn.plot.ly/plotly-3.0.1.min.js"></script>

<div class="row" markdown="1">

This is a **beta version** of our new Neutronics Scoping Tool. Dial in your core
dimensions and enrichment and see how critical it is and how much the fuel costs
and what the normal power would be at that volume (assuming typical power
density). The translucent outer area represents typical shielding required. Read
[more information about the tool here]({% link
_posts/2025-06-28-about-the-neutronics-scoping-tool.md %}). Still, this is very
approximate and especially **overestimates reactivity for small cores**. It can
give you an idea within like 1-4% dk/k. **Please confirm with real
calculations.**

</div>

<div class="row">
  <div class="col-md-6">
    <canvas id="canvas"></canvas>
    <div class="slider-container">
      <label for="reactorType">Reactor type: </label>
      <select id="reactorType" name="reactor_type">
        <option value="LWR">LWR</option>
        <option value="HTGR">HTGR</option>
        <option value="SFR">SFR</option>
        <option value="CANDU">CANDU</option>
    </select>
    </div>
    <div class="row">
      <div class="col-sm-2 col-md-4">
        <label for="heightSlider">Height: </label>
      </div>
      <div class="col-6 slider-container">
        <input type="range" id="heightSlider" min="0" max="700" value="75">
      </div>
      <div class="col" id="heightVal">75 cm</div>
    </div>
    <div class="row">
      <div class="col-sm-2 col-md-4"> <label for="radiusSlider">Radius:</label> </div>
      <div class="col-6 slider-container">
        <input type="range" id="radiusSlider" min="0" max="500" value="100">
      </div>
      <div class="col" id="radiusVal">100 cm</div>
    </div>
    <div class="row">
      <div class="col-sm-2 col-md-4">
        <label for="enrichSlider">Enrichment: </label>
        </div>
      <div class="col-6 slider-container">
        <input type="range" id="enrichSlider" min="0" max="20" step="0.5" value="3">
      </div>
      <div class="col" id="enrichVal">3 %</div>
    </div>
    <div class="row">
      <div class="col-sm-2 col-md-4"> <label for="powerSlider">Power rating: </label> </div>
      <div class="col-6 slider-container">
        <input type="range" id="powerSlider" min="1" max="200" step="1" value="100">
      </div>
      <div class="col" id="powerVal">100 %</div>
    </div>
    <div class="row">
      <div class="col-4 checkbox-container">
        <label for="cycleSlider">Cycle Length: </label>
        <div class="px-2">
          <input type="checkbox" id="cycleAuto" value="1" checked>
          <label for="cycleAuto">Auto</label>
        </div>
      </div>
      <div class="col-6 slider-container">
        <input type="range" id="cycleSlider" min="0" max="60" step="0.25" value="1.5" disabled>
      </div>
      <div class="col">
        <span id=cycleVal>1.5 yr</span>
      </div>
    </div>
    <div id="warning-label" class="text-center p-0">K OVERESTIMATE</div>
    <div id="warning-subcrit" class="text-center p-0 hidden">SUBCRITICAL</div>
    <div id="warning-high-bu" class="text-center p-0 hidden" >HIGH BURNUP</div>
    <div id="warning-imp-bu" class="text-center p-0 hidden">IMPOSSIBLE BURNUP</div>
    <p class="text-center">
      <button id="save" class="btn btn-primary">
        <i class="fa fa-clipboard fa-lg"></i> Copy current settings to
        clipboard
      </button>
    </p>

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
            <th scope="row">Fuel LCOE</th>
            <td id="outLCOE" class="text-primary"></td>   
          </tr>
          <tr>
            <th scope="row">Fuel cost</th>
            <td id="outCost"></td>   
          </tr>
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
            <th scope="row">Cycle length</th>
            <td id="outTime"></td>
          </tr>
          <tr>
            <th scope="row">Discharge burnup</th>
            <td id="outBu"></td>
          </tr>
          <tr>
            <th scope="row">Mining intensity</th>
            <td id="outMining"></td>
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

## See Also

- [About the Neutronics Scoping Tool]({% link _posts/2025-06-28-about-the-neutronics-scoping-tool.md %})
- [Screenshare demo of the scoping tool](https://www.youtube.com/watch?v=GQzDfrdf71Y)
- Our [Fuel Cost/SWU Calculator]({% link enrichment.html %})

<!-- Modal -->
<div class="modal fade" id="copySuccessModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body text-center">
        <i class="bi bi-check-circle-fill text-success me-2"></i>
        Settings copied to clipboard!
      </div>
    </div>
  </div>
</div>

</div>
