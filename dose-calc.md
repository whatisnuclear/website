---
title: Low-dose Radiation Effect Estimator
description: >
  Enter an equivalent dose rate and see what the long-term
  health consequences are estimated to be.
author: nick
layout: default
date: 2022-11-01
image: /img/beirvii.png
categories:
  - reference
---

<div class="row">
<div class="col-12" markdown="1">

<div class="row">
<div class="col-lg-2 col-md-3 col-sm-4 col-6">
<label for="rate">Dose Rate</label>
<input type="text" value="0.7" class="form-control" id="rate">
</div>
<div class="col-lg-2 col-md-3 col-sm-4 col-6">
<label for="rate-units">Units</label>
<select class="form-select" aria-label="Dose rate unit" id="rate-units">
  <option value="usv_hr">μSv/hr</option>
  <option value="mrem_hr">mrem/hr</option>
  <option value="mrem_hr">mR/hr</option>
  <option value="msv_hr">mSv/hr</option>
</select>
</div>
</div>

# Results

<div class="row">
<div class="col-6">
<p class="mb-0 pb-0">According to the linear no-threshold hypothesis, you can get that dose rate for:</p>
<h2 class="text-center my-0 py-0" id="result">?</h2> 
before increasing your lifetime risk of getting cancer by 1% (from 42% to 43%).
</div>
<div class="col-6">
<p class="mb-0 pb-0">That is about:</p>
<h2 class="text-center my-0 py-0" id="multiplier">?</h2> 
the normal annual dose rate US citizens get from natural background radiation and medical treatments 
averaged over 1 year.
</div>
</div>

## More info

<img class="img-fluid w-50 float-end" alt="Indication of how many cancers 100 mSv causes compared to normal" src="img/beirvii.png"/>

[BEIR VII](https://nap.nationalacademies.org/resource/11340/beir_vii_final.pdf)
says that if you get 100 mSv in one acute dose of radiation, you have an
additional 1 chance in 100 of getting cancer in your life, compared to a normal
lifetime risk of 42 in 100. In other words, it increases your chances of cancer
from 42% to 43%.

<script>

let rate=document.getElementById("rate");
let units=document.getElementById('rate-units')
let result=document.getElementById('result')
let mult=document.getElementById('multiplier')

rate.addEventListener("input",(e)=>{
  compute();
})
units.addEventListener("change",(e)=>{
  compute();
})


function compute() {
    let inp = Number(rate.value);
    let rate_msv_hr;
    switch (units.value) {
      case 'usv_hr':
        rate_msv_hr = inp/1000.0;
        break;
      case 'mrem_hr':
        rate_msv_hr = inp/100.0;
        break
      case 'msv_hr':
        rate_msv_hr = inp;
    }
    let hours_to_risk = 100.0/rate_msv_hr;
    let risk 
    if (hours_to_risk*60.0 < 1.0) {
        risk = `${(hours_to_risk*3600.0).toFixed(2)} seconds`
    }
    else if (hours_to_risk*60.0>=1 && hours_to_risk < 1.0) {
        risk = `${(hours_to_risk*60.0).toFixed(1)} minutes`
    } else if (1 <= hours_to_risk && hours_to_risk < 24) {
        risk = `${(hours_to_risk).toFixed(1)} hours`
    } else if (24 <= hours_to_risk && hours_to_risk < 24*365) {
        risk = `${(hours_to_risk/24.0).toFixed(1)} days`
    } else if (24*365 <= hours_to_risk) {
        risk = `${(hours_to_risk/24.0/365.25).toFixed(1)} years`
    }
    result.innerHTML = risk;

    mult.innerHTML = `${(rate_msv_hr/ 0.0006844).toFixed(1)}x`

}

compute();


</script>

</div>
</div>
