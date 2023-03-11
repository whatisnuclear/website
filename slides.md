---
title: Nuclear energy slide deck for schools, etc.
description: > 
  This is a (slightly) customizable and freely-available slide deck covering
  nuclear energy at a high-school level, intended to be used by teachers or
  parents or anyone who wants to talk about nuclear energy.
author: nick
layout: default
date: 2023-03-10
image: /img/slides.png
---
<div class="row">
<div class="col-md-12" markdown="1">

The [whatisnuclear slide deck]({% link slides/nuclear-overview.html %})
describes our current energy context and explains how nuclear energy fits in. We
are releasing them with CC-BY-NC licensing hoping they'd be used around the
world.

The slides are made with [reveal.js](https://revealjs.com), which is a web-based
slide technology somewhat similar to Powerpoint, but you just present them from
the browser. It is a **two dimensional** slide deck, where you go **left to
right** for each major section and then
**down** to see the details. You can use the arrow keys to navigate. It's
organized so that you can always just do the first few slides of a section
before pressing the right arrow key to go on to the next topic, so you can cull
the slides as needed for your audience or time allotment.

To navigate through all slides in order, press the **space** bar rather than the
arrow keys. Use the **Home** and **End** buttons to go to the beginning or end of
the deck.

There is a speaker view and speaker notes that describe to you the presenter what's
going on. Press the **S** key to open speaker view in a separate window.

Many images lazy-load, so you should have an internet connection to give this presentation.

## Make it your own!
You can enter values here that will show up in the author, date, and location 
areas on the front page. Please use responsibly. 

<div class="row">
<div class="col-3 col-lg-6">
<label for="ptitle" class="form-label">Title</label>
<input type="text" value="Introduction to Nuclear Energy" class="form-control" id="ptitle">
</div>
<div class="col-3 col-lg-6">
<label for="presenter" class="form-label">Your name</label>
<input type="text" value="" placeholder="Presenter name" class="form-control" id="presenter">
</div>
<div class="col-3 col-lg-6">
<label for="event-name" class="form-label">Event name</label>
<input type="text" value="" placeholder="Event name" class="form-control" id="event">
</div>
<div class="col-3 col-lg-6">
<label for="date" class="form-label">Date</label>
<input type="text" value="" placeholder="Date" class="form-control" id="date">
</div>
</div>
<button onclick="copySettingsToClipboard()">Generate your presentation!</button>

<script>

let event=document.getElementById("event");
let presenter=document.getElementById('presenter')
let date=document.getElementById('date')
let title=document.getElementById('ptitle')


function setInputVals() {
  // These can all be passed in as query params
  const input = new URLSearchParams(window.location.search);
  event.value = input.get("event") || event;
  presenter.value = input.get("presenter") || "";
  date.value = input.get("date") || "";
  title.value = input.get("title") || "";
}

function copySettingsToClipboard() {
  let params = new URLSearchParams([
    ["event", event.value], 
    ["presenter", presenter.value],
    ["date", date.value],
    ["title", title.value],
  ]);

  let text = new URL(`${location.protocol + '//' + location.host}` + '/slides/nuclear-overview.html' + `?${params}`);
  window.location = text;
}



</script>

</div>
</div>


