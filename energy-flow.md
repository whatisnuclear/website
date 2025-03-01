---
title: Energy flow diagram
description: Primordial origins of all energy sources
author: nick
layout: default
date: 2020-06-03
byline: true
image: /img/energy-flow-sm.jpg
categories:
  - deep dive
---

<div class="row">
<div class="col-md-12" markdown="1">

This diagram roughly shows the origin of energy we can use to help us do stuff.

Most items are individually clickable to give you more info (mostly Wikipedia links).

UPDATE: This [was remixed by @OperadorNuclear really
well](https://twitter.com/OperadorNuclear/status/1403800198132994059).

<pre class="mermaid">
{% include_relative energy-flow.mmd %}
</pre>

You can download this as a jpg [here](/img/energy-flow.jpg).

<script type="module">
  import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
  var config = {
    startOnLoad: true,
    htmlLabels: true,
    flowchart: {
      curve: "basis",
      useMaxWidth: true,
      stroke: "gray",
      fill: "honeydew",
      diagramPadding: 3,
      nodeSpacing: 30,
      rankSpacing: 30,
    },
    securityLevel: "loose",
  };

  mermaid.initialize(config);
</script>

</div>
</div>
