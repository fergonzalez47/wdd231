import { apiFetch } from "./utils.js";

const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const forecast = document.getElementById("forecast");

const apid = "c5cea22d51a8840ccb56f8a97e200db1";
let lat = -33.50397889505999; // Chile
let lon = -70.75781203566946; // Chile
let units = "metric"; // Celsius per defect

export function loadWeatherData() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                await detectCountryAndFetchWeather();
            },
            async (error) => {
                console.error("Could not get location:", error);
                await fetchWeatherData(); // Si falla, usa la lat/lon predeterminada
            }
        );
    } else {
        console.log("Geolocation not supported by this browser.");
        fetchWeatherData();
    }
}

// know the country and adjust units C or F
async function detectCountryAndFetchWeather() {
    try {
        const data = await apiFetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const countryCode = data?.address?.country_code?.toUpperCase();
        if (countryCode === "US") units = "imperial"; // Fahrenheit in USA.
    } catch (error) {
        console.error("Error al obtener el país:", error);
    } finally {
        fetchWeatherData();
    }
}

// get weather data
async function fetchWeatherData() {
    try {
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apid}`;
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apid}`;

        const [currentWeather, forecastData] = await Promise.all([
            apiFetch(urlWeather),
            apiFetch(urlForecast)
        ]);

        displayWeather(currentWeather);
        displayForecast(forecastData?.list);
    } catch (error) {
        console.error("Error getting weather data:", error);
    }
}

// show current weather
function displayWeather(data) {
    if (!data) return console.error("No hay datos de clima disponibles.");

    const tempUnit = units === "metric" ? "°C" : "°F";
    const windUnit = units === "metric" ? "m/s" : "mph";

    weather.innerHTML = `
        <p>Temperature: ${data.main.temp}${tempUnit}</p>
        <p>${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} ${windUnit}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", data.weather[0].description);
}

// show forecast
function displayForecast(list) {
    if (!list) return console.error("No available data");

    forecast.innerHTML = "";
    list.filter((_, index) => index % 8 === 0).slice(1, 5).forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
        const tempUnit = units === "metric" ? "°C" : "°F";

        forecast.innerHTML += `
            <div>
                <h4>${date}</h4>
                <p>Temperature: ${day.main.temp}${tempUnit}</p>
                <p>Wind: ${day.wind.speed} m/s</p>
            </div>
        `;
    });
}


