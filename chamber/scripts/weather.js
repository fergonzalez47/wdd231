const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const forecast = document.getElementById("forecast");

const lat = -33.50397889505999;
const lon = -70.75781203566946;
const apid = "c5cea22d51a8840ccb56f8a97e200db1";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apid}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apid}`;


async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);
        return data;

    } catch (error) {
        console.error("Fetch error:", error);
    }
}

function displayResults(data) {
    if (!data) {
        console.error("No data available to display.");
        return;
    }

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = data.weather[0].description;

    weather.innerHTML = `
        <p>Temperature: ${data.main.temp}&deg;C</p>
        <p>${description}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `Weather icon for ${description}`);
}



function displayForecast(list) {
    list.forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString("en-EN");
        const temp = day.main.temp;
        const wind = day.wind.speed;
        const description = day.weather[0].description;


        forecast.innerHTML +=
            `<div>
        <h4>${date}</h4>
        <p>Temperature: ${temp}&deg;C</p>
        <p>Wind:  ${wind}</p>
        <p>${description}</p>
        </div>`;

    });
}




async function loadWeatherData() {
    const currentWeather = await apiFetch(url);
    displayResults(currentWeather);

    const forecastData = await apiFetch(urlForecast);

    if (forecastData && forecastData.list) {
        const filteredForecastData = forecastData.list
            .filter((_, index) => index % 8 === 0) // Filtrar cada 8 registros (1 por día)
            .slice(1, 5); // Tomar solo los primeros 4 días

        displayForecast(filteredForecastData);
    }
}

loadWeatherData();