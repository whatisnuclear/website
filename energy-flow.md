---
title: Energy flow diagram
description: Primordial origins of all energy sources
author: nick
layout: default
date: 2020-06-03
mermaid: true
byline: true
image: /img/energy-flow-sm.jpg
---
<div class="row">
<div class="col-md-12" markdown="1">

This diagram roughly shows the origin of energy we can use to help us do stuff. 

Most items are individually clickable to give you more info (mostly Wikipedia links).

UPDATE: This [was remixed by @OperadorNuclear really
well](https://twitter.com/OperadorNuclear/status/1403800198132994059).

<div class="mermaid">
graph TD

	big["Big bang"] --> Protons[(Protons)] --> Stars[("Ancient stars<br/> (nuclear fusion)")]
	click Stars "https://en.wikipedia.org/wiki/Nuclear_fusion"
click big "https://en.wikipedia.org/wiki/Big_Bang"
	
    Stars --> stellar["Stellar <br/>nucleosynthesis"]
    click stellar "https://en.wikipedia.org/wiki/Stellar_nucleosynthesis"
    stellar --> iron[(Elements lighter<br> than Iron)]
    iron --> fusion(["Nuclear fusion <br/>on Earth (TBD)"]) -.-> Electricity((Energy))
    click fusion "https://en.wikipedia.org/wiki/Fusion_power"
    style fusion stroke:#f66,stroke-dasharray: 5, 5
    supernova --> cooling["Residual cooling"] --> geo
    supernova --> Uranium

    Stars --> supernova["Supernova<br/> nucleosynthesis"]
    click supernova "https://en.wikipedia.org/wiki/Supernova_nucleosynthesis"
	
	Stars --> ssys[(Solar system<br/> dynamics)]
	ssys --> Tidal([Tidal]) --> Electricity
	click Tidal "https://en.wikipedia.org/wiki/Tidal_power"
	click ssys "https://en.wikipedia.org/wiki/Formation_and_evolution_of_the_Solar_System"
	
    Protons --> Sun[("Our Sun <br/>(nuclear fusion)")]--> srad["Solar radiation"]
    click Protons "https://en.wikipedia.org/wiki/Proton"
    click Sun "https://en.wikipedia.org/wiki/Sun"
    click srad "https://en.wikipedia.org/wiki/Sunlight"
    srad --> solar(["Solar PV"])
    click solar "https://en.wikipedia.org/wiki/Photovoltaic_system"
    srad --> uneven["Uneven heating"] --> pressure["Pressure gradients"] --> Wind([Wind])
    click pressure "https://en.wikipedia.org/wiki/Pressure_gradient"
    solar --> Electricity
    Wind --> Electricity
    click Wind "https://en.wikipedia.org/wiki/Wind"
    
    
    fission --> fp[(Fission products)]
    click fission "https://en.wikipedia.org/wiki/Nuclear_fission"
    click fp "https://en.wikipedia.org/wiki/Nuclear_fission_product"
    fission --> Electricity


    srad --> Evaporation --> Rain[(Rain)] --> hydro([Hydropower]) --> Electricity
    click hydro "https://en.wikipedia.org/wiki/Hydropower"
    click Rain "https://en.wikipedia.org/wiki/Rain"
    click Evaporation "https://en.wikipedia.org/wiki/Evaporation"
    srad --> Photosynthesis --> Plants[(Organic matter)]
    Plants --> Biofuel[(Biofuel)] --> Combustion --> Electricity
    Plants --> Decay --> Fossil[("Fossil fuel <br/>(oil, coal, gas)")] --> Combustion
    click Photosynthesis "https://en.wikipedia.org/wiki/Photosynthesis"
    click Decay "https://en.wikipedia.org/wiki/Fossil_fuel#Origin"
    click Fossil "https://en.wikipedia.org/wiki/Fossil_fuel"
    click Biofuel "https://en.wikipedia.org/wiki/Biofuel"
    click Combustion "https://en.wikipedia.org/wiki/Combustion"
    click Plants "https://en.wikipedia.org/wiki/Organic_matter"
    
    iron --> |K-40| decayheat
    Uranium --> decayheat["Radioactive decay heat"] 
    decayheat --> geo([Geothermal])
    click decayheat "https://en.wikipedia.org/wiki/Earth%27s_internal_heat_budget#Radiogenic_heat"
    geo --> Electricity
    click geo "https://en.wikipedia.org/wiki/Geothermal_energy"
    Uranium[("Uranium &<br>Thorium")] --> fission(["Nuclear fission"])  
""
    Electricity -->quality[("Improved quality of life")]
    click Electricity "https://en.wikipedia.org/wiki/Energy"
    click quality "https://www.researchgate.net/figure/HDI-vs-electricity-consumption-2-40-46_fig4_315794998"
    Combustion --> airp[(Air pollution)]
    click airp "http://www9.who.int/airpollution/en/"
    Combustion --> co2[("CO₂ emissions")]

    co2 --> warming[(Climate change)]
    airp --> lung[(Lung diseases)]
    click co2 "https://en.wikipedia.org/wiki/Greenhouse_gas#Anthropogenic_greenhouse_gases"
    click lung "https://en.wikipedia.org/wiki/Respiratory_disease"
    
    click warming "https://climate.nasa.gov/evidence/"
</div>

You can download this as a jpg [here](/img/energy-flow.jpg).

<script>
var config = {
    startOnLoad:true,
    er:{
      layoutDirection:'TB',
      minEntityWidth:100,
      minEntityHeight:75,
      entityPadding:15,
      stroke:'gray',
      fill:'honeydew',
      fontSize:12,
      useMaxWidth:true
    },
    flowchart:{
        htmlLabels:true,
        curve:'basis',
    },
    securityLevel:'loose'
};

mermaid.initialize(config);
</script>

</div>
</div>


