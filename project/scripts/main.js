import { apiFetch, displayServices } from "./utils.js";  
const servicesPath = "scripts/features.json";

const services = await apiFetch(servicesPath); 
const keyFeatures = document.getElementById("key-features");
displayServices(services.services, keyFeatures);
