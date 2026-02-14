import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import physics from "/assets/reactor-physics.json" with { type: "json" };

// hard-coded for now, with UO2 fab (maybe load onto physics json!)
let unitCosts = {
  feed: 65.0,
  conv: 60.0,
  fab: 300.0,
  swu: 170.0,
};

// Three.js setup
const canvas = document.getElementById("canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.width / canvas.height,
  0.1,
  10000,
);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
camera.position.set(0, 100, 400);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 0.8);
light.position.set(1, 1, 1);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040, 20));

let enrich = 3;

// Core
let height = 75;
let radius = 100;

// shield
let shieldThickness = 6 * 12 * 2.54;

const coreMaterial = new THREE.MeshPhongMaterial({ color: 0x4682b4 });
let coreGeometry = null;
let core = null;

// Person (5'9" = 175.26 cm)
const personHeight = 175.26;
const bodyHeight = personHeight * 0.8;
const headRadius = personHeight * 0.1;
const bodyRadius = headRadius * 0.5;
let bodyGeometry = new THREE.CylinderGeometry(
  bodyRadius,
  bodyRadius,
  bodyHeight,
  32,
);
const headGeometry = new THREE.SphereGeometry(headRadius, 32, 32);

const personMaterial = new THREE.MeshPhongMaterial({ color: 0xff6347 });
let body = null;
let head = null;

// init shielding shapes
const shieldMaterial = new THREE.MeshPhysicalMaterial({
  transparent: true,
  opacity: 0.4,
  roughness: 0.1,
  metalness: 0.0,
  transmission: 0.9,
  depthWrite: false,
  thickness: 1.0,
});
let radialShieldGeometry = null;
let topShieldGeometry = null;
let bottomShieldGeometry = null;

let radialShield = null;
let topShield = null;
let bottomShield = null;

let bucklingGeometric = (2.405 / radius) ** 2 + (3.14159 / height) ** 2;
let migrationArea; // update!
let peakingFactor = 1.57 * 1.55; // cosine * bessel
let time = [0, 1.5];
let powerMult = 1.0; // adjust to downrate
let reactorType = "LWR";

let burnupAvg;
let burnupPeak;
let swing;

const average = (array) => array.reduce((a, b) => a + b) / array.length;

// UI elements
const reactorTypeInp = document.getElementById("reactorType");
const heightSlider = document.getElementById("heightSlider");
const heightVal = document.getElementById("heightVal");
const radiusSlider = document.getElementById("radiusSlider");
const radiusVal = document.getElementById("radiusVal");
const enrichSlider = document.getElementById("enrichSlider");
const enrichVal = document.getElementById("enrichVal");
const powerSlider = document.getElementById("powerSlider");
const powerVal = document.getElementById("powerVal");
const cycleSlider = document.getElementById("cycleSlider");
const cycleVal = document.getElementById("cycleVal");
const cycleAuto = document.getElementById("cycleAuto");
const outLeakage = document.getElementById("outLeakage");
const outMigration = document.getElementById("outMigration");
const outPower = document.getElementById("outPower");
const outFuel = document.getElementById("outFuel");
const outFissile = document.getElementById("outFissile");
const outCost = document.getElementById("outCost");
const outLCOE = document.getElementById("outLCOE");
const outTime = document.getElementById("outTime");
const outBu = document.getElementById("outBu");
const outMining = document.getElementById("outMining");
const outShield = document.getElementById("outShield");
const outSwing = document.getElementById("outSwing");
const warnSubcrit = document.getElementById("warning-subcrit");
const label = document.getElementById("warning-label");
const warnHighBu = document.getElementById("warning-high-bu");
const warnImpBu = document.getElementById("warning-imp-bu");
const save = document.getElementById("save");

let p_non_leakage;
let p_leakage;
let powerMWt;
let volume;
let crossYear;
let thermalEfficiency = 0.33;
let capacityFactor = 0.92;
const hoursPerYear = 365.25 * 24;
let keffs = [];

// Initial scatter plot
export function updatePlot(radius, height, enrich) {
  // compute geometric buckling for bare finite cylinder
  let interpData = interpolatePhysicsData(
    physics[reactorType]["cycle"],
    enrich,
  );
  migrationArea = average(interpData["migration_areas"]);
  let extrap = 2.3; // extrapolation distance.
  extrap = 0; // zero for small cores where most leakage is fast
  bucklingGeometric =
    (2.405 / (radius + extrap)) ** 2 + (3.14159 / (height + 2 * extrap)) ** 2;
  p_non_leakage = 1 / (1 + bucklingGeometric * migrationArea);
  p_leakage = 1 - p_non_leakage;
  let timeYr = physics[reactorType]["years"].map((v) => v / powerMult);
  keffs = interpData["kinfs"].map((v) => v * p_non_leakage);
  if (cycleSlider.disabled) {
    crossYear = findCriticalCrossoverTime(timeYr, keffs);
  } else {
    // use user input for cycle length
    crossYear = parseFloat(cycleSlider.value);
  }
  if (
    (crossYear && crossYear > timeYr[timeYr.length - 1]) ||
    !cycleSlider.disabled
  ) {
    timeYr.push(crossYear);
    keffs.push(1.0);
  }
  cycleVal.textContent = `${crossYear.toFixed(2)} yr`;
  cycleSlider.value = crossYear;
  const trace = {
    x: timeYr,
    y: keffs,
    mode: "lines+markers",
    type: "scatter",
    marker: { size: 8, color: "#ff6347" },
  };
  const plotlyConfig = {
    responsive: true,
    displayModeBar: true,
  };
  const layout = {
    title: "Reactivity vs. Time",
    xaxis: { title: { text: "Time (yr)" }, autorange: true },
    //yaxis: { title: 'k', range: [0, Math.max(...keffs) * 1.2] },
    yaxis: { title: { text: "k-eff" }, autorange: true },
    margin: { t: 100, b: 40, l: 40, r: 20 },
    autosize: true,
    showlegend: false,
    // add criticality line at 1.0
    shapes: [
      {
        type: "line",
        xref: "paper",
        x0: 0,
        y0: 1.0,
        x1: 1,
        y1: 1.0,
        line: {
          color: "rgb(0, 0, 255)",
          width: 1,
        },
      },
    ],
  };
  Plotly.newPlot("plotly-container", [trace], layout, plotlyConfig);
  return keffs[0]; // for benchmarking
}

// Update cylinder and plot
function updateCylinderAndPlot() {
  if (core) {
    scene.remove(core);
    scene.remove(body);
    scene.remove(head);
  }
  coreGeometry = new THREE.CylinderGeometry(radius, radius, height, 32);
  core = new THREE.Mesh(coreGeometry, coreMaterial);
  core.position.x = -5;
  scene.add(core);

  body = new THREE.Mesh(bodyGeometry, personMaterial);
  body.position.set(
    radius + shieldThickness + 5,
    -height / 2 + bodyHeight / 2,
    0,
  );
  scene.add(body);
  head = new THREE.Mesh(headGeometry, personMaterial);
  head.position.set(
    radius + shieldThickness + 5,
    -height / 2 + bodyHeight + headRadius,
    0,
  );
  scene.add(head);

  volume = Math.PI * radius ** 2 * height;

  renderShielding(radius, height, scene);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  // update output values
  powerMWt = ((volume * physics[reactorType]["pdens"]) / 1e6) * powerMult;
  let fuelMT = (volume * physics[reactorType]["hmDensity"]) / 1e6;
  let fissileMT = (fuelMT * enrich) / 100.0;
  let shieldVolume =
    Math.PI * ((radius + shieldThickness) ** 2 - radius ** 2) * height +
    2 * Math.PI * (radius + shieldThickness) ** 2 * shieldThickness;
  let shieldMassMT = (shieldVolume * 4.0) / 1e6; // high density concrete @ 4 g/cc

  // convert to kg for economics calc
  let feed_factor = getFeedFactor(enrich, 0.25, 0.711);
  let swu_factor = getSwuFactor(enrich, 0.25, 0.711, feed_factor);
  let [uf6, feed] = computeFeedFromProduct(feed_factor, fuelMT * 1000, 0.5);
  let [swu, tails] = computeSWU(swu_factor, feed, fuelMT * 1000);
  let costs = computeFuelCost(unitCosts, swu, feed, uf6, fuelMT * 1000);

  updatePlot(radius, height, enrich);

  // update these after the plot b/c it's from interpolated data
  let migrationLength = Math.sqrt(migrationArea);
  let leakage = 100 * p_leakage;

  // compute a lifetime that's a multiple of cycle length so you don't get noise
  // from overbuying fuel that you don't completely use up
  // Find the one that's over 60 years but cut it off at a year
  // so we get a full year of generation)
  let lifetimeInYears = Math.floor(Math.ceil(60 / crossYear) * crossYear);

  let electricityMWhPerYear =
    powerMWt * thermalEfficiency * capacityFactor * hoursPerYear;

  let lcoe = computeFuelLCOE(
    costs["sum"],
    costs["sum"],
    crossYear,
    electricityMWhPerYear,
    0.08,
    lifetimeInYears,
  );

  swing =
    ((keffs[0] - keffs[keffs.length - 1]) / keffs[keffs.length - 1]) * 100;
  burnupAvg = (((crossYear * powerMWt) / fuelMT) * 365.25) / 1000;
  burnupPeak = burnupAvg * peakingFactor;

  // update output UI
  outLeakage.textContent = `${leakage.toFixed(2)}%`;
  outMigration.textContent = `${migrationLength.toFixed(2)} cm`;
  outPower.textContent = `${powerMWt.toFixed(2)} MWt | ${(powerMWt * thermalEfficiency).toFixed(2)} MWe`;
  outFuel.textContent = `${fuelMT.toFixed(2)} MTHM | ${((1000 * fuelMT) / powerMWt / thermalEfficiency).toFixed(2)} kgHM/MWe`;
  outFissile.textContent = `${fissileMT.toFixed(2)} MT | ${((1000 * fissileMT) / powerMWt / thermalEfficiency).toFixed(2)} kg/MWe`;
  outCost.textContent = `$${(costs["sum"] / 1e6).toFixed(2)} million`;
  outLCOE.textContent = `${lcoe.toFixed(2)} $/MWh`;
  outMining.textContent = `${((feed * 1000) / (electricityMWhPerYear * crossYear)).toFixed(2)} gU/MWh`;
  outTime.textContent = `${crossYear.toFixed(3)} years`;
  outBu.textContent = `${burnupAvg.toFixed(2)} (avg) | ${burnupPeak.toFixed(2)} (peak) MWd/kg`;
  outSwing.textContent = `${swing.toFixed(2)} %dk/k`;
  outShield.textContent = `${shieldMassMT.toFixed(2)} MT (high density concrete)`;
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = width; //canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function interpolatePhysicsData(data, enrichValue) {
  // Ensure data is sorted by enrich for accurate interpolation
  data.sort((a, b) => a.enrich - b.enrich);

  // Find the two data points that bracket the enrichValue
  let lowerBound = null;
  let upperBound = null;

  for (let i = 0; i < data.length - 1; i++) {
    if (enrichValue >= data[i].enrich && enrichValue <= data[i + 1].enrich) {
      lowerBound = data[i];
      upperBound = data[i + 1];
      break;
    }
  }
  if (!lowerBound) {
    return data[0];
  }
  if (!upperBound) {
    return data[data.length - 1];
  }
  const interpolateArray = (arr1, arr2, factor) => {
    const interpolatedArr = [];
    for (let i = 0; i < arr1.length; i++) {
      interpolatedArr.push(arr1[i] + (arr2[i] - arr1[i]) * factor);
    }
    return interpolatedArr;
  };

  const factor =
    (enrichValue - lowerBound.enrich) / (upperBound.enrich - lowerBound.enrich);

  // Interpolate each array
  const interpolatedKinfs = interpolateArray(
    lowerBound.kinfs,
    upperBound.kinfs,
    factor,
  );
  const interpolatedBucklings = interpolateArray(
    lowerBound.bucklings,
    upperBound.bucklings,
    factor,
  );
  const interpolatedMigrationAreas = interpolateArray(
    lowerBound.migration_areas,
    upperBound.migration_areas,
    factor,
  );

  return {
    enrich: enrichValue,
    kinfs: interpolatedKinfs,
    bucklings: interpolatedBucklings,
    migration_areas: interpolatedMigrationAreas,
  };
}

function findCriticalCrossoverTime(times, keffs) {
  // given times and keffs, find the time when it would reach 1.0
  // interpolates within curve or does linear extrapolation of the last two points.
  let x1;
  let x2;
  let y1;
  let y2;
  for (let n = 2; n <= times.length; n++) {
    x1 = times[n - 2];
    x2 = times[n - 1];
    y1 = keffs[n - 2];
    y2 = keffs[n - 1];

    if (y1 < 1.0) {
      // never went critical
      return 0;
    }
    if (y1 > 1.0 && y2 < 1.0) {
      // goes subcritical this step, interpolate
      break;
    }
  }
  if (y1 === y2) {
    return y1 === 1.0 ? x1 : null;
  }
  const slope = (y2 - y1) / (x2 - x1);
  if (slope === 0) return null;
  // Find x for y = 1.0
  const xCross = x1 + (1.0 - y1) / slope;
  if (xCross > 0) return xCross;
  // slope may be negative, e.g. breeding SFR. just cut off at default
  return times[times.length - 1];
}

function renderShielding(radius, height, scene) {
  // add 8 ft. concrete shielding on all sides

  if (radialShield) {
    scene.remove(radialShield);
    radialShield.geometry.dispose();
    scene.remove(topShield);
    topShield.geometry.dispose();
    scene.remove(bottomShield);
    bottomShield.geometry.dispose();
  }

  const outerRadius = radius + shieldThickness;
  const axialShieldHeight = shieldThickness;
  radialShieldGeometry = new THREE.CylinderGeometry(
    outerRadius,
    outerRadius,
    height,
    32,
  );
  topShieldGeometry = new THREE.CylinderGeometry(
    outerRadius,
    outerRadius,
    axialShieldHeight,
    32,
  );
  bottomShieldGeometry = topShieldGeometry.clone();

  radialShield = new THREE.Mesh(radialShieldGeometry, shieldMaterial);
  scene.add(radialShield);
  topShield = new THREE.Mesh(topShieldGeometry, shieldMaterial);
  topShield.position.y = height / 2.0 + axialShieldHeight / 2.0;
  scene.add(topShield);
  bottomShield = new THREE.Mesh(bottomShieldGeometry, shieldMaterial);
  bottomShield.position.y = -height / 2.0 - axialShieldHeight / 2.0;
  scene.add(bottomShield);
}

// Event listeners
reactorTypeInp.addEventListener("change", () => {
  reactorType = reactorTypeInp.value;
  // update fab cost which is reactor specific
  unitCosts["fab"] = physics[reactorType]["fabCost"];
  thermalEfficiency = physics[reactorType]["thermalEfficiency"];
  updateCylinderAndPlot();
  updateWarningLabel();
});

// Slider event listeners
heightSlider.addEventListener("input", () => {
  height = parseFloat(heightSlider.value);
  // force stop at reasonable values where physics breaks down
  if (height < 50) {
    height = 50;
    heightSlider.value = height;
  }
  heightVal.textContent = `${height} cm`;
  updateCylinderAndPlot();
  updateWarningLabel();
});

radiusSlider.addEventListener("input", () => {
  radius = parseFloat(radiusSlider.value);
  // force stop at reasonable values where physics breaks down
  if (radius < 25) {
    radius = 25;
    radiusSlider.value = radius;
  }
  radiusVal.textContent = `${radius} cm`;
  updateCylinderAndPlot();
  updateWarningLabel();
});

enrichSlider.addEventListener("input", () => {
  enrich = parseFloat(enrichSlider.value);
  if (enrich < 0.711) {
    // hard limit at natural u
    enrich = 0.711;
    //enrichSlider.value=enrich;
  }
  enrichVal.textContent = `${enrich} %`;
  updateCylinderAndPlot();
  updateWarningLabel();
});
powerSlider.addEventListener("input", () => {
  powerMult = parseFloat(powerSlider.value) / 100;
  powerVal.textContent = `${powerSlider.value} %`;
  updateCylinderAndPlot();
  updateWarningLabel();
});

cycleSlider.addEventListener("input", () => {
  crossYear = parseFloat(cycleSlider.value);
  cycleVal.textContent = `${crossYear} yr`;
  updateCylinderAndPlot();
  updateWarningLabel();
});

cycleAuto.addEventListener("change", (event) => {
  if (event.target.checked) {
    cycleSlider.disabled = true;
  } else {
    cycleSlider.disabled = false;
  }
  updateCylinderAndPlot();
  updateWarningLabel();
});

save.addEventListener("click", (e) => {
  copySettingsToClipboard();
});

export function updateWarningLabel() {
  let heightWarning = (height - 50) / 50;
  let radiusWarning = (radius - 25) / 25;
  const redIntensity = 1 - Math.min(heightWarning, radiusWarning);
  // Compute RGB: red stays 255, green/blue decrease from 255 to 0
  const greenBlue = Math.round(255 * (1 - redIntensity));
  label.style.backgroundColor = `rgb(255, ${greenBlue}, ${greenBlue})`;

  if (keffs[0] < 1.0) {
    warnSubcrit.classList.add("visible");
    warnSubcrit.classList.remove("hidden");
  } else {
    warnSubcrit.classList.remove("visible");
    warnSubcrit.classList.add("hidden");
  }
  if (burnupAvg >= 200 && burnupAvg < 938) {
    warnHighBu.classList.add("visible");
    warnHighBu.classList.remove("hidden");
  } else {
    warnHighBu.classList.remove("visible");
    warnHighBu.classList.add("hidden");
  }

  if (burnupAvg >= 938) {
    warnImpBu.classList.add("visible");
    warnImpBu.classList.remove("hidden");
  } else {
    warnImpBu.classList.remove("visible");
    warnImpBu.classList.add("hidden");
  }
}

function copySettingsToClipboard() {
  let params = new URLSearchParams([
    ["height", height],
    ["radius", radius],
    ["enrich", enrich],
    ["rating", powerMult],
    ["reactor", reactorType],
    ["cycleAuto", cycleAuto.checked],
    ["cycle", crossYear],
  ]);

  let text = new URL(
    `${location.protocol + "//" + location.host + location.pathname}?${params}`,
  );
  navigator.clipboard.writeText(text);
  // Show the modal
  const modal = new bootstrap.Modal(
    document.getElementById("copySuccessModal"),
    {
      backdrop: false, // Optional: removes backdrop for a cleaner look
    },
  );
  modal.show();

  // Auto-hide after 1.5 seconds
  setTimeout(() => {
    modal.hide();
  }, 1500);
}

function setInputVals() {
  // These can all be passed in as query params
  const input = new URLSearchParams(window.location.search);
  let hasVals = input.get("reactor");
  if (!hasVals) {
    return;
  }
  reactorTypeInp.value = hasVals;
  reactorTypeInp.dispatchEvent(new Event("change"));
  heightSlider.value = input.get("height");
  heightSlider.dispatchEvent(new Event("input"));
  radiusSlider.value = input.get("radius");
  radiusSlider.dispatchEvent(new Event("input"));
  enrichSlider.value = input.get("enrich");
  enrichSlider.dispatchEvent(new Event("input"));
  powerSlider.value = parseFloat(input.get("rating")) * 100;
  powerSlider.dispatchEvent(new Event("input"));
  if (input.get("cycleAuto") == "false") {
    cycleAuto.checked = false;
    cycleSlider.disabled = false;
  }
  cycleSlider.value = input.get("cycle");
  cycleSlider.dispatchEvent(new Event("input"));
}

setInputVals();
// Initial plot
updatePlot(radius, height);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
updateCylinderAndPlot();
