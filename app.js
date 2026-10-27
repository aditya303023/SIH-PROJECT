/* ==========================================================================
   HAZELYTICS - SIH 2026 OFFICIAL INTERACTIVE LOGIC (app.js)
   Team: DISASTER DECODED | Team ID: 198035 | Problem ID: SIH26191
   ========================================================================== */

// --- Dataset: Habitations and Disaster Zones for Wayanad Pilot ---
const DISTRICT_DATA = {
    wayanad: {
        name: "Wayanad District, Kerala",
        center: [11.5350, 76.1350],
        zoom: 13,
        kpi: { redCount: 4, popRisk: "1,840", safeCap: "3,420", houses: 388 },
        villages: [
            {
                id: "v-01",
                name: "Village A (Chooralmala Upper)",
                block: "Block X (Meppadi Sub-division)",
                zone: "red",
                rpi: 0.87,
                cci: 0.31,
                households: 142,
                population: 680,
                coords: [11.5244, 76.1382],
                safeSite: "Option A: Meppadi Plateau North",
                safeDist: "2.4 km",
                safeCap: 950,
                safeCci: 0.88,
                slope: "39.4°",
                rain72h: "312 mm",
                gsiDist: "65m",
                schools: 2,
                healthCenters: 1,
                priorityNote: "Severe landslip risk. Urgent relocation candidate."
            },
            {
                id: "v-02",
                name: "Village B (Mundakkai East Ridge)",
                block: "Block X (Meppadi)",
                zone: "red",
                rpi: 0.84,
                cci: 0.36,
                households: 118,
                population: 520,
                coords: [11.5380, 76.1480],
                safeSite: "Option A: Meppadi Plateau North",
                safeDist: "3.1 km",
                safeCap: 950,
                safeCci: 0.88,
                slope: "37.2°",
                rain72h: "295 mm",
                gsiDist: "90m",
                schools: 1,
                healthCenters: 1,
                priorityNote: "Debris torrent channel flank. High scour exposure."
            },
            {
                id: "v-03",
                name: "Village C (Punchirimattom Scarp)",
                block: "Block X (Vellarimala Foothills)",
                zone: "red",
                rpi: 0.82,
                cci: 0.28,
                households: 76,
                population: 390,
                coords: [11.5120, 76.1260],
                safeSite: "Option B: Vythiri Foothills",
                safeDist: "5.4 km",
                safeCap: 720,
                safeCci: 0.84,
                slope: "41.5°",
                rain72h: "330 mm",
                gsiDist: "40m",
                schools: 1,
                healthCenters: 0,
                priorityNote: "Steep colluvial slope with tension fissures."
            },
            {
                id: "v-04",
                name: "Village D (Attamala Terrace)",
                block: "Block Y (Vythiri Sub-division)",
                zone: "red",
                rpi: 0.79,
                cci: 0.39,
                households: 52,
                population: 250,
                coords: [11.5450, 76.1150],
                safeSite: "Option B: Vythiri Foothills",
                safeDist: "2.8 km",
                safeCap: 720,
                safeCci: 0.84,
                slope: "34.1°",
                rain72h: "260 mm",
                gsiDist: "120m",
                schools: 0,
                healthCenters: 1,
                priorityNote: "Road cutoff hazard; culvert subsidence."
            },
            {
                id: "v-05",
                name: "Village E (Noolpuzha Buffer)",
                block: "Block Z (Sulthan Bathery)",
                zone: "orange",
                rpi: 0.62,
                cci: 0.58,
                households: 180,
                population: 820,
                coords: [11.5600, 76.1600],
                safeSite: "Option C: Sulthan Bathery Plain",
                safeDist: "4.2 km",
                safeCap: 2100,
                safeCci: 0.92,
                slope: "18.3°",
                rain72h: "190 mm",
                gsiDist: "650m",
                schools: 3,
                healthCenters: 1,
                priorityNote: "Secondary flood plain watch. Moderate alert."
            },
            {
                id: "v-06",
                name: "Village F (Kottathara Valley)",
                block: "Block Y (Kalpetta North)",
                zone: "orange",
                rpi: 0.55,
                cci: 0.64,
                households: 210,
                population: 940,
                coords: [11.5750, 76.1200],
                safeSite: "Option C: Sulthan Bathery Plain",
                safeDist: "7.1 km",
                safeCap: 2100,
                safeCci: 0.92,
                slope: "12.0°",
                rain72h: "175 mm",
                gsiDist: "800m",
                schools: 2,
                healthCenters: 2,
                priorityNote: "Drainage backwater surcharge; reinforce revetment."
            }
        ],
        safeSites: [
            {
                id: "s-01",
                name: "Option A: Meppadi Plateau North",
                code: "SAFE-MEPPADI-01",
                coords: [11.5510, 76.1310],
                capacity: 950,
                cci: 0.88,
                areaHa: "12.6 Ha",
                slope: "4.8° Flat Terraced",
                tenure: "Revenue Dept. Vested",
                water: "JJM High Yield",
                livelihoodFit: "92%"
            },
            {
                id: "s-02",
                name: "Option B: Vythiri Foothills",
                code: "SAFE-VYTHIRI-02",
                coords: [11.5300, 76.0850],
                capacity: 720,
                cci: 0.84,
                areaHa: "8.4 Ha",
                slope: "9.2° Gentle",
                tenure: "Panchayat Common Land",
                water: "Gravity Fed Stream",
                livelihoodFit: "78%"
            },
            {
                id: "s-03",
                name: "Option C: Sulthan Bathery Plain",
                code: "SAFE-BATHERY-03",
                coords: [11.5850, 76.1750],
                capacity: 2100,
                cci: 0.92,
                areaHa: "22.0 Ha",
                slope: "2.1° Flat Valley",
                tenure: "State Revenue Land",
                water: "Urban Distribution",
                livelihoodFit: "68%"
            }
        ],
        hazardPolygons: [
            // Red Zone Polygon: Steep slope debris path
            {
                zone: "red",
                coords: [
                    [11.5100, 76.1220],
                    [11.5450, 76.1320],
                    [11.5420, 76.1550],
                    [11.5180, 76.1580],
                    [11.5050, 76.1350]
                ],
                label: "RED ZONE HAZARD CORRIDOR (Critical Slope & Landslip)"
            },
            // Orange Zone Polygon: Transition buffer
            {
                zone: "orange",
                coords: [
                    [11.5500, 76.1150],
                    [11.5700, 76.1350],
                    [11.5650, 76.1750],
                    [11.5350, 76.1650],
                    [11.5450, 76.1250]
                ],
                label: "ORANGE ZONE (High Watch Buffer)"
            },
            // Green Safe Zone: Meppadi Stable Plateau
            {
                zone: "green",
                coords: [
                    [11.5460, 76.1240],
                    [11.5580, 76.1240],
                    [11.5580, 76.1380],
                    [11.5460, 76.1380]
                ],
                label: "VALIDATED SAFE RECEIVING ZONE (CCI: 0.88)"
            }
        ]
    },
    chamoli: {
        name: "Chamoli Valley, Uttarakhand",
        center: [30.4000, 79.3300],
        zoom: 12,
        kpi: { redCount: 3, popRisk: "1,420", safeCap: "2,800", houses: 290 },
        villages: [
            {
                id: "v-ch-01",
                name: "Raini Upper Hamlet",
                block: "Joshimath Sub-division",
                zone: "red",
                rpi: 0.91,
                cci: 0.25,
                households: 94,
                population: 460,
                coords: [30.4850, 79.6920],
                safeSite: "Pipalkoti Terraced Safe Site",
                safeDist: "5.2 km",
                safeCap: 1200,
                safeCci: 0.86,
                slope: "43.0°",
                rain72h: "240 mm",
                gsiDist: "30m",
                schools: 1,
                healthCenters: 0,
                priorityNote: "Glacial lake outburst & steep slope scour."
            }
        ],
        safeSites: [],
        hazardPolygons: []
    },
    shimla: {
        name: "Shimla Catchment, Himachal Pradesh",
        center: [31.1048, 77.1734],
        zoom: 12,
        kpi: { redCount: 3, popRisk: "1,150", safeCap: "2,400", houses: 240 },
        villages: [
            {
                id: "v-sh-01",
                name: "Summer Hill Subsidence Zone",
                block: "Shimla Urban Ridge",
                zone: "red",
                rpi: 0.86,
                cci: 0.29,
                households: 110,
                population: 510,
                coords: [31.1120, 77.1420],
                safeSite: "Dhalli South Plateau",
                safeDist: "4.8 km",
                safeCap: 980,
                safeCci: 0.89,
                slope: "38.5°",
                rain72h: "210 mm",
                gsiDist: "50m",
                schools: 2,
                healthCenters: 1,
                priorityNote: "Saturated debris slope; building foundation shearing."
            }
        ],
        safeSites: [],
        hazardPolygons: []
    }
};

// Global App State
let currentDistrict = "wayanad";
let mapInstance = null;
let tileLayerCurrent = null;
let polygonLayers = [];
let markerLayers = [];
let corridorLayers = [];
let selectedVillage = null;
let shapChart = null;

// Tile Providers
const TILE_PROVIDERS = {
    satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    topo: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    initTabNavigation();
    initDistrictSelector();
    initMap();
    initHabitationList();
    initShapChart();
    initInteractiveActions();
    selectVillage("v-01"); // Default select Village A from deck
});

// Tab Switcher & Presentation Shot Mode
function initTabNavigation() {
    const shotButtons = document.querySelectorAll(".shot-btn");
    shotButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");
            switchTab(targetTab);
        });
    });

    // Deep dive button in quick drawer
    const btnDeepDive = document.getElementById("btnDeepDive");
    if (btnDeepDive) {
        btnDeepDive.addEventListener("click", () => {
            switchTab("tab-matcher");
        });
    }

    const btnGenerateMemoQuick = document.getElementById("btnGenerateMemoQuick");
    if (btnGenerateMemoQuick) {
        btnGenerateMemoQuick.addEventListener("click", () => {
            switchTab("tab-dossier");
        });
    }
}

function switchTab(tabId) {
    // Update button states
    document.querySelectorAll(".shot-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-tab") === tabId);
    });

    // Update tab visibility
    document.querySelectorAll(".app-tab").forEach(tab => {
        tab.classList.toggle("active", tab.id === tabId);
    });

    // Leaflet map needs resize trigger when returning to map tab
    if (tabId === "tab-map" && mapInstance) {
        setTimeout(() => {
            mapInstance.invalidateSize();
        }, 100);
    }

    // Window scroll to top of tab
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// District Selector
function initDistrictSelector() {
    const sel = document.getElementById("districtSelect");
    sel.addEventListener("change", (e) => {
        const dist = e.target.value;
        if (DISTRICT_DATA[dist]) {
            currentDistrict = dist;
            updateDistrictView();
        }
    });
}

function updateDistrictView() {
    const data = DISTRICT_DATA[currentDistrict];
    document.getElementById("kpiRedCount").textContent = data.kpi.redCount;
    document.getElementById("kpiPopRisk").textContent = data.kpi.popRisk;
    document.getElementById("kpiSafeCap").textContent = data.kpi.safeCap;

    if (mapInstance) {
        mapInstance.setView(data.center, data.zoom);
        renderMapLayers();
    }
    initHabitationList();
}

// Initialize Leaflet GIS Map
function initMap() {
    const data = DISTRICT_DATA[currentDistrict];
    mapInstance = L.map("hazelyticsMap", {
        center: data.center,
        zoom: data.zoom,
        zoomControl: true,
        attributionControl: false
    });

    // Add base tile layer (Esri Satellite default for realistic aerial hazard view)
    tileLayerCurrent = L.tileLayer(TILE_PROVIDERS.satellite, {
        maxZoom: 18,
        attribution: 'Tiles &copy; Esri, Earthstar Geographics'
    }).addTo(mapInstance);

    // Setup basemap buttons
    document.querySelectorAll(".bm-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".bm-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const type = btn.getAttribute("data-bm");
            mapInstance.removeLayer(tileLayerCurrent);
            tileLayerCurrent = L.tileLayer(TILE_PROVIDERS[type], { maxZoom: 18 }).addTo(mapInstance);
        });
    });

    // Setup layer toggles
    document.getElementById("chkRedZones").addEventListener("change", toggleMapLayers);
    document.getElementById("chkOrangeZones").addEventListener("change", toggleMapLayers);
    document.getElementById("chkSafeSites").addEventListener("change", toggleMapLayers);
    document.getElementById("chkCorridors").addEventListener("change", toggleMapLayers);

    renderMapLayers();
}

// Render Zones, Polygons, Markers, and Transit Corridors
function renderMapLayers() {
    const data = DISTRICT_DATA[currentDistrict];

    // Clear existing layers
    polygonLayers.forEach(l => mapInstance.removeLayer(l));
    markerLayers.forEach(l => mapInstance.removeLayer(l));
    corridorLayers.forEach(l => mapInstance.removeLayer(l));
    polygonLayers = [];
    markerLayers = [];
    corridorLayers = [];

    // 1. Draw Multi-Hazard Polygons
    if (data.hazardPolygons) {
        data.hazardPolygons.forEach(poly => {
            let color = "#ef4444";
            let fillColor = "#ef4444";
            let fillOpacity = 0.35;

            if (poly.zone === "orange") {
                color = "#f97316";
                fillColor = "#f97316";
                fillOpacity = 0.28;
            } else if (poly.zone === "green") {
                color = "#10b981";
                fillColor = "#10b981";
                fillOpacity = 0.35;
            }

            const leafletPoly = L.polygon(poly.coords, {
                color: color,
                weight: 2,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
                dashArray: poly.zone === "green" ? "6, 6" : null
            }).addTo(mapInstance);

            leafletPoly.bindTooltip(`<strong>${poly.label}</strong>`, { sticky: true });
            polygonLayers.push(leafletPoly);
        });
    }

    // 2. Draw Safe Receiving Sites
    if (data.safeSites) {
        data.safeSites.forEach(site => {
            const icon = L.divIcon({
                className: 'custom-pin green-pin',
                html: '<span>SAFE</span>',
                iconSize: [44, 44],
                iconAnchor: [22, 22]
            });

            const marker = L.marker(site.coords, { icon: icon }).addTo(mapInstance);
            marker.bindPopup(`
                <div style="color: #0f172a; font-family: 'Plus Jakarta Sans', sans-serif;">
                    <div style="font-weight: 800; color: #059669; font-size: 13px;">${site.name}</div>
                    <div style="font-size: 11px; margin: 4px 0;"><strong>Buildable Area:</strong> ${site.areaHa}</div>
                    <div style="font-size: 11px; margin: 4px 0;"><strong>Receiving Capacity:</strong> ${site.capacity} people</div>
                    <div style="font-size: 11px; margin: 4px 0;"><strong>Assessed CCI:</strong> <span style="color:#059669; font-weight:700;">${site.cci}</span></div>
                    <div style="font-size: 11px; margin: 4px 0;"><strong>Slope Stability:</strong> ${site.slope}</div>
                </div>
            `);
            markerLayers.push(marker);
        });
    }

    // 3. Draw Village Habitations & Evacuation Corridors
    data.villages.forEach(v => {
        const isRed = v.zone === "red";
        const pinClass = isRed ? "red-pin" : "orange-pin";
        const pinText = isRed ? "RED" : "WARN";

        const icon = L.divIcon({
            className: `custom-pin ${pinClass}`,
            html: `<span>${pinText}</span>`,
            iconSize: isRed ? [38, 38] : [32, 32],
            iconAnchor: isRed ? [19, 19] : [16, 16]
        });

        const marker = L.marker(v.coords, { icon: icon }).addTo(mapInstance);
        marker.on("click", () => {
            selectVillage(v.id);
        });
        marker.bindTooltip(`<strong>${v.name}</strong><br>RPI: ${v.rpi} | CCI: ${v.cci}`, { direction: "top" });
        markerLayers.push(marker);

        // 4. Draw Relocation Flow Lines (Connecting Red Villages to Safe Site)
        if (isRed && data.safeSites && data.safeSites.length > 0) {
            const targetSafe = data.safeSites[0];
            const corridor = L.polyline([v.coords, targetSafe.coords], {
                color: "#38bdf8",
                weight: 2.5,
                dashArray: "6, 8",
                opacity: 0.8
            }).addTo(mapInstance);

            corridor.bindTooltip(`Evacuation Corridor: ${v.name} &rarr; ${targetSafe.name} (${v.safeDist})`, { sticky: true });
            corridorLayers.push(corridor);
        }
    });
}

function toggleMapLayers() {
    const showRed = document.getElementById("chkRedZones").checked;
    const showOrange = document.getElementById("chkOrangeZones").checked;
    const showSafe = document.getElementById("chkSafeSites").checked;
    const showCorridors = document.getElementById("chkCorridors").checked;

    polygonLayers.forEach(poly => {
        mapInstance.removeLayer(poly);
        const col = poly.options.color;
        if (col === "#ef4444" && showRed) mapInstance.addLayer(poly);
        if (col === "#f97316" && showOrange) mapInstance.addLayer(poly);
        if (col === "#10b981" && showSafe) mapInstance.addLayer(poly);
    });

    corridorLayers.forEach(c => {
        if (showCorridors) mapInstance.addLayer(c);
        else mapInstance.removeLayer(c);
    });
}

// Populate Habitation Registry Sidebar
function initHabitationList() {
    const listContainer = document.getElementById("villageListContainer");
    const data = DISTRICT_DATA[currentDistrict];
    listContainer.innerHTML = "";

    // Sort by RPI descending
    const sorted = [...data.villages].sort((a, b) => b.rpi - a.rpi);

    sorted.forEach(v => {
        const item = document.createElement("div");
        item.className = `village-card-item zone-${v.zone} ${selectedVillage && selectedVillage.id === v.id ? 'active' : ''}`;
        item.id = `card-${v.id}`;

        const isHigh = v.rpi >= 0.75;
        item.innerHTML = `
            <div class="vc-top">
                <span class="vc-name">${v.name}</span>
                <span class="vc-rpi ${isHigh ? 'high' : 'med'}">RPI ${v.rpi}</span>
            </div>
            <div class="vc-meta">
                <span>👥 ${v.population} residents (${v.households} HH)</span>
                <span>CCI: <strong>${v.cci}</strong></span>
            </div>
        `;

        item.addEventListener("click", () => {
            selectVillage(v.id);
            mapInstance.flyTo(v.coords, 14, { duration: 1.2 });
        });

        listContainer.appendChild(item);
    });

    // Search filter
    const searchInput = document.getElementById("habitationSearchInput");
    searchInput.addEventListener("input", (e) => {
        const q = e.target.value.toLowerCase();
        document.querySelectorAll(".village-card-item").forEach(card => {
            const txt = card.textContent.toLowerCase();
            card.style.display = txt.includes(q) ? "block" : "none";
        });
    });
}

// Select a Village and Open Quick Drawer / Update Details
function selectVillage(villageId) {
    const data = DISTRICT_DATA[currentDistrict];
    const village = data.villages.find(v => v.id === villageId) || data.villages[0];
    selectedVillage = village;

    // Update active highlight in sidebar
    document.querySelectorAll(".village-card-item").forEach(c => c.classList.remove("active"));
    const activeCard = document.getElementById(`card-${village.id}`);
    if (activeCard) activeCard.classList.add("active");

    // Populate Slide-in Drawer
    const drawer = document.getElementById("villageQuickDrawer");
    drawer.classList.remove("collapsed");

    document.getElementById("drwVillageName").textContent = village.name;
    document.getElementById("drwBlockName").textContent = `${village.block} • Pilot Zone`;
    document.getElementById("drwHh").textContent = village.households;
    document.getElementById("drwPop").textContent = village.population;
    document.getElementById("drwCci").textContent = village.cci;
    document.getElementById("drwRpi").textContent = village.rpi;
    document.getElementById("drwSafeName").textContent = `${village.safeSite} (${village.safeDist})`;

    // Close drawer button
    document.getElementById("closeDrawerBtn").onclick = () => {
        drawer.classList.add("collapsed");
    };
}

// Initialize SHAP Waterfall Chart (Explainable AI)
function initShapChart() {
    const ctx = document.getElementById("shapWaterfallCanvas");
    if (!ctx) return;

    shapChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Base Value (District Mean)',
                'Terrain Slope (39.4°)',
                '72h IMD Rainfall (312mm)',
                'GSI Landslide Scarp (65m)',
                'Colluvium Soil Instability',
                'Road Scour Vulnerability',
                'Vegetation Loss (NDVI drop)',
                'Final Risk Probability'
            ],
            datasets: [{
                label: 'SHAP Feature Contribution (+/-)',
                data: [0.18, 0.28, 0.22, 0.16, 0.10, 0.05, -0.04, 0.87],
                backgroundColor: [
                    '#64748b', // Base
                    '#ef4444', // Slope
                    '#ef4444', // Rain
                    '#ef4444', // Scarp
                    '#ef4444', // Soil
                    '#ef4444', // Scour
                    '#38bdf8', // Buffer veg
                    '#ef4444'  // Final
                ],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const val = context.raw;
                            return ` Attribution: ${val > 0 ? '+' : ''}${val}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8', font: { size: 10 } }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.08)' },
                    ticks: { color: '#94a3b8' },
                    min: 0,
                    max: 1.0
                }
            }
        }
    });
}

// Additional Interactive Scenario Controls
function initInteractiveActions() {
    // 1. Simulation of Monsoonal Surge Button
    const simAlertBtn = document.getElementById("simAlertBtn");
    if (simAlertBtn) {
        simAlertBtn.addEventListener("click", () => {
            // Trigger visual surge alert
            simAlertBtn.innerHTML = "⚡ SIMULATING MONSOON SURGE...";
            simAlertBtn.style.background = "#ef4444";
            simAlertBtn.style.color = "#ffffff";

            setTimeout(() => {
                alert("⚠️ IMD AUTOMATED RADAR ALERT: Intense Cloudburst (+120mm/3hr) registered over Wayanad Ghats! \n\nHAZELYTICS Engine re-ran XGBoost susceptibility model in 2.8s:\n• Village B (Mundakkai) RPI escalated to 0.94\n• Immediate evacuation advisory dispatched to DDMA Emergency Ops Center.");
                simAlertBtn.innerHTML = "⚠️ Monsoonal Surge Active (+120mm)";
                
                // Bump up red KPI
                document.getElementById("kpiRedCount").textContent = "5";
                document.getElementById("kpiPopRisk").textContent = "2,360";
                
                // Update Village A RPI
                document.getElementById("drwRpi").textContent = "0.94";
            }, 500);
        });
    }

    // 2. Collector Executive Sign-off button in Tab 4
    const btnSignRelocationOrder = document.getElementById("btnSignRelocationOrder");
    if (btnSignRelocationOrder) {
        btnSignRelocationOrder.addEventListener("click", () => {
            btnSignRelocationOrder.innerHTML = "✅ Relocation Decree SIGNED & GAZETTED";
            btnSignRelocationOrder.classList.remove("btn-success");
            btnSignRelocationOrder.classList.add("btn-outline");
            btnSignRelocationOrder.disabled = true;

            const docCollectorSig = document.getElementById("docCollectorSig");
            if (docCollectorSig) {
                docCollectorSig.innerHTML = "Anita V., IAS <span style='color:#10b981; font-size:10px;'>[DIGITALLY SIGNED • 27-OCT-2026]</span>";
            }

            alert("🏛️ DISTRICT COLLECTOR / DDMA ORDER SIGNED:\n\nOrder No. DDMA/RELOC/2026/0914-A enacted under Section 34 of the Disaster Management Act, 2005.\nVillage A (Chooralmala Upper) prioritized for immediate planned resettlement to Site Meppadi North.\n\nForm 7-A Dossier is ready for export and inclusion in Hackathon presentation.");
            switchTab("tab-dossier");
        });
    }

    // 3. Drone Re-survey request button
    const btnRequestDrone = document.getElementById("btnRequestDrone");
    if (btnRequestDrone) {
        btnRequestDrone.addEventListener("click", () => {
            alert("🚁 DRONE MISSION TASKED:\nAutonomous LIDAR drone squad deployed to Chooralmala Upper scarp for high-density 3D digital surface modeling (DSM). Telemetry feed synchronized with PostGIS.");
        });
    }

    // 4. Print Dossier PDF button
    const printDossierBtn = document.getElementById("printDossierBtn");
    const printBtn = document.getElementById("printBtn");

    const triggerPrint = () => {
        switchTab("tab-dossier");
        setTimeout(() => {
            window.print();
        }, 300);
    };

    if (printDossierBtn) printDossierBtn.addEventListener("click", triggerPrint);
    if (printBtn) printBtn.addEventListener("click", triggerPrint);

    // Option A selection button in Tab 2
    const btnSelectOptionA = document.getElementById("btnSelectOptionA");
    if (btnSelectOptionA) {
        btnSelectOptionA.addEventListener("click", () => {
            alert("✅ Option A: Meppadi Plateau North confirmed as primary safe receiving destination in the official DDMA resettlement ledger.");
        });
    }
}
