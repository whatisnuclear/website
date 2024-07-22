---
layout: slides
title: Developments in the Long Quest for Economical Civilian Nuclear Power
description: >
  How nuclear power plants developed.
image: /img/slides-history-blank.png
---

<section>
  <h2 id="pres-title">{{page.title}}</h2>
  <img src="/img/reactor_web.svg" class="img-fluid w-25 " alt="An icon of a
  nuclear reactor with an atom symbol on a cooling tower and a lightning bolt on
  the reactor." {% imagesize img/reactor_web.svg:props %} />
  <p id="presenter-c" class="frontmatter small">
    Presented by: <span id="presenter"></span>
  </p>
  <p id="event-c" class="frontmatter small"><span id="event"></span></p>
  <p class="frontmatter small"><span id="date"></span></p>
  <p class="attribution">
    Slides by
    <a href="/slides.html">whatisnuclear.com</a>
  </p>
</section>

<!-- prettier-ignore -->
{% include_relative _how-reactors-work.html %}
{% include_relative _reactor-types.html %}
{% include_relative hist/_early-reactors.md %}
{% include_relative hist/_critical-assemblies.html %}
{% include_relative hist/_reactor-experiments.html %}
{% include_relative hist/_power-demonstration.md %}
{% include_relative hist/_other-notables.md %}

<!-- {% include_relative _status-of-nuclear.html %} -->

{% include_relative _advanced-reactors.html %}

<!-- {% include_relative _startups.html %} -->

{% include_relative _boondoggles.html %}

  <section>
    <h3>Concluding thoughts</h3>
    <ul>
      <li>We have built all kinds of reactors!</li>
      <li>LWRs out-performed many other types at first</li>
      <li>Real issues in financing and construction performance exist</li>
      <li>Changing moderator/fuel/coolant alone is not a good strategy</li>
      <li>There are many nuclear startups in fission and fusion</li>
      <li>Quite a few of them are struggling</li>
      <li>We must improve delivery to survive!</li>
      <li>Incorporating project delivery lessons into any project is key</li>
      <li>See also: <a href="/museum">whatisnuclear.com/museum</a></li>
    </ul>
    <aside class="notes"></aside>
  </section>

<section>
  <h3 class="r-fit-text">THANK YOU!</h3>
  <p>
    Find more info and contact form at
    <a href="https://whatisnuclear.com/reactor_history.html"
      >whatisnuclear.com</a
    >
  </p>
  <aside class="notes"></aside>
</section>

<script>
  let now = new Date();
  let event = document.getElementById("event");
  let eventC = document.getElementById("event-c");
  let presenter = document.getElementById("presenter");
  let presenterC = document.getElementById("presenter-c");
  let date = document.getElementById("date");
  let title = document.getElementById("pres-title");

  function setInputVals() {
    // These can all be passed in as query params
    const input = new URLSearchParams(window.location.search);
    event.innerText = input.get("event") || "";
    presenter.innerText = input.get("presenter") || "";
    date.innerText = input.get("date") || now.toLocaleDateString();
    title.innerText = input.get("title") || "{{ page.title }}";

    if (!presenter.innerText) {
      presenterC.style.visibility = "hidden";
    }
    if (!event.innerText) {
      eventC.style.visibility = "hidden";
    }
  }

  setInputVals();
</script>
