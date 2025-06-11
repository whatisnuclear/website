import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import physics from "/assets/reactor-physics.json" with { type: "json" };

// hard-coded for now, with UO2 fab (maybe load onto physics json!)
const unitCosts = {
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
  1000,
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

// Cylinder
let height = 75;
let radius = 100;
let cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 32);
const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0x4682b4 });
let cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.x = -5;
scene.add(cylinder);

// Person (5'9" = 175.26 cm)
const personHeight = 175.26;
const bodyHeight = personHeight * 0.8;
const headRadius = personHeight * 0.1;
const bodyRadius = headRadius * 0.5;
const bodyGeometry = new THREE.CylinderGeometry(
  bodyRadius,
  bodyRadius,
  bodyHeight,
  32,
);
const personMaterial = new THREE.MeshPhongMaterial({ color: 0xff6347 });
let body = new THREE.Mesh(bodyGeometry, personMaterial);
body.position.set(radius + 5, -height / 2.0 + bodyHeight / 2, 0);
scene.add(body);
const headGeometry = new THREE.SphereGeometry(headRadius, 32, 32);
let head = new THREE.Mesh(headGeometry, personMaterial);
head.position.set(radius + 5, -height / 2.0 + bodyHeight + headRadius, 0);
scene.add(head);

let bucklingGeometric = (2.405 / radius) ** 2 + (3.14159 / height) ** 2;
let migrationArea = 20.0; // update!

let reactorType = "LWR";

const average = (array) => array.reduce((a, b) => a + b) / array.length;

// UI elements
const heightSlider = document.getElementById("heightSlider");
const radiusSlider = document.getElementById("radiusSlider");
const enrichSlider = document.getElementById("enrichSlider");
const dimensionsDiv = document.getElementById("dimensions");
const outLeakage = document.getElementById("outLeakage");
const outMigration = document.getElementById("outMigration");
const outPower = document.getElementById("outPower");
const outFuel = document.getElementById("outFuel");
const outFissile = document.getElementById("outFissile");
const outCost = document.getElementById("outCost");

// Plotly data
const xValues = [
  0.0, 0.006844626967830253, 0.08213552361396305, 0.1642710472279261,
  0.24640657084188913, 0.3285420944558522, 0.41067761806981523,
  0.49281314168377827, 0.5749486652977412, 0.6570841889117044,
  0.7392197125256673, 0.8213552361396305, 0.9034907597535935,
  0.9856262833675565, 1.0677618069815196, 1.1498973305954825,
  1.2320328542094456, 1.3141683778234088, 1.3963039014373717,
];

let p_non_leakage;
let p_leakage;
let power;
let volume;

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
  //migrationArea = 85;
  bucklingGeometric =
    (2.405 / (radius + extrap)) ** 2 + (3.14159 / (height + 2 * extrap)) ** 2;
  p_non_leakage = 1 / (1 + bucklingGeometric * migrationArea);
  p_leakage = 1 - p_non_leakage;
  const keffs = interpData["kinfs"].map((v) => v * p_non_leakage);
  const trace = {
    x: xValues,
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
    xaxis: { title: { text: "Time (yr)" }, range: [0, 1.5] },
    //yaxis: { title: 'k', range: [0, Math.max(...keffs) * 1.2] },
    yaxis: { title: { text: "k-eff" }, range: [0, 1.7] },
    margin: { t: 40, b: 40, l: 40, r: 20 },
    autosize: true,
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
  scene.remove(cylinder);
  scene.remove(body);
  scene.remove(head);
  cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 32);
  cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cylinder.position.x = -5;
  scene.add(cylinder);

  body = new THREE.Mesh(bodyGeometry, personMaterial);
  body.position.set(radius + 5, -height / 2 + bodyHeight / 2, 0);
  scene.add(body);
  head = new THREE.Mesh(headGeometry, personMaterial);
  head.position.set(radius + 5, -height / 2 + bodyHeight + headRadius, 0);
  scene.add(head);

  volume = Math.PI * radius ** 2 * height;

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = 1.0 //canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  // update output values
  let leakage = 100 * p_leakage;
  let migrationLength = Math.sqrt(migrationArea);
  let power = (volume * physics[reactorType]["pdens"]) / 1e6;
  let fuel_mt = (volume * physics[reactorType]["hmDensity"]) / 1e6;
  let fissile_mt =
    (volume * physics[reactorType]["hmDensity"] * enrich) / 100.0 / 1e6;

  // convert to kg for economics calc
  let feed_factor = getFeedFactor(enrich, 0.25, 0.711);
  let swu_factor = getSwuFactor(enrich, 0.25, 0.711, feed_factor);
  let [uf6, feed] = computeFeedFromProduct(feed_factor, fuel_mt * 1000, 0.5);
  let [swu, tails] = computeSWU(swu_factor, feed, fuel_mt * 1000);
  let costs = computeFuelCost(unitCosts, swu, feed, uf6, fuel_mt * 1000);

  // update output UI
  dimensionsDiv.textContent = `Height: ${height} cm, Radius: ${radius} cm, Enrich: ${enrich}%`;
  outLeakage.textContent = `${leakage.toFixed(2)}%`;
  outMigration.textContent = `${migrationLength.toFixed(2)} cm`;
  outPower.textContent = `${power.toFixed(2)} MWt`;
  outFuel.textContent = `${fuel_mt.toFixed(2)} MTHM`;
  outFissile.textContent = `${fissile_mt.toFixed(2)} MT`;
  outCost.textContent = `$${(costs["sum"] / 1e6).toFixed(2)} million`;
  updatePlot(radius, height, enrich);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = width //canvas.clientHeight;
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

// Slider event listeners
heightSlider.addEventListener("input", () => {
  height = parseFloat(heightSlider.value);
  // force stop at reasonable values where physics breaks down
  if (height < 50) {
    height = 50;
    heightSlider.value = height;
  }
  updateWarningLabel(height, 50);
  updateCylinderAndPlot();
});

radiusSlider.addEventListener("input", () => {
  radius = parseFloat(radiusSlider.value);
  // force stop at reasonable values where physics breaks down
  if (radius < 25) {
    radius = 25;
    radiusSlider.value = radius;
  }
  updateWarningLabel(radius, 25);
  updateCylinderAndPlot();
});

enrichSlider.addEventListener("input", () => {
  enrich = parseFloat(enrichSlider.value);
  if (enrich<0.711) {
    // hard limit at natural u
    enrich = 0.711;
    //enrichSlider.value=enrich;
  }
  updateCylinderAndPlot();
});

export function updateWarningLabel() {
  const label = document.getElementById("warning-label");
  let heightWarning = (height-50)/50;
  let radiusWarning = (radius-25)/25;
  const redIntensity = 1 - Math.min(heightWarning, radiusWarning);
  // Compute RGB: red stays 255, green/blue decrease from 255 to 0
  const greenBlue = Math.round(255 * (1 - redIntensity));
  label.style.backgroundColor = `rgb(255, ${greenBlue}, ${greenBlue})`;
}

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
