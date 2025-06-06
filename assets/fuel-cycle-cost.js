/* Some functions that do enrichment calcs
 * Feed factor = F/P
 * SWU factor = SWU/MP
 */

function computeFeedFromProduct(feed_factor, product_mass, conv_losses) {
  // Compute feed and SWU given desired product and enrichment
  // compute MF/MP = feed factor
  let conv_factor = (100.0 - conv_losses) / 100.0;
  let uf6_mass = feed_factor * product_mass;
  let feed_mass = uf6_mass / conv_factor;

  return [uf6_mass, feed_mass];
}
function computeProductFromFeed(feed_factor, feed_mass, conv_losses) {
  // compute product mass from given feed
  let conv_factor = (100.0 - conv_losses) / 100.0;
  uf6_mass = feed_mass * conv_factor;
  product_mass = uf6_mass / feed_factor;

  return [uf6_mass, product_mass];
}

function computeSWU(swu_factor, feed_mass, product_mass) {
  let swu = swu_factor * product_mass;
  let tails_mass = feed_mass - product_mass;

  return [swu, tails_mass];
}

function computeFuelCost(unitCosts, swu, feed_mass, uf6_mass, product_mass) {
  // we want to know $SWU/kWh, $Feed/kWh, $Fab/kWh and total cost for plotting
  // so we need SWU = SWUfactor*product * swu cost
  // product = how much fuel is needed to make a kWh
  // kg = 1 kWe * 1 hour * 1/eff [MWt/MWe] * 1/24 [day/hour] * 1/burnup [kg/(MWt*day)] * 1000 kW/MW)

  // compute raw costs (for initial core)
  let costs = {};
  costs["swu"] = swu * unitCosts["swu"];
  // convert U3O8 to U and also lbs to kg
  // (it's typical for U3O8 prices to be in $/lb U3O8)
  // note also that people often assume 0.5% loss during U3O8 conversion to UF6.
  costs["feed"] = feed_mass * ((unitCosts["feed"] * 2.2046) / 0.847981);
  costs["conv"] = uf6_mass * unitCosts["conv"];
  costs["fab"] = product_mass * unitCosts["fab"];
  costs["sum"] = Object.values(costs).reduce((total, value) => total + value, 0);

  return costs
}

function computeReloadCost(
  unitCosts,
  swu_factor,
  feed_factor,
  conv_losses,
  burnup,
  efficiency,
) {
  // compute continuous feed costs (for reloads)
  let conv_factor = (100.0 - conv_losses) / 100.0;
  let prod_kg_per_kwe = 100.0 / (efficiency * 24.0 * burnup * 1000.0);
  let swu_per_kwe = prod_kg_per_kwe * swu_factor;
  let uf6_per_kwe = prod_kg_per_kwe * feed_factor;
  let feed_per_kwe = uf6_per_kwe / conv_factor;

  // convert to cents
  let costs = {};
  costs["swu"] = swu_per_kwe * unitCosts["swu"] * 100;
  costs["feed"] =
    ((feed_per_kwe * unitCosts["feed"] * 2.2046) / 0.847981) * 100;
  costs["fab"] = prod_kg_per_kwe * unitCosts["fab"] * 100;
  costs["conv"] = uf6_per_kwe * unitCosts["conv"] * 100;
  costs["sum"] = Object.values(costs).reduce((total, value) => total + value, 0);

  let reload_waste = prod_kg_per_kwe * 1000000;
  let reload_feed_mass = feed_per_kwe * 1000000;

  return [costs, reload_waste, reload_feed_mass];
}

function vx(x) {
  // value function: gotta convert percentages to fraction
  let xn = Number(x / 100.0);
  return (1.0 - 2 * xn) * Math.log((1.0 - xn) / xn);
}

function getFeedFactor(enrich, tails_assay, feed_assay) {
  // feed factor = F/P
  return (enrich - tails_assay) / (feed_assay - tails_assay);
}

function getSwuFactor(enrich, tails_assay, feed_assay, feed_factor) {
  // swufactor= SWU/MP (mass of product)
  let vxt = vx(tails_assay);
  return vx(enrich) - vxt - feed_factor * (vx(feed_assay) - vxt);
}
