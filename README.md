# 🛰️ HAZELYTICS — Decode the Risk. Relocate in Time.

### Smart India Hackathon (SIH) 2026 Prototype
- **Problem Statement ID:** `SIH26191`
- **Problem Statement Title:** *Intelligent Identification of Hazard-Based Red Zones, Carrying Capacity Assessment, and Immediate Relocation Needs for Vulnerable Habitations*
- **Theme:** Disaster Management
- **Category:** Software
- **Team Name:** DISASTER DECODED
- **Team ID:** `198035`

---

## 📌 Executive Summary

Every monsoon, hill habitations across the Western Ghats and Himalayan catchments face catastrophic landslides, flash floods, and slope subsidence. Current disaster response relies heavily on single-hazard, coarse static maps and delayed post-event manual surveys.

**HAZELYTICS** is a multi-hazard spatial decision-support system designed for **SDMAs, DDMAs, District Collectors, and NDMA** that:
1. **Fuses Earth Observation & Ground Data:** Combines Sentinel-1/2, SRTM/Cartosat DEM, IMD 72-hour rainfall radar, GSI landslide inventory, and BIS Seismic Zone IV/V data.
2. **Automates Red Zone Identification:** Applies ensemble ML (XGBoost + Random Forest) achieving **0.89+ AUC-ROC** to classify habitations into Red, Orange, Yellow, and Safe zones.
3. **Quantifies Carrying Capacity Deficit (CCI):** Dynamically computes existing habitation capacity vs safe receiving capacity based on buildable land area, slope stability (<15°), drinking water yields, and road connectivity.
4. **Computes Relocation Priority Index (RPI):** Algorithmic ranking prioritizes villages requiring pre-emptive, evidence-led relocation.
5. **AHP + GIS Safe Site Recommendation Engine:** Matches displaced habitations with optimal, nearby government-vested receiving sites while preserving community livelihood continuity.
6. **Explainable AI (XAI / SHAP):** Provides auditable feature attribution (SHAP values) for judicial and administrative transparency.
7. **Human-in-the-Loop Field Verification:** Mobile GPS sync for Revenue Inspectors and a standardized **Form 7-A Relocation Directive** export for District Collector sign-off under Section 34 of the Disaster Management Act, 2005.

---

## 📸 Key Prototype Modules (Screenshot Modes)

The prototype includes 5 interactive presentation modules aligned with the SIH presentation deck:

1. **🛰️ GIS Hazard & Red Zones Command:** Real-time satellite/DEM hillshade canvas with Red, Orange, and Green zones, interactive habitation pins, and evacuation corridors.
2. **🏘️ Village A & Relocation Matcher:** Illustrative case study of *Village A (Chooralmala Upper)*: 142 households, 680 people, CCI 0.31 vs 0.88 target, RPI 0.87, matched to Meppadi Plateau North (2.4 km away).
3. **🧠 Explainable AI (XAI) & SHAP Engine:** Visual feature attribution breakdown explaining why a red zone was flagged (Slope +0.28, Rainfall +0.22, GSI Fault +0.16) with Model AUC 0.892 and U-Net IoU 0.841.
4. **📱 Mobile Field GPS & Ground Truth:** Simulated field officer application with geotagged photo evidence of slope displacement and DDMA verification trail.
5. **📄 Official Relocation Directive (Form 7-A):** Standardized government decree formatted for District Magistrate/Collector signature and PDF export.

---

## 🚀 Running the Prototype Locally

### Prerequisites
- Node.js (v18+)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/aditya303023/SIH-PROJECT.git
cd SIH-PROJECT

# Run the local server
node server.js
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🛠️ Technology Stack
- **Frontend / GIS:** HTML5, CSS3 (Glassmorphism, Dark Command Center Design System), Vanilla JavaScript (ES6+)
- **Mapping & Geospatial:** Leaflet.js with Esri World Imagery, OpenTopoMap, and CartoDB Dark basemaps
- **Data Visualization & XAI:** Chart.js (SHAP waterfall charts, capacity indices)
- **Data & Model Pipelines (Architecture):** Python, GeoPandas, Rasterio, GDAL, Scikit-learn, PyTorch, FastAPI, PostGIS, Docker, Flutter (Field App)

---

## 👥 Team: DISASTER DECODED
- **Team ID:** 198035
- **Hackathon:** Smart India Hackathon (SIH) 2026
