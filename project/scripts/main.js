import { apiFetch, displayServices } from "./utils.js";  
import { loadWeatherData } from "./weather.js";
const servicesPath = "scripts/features.json";

const services = await apiFetch(servicesPath); 
const keyFeatures = document.getElementById("key-features");
displayServices(services.services, keyFeatures);

// Init
loadWeatherData();