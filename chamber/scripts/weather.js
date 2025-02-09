const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const forecast = document.getElementById("forecast");
const businessList = document.getElementById("business-list");


const lat = -33.50397889505999;
const lon = -70.75781203566946;
const apid = "c5cea22d51a8840ccb56f8a97e200db1";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apid}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apid}`;
const urlSpotlight = `./data/members.json`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
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
        const date = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
        const temp = day.main.temp;
        const wind = day.wind.speed;
        const iconUrl = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;


        forecast.innerHTML +=
            `<div>
        <h4>${date}</h4>
        <p>Temperature: ${temp}&deg;C</p>
        <p>Wind:  ${wind}</p>
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


    const spotlight = await apiFetch(urlSpotlight);
    const filteredSpotlight = spotlight.companies.filter((company) => company.membership_level >= 2)
    const randomSpotlight = getRamdonItems(filteredSpotlight, 3);
    displaySpotLight(randomSpotlight);


}




function getRamdonItems(array, amount) {
    const newArray = [...array].sort(() => 0.5 - Math.random(0, 1));
    return newArray.slice(0, amount);
}


function displaySpotLight(array) {

    array.forEach(spotlight => {
        businessList.innerHTML += 
        `<figure>
            <img src="${spotlight.image}" alt="">
            <figcaption>
            <h4><span class="spot-inf">${spotlight.name}</span></h4>
            <p><span class="spot-key">Phone:</span> <span class="spot-inf">${spotlight.phone}</span></p>
            <p><span class="spot-key">Address:</span> <span class="spot-inf">${spotlight.address}</span></p>
            <p><span class="spot-key">Website:</span> <span class="spot-inf">${spotlight.website}</span></p>
            <p><span class="spot-key">Membership Level:</span> <span class="spot-inf">${spotlight.membership_level}</span></p>
            </figcaption>
        </figure>`;
    });
}

loadWeatherData();