import { handleNavbarScroll } from "./navscroll.js";
import { apiFetch, displayServices, inputPhoneNumber } from "./utils.js";
import { loadWeatherData } from "./weather.js";
import { displayInf } from "./thanks.js";
import { renderServices } from "./services.js";




const servicesPath = "scripts/features.json";

if (document.getElementById("key-features")) {
    console.log("keyFeatures");
    const services = await apiFetch(servicesPath);
    const keyFeatures = document.getElementById("key-features");
    displayServices(services.services, keyFeatures);
}



//check if the input number exists
window.addEventListener("load", () => {
    if (document.getElementById("phone")) {
        inputPhoneNumber();
        console.log("si");
    }
    const weather = document.getElementById("weather");

    if (weather) {
        loadWeatherData();
    }


    if (document.getElementById("received-inf")) {
        displayInf();
    }


    const timestampInput = document.getElementById("timestamp");
    // Asigna el valor actual de tiempo (timestamp en milisegundos) al campo oculto del formulario mio
    if (timestampInput) {
        timestampInput.value = new Date().getTime();
    }

    const servicesContainer = document.getElementById('services');
    if (servicesContainer) {
        renderServices();
    }
});




// document.addEventListener("DOMContentLoaded", () => {
//     handleNavbarScroll();
// });
