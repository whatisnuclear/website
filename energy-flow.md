---
title: Energy flow diagram
description: Primordial origins of all energy sources
author: Nick Touran
layout: default
date: 2020-06-03
mermaid: true
image: /img/energy-flow-sm.jpg
---
<div class="row">
<div class="col-md-12" markdown="1">
# Energy flow diagram
#####  {{ page.author }}, {{ page.date }}

This diagram roughly shows the origin of energy we can use to help us do stuff. 

Most items are individually clickable to give you more info (mostly Wikipedia links).
<div class="joplin-editable">
<pre class="joplin-source" data-joplin-language="mermaid" data-joplin-source-open="```mermaid&#10;" data-joplin-source-close="&#10;```&#10;">

graph TD

    big[&quot;Big bang&quot;] --&gt; Protons[(Protons)] --&gt; Stars[(&quot;Ancient stars&lt;br/&gt; (nuclear fusion)&quot;)]
    click Stars &quot;https://en.wikipedia.org/wiki/Nuclear_fusion&quot;
    click big &quot;https://en.wikipedia.org/wiki/Big_Bang&quot;
    
    Stars --&gt; stellar[&quot;Stellar &lt;br/&gt;nucleosynthesis&quot;]
    click stellar &quot;https://en.wikipedia.org/wiki/Stellar_nucleosynthesis&quot;
    stellar --&gt; iron[(Elements lighter&lt;br&gt; than Iron)]
    iron --&gt; fusion([&quot;Nuclear fusion &lt;br/&gt;on Earth (TBD)&quot;]) -.-&gt; Electricity((Energy))
    click fusion &quot;https://en.wikipedia.org/wiki/Fusion_power&quot;
    style fusion stroke:#f66,stroke-dasharray: 5, 5
    supernova --&gt; cooling[&quot;Primordial heat&quot;] --&gt; geo
    supernova --&gt; Uranium
    click cooling &quot;https://en.wikipedia.org/wiki/Earth%27s_internal_heat_budget#Primordial_heat&quot;

    Stars --&gt; supernova[&quot;Supernova&lt;br/&gt; nucleosynthesis&quot;]
    click supernova &quot;https://en.wikipedia.org/wiki/Supernova_nucleosynthesis&quot;
    
    Stars --&gt; ssys[(Solar system&lt;br/&gt; dynamics)]
    ssys --&gt; Tidal([Tidal]) --&gt; Electricity
    click Tidal &quot;https://en.wikipedia.org/wiki/Tidal_power&quot;
    click ssys &quot;https://en.wikipedia.org/wiki/Formation_and_evolution_of_the_Solar_System&quot;
    
    Protons --&gt; Sun[(&quot;Our Sun &lt;br/&gt;(nuclear fusion)&quot;)]--&gt; srad[&quot;Solar radiation&quot;]
    click Protons &quot;https://en.wikipedia.org/wiki/Proton&quot;
    click Sun &quot;https://en.wikipedia.org/wiki/Sun&quot;
    click srad &quot;https://en.wikipedia.org/wiki/Sunlight&quot;
    srad --&gt; solar([&quot;Solar PV&quot;])
    click solar &quot;https://en.wikipedia.org/wiki/Photovoltaic_system&quot;
    srad --&gt; uneven[&quot;Uneven heating&quot;] --&gt; pressure[&quot;Pressure gradients&quot;] --&gt; Wind([Wind])
    click pressure &quot;https://en.wikipedia.org/wiki/Pressure_gradient&quot;
    solar --&gt; Electricity
    Wind --&gt; Electricity
    click Wind &quot;https://en.wikipedia.org/wiki/Wind&quot;
    
    
    fission --&gt; fp[(Fission products)]
    click Uranium &quot;https://en.wikipedia.org/wiki/Uranium&quot;
    click fission &quot;https://en.wikipedia.org/wiki/Nuclear_fission&quot;
    click fp &quot;https://en.wikipedia.org/wiki/Nuclear_fission_product&quot;
    fission --&gt; Electricity


    srad --&gt; Evaporation --&gt; Rain[(Rain)] --&gt; hydro([Hydropower]) --&gt; Electricity
    click hydro &quot;https://en.wikipedia.org/wiki/Hydropower&quot;
    click Rain &quot;https://en.wikipedia.org/wiki/Rain&quot;
    click Evaporation &quot;https://en.wikipedia.org/wiki/Evaporation&quot;
    srad --&gt; Photosynthesis --&gt; Plants[(Organic matter)]
    Plants --&gt; Biofuel[(Biofuel)] --&gt; Combustion --&gt; Electricity
    Plants --&gt; Decay --&gt; Fossil[(&quot;Fossil fuel &lt;br/&gt;(oil, coal, gas)&quot;)] --&gt; Combustion
    click Photosynthesis &quot;https://en.wikipedia.org/wiki/Photosynthesis&quot;
    click Decay &quot;https://en.wikipedia.org/wiki/Fossil_fuel#Origin&quot;
    click Fossil &quot;https://en.wikipedia.org/wiki/Fossil_fuel&quot;
    click Biofuel &quot;https://en.wikipedia.org/wiki/Biofuel&quot;
    click Combustion &quot;https://en.wikipedia.org/wiki/Combustion&quot;
    click Plants &quot;https://en.wikipedia.org/wiki/Organic_matter&quot;
    
    iron --&gt; |K-40| decayheat
    Uranium --&gt; decayheat[&quot;Radioactive decay heat&quot;] 
    decayheat --&gt; geo([Geothermal])
    click decayheat &quot;https://en.wikipedia.org/wiki/Earth%27s_internal_heat_budget#Radiogenic_heat&quot;
    geo --&gt; Electricity
    click geo &quot;https://en.wikipedia.org/wiki/Geothermal_energy&quot;
    Uranium[(&quot;Uranium &amp;&lt;br&gt;Thorium&quot;)] --&gt; fission([&quot;Nuclear fission&quot;])  
&quot;&quot;
    Electricity --&gt;quality[(&quot;Improved quality of life&quot;)]
    click Electricity &quot;https://en.wikipedia.org/wiki/Energy&quot;
    click quality &quot;https://www.researchgate.net/figure/HDI-vs-electricity-consumption-2-40-46_fig4_315794998&quot;
    Combustion --&gt; airp[(Air pollution)]
    click airp &quot;http://www9.who.int/airpollution/en/&quot;
    Combustion --&gt; co2[(&quot;CO₂ emissions&quot;)]

    co2 --&gt; warming[(Climate change)]
    airp --&gt; lung[(Lung diseases)]
    click co2 &quot;https://en.wikipedia.org/wiki/Greenhouse_gas#Anthropogenic_greenhouse_gases&quot;
    click lung &quot;https://en.wikipedia.org/wiki/Respiratory_disease&quot;
    
    click warming &quot;https://climate.nasa.gov/evidence/&quot;
</pre>
<div class="mermaid mermaidContainer">

graph TD

    big[&quot;Big bang&quot;] --&gt; Protons[(Protons)] --&gt; Stars[(&quot;Ancient stars&lt;br/&gt; (nuclear fusion)&quot;)]
    click Stars &quot;https://en.wikipedia.org/wiki/Nuclear_fusion&quot;
    click big &quot;https://en.wikipedia.org/wiki/Big_Bang&quot;
    
    Stars --&gt; stellar[&quot;Stellar &lt;br/&gt;nucleosynthesis&quot;]
    click stellar &quot;https://en.wikipedia.org/wiki/Stellar_nucleosynthesis&quot;
    stellar --&gt; iron[(Elements lighter&lt;br&gt; than Iron)]
    iron --&gt; fusion([&quot;Nuclear fusion &lt;br/&gt;on Earth (TBD)&quot;]) -.-&gt; Electricity((Energy))
    click fusion &quot;https://en.wikipedia.org/wiki/Fusion_power&quot;
    style fusion stroke:#f66,stroke-dasharray: 5, 5
    supernova --&gt; cooling[&quot;Primordial heat&quot;] --&gt; geo
    supernova --&gt; Uranium
    click cooling &quot;https://en.wikipedia.org/wiki/Earth%27s_internal_heat_budget#Primordial_heat&quot;

    Stars --&gt; supernova[&quot;Supernova&lt;br/&gt; nucleosynthesis&quot;]
    click supernova &quot;https://en.wikipedia.org/wiki/Supernova_nucleosynthesis&quot;
    
    Stars --&gt; ssys[(Solar system&lt;br/&gt; dynamics)]
    ssys --&gt; Tidal([Tidal]) --&gt; Electricity
    click Tidal &quot;https://en.wikipedia.org/wiki/Tidal_power&quot;
    click ssys &quot;https://en.wikipedia.org/wiki/Formation_and_evolution_of_the_Solar_System&quot;
    
    Protons --&gt; Sun[(&quot;Our Sun &lt;br/&gt;(nuclear fusion)&quot;)]--&gt; srad[&quot;Solar radiation&quot;]
    click Protons &quot;https://en.wikipedia.org/wiki/Proton&quot;
    click Sun &quot;https://en.wikipedia.org/wiki/Sun&quot;
    click srad &quot;https://en.wikipedia.org/wiki/Sunlight&quot;
    srad --&gt; solar([&quot;Solar PV&quot;])
    click solar &quot;https://en.wikipedia.org/wiki/Photovoltaic_system&quot;
    srad --&gt; uneven[&quot;Uneven heating&quot;] --&gt; pressure[&quot;Pressure gradients&quot;] --&gt; Wind([Wind])
    click pressure &quot;https://en.wikipedia.org/wiki/Pressure_gradient&quot;
    solar --&gt; Electricity
    Wind --&gt; Electricity
    click Wind &quot;https://en.wikipedia.org/wiki/Wind&quot;
    
    
    fission --&gt; fp[(Fission products)]
    click Uranium &quot;https://en.wikipedia.org/wiki/Uranium&quot;
    click fission &quot;https://en.wikipedia.org/wiki/Nuclear_fission&quot;
    click fp &quot;https://en.wikipedia.org/wiki/Nuclear_fission_product&quot;
    fission --&gt; Electricity


    srad --&gt; Evaporation --&gt; Rain[(Rain)] --&gt; hydro([Hydropower]) --&gt; Electricity
    click hydro &quot;https://en.wikipedia.org/wiki/Hydropower&quot;
    click Rain &quot;https://en.wikipedia.org/wiki/Rain&quot;
    click Evaporation &quot;https://en.wikipedia.org/wiki/Evaporation&quot;
    srad --&gt; Photosynthesis --&gt; Plants[(Organic matter)]
    Plants --&gt; Biofuel[(Biofuel)] --&gt; Combustion --&gt; Electricity
    Plants --&gt; Decay --&gt; Fossil[(&quot;Fossil fuel &lt;br/&gt;(oil, coal, gas)&quot;)] --&gt; Combustion
    click Photosynthesis &quot;https://en.wikipedia.org/wiki/Photosynthesis&quot;
    click Decay &quot;https://en.wikipedia.org/wiki/Fossil_fuel#Origin&quot;
    click Fossil &quot;https://en.wikipedia.org/wiki/Fossil_fuel&quot;
    click Biofuel &quot;https://en.wikipedia.org/wiki/Biofuel&quot;
    click Combustion &quot;https://en.wikipedia.org/wiki/Combustion&quot;
    click Plants &quot;https://en.wikipedia.org/wiki/Organic_matter&quot;
    
    iron --&gt; |K-40| decayheat
    Uranium --&gt; decayheat[&quot;Radioactive decay heat&quot;] 
    decayheat --&gt; geo([Geothermal])
    click decayheat &quot;https://en.wikipedia.org/wiki/Earth%27s_internal_heat_budget#Radiogenic_heat&quot;
    geo --&gt; Electricity
    click geo &quot;https://en.wikipedia.org/wiki/Geothermal_energy&quot;
    Uranium[(&quot;Uranium &amp;&lt;br&gt;Thorium&quot;)] --&gt; fission([&quot;Nuclear fission&quot;])  
&quot;&quot;
    Electricity --&gt;quality[(&quot;Improved quality of life&quot;)]
    click Electricity &quot;https://en.wikipedia.org/wiki/Energy&quot;
    click quality &quot;https://www.researchgate.net/figure/HDI-vs-electricity-consumption-2-40-46_fig4_315794998&quot;
    Combustion --&gt; airp[(Air pollution)]
    click airp &quot;http://www9.who.int/airpollution/en/&quot;
    Combustion --&gt; co2[(&quot;CO₂ emissions&quot;)]

    co2 --&gt; warming[(Climate change)]
    airp --&gt; lung[(Lung diseases)]
    click co2 &quot;https://en.wikipedia.org/wiki/Greenhouse_gas#Anthropogenic_greenhouse_gases&quot;
    click lung &quot;https://en.wikipedia.org/wiki/Respiratory_disease&quot;
    
    click warming &quot;https://climate.nasa.gov/evidence/&quot;
</div>
</div>

You can download this as a jpg [here](/img/energy-flow.jpg).

</div>
</div>

<script>
    var callback = function(){
        alert('A callback was triggered');
    }
    var config = {
        startOnLoad:true,
        flowchart:{
            useMaxWidth:true,
            htmlLabels:true,
            curve:'linear',
        },
        securityLevel:'loose',
    };

    mermaid.initialize(config);
  </script>
			
