---
layout: default
title: Evaluating a Nuclear Reactor Company
description: >
  Some things to look for when evaluating a nuclear reactor program.
image: /img/dc_cook.jpg
author: nick
byline: true
---

<div class="row">
<div class="col-md-8" markdown="1">

It's an exciting time in the nuclear industry. Public and political support are
higher than they've been for years. Private sector investment is soaring, and
startup companies are appearing at record pace. With so much activity comes a need
for better tools to help us all understand the status and differences between
projects.

This page contains some rubrics for assessing the maturity and status
of nuclear projects. It may be useful for:

- Government and/or private investors performing due diligence on nuclear reactor vendors
- Nuclear startup companies plotting a roadmap for their own maturity
- Nuclear professionals choosing which nuclear company to join
- Power customers evaluating reactor vendors

You can design a series of questions that will place any given organization in
a specific box for each row and then rank organizations by their total score.

<!--If you
would like expert assistance evaluating a reactor project or company, feel free to
[hire us]({% link consulting.md %}).
-->

</div>
</div>

<div class="row">
<div markdown="1" class="col col-12">

<table class="table table-bordered">
<thead class="sticky-top bg-light">
  <tr>
    <th scope="col"></th>
    <th scope="col">Poor</th>
    <th scope="col">Marginal </th>
    <th scope="col">Good </th>
    <th scope="col">Excellent</th>
  </tr>
</thead>
<tbody>

<tr>
<th scope="row" markdown="1">
Hands-on experience with core environment 
</th>
<td markdown="1">
* None
</td>
<td markdown="1">
* Lab-scale component tests
* Full-scale non-nuclear flow loops
* Full-scale non-nuclear component testing in ambient conditions
</td>
<td markdown="1">
* Full-scale non-nuclear component testing in core environment (i.e. control rod tests, fuel handling)
* Operational experience with other types of reactors
</td>
<td markdown="1">
* Nuclear component testing ongoing
* Operational experience with reactors of the relevant type
</td>
</tr>

<tr>
<th scope="row">Experience with radiation</th>
<td markdown="1">
* None
* Some check sources
</td>
<td markdown="1">
* Handles enough low-level radioactive material (like natural uranium) to require a permit
</td>
<td markdown="1">
* Operates multiple glove-box environments with >= 1000 Curies of activity 
</td>
<td markdown="1">
* Operates hot cell or reactor environments with >= 100,000s Curies of activity 
</td>
</tr>

<tr>
<th scope="row">Core modeling</th>
<td markdown="1">
* Just MCNP
</td>
<td markdown="1">
* Full-core neutronics with burnup and fuel management
* 1-D thermal/hydraulics
* Global reactivity coefficients at a few power/flows
* Point kinetics with T/H coupling
* Basic shielding
* Estimates of gamma heating and structure cooling
* Estimates of thermal stresses during operation and basic AOOs
* Estimates of major structure dose
* Estimates of coolant activation
* Estimates of key chemistry concerns
* Spreadsheet fuel cost model
* Estimated hot-channel factors
* Basic optimization algorithms
* Analysis mostly focused on normal operation
* Key methods benchmarked against experiments and/or simple methods
</td>
<td markdown="1">
* Finite-element core structural modeling
* Coupled neutron/gamma full-core neutronics, including core support structure heating
* Deep shielding with variance reduction
* Fuel cycle LCOE cost model based on fuel requirements
* Quasi-static fuel performance modeling
* Source term calculation chain, including for long-term waste
* Spatially-distributed reactivity coefficients at any power/flow
* Coupled transient analysis of most AOOs and DBAs
* Detailed assessment of thermal stresses in most AOOs and DBAs
* CFD and/or experimentally-validated hot-channel factors
* Serious multi-objective optimization
* Still use low-fidelity hand calc methods as checking method
* High degree of analysis automation for common tasks
* Analysis mostly focused on constraining accidents
* Key methods formally validated
</td>
<td markdown="1">
* Sensitivity and uncertainty quantification
* Transient fuel performance modeling
* State-of-the-art multi-objective optimization
* Coupled transient analysis of all AOOs, DBAs, and some BDBAs
* Severe accident analysis models, including atmospheric radionuclide dispersion
* All methods formally validated
</td>
</tr>

<tr>
<th scope="row">Plant modeling</th>
<td>Just hand-calcs</td>
<td markdown="1">
* Plant transient model (e.g. RELAP)
* Hand calcs for seismic
</td>
<td markdown="1">
* Transient model embedded in engineering simulator
* Baseline plant PRA
* 3-D FEA seismic building models
* 3-D BIM models for buildings and general arrangement
</td>
<td markdown="1">
* Transient model embedded in training simulator
* Complete plant PRA
* BIM models modeling spacing needs and sequencing for construction 
* BIM models modeling laydown and spacing needs for 30 most common maintenance operations
</td>
</tr>

<tr>
<th scope="row">Fleet modeling</th>
<td>None</td>
<td markdown="1">
* Spreadsheets
</td>
<td markdown="1">
* Fleet mass-flow simulations showing expected market dynamics
</td>
<td>Cell 4</td>
</tr>

<tr>
<th scope="row">Financials</th>
<td markdown="1">
* Just getting started
* Small friends and family raise
* IPO'd before doing significant regulatory pre-application work
</td>
<td markdown="1">
* VC backed with solid series A raise
</td>
<td markdown="1">
* VC backed with solid series B raise and good runway
* Backed by government with several-year mission to deploy nuclear energy
</td>
<td markdown="1">
* Backed by government with multi-decade mission to deploy nuclear energy
* Backed by wealthy group or individual with multi-decade mission to deploy nuclear energy
</td>
</tr>

<tr>
<th scope="row">Design Control</th>
<td markdown="1">
* Deliverables have revision in filename
* Minimal procedural control
</td>
<td markdown="1">
* Work done in accordance with basic set of procedures
* Deliverable documents revision controlled
* Documents and data & status reflected in master index
* Level of review and document maturity rigorously defined and tracked
* Qualifications of staff written down
* Ability to plot changes in key parameters (e.g. cladding diameter) vs. time and summarize basis of each change
</td>
<td markdown="1">
* Ability to create and review change packages as units
* Data-level connections between design input and output established
* Project-wide cross-referencing system in place
* Automatic flagging of change impact based on connections
* Qualifications of staff clearly aligned with roles on deliverables
</td>
<td markdown="1">
* Procedure clauses clearly tied to regulatory or business needs
* Impacts of proposed changes automatically analyzed and flagged if out-of-bounds
</td>
</tr>

<tr>
<th scope="row">Culture and Hustle</th>
<td markdown="1">
* Slow
* Dysfunctional
* Frustrating
* Lots of turnover
* Many signatures needed
* Quality inappropriately overused as an excuse to slow down
* Many standing meetings with unclear outcomes/purpose
</td>
<td markdown="1">
* Everyone rowing in the same direction
* Leadership helps identify roadblocks and clears them
</td>
<td markdown="1">
* Good spirit of mentorship
* Lots of people coming in from other companies
* Open communication from all levels to decision makers
</td>
<td markdown="1">
* Fast decisions
* Glowing
* Inspiring
* Rickover in charge, but he's nice now
</td>
</tr>

<tr>
<th scope="row">Secret Sauce</th>
<td markdown="1">
* Unclear differentiators
* No clear story about why it will succeed
* Story relies on several unlikely things turning out positively 
</td>
<td markdown="1">
* Comprehensible story off success, with seemingly low practicality
</td>
<td markdown="1">
* Perfectly practical and likely story
</td>
<td markdown="1">
* Compelling story 
* Realistically practical innovations
</td>
</tr>

<tr>
<th scope="row">Design Deliverables Produced</th>
<td markdown="1">
* Basic renders and characteristics
* Systems list
* Equipment list
</td>
<td markdown="1">
* Commitments to Codes and Standards
* System Descriptions
* Process flow diagrams
* Piping and instrumentation diagrams
</td>
<td markdown="1">
</td>
<td markdown="1">
</td>
</tr>

<tr>
<th scope="row">Project Management</th>
<td markdown="1">
* Notional schedule written down
* Cost estimate is largely a target based on market research
* Cost estimate assumes >90% capacity factor right away
* Risk management strategy in place
</td>
<td markdown="1">
* Class 5 cost estimate produced
* Notional understanding of critical path
</td>
<td markdown="1">
* Good understanding of critical path
* Class 3-4 cost estimate produced
</td>
<td markdown="1">
* Class 1-2 cost estimate produced
* Cost estimate directly pulling quantities from plant model
* 4D construction schedule sequenced, integrated with BIM
* Detailed work package capability up and running
</td>
</tr>

<tr>
<th scope="row">Supply Chain</th>
<td markdown="1">
* Suppliers not yet identified for major equipment
</td>
<td markdown="1">
* Notional suppliers listed for major equipment
* Discussions with suppliers ongoing for major components
* Working directly with suppliers to produce key components/equipment for testing
* Detailed specifications in progress
</td>
<td markdown="1">
* Prototypes of key components/equipment has been supplied and are under testing
* Detailed specifications fully defined for major equipment
* Suppliers have provided feedback on specifications for key equipment considering manufacturing
</td>
<td markdown="1">
* Suppliers have provided feedback on specifications for all equipment considering manufacturing
* Detailed specifications fully defined for all equipment
* Full-scale versions of key components/equipment has been supplied and is under testing/acceptance
</td>
</tr>

<tr>
<th scope="row">Regulatory</th>
<td markdown="1">
* Pre-application engagement not yet significantly started
* Only QAPD submitted so far
* Specific site not known
</td>
<td markdown="1">
* Pre-application engagement in full swing
* Discussions with local and regional authorities
* If US exporting, 123 agreement in place or process started
</td>
<td markdown="1">
* Construction and/or COL application submitted
* Applications for local and regional permits submitted
* Discussions with IAEA ongoing
* If US exporting, 123 agreement fully executed
</td>
<td markdown="1">
* Design certified
* Construction permit granted
* Operations permit in review
* Local and regional permits granted
</td>
</tr>

<tr>
<th scope="row">IT and Security</th>
<td markdown="1">
* Minimal or no IT infrastructure or policy
* No separation of Safeguards or Export Controlled information
* Work done on unencrypted laptops
* No off-site backups
* Unencrypted emailing proprietary nuclear design info outside of org
</td>
<td markdown="1">
* Regular encrypted backups performed
* VPN or other secure access to systems/documents/code
* Software licensing compliance considered
* Encrypted proprietary data sharing outside of org established 
</td>
<td markdown="1">
* On-prem systems, govcloud, and/or confidential compute cloud established
* 2FA required for remote access
* Backup restoration practiced within last 1 year
* Well-defined software licensing compliance (e.g. RSICC on cloud)
* Partners/suppliers send info via portal, incorporated by staff
* Staff has privileges in exploratory systems to rapidly prototype new tech and ideas
</td>
<td markdown="1">
* Partners/suppliers access portions of design control system directly, no need for intermediary processing
* Configuration-as-code established across the organization, especially for analysis systems
</td>
</tr>

</tbody>
</table>

# Scratch space.. ignore

## Experimental Capabilities

Besides ensuring that your design solutions will work as expected in the real
world, doing experimental and lab work is key for ensuring you fully understand
the nuances and challenges of your reactor environment. (See [this May 2025
letter](https://www.ans.org/news/2025-05-08/article-6961/hightemperature-plumbing-and-advanced-reactors/)
for more explanation from the advanced reactor point of view.)

## Analysis Capabilities

Analysis capabilities are the mathematical/computational manifestation of a
team's understanding of their reactor. Such tools can run a reactor idea though
thousands of design iterations, perturbations, and simulated accident scenarios
for relatively little money, and with no risk to health or the environment. You
can tell a lot about a reactor's maturity by understanding the tools and methods
the design team use to probe and optimize the design.

## Process and QA

Doing the right work is one thing, but doing the work right is another!

## Supply Chain

To build a nuclear plant, you need to make sure you can get all the parts you need.

## Legal and Regulatory Readiness

Having all the treaties, licenses, and permits lined up is obviously a big part of
any nuclear build.

## Project Management

## Operations and Maintenance

- Operators trained and licensed on your plant (maybe trained by a training simulator based on the design)

## Typical design lifecycle stages

### Idea phase

- Do hand-calcs
- Run simple MCNP calcs and have a retired nobel prize winner review them (for clout)
- Make PowerPoints
- Talk big online

### Pre-conceptual design

During pre-conceptual design, a reactor idea is subjected to numerous trade studies to establish
appropriate design solutions to the project objectives. It involves:

- Building multidisciplinary analysis capabilities capable of evaluating design solutions
  in terms of performance and cost
- Using the tools to figure out the optimal reactor design parameters: power, fuel type, reactor configuration,
  dimensions, notional interfaces between all required systems
  - This involves multiobjective optimization, as performance and cost parameters will be conflicting
- Performing tests on low-readiness enabling technologies (non-nuclear, or with a nuclear reactor experiment)
  - These give information needed to properly optimize the design of the reactor product
- Establishing hands-on familiarity with the prototypic (often non-nuclear) versions of the equipment,
  materials, fluids, systems called for by the design

Note that if you do decide to perform a reactor experiment, you will likely need to kick off a
smaller sub-project that goes through all these phases and then return here for the reactor
product after you obtain the necessary information.

### Conceptual design

Some expected deliverables from conceptual design are shown in attachment 2 of
[Conceptual and Preliminary Design Implementation Guidance for National Nuclear
Security Administration (NNSA) Capital Line Item
Projects](https://engstandards.lanl.gov/esm/general/Raines-memo-2018-5-1.df)

### Preliminary design

Some expected deliverables from preliminary design are shown in attachment 3 of
[Conceptual and Preliminary Design Implementation Guidance for National Nuclear
Security Administration (NNSA) Capital Line Item
Projects](https://engstandards.lanl.gov/esm/general/Raines-memo-2018-5-1.df)

### Detailed design

### Construction

### Production design

As a reactor product is built and operated, various issues and challenges will inevitably be
encountered. The design will be adjusted slightly by the owner as equipment is swapped out
or adjusted during maintenance and operation. This evolving design during operation may
be called production design. Depending on the severity of the challenges, an updated
design may be called for for future units. This may required updating licensing documents
and undergoing another round of design certification.

## Design Deliverables

An exciting-sounding reactor concept can inspire and motivate a team and investors.
It's useful to chart a path through the design activities and deliverables.

Before you can build and operate a nuclear power plant, you need to design it.
You will need to have:

- An operational and audited nuclear quality assurance program

- Design basis documents proving that the design solutions you've specified will
  perform as expected in all anticipated operational occurrences and design basis
  accidents. Also include best-estimate confirmation that they perform reasonably
  even in beyond design basis accidents

  - This requires a detailed list of initiating events and analysis of the event trees
    that happen based on them
  - Large seismic events are often challenging to survive and analyze
  - If you're using a nuclear fuel in conditions that don't have as much experimental basis,
    you need to perform irradiation testing and transient experiments, e.g. in TREAT
  - If you're using specialized equipment in uncommon conditions, you need to validate its
    performance in DBA conditions experimentally and fill in the gaps analytically
  - It's a rich tradition to not include enough radiation shielding, leading to rework.
    Assume 7-9 ft. of dense concrete + multiple layers of 4"-thick lead/tungsten or equivalent for starters.

- Technical specifications describing the allowable operating parameters for all equipment

- List of equipment needed with detailed specifications that satisfy the design
  basis, along with where you will buy it from/who will make
  it/how much it will cost

- Process flow diagrams

- Piping and Instrument diagrams

- Electrical one-line diagrams

- Location of concrete embeds

- Manufacturing drawings and detailed specifications for all custom parts in the reactor informed by vendors
  in the supply chain (or your internal machinists) who have confirmed that the
  parts can be made economically and at the required scale

  - Includes fuel. Ensure you have a pathway to get nuclear fuel enriched and fabricated
    to specification

- A site and appropriate financing to build on it, and a supportive surrounding community (or no population)

- Site preparation documents: what roads, train-line, transmission lines, water
  sources, effluent pathways will you need? Where exactly will they be, how deep do you need
  to dig down, what capacity do the roads need to have? How will you get equipment to the site?

- Licenses and permits from all active regulatory bodies in the locality of the site, including
  international (IAEA), national (NRC, EPA), state, local, and industry (e.g. INPO).

- Construction procedures describing how to build everything, and in what order. What temporary
  construction structures and equipment need to be installed/moved/removed, and when?

- Operating procedures describing how to operate the plant

- Operators trained and licensed on your plant (maybe trained by a training simulator based on the design)

Given all that, you are ready to build!

The pathway taken to get these varies, but it's common to break the work needed down into several
design phases. Everyone has different definitions of the design phases, and there's
no precise definition. But some institutions, like the US DOE, have promulgated guidance that
does a pretty good job of listing out the activities and deliverables expected, at least in
the Conceptual and Preliminary design phases.

</div>
</div>
